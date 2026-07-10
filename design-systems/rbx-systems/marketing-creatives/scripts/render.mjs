#!/usr/bin/env node
// render.mjs · Programmatic creative renderer for RBX Voltage.
// Loads an HTML template, replaces {{PLACEHOLDER}} tokens from a variants file,
// renders at a declared viewport via Playwright, screenshots to exports/, validates dimensions.
//
// Usage:
//   node scripts/render.mjs --template insight-card --variant b2b-mod-001
//   node scripts/render.mjs --all
//
// Source of truth: tokens.css (Brand Voltage). Templates: templates/*.html.
// Variants: scripts/variants.json. Output: exports/<template>__<variant>__<w>x<h>.png
//
// Requires: npx playwright install chromium  (see README)

import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Template -> declared viewports (px). Formats required by the campaign.
const VIEWPORTS = {
  'insight-card':     [{ w: 1080, h: 1080, tag: '1x1' }, { w: 1080, h: 1350, tag: '4x5' }],
  'carousel-cover':   [{ w: 1080, h: 1080, tag: '1x1' }],
  'post-vertical':    [{ w: 1080, h: 1920, tag: '9x16' }, { w: 1080, h: 1350, tag: '4x5' }],
};

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

async function renderOne(browser, template, variantName, vars) {
  const tplPath = join(ROOT, 'templates', `${template}.html`);
  if (!existsSync(tplPath)) throw new Error(`template not found: ${tplPath}`);
  const html = fill(readFileSync(tplPath, 'utf8'), vars);

  const viewports = VIEWPORTS[template];
  if (!viewports) throw new Error(`no viewports declared for template ${template}`);

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h }, deviceScaleFactor: 2 });
    await page.route('**/tokens.css', route => route.fulfill({ body: readFileSync(join(ROOT, 'templates', 'tokens.css'), 'utf8'), contentType: 'text/css' }));
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    // Validate rendered dimensions match the declared viewport.
    const box = await page.evaluate(() => {
      const s = document.querySelector('.stage');
      const r = s.getBoundingClientRect();
      return { w: Math.round(r.width), h: Math.round(r.height) };
    });
    if (box.w !== vp.w || box.h !== vp.h) {
      throw new Error(`dimension mismatch for ${template}/${variantName}: expected ${vp.w}x${vp.h}, stage is ${box.w}x${box.h}`);
    }

    const outFile = join(ROOT, 'exports', `${template}__${variantName}__${vp.tag}.png`);
    await page.screenshot({ path: outFile, clip: { x: 0, y: 0, width: vp.w, height: vp.h } });
    await page.close();
    console.log(`ok  ${template}/${variantName} ${vp.tag} ${vp.w}x${vp.h} -> ${outFile}`);
  }
}

async function main() {
  const args = Object.fromEntries(process.argv.slice(2).map(a => {
    const [k, ...v] = a.replace(/^--/, '').split('=');
    return [k, v.join('=') || true];
  }));
  const variants = loadVariants();
  mkdirSync(join(ROOT, 'exports'), { recursive: true });

  const browser = await chromium.launch();
  try {
    if (args.all) {
      for (const [tpl, map] of Object.entries(variants)) {
        for (const [name, vars] of Object.entries(map)) {
          await renderOne(browser, tpl, name, vars);
        }
      }
    } else if (args.template) {
      const name = args.variant || 'default';
      const vars = (variants[args.template] && variants[args.template][name]) || {};
      await renderOne(browser, args.template, name, vars);
    } else {
      console.log('usage: --template <name> [--variant <name>] | --all');
    }
  } finally {
    await browser.close();
  }
}

main().catch(e => { console.error(e); process.exit(1); });
