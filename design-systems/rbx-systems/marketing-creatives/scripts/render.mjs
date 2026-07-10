#!/usr/bin/env node
// render.mjs · Programmatic creative renderer for RBX Voltage.
// Loads an HTML template, replaces {{PLACEHOLDER}} tokens from a variants file,
// renders at declared viewports per channel via Playwright, screenshots to
// exports/<channel>/, validates dimensions.
//
// Usage:
//   node scripts/render.mjs --template insight-card --variant b2b-mod-001
//   node scripts/render.mjs --all                       # all channels, all variants
//   node scripts/render.mjs --all --channel=linkedin    # one channel
//
// Source of truth: tokens.css (Brand Voltage). Templates: templates/*.html.
// Variants: scripts/variants.json. Output: exports/<channel>/<template>__<variant>__<w>x<h>.png
//
// Requires: npx playwright install chromium  (see README)

import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Channel -> template -> declared viewports (px).
// meta: IG/FB (1:1, 4:5, 9:16 stories/reels).
// linkedin: feed 1:1, landscape link ad 1.91:1 (1200x627), vertical 4:5.
//   (LinkedIn carousel slides reuse 1:1; post-vertical is portrait so no landscape.)
const CHANNEL_VIEWPORTS = {
  meta: {
    'insight-card':     [{ w: 1080, h: 1080, tag: '1x1' }, { w: 1080, h: 1350, tag: '4x5' }],
    'carousel-cover':   [{ w: 1080, h: 1080, tag: '1x1' }],
    'post-vertical':    [{ w: 1080, h: 1920, tag: '9x16' }, { w: 1080, h: 1350, tag: '4x5' }],
  },
  linkedin: {
    'insight-card':     [{ w: 1080, h: 1080, tag: '1x1' }, { w: 1200, h: 627, tag: '1.91x1' }],
    'carousel-cover':   [{ w: 1080, h: 1080, tag: '1x1' }],
    'post-vertical':    [{ w: 1080, h: 1350, tag: '4x5' }],
  },
};

const CHANNELS = Object.keys(CHANNEL_VIEWPORTS);

function loadVariants() {
  const p = join(__dirname, 'variants.json');
  if (!existsSync(p)) { console.warn('no variants.json; using defaults from templates'); return {}; }
  return JSON.parse(readFileSync(p, 'utf8'));
}

function fill(html, vars) {
  let out = html;
  for (const [k, v] of Object.entries(vars)) {
    out = out.replaceAll(`{{${k}}}`, String(v ?? ''));
  }
  // Turn a bullets array into <li> rows.
  if (Array.isArray(vars.BULLETS)) {
    const lis = vars.BULLETS.map(b => `<li style="display:flex; gap:24px; align-items:flex-start;"><span style="color:var(--cyan-brand); font-family:var(--font-mono); font-size:28px; line-height:1.3;">/</span><span class="body" style="font-size:32px; max-width:780px;">${b}</span></li>`).join('\n      ');
    out = out.replaceAll('{{BULLETS}}', lis);
  }
  return out;
}

async function renderOne(browser, channel, template, variantName, vars) {
  const tplPath = join(ROOT, 'templates', `${template}.html`);
  if (!existsSync(tplPath)) throw new Error(`template not found: ${tplPath}`);
  const html = fill(readFileSync(tplPath, 'utf8'), vars);
  // Inline tokens.css: under setContent (about:blank) a relative <link href> does
  // not resolve to a fetchable URL, so the stylesheet would not load. Inlining
  // guarantees the CSS applies and the .stage element sizes to the viewport.
  const tokens = readFileSync(join(ROOT, 'templates', 'tokens.css'), 'utf8');
  const selfContained = html.replace(
    /<link[^>]*href=["']tokens\.css["'][^>]*>/g,
    `<style>${tokens}</style>`,
  );

  const viewports = CHANNEL_VIEWPORTS[channel][template];
  if (!viewports) {
    console.warn(`skip  ${channel}/${template}/${variantName}: no viewports declared`);
    return;
  }

  const outDir = join(ROOT, 'exports', channel);
  mkdirSync(outDir, { recursive: true });

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h }, deviceScaleFactor: 2 });
    await page.setContent(selfContained, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    // Validate rendered dimensions match the declared viewport.
    const box = await page.evaluate(() => {
      const s = document.querySelector('.stage');
      const r = s.getBoundingClientRect();
      return { w: Math.round(r.width), h: Math.round(r.height) };
    });
    if (box.w !== vp.w || box.h !== vp.h) {
      throw new Error(`dimension mismatch for ${channel}/${template}/${variantName}: expected ${vp.w}x${vp.h}, stage is ${box.w}x${box.h}`);
    }

    const outFile = join(outDir, `${template}__${variantName}__${vp.tag}.png`);
    await page.screenshot({ path: outFile, clip: { x: 0, y: 0, width: vp.w, height: vp.h } });
    await page.close();
    console.log(`ok  ${channel}/${template}/${variantName} ${vp.tag} ${vp.w}x${vp.h} -> ${outFile}`);
  }
}

async function main() {
  const args = Object.fromEntries(process.argv.slice(2).map(a => {
    const [k, ...v] = a.replace(/^--/, '').split('=');
    return [k, v.join('=') || true];
  }));
  const variants = loadVariants();

  const channels = args.channel ? [String(args.channel)] : CHANNELS;
  for (const ch of channels) {
    if (!CHANNEL_VIEWPORTS[ch]) throw new Error(`unknown channel: ${ch} (expected ${CHANNELS.join('|')})`);
  }

  const browser = await chromium.launch();
  try {
    if (args.all) {
      for (const channel of channels) {
        for (const [tpl, map] of Object.entries(variants)) {
          for (const [name, vars] of Object.entries(map)) {
            await renderOne(browser, channel, tpl, name, vars);
          }
        }
      }
    } else if (args.template) {
      const tpl = String(args.template);
      const name = args.variant ? String(args.variant) : 'default';
      const vars = (variants[tpl] && variants[tpl][name]) || {};
      for (const channel of channels) {
        await renderOne(browser, channel, tpl, name, vars);
      }
    } else {
      console.log('usage: --template <name> [--variant <name>] [--channel <name>] | --all [--channel <name>]');
    }
  } finally {
    await browser.close();
  }
}

main().catch(e => { console.error(e); process.exit(1); });
