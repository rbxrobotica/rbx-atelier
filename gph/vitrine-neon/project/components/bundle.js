/* @ds-bundle: {"format":4,"namespace":"GphNeon","components":[{"name":"Symbol"},{"name":"Wordmark"},{"name":"Lockup"},{"name":"Button"},{"name":"SearchBar"},{"name":"CategoryTabs"},{"name":"ListingCard"},{"name":"NavBar"}]} */
(function () {
  var React = window.React, h = React.createElement;

  var CATEGORIES = [
    { id: 'imoveis', label: 'Imóveis' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'veiculos', label: 'Veículos' },
    { id: 'compra-venda', label: 'Compra & Venda' },
    { id: 'pessoais', label: 'Pessoais' }
  ];

  function cx() { return Array.prototype.slice.call(arguments).filter(Boolean).join(' '); }

  // A lojinha, vetorizada do logo original (grade 154x142). Toldo com quatro ondas e a loja aberta embaixo.
  var SYMBOL_AWNING = 'M22.6 0h108.8a6 6 0 0 1 5.6 4L154 56a19.25 19.25 0 0 1-38.5 0a19.25 19.25 0 0 1-38.5 0a19.25 19.25 0 0 1-38.5 0a19.25 19.25 0 0 1-38.5 0L17 4a6 6 0 0 1 5.6-4z';
  var SYMBOL_SHOP = 'M20 84v45q0 6 6 6h102q6 0 6-6v-45';

  function SymbolMark(props) {
    var size = props.size || 40;
    return h('svg', { className: cx('gn-symbol', props.className), viewBox: '0 0 154 142', height: size, width: Math.round(size * 154 / 142), role: props.title ? 'img' : undefined, 'aria-hidden': props.title ? undefined : 'true' },
      props.title ? h('title', null, props.title) : null,
      h('path', { d: SYMBOL_AWNING, fill: 'currentColor' }),
      h('path', { d: SYMBOL_SHOP, fill: 'none', stroke: 'currentColor', strokeWidth: 12 }));
  }

  function Wordmark(props) {
    var size = props.size || 'm';
    var Tag = props.href ? 'a' : 'span';
    return h(Tag, { className: cx('gn-wordmark', 'gn-wordmark-' + size, props.className), href: props.href, 'aria-label': props.href ? 'GPH, página inicial' : undefined }, 'GPH');
  }

  function Lockup(props) {
    var size = props.size || 'm';
    var Tag = props.href ? 'a' : 'span';
    return h(Tag, { className: cx('gn-lockup', 'gn-lockup-' + size, props.className), href: props.href, 'aria-label': props.href ? 'GPH, página inicial' : 'GPH' },
      h(SymbolMark, { className: 'gn-lockup-symbol' }),
      h('span', { className: 'gn-wordmark', 'aria-hidden': 'true' }, 'GPH'));
  }

  function Button(props) {
    var variant = props.variant || 'secondary';
    var size = props.size || 'm';
    var Tag = props.href ? 'a' : 'button';
    var cls = cx('gn-btn', 'gn-btn-' + variant, size === 'l' && 'gn-btn-l', props.block && 'gn-btn-block', props.className);
    var disabled = props.disabled || props.loading;
    var attrs = { className: cls, href: props.href, onClick: props.onClick, type: Tag === 'button' ? (props.type || 'button') : undefined,
      disabled: Tag === 'button' ? disabled : undefined, 'aria-disabled': Tag === 'a' && disabled ? 'true' : undefined, 'aria-busy': props.loading ? 'true' : undefined, 'aria-label': props['aria-label'] };
    return h(Tag, attrs, props.loading ? h('span', { className: 'gn-btn-spinner', 'aria-hidden': 'true' }) : null, props.children);
  }

  function Select(props) {
    return h('select', { id: props.id, className: 'gn-select', value: props.value, defaultValue: props.defaultValue, onChange: props.onChange, 'aria-label': props['aria-label'] },
      props.options.map(function (o) { return h('option', { key: o.value, value: o.value }, o.label); }));
  }

  function SearchBar(props) {
    var id = props.id || 'gn-search';
    var cats = [{ value: '', label: 'Todas Categorias' }].concat(CATEGORIES.map(function (c) { return { value: c.id, label: c.label }; }));
    var regions = props.regions || [{ value: '', label: 'Todo Brasil' }];
    return h('form', { className: cx('gn-search', props.compact && 'gn-search-compact', props.className), role: 'search', onSubmit: function (e) { e.preventDefault(); if (props.onSubmit) props.onSubmit(e); } },
      h('p', { className: 'gn-prompt', id: id + '-prompt' }, props.prompt || 'O que você está procurando?'),
      h('div', { className: 'gn-search-cell' },
        h('label', { className: 'gn-sr', htmlFor: id + '-cat' }, 'Categoria'),
        h(Select, { id: id + '-cat', options: cats, defaultValue: props.category || '' })),
      h('div', { className: 'gn-search-cell' },
        h('label', { className: 'gn-sr', htmlFor: id + '-where' }, 'Região'),
        h(Select, { id: id + '-where', options: regions, defaultValue: props.region || '' })),
      h(Button, { variant: 'primary', size: props.compact ? 'm' : 'l', type: 'submit', block: true }, 'Pesquisar'));
  }

  function CategoryTabs(props) {
    var current = props.value || 'imoveis';
    var items = props.items || CATEGORIES;
    return h('ul', { className: cx('gn-tabs', props.className), role: 'tablist', 'aria-label': 'Categorias' },
      items.map(function (c) {
        var selected = c.id === current;
        return h('li', { key: c.id, role: 'presentation' },
          h('button', { type: 'button', role: 'tab', className: 'gn-tab', 'aria-selected': selected ? 'true' : 'false', tabIndex: selected ? 0 : -1,
            onClick: function () { if (props.onChange) props.onChange(c.id); } }, c.label));
      }));
  }

  function ListingCard(props) {
    var sold = props.status === 'vendido' || props.status === 'indisponivel';
    var featured = props.featured && !sold;
    var statusWord = props.status === 'vendido' ? 'Vendido' : props.status === 'indisponivel' ? 'Indisponível' : null;
    return h('article', { className: cx('gn-card', featured && 'gn-card-featured', sold && 'gn-card-sold', props.className) },
      h('div', { className: 'gn-card-photo' },
        props.photo ? h('img', { src: props.photo, alt: props.photoAlt || props.title }) : h('span', { role: 'img', 'aria-label': 'Sem foto' }, 'Foto do anunciante'),
        featured ? h('span', { className: 'gn-badge gn-badge-featured' }, 'Destaque') : null,
        statusWord ? h('span', { className: 'gn-badge gn-badge-sold' }, h('span', { className: 'gn-badge-dot', 'aria-hidden': 'true' }), statusWord) : null),
      h('div', { className: 'gn-card-body' },
        h('p', { className: 'gn-label' }, [props.category, props.offer].filter(Boolean).join(' · ')),
        h('a', { className: 'gn-card-title', href: props.href || '#' }, props.title),
        h('p', { className: 'gn-card-price' }, props.price || 'A combinar'),
        h('p', { className: 'gn-card-meta' }, [props.place, props.when].filter(Boolean).join(' · '))));
  }

  function NavBar(props) {
    var links = props.links || [
      { label: 'Responsabilidade Corporativa', href: '#responsabilidade' },
      { label: 'Blog', href: '#blog' },
      { label: 'Minha Conta', href: '#minhaconta' },
      { label: 'Ajuda', href: '#ajuda' }
    ];
    return h('nav', { className: cx('gn-nav', props.compact && 'gn-nav-compact', props.className), 'aria-label': 'Principal' },
      h('div', { className: 'gn-nav-inner' },
        h(Wordmark, { href: props.homeHref || '#', size: 'm', className: 'gn-nav-brand' }),
        h('ul', { className: 'gn-nav-links' }, links.map(function (l) { return h('li', { key: l.href }, h('a', { className: 'gn-nav-link', href: l.href }, l.label)); })),
        h(Button, { variant: 'primary', href: props.ctaHref || '#anuncio', className: 'gn-nav-cta' }, props.ctaLabel || 'Publique seu Anúncio'),
        h('button', { type: 'button', className: 'gn-nav-toggle', 'aria-label': 'Abrir menu', 'aria-expanded': 'false', onClick: props.onToggle },
          h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', 'aria-hidden': 'true' },
            h('path', { d: 'M4 7h16M4 12h16M4 17h16' })))));
  }

  window.GphNeon = { Symbol: SymbolMark, Wordmark: Wordmark, Lockup: Lockup, Button: Button, SearchBar: SearchBar, CategoryTabs: CategoryTabs, ListingCard: ListingCard, NavBar: NavBar, CATEGORIES: CATEGORIES };
})();
