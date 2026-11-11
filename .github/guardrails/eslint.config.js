// Security lint for the JavaScript in this repository (RBX engineering
// guardrail 2). It carries security rules only: it is not a style or a
// correctness lint. Every finding is an error: fix it, or disable the rule at
// the line with the reason after `--`.
//
// It is an aid to review, not a sandbox: it reports the patterns its rules
// know in the files it reads, and code that runs can load and run other code
// in ways no rule sees.
//
// It reads the .js, .mjs, .cjs and .jsx files and the inline scripts of the
// pages named .html or .htm (inline-scripts.mjs finds them), outside
// node_modules. It does not read code written in an HTML attribute (onclick,
// a javascript: address, srcdoc) or inside an SVG file, and it reads every
// file as UTF-8. cdn-scripts.mjs fails on a page that loads a file of the
// repository this lint does not read, or that a browser could read in
// another encoding.
//
// Run it from the repository root:
//   .github/guardrails/node_modules/.bin/eslint --config .github/guardrails/eslint.config.js .
import noUnsanitized from 'eslint-plugin-no-unsanitized';
import security from 'eslint-plugin-security';
import globals from 'globals';
import inlineScripts from './inline-scripts.mjs';
import { entersNodeModules, otherOrigins } from './repository-origin.mjs';

// A specifier that starts with `/`, `./` or `../` is an address, resolved the
// way a browser resolves it; any other is a package name unless the URL
// parser reads it as a URL.
const isAddress = (specifier) => /^\.{0,2}\//.test(specifier);

// A module specifier that names neither a file of this repository, nor a
// package, nor a Node built-in.
function leavesTheRepository(specifier) {
  if (isAddress(specifier)) return otherOrigins(specifier).length > 0;
  return URL.canParse(specifier) && new URL(specifier).protocol !== 'node:';
}

// Code that no lockfile pins and no vulnerability scan reads: a module
// loaded from another origin. An import() whose specifier is not a plain
// string is reported too, because the rule cannot tell what it loads, and so
// is a path into node_modules, where a file is not linted and should come
// from a package of the lockfile, imported by name.
const noRemoteModule = {
  meta: {
    type: 'problem',
    schema: [],
    messages: {
      remote: 'This module is not a file of the repository, a package or a Node built-in: no lockfile pins it and no scan reads it.',
      computed: 'This import() computes its specifier, so the lint cannot tell what it loads.',
      unlinted: 'This path goes into node_modules, which the lint does not read: import the package by its name.'
    }
  },
  create(context) {
    const check = ({ source }) => {
      if (!source) return;
      const specifier =
        source.type === 'Literal' ? source.value : source.type === 'TemplateLiteral' && !source.expressions.length ? source.quasis[0].value.cooked : undefined;
      if (typeof specifier !== 'string') context.report({ node: source, messageId: 'computed' });
      else if (leavesTheRepository(specifier)) context.report({ node: source, messageId: 'remote' });
      else if (isAddress(specifier) && entersNodeModules(specifier)) context.report({ node: source, messageId: 'unlinted' });
    };
    return { ImportDeclaration: check, ImportExpression: check, ExportNamedDeclaration: check, ExportAllDeclaration: check };
  }
};

export default [
  {
    // The inline scripts of an HTML page reach the lint as files named
    // <page>/<n>.js (a classic script) or <page>/<n>.mjs (a module). A page
    // is a file named .html or .htm in any capitalization, the same files
    // cdn-scripts.mjs reads.
    files: ['**/*.[hH][tT][mM]', '**/*.[hH][tT][mM][lL]'],
    processor: inlineScripts
  },
  {
    // The JavaScript files and those inline scripts.
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { security, 'no-unsanitized': noUnsanitized, rbx: { rules: { 'no-remote-module': noRemoteModule } } },
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: { ecmaFeatures: { jsx: true } },
      // The eval rules only follow names they know as globals (setTimeout,
      // window.eval and the like), in the browser and in Node.
      globals: { ...globals.browser, ...globals.node }
    },
    linterOptions: { reportUnusedDisableDirectives: 'error' },
    rules: {
      ...Object.fromEntries(
        Object.keys(security.configs.recommended.rules).map((rule) => [rule, 'error'])
      ),
      // DOM sinks that turn a string into markup or code.
      'no-unsanitized/method': 'error',
      'no-unsanitized/property': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      'no-restricted-syntax': [
        'error',
        // The React sink for raw markup, as a JSX attribute or as a prop object key.
        {
          selector: "JSXAttribute[name.name='dangerouslySetInnerHTML']",
          message: 'dangerouslySetInnerHTML renders a string as markup.'
        },
        {
          selector:
            ":matches(Property[key.name='dangerouslySetInnerHTML'], Property[key.value='dangerouslySetInnerHTML'])",
          message: 'dangerouslySetInnerHTML renders a string as markup.'
        }
      ],
      'rbx/no-remote-module': 'error'
    }
  },
  {
    // Classic scripts, not modules: the files of the UI kits, which a page
    // loads with <script> and Babel standalone compiles in the browser, and
    // the inline scripts that are not modules.
    files: ['design-systems/*/ui_kits/**/*.{js,jsx}', '**/*.[hH][tT][mM]/*.js', '**/*.[hH][tT][mM][lL]/*.js'],
    languageOptions: { sourceType: 'script' }
  },
  {
    // These command-line scripts and tests of the two pnpm projects read and
    // write the paths the operator gives them and the files of their own
    // project. No request names a path there. The list is closed: a script
    // that is not on it is linted in full, and server.mjs, which answers HTTP
    // requests, is not on it.
    files: [
      'design-systems/rbx-systems/marketing-creatives/scripts/render.mjs',
      'design-systems/rbx-systems/marketing-creatives/scripts/render-input.test.mjs',
      'design-systems/satwake/creative-review/scripts/core.mjs',
      'design-systems/satwake/creative-review/scripts/creative.mjs',
      'design-systems/satwake/creative-review/scripts/render.mjs',
      'design-systems/satwake/creative-review/tests/flow.test.mjs'
    ],
    rules: { 'security/detect-non-literal-fs-filename': 'off' }
  }
];
