import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseArgs, fill } from './render-input.mjs';

test('documented space-separated command and equals command select the same variant', () => {
  assert.deepEqual(
    parseArgs(['--template', 'insight-card', '--variant', 'b2b-mod-001']),
    parseArgs(['--template=insight-card', '--variant=b2b-mod-001']),
  );
  assert.equal(parseArgs(['--all', '--channel=meta']).all, true);
});

test('reject ambiguous, unknown and path-like options', () => {
  for (const args of [
    ['--all', '--template=x'], ['--variant=x'], ['--template'],
    ['--unknown'], ['--template=../secret'], ['--channel='],
  ]) assert.throws(() => parseArgs(args));
});

test('bullets become separate escaped list items', () => {
  const html = fill('<ul>{{BULLETS}}</ul>', { BULLETS: ['one', '<img src=x onerror=alert(1)>'] });
  assert.equal((html.match(/<li /g) || []).length, 2);
  assert.ok(html.includes('&lt;img'));
  assert.ok(!html.includes('<img'));
});

test('copy is literal, including replacement patterns and other placeholders', () => {
  assert.equal(fill('{{HEADLINE}} {{BODY}}', { HEADLINE: '$& {{BODY}} <b>', BODY: 'A & B' }),
    '$&amp; {{BODY}} &lt;b&gt; A &amp; B');
  assert.throws(() => fill('{{MISSING}}', {}));
  assert.throws(() => fill('{{BULLETS}}', { BULLETS: 'one' }));
});

test('every committed variant fills its real template without missing fields', () => {
  const variants = JSON.parse(readFileSync(new URL('./variants.json', import.meta.url), 'utf8'));
  for (const [name, entries] of Object.entries(variants)) {
    const template = readFileSync(new URL(`../templates/${name}.html`, import.meta.url), 'utf8');
    for (const vars of Object.values(entries)) assert.doesNotMatch(fill(template, vars), /\{\{[A-Z0-9_]+\}\}/);
  }
});
