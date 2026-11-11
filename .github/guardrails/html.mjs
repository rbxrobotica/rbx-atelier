// Reads an HTML page with parse5, which builds the tree a browser builds
// (character references decoded, <template> contents kept, a script that
// holds `<!-- <script>` read to its real end). Shared by the CDN script check
// and by the lint of inline scripts, so both see the same page.
import { parse } from 'parse5';

export const HTML = 'http://www.w3.org/1999/xhtml';
export const SVG = 'http://www.w3.org/2000/svg';

// HTML trims and compares these values over ASCII only: five whitespace
// characters, and the letters A to Z.
const ASCII_WHITESPACE_AT_THE_ENDS = /^[\t\n\f\r ]+|[\t\n\f\r ]+$/g;
export const strip = (value) => value.replace(ASCII_WHITESPACE_AT_THE_ENDS, '');
export const lower = (value) => value.replace(/[A-Z]/g, (letter) => letter.toLowerCase());

// The JavaScript MIME type essences of the MIME Sniffing standard.
const JAVASCRIPT_TYPES = new Set([
  'application/ecmascript',
  'application/javascript',
  'application/x-ecmascript',
  'application/x-javascript',
  'text/ecmascript',
  'text/javascript',
  'text/javascript1.0',
  'text/javascript1.1',
  'text/javascript1.2',
  'text/javascript1.3',
  'text/javascript1.4',
  'text/javascript1.5',
  'text/jscript',
  'text/livescript',
  'text/x-ecmascript',
  'text/x-javascript'
]);

function* walk(node) {
  for (const child of node.childNodes ?? []) {
    if (child.tagName) yield child;
    yield* walk(child);
    if (child.content) yield* walk(child.content);
  }
}

// Every element of the page, with its place in the source.
export function elements(html) {
  return walk(parse(html, { sourceCodeLocationInfo: true }));
}

export const attribute = (element, name) => element.attrs.find((candidate) => candidate.name === name)?.value;

// The type of a <script> element, from its `type` and `language` attributes
// as HTML's "prepare the script element" reads them: text/javascript when
// neither says otherwise.
export function scriptType(element) {
  const type = attribute(element, 'type');
  const language = attribute(element, 'language');
  if (type === '' || (type === undefined && !language)) return 'text/javascript';
  return lower(type === undefined ? `text/${language}` : strip(type));
}

// The types that hold JSON, which no browser and no library runs as code.
const JSON_TYPES = new Set(['importmap', 'speculationrules', 'application/json', 'application/ld+json']);
export const holdsJson = (element) => JSON_TYPES.has(scriptType(element));

// What the browser does with a <script> element: 'classic' or 'module' when
// it fetches and runs the script itself, 'importmap', or 'data' when it leaves
// the element alone (page code may still run it, as Babel standalone does
// with text/babel).
export function scriptKind(element) {
  const type = scriptType(element);
  if (JAVASCRIPT_TYPES.has(type)) return 'classic';
  return type === 'module' || type === 'importmap' ? type : 'data';
}
