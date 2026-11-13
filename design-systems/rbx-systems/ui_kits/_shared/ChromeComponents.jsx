// Site header, breadcrumb and footer, shared across the marketing and atelier surfaces.
//
// The header mirrors the one shipped on rbx.ia.br / rbxsystems.ch (rbx-systems-frontend,
// NavBar.svelte and Breadcrumb.svelte, 2026-11): three rows, opaque, not sticky, no blur.
//   1. brand row      72px  lockup, PT / EN, the one filled CTA
//   2. primary row    48px  five sections; the active one in fg with a 1px brand underline
//   3. section band   44px  on surface-1: the pages of the active section, 1px dividers
// Under 768px the brand row drops to 60px with the compact lockup, the primary row moves
// into a menu and the band becomes a "Section › Page" button that opens the list.
// Under 364px the brand is the mark alone.
//
// Sizes are the nominal token values on a 16px root. The site runs on a 15px root, so its
// rem-based sizes compute 6.25% smaller; the row heights are in px and are the same.

// The five sections and the pages each one lists in the band. A kit passes a page `id` as
// `active`; the first page of a section is its landing page. 'home' matches nothing: the
// home page has no active section, no band and no breadcrumb.
const NAV_SECTIONS = [
  { id: 'company', label: 'Company', pages: [
    { id: 'about', label: 'About' }, { id: 'history', label: 'History' },
    { id: 'team', label: 'Team' }, { id: 'careers', label: 'Careers' },
    { id: 'manifesto', label: 'Manifesto' }, { id: 'trust', label: 'Trust' },
  ]},
  { id: 'solutions', label: 'Solutions', pages: [
    { id: 'services', label: 'Overview' }, { id: 'cases', label: 'Cases' },
    { id: 'atelier', label: 'Atelier' },
  ]},
  { id: 'products', label: 'Products', pages: [
    { id: 'products', label: 'Overview' }, { id: 'robson', label: 'Robson' },
    { id: 'briefing-btc', label: 'Briefing BTC' },
  ]},
  { id: 'partnership', label: 'Partnership', pages: [
    { id: 'partnership', label: 'Overview' }, { id: 'diagnostic', label: 'Diagnostic' },
  ]},
  { id: 'journal', label: 'Journal', pages: [
    { id: 'blog', label: 'Journal' }, { id: 'changelog', label: 'Changelog' },
    { id: 'newsroom', label: 'Newsroom' },
  ]},
];

// Pages outside the five sections that still get a breadcrumb, with no section and no band.
const STANDALONE_PAGES = [
  { id: 'contact', label: 'Contact' },
  { id: 'legal', label: 'Legal Notice' },
];

// A page title as a crumb: trimmed, and without the site name that CMS titles of service
// and product pages carry ("LLMOps — Merovelis Systems" reads "LLMOps").
const crumbTitle = (title) => {
  if (typeof title !== 'string') return undefined;
  const trimmed = title.trim();
  if (!trimmed) return undefined;
  return trimmed.replace(/\s+[—–·|-]\s+Merovelis Systems$/, '') || trimmed;
};

// One resolution for the header and the breadcrumb, so the two cannot disagree.
// `leaf` is the title of a page known only by its parent: a post, a service, a person.
//   section  the active primary section, if any
//   item     the band item to highlight: the page itself, or the page a detail sits under.
//            A detail under a section's landing page (a post under Journal) highlights none.
//   trail    the crumbs after Home, ending in the current page. A crumb with an `id` is a
//            link; the current page has none. Empty on the home page and on unknown ids.
const resolveNav = (active, leaf) => {
  const title = crumbTitle(leaf);
  const link = (label, id) => ({ label, id });
  const here = (label) => ({ label });
  for (const section of NAV_SECTIONS) {
    const page = section.pages.find(p => p.id === active);
    if (!page) continue;
    const landing = section.pages[0];
    if (page === landing) {
      return title
        ? { section, item: undefined, trail: [link(section.label, landing.id), here(title)] }
        : { section, item: page, trail: [here(section.label)] };
    }
    return {
      section, item: page,
      trail: title
        ? [link(section.label, landing.id), link(page.label, page.id), here(title)]
        : [link(section.label, landing.id), here(page.label)],
    };
  }
  const page = STANDALONE_PAGES.find(p => p.id === active);
  if (!page) return { trail: [] };
  return { trail: title ? [link(page.label, page.id), here(title)] : [here(page.label)] };
};

const CHROME_CSS = `
.rbx-hd [hidden] { display: none !important; }
.rbx .rbx-hd a, .rbx .rbx-crumbs a {
  border-bottom: 0; text-decoration: none; cursor: pointer;
  transition: color 160ms var(--rbx-ease);
}
.rbx .rbx-hd a:hover, .rbx .rbx-crumbs a:hover { color: var(--rbx-fg); border-bottom: 0; }
/* The focus ring is a real outline, so it survives forced colors. */
.rbx .rbx-hd :focus-visible, .rbx .rbx-crumbs :focus-visible {
  outline: 2px solid var(--rbx-brand); outline-offset: 0;
}
.rbx-hd ul { list-style: none; margin: 0; padding: 0; }
.rbx-hd-header { background: var(--rbx-ink); border-bottom: 1px solid var(--rbx-line); }
.rbx-hd-row { max-width: var(--rbx-nav-w); margin: 0 auto; padding: 0 24px; }
.rbx-hd-brand-row {
  height: var(--rbx-header-row);
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}
/* Links are at least 32px high, 44px for the brand: the box grows, the artwork does not. */
.rbx-hd-brand { display: inline-flex; align-items: center; min-height: 44px; }
.rbx-hd-brand-mobile { display: none; }
.rbx-hd-brand-narrow { display: none; }
.rbx-hd-tools { display: flex; align-items: center; gap: 24px; }
.rbx-hd-eyebrow {
  font-family: var(--rbx-font-mono); font-size: 11px; font-weight: 500;
  text-transform: uppercase; letter-spacing: 0.14em;
}
.rbx-hd-lang { display: flex; align-items: center; gap: 2px; }
.rbx .rbx-hd-lang a {
  display: inline-flex; align-items: center; min-height: 32px;
  color: var(--rbx-chrome-fg); padding: 0 8px; line-height: 1;
}
.rbx-hd-lang span { color: var(--rbx-fg-faint); }
/* Active state: text in fg and a 1px brand underline, drawn as a background. */
.rbx .rbx-hd-primary a.is-active {
  color: var(--rbx-fg);
  background: linear-gradient(var(--rbx-brand), var(--rbx-brand)) left bottom / 100% 1px no-repeat;
}
/* In the language switch and the band the underline sits just under the text, not at the
   bottom of the enlarged box. */
.rbx .rbx-hd-lang a.is-active {
  color: var(--rbx-fg);
  background: linear-gradient(var(--rbx-brand), var(--rbx-brand)) left calc(50% + 13px) / 100% 1px no-repeat;
}
.rbx .rbx-hd-band-inner a.is-active {
  color: var(--rbx-fg);
  background: linear-gradient(var(--rbx-brand), var(--rbx-brand)) left calc(50% + 12.5px) / 100% 1px no-repeat;
}
.rbx .rbx-hd a.rbx-hd-cta {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: var(--rbx-cta); color: var(--rbx-on-cta);
  min-height: 32px; padding: 10px 16px; border-radius: 2px; line-height: 1;
  transition: background 160ms var(--rbx-ease);
}
.rbx .rbx-hd a.rbx-hd-cta:hover { background: var(--rbx-brand-signal); color: var(--rbx-on-cta); }
.rbx-hd-cta svg, .rbx-hd-menu-toggle { display: none; }
.rbx-hd-primary ul { display: flex; flex-wrap: wrap; gap: 32px; height: var(--rbx-nav-row); }
.rbx-hd-primary li { display: flex; }
.rbx .rbx-hd-primary a {
  display: flex; align-items: center; font-size: 15px; font-weight: 500;
  color: var(--rbx-chrome-fg); white-space: nowrap;
}
.rbx-hd-band { background: var(--rbx-surface-1); border-bottom: 1px solid var(--rbx-line); }
.rbx-hd-band-inner ul { display: flex; flex-wrap: wrap; align-items: center; font-size: 14px; }
/* Each link fills the row; the 20px divider is drawn apart from it. */
.rbx-hd-band-inner li { position: relative; display: flex; height: var(--rbx-band-row); }
.rbx-hd-band-inner li + li::before {
  content: ''; position: absolute; left: 0; top: 50%;
  height: 20px; margin-top: -10px; border-left: 1px solid var(--rbx-line);
}
.rbx .rbx-hd-band-inner a {
  display: flex; align-items: center;
  color: var(--rbx-chrome-fg); padding: 0 16px; white-space: nowrap;
}
.rbx .rbx-hd-band-inner li:first-child a { padding-left: 0; }
.rbx-hd-section-toggle, .rbx-hd-section-menu, .rbx-hd-menu { display: none; }

.rbx-crumbs {
  margin-top: 32px;
  font-family: var(--rbx-font-mono); font-size: 11px; font-weight: 500; line-height: 1;
  text-transform: uppercase; letter-spacing: 0.14em; color: var(--rbx-chrome-fg);
}
.rbx-crumbs ol { list-style: none; margin: 0; padding: 0; display: flex; align-items: center; gap: 8px; }
.rbx-crumbs li { display: flex; align-items: center; flex: none; }
/* Ancestors keep their width; a long page title is cut on one line. */
.rbx-crumbs li:last-child { flex: 0 1 auto; min-width: 0; }
.rbx .rbx-crumbs a { position: relative; color: var(--rbx-chrome-fg); padding: 2px 0; display: inline-flex; }
/* The links stay small on screen; the area that takes the click is 32px, 44px on touch. */
.rbx .rbx-crumbs a::after {
  content: ''; position: absolute; left: 50%; top: 50%;
  width: max(100%, 32px); height: 32px; transform: translate(-50%, -50%);
}
.rbx-crumbs .sep { color: var(--rbx-fg-faint); }
.rbx-crumbs .current {
  color: var(--rbx-fg); padding: 2px 0;
  box-shadow: inset 0 -1px 0 var(--rbx-brand-dim);
  min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

@media (max-width: 767px) {
  .rbx-hd-brand-row { height: var(--rbx-header-row-mobile); gap: 12px; }
  .rbx-hd-brand-desktop { display: none; }
  .rbx-hd-brand-mobile { display: inline-flex; }
  .rbx-hd-tools { gap: 4px; }
  .rbx-hd-lang { margin-right: 8px; }
  .rbx .rbx-hd-lang a { min-height: 44px; }
  .rbx .rbx-hd a.rbx-hd-cta { width: 44px; height: 44px; padding: 0; }
  .rbx-hd-cta span { display: none; }
  .rbx-hd-cta svg { display: block; }
  .rbx-hd-menu-toggle {
    display: flex; align-items: center; justify-content: center;
    width: 44px; height: 44px; padding: 0;
    background: none; border: 0; color: var(--rbx-fg); cursor: pointer;
  }
  .rbx-hd-primary, .rbx-hd-band-inner { display: none; }
  .rbx-hd-section-toggle {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; height: var(--rbx-band-row); padding: 0 24px;
    background: none; border: 0; color: var(--rbx-fg);
    font: 500 14px/1 var(--rbx-font-sans); text-align: left; cursor: pointer;
  }
  .rbx-hd-section-path { display: flex; align-items: center; gap: 8px; min-width: 0; }
  .rbx-hd-section-path .name { color: var(--rbx-chrome-fg); flex: none; }
  .rbx-hd-section-path .sep { color: var(--rbx-fg-faint); flex: none; }
  .rbx-hd-section-path .current {
    min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    padding-bottom: 3px; margin-bottom: -3px; box-shadow: inset 0 -1px 0 var(--rbx-brand);
  }
  .rbx-hd-chevron { flex: none; color: var(--rbx-chrome-fg); transition: transform 160ms var(--rbx-ease); }
  .rbx-hd-chevron.is-open { transform: rotate(180deg); }
  .rbx-hd .rbx-hd-section-menu { display: block; padding: 8px 24px 12px; border-top: 1px solid var(--rbx-line); }
  .rbx .rbx-hd-section-menu a, .rbx .rbx-hd-menu ul a {
    display: flex; align-items: center; min-height: 44px; color: var(--rbx-fg-muted); font-size: 15px;
  }
  .rbx .rbx-hd-section-menu a.is-active { color: var(--rbx-fg); }
  .rbx-hd-menu {
    display: block; background: var(--rbx-ink);
    border-bottom: 1px solid var(--rbx-line); padding: 12px 24px 32px;
  }
  .rbx-hd-menu-section + .rbx-hd-menu-section {
    margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--rbx-line);
  }
  .rbx .rbx-hd-menu a.title {
    display: flex; align-items: center; min-height: 44px;
    font-size: 18px; font-weight: 500; color: var(--rbx-fg);
  }
  .rbx-hd .rbx-hd-menu ul { padding-left: 16px; }
  .rbx .rbx-crumbs a::after { width: max(100%, 44px); height: 44px; }
}

/* Under 364px the compact lockup no longer leaves 12px before the controls, so the brand
   is the mark alone. The link keeps its accessible name. */
@media (max-width: 363px) {
  .rbx-hd-brand-mobile { display: none; }
  .rbx-hd-brand-narrow { display: inline-flex; }
}
`;

// `active` is a page id, `leaf` the title of a detail page under it (see resolveNav).
// The language switch is a specimen of the control and its active state: it does not
// translate the kit, whose labels stay in English.
const TopNav = ({ active = 'home', onNav, leaf, locale = 'en' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionOpen, setSectionOpen] = useState(false);
  const { section, item, trail } = resolveNav(active, leaf);
  // On mobile the current page is named beside the section, unless it is the landing page.
  const current = trail.length > 1 ? trail[trail.length - 1].label : undefined;

  const go = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setSectionOpen(false);
    onNav && onNav(id);
  };
  const cls = (on) => (on ? 'is-active' : undefined);

  return (
    <div className="rbx-hd">
      <style>{CHROME_CSS}</style>
      <header className="rbx-hd-header">
        <div className="rbx-hd-row rbx-hd-brand-row">
          <a href="#" className="rbx-hd-brand" aria-label="Merovelis Systems" onClick={go('home')}>
            <span className="rbx-hd-brand-desktop"><RbxLogo variant="stacked" /></span>
            <span className="rbx-hd-brand-mobile"><RbxLogo variant="compact" /></span>
            <span className="rbx-hd-brand-narrow"><RbxMark size={24} /></span>
          </a>

          <div className="rbx-hd-tools">
            <div className="rbx-hd-lang rbx-hd-eyebrow" role="group" aria-label="Language">
              <a href="#" lang="pt-BR" className={cls(locale === 'pt-BR')}
                aria-current={locale === 'pt-BR' ? 'true' : undefined}
                onClick={e => e.preventDefault()}>PT</a>
              <span aria-hidden="true">/</span>
              <a href="#" lang="en" className={cls(locale === 'en')}
                aria-current={locale === 'en' ? 'true' : undefined}
                onClick={e => e.preventDefault()}>EN</a>
            </div>

            <a href="#" className="rbx-hd-cta rbx-hd-eyebrow" aria-label="Contact" onClick={go('contact')}>
              <span>Contact</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" />
              </svg>
            </a>

            <button type="button" className="rbx-hd-menu-toggle" aria-expanded={menuOpen}
              aria-controls="rbx-hd-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                {menuOpen
                  ? <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>
                  : <><path d="M4 8h16" /><path d="M4 16h16" /></>}
              </svg>
            </button>
          </div>
        </div>

        <nav className="rbx-hd-row rbx-hd-primary" aria-label="Primary">
          <ul>
            {NAV_SECTIONS.map(s => (
              <li key={s.id}>
                <a href="#" className={cls(section === s)} aria-current={section === s ? 'true' : undefined}
                  onClick={go(s.pages[0].id)}>{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {section && (
        <div className="rbx-hd-band">
          <nav className="rbx-hd-row rbx-hd-band-inner" aria-label={section.label}>
            <ul>
              {section.pages.map(p => (
                <li key={p.id}>
                  <a href="#" className={cls(item === p)} aria-current={item === p ? 'page' : undefined}
                    onClick={go(p.id)}>{p.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <button type="button" className="rbx-hd-section-toggle" aria-expanded={sectionOpen}
            aria-controls="rbx-hd-section-menu" onClick={() => setSectionOpen(!sectionOpen)}>
            <span className="rbx-hd-section-path">
              <span className="name">{section.label}</span>
              {current && <span className="sep" aria-hidden="true">›</span>}
              {current && <span className="current">{current}</span>}
            </span>
            <svg className={'rbx-hd-chevron' + (sectionOpen ? ' is-open' : '')} width="18" height="18"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <ul id="rbx-hd-section-menu" className="rbx-hd-section-menu" hidden={!sectionOpen}>
            {section.pages.map(p => (
              <li key={p.id}>
                <a href="#" className={cls(item === p)} aria-current={item === p ? 'page' : undefined}
                  onClick={go(p.id)}>{p.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <nav id="rbx-hd-menu" className="rbx-hd-menu" aria-label="Primary" hidden={!menuOpen}>
        {NAV_SECTIONS.map(s => (
          <div key={s.id} className="rbx-hd-menu-section">
            <a href="#" className="title" onClick={go(s.pages[0].id)}>{s.label}</a>
            {s.pages.length > 1 && (
              <ul>
                {s.pages.map(p => (
                  <li key={p.id}><a href="#" onClick={go(p.id)}>{p.label}</a></li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

// Visible path of the page, between the site header and the page title. It takes the same `active` and `leaf`
// as TopNav and reads the same resolution. Hidden on the home page. A section's landing
// page shows the section alone; any other page shows its ancestors as links and itself as
// the current crumb, cut on one line when the title is long.
const Breadcrumb = ({ active = 'home', onNav, leaf }) => {
  const { trail } = resolveNav(active, leaf);
  if (trail.length === 0) return null;
  const go = (id) => (e) => { e.preventDefault(); onNav && onNav(id); };

  return (
    <nav className="rbx-crumbs" aria-label="You are here">
      <ol>
        <li>
          <a href="#" aria-label="Home" onClick={go('home')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" />
            </svg>
          </a>
        </li>
        {trail.map((crumb, i) => (
          <React.Fragment key={i}>
            <li className="sep" aria-hidden="true">›</li>
            <li>
              {crumb.id
                ? <a href="#" onClick={go(crumb.id)}>{crumb.label}</a>
                : <span className="current" aria-current="page">{crumb.label}</span>}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

const Footer = () => (
  <footer style={{
    marginTop: 128, background: 'var(--rbx-surface-3)',
    borderTop: '1px solid var(--rbx-line)', padding: '64px 0 32px',
  }}>
    <Container>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <RbxLogo variant="horizontal" markSize={24} />
          <p style={{
            marginTop: 20, fontSize: 13, lineHeight: 1.6,
            color: 'var(--rbx-fg-dim)', maxWidth: 280,
          }}>
            Systems engineering, automation and infrastructure for high-demand operations.
          </p>
        </div>
        {[
          { title: 'Services', links: ['Web Systems & Platforms', 'Automation & Integrations', 'Applied AI & Agents', 'Cloud Infrastructure', 'Backend & APIs', 'Evolutionary Maintenance'] },
          { title: 'Company', links: ['About us', 'Team', 'Blog', 'Products', 'Atelier'] },
          { title: 'Contact', links: ['contato@rbx.ia.br'] },
        ].map((sec, i) => (
          <div key={i}>
            <div style={{
              fontFamily: 'var(--rbx-font-mono)', fontSize: 10,
              textTransform: 'uppercase', letterSpacing: '0.14em',
              color: 'var(--rbx-fg-dim)', marginBottom: 20,
            }}>{sec.title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {sec.links.map((l, j) => (
                <li key={j}>
                  <a style={{ fontSize: 13, color: 'var(--rbx-fg-muted)', border: 0, cursor: 'pointer' }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 64, paddingTop: 24, borderTop: '1px solid var(--rbx-line)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--rbx-font-mono)', fontSize: 11,
          color: 'var(--rbx-fg-dim)', letterSpacing: '0.04em',
        }}>© 2026 MEROVELIS SYSTEMS · ALL RIGHTS RESERVED</div>
        <div style={{ display: 'flex', gap: 16, color: 'var(--rbx-fg-dim)' }}>
          <Icon name="github" size={18} /><Icon name="linkedin" size={18} />
        </div>
      </div>
    </Container>
  </footer>
);

Object.assign(window, { NAV_SECTIONS, STANDALONE_PAGES, crumbTitle, resolveNav, TopNav, Breadcrumb, Footer });
