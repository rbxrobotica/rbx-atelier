import { parseArgs as parseNodeArgs } from 'node:util';

export function parseArgs(args) {
  const { values } = parseNodeArgs({
    args,
    options: {
      all: { type: 'boolean' },
      template: { type: 'string' },
      variant: { type: 'string' },
      channel: { type: 'string' },
    },
    strict: true,
    allowPositionals: false,
  });
  if (values.all && values.template) throw new Error('choose --all or --template');
  if (values.variant && !values.template) throw new Error('--variant requires --template');
  for (const key of ['template', 'variant', 'channel']) {
    if (values[key] !== undefined && !/^[a-z0-9][a-z0-9-]*$/.test(values[key])) {
      throw new Error(`invalid --${key}`);
    }
  }
  return values;
}

function escapeText(value) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    throw new Error('creative values must be text or numbers');
  }
  return String(value).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

// One pass prevents placeholders or replacement patterns inside copy from
// being interpreted as template instructions. All current slots are text.
export function fill(html, vars) {
  return html.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_, key) => {
    if (!Object.hasOwn(vars, key)) throw new Error(`missing creative field: ${key}`);
    if (key !== 'BULLETS') return escapeText(vars[key]);
    if (!Array.isArray(vars[key])) throw new Error('BULLETS must be an array');
    return vars[key].map(b => `<li style="display:flex; gap:24px; align-items:flex-start;"><span style="color:var(--cyan-brand); font-family:var(--font-mono); font-size:28px; line-height:1.3;">/</span><span class="body" style="font-size:32px; max-width:780px;">${escapeText(b)}</span></li>`).join('\n');
  });
}
