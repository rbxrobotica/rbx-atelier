import { chromium } from 'playwright';
import { readFileSync, renameSync, unlinkSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FORMATS, fileHash, pngDimensions, atomicJSON, piecePath, validatePiece, renderInputHash } from './core.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BRAND = resolve(ROOT, '..');
const escape = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const font = (family, packageName, weight) => {
  const bytes = readFileSync(join(ROOT,'node_modules','@fontsource',packageName,'files',`${packageName}-latin-${weight}-normal.woff2`));
  return `@font-face{font-family:'${family}';src:url(data:font/woff2;base64,${bytes.toString('base64')}) format('woff2');font-weight:${weight};font-style:normal;font-display:block}`;
};

function visual(layout) {
  if (layout === 'horizon') return `<div class="diagram horizon" aria-hidden="true"><div class="sun"></div><div class="horizon-line"></div><div class="diagram-label">LEITURA / CONTEXTO / PREPARAÇÃO</div></div>`;
  if (layout === 'index') return `<div class="diagram index" aria-hidden="true"><div><b>01</b><span>CONTEXTO</span></div><div><b>02</b><span>CENÁRIOS</span></div><div><b>03</b><span>INVALI­DAÇÃO</span></div></div>`;
  return `<div class="diagram rule" aria-hidden="true"><div class="rule-top">PLANO DE VOO</div><div class="rule-mark">∕</div><div class="rule-bottom">CONDIÇÕES DE NÃO OPERAÇÃO</div></div>`;
}

export function htmlFor(piece) {
  const cssTokens = readFileSync(join(BRAND,'colors_and_type.css'),'utf8');
  const lockup = readFileSync(join(BRAND,'assets','satwake-lockup.svg')).toString('base64');
  const [w,h] = FORMATS[piece.format];
  const f = font('Newsreader','newsreader',500)+font('IBM Plex Sans','ibm-plex-sans',400)+font('IBM Plex Sans','ibm-plex-sans',600)+font('IBM Plex Mono','ibm-plex-mono',400)+font('IBM Plex Mono','ibm-plex-mono',600);
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>${f}${cssTokens}
  *{box-sizing:border-box}html,body{margin:0;padding:0;width:${w}px;height:${h}px;overflow:hidden}
  .stage{position:relative;display:flex;flex-direction:column;width:${w}px;height:${h}px;padding:70px 78px 64px;background:var(--sw-bg);color:var(--sw-ink);font-family:var(--sw-font-sans);overflow:hidden}
  .stage:before{content:'';position:absolute;top:0;left:0;right:0;height:10px;background:var(--sw-action)}
  header{display:flex;justify-content:space-between;align-items:center;gap:30px;padding-bottom:25px;border-bottom:2px solid var(--sw-line)}
  header img{width:238px;height:auto;display:block}.series{font:600 18px var(--sw-font-mono);letter-spacing:.08em;color:var(--sw-predawn)}
  .hero{margin-top:66px}.eyebrow{font:600 22px var(--sw-font-mono);letter-spacing:.1em;color:var(--sw-action-strong);text-transform:uppercase}
  h1{font:500 82px/1.04 var(--sw-font-display);letter-spacing:-.025em;margin:30px 0 28px;max-width:920px}
  .body{font:400 31px/1.35 var(--sw-font-sans);color:var(--sw-ink-2);margin:0;max-width:850px}
  .diagram{margin:auto 0;position:relative;min-height:270px;max-height:400px}
  .horizon{background:linear-gradient(to bottom,transparent 71%,var(--sw-line) 71%,var(--sw-line) 72%,transparent 72%)}
  .sun{position:absolute;width:240px;height:120px;border-radius:240px 240px 0 0;background:var(--sw-sunrise);bottom:28%;left:50%;transform:translateX(-50%)}
  .horizon-line{position:absolute;height:4px;background:var(--sw-predawn);left:3%;right:3%;bottom:28%}.diagram-label{position:absolute;bottom:7%;left:3%;font:18px var(--sw-font-mono);letter-spacing:.12em;color:var(--sw-ink-3)}
  .index{border-top:3px solid var(--sw-predawn);border-bottom:3px solid var(--sw-predawn);display:flex;flex-direction:column;justify-content:center}.index>div{display:flex;align-items:center;border-bottom:1px solid var(--sw-line);padding:17px 10px;gap:38px}.index>div:last-child{border:0}.index b{font:500 42px var(--sw-font-display);color:var(--sw-action-strong)}.index span{font:600 27px var(--sw-font-mono);letter-spacing:.08em}
  .rule{border:2px solid var(--sw-predawn);display:flex;flex-direction:column;justify-content:space-between;padding:25px 35px}.rule-top,.rule-bottom{font:600 20px var(--sw-font-mono);letter-spacing:.12em;color:var(--sw-predawn)}.rule-mark{font:500 130px/1 var(--sw-font-display);text-align:center;color:var(--sw-action)}
  footer{border-top:2px solid var(--sw-line);padding-top:25px;display:flex;justify-content:space-between;align-items:end;gap:20px}
  .cta{display:inline-block;background:var(--sw-action);color:white;padding:19px 28px;font:600 23px var(--sw-font-sans);border-radius:6px}.footnote{text-align:right;color:var(--sw-ink-3);font:18px/1.3 var(--sw-font-mono)}
  .f-4x5 .hero{margin-top:84px}.f-4x5 .diagram{min-height:350px;max-height:450px}.f-9x16{padding:100px 84px 85px}.f-9x16 .hero{margin-top:120px}.f-9x16 h1{font-size:105px;margin:50px 0 38px}.f-9x16 .body{font-size:37px}.f-9x16 .diagram{min-height:500px;max-height:650px}.f-9x16 .sun{width:370px;height:185px}.f-9x16 .index>div{padding:40px 16px}.f-9x16 .index b{font-size:64px}.f-9x16 .index span{font-size:31px}.f-9x16 .rule-mark{font-size:220px}
  </style></head><body><main class="stage f-${piece.format}"><header><img src="data:image/svg+xml;base64,${lockup}" alt="satwake"><span class="series check-text">PLANO DE VOO / BTC</span></header><section class="hero"><div class="eyebrow check-text">${escape(piece.copy.eyebrow)}</div><h1 class="check-text">${escape(piece.copy.headline)}</h1><p class="body check-text">${escape(piece.copy.body)}</p></section>${visual(piece.layout)}<footer><span class="cta check-text">${escape(piece.copy.cta)}</span><span class="footnote check-text">MATERIAL DE PREPARAÇÃO<br>NÃO É RECOMENDAÇÃO FINANCEIRA</span></footer></main></body></html>`;
}

export async function renderPending(batchDir, manifest, {resume=false}={}) {
  const browser = await chromium.launch({headless:true});
  try {
    mkdirSync(join(batchDir,'files'),{recursive:true});
    for (const piece of manifest.pieces) {
      const path = piecePath(batchDir,piece);
      if (existsSync(path)) {
        const current = validatePiece(manifest,batchDir,piece);
        if (piece.file.sha256 && current.pass) continue;
        if (resume && !piece.file.sha256) unlinkSync(path); // interrupted after rename, before manifest checkpoint
        else
        throw new Error(`existing file differs or failed validation: ${path}; use a new brief version or inspect the batch`);
      }
      const page = await browser.newPage({viewport:{width:piece.file.width,height:piece.file.height},deviceScaleFactor:piece.file.deviceScaleFactor});
      try {
        await page.setContent(htmlFor(piece),{waitUntil:'load'});
        await page.evaluate(() => document.fonts.ready);
        const proof = await page.evaluate(() => {
          const stage = document.querySelector('.stage').getBoundingClientRect();
          const text = [...document.querySelectorAll('.check-text')];
          const boxes = text.map(el => ({label:el.textContent.slice(0,30),rect:el.getBoundingClientRect(),scrollW:el.scrollWidth,clientW:el.clientWidth,scrollH:el.scrollHeight,clientH:el.clientHeight}));
          const details = [];
          const textFits = boxes.every(x => {
            const ok = x.rect.left >= stage.left && x.rect.right <= stage.right && x.rect.top >= stage.top && x.rect.bottom <= stage.bottom && x.scrollW <= x.clientW+1 && x.scrollH <= x.clientH+1;
            if (!ok) details.push(`text outside stage: ${x.label}`);
            return ok;
          });
          let noOverlap = true;
          for (let i=0;i<boxes.length;i++) for (let j=i+1;j<boxes.length;j++) {
            const a=boxes[i].rect,b=boxes[j].rect;
            if (Math.min(a.right,b.right)-Math.max(a.left,b.left)>3 && Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>3) { noOverlap=false;details.push(`overlap: ${boxes[i].label} / ${boxes[j].label}`); }
          }
          const fontsLoaded = document.fonts.check('500 64px Newsreader') && document.fonts.check('400 24px "IBM Plex Sans"') && document.fonts.check('400 18px "IBM Plex Mono"');
          if (!fontsLoaded) details.push('font not loaded');
          const bg = getComputedStyle(document.querySelector('.stage')).backgroundColor;
          const brandTokensMatch = bg === 'rgb(247, 245, 240)';
          if (!brandTokensMatch) details.push(`unexpected background ${bg}`);
          return {fontsLoaded,textFits,noOverlap,brandTokensMatch,details,stage:{width:stage.width,height:stage.height}};
        });
        if (proof.stage.width !== piece.file.width || proof.stage.height !== piece.file.height || !proof.fontsLoaded || !proof.textFits || !proof.noOverlap || !proof.brandTokensMatch) throw new Error(`render validation failed for ${piece.id}: ${JSON.stringify(proof)}`);
        const temp = `${path}.tmp.png`;
        if (existsSync(temp)) unlinkSync(temp);
        await page.screenshot({path:temp,clip:{x:0,y:0,width:piece.file.width,height:piece.file.height}});
        const [actualW,actualH] = pngDimensions(temp);
        if (actualW !== piece.file.width*piece.file.deviceScaleFactor || actualH !== piece.file.height*piece.file.deviceScaleFactor) throw new Error(`PNG dimension mismatch: viewport ${piece.file.width}×${piece.file.height} × DPR ${piece.file.deviceScaleFactor} yielded ${actualW}×${actualH}`);
        renameSync(temp,path);
        piece.file.sha256 = fileHash(path);
        piece.render = {...proof,inputSha256:renderInputHash(piece,manifest.brand)};
        atomicJSON(join(batchDir,'manifest.json'),manifest);
      } finally { await page.close(); }
    }
  } finally { await browser.close(); }
}
