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
            <svg width="22" height="22" viewBox="0 0 1000 1000" role="img" aria-label="Strategos">
              <path fill="var(--ink-0)" fillRule="evenodd" d="M792.7 262.4L477 262.4A253.5 242.6 0 1 0 730.5 511C730.5 450 706 405 665.9 369.2L652.3 384.4L596.5 323L626.5 323L653.1 353.5L679.4 323L747.2 323ZM474.9 344.2A148.3 163.5 0 1 1 474.9 671.2A148.3 163.5 0 1 1 474.9 344.2Z"/>
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
