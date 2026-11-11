// node --test .github/guardrails/cdn-scripts.test.mjs
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { test } from 'node:test';
import { pageFindings, walk } from './cdn-scripts.mjs';
import { isLinted, otherOrigins, repositoryPaths } from './repository-origin.mjs';

const HASH = `sha384-${'A'.repeat(64)}`;
const HASH_512 = `sha512-${'B'.repeat(86)}==`;
const NOT_UNPKG = /^does not resolve to https:\/\/unpkg\.com\//;
const NOT_EXACT = 'is not pinned to an exact version';
const NO_INTEGRITY = 'has no integrity attribute made only of well-formed sha384 or sha512 hashes';
const NOT_CHECKED = 'is not a classic HTML <script>, the one kind whose integrity check covers all that the browser loads for it';
const REACT = 'https://unpkg.com/react@18.3.1/umd/react.js';
const NOT_LINTED = 'is a file of the repository that the lint does not read: it reads .js, .mjs, .cjs and .jsx files outside node_modules';
const NO_DECLARATION = 'has a script or characters outside ASCII and does not open with <meta charset="utf-8">: within its first 1024 bytes, with no element before it but <html> and <head>';
const NBSP = String.fromCharCode(0xa0);
// The findings of a page that declares UTF-8, as every page with a script has to.
const findings = (html) => pageFindings(`<meta charset="utf-8">${html}`);
// The package each finding pins, or its problems.
const pins = (html) => findings(html).map(({ name, version, problems }) => (problems.length ? problems : `${name}@${version}`));

test('a pinned unpkg script with integrity passes and names its package', () => {
  assert.deepEqual(findings(`<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="${HASH}" crossorigin="anonymous"></script>`), [
    { line: 1, text: 'https://unpkg.com/react@18.3.1/umd/react.development.js', problems: [], name: 'react', version: '18.3.1' }
  ]);
  assert.deepEqual(pins(`<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="${HASH} ${HASH_512}"></script>`), ['@babel/standalone@7.29.0']);
  assert.deepEqual(pins(`<script src="${REACT}" integrity="\n\t${HASH}\f${HASH_512}\r "></script>`), ['react@18.3.1']);
  assert.deepEqual(pins(`<script src="https://unpkg.com/pkg@1.0.0-rc.1/x.js" integrity="${HASH}"></script>`), ['pkg@1.0.0-rc.1']);
  assert.deepEqual(pins(`<script src="HTTPS://UNPKG.COM:443/react@18.3.1/umd/react.js" integrity="${HASH}"></script>`), ['react@18.3.1']);
});

test('a script of the repository passes when the lint reads its file', () => {
  for (const script of [
    '<script>run()</script>',
    '<script src=""></script>',
    '<script src="https://"></script>',
    '<script src="app.js"></script>',
    '<script src="/app.js"></script>',
    '<script src="./kits/a/app.mjs?v=2#top"></script>',
    '<script src="legacy.cjs"></script>',
    '<script src="../_shared/Kit.jsx" type="text/babel"></script>',
    '<script type="application/json" src="data.json"></script>',
    '<svg><script href="app.js"/></svg>'
  ]) {
    assert.deepEqual(findings(script), [], script);
  }
  for (const [script, address] of [
    ['<script src="payload.txt"></script>', 'payload.txt'],
    ['<script src="payload"></script>', 'payload'],
    ['<script src="App.JS"></script>', 'App.JS'],
    ['<script src="app.js/"></script>', 'app.js/'],
    ['<script src="app%2Ejs"></script>', 'app%2Ejs'],
    ['<script src="app.json"></script>', 'app.json'],
    ['<script src="node_modules/pkg/index.js"></script>', 'node_modules/pkg/index.js'],
    ['<script src="../kits/node_modules/pkg/index.js"></script>', '../kits/node_modules/pkg/index.js'],
    ['<script src="kits/x/../node_modules/x.js"></script>', 'kits/x/../node_modules/x.js'],
    ['<script src="node%5Fmodules/pkg/index.js"></script>', 'node%5Fmodules/pkg/index.js'],
    ['<script src="Node_Modules/pkg/index.js"></script>', 'Node_Modules/pkg/index.js'],
    ['<script src="kits%2Fnode_modules%2Fx.js"></script>', 'kits%2Fnode_modules%2Fx.js'],
    ['<script src=" "></script>', ' '],
    ['<script src="?x"></script>', '?x'],
    ['<script type="text/babel" src="Kit.tsx"></script>', 'Kit.tsx'],
    ['<script type="text/plain" src="notes.txt"></script>', 'notes.txt'],
    ['<svg><script href="payload.svg"/></svg>', 'payload.svg']
  ]) {
    assert.deepEqual(findings(script), [{ line: 1, text: address, problems: [NOT_LINTED] }], script);
  }
});

test('a <script charset> other than UTF-8 is a problem', () => {
  for (const charset of ['gbk', ' Shift_JIS ', 'utf-16', '']) {
    const [script, ...rest] = findings(`<p>one</p>\n<script charset="${charset}" src="payload.js"></script>`);
    assert.deepEqual([script.line, script.text, rest], [2, charset, []], charset);
    assert.match(script.problems[0], /^is a <script charset> other than UTF-8/, charset);
  }
  for (const charset of ['utf-8', ' UTF8 ']) assert.deepEqual(findings(`<script charset="${charset}" src="payload.js"></script>`), [], charset);
});

test('a floating or missing version is a problem', () => {
  for (const spec of ['lucide@latest', 'react@18', 'react@^18.3.1', 'react@18.3', 'react@18.3.1.2', 'react@18.3.1%2e2']) {
    const [script, ...rest] = findings(`<script src="https://unpkg.com/${spec}/dist/x.js" integrity="${HASH}"></script>`);
    assert.deepEqual([script.problems, script.name, script.version, rest], [[NOT_EXACT], undefined, undefined, []], spec);
  }
  for (const path of ['react/umd/react.js', 'react@18.3.1', 'React@18.3.1/umd/react.js', '%72eact@18.3.1/umd/react.js', 'react%4018.3.1/umd/react.js']) {
    const [[problem, ...rest]] = pins(`<script src="https://unpkg.com/${path}" integrity="${HASH}"></script>`);
    assert.match(problem, NOT_UNPKG, path);
    assert.deepEqual(rest, [], path);
  }
});

test('the package is read from the address the browser resolves', () => {
  assert.deepEqual(pins(`<script src="https://unpkg.com/react@18.3.1/../lodash@4.17.20/lodash.js" integrity="${HASH}"></script>`), ['lodash@4.17.20']);
  assert.deepEqual(pins(`<script src="https://unpkg.com/react@18.3.1/%2e%2e/lodash@4.17.20/lodash.js" integrity="${HASH}"></script>`), ['lodash@4.17.20']);
  assert.deepEqual(pins(`<script src="https://unpkg.com/x@1.0.0/../../react@latest/umd/react.js" integrity="${HASH}"></script>`), [[NOT_EXACT]]);
});

test('an address that does not resolve to unpkg over https is a problem', () => {
  for (const address of [
    '//unpkg.com/react@18.3.1/umd/react.js',
    'http://unpkg.com/react@18.3.1/umd/react.js',
    'https://unpkg.com./react@18.3.1/umd/react.js',
    'https://unpkg.com:8443/react@18.3.1/umd/react.js',
    'https://unpkg.com@example.test/react@18.3.1/umd/react.js',
    'https://cdn.example.test/react@18.3.1/react.js',
    'data:text/javascript,run()'
  ]) {
    const [[problem, ...rest]] = pins(`<script src="${address}" integrity="${HASH}"></script>`);
    assert.match(problem, NOT_UNPKG, address);
    assert.deepEqual(rest, [], address);
  }
});

test('an address is another origin however it is spelled', () => {
  const tab = String.fromCharCode(9);
  for (const address of [
    '&#104;ttps://example.test/x.js',
    '&#x68;ttps://example.test/x.js',
    'https&colon;//example.test/x.js',
    'https:&sol;&sol;example.test/x.js',
    'ht\ntps://example.test/x.js',
    `ht${tab}tps://example.test/x.js`,
    '&#1; https://example.test/x.js',
    'HTTPS://EXAMPLE.TEST/x.js',
    'https:example.test/x.js',
    'http:example.test/x.js',
    'https:unpkg.com/react@18.3.1/umd/react.js',
    'file://example.test/share/x.js',
    'file:///etc/x.js',
    '//example.test/x.js',
    '\\\\example.test/x.js',
    '/\\example.test/x.js',
    '\\/example.test/x.js'
  ]) {
    const [[problem, ...rest]] = pins(`<script src="${address}"></script>`);
    assert.match(problem, NOT_UNPKG, JSON.stringify(address));
    assert.deepEqual(rest, [NO_INTEGRITY], JSON.stringify(address));
  }
  assert.deepEqual(pins('<script src="&#104;ttps://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>'), [[NOT_EXACT, NO_INTEGRITY]]);
});

test('an integrity attribute the browser would not enforce is a problem', () => {
  for (const integrity of [
    '',
    'integrity',
    'integrity=""',
    'integrity="sha384"',
    `integrity="sha256-${'A'.repeat(43)}="`,
    `integrity="${HASH} sha256-${'A'.repeat(43)}="`,
    `integrity="md5-${'A'.repeat(22)}=="`,
    // Not a hash to the browser: it splits on ASCII whitespace only.
    `integrity="&nbsp;${HASH}&nbsp;"`,
    `integrity="${NBSP}${HASH}"`,
    `integrity="${HASH}${NBSP}${HASH_512}"`,
    // Not the length of a sha384 or sha512 digest, or not standard base64.
    `integrity="sha384-${'A'.repeat(63)}"`,
    `integrity="sha384-${'A'.repeat(65)}"`,
    `integrity="sha384-${'A'.repeat(62)}=="`,
    `integrity="sha384-${'A'.repeat(63)}_"`,
    `integrity="sha512-${'B'.repeat(86)}"`,
    `integrity="sha512-${'B'.repeat(88)}"`,
    `integrity="SHA384-${'A'.repeat(64)}x"`,
    `integrity="${HASH}?ct=text/javascript"`
  ]) {
    assert.deepEqual(pins(`<script src="${REACT}" ${integrity}></script>`), [[NO_INTEGRITY]], integrity);
  }
  const [script] = findings(`<script src="${REACT}"></script>`);
  assert.deepEqual([script.name, script.version], ['react', '18.3.1']);
});

test('script elements are found the way a browser builds them', () => {
  const address = 'https://example.test/x.js';
  for (const html of [
    `<SCRIPT\n  CrossOrigin\n  SRC='${address}'\n></SCRIPT>`,
    `<script src=${address}></script>`,
    `<script src = "${address}"></script>`,
    `<script data-note="a > b" src="${address}"></script>`,
    `<script / src="${address}"></script>`,
    `<script = src="${address}"></script>`,
    `<script defer src="${address}" src="local.js"></script>`,
    `<template><script src="${address}"></script></template>`,
    `<table><tr><td><script src="${address}"></script></td></tr></table>`,
    `<script>// <!-- <script>\n// </script>\n</script><script src="${address}"></script>`,
    `<svg><script href="${address}"/></svg>`,
    `<svg><script xlink:href="${address}"/></svg>`
  ]) {
    assert.deepEqual(findings(html).map(({ text }) => text), [address], html);
  }
  for (const html of [
    `<script src="local.js" src="${address}"></script>`,
    `<script href="${address}"></script>`,
    `<svg><script src="${address}"/></svg>`,
    `<!-- <script src="${address}"></script> -->`,
    `<textarea><script src="${address}"></script></textarea>`,
    `<script>// <!-- <script>\n// </script>\n// <script src="${address}"></script>\n// -->\n</script>`,
    `<scripted src="${address}"></scripted><p>script src="${address}"</p>`
  ]) {
    assert.deepEqual(findings(html), [], html);
  }
});

test('integrity only counts on a classic script, which the browser fetches as one file', () => {
  for (const type of ['', 'type=""', 'type="text/javascript"', 'type=" TEXT/JavaScript "', 'type="application/ecmascript"', 'type="text/javascript1.5"', 'language="JavaScript"', 'language=""']) {
    assert.deepEqual(pins(`<script ${type} src="${REACT}" integrity="${HASH}"></script>`), ['react@18.3.1'], type);
  }
  for (const type of ['type="module"', 'type="\tMODULE\n"', 'type="text/babel"', 'type="text/jsx"', 'type="text/plain"', 'type=" "', 'type="text/javascript; charset=utf-8"', `type="${NBSP}text/javascript"`, 'language="vbscript"', 'language="javascript "', 'type="importmap"']) {
    const [script] = findings(`<script ${type} src="${REACT}" integrity="${HASH}"></script>`).filter(({ text }) => text === REACT);
    assert.deepEqual([script.problems, script.name, script.version], [[NOT_CHECKED], 'react', '18.3.1'], type);
  }
  assert.deepEqual(pins(`<svg><script href="${REACT}" integrity="${HASH}"/></svg>`), [[NOT_CHECKED]]);
});

test('a <base href> and an import map are problems', () => {
  // With <base href="/node_modules/"> the browser loads /node_modules/app.js, which the lint does not read.
  for (const href of ['/node_modules/', '/kits/', 'kits/', '.', '', 'https://example.test/', '//example.test/', 'https://']) {
    const [base, ...rest] = findings(`<head>\n<base href="${href}">\n<script src="app.js"></script></head>`);
    assert.deepEqual([base.line, base.text, rest], [2, href, []], href);
    assert.match(base.problems[0], /^is a <base href>/, href);
  }
  assert.deepEqual(findings('<base target="_blank"><script src="app.js"></script>'), []);
  for (const type of ['importmap', ' ImportMap ', '\nIMPORTMAP\t']) {
    const [map, ...rest] = findings(`<script type="${type}">{"imports":{"kit":"https://example.test/kit.js"}}</script><script type="module">import 'kit';</script>`);
    assert.match(map.problems[0], /^is an import map/, type);
    assert.deepEqual(rest, [], type);
  }
});

test('a page that a browser could read in another encoding is a problem', () => {
  const script = '<script src="https://example.test/x.js"></script>';
  // Not UTF-8: UTF-16 with its byte order mark, a Latin-1 byte.
  for (const bytes of [Buffer.from(`﻿${script}`, 'utf16le'), Buffer.from('<p>caf\xe9</p>', 'latin1')]) {
    assert.deepEqual(pageFindings(bytes), [{ line: 1, text: '', problems: ['is not valid UTF-8, so this check and the lint cannot read what a browser would'] }]);
  }
  // Control characters: the escape of ISO-2022-JP, the NULs of UTF-16 without a byte order mark.
  for (const [bytes, line] of [
    [Buffer.from(`<p>one</p>\n<p title="${String.fromCharCode(0x1b)}$B">two</p>`), 2],
    [Buffer.from('<p>one</p>', 'utf16le'), 1],
    [Buffer.from(`<p>${String.fromCharCode(0x0b)}</p>`), 1]
  ]) {
    const [control] = pageFindings(bytes);
    assert.deepEqual([control.line, control.text, control.problems], [line, '', ['holds a control character, which can make a browser read it in another encoding']]);
  }
  for (const meta of [
    '<meta charset="shift_jis">',
    '<meta charset=" ISO-2022-JP ">',
    '<meta charset="utf-16">',
    '<meta charset="">',
    '<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">',
    '<meta http-equiv="content-type" content="text/html; CHARSET=Shift_JIS">',
    `<meta http-equiv=' content-type ' content='text/html;charset = "EUC-JP"'>`
  ]) {
    const [declared, ...rest] = pageFindings(`<head>\n${meta}</head><p>plain</p>`);
    assert.equal(declared.line, 2, meta);
    assert.match(declared.problems[0], /^declares an encoding other than UTF-8/, meta);
    assert.deepEqual(rest, [], meta);
  }
  assert.equal(pageFindings('<meta charset="Shift_JIS">')[0].text, 'shift_jis');
  // A page with characters outside ASCII or with a script has to say it is UTF-8.
  for (const page of [
    '<p>café</p>',
    '<meta name="viewport" content="width=device-width"><meta http-equiv="refresh" content="5"><p>café</p>',
    '<p>plain</p><script src="app.js"></script>',
    '<p>plain</p><script>run()</script>',
    '<svg><script>run()</script></svg>'
  ]) {
    assert.deepEqual(pageFindings(page), [{ line: 1, text: '', problems: [NO_DECLARATION] }], page);
  }
  // A declaration counts only when a browser honours it before anything else in the page.
  const local = '<script src="app.js"></script>';
  for (const page of [
    // Not a declaration to a browser: the pragma has to be content-type and nothing else.
    `<meta http-equiv=" content-type " content="text/html; charset=utf-8">${local}`,
    `<meta http-equiv="content-type\n" content="text/html; charset=utf-8">${local}`,
    `<meta http-equiv="x-content-type" content="text/html; charset=utf-8">${local}`,
    `<meta name="content-type" content="text/html; charset=utf-8">${local}`,
    `<meta content="text/html; charset=utf-8">${local}`,
    `<meta http-equiv="content-type" content="text/html; charset utf-8">${local}`,
    `<meta data-charset="utf-8">${local}`,
    `<!-- <meta charset="utf-8"> -->${local}`,
    `<title><meta charset="utf-8"></title>${local}`,
    // Not the first element of the file. What a browser takes for a <meta> may hide in the one before.
    `${local}<meta charset="utf-8">`,
    `<script>run()</script><meta charset="utf-8">`,
    `<svg><script>run()</script></svg><meta charset="utf-8">`,
    `<title>Kit</title><meta charset="utf-8">${local}`,
    `<title><meta charset=gbk></title><meta charset="utf-8">${local}`,
    `<link rel="icon" href="icon.svg"><meta charset="utf-8">${local}`,
    `<meta name="viewport" content="width=device-width"><meta charset="utf-8">${local}`,
    `<p>one</p><meta charset="utf-8">${local}`,
    `<template><meta charset="utf-8"></template>${local}`,
    `<svg><meta charset="utf-8"></svg>${local}`,
    // In the tree the parser puts this <meta> before the table, and so before the script.
    `<table><script>run()</script><meta charset="utf-8"></table>`,
    `<title><meta charset=gbk></title>\n<table>\n<script>run()</script>\n<meta charset=utf-8>\n</table>`,
    // Not whole within the first 1024 bytes.
    `<html data-pad="${'x'.repeat(985)}"><meta charset="utf-8">${local}`,
    `<html data-pad="${'é'.repeat(492)}x"><meta charset="utf-8">${local}`,
    `<!--${'x'.repeat(996)}--><meta charset="utf-8">${local}`
  ]) {
    assert.deepEqual(pageFindings(page), [{ line: 1, text: '', problems: [NO_DECLARATION] }], page.slice(0, 90));
  }
  // The last three again, one byte shorter: the declaration ends at byte 1024.
  for (const page of [
    `<html data-pad="${'x'.repeat(984)}"><meta charset="utf-8">${local}`,
    `<html data-pad="${'é'.repeat(492)}"><meta charset="utf-8">${local}`,
    `<!--${'x'.repeat(995)}--><meta charset="utf-8">${local}`
  ]) {
    assert.equal(Buffer.byteLength(page.slice(0, page.indexOf('<script'))), 1024);
    assert.deepEqual(pageFindings(page), [], page.slice(0, 20));
  }
  // The first `charset=` of a pragma decides, as in a browser, so these pages declare nothing a browser honours.
  for (const [content, label] of [['text/html; charset=bogus; charset=utf-8', 'bogus'], ['text/html; charset=', ''], ['charset="utf-8; charset=utf-8', '"utf-8']]) {
    const [declared, missing, ...rest] = pageFindings(`<meta http-equiv="content-type" content='${content}'>${local}`);
    assert.equal(declared.text, label, content);
    assert.match(declared.problems[0], /^declares an encoding other than UTF-8/, content);
    assert.deepEqual([missing.problems, rest], [[NO_DECLARATION], []], content);
  }
  for (const page of [
    '<p>plain</p>',
    '<meta name="viewport" content="width=device-width"><p>plain\ttext\r\n\fhere</p>',
    `<meta http-equiv="Content-Type" content="text/html; charset=utf-8">${local}`,
    `<meta http-equiv="CONTENT-TYPE" content="charset =\t'UTF8'">${local}`,
    `<meta charset="\n utf-8 \t">${local}`,
    `<!doctype html>\n<!-- kit -->\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>Kit</title>\n</head>\n<body>${local}</body></html>`,
    `text<meta charset="utf-8">${local}`,
    `<meta charset="utf-8"><table>${local}</table>`,
    `<meta charset="utf-8"><meta http-equiv=" content-type " content="text/html; charset=utf-8">${local}`,
    '<meta charset="utf-8"><p>café</p>',
    '<meta charset=" UTF8 "><p>café</p>',
    '<meta http-equiv="content-type" content="text/html; charset=UTF-8"><p>café</p>',
    `<meta http-equiv="content-type" content='text/html; charset="utf-8"'><p>café</p>`,
    Buffer.from('﻿<p>café</p>')
  ]) {
    assert.deepEqual(pageFindings(page), [], String(page));
  }
});

test('an address is resolved from a page served without TLS, with TLS and opened from disk', () => {
  assert.deepEqual(otherOrigins('//example.test/x.js').map(String), ['http://example.test/x.js', 'https://example.test/x.js', 'file://example.test/x.js']);
  assert.deepEqual(otherOrigins('https:x.js').map(String), ['https://x.js/', 'https://x.js/']);
  assert.deepEqual(otherOrigins('http:x.js').map(String), ['http://x.js/', 'http://x.js/']);
  assert.equal(otherOrigins('data:text/javascript,run()').length, 3);
  for (const address of ['x.js', './x.js', '../x.js', '/x.js', '?x', '', 'https://']) assert.deepEqual(otherOrigins(address), [], address);
  assert.deepEqual(repositoryPaths('kits/x.js?v=1'), ['/kits/x.js', '/kits/x.js', '/repository/kits/x.js']);
  assert.deepEqual(repositoryPaths('https:x.js'), ['/x.js']);
  assert.deepEqual(repositoryPaths('https://example.test/x.js'), []);
});

test('the lint reads four extensions, in lower case, outside node_modules', () => {
  for (const path of ['/x.js', '/kits/a/x.mjs', '/x.cjs', '/Kit.jsx', '/node_modules_old/x.js', '/x.node_modules/y.js']) assert.equal(isLinted(path), true, path);
  for (const path of ['/x.JS', '/x.ts', '/x.js.txt', '/xjs', '/x.js/', '/x%2Ejs', '/node_modules/x.js', '/kits/node_modules/pkg/x.js', '/NODE_MODULES/x.js', '/node%5fmodules/x.js', '/kits%2fnode_modules/x.js', '/kits\\node_modules\\x.js']) {
    assert.equal(isLinted(path), false, path);
  }
  assert.equal(isLinted('/100%/x.js'), true);
});

test('each finding carries the line of its element', () => {
  const html = '<html>\n<script src="https://example.test/a.js"></script>\n\n<script\n src="https://example.test/b.js"></script>';
  assert.deepEqual(findings(html).map(({ line }) => line), [2, 4]);
});

test('the walk finds the HTML files and every symbolic link, outside .git and node_modules', () => {
  /* eslint-disable security/detect-non-literal-fs-filename -- a throwaway directory under the system temporary directory */
  const root = mkdtempSync(join(tmpdir(), 'cdn-scripts-'));
  try {
    for (const directory of ['kits/a', '.git', 'node_modules/pkg', 'kits/node_modules']) mkdirSync(join(root, directory), { recursive: true });
    for (const file of ['index.html', 'kits/a/page.HTM', 'kits/a/notes.txt', 'kits/a/script.js', 'kits/a/html', '.git/hook.html', 'node_modules/pkg/doc.html', 'kits/node_modules/doc.html']) {
      writeFileSync(join(root, file), '');
    }
    symlinkSync('notes.txt', join(root, 'kits/a/linked.html'));
    symlinkSync('missing.txt', join(root, 'kits/a/dangling.html'));
    symlinkSync('a', join(root, 'kits/directory.html'));
    // The link of the finding: "kits/linked/doc.html" is a file under node_modules.
    symlinkSync('node_modules', join(root, 'kits/linked'));
    symlinkSync('../kits', join(root, 'node_modules/back'));
    const { pages, links } = walk(root);
    assert.deepEqual(pages.map((file) => relative(root, file)), ['index.html', 'kits/a/page.HTM']);
    assert.deepEqual(links.map((file) => relative(root, file)), ['kits/a/dangling.html', 'kits/a/linked.html', 'kits/directory.html', 'kits/linked']);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
  /* eslint-enable security/detect-non-literal-fs-filename */
});
