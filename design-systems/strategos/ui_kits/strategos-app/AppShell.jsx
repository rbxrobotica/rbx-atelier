/* global React, Icon */
const { useState } = React;

const NAV = [
  { id: "cockpit",    label: "Cockpit",            icon: "Cockpit",    sub: "Strategic Command" },
  { id: "decision",   label: "Decision pending",   icon: "Decisions",  sub: "DEC-0214-A" },
  { id: "timeline",   label: "Timeline & Audit",   icon: "Timeline",   sub: "Decision history" },
  { id: "risk",       label: "Risk Landscape",     icon: "Risk",       sub: "5 active risks" },
  { id: "agents",     label: "Agent Observatory",  icon: "Agents",     sub: "4/5 healthy" },
  { id: "hypothesis", label: "Hypothesis Lab",     icon: "Hypothesis", sub: "What-if" },
];

const AppShell = ({ active, onNavigate, children, title, subtitle, breadcrumb }) => {
  const I = Icon;
  return (
    <div className="shell">
      <aside className="shell__sidebar">
        <div className="shell__brand">
          <div className="shell__brand-mark">
            <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
              <rect x="2.5" y="2.5" width="35" height="35" rx="3" stroke="var(--cyan-brand)" strokeWidth="1"/>
              <path d="M28 13 H17 a4 4 0 0 0 0 8 h6 a4 4 0 0 1 0 8 H12" stroke="var(--ink-0)" strokeWidth="1.5" fill="none"/>
              <path d="M2.5 8.5 V2.5 H8.5" stroke="var(--cyan-brand)" strokeWidth="1.2" fill="none"/>
              <path d="M37.5 31.5 V37.5 H31.5" stroke="var(--cyan-brand)" strokeWidth="1.2" fill="none"/>
            </svg>
          </div>
          <div className="shell__brand-text">
            <div className="shell__brand-name">STRATEGOS</div>
            <div className="shell__brand-sub">RBX · Council</div>
          </div>
        </div>

        <div className="shell__nav-eyebrow">SITUATION ROOM</div>
        <nav className="shell__nav">
          {NAV.map((item) => {
            const Cmp = I[item.icon];
            const on = active === item.id;
            return (
              <button key={item.id} className={`navitem ${on ? "is-on" : ""}`} onClick={() => onNavigate(item.id)}>
                <span className="navitem__icon"><Cmp size={16} /></span>
                <span className="navitem__label">{item.label}</span>
                <span className="navitem__sub">{item.sub}</span>
                {on && <span className="navitem__rail" />}
              </button>
            );
          })}
        </nav>

        <div className="shell__foot">
          <div className="shell__foot-row"><span className="shell__foot-key">CORE</span><span className="shell__foot-val">strategos-core / mock</span></div>
          <div className="shell__foot-row"><span className="shell__foot-key">SYNC</span><span className="shell__foot-val" style={{color: "var(--ok)"}}>live · 2s</span></div>
          <div className="shell__foot-row"><span className="shell__foot-key">BUILD</span><span className="shell__foot-val">v0.1.0</span></div>
        </div>
      </aside>

      <main className="shell__main">
        <header className="shell__topbar">
          <div className="shell__topbar-left">
            {breadcrumb && <div className="shell__crumb">{breadcrumb}</div>}
            <h1 className="shell__title">{title}</h1>
            {subtitle && <p className="shell__subtitle">{subtitle}</p>}
          </div>
          <div className="shell__topbar-right">
            <div className="searchbar">
              <I.Search size={14} />
              <input placeholder="Search decisions, risks, agents…" />
              <span className="searchbar__hint">⌘K</span>
            </div>
            <button className="iconbtn" aria-label="Notifications">
              <I.Bell size={16} />
              <span className="iconbtn__dot" />
            </button>
            <div className="user">
              <div className="user__avatar"><I.User size={14} /></div>
              <div className="user__text"><div className="user__name">L. Damasio</div><div className="user__role">CEO · Council</div></div>
            </div>
          </div>
        </header>
        <div className="shell__body">{children}</div>
      </main>
    </div>
  );
};

window.AppShell = AppShell;
