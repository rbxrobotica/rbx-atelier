#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { existsSync, mkdirSync, copyFileSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { loadBrief, makeManifest, readManifest, atomicJSON, batchView, piecePath, fileHash, ENGINE_VERSION } from './core.mjs';
import { renderPending } from './render.mjs';
import { serve } from './server.mjs';

const [command,...argv] = process.argv.slice(2);
const {values:args} = parseArgs({args:argv,options:{brief:{type:'string'},batch:{type:'string'},out:{type:'string'},port:{type:'string'},resume:{type:'boolean'}},strict:true,allowPositionals:false});
function required(name) { if (!args[name]) throw new Error(`--${name} is required`); return resolve(args[name]); }

async function generate() {
  const input = loadBrief(required('brief'));
  const batchDir = join(resolve(args.out || 'output'),input.batchId);
  const manifestPath = join(batchDir,'manifest.json');
  let manifest;
  if (existsSync(batchDir)) {
    if (!args.resume) throw new Error(`batch already exists: ${batchDir}; use --resume`);
    if (!existsSync(manifestPath)) throw new Error('batch directory exists without manifest; inspect it before retrying');
    manifest = readManifest(batchDir);
    if (manifest.inputHash !== input.inputHash || manifest.batchId !== input.batchId) throw new Error('brief/source mismatch; cannot resume this batch');
  } else {
    mkdirSync(batchDir,{recursive:true});
    manifest = makeManifest(input);
    atomicJSON(manifestPath,manifest);
  }
  await renderPending(batchDir,manifest,{resume:Boolean(args.resume)});
  const view = batchView(batchDir);
  const failed = view.pieces.filter(p => !p.validation.pass);
  console.log(`${batchDir}\n${view.pieces.length} candidate files; ${failed.length} failed automatic checks; ${view.pieces.filter(p=>p.review.status==='approve').length} approved`);
  if (failed.length) process.exitCode=1;
}

function verify() {
  const dir = required('batch');
  const view = batchView(dir);
  for (const p of view.pieces) console.log(`${p.validation.pass?'PASS':'FAIL'} ${p.id} ${p.review.status}${p.validation.pass?'':': '+p.validation.checks.filter(c=>!c.ok).map(c=>c.name).join(', ')}`);
  if (view.pieces.some(p=>!p.validation.pass)) process.exitCode=1;
}

function exportApproved() {
  const dir = required('batch');
  const view = batchView(dir);
  const selected = view.pieces.filter(p => p.review.status === 'approve' && p.validation.pass);
  if (!selected.length) throw new Error('no explicitly approved, valid pieces; no package created');
  const out = resolve(args.out || join(dir,`approved-export-${new Date().toISOString().replace(/[:.]/g,'-')}`));
  if (existsSync(out)) throw new Error(`export directory exists: ${out}`);
  mkdirSync(out,{recursive:true});
  try {
    mkdirSync(join(out,'files'));
    const items = [];
    for (const p of selected) {
      const source = piecePath(dir,p), target=join(out,'files',p.file.name);
      copyFileSync(source,target);
      if (fileHash(target) !== p.validation.actualHash) throw new Error(`copy hash mismatch: ${p.id}`);
      items.push({id:p.id,variantId:p.variantId,conceptId:p.conceptId,messageId:p.messageId,visualId:p.visualId,campaignId:p.campaignId,campaignVersion:p.campaignVersion,format:p.format,copy:p.copy,destination:p.destination,attribution:p.attribution,file:p.file,actualSha256:p.validation.actualHash,reviewHash:p.validation.reviewHash,decision:p.review.decision});
    }
    atomicJSON(join(out,'approved-manifest.json'),{schemaVersion:1,batchId:view.batchId,exportedAt:new Date().toISOString(),status:'approved_for_handoff_only',publicationAuthorized:false,brief:view.brief,brand:view.brand,sources:view.sources,engine:view.engine,items});
    console.log(`${out}\n${items.length} approved files exported`);
  } catch(e) { rmSync(out,{recursive:true,force:true}); throw e; }
}

try {
  if (command === 'generate') await generate();
  else if (command === 'serve') serve(required('batch'),Number(args.port || 4173));
  else if (command === 'verify') verify();
  else if (command === 'export') exportApproved();
  else throw new Error('usage: creative.mjs generate --brief FILE [--out DIR] [--resume] | serve --batch DIR [--port 4173] | verify --batch DIR | export --batch DIR [--out DIR]');
} catch(e) { console.error(e.message); process.exitCode=1; }
