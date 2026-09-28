import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, mkdirSync, existsSync, renameSync, openSync, closeSync, writeSync } from 'node:fs';
import { resolve, dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

export const FORMATS = Object.freeze({ '1x1': [1080, 1080], '4x5': [1080, 1350], '9x16': [1080, 1920] });
export const ENGINE_VERSION = '1.0.0';
const SLUG = /^[a-z0-9][a-z0-9_-]*$/;
const UTM_CAMPAIGN = /^satwake_h[12]_[a-z0-9_]+$/;
const UTM_CONTENT = /^satwake_h[12]_[a-z0-9_]+_[0-9]{3}$/;
const PLACEHOLDER = /\{\{[^}]+\}\}|\b(?:TODO|TBD|PLACEHOLDER)\b|<[^>]+>/i;
const PROHIBITED = /(?:compre agora|venda agora|lucro garantido|retorno garantido|sem risco|sinal de (?:compra|venda))/i;

export function hash(data) { return createHash('sha256').update(data).digest('hex'); }
export function fileHash(path) { return hash(readFileSync(path)); }
export function atomicJSON(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  const tmp = `${path}.${process.pid}.tmp`;
  writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n', { flag: 'wx' });
  renameSync(tmp, path);
}

function need(value, label) { if (typeof value !== 'string' || !value.trim()) throw new Error(`${label} is required`); return value; }
function id(value, label) { need(value, label); if (!SLUG.test(value)) throw new Error(`invalid ${label}: ${value}`); return value; }
function unique(values, label) { if (new Set(values).size !== values.length) throw new Error(`duplicate ${label}`); }
export function trackedURL(destination, attribution, campaignId, utmContent) {
  const url = new URL(destination);
  if (url.protocol !== 'https:' || !url.hostname) throw new Error('destination must be HTTPS');
  for (const [key, value] of Object.entries({utm_source: attribution.source, utm_medium: attribution.medium, utm_campaign: campaignId, utm_content: utmContent, utm_term: attribution.term})) url.searchParams.set(key, value);
  return url.href;
}
function contentFor(message, visual, visualCount) {
  const value = visualCount === 1 ? message.utmContent : message.utmContentByVisual?.[visual.id];
  if (!UTM_CONTENT.test(value || '')) throw new Error(`invalid utmContent for ${message.id}/${visual.id}`);
  return value;
}
export function validateURL(value, campaignId) {
  try {
    const url = new URL(value);
    const get = k => url.searchParams.getAll(k);
    const names = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    if (url.protocol !== 'https:' || names.some(k => get(k).length !== 1)) return false;
    if (!['instagram','facebook'].includes(get('utm_source')[0]) || get('utm_medium')[0] !== 'social_paid') return false;
    if (get('utm_campaign')[0] !== campaignId || !UTM_CAMPAIGN.test(campaignId) || !UTM_CONTENT.test(get('utm_content')[0])) return false;
    if (get('utm_term')[0] !== 'btc_preparacao') return false;
    return names.every(k => /^[a-z0-9_]+$/.test(get(k)[0]));
  } catch { return false; }
}

export function loadBrief(path) {
  const briefPath = resolve(path);
  const raw = readFileSync(briefPath);
  const brief = JSON.parse(raw);
  if (brief.schemaVersion !== 1) throw new Error('unsupported brief schemaVersion');
  id(brief.campaign?.id, 'campaign.id'); need(brief.campaign?.version, 'campaign.version'); need(brief.campaign?.hypothesisId, 'campaign.hypothesisId');
  if (!UTM_CAMPAIGN.test(brief.campaign.id)) throw new Error('campaign ID violates UTM taxonomy');
  id(brief.audience?.id, 'audience.id'); need(brief.audience?.description, 'audience.description');
  need(brief.objective, 'objective'); need(brief.offer, 'offer'); need(brief.destination, 'destination');
  if (!Array.isArray(brief.formats) || !brief.formats.length || brief.formats.some(f => !FORMATS[f])) throw new Error('invalid formats');
  unique(brief.formats, 'format');
  if (!Number.isInteger(brief.maxVariants) || brief.maxVariants < 1 || brief.maxVariants > 30) throw new Error('invalid maxVariants');
  if (brief.identity?.system !== 'satwake' || !brief.identity.version) throw new Error('invalid identity');
  if (!Array.isArray(brief.editorial?.prohibitedClaims) || !need(brief.editorial?.requiredDisclaimer, 'requiredDisclaimer')) throw new Error('invalid editorial');
  if (!['instagram','facebook'].includes(brief.attribution?.source) || brief.attribution?.medium !== 'social_paid' || brief.attribution?.term !== 'btc_preparacao') throw new Error('invalid attribution');
  if (!Array.isArray(brief.sources) || !brief.sources.length) throw new Error('sources required');
  unique(brief.sources.map(s => id(s.id, 'source.id')), 'source ID');
  const sources = brief.sources.map(s => {
    const p = resolve(dirname(briefPath), need(s.path, 'source.path'));
    if (!existsSync(p)) throw new Error(`missing source: ${p}`);
    return { id: s.id, path: p, sha256: fileHash(p) };
  });
  if (!Array.isArray(brief.facts) || !brief.facts.length) throw new Error('facts required');
  unique(brief.facts.map(f => id(f.id, 'fact.id')), 'fact ID');
  for (const fact of brief.facts) {
    need(fact.text, 'fact.text');
    if (!Array.isArray(fact.sourceIds) || !fact.sourceIds.length || fact.sourceIds.some(s => !sources.find(x => x.id === s))) throw new Error(`invalid fact source: ${fact.id}`);
  }
  if (!Array.isArray(brief.concepts) || !brief.concepts.length) throw new Error('concepts required');
  unique(brief.concepts.map(c => id(c.id, 'concept.id')), 'concept ID');
  const utms = [];
  let count = 0;
  for (const concept of brief.concepts) {
    need(concept.hypothesis, 'concept.hypothesis');
    if (!Array.isArray(concept.factIds) || !concept.factIds.length || concept.factIds.some(f => !brief.facts.find(x => x.id === f))) throw new Error(`invalid concept facts: ${concept.id}`);
    if (!Array.isArray(concept.messages) || !concept.messages.length || !Array.isArray(concept.visuals) || !concept.visuals.length) throw new Error('messages and visuals required');
    unique(concept.messages.map(m => id(m.id, 'message.id')), 'message ID');
    unique(concept.visuals.map(v => id(v.id, 'visual.id')), 'visual ID');
    for (const m of concept.messages) {
      for (const k of ['eyebrow','headline','body','primaryText','cta','utmContent']) need(m[k], `message.${k}`);
      if (!UTM_CONTENT.test(m.utmContent)) throw new Error(`invalid utmContent: ${m.utmContent}`);
      if (!m.primaryText.includes(brief.editorial.requiredDisclaimer)) throw new Error(`missing required disclaimer: ${concept.id}/${m.id}`);
      for (const value of [m.eyebrow,m.headline,m.body,m.primaryText,m.cta]) {
        if (PLACEHOLDER.test(value) || PROHIBITED.test(value) || /[!\u2014\u2190-\u21ff]/u.test(value) || brief.editorial.prohibitedClaims.some(term=>value.toLowerCase().includes(term.toLowerCase()))) throw new Error(`editorial violation: ${concept.id}/${m.id}`);
      }
    }
    for (const v of concept.visuals) if (!['horizon','index','rule'].includes(v.layout)) throw new Error(`unknown layout: ${v.layout}`);
    for (const m of concept.messages) for (const v of concept.visuals) {
      utms.push(contentFor(m,v,concept.visuals.length));
      count++;
    }
  }
  if (count > brief.maxVariants) throw new Error(`variant count ${count} exceeds maxVariants ${brief.maxVariants}`);
  // A UTM identifies one message and visual treatment. Format adaptations keep it.
  unique(utms, 'utmContent');
  trackedURL(brief.destination, brief.attribution, brief.campaign.id, brief.concepts[0].messages[0].utmContent);
  const brandRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
  const brand = { tokens: fileHash(join(brandRoot, 'tokens.json')), css: fileHash(join(brandRoot, 'colors_and_type.css')), lockup: fileHash(join(brandRoot, 'assets/satwake-lockup.svg')) };
  const rendererSha256 = fileHash(join(dirname(fileURLToPath(import.meta.url)), 'render.mjs'));
  const coreSha256 = fileHash(fileURLToPath(import.meta.url));
  const inputHash = hash(JSON.stringify({brief, sources:sources.map(s=>({id:s.id,path:brief.sources.find(x=>x.id===s.id).path,sha256:s.sha256})), brand, engine: ENGINE_VERSION, rendererSha256, coreSha256}));
  return { brief, briefPath, briefHash: hash(raw), sources, brand, rendererSha256, coreSha256, inputHash, batchId: `${brief.campaign.id}-${brief.campaign.version}-${inputHash.slice(0,12)}` };
}

export function makeManifest(input) {
  const { brief, briefPath, briefHash, sources, brand, rendererSha256, coreSha256, inputHash, batchId } = input;
  const pieces = [];
  for (const concept of brief.concepts) for (const message of concept.messages) for (const visual of concept.visuals) for (const format of brief.formats) {
    const utmContent = contentFor(message,visual,concept.visuals.length);
    const variantId = `${batchId}__${concept.id}__${message.id}__${visual.id}`;
    const pieceId = `${variantId}__${format}`;
    const [width,height] = FORMATS[format];
    pieces.push({
      id: pieceId, variantId, conceptId: concept.id, conceptUid: `${batchId}__${concept.id}`, messageId: message.id, visualId: visual.id, format,
      campaignId: brief.campaign.id, campaignVersion: brief.campaign.version, hypothesisId: brief.campaign.hypothesisId,
      hypothesis: concept.hypothesis, audience: brief.audience, objective: brief.objective, offer: brief.offer,
      factIds: concept.factIds, layout: visual.layout, copy: { eyebrow: message.eyebrow, headline: message.headline, body: message.body, primaryText: message.primaryText, cta: message.cta },
      attribution: { ...brief.attribution, campaign: brief.campaign.id, content: utmContent, platformAdId: null },
      destination: trackedURL(brief.destination, brief.attribution, brief.campaign.id, utmContent),
      file: { name: `${pieceId}.png`, width, height, mediaType: 'image/png', sha256: null, deviceScaleFactor: 1 },
      render: null,
    });
  }
  return { schemaVersion: 1, batchId, status: 'candidate_pending_human_review', createdAt: new Date().toISOString(), engine: {name:'satwake-local-deterministic',version:ENGINE_VERSION, model:null,rendererSha256,coreSha256}, inputHash, brief: {path:briefPath,sha256:briefHash,schemaVersion:brief.schemaVersion}, sources, brand, editorial: brief.editorial, identity: brief.identity, facts: brief.facts, pieces };
}

export function pngDimensions(path) {
  const b = readFileSync(path);
  if (b.length < 24 || b.toString('hex',0,8) !== '89504e470d0a1a0a' || b.toString('ascii',12,16) !== 'IHDR') throw new Error('invalid PNG');
  return [b.readUInt32BE(16), b.readUInt32BE(20)];
}
export function piecePath(batchDir, piece) { return join(batchDir, 'files', basename(piece.file.name)); }
export function reviewHash(piece, actualHash) {
  return hash(JSON.stringify({id:piece.id, campaignId:piece.campaignId, campaignVersion:piece.campaignVersion, copy:piece.copy, destination:piece.destination, attribution:piece.attribution, file:piece.file, actualHash}));
}
export function renderInputHash(piece, brand) { return hash(JSON.stringify({copy:piece.copy,layout:piece.layout,format:piece.format,brand})); }
export function validatePiece(manifest, batchDir, piece) {
  const checks = [];
  const check = (name, ok, detail='') => checks.push({name,ok:Boolean(ok),detail});
  const file = piecePath(batchDir,piece);
  const exists = existsSync(file);
  let actualHash = null, dimensions = null;
  if (exists) {
    try { actualHash = fileHash(file); dimensions = pngDimensions(file); } catch { /* reported below */ }
  }
  check('PNG exists and decodes', Boolean(actualHash && dimensions));
  check('PNG dimensions match viewport × deviceScaleFactor', Boolean(dimensions && dimensions[0] === piece.file.width * piece.file.deviceScaleFactor && dimensions[1] === piece.file.height * piece.file.deviceScaleFactor), dimensions?.join('×') || 'missing');
  check('PNG hash matches manifest', Boolean(actualHash && actualHash === piece.file.sha256));
  check('File name and internal IDs', piece.file.name === `${piece.id}.png` && piece.file.name === basename(piece.file.name) && piece.variantId && piece.id.startsWith(`${piece.variantId}__`) && piece.campaignId === manifest.pieces[0]?.campaignId);
  const values = Object.values(piece.copy || {});
  check('Required copy and no placeholders', values.length === 5 && values.every(v => typeof v === 'string' && v.trim() && !PLACEHOLDER.test(v)));
  check('Exact financial disclaimer', Boolean(piece.copy?.primaryText?.includes(manifest.editorial.requiredDisclaimer)));
  check('Editorial claim restrictions', values.every(v => !PROHIBITED.test(v) && !manifest.editorial.prohibitedClaims.some(term => v.toLowerCase().includes(term.toLowerCase())) && !/[!\u2014\u2190-\u21ff]/u.test(v)));
  let attributionMatches=false;
  try { const u=new URL(piece.destination); attributionMatches=u.searchParams.get('utm_source')===piece.attribution.source && u.searchParams.get('utm_medium')===piece.attribution.medium && u.searchParams.get('utm_campaign')===piece.attribution.campaign && u.searchParams.get('utm_content')===piece.attribution.content && u.searchParams.get('utm_term')===piece.attribution.term; } catch { /* invalid URL below */ }
  check('UTM taxonomy and destination', validateURL(piece.destination, piece.campaignId) && attributionMatches);
  check('Rendered fonts, fit and visual checks', Boolean(piece.render?.fontsLoaded && piece.render?.textFits && piece.render?.noOverlap && piece.render?.brandTokensMatch && piece.render?.inputSha256 === renderInputHash(piece,manifest.brand)), piece.render?.details?.join('; ') || 'render evidence missing or stale');
  check('Fact and brand provenance', piece.factIds?.every(id => manifest.facts.some(f => f.id === id)) && Boolean(manifest.brand?.tokens && manifest.sources?.length));
  return { checks, pass:checks.every(c => c.ok), actualHash, reviewHash:reviewHash(piece, actualHash) };
}
export function readManifest(batchDir) { return JSON.parse(readFileSync(join(batchDir,'manifest.json'),'utf8')); }
export function readEvents(batchDir) {
  const path = join(batchDir,'decisions.ndjson');
  return existsSync(path) ? readFileSync(path,'utf8').split('\n').filter(Boolean).map(line => JSON.parse(line)) : [];
}
export function appendEvents(batchDir, events) {
  const fd = openSync(join(batchDir,'decisions.ndjson'),'a',0o600);
  try { for (const event of events) writeSync(fd, JSON.stringify(event)+'\n'); } finally { closeSync(fd); }
}
export function pieceState(piece, validation, events) {
  const relevant = events.filter(e => e.pieceId === piece.id);
  const decisions = relevant.filter(e => ['approve','reject','adjust'].includes(e.action));
  const latest = decisions.at(-1);
  const active = latest && latest.reviewHash === validation.reviewHash;
  return { status: latest ? (active ? latest.action : 'changed') : 'pending', decision: active ? latest : null, previousDecision: !active ? latest || null : null, history: relevant.map(e => ({at:e.at,actor:e.actor,text:e.comment,action:e.action,reviewHash:e.reviewHash})) };
}
export function batchView(batchDir) {
  const manifest = readManifest(batchDir), events = readEvents(batchDir);
  return { ...manifest, pieces: manifest.pieces.map(piece => { const validation=validatePiece(manifest,batchDir,piece); return {...piece, validation, review:pieceState(piece,validation,events)}; }) };
}
