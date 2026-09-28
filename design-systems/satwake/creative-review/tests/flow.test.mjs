import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, copyFileSync, unlinkSync, appendFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { once } from 'node:events';
import { spawnSync } from 'node:child_process';
import { loadBrief, makeManifest, atomicJSON, batchView, readManifest, piecePath, pngDimensions } from '../scripts/core.mjs';
import { renderPending } from '../scripts/render.mjs';
import { serve } from '../scripts/server.mjs';

const ROOT=resolve(import.meta.dirname,'..');
const disclaimer='Este briefing é material de preparação operacional e governança. Não constitui recomendação de investimento, sinal de trading ou orientação financeira. A decisão de operar é exclusiva do operador humano. Este produto não gera ordens, não recomenda compra/venda e não aciona sistemas de execução.';
function fixture(root,headline='Leitura de preparação.') {
  mkdirSync(root,{recursive:true});writeFileSync(join(root,'source.txt'),'Canonical fixture: format is a preparation reading.');
  const brief={schemaVersion:1,campaign:{id:'satwake_h1_preparacao',version:'fixture-v1',hypothesisId:'H1'},audience:{id:'btc_preparacao',description:'BTC readers'},objective:'Review format',offer:'View format',destination:'https://example.test/ritual',formats:['1x1','4x5'],maxVariants:2,sources:[{id:'canonical',path:'source.txt'}],facts:[{id:'format',text:'Preparation format',sourceIds:['canonical']}],attribution:{source:'instagram',medium:'social_paid',term:'btc_preparacao'},editorial:{requiredDisclaimer:disclaimer,prohibitedClaims:['lucro garantido']},identity:{system:'satwake',version:'0.1.0'},concepts:[{id:'reading',hypothesis:'A format explanation is useful',factIds:['format'],messages:[{id:'m1',eyebrow:'PREPARAÇÃO',headline,body:'Contexto e condições em uma leitura organizada.',primaryText:`Conheça o formato de leitura.\n\n${disclaimer}`,cta:'Ver o formato',utmContent:'satwake_h1_reading_901'}],visuals:[{id:'v1',layout:'horizon'}]}]};
  const path=join(root,'brief.json');writeFileSync(path,JSON.stringify(brief));return {path,brief};
}
function createBatch(input,out) {const data=loadBrief(input);const dir=join(out,data.batchId);mkdirSync(dir,{recursive:true});atomicJSON(join(dir,'manifest.json'),makeManifest(data));return dir;}
function cli(...args){return spawnSync(process.execPath,[join(ROOT,'scripts/creative.mjs'),...args],{cwd:ROOT,encoding:'utf8'});}
async function post(base,action,pieceIds,comment=''){const r=await fetch(`${base}/api/decisions`,{method:'POST',headers:{'Content-Type':'application/json','Origin':base},body:JSON.stringify({actor:'Fixture reviewer',action,pieceIds,comment})});return {status:r.status,body:await r.json()};}

test('rejects invalid brief and preserves separate batch identities',()=>{
  const root=mkdtempSync(join(tmpdir(),'satwake-input-'));
  const {path,brief}=fixture(root);
  const a=loadBrief(path);brief.concepts[0].messages[0].headline='Outro enquadramento.';writeFileSync(path,JSON.stringify(brief));const b=loadBrief(path);
  assert.notEqual(a.batchId,b.batchId);
  assert.notEqual(makeManifest(a).pieces[0].id,makeManifest(b).pieces[0].id);
  brief.concepts[0].messages[0].headline='{{PLACEHOLDER}}';writeFileSync(path,JSON.stringify(brief));assert.throws(()=>loadBrief(path),/editorial violation/);
  brief.concepts[0].messages[0].headline='Texto';brief.concepts[0].messages[0].utmContent='bad';writeFileSync(path,JSON.stringify(brief));assert.throws(()=>loadBrief(path),/invalid utmContent/);
});

test('renders, persists decisions, invalidates changed content, exports only exact approved files, and resumes partial work',async()=>{
  const root=mkdtempSync(join(tmpdir(),'satwake-flow-'));
  const {path}=fixture(join(root,'input'));
  const dir=createBatch(path,join(root,'batches'));
  let manifest=readManifest(dir);
  await renderPending(dir,manifest);
  let view=batchView(dir);
  assert.equal(view.pieces.length,2);assert(view.pieces.every(p=>p.validation.pass));
  assert.deepEqual(pngDimensions(piecePath(dir,view.pieces[0])),[1080,1080]);
  assert.deepEqual(pngDimensions(piecePath(dir,view.pieces[1])),[1080,1350]);
  assert.equal(cli('export','--batch',dir,'--out',join(root,'empty-export')).status,1);
  assert.equal(existsSync(join(root,'empty-export')),false);

  let server=serve(dir,0);await once(server,'listening');let base=`http://127.0.0.1:${server.address().port}`;
  const [approved,rejected]=view.pieces;
  assert.equal((await post(base,'approve',[approved.id])).status,200);
  assert.equal((await post(base,'reject',[rejected.id],'Copy precisa de revisão.')).status,200);
  assert.equal((await post(base,'approve',['unknown'])).status,400);
  await new Promise(done=>server.close(done));
  server=serve(dir,0);await once(server,'listening');base=`http://127.0.0.1:${server.address().port}`;
  const persisted=await (await fetch(`${base}/api/batch`)).json();
  assert.equal(persisted.pieces[0].review.status,'approve');assert.equal(persisted.pieces[1].review.status,'reject');
  await new Promise(done=>server.close(done));

  const exportDir=join(root,'approved');const result=cli('export','--batch',dir,'--out',exportDir);
  assert.equal(result.status,0,result.stderr);
  const packageManifest=JSON.parse(readFileSync(join(exportDir,'approved-manifest.json')));
  assert.equal(packageManifest.items.length,1);assert.equal(packageManifest.items[0].id,approved.id);
  assert.equal(packageManifest.items[0].decision.action,'approve');
  assert.equal(existsSync(join(exportDir,'files',rejected.file.name)),false);

  manifest=readManifest(dir);manifest.pieces[0].destination=manifest.pieces[0].destination.replace('/ritual?','/outro?');atomicJSON(join(dir,'manifest.json'),manifest);
  view=batchView(dir);assert.equal(view.pieces[0].review.status,'changed');assert.equal(view.pieces[0].validation.pass,true);
  assert.equal(cli('export','--batch',dir,'--out',join(root,'blocked')).status,1);
  assert.equal(existsSync(join(root,'blocked')),false);
  manifest.pieces[0].destination=approved.destination;manifest.pieces[0].copy.headline='Texto alterado';atomicJSON(join(dir,'manifest.json'),manifest);
  view=batchView(dir);assert.equal(view.pieces[0].review.status,'changed');assert.equal(view.pieces[0].validation.pass,false);
  manifest.pieces[0].copy.headline=approved.copy.headline;atomicJSON(join(dir,'manifest.json'),manifest);
  const approvedFile=piecePath(dir,manifest.pieces[0]);
  appendFileSync(approvedFile,'tampered');
  view=batchView(dir);assert.equal(view.pieces[0].review.status,'changed');assert.equal(view.pieces[0].validation.pass,false);
  copyFileSync(join(exportDir,'files',approved.file.name),approvedFile);
  assert.equal(batchView(dir).pieces[0].review.status,'approve');

  // Simulate a crash after a PNG rename and before its manifest checkpoint.
  manifest=readManifest(dir);manifest.pieces[1].file.sha256=null;manifest.pieces[1].render=null;atomicJSON(join(dir,'manifest.json'),manifest);
  await renderPending(dir,manifest,{resume:true});
  assert(batchView(dir).pieces.every(p=>p.validation.pass));
  // A missing file is also recovered without touching the other piece.
  unlinkSync(piecePath(dir,manifest.pieces[1]));
  await renderPending(dir,manifest,{resume:true});
  assert(batchView(dir).pieces.every(p=>p.validation.pass));
});
