const { useState: useStateShell } = React;

function Sidebar({ route, setRoute }) {
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'positions', label: 'Positions', icon: 'layers' },
    { id: 'intent', label: 'Trading intents', icon: 'activity' },
    { id: 'patterns', label: 'Patterns', icon: 'bar-chart-3' },
    { id: 'audit', label: 'Audit trail', icon: 'clock' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];
  return (
    <aside className="rbx-sidebar">
      <div className="rbx-sidebar__brand">
        {/* The house mark, in its own ink. Geometry and rules: brand-voltage/BRAND-MARK.md */}
        <svg viewBox="0 0 64 64" width="16" height="16" aria-hidden="true" focusable="false" style={{ display: 'block', flex: 'none', fill: '#22E5E5' }}>
          <path d="M30 8 H56 V34 L34 56 H8 V30 Z" />
        </svg>
        <span>Merovelis</span>
      </div>
      <nav>
        {items.map((it) => (
          <button
            key={it.id}
            className={`rbx-nav-item ${route === it.id ? 'is-active' : ''}`}
            onClick={() => setRoute(it.id)}
          >
            <i data-lucide={it.icon}></i>
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
      <div className="rbx-sidebar__foot">
        <div className="rbx-label">Runtime</div>
        <div className="rbx-sidebar__foot-row">
          <Badge tone="positive">Online</Badge>
          <span className="rbx-mono-sm">v0.104</span>
        </div>
        <div className="rbx-sidebar__foot-row">
          <Badge tone="warning">Dry-run</Badge>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ title, eyebrow, actions }) {
  return (
    <div className="rbx-topbar">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="rbx-topbar__title">{title}</h1>
      </div>
      <div className="rbx-topbar__actions">{actions}</div>
    </div>
  );
}

Object.assign(window, { Sidebar, Topbar });
