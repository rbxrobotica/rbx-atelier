// node --test .github/guardrails/eslint-config.test.mjs
//
// Runs eslint.config.js over one sample of each pattern the security lint is
// there to catch, over the forms a remote module specifier can take, and over
// the ways a page can carry an inline script.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { ESLint } from 'eslint';

const eslint = new ESLint({
  cwd: fileURLToPath(new URL('../../', import.meta.url)),
  overrideConfigFile: fileURLToPath(new URL('eslint.config.js', import.meta.url))
});

// The rules reported as errors for `code` as the content of `file` (a path that need not exist).
async function rules(code, file = 'sample.mjs') {
  const [{ messages }] = await eslint.lintText(code, { filePath: file });
  for (const { fatal, message } of messages) assert.ok(!fatal, `${file} does not parse: ${message}`);
  return messages.filter(({ severity }) => severity === 2).map(({ ruleId, message }) => ruleId ?? message);
}

test('each dangerous pattern is reported by its rule', async () => {
  for (const [code, rule] of [
    ['eval(input);', 'no-eval'],
    ['window.eval(input);', 'no-eval'],
    ['new Function(input)();', 'no-new-func'],
    ["setTimeout('run()', 10);", 'no-implied-eval'],
    ["window.setTimeout('run()', 10);", 'no-implied-eval'],
    ["location.href = 'javascript:run()';", 'no-script-url'],
    ["import { exec } from 'node:child_process'; exec(input);", 'security/detect-child-process'],
    ["import { readFileSync } from 'node:fs'; readFileSync(input);", 'security/detect-non-literal-fs-filename'],
    ['table[input] = 1;', 'security/detect-object-injection'],
    ['new RegExp(input);', 'security/detect-non-literal-regexp'],
    ['/(a+)+$/.test(input);', 'security/detect-unsafe-regex'],
    ['document.body.innerHTML = input;', 'no-unsanitized/property'],
    ["document.body.insertAdjacentHTML('beforeend', input);", 'no-unsanitized/method'],
    ['document.write(input);', 'no-unsanitized/method'],
    ['const view = <div dangerouslySetInnerHTML={{ __html: input }} />;', 'no-restricted-syntax'],
    ["const view = React.createElement('div', { dangerouslySetInnerHTML: { __html: input } });", 'no-restricted-syntax'],
    ["const view = React.createElement('div', { 'dangerouslySetInnerHTML': { __html: input } });", 'no-restricted-syntax']
  ]) {
    assert.ok((await rules(code)).includes(rule), `${rule} did not report: ${code}`);
  }
});

test('the kits and the inline scripts of a page are linted too', async () => {
  // A kit file is a classic script: `with` only parses outside a module.
  assert.ok((await rules('with (Math) { eval(input); }', 'design-systems/kit/ui_kits/app/Kit.jsx')).includes('no-eval'));
  const page = [
    '<script>eval(location.hash);</script>',
    '<script type="text/babel">const view = <div dangerouslySetInnerHTML={{ __html: input }} />;</script>',
    '<script type="module">import kit from "https://example.test/kit.js";</script>'
  ].join('\n');
  const reported = await rules(page, 'page.html');
  for (const rule of ['no-eval', 'no-restricted-syntax', 'rbx/no-remote-module']) assert.ok(reported.includes(rule), `${rule} did not report in page.html`);
});

test('an inline script is read to the end a browser gives it, and reported at its place in the page', async () => {
  // After `<!-- <script>` the next `</script>` does not close the element.
  const hidden = '<!doctype html>\n<script>\n// <!-- <script>\n// </script>\neval(location.hash);\n// -->\n</script>\n<p>after</p>';
  const [{ messages }] = await eslint.lintText(hidden, { filePath: 'page.html' });
  assert.deepEqual(
    messages.filter(({ ruleId }) => ruleId === 'no-eval').map(({ line, column, endLine, endColumn }) => [line, column, endLine, endColumn]),
    [[5, 1, 5, 5]]
  );
  const [{ messages: sameLine }] = await eslint.lintText('<p>one</p><script>  eval(input);</script>', { filePath: 'page.html' });
  assert.deepEqual(
    sameLine.filter(({ ruleId }) => ruleId === 'no-eval').map(({ line, column }) => [line, column]),
    [[1, 21]]
  );
  const two = '<script>\n  ok();\n</script>\n<script>\n\n    eval(input);\n</script>';
  const [{ messages: second }] = await eslint.lintText(two, { filePath: 'page.html' });
  assert.deepEqual(
    second.filter(({ ruleId }) => ruleId === 'no-eval').map(({ line, column }) => [line, column]),
    [[6, 5]]
  );
});

test('a page is linted under every name the CDN script check reads it under', async () => {
  for (const name of ['page.html', 'page.htm', 'page.HTML', 'page.HTM', 'Page.Html', 'kits/a/page.hTm']) {
    // `with` only parses in a classic script, so the script was also named as one.
    assert.ok((await rules('<script>with (Math) { eval(input); }</script>', name)).includes('no-eval'), name);
    assert.ok((await rules('<script type="module">import("//example.test/kit.js");</script>', name)).includes('rbx/no-remote-module'), name);
  }
});

test('an inline script is a classic script unless its type is module', async () => {
  const fatal = async (page) => (await eslint.lintText(page, { filePath: 'page.html' }))[0].messages.some((message) => message.fatal);
  assert.equal(await fatal('<script>with (Math) { run(PI); }</script>'), false);
  assert.equal(await fatal('<script type="text/babel">with (Math) { run(PI); }</script>'), false);
  assert.equal(await fatal('<script type="module">with (Math) { run(PI); }</script>'), true);
  assert.equal(await fatal('<script type=" MODULE ">import kit from "./kit.js"; run(kit);</script>'), false);
  assert.equal(await fatal('<script>import kit from "./kit.js"; run(kit);</script>'), true);
});

test('the text of a script that names a file is not linted: the browser runs the file', async () => {
  for (const page of [
    '<script src="kit.js">eval(input);</script>',
    '<script src>eval(input);</script>',
    '<svg><script href="kit.js">eval(input);</script></svg>',
    '<svg><script xlink:href="kit.js">eval(input);</script></svg>',
    '<!-- <script>eval(input);</script> -->',
    '<textarea><script>eval(input);</script></textarea>',
    '<script></script><p>eval(input);</p>'
  ]) {
    assert.deepEqual(await rules(page, 'page.html'), [], page);
  }
  for (const page of ['<script href="kit.js">eval(input);</script>', '<svg><script src="kit.js">eval(input);</script></svg>', '<script data-src="kit.js">eval(input);</script>']) {
    assert.ok((await rules(page, 'page.html')).includes('no-eval'), page);
  }
});

test('an inline script is linted whatever its type says, unless the type holds JSON', async () => {
  const nbsp = String.fromCharCode(0xa0);
  for (const attributes of [
    '',
    'type=""',
    'type="text/javascript"',
    'type="TEXT/JAVASCRIPT"',
    'type=" text/javascript "',
    'type="application/ecmascript"',
    'type="text/ecmascript"',
    'type="application/x-javascript"',
    'type="text/javascript1.5"',
    'type="text/jscript"',
    'type="text/livescript"',
    'type="module"',
    'type=" module "',
    'type="\tMODULE\n"',
    'type="mo&#100;ule"',
    'type="text/babel"',
    'type="text/jsx"',
    'type="text/whatever"',
    'type=" "',
    `type="${nbsp}application/json"`,
    'type="application/jsonp"',
    'type="module" type="application/json"',
    'language="JavaScript"',
    'language="javascript1.2"'
  ]) {
    assert.ok((await rules(`<script ${attributes}>eval(input);</script>`, 'page.html')).includes('no-eval'), attributes);
    assert.ok((await rules(`<svg><script ${attributes}>eval(input);</script></svg>`, 'page.html')).includes('no-eval'), `svg ${attributes}`);
  }
  assert.ok((await rules('<script type="application/ecmascript">import("//example.test/kit.js");</script>', 'page.html')).includes('rbx/no-remote-module'));
  assert.ok((await rules('<template><script>eval(input);</script></template>', 'page.html')).includes('no-eval'));
  // The text of an SVG script is all of its text, around any element inside it.
  assert.ok((await rules('<svg><script>run();<g></g>eval(input);</script></svg>', 'page.html')).includes('no-eval'));
  for (const type of ['application/json', 'application/ld+json', ' Application/JSON ', 'importmap', 'speculationrules']) {
    assert.deepEqual(await rules(`<script type="${type}">{ "imports": { "kit": "./kit.js" } }</script>`, 'page.html'), [], type);
  }
});

test('a disable directive that disables nothing is an error', async () => {
  const [{ messages }] = await eslint.lintText('// eslint-disable-next-line no-eval -- nothing to disable here\nexport const one = 1;', { filePath: 'sample.mjs' });
  assert.equal(messages.length, 1);
  assert.match(messages[0].message, /^Unused eslint-disable directive/);
  assert.equal(messages[0].severity, 2);
});

test('a module from another origin is reported, however its address is spelled', async () => {
  const tab = String.fromCharCode(9);
  for (const specifier of [
    'https://example.test/kit.js',
    'HTTPS://example.test/kit.js',
    'http://example.test/kit.js',
    '//example.test/kit.js',
    '/\\\\example.test/kit.js',
    ' https://example.test/kit.js',
    `ht${tab}tps://example.test/kit.js`,
    'https:example.test/kit.js',
    'data:text/javascript,run()',
    'file:///etc/kit.js'
  ]) {
    for (const code of [`import kit from '${specifier}';`, `import '${specifier}';`, `export * from '${specifier}';`, `export { kit } from '${specifier}';`, `const kit = import('${specifier}');`, `const kit = import(\`${specifier}\`);`]) {
      assert.deepEqual(await rules(code), ['rbx/no-remote-module'], code);
    }
  }
});

test('a file of the repository, a package and a Node built-in are not reported', async () => {
  for (const specifier of ['./kit.mjs', '../shared/kit.mjs', '/app.js', 'eslint', '@scope/kit', '#internal', 'node:fs']) {
    for (const code of [`import kit from '${specifier}';`, `export * from '${specifier}';`, `const kit = import('${specifier}');`, `const kit = import(\`${specifier}\`);`]) {
      assert.deepEqual(await rules(code), [], code);
    }
  }
  assert.deepEqual(await rules('const one = 1; export { one };'), []);
});

test('a path into node_modules is reported: the lint does not read the file', async () => {
  for (const specifier of ['./node_modules/pkg/index.js', '../node_modules/pkg/index.js', '/node_modules/pkg/index.js', './kits/node_modules/x.js', './node%5Fmodules/x.js', './Node_Modules/x.js']) {
    for (const code of [`import kit from '${specifier}';`, `export * from '${specifier}';`, `const kit = import('${specifier}');`]) {
      assert.deepEqual(await rules(code), ['rbx/no-remote-module'], code);
    }
  }
  for (const specifier of ['./node_modules_old/x.js', './x.node_modules.js', 'node_modules', 'pkg/node_modules/x.js']) {
    assert.deepEqual(await rules(`import kit from '${specifier}';`), [], specifier);
  }
});

test('an import() that computes its specifier is reported', async () => {
  for (const argument of ['name', "'https:' + '//example.test/kit.js'", '`https://example.test/${name}.js`', "ready ? './kit.mjs' : name"]) {
    assert.ok((await rules(`const kit = import(${argument});`)).includes('rbx/no-remote-module'), argument);
  }
});
