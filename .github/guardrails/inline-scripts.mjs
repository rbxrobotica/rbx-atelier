// An ESLint processor for HTML pages: it hands the lint the text of each
// inline <script>, found with parse5 the way a browser finds it.
//
// A script is linted whatever its type says (text/babel, application/ecmascript,
// " module ", a type nobody heard of). It is left out only when its type
// holds JSON and never runs as code, or when the element names a file, which
// the browser runs instead of the text.
import { HTML, attribute, elements, holdsJson, scriptType } from './html.mjs';

// The inline scripts of a page: each with its text, the line and column where
// the text starts, and whether it is a module.
export function inlineScripts(html) {
  const scripts = [];
  for (const element of elements(html)) {
    if (element.tagName !== 'script' || holdsJson(element)) continue;
    // `src` on an HTML script; `href` or `xlink:href` (both named `href` by parse5) on an SVG one.
    const namesFile = element.namespaceURI === HTML ? attribute(element, 'src') !== undefined : attribute(element, 'href') !== undefined;
    const texts = element.childNodes.filter((child) => child.nodeName === '#text');
    if (namesFile || !texts.length) continue;
    const { startLine: line, startCol: column } = texts[0].sourceCodeLocation;
    scripts.push({ text: texts.map(({ value }) => value).join(''), line, column, module: scriptType(element) === 'module' });
  }
  return scripts;
}

// Moves a message from its place in the script to its place in the page.
function inThePage(message, { line, column }) {
  const moved = { ...message, line: message.line + line - 1, column: message.line === 1 ? message.column + column - 1 : message.column };
  if (message.endLine !== undefined) {
    moved.endLine = message.endLine + line - 1;
    moved.endColumn = message.endLine === 1 ? message.endColumn + column - 1 : message.endColumn;
  }
  return moved;
}

const pages = new Map();

export default {
  meta: { name: 'rbx-inline-scripts', version: '1.0.0' },
  supportsAutofix: false,
  // A classic script is named N.js and a module N.mjs, so eslint.config.js can
  // tell them apart by name.
  preprocess(html, filename) {
    const scripts = inlineScripts(html);
    pages.set(filename, scripts);
    return scripts.map(({ text, module }, index) => ({ text, filename: `${index}.${module ? 'mjs' : 'js'}` }));
  },
  postprocess(messages, filename) {
    const scripts = pages.get(filename);
    pages.delete(filename);
    return messages.flatMap((ofOneScript, index) => ofOneScript.map((message) => inThePage(message, scripts.at(index))));
  }
};
