// Lists the scripts that the HTML pages of this repository load from another
// origin, checks how each one is pinned, and writes the pinned ones as an
// osv-scanner custom lockfile, so the versions the browser downloads get the
// same vulnerability scan as the lockfiles (RBX engineering guardrail 2).
//
// A page is read the way a browser reads it: parse5 builds the tree and the
// URL parser resolves each address, from a page served with and without TLS
// and from a page opened from disk. A script from another origin passes when
// all of this holds:
//   - it resolves to https://unpkg.com/<package>@<exact version>/<file>;
//   - it is a classic HTML <script>, the one kind whose integrity check
//     covers all that the browser loads for it. A script of another type is
//     loaded by page code, if at all, with no check (Babel standalone and
//     text/babel), and the check of a module stops at its first file;
//   - its `integrity` attribute holds well-formed sha384 or sha512 hashes and
//     nothing else, so the browser refuses a file that differs from the
//     reviewed one. A value the browser cannot read protects nothing.
// Anything else is reported as file:line and the script exits 1. So is what
// would make a browser run something the lint and this check do not read:
//   - a script of the repository that the lint does not read: a file that is
//     not .js, .mjs, .cjs or .jsx, or one under node_modules;
//   - a symbolic link anywhere in the checkout. A link gives a file a second
//     path, and the lint and this check read paths: with
//     `linked -> node_modules/pkg`, "linked/app.js" is a file ESLint leaves
//     out;
//   - a <base href> or an import map, which change what an address or a
//     module name means: with <base href="/node_modules/"> a script written
//     as "app.js" is a file the lint does not read;
//   - a page or a script that is not UTF-8 beyond doubt. This check and the
//     lint read files as UTF-8, and under another encoding the same bytes are
//     other markup and other code. A page with a script has to declare UTF-8
//     in a way a browser honours before anything else in the page counts: a
//     <meta> it reads as a declaration, whole within the first 1024 bytes,
//     with no element before it in the file but <html> and <head>. The
//     encoding of the page is also the one a browser falls back on for the
//     scripts it loads, and a <script charset> may not name another one.
// The lockfile is written in both cases, unless no script is pinned.
//
// Out of reach: what page code loads at run time; whether the integrity hash
// matches what unpkg serves (the browser checks that on load); what the web
// server decides when it serves a file (an encoding or a type announced in a
// header, a route); and files that are not named .html or .htm (an SVG file
// can carry a script of its own).
//
// Usage, from the repository root:
//   node .github/guardrails/cdn-scripts.mjs <path of the osv-scanner.json to write>
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { HTML, SVG, attribute, elements, holdsJson, lower, scriptKind, strip } from './html.mjs';
import { PAGE_COUNT, isLinted, otherOrigins, repositoryPaths } from './repository-origin.mjs';

const SKIPPED_DIRECTORIES = new Set(['.git', 'node_modules']);
const UNPKG_FILE = /^\/(@[a-z0-9][a-z0-9._-]*\/[a-z0-9][a-z0-9._-]*|[a-z0-9][a-z0-9._-]*)@([^/]+)\/./;
const EXACT_VERSION = /^\d+\.\d+\.\d+(?:$|-[0-9A-Za-z.-]+$)/;
// A digest of the exact length of its algorithm, in standard base64.
const INTEGRITY_HASH = /^(?:sha384-[A-Za-z0-9+/]{64}|sha512-[A-Za-z0-9+/]{86}==)$/;
// Subresource Integrity splits its hashes on these five characters only.
const ASCII_WHITESPACE = /[\t\n\f\r ]+/;
const CHARSET_IN_CONTENT = /charset[\t\n\f\r ]*=[\t\n\f\r ]*(?:"([^"]*)"|'([^']*)'|([^\t\n\f\r ;]*))/i;
const UTF8_LABELS = new Set(['utf-8', 'utf8']);
// The control characters other than tab, line feed, form feed and carriage
// return. An escape or a NUL can make a browser pick another encoding.
const CONTROL_CHARACTER = /[\x00-\x08\x0B\x0E-\x1F]/;

// The encoding a <meta> element declares, lower-cased, or undefined. With
// `asBrowser` it is read as HTML reads it, to tell whether a browser honours
// the declaration: the pragma is `content-type` with nothing around it.
// Without, a padded pragma counts too, so that anything that looks like a
// declaration of another encoding is reported.
function declaredEncoding(element, asBrowser) {
  const charset = attribute(element, 'charset');
  if (charset !== undefined) return lower(strip(charset));
  const pragma = attribute(element, 'http-equiv') ?? '';
  if (lower(asBrowser ? pragma : strip(pragma)) !== 'content-type') return undefined;
  const [, double, single, bare] = CHARSET_IN_CONTENT.exec(attribute(element, 'content') ?? '') ?? [];
  const label = double ?? single ?? bare;
  return label === undefined ? undefined : lower(strip(label));
}

// The addresses a <script> element loads: `src` in HTML, `href` or
// `xlink:href` in SVG (parse5 names both `href` there).
function addresses(element) {
  if (element.namespaceURI === HTML) return element.attrs.filter(({ name }) => name === 'src').map(({ value }) => value);
  if (element.namespaceURI === SVG) return element.attrs.filter(({ name }) => name === 'href').map(({ value }) => value);
  return [];
}

// What one page loads from another origin, and what stops this check from
// telling. `page` is the bytes of the file, or its text. Each finding has the
// line it is about, the text it is about (empty for the page as a whole), the
// package and version it pins (when it is a pinned script) and its problems.
export function pageFindings(page) {
  const bytes = typeof page === 'string' ? Buffer.from(page) : page;
  let html;
  try {
    html = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch {
    return [{ line: 1, text: '', problems: ['is not valid UTF-8, so this check and the lint cannot read what a browser would'] }];
  }
  const found = [];
  const control = html.search(CONTROL_CHARACTER);
  if (control !== -1) {
    found.push({ line: html.slice(0, control).split('\n').length, text: '', problems: ['holds a control character, which can make a browser read it in another encoding'] });
  }
  let declaresUtf8 = bytes.length >= 3 && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf;
  let hasScript = false;
  const all = [...elements(html)];
  // Where the first element that is not <html> or <head> starts in the file.
  // The tree is no guide to that: the parser moves a <meta> written inside a
  // <table> to before the table.
  const firstElement = all
    .filter(({ tagName, sourceCodeLocation }) => sourceCodeLocation && tagName !== 'html' && tagName !== 'head')
    .reduce((first, { sourceCodeLocation }) => Math.min(first, sourceCodeLocation.startOffset), Infinity);
  for (const element of all) {
    const line = element.sourceCodeLocation?.startLine;
    if (element.namespaceURI === HTML && element.tagName === 'meta') {
      const encoding = declaredEncoding(element, false);
      if (encoding !== undefined && !UTF8_LABELS.has(encoding)) {
        found.push({ line, text: encoding, problems: ['declares an encoding other than UTF-8, and this check and the lint read the page as UTF-8'] });
      }
      // A declaration counts when a browser honours it before anything else
      // in the page: read as HTML reads it, whole within the first 1024
      // bytes, and the first element of the file after <html> and <head>. A
      // browser looks for it in the bytes before it builds the tree, and it
      // takes for a <meta> what only looks like one, in a <title> for
      // instance; nothing of that kind can come before the first element.
      const { startOffset, endOffset } = element.sourceCodeLocation;
      const isFirst = startOffset === firstElement && Buffer.byteLength(html.slice(0, endOffset)) <= 1024;
      if (isFirst && UTF8_LABELS.has(declaredEncoding(element, true))) declaresUtf8 = true;
    }
    if (element.namespaceURI === HTML && element.tagName === 'base') {
      const href = attribute(element, 'href');
      if (href !== undefined) {
        found.push({ line, text: href, problems: ['is a <base href>, which changes what every address of the page means; this check and the lint read addresses without it'] });
      }
    }
    if (element.tagName !== 'script') continue;
    hasScript = true;
    const kind = scriptKind(element);
    const charset = attribute(element, 'charset');
    if (charset !== undefined && !UTF8_LABELS.has(lower(strip(charset)))) {
      found.push({ line, text: charset, problems: ['is a <script charset> other than UTF-8, which makes a browser read the script in that encoding while the lint reads UTF-8'] });
    }
    if (element.namespaceURI === HTML && kind === 'importmap') {
      found.push({ line, text: 'importmap', problems: ['is an import map, which can point a module name at another origin and which this check does not read'] });
    }
    for (const address of addresses(element)) {
      const urls = otherOrigins(address);
      if (!urls.length) {
        // A file of the repository. An empty address loads nothing.
        if (address !== '' && !holdsJson(element) && !repositoryPaths(address).every(isLinted)) {
          found.push({ line, text: address, problems: ['is a file of the repository that the lint does not read: it reads .js, .mjs, .cjs and .jsx files outside node_modules'] });
        }
        continue;
      }
      const script = { line, text: address, problems: [] };
      // The same https://unpkg.com file wherever the page is opened from.
      const [url] = urls;
      const unpkg = urls.length === PAGE_COUNT && urls.every(({ origin, href }) => origin === 'https://unpkg.com' && href === url.href);
      const [, name, version] = (unpkg && UNPKG_FILE.exec(url.pathname)) || [];
      if (!name) {
        script.problems.push('does not resolve to https://unpkg.com/<package>@<version>/<file>, the only form this check reads a version from');
      } else if (!EXACT_VERSION.test(version)) {
        script.problems.push('is not pinned to an exact version');
      } else {
        Object.assign(script, { name, version });
      }
      if (element.namespaceURI !== HTML || kind !== 'classic') {
        script.problems.push('is not a classic HTML <script>, the one kind whose integrity check covers all that the browser loads for it');
      } else {
        const hashes = (attribute(element, 'integrity') ?? '').split(ASCII_WHITESPACE).filter(Boolean);
        if (!hashes.length || !hashes.every((hash) => INTEGRITY_HASH.test(hash))) {
          script.problems.push('has no integrity attribute made only of well-formed sha384 or sha512 hashes');
        }
      }
      found.push(script);
    }
  }
  // Without a declaration a browser guesses the encoding. The guess changes
  // nothing on a page of ASCII characters only that has no script.
  if (!declaresUtf8 && (hasScript || bytes.some((byte) => byte > 0x7f))) {
    found.push({ line: 1, text: '', problems: ['has a script or characters outside ASCII and does not open with <meta charset="utf-8">: within its first 1024 bytes, with no element before it but <html> and <head>'] });
  }
  return found;
}

// The HTML files under `directory`, and the symbolic links met on the way,
// which are reported and never followed.
export function walk(directory) {
  const found = { pages: [], links: [] };
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- walks the checkout from the working directory; no input names a path
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (SKIPPED_DIRECTORIES.has(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isSymbolicLink()) {
      found.links.push(path);
    } else if (entry.isDirectory()) {
      const below = walk(path);
      found.pages.push(...below.pages);
      found.links.push(...below.links);
    } else if (entry.isFile() && /\.html?$/i.test(entry.name)) {
      found.pages.push(path);
    }
  }
  return { pages: found.pages.sort(), links: found.links.sort() };
}

function main(output) {
  if (!output) {
    console.error('usage: node .github/guardrails/cdn-scripts.mjs <path of the osv-scanner.json to write>');
    return 2;
  }
  const pinned = new Map();
  const { pages, links } = walk('.');
  const problems = links.map((link) => `${link}: is a symbolic link, which gives a file a second path; the lint and this check read paths and do not follow links`);
  for (const file of pages) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- a path walk() found in the checkout
    for (const finding of pageFindings(readFileSync(file))) {
      // JSON.stringify keeps a text with a line break on one output line.
      const subject = finding.text === '' ? 'the page' : JSON.stringify(finding.text);
      for (const problem of finding.problems) problems.push(`${file}:${finding.line}: ${subject} ${problem}`);
      if (!finding.name) continue;
      const id = `${finding.name}@${finding.version}`;
      pinned.set(id, { name: finding.name, version: finding.version, tags: (pinned.get(id)?.tags ?? 0) + 1 });
    }
  }

  const packages = [...pinned.keys()].sort().map((id) => pinned.get(id));
  console.log(`Scripts from another origin, pinned to an exact version (${packages.length}):`);
  for (const { name, version, tags } of packages) console.log(`  ${name}@${version} in ${tags} script tag${tags === 1 ? '' : 's'}`);
  if (packages.length) {
    const lockfile = { results: [{ packages: packages.map(({ name, version }) => ({ package: { name, version, ecosystem: 'npm' } })) }] };
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- the output path the workflow passes
    mkdirSync(dirname(output), { recursive: true });
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- the output path the workflow passes
    writeFileSync(output, JSON.stringify(lockfile, null, 2) + '\n');
  }
  if (problems.length) {
    console.error(`Pages, problems (${problems.length}):`);
    for (const problem of problems) console.error(`  ${problem}`);
    return 1;
  }
  return 0;
}

if (import.meta.main) process.exitCode = main(process.argv[2]);
