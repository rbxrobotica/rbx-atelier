/* global React */
const { useState } = React;

const Eyebrow = ({ children, tone = "default" }) => (
  <div className={`s-eyebrow s-eyebrow--${tone}`}>{children}</div>
);

const Num = ({ children, tone = "ink-0" }) => (
  <span className="s-num" style={{ color: `var(--${tone})` }}>{children}</span>
);

const ConfidenceBar = ({ value, label }) => {
  const filled = Math.round(value * 5);
  const tone = value >= 0.7 ? "cyan-brand" : value >= 0.5 ? "ink-1" : "warn";
  return (
    <div className="conf">
      <span className="conf__pct">{Math.round(value * 100)}%</span>
      <div className="conf__bar">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={`conf__seg ${i < filled ? "is-on" : ""}`} style={i < filled ? { background: `var(--${tone})` } : undefined} />
        ))}
      </div>
      {label && <span className="conf__label" style={{ color: `var(--${tone})` }}>{label}</span>}
    </div>
  );
};

const RiskBadge = ({ severity, P, I, score, trend }) => {
  const map = { CRITICAL: "risk", ELEVATED: "warn", MONITORED: "info", RESOLVED: "ok" };
  const tone = map[severity] || "info";
  const arrow = { up: "↑", down: "↓", flat: "→" }[trend] || "→";
  const arrowTone = trend === "up" ? "risk" : trend === "down" ? "ok" : "ink-2";
  return (
    <span className="risk-badge" style={{ borderColor: `var(--${tone})`, background: `color-mix(in oklab, var(--${tone}) 10%, transparent)` }}>
      <span className="risk-badge__dot" style={{ background: `var(--${tone})` }} />
      <span className="risk-badge__sev">{severity}</span>
      {P != null && <span className="risk-badge__num">P {Math.round(P * 100)}% · I {I} · {score}</span>}
      <span style={{ color: `var(--${arrowTone})` }}>{arrow}</span>
    </span>
  );
};

const AgentClassChip = ({ klass }) => {
  const cls = klass.toLowerCase();
  return <span className={`badge-${cls} chip`}>{klass}</span>;
};

const AgentStatusBadge = ({ agent }) => {
  const dotTone = { healthy: "ok", degraded: "warn", offline: "ink-3" }[agent.status];
  return (
    <div className="agent-row">
      <span className="agent-row__dot" style={{ background: `var(--${dotTone})`, boxShadow: agent.status === "healthy" ? `0 0 0 3px color-mix(in oklab, var(--ok) 18%, transparent)` : "none" }} />
      <span className="agent-row__name">{agent.id}</span>
      <AgentClassChip klass={agent.class} />
      <span className="agent-row__meta">{agent.lastActivityS}s · {agent.uptime}% · {agent.latencyMs}ms</span>
    </div>
  );
};

const AuditTrailItem = ({ ev }) => {
  const map = { COMMIT: "aurum", EMIT: "cyan-brand", OVERRIDE: "aurum", SIGNAL: "info", ACK: "ink-1", PLAN: "ink-1" };
  const tone = map[ev.action] || "ink-1";
  return (
    <div className="audit-row">
      <span className="audit-row__ts">{ev.ts.replace("T", " ").replace("Z", "Z")}</span>
      <span className="audit-row__action" style={{ color: `var(--${tone})` }}>{ev.action}</span>
      <span className="audit-row__body"><span className="audit-row__actor">{ev.actor}</span> → <span className="audit-row__target">{ev.target}</span> · {ev.note}</span>
    </div>
  );
};

const SegmentedTabs = ({ tabs, value, onChange }) => (
  <div className="seg">
    {tabs.map((t) => (
      <button key={t.id} className={`seg__tab ${value === t.id ? "is-on" : ""}`} onClick={() => onChange(t.id)}>
        {t.label}
      </button>
    ))}
  </div>
);

const Sparkline = ({ points = [3, 4, 4, 5, 4, 6, 5, 7, 6, 7, 7], color = "var(--cyan-brand)" }) => {
  const w = 64, h = 16, max = Math.max(...points), min = Math.min(...points), span = max - min || 1;
  const d = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / span) * h;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return <svg width={w} height={h}><path d={d} stroke={color} strokeWidth="1.2" fill="none" /></svg>;
};

const LCorners = ({ tone = "cyan-brand" }) => (
  <>
    <span className="lc lc--tl" style={{ borderColor: `var(--${tone})` }} />
    <span className="lc lc--tr" style={{ borderColor: `var(--${tone})` }} />
    <span className="lc lc--bl" style={{ borderColor: `var(--${tone})` }} />
    <span className="lc lc--br" style={{ borderColor: `var(--${tone})` }} />
  </>
);

Object.assign(window, { Eyebrow, Num, ConfidenceBar, RiskBadge, AgentClassChip, AgentStatusBadge, AuditTrailItem, SegmentedTabs, Sparkline, LCorners });
