import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { join, basename, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batchView, appendEvents, readManifest, piecePath } from './core.mjs';

const ROOT=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const json=(res,status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
function acceptDecision(batchDir,body) {
  const {actor,action,pieceIds,comment=''}=body || {};
  if (typeof actor!=='string' || !actor.trim() || actor.length>120) throw new Error('reviewer name required (max 120 characters)');
  if (!['approve','reject','adjust','comment'].includes(action)) throw new Error('invalid action');
  if (!Array.isArray(pieceIds) || !pieceIds.length || pieceIds.length>100 || new Set(pieceIds).size!==pieceIds.length) throw new Error('select explicit pieces');
  if (typeof comment!=='string' || comment.length>2000 || (action==='adjust' && !comment.trim())) throw new Error('invalid comment');
  const view=batchView(batchDir);
  const selected=pieceIds.map(id=>view.pieces.find(p=>p.id===id));
  if (selected.some(p=>!p)) throw new Error('unknown piece');
  if (action==='approve' && selected.some(p=>!p.validation.pass)) throw new Error('cannot approve a piece with failed automatic checks');
  const at=new Date().toISOString();
  appendEvents(batchDir,selected.map(p=>({eventId:crypto.randomUUID(),at,actor:actor.trim(),action,pieceId:p.id,reviewHash:p.validation.reviewHash,assetSha256:p.validation.actualHash,comment:comment.trim()})));
  return batchView(batchDir);
}

export function serve(batchDir,port=4173) {
  if (!Number.isInteger(port) || port<0 || port>65535) throw new Error('invalid port');
  readManifest(batchDir);
  const server=createServer(async(req,res)=>{
    try {
      const path=new URL(req.url,'http://localhost').pathname;
      if (req.method==='GET' && path==='/') {
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
        res.end(readFileSync(join(ROOT,'gallery','index.html')));return;
      }
      if (req.method==='GET' && path==='/app.css') {res.writeHead(200,{'Content-Type':'text/css; charset=utf-8'});res.end(readFileSync(join(ROOT,'gallery','app.css')));return;}
      if (req.method==='GET' && path==='/app.js') {res.writeHead(200,{'Content-Type':'text/javascript; charset=utf-8'});res.end(readFileSync(join(ROOT,'gallery','app.js')));return;}
      if (req.method==='GET' && path==='/api/batch') {json(res,200,batchView(batchDir));return;}
      if (req.method==='GET' && path.startsWith('/files/')) {
        const name=decodeURIComponent(path.slice(7));
        if (name!==basename(name) || !readManifest(batchDir).pieces.some(p=>p.file.name===name)) {json(res,404,{error:'not found'});return;}
        res.writeHead(200,{'Content-Type':'image/png','Cache-Control':'no-store'});res.end(readFileSync(join(batchDir,'files',name)));return;
      }
      if (req.method==='POST' && path==='/api/decisions') {
        const expected=`http://${req.headers.host}`;
        if (req.headers.origin!==expected || !req.headers['content-type']?.startsWith('application/json')) throw new Error('local JSON request required');
        let raw='';
        for await (const chunk of req) {raw+=chunk;if(raw.length>100000) throw new Error('request too large');}
        json(res,200,acceptDecision(batchDir,JSON.parse(raw)));return;
      }
      json(res,404,{error:'not found'});
    } catch(e) {json(res,400,{error:e.message});}
  });
  server.listen(port,'127.0.0.1',()=>console.log(`Satwake gallery: http://127.0.0.1:${server.address().port}/`));
  return server;
}
