/* @ds-bundle: {"format":4,"namespace":"Gph","components":[{"name":"Icon"},{"name":"Logo"},{"name":"Button"},{"name":"TextField"},{"name":"Select"},{"name":"SearchBar"},{"name":"FilterChips"},{"name":"ListingCard"},{"name":"Badge"},{"name":"StatusBadge"},{"name":"Alert"},{"name":"Dialog"},{"name":"NavBar"},{"name":"BottomNav"},{"name":"Tabs"},{"name":"Stepper"},{"name":"PhotoGallery"},{"name":"AdvertiserCard"},{"name":"ContactPanel"},{"name":"EmptyState"},{"name":"Skeleton"},{"name":"Toast"}]} */
(function () {
  'use strict';
  var R = function () { return window.React; };
  function h() { var r = R(); return r.createElement.apply(r, arguments); }
  function useState(v) { return R().useState(v); }
  function useId(prefix) { var r = R(); var ref = r.useRef(null); if (!ref.current) { ref.current = (prefix || 'gph') + '-' + Math.random().toString(36).slice(2, 8); } return ref.current; }
  function cx() { var out = []; for (var i = 0; i < arguments.length; i++) { if (arguments[i]) out.push(arguments[i]); } return out.join(' '); }
  function omit(obj, keys) { var o = {}; for (var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k]; } return o; }
  function assign(a, b) { for (var k in b) { if (Object.prototype.hasOwnProperty.call(b, k)) a[k] = b[k]; } return a; }

  var LOGO = {"vb": "0 0 293.19 79.3", "scale": 1.65208, "frame": "M0 0H48V9H9V39H39V33H24V24H48V48H0Z", "word": "M133.8 73.3Q124.8 73.3 118.5 69.1Q112.3 64.9 108.9 57.3Q105.6 49.7 105.6 39.5Q105.6 29.2 109 21.7Q112.5 14.2 119.2 10.1Q125.9 6 135.8 6Q144.3 6 150 8.9Q155.8 11.8 159 16.9Q162.3 22.1 163.2 28.8H149.8Q148.8 22.8 145.3 19.7Q141.7 16.5 135.6 16.5Q127.5 16.5 123.5 22.5Q119.6 28.6 119.6 39.6Q119.6 50.8 123.7 56.9Q127.8 63 135.9 63Q142.7 63 146.3 59Q150 55.1 150.4 48.3H132.1V38.2H163.3V72.2H153.2V64.7H151.2Q149.5 68 145.5 70.7Q141.4 73.3 133.8 73.3ZM172.4 72.2V7.2H199.6Q212.1 7.2 217.8 12.4Q223.6 17.7 223.6 26.7Q223.6 35.6 217.8 40.9Q212.1 46.2 199.6 46.2H186.2V72.2ZM186.2 35.7H197.5Q203.1 35.7 206.3 33.8Q209.6 31.8 209.6 26.7Q209.6 21.7 206.3 19.7Q203.1 17.7 197.5 17.7H186.2ZM231.2 72.2V7.2H245.2V31.9H272.9V7.2H286.9V72.2H272.9V43.2H245.2V72.2Z", "dot": [43.5, 16.5, 4.5]};

  /* ---------- Icon: 24px grid, 1.75 stroke, round joins ---------- */
  var ICONS = {
    search: ['M11 4a7 7 0 1 0 0 14a7 7 0 0 0 0-14z', 'M20 20l-4.2-4.2'],
    'map-pin': ['M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z', 'M12 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z'],
    sliders: ['M4 7h10', 'M18 7h2', 'M4 17h4', 'M12 17h8', 'M16 5v4', 'M10 15v4'],
    heart: ['M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z'],
    share: ['M12 15V4', 'M8 8l4-4l4 4', 'M5 13v6h14v-6'],
    phone: ['M6.5 3.5h3l1.5 4l-2 1.5a10 10 0 0 0 6 6l1.5-2l4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2z'],
    message: ['M4 5h16v11H9l-5 4z'],
    camera: ['M4 8h3.5l1.5-2.5h6L16.5 8H20v11H4z', 'M12 10.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5z'],
    image: ['M4 5h16v14H4z', 'M4 16l5-5l4 4l2-2l5 5', 'M15.5 8.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z'],
    plus: ['M12 5v14', 'M5 12h14'],
    edit: ['M4 20h4L19 9l-4-4L4 16z', 'M13.5 6.5l4 4'],
    trash: ['M5 7h14', 'M9 7V4h6v3', 'M7 7l1 13h8l1-13'],
    eye: ['M2.5 12S6 5.5 12 5.5S21.5 12 21.5 12S18 18.5 12 18.5S2.5 12 2.5 12z', 'M12 9.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z'],
    clock: ['M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z', 'M12 7.5V12l3 2'],
    check: ['M5 12.5l4.5 4.5L19 7.5'],
    'check-circle': ['M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z', 'M8 12.3l2.8 2.8L16.2 9.6'],
    alert: ['M12 4L2.8 19.5h18.4z', 'M12 10v4.5', 'M12 17.2v.3'],
    'alert-circle': ['M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z', 'M12 8v5', 'M12 16v.3'],
    info: ['M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z', 'M12 11v5.5', 'M12 7.8v.3'],
    x: ['M6 6l12 12', 'M18 6L6 18'],
    'chevron-left': ['M14.5 6l-6 6l6 6'],
    'chevron-right': ['M9.5 6l6 6l-6 6'],
    'chevron-down': ['M6 9.5l6 6l6-6'],
    imoveis: ['M3.5 11L12 4l8.5 7', 'M5.5 9.5V20h13V9.5', 'M10 20v-5.5h4V20'],
    veiculos: ['M4 16.5V12l2-5h12l2 5v4.5z', 'M4 12h16', 'M7.5 16.5v2', 'M16.5 16.5v2', 'M7.5 14h.01', 'M16.5 14h.01'],
    servicos: ['M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4l5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5l-2.5-.5l-.5-2.5z'],
    'compra-venda': ['M3.5 12.5V4h8.5l8.5 8.5l-8.5 8.5z', 'M8 7.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z'],
    pessoais: ['M9 11a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7z', 'M3 20c.6-3.5 3-5.5 6-5.5s5.4 2 6 5.5', 'M15.5 4.3a3.5 3.5 0 0 1 0 6.4', 'M17.5 14.8c1.8.7 3 2.5 3.5 5.2'],
    star: ['M12 3.8l2.5 5.3l5.8.7l-4.3 4l1.1 5.7L12 16.7l-5.1 2.8L8 13.8l-4.3-4l5.8-.7z'],
    'shield-check': ['M12 3.5l7 2.8V12c0 4.3-3 7.2-7 8.5c-4-1.3-7-4.2-7-8.5V6.3z', 'M8.8 12.2l2.2 2.2l4.2-4.4'],
    flag: ['M5.5 21V4', 'M5.5 4.5h11l-2 4l2 4h-11'],
    menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
    upload: ['M12 15V4', 'M8 8l4-4l4 4', 'M4 15v5h16v-5'],
    user: ['M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8z', 'M4.5 20.5c.8-4 3.8-6.5 7.5-6.5s6.7 2.5 7.5 6.5'],
    'log-in': ['M10 4h9v16h-9', 'M3.5 12H14', 'M10.5 8.5L14 12l-3.5 3.5'],
    pause: ['M9 5v14', 'M15 5v14'],
    grid: ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'],
    home: ['M3.5 11L12 4l8.5 7', 'M5.5 9.5V20h13V9.5'],
    list: ['M8 6h12', 'M8 12h12', 'M8 18h12', 'M4 6h.01', 'M4 12h.01', 'M4 18h.01'],
    external: ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v6H4V6h6'],
    sort: ['M7 4v16', 'M3.5 16.5L7 20l3.5-3.5', 'M17 20V4', 'M13.5 7.5L17 4l3.5 3.5'],
    refresh: ['M20 7v5h-5', 'M19.5 12A7.5 7.5 0 1 1 17 6.3L20 9']
  };
  var CATEGORY_ICON = { 'Imóveis': 'imoveis', 'Serviços': 'servicos', 'Veículos': 'veiculos', 'Compra & Venda': 'compra-venda', 'Pessoais': 'pessoais' };

  function Icon(props) {
    var name = props.name, size = props.size || 20, title = props.title;
    var d = ICONS[name] || ICONS['info'];
    var rest = omit(props, ['name', 'size', 'title', 'className']);
    var children = d.map(function (p, i) { return h('path', { key: i, d: p }); });
    if (title) children.unshift(h('title', { key: 't' }, title));
    return h('svg', assign({ className: cx('gph-icon', props.className), width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': title ? undefined : 'true', role: title ? 'img' : undefined, focusable: 'false' }, rest), children);
  }
  Icon.names = Object.keys(ICONS);

  /* ---------- Logo (live, theme-aware copy of gph-horizontal.svg) ---------- */
  function Logo(props) {
    var height = props.height || 28, symbolOnly = props.symbolOnly;
    var vb = LOGO.vb.split(' ');
    var w = symbolOnly ? 48 * LOGO.scale : parseFloat(vb[2]);
    var H = parseFloat(vb[3]);
    return h('svg', { className: cx('gph-logo', props.className), viewBox: '0 0 ' + w + ' ' + H, height: height, width: height * w / H, role: 'img', 'aria-label': props.label || 'GPH Galeria Premium Hoje' },
      h('g', { transform: 'scale(' + LOGO.scale + ')' },
        h('path', { className: 'gph-logo-frame', d: LOGO.frame }),
        h('circle', { className: 'gph-logo-dot', cx: LOGO.dot[0], cy: LOGO.dot[1], r: LOGO.dot[2] })),
      symbolOnly ? null : h('path', { className: 'gph-logo-word', d: LOGO.word }));
  }

  /* ---------- Button ---------- */
  function Button(props) {
    var variant = props.variant || 'secondary', size = props.size || 'm';
    var cls = cx('gph-btn', 'gph-btn-' + variant, 'gph-btn-' + size, props.iconOnly && 'gph-btn-icon', props.block && 'gph-btn-block', props.loading && 'gph-btn-loading', props.className);
    var rest = omit(props, ['variant', 'size', 'icon', 'iconEnd', 'iconOnly', 'loading', 'block', 'className', 'children', 'href', 'type']);
    var inner = [
      props.loading ? h('span', { key: 's', className: 'gph-spinner', 'aria-hidden': 'true' }) : (props.icon ? h(Icon, { key: 'i', name: props.icon, size: size === 's' ? 16 : 20 }) : null),
      props.iconOnly ? null : h('span', { key: 'l', className: 'gph-btn-label' }, props.children),
      props.iconEnd && !props.iconOnly ? h(Icon, { key: 'e', name: props.iconEnd, size: size === 's' ? 16 : 20 }) : null
    ];
    if (props.loading) rest['aria-busy'] = 'true';
    if (props.iconOnly && !rest['aria-label'] && typeof props.children === 'string') rest['aria-label'] = props.children;
    if (props.href) return h('a', assign({ className: cls, href: props.href }, rest), inner);
    return h('button', assign({ className: cls, type: props.type || 'button', disabled: props.disabled || props.loading }, rest), inner);
  }

  /* ---------- Field wrapper ---------- */
  function Field(p, control, id) {
    var hintId = id + '-hint', errId = id + '-err';
    return h('div', { className: cx('gph-field', p.error && 'gph-field-error', p.disabled && 'gph-field-disabled', p.className) },
      p.label ? h('label', { className: 'gph-field-label', htmlFor: id }, p.label, p.optional ? h('span', { className: 'gph-field-optional' }, ' (opcional)') : null) : null,
      control,
      p.error ? h('p', { className: 'gph-field-msg gph-field-msg-error', id: errId }, h(Icon, { name: 'alert-circle', size: 16 }), h('span', null, p.error))
        : (p.hint || p.counter ? h('p', { className: 'gph-field-msg', id: hintId }, h('span', null, p.hint || ''), p.counter ? h('span', { className: 'gph-field-counter' }, p.counter) : null) : null));
  }

  function TextField(props) {
    var gen = useId('gph-tf'); var id = props.id || gen;
    var describedBy = props.error ? id + '-err' : (props.hint || props.counter ? id + '-hint' : undefined);
    var rest = omit(props, ['label', 'hint', 'error', 'prefix', 'suffix', 'multiline', 'rows', 'optional', 'counter', 'className', 'id', 'icon']);
    var common = assign({ id: id, className: 'gph-input', 'aria-invalid': props.error ? 'true' : undefined, 'aria-describedby': describedBy }, rest);
    var control = props.multiline ? h('textarea', assign(common, { rows: props.rows || 5 }))
      : h('div', { className: cx('gph-input-wrap', props.icon && 'gph-input-has-icon') },
        props.icon ? h(Icon, { name: props.icon, size: 20, className: 'gph-input-icon' }) : null,
        props.prefix ? h('span', { className: 'gph-input-affix' }, props.prefix) : null,
        h('input', assign({ type: 'text' }, common)),
        props.suffix ? h('span', { className: 'gph-input-affix' }, props.suffix) : null);
    return Field(props, control, id);
  }

  function Select(props) {
    var gen = useId('gph-sel'); var id = props.id || gen;
    var opts = (props.options || []).map(function (o, i) { var v = typeof o === 'string' ? { value: o, label: o } : o; return h('option', { key: i, value: v.value }, v.label); });
    if (props.placeholder) opts.unshift(h('option', { key: 'ph', value: '' }, props.placeholder));
    var rest = omit(props, ['label', 'hint', 'error', 'options', 'placeholder', 'className', 'id', 'optional']);
    var control = h('div', { className: 'gph-select-wrap' },
      h('select', assign({ id: id, className: 'gph-input gph-select', 'aria-invalid': props.error ? 'true' : undefined, 'aria-describedby': props.error ? id + '-err' : (props.hint ? id + '-hint' : undefined) }, rest), opts),
      h(Icon, { name: 'chevron-down', size: 18, className: 'gph-select-chevron' }));
    return Field(props, control, id);
  }

  /* ---------- SearchBar ---------- */
  var CATEGORIES = ['Imóveis', 'Serviços', 'Veículos', 'Compra & Venda', 'Pessoais'];
  function SearchBar(props) {
    var size = props.size || 'l';
    var qs = useState(props.query || ''), ls = useState(props.location || '');
    var q = qs[0], setQ = qs[1], loc = ls[0], setLoc = ls[1];
    var idq = useId('gph-q'), idc = useId('gph-cat'), idl = useId('gph-loc');
    function submit(e) { if (e) e.preventDefault(); if (props.onSubmit) props.onSubmit({ query: q, location: loc }); }
    return h('form', { className: cx('gph-search', 'gph-search-' + size, props.className), role: 'search', onSubmit: submit, 'aria-label': 'Buscar anúncios' },
      h('div', { className: 'gph-search-cell gph-search-q' },
        h('label', { className: 'gph-search-label', htmlFor: idq }, 'O que você está procurando?'),
        h('div', { className: 'gph-search-input' }, h(Icon, { name: 'search', size: 20 }),
          h('input', { id: idq, type: 'search', value: q, onChange: function (e) { setQ(e.target.value); }, placeholder: props.placeholder || 'Apartamento, bicicleta, eletricista...' }))),
      h('div', { className: 'gph-search-cell gph-search-cat' },
        h('label', { className: 'gph-search-label', htmlFor: idc }, 'Categoria'),
        h('div', { className: 'gph-search-input' }, h('select', { id: idc, defaultValue: props.category || '' },
          [h('option', { key: 'all', value: '' }, 'Todas as categorias')].concat((props.categories || CATEGORIES).map(function (c) { return h('option', { key: c, value: c }, c); }))),
          h(Icon, { name: 'chevron-down', size: 18, className: 'gph-select-chevron' }))),
      h('div', { className: 'gph-search-cell gph-search-loc' },
        h('label', { className: 'gph-search-label', htmlFor: idl }, 'Onde'),
        h('div', { className: 'gph-search-input' }, h(Icon, { name: 'map-pin', size: 20 }),
          h('input', { id: idl, type: 'text', value: loc, onChange: function (e) { setLoc(e.target.value); }, placeholder: 'Todo o Brasil' }))),
      h(Button, { variant: 'primary', size: size === 'l' ? 'l' : 'm', type: 'submit', icon: 'search', className: 'gph-search-submit' }, props.submitLabel || 'Pesquisar'));
  }

  /* ---------- FilterChips ---------- */
  function FilterChips(props) {
    var items = props.items || [];
    var st = useState(items.filter(function (i) { return i.selected; }).map(function (i) { return i.id; }));
    var sel = props.selected || st[0];
    function toggle(id) {
      var next = sel.indexOf(id) >= 0 ? sel.filter(function (x) { return x !== id; }) : sel.concat([id]);
      st[1](next); if (props.onChange) props.onChange(next);
    }
    return h('div', { className: cx('gph-chips', props.className), role: 'group', 'aria-label': props.label || 'Filtros' },
      items.map(function (it) {
        var on = sel.indexOf(it.id) >= 0;
        return h('button', { key: it.id, type: 'button', className: cx('gph-chip', on && 'gph-chip-on'), 'aria-pressed': on ? 'true' : 'false', onClick: function () { toggle(it.id); } },
          on ? h(Icon, { name: 'check', size: 16 }) : (it.icon ? h(Icon, { name: it.icon, size: 16 }) : null),
          h('span', null, it.label),
          it.count != null ? h('span', { className: 'gph-chip-count' }, it.count) : null);
      }),
      sel.length && props.clearable !== false ? h('button', { type: 'button', className: 'gph-chip-clear', onClick: function () { st[1]([]); if (props.onChange) props.onChange([]); } }, 'Limpar filtros') : null);
  }

  /* ---------- Badge and StatusBadge ---------- */
  function Badge(props) {
    var tone = props.tone || 'neutral';
    return h('span', { className: cx('gph-badge', 'gph-badge-' + tone, props.className) },
      props.dot ? h('span', { className: 'gph-dot', 'aria-hidden': 'true' }) : (props.icon ? h(Icon, { name: props.icon, size: 14 }) : null),
      h('span', null, props.children));
  }
  var STATUS = {
    rascunho: { tone: 'neutral', icon: 'edit', label: 'Rascunho' },
    'em-revisao': { tone: 'klein', icon: 'clock', label: 'Em revisão' },
    publicado: { tone: 'ok', icon: 'check-circle', label: 'Publicado' },
    pausado: { tone: 'warn', icon: 'pause', label: 'Pausado' },
    expirado: { tone: 'neutral', icon: 'clock', label: 'Expirado' },
    vendido: { tone: 'sold', icon: null, label: 'Vendido' },
    indisponivel: { tone: 'sold', icon: null, label: 'Indisponível' },
    recusado: { tone: 'err', icon: 'alert-circle', label: 'Recusado' }
  };
  function StatusBadge(props) {
    var s = STATUS[props.status] || STATUS.rascunho;
    return h(Badge, { tone: s.tone, icon: s.icon, dot: s.tone === 'sold', className: props.className }, props.children || s.label);
  }
  StatusBadge.statuses = Object.keys(STATUS);

  /* ---------- Alert ---------- */
  var ALERT_ICON = { info: 'info', ok: 'check-circle', warn: 'alert', err: 'alert-circle' };
  function Alert(props) {
    var tone = props.tone || 'info';
    return h('div', { className: cx('gph-alert', 'gph-alert-' + tone, props.className), role: tone === 'err' ? 'alert' : 'status' },
      h(Icon, { name: ALERT_ICON[tone], size: 20, className: 'gph-alert-icon' }),
      h('div', { className: 'gph-alert-body' },
        props.title ? h('p', { className: 'gph-alert-title' }, props.title) : null,
        props.children ? h('div', { className: 'gph-alert-text' }, props.children) : null,
        props.action ? h('div', { className: 'gph-alert-action' }, props.action) : null),
      props.onClose ? h(Button, { variant: 'quiet', size: 's', iconOnly: true, icon: 'x', 'aria-label': 'Fechar aviso', onClick: props.onClose }) : null);
  }

  /* ---------- Dialog ---------- */
  function Dialog(props) {
    var id = useId('gph-dlg');
    if (props.open === false) return null;
    function onKey(e) { if (e.key === 'Escape' && props.onClose) props.onClose(); }
    var panel = h('div', { className: cx('gph-dialog', 'gph-dialog-' + (props.size || 'm'), props.className), role: props.alert ? 'alertdialog' : 'dialog', 'aria-modal': 'true', 'aria-labelledby': id + '-t', 'aria-describedby': props.description ? id + '-d' : undefined, onKeyDown: onKey, tabIndex: -1 },
      h('div', { className: 'gph-dialog-head' },
        h('h2', { className: 'gph-dialog-title', id: id + '-t' }, props.title),
        props.onClose !== undefined ? h(Button, { variant: 'quiet', size: 's', iconOnly: true, icon: 'x', 'aria-label': 'Fechar', onClick: props.onClose }) : null),
      props.description ? h('p', { className: 'gph-dialog-desc', id: id + '-d' }, props.description) : null,
      props.children ? h('div', { className: 'gph-dialog-body' }, props.children) : null,
      props.actions ? h('div', { className: 'gph-dialog-actions' }, props.actions) : null);
    return h('div', { className: cx('gph-scrim', props.inline && 'gph-scrim-inline') }, panel);
  }

  /* ---------- NavBar and BottomNav ---------- */
  function NavBar(props) {
    var links = props.links || [
      { id: 'buscar', label: 'Buscar', href: '#buscar' },
      { id: 'meus', label: 'Meus anúncios', href: '#meus-anuncios' },
      { id: 'ajuda', label: 'Ajuda', href: '#ajuda' }
    ];
    var signed = props.signedIn;
    return h('header', { className: cx('gph-nav', props.compact && 'gph-nav-compact', props.className) },
      h('div', { className: 'gph-nav-inner' },
        h('a', { className: 'gph-nav-brand', href: props.homeHref || '#inicio', 'aria-label': 'GPH, página inicial' }, h(Logo, { height: props.compact ? 26 : 30, symbolOnly: props.compact })),
        props.search ? h('div', { className: 'gph-nav-search' }, props.search) : null,
        h('nav', { className: 'gph-nav-links', 'aria-label': 'Principal' },
          links.map(function (l) { return h('a', { key: l.id, href: l.href, className: cx('gph-nav-link', props.active === l.id && 'gph-nav-link-on'), 'aria-current': props.active === l.id ? 'page' : undefined }, l.label); })),
        h('div', { className: 'gph-nav-actions' },
          signed ? h('a', { className: 'gph-nav-account', href: props.accountHref || '#conta' }, h('span', { className: 'gph-avatar', 'aria-hidden': 'true' }, (props.userName || 'V').slice(0, 1)), h('span', { className: 'gph-nav-account-name' }, props.userName || 'Minha conta'))
            : h('a', { className: 'gph-nav-link gph-nav-login', href: props.loginHref || '#entrar' }, h(Icon, { name: 'log-in', size: 18 }), h('span', null, 'Entrar')),
          h(Button, { variant: 'primary', href: props.publishHref || '#anunciar', icon: 'plus', className: 'gph-nav-cta' }, 'Publique seu anúncio'),
          props.onMenu ? h(Button, { variant: 'quiet', iconOnly: true, icon: 'menu', 'aria-label': 'Abrir menu', onClick: props.onMenu, className: 'gph-nav-menu' }) : null)));
  }

  function BottomNav(props) {
    var items = props.items || [
      { id: 'inicio', label: 'Início', icon: 'home', href: '#inicio' },
      { id: 'buscar', label: 'Buscar', icon: 'search', href: '#buscar' },
      { id: 'anunciar', label: 'Anunciar', icon: 'plus', href: '#anunciar', primary: true },
      { id: 'meus', label: 'Meus anúncios', icon: 'list', href: '#meus-anuncios' },
      { id: 'conta', label: 'Conta', icon: 'user', href: '#conta' }
    ];
    return h('nav', { className: cx('gph-bottomnav', props.className), 'aria-label': 'Navegação principal' },
      items.map(function (it) {
        var on = props.active === it.id;
        return h('a', { key: it.id, href: it.href, className: cx('gph-bottomnav-item', on && 'gph-bottomnav-on', it.primary && 'gph-bottomnav-primary'), 'aria-current': on ? 'page' : undefined },
          h('span', { className: 'gph-bottomnav-icon' }, h(Icon, { name: it.icon, size: 22 })), h('span', { className: 'gph-bottomnav-label' }, it.label));
      }));
  }

  /* ---------- Tabs ---------- */
  function Tabs(props) {
    var items = props.items || [];
    var st = useState(props.defaultValue || (items[0] && items[0].id));
    var value = props.value || st[0];
    return h('div', { className: cx('gph-tabs', props.className), role: 'tablist', 'aria-label': props.label },
      items.map(function (t) {
        var on = t.id === value;
        return h('button', { key: t.id, type: 'button', role: 'tab', 'aria-selected': on ? 'true' : 'false', tabIndex: on ? 0 : -1, className: cx('gph-tab', on && 'gph-tab-on'), onClick: function () { st[1](t.id); if (props.onChange) props.onChange(t.id); } },
          h('span', null, t.label), t.count != null ? h('span', { className: 'gph-tab-count' }, t.count) : null);
      }));
  }

  /* ---------- Stepper ---------- */
  function Stepper(props) {
    var steps = props.steps || ['Categoria', 'Detalhes', 'Fotos', 'Preço e contato', 'Revisão'];
    var cur = props.current || 0;
    return h('div', { className: cx('gph-stepper', props.className) },
      h('p', { className: 'gph-stepper-summary' }, 'Etapa ' + (cur + 1) + ' de ' + steps.length + ': ', h('strong', null, steps[cur])),
      h('ol', { className: 'gph-stepper-list' },
        steps.map(function (s, i) {
          var state = i < cur ? 'done' : (i === cur ? 'current' : 'todo');
          return h('li', { key: i, className: 'gph-step gph-step-' + state, 'aria-current': state === 'current' ? 'step' : undefined },
            h('span', { className: 'gph-step-mark', 'aria-hidden': 'true' }, state === 'done' ? h(Icon, { name: 'check', size: 14 }) : String(i + 1)),
            h('span', { className: 'gph-step-label' }, s, state === 'done' ? h('span', { className: 'gph-sr' }, ' (concluída)') : null));
        })));
  }

  /* ---------- Photo placeholder (honest: no fake photos) ---------- */
  function PhotoSlot(p) {
    return h('div', { className: cx('gph-photo', p.className), style: p.ratio ? { aspectRatio: p.ratio } : undefined },
      p.src ? h('img', { src: p.src, alt: p.alt || '', loading: 'lazy' })
        : h('div', { className: 'gph-photo-empty', role: 'img', 'aria-label': p.alt || 'Foto do anúncio' },
          h(Icon, { name: CATEGORY_ICON[p.category] || 'image', size: p.iconSize || 32 }),
          p.caption === false ? null : h('span', null, p.caption || 'Foto do anunciante')));
  }

  /* ---------- ListingCard: the wall label ---------- */
  function ListingCard(props) {
    var sold = props.status === 'vendido' || props.status === 'indisponivel';
    var layout = props.layout || 'grid';
    var ss = useState(!!props.saved);
    var saved = props.onSave ? !!props.saved : ss[0];
    var title = h('a', { className: 'gph-card-title', href: props.href || '#anuncio' }, props.title);
    return h('article', { className: cx('gph-card', 'gph-card-' + layout, props.highlight && 'gph-card-highlight', sold && 'gph-card-sold', props.className) },
      h('div', { className: 'gph-card-media' },
        h(PhotoSlot, { src: props.photo, alt: props.photoAlt || props.title, category: props.category, ratio: layout === 'grid' ? '4 / 3' : undefined, caption: layout === 'row' ? false : undefined, iconSize: layout === 'row' ? 24 : 32 }),
        props.highlight ? h('span', { className: 'gph-card-flag' }, h(Icon, { name: 'star', size: 14 }), 'Destaque') : null,
        props.photoCount ? h('span', { className: 'gph-card-count' }, h(Icon, { name: 'camera', size: 14 }), props.photoCount) : null,
        props.hideSave ? null : h('button', { type: 'button', className: cx('gph-card-save', saved && 'gph-card-save-on'), 'aria-pressed': saved ? 'true' : 'false', 'aria-label': saved ? 'Remover dos salvos' : 'Salvar anúncio', onClick: function () { if (props.onSave) props.onSave(!saved); else ss[1](!saved); } }, h(Icon, { name: 'heart', size: 20 }))),
      h('div', { className: 'gph-card-label' },
        h('p', { className: 'gph-label gph-card-kicker' }, [props.category, props.offerType].filter(Boolean).join(' · ')),
        h('h3', { className: 'gph-card-heading' }, title),
        h('p', { className: 'gph-card-price' }, props.price, props.priceNote ? h('span', { className: 'gph-card-price-note' }, ' ' + props.priceNote) : null),
        h('p', { className: 'gph-card-meta' },
          props.location ? h('span', null, h(Icon, { name: 'map-pin', size: 14 }), props.location) : null,
          props.publishedAt ? h('span', null, h(Icon, { name: 'clock', size: 14 }), props.publishedAt) : null),
        sold ? h(StatusBadge, { status: props.status, className: 'gph-card-status' }) : (props.status && props.status !== 'publicado' ? h(StatusBadge, { status: props.status, className: 'gph-card-status' }) : null)));
  }

  /* ---------- PhotoGallery ---------- */
  function PhotoGallery(props) {
    var photos = props.photos && props.photos.length ? props.photos : [{}, {}, {}, {}, {}];
    var st = useState(props.index || 0);
    var i = st[0], set = st[1];
    var total = props.total || photos.length;
    function go(n) { set((n + photos.length) % photos.length); }
    return h('section', { className: cx('gph-gallery', props.className), 'aria-label': 'Fotos do anúncio' },
      h('div', { className: 'gph-gallery-stage' },
        h(PhotoSlot, { src: photos[i].src, alt: photos[i].alt || ('Foto ' + (i + 1) + ' de ' + total), category: props.category, caption: 'Foto ' + (i + 1) + ' do anunciante' }),
        h(Button, { variant: 'secondary', iconOnly: true, icon: 'chevron-left', 'aria-label': 'Foto anterior', className: 'gph-gallery-prev', onClick: function () { go(i - 1); } }),
        h(Button, { variant: 'secondary', iconOnly: true, icon: 'chevron-right', 'aria-label': 'Próxima foto', className: 'gph-gallery-next', onClick: function () { go(i + 1); } }),
        h('span', { className: 'gph-gallery-counter', 'aria-live': 'polite' }, (i + 1) + ' / ' + total)),
      h('div', { className: 'gph-gallery-thumbs' },
        photos.slice(0, 6).map(function (p, n) {
          return h('button', { key: n, type: 'button', className: cx('gph-gallery-thumb', n === i && 'gph-gallery-thumb-on'), 'aria-label': 'Ver foto ' + (n + 1), 'aria-current': n === i ? 'true' : undefined, onClick: function () { set(n); } },
            h(PhotoSlot, { src: p.src, alt: '', category: props.category, caption: false, iconSize: 18 }));
        })));
  }

  /* ---------- AdvertiserCard ---------- */
  function AdvertiserCard(props) {
    var initial = (props.name || 'A').slice(0, 1);
    return h('section', { className: cx('gph-advertiser', props.compact && 'gph-advertiser-compact', props.className), 'aria-label': 'Quem anuncia' },
      h('div', { className: 'gph-advertiser-head' },
        h('span', { className: 'gph-avatar gph-avatar-l', 'aria-hidden': 'true' }, initial),
        h('div', null,
          h('p', { className: 'gph-label' }, props.type || 'Pessoa física'),
          h('h3', { className: 'gph-advertiser-name' }, props.href ? h('a', { href: props.href }, props.name) : props.name))),
      h('dl', { className: 'gph-advertiser-facts' },
        props.memberSince ? h('div', null, h('dt', null, 'No GPH desde'), h('dd', null, props.memberSince)) : null,
        props.location ? h('div', null, h('dt', null, 'Região'), h('dd', null, props.location)) : null,
        props.adsCount != null ? h('div', null, h('dt', null, 'Anúncios ativos'), h('dd', null, props.adsCount)) : null),
      props.accountConfirmed ? h('p', { className: 'gph-advertiser-trust' }, h(Icon, { name: 'shield-check', size: 16 }), 'Conta RBX com e-mail confirmado') : null,
      props.href && !props.compact ? h(Button, { variant: 'secondary', href: props.href, iconEnd: 'chevron-right', block: true }, 'Ver todos os anúncios') : null);
  }

  /* ---------- ContactPanel ---------- */
  function ContactPanel(props) {
    var rv = useState(!!props.revealed);
    var revealed = rv[0];
    return h('section', { className: cx('gph-contact', props.className), 'aria-label': 'Contato com quem anuncia' },
      props.price ? h('p', { className: 'gph-contact-price' }, props.price, props.priceNote ? h('span', { className: 'gph-card-price-note' }, ' ' + props.priceNote) : null) : null,
      h(Button, { variant: 'primary', icon: 'message', block: true, size: 'l', onClick: props.onMessage, href: props.messageHref }, 'Enviar mensagem'),
      props.phoneVisible === false ? h('p', { className: 'gph-contact-note' }, h(Icon, { name: 'info', size: 16 }), 'Quem anuncia preferiu receber contato só por mensagem.')
        : h(Button, { variant: 'secondary', icon: 'phone', block: true, size: 'l', onClick: function () { rv[1](true); if (props.onRevealPhone) props.onRevealPhone(); } }, revealed ? (props.phone || '[TELEFONE]') : 'Ver telefone'),
      h('p', { className: 'gph-contact-tip' }, h(Icon, { name: 'shield-check', size: 16 }), h('span', null, 'Combine a entrega em local público e só pague depois de ver o item ou o serviço.')),
      h('a', { className: 'gph-contact-report', href: props.reportHref || '#denunciar' }, h(Icon, { name: 'flag', size: 16 }), 'Denunciar anúncio'));
  }

  /* ---------- EmptyState, Skeleton, Toast ---------- */
  function EmptyState(props) {
    return h('div', { className: cx('gph-empty', props.className) },
      h('div', { className: 'gph-empty-frame', 'aria-hidden': 'true' }, h(Icon, { name: props.icon || 'search', size: 28 })),
      h('h3', { className: 'gph-empty-title' }, props.title),
      props.children ? h('p', { className: 'gph-empty-text' }, props.children) : null,
      props.action ? h('div', { className: 'gph-empty-action' }, props.action) : null);
  }

  function Skeleton(props) {
    var n = props.count || 1, v = props.variant || 'card';
    var items = [];
    for (var i = 0; i < n; i++) {
      items.push(v === 'card' ? h('div', { key: i, className: 'gph-skel-card' }, h('div', { className: 'gph-skel gph-skel-media' }), h('div', { className: 'gph-skel gph-skel-line gph-skel-w40' }), h('div', { className: 'gph-skel gph-skel-line gph-skel-w90' }), h('div', { className: 'gph-skel gph-skel-line gph-skel-w60' }))
        : h('div', { key: i, className: 'gph-skel gph-skel-line gph-skel-w' + (i % 2 ? '60' : '90') }));
    }
    return h('div', { className: cx('gph-skeleton', 'gph-skeleton-' + v, props.className), role: 'status', 'aria-live': 'polite' }, h('span', { className: 'gph-sr' }, props.label || 'Carregando anúncios'), items);
  }

  function Toast(props) {
    var tone = props.tone || 'ok';
    return h('div', { className: cx('gph-toast', 'gph-toast-' + tone, props.className), role: 'status', 'aria-live': 'polite' },
      h(Icon, { name: ALERT_ICON[tone] || 'info', size: 20 }),
      h('p', { className: 'gph-toast-text' }, props.children),
      props.action || null,
      props.onClose ? h(Button, { variant: 'quiet', size: 's', iconOnly: true, icon: 'x', 'aria-label': 'Fechar', onClick: props.onClose }) : null);
  }

  var api = { Icon: Icon, Logo: Logo, Button: Button, TextField: TextField, Select: Select, SearchBar: SearchBar, FilterChips: FilterChips, ListingCard: ListingCard, Badge: Badge, StatusBadge: StatusBadge, Alert: Alert, Dialog: Dialog, NavBar: NavBar, BottomNav: BottomNav, Tabs: Tabs, Stepper: Stepper, PhotoGallery: PhotoGallery, AdvertiserCard: AdvertiserCard, ContactPanel: ContactPanel, EmptyState: EmptyState, Skeleton: Skeleton, Toast: Toast, PhotoSlot: PhotoSlot, categories: CATEGORIES };
  window.Gph = assign(window.Gph || {}, api);
})();
