/* Shell.jsx — Sidebar + Topbar */

function Sidebar({ route, setRoute, openSystem, palette }) {
  const items = [
    { id: 'dashboard',   label: 'Dashboard',    icon: 'gauge',            section: 'overview' },
    { id: 'missions',    label: 'Missions',     icon: 'target',           count: 4 },
    { id: 'council',     label: 'Agent Council',icon: 'radio-tower',      count: 1 },
    { id: 'artifacts',   label: 'Artifacts',    icon: 'file-text',        count: 18 },
    { id: 'decisions',   label: 'Decisions',    icon: 'git-pull-request', count: 42 },
    { id: 'governance',  label: 'Governance',   icon: 'shield' },
    { id: 'audit',       label: 'Audit log',    icon: 'eye' },
    { id: 'map',         label: 'System map',   icon: 'workflow' },
    { id: 'vault',       label: 'Context Vault',icon: 'database' },
  ];
  return (
    <aside className="eden-sidebar">
      <div className="eden-brand">
        <span className="eden-brand__mark"><svg viewBox="0 0 300 300" aria-hidden="true">
          <path fill="currentColor" d="M 151.64585,16.458239 A 135.45542,135.45542 0 0 0 16.190435,151.91367 a 135.45542,135.45542 0 0 0 2.31227,23.5724 L 98.558973,95.429806 H 129.51793 L 25.259609,199.68817 a 135.45542,135.45542 0 0 0 35.324226,51.75876 l 61.198345,-61.19832 h 30.95896 l -74.780929,74.78093 a 135.45542,135.45542 0 0 0 73.685639,22.33954 135.45542,135.45542 0 0 0 135.45541,-135.45541 135.45542,135.45542 0 0 0 -0.0271,-1.17996 l -80.15088,80.15153 H 175.96435 L 283.92126,122.92832 A 135.45542,135.45542 0 0 0 246.63396,55.719146 L 152.74114,149.61199 H 121.78218 L 229.74437,41.649772 A 135.45542,135.45542 0 0 0 151.64585,16.458239 Z"/>
        </svg></span>
        <div>
          <div className="eden-brand__name">Éden</div>
          <div className="eden-brand__sub">SYSTEM CREATOR</div>
        </div>
      </div>

      <nav className="eden-nav">
        {items.map((it) => (
          <button key={it.id}
            className={`eden-nav__item ${route === it.id ? 'is-active' : ''}`}
            onClick={() => setRoute(it.id)}>
            <i data-lucide={it.icon} />
            <span>{it.label}</span>
            {it.count != null && <span className="count">{it.count}</span>}
          </button>
        ))}
      </nav>

      <div className="eden-systems">
        <div className="eden-nav__section">Systems</div>
        {EDEN_DATA.systems.map((s) => (
          <div key={s.id} className="eden-system-item" onClick={() => openSystem(s.id)}>
            <span className="pip" style={{ background: `var(--${s.pip === 'warn' ? 'warn' : 'ok'})` }} />
            <span>{s.name}</span>
            <span className="ready">{s.ready}%</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function Topbar({ crumb = [], palette, env = 'production', user }) {
  return (
    <div className="eden-topbar">
      <div className="eden-crumb">
        {crumb.map((seg, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="sep">/</span>}
            <span className={i === crumb.length - 1 ? 'here' : ''}>{seg}</span>
          </React.Fragment>
        ))}
      </div>

      <div className="eden-topbar__spacer" />

      <div className="eden-topbar__group">
        <span className="eden-topbar__chip"><Pip tone="ok" /> {env.toUpperCase()}</span>
        <span className="eden-topbar__chip">COST · <Mono>$3.24 / $10.00</Mono></span>
        <span className="eden-topbar__chip">policy v4.2</span>
        <Button variant="ghost" size="sm" icon="command" onClick={palette}>
          <span style={{display:'inline-flex',gap:8,alignItems:'center'}}><span style={{fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--fg-2)'}}>Run command</span><span className="eden-kbd">⌘K</span></span>
        </Button>
        <span className="eden-topbar__user">{user.initials}</span>
      </div>
    </div>
  );
}

Object.assign(window, { Sidebar, Topbar });
