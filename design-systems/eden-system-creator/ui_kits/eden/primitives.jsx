/* primitives.jsx — small reusable atoms for Éden UI kit */

function Pip({ tone = 'fg-2', pulse = false, color }) {
  const colorMap = {
    drafting: 'var(--fg-2)', briefing: 'var(--info)',
    running:  'var(--cyan-signal)', council: 'var(--cyan-brand)',
    review:   'var(--warn)', approved: 'var(--ok)',
    blocked:  'var(--err)', archived: 'var(--fg-3)',
    ok: 'var(--ok)', warn: 'var(--warn)', err: 'var(--err)', info: 'var(--info)',
  };
  const c = color || colorMap[tone] || 'var(--fg-2)';
  return <span className={`eden-pip ${pulse ? 'eden-pip--pulse' : ''}`} style={{ background: c, color: c }} />;
}

function Chip({ tone, children, dot = true, className = '', style = {} }) {
  const palette = {
    drafting: 'var(--fg-2)', briefing: 'var(--info)',
    running:  'var(--cyan-signal)', council: 'var(--cyan-brand)',
    review:   'var(--warn)', approved: 'var(--ok)',
    blocked:  'var(--err)', archived: 'var(--fg-3)',
    ok: 'var(--ok)', warn: 'var(--warn)', err: 'var(--err)', info: 'var(--info)',
  };
  const color = palette[tone];
  const pulseStates = { running: true, council: true };
  return (
    <span className={`eden-chip ${className}`} style={{ color, ...style }}>
      {dot && tone && <Pip tone={tone} pulse={!!pulseStates[tone]} />}
      {children}
    </span>
  );
}

function Eyebrow({ children, className = '' }) {
  return <div className={`eden-eyebrow ${className}`}>{children}</div>;
}

function Mono({ children, className = '', style = {} }) {
  return <span className={`eden-mono ${className}`} style={style}>{children}</span>;
}

function Button({ variant = 'secondary', size, icon, children, onClick, disabled, type, className = '' }) {
  const cls = ['eden-btn'];
  if (variant === 'primary')  cls.push('eden-btn--primary');
  if (variant === 'ghost')    cls.push('eden-btn--ghost');
  if (variant === 'danger')   cls.push('eden-btn--danger');
  if (size === 'sm')          cls.push('eden-btn--sm');
  cls.push(className);
  return (
    <button type={type || 'button'} className={cls.join(' ')} onClick={onClick} disabled={disabled}>
      {icon && <i data-lucide={icon} />}
      {children && <span>{children}</span>}
    </button>
  );
}

function Field({ label, hint, children }) {
  return (
    <div className="eden-field">
      {label && <label>{label}</label>}
      {children}
      {hint && <div className="eden-field__hint">{hint}</div>}
    </div>
  );
}

function Stat({ label, value, sub }) {
  return (
    <div className="eden-stat">
      <div className="eden-stat__label">{label}</div>
      <div className="eden-stat__value">{value}</div>
      {sub && <div className="eden-stat__sub">{sub}</div>}
    </div>
  );
}

function RailRow({ rail, children }) {
  return (
    <div className="eden-rail-row">
      <span className="eden-rail-row__rail" style={{ background: rail }} />
      {children}
    </div>
  );
}

function Empty({ icon = 'inbox', title, body, action }) {
  return (
    <div className="eden-empty">
      <i data-lucide={icon} />
      <h4>{title}</h4>
      {body && <p>{body}</p>}
      {action}
    </div>
  );
}

Object.assign(window, { Pip, Chip, Eyebrow, Mono, Button, Field, Stat, RailRow, Empty });
