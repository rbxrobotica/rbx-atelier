/* SystemMap.jsx — sober dependency map of the RBX ecosystem. */

function SystemMap({ go }) {
  /* Hand-laid SVG. Nodes positioned for a sober, asymmetric layout. */
  const nodes = [
    { id: 'strategos',  x: 540, y: 180, w: 170, h: 64, label: 'Strategos',      kind: 'system',  state: 'council' },
    { id: 'thalamus',   x: 760, y: 320, w: 170, h: 64, label: 'Thalamus',       kind: 'service', state: 'ok' },
    { id: 'robson',     x: 280, y: 320, w: 170, h: 64, label: 'Robson',         kind: 'system',  state: 'blocked' },
    { id: 'truthmetal', x: 800, y: 480, w: 170, h: 64, label: 'TruthMetal',     kind: 'service', state: 'ok' },
    { id: 'identity',   x: 540, y: 480, w: 170, h: 64, label: 'rbx-identity',   kind: 'service', state: 'ok' },
    { id: 'infra',      x: 280, y: 480, w: 170, h: 64, label: 'rbx-infra',      kind: 'platform',state: 'ok' },
    { id: 'eden',       x: 540, y: 60,  w: 220, h: 70, label: 'Éden System Creator', kind: 'platform', state: 'live' },
    { id: 'k3s',        x: 100, y: 600, w: 130, h: 50, label: 'k3s · prod',     kind: 'env',     state: 'ok' },
    { id: 'k3s2',       x: 245, y: 600, w: 130, h: 50, label: 'k3s · staging',  kind: 'env',     state: 'ok' },
    { id: 'gh',         x: 990, y: 600, w: 130, h: 50, label: 'github · org',   kind: 'ext',     state: 'ok' },
    { id: 'whatsapp',   x: 840, y: 600, w: 130, h: 50, label: 'WhatsApp API',   kind: 'ext',     state: 'ok' },
  ];

  const edges = [
    { from: 'eden', to: 'strategos' },
    { from: 'eden', to: 'thalamus' },
    { from: 'eden', to: 'robson' },
    { from: 'strategos', to: 'identity' },
    { from: 'strategos', to: 'thalamus' },
    { from: 'robson', to: 'identity', risk: true },
    { from: 'robson', to: 'infra' },
    { from: 'thalamus', to: 'truthmetal' },
    { from: 'identity', to: 'infra' },
    { from: 'infra', to: 'k3s' },
    { from: 'infra', to: 'k3s2' },
    { from: 'truthmetal', to: 'gh' },
    { from: 'robson', to: 'whatsapp' },
  ];

  const nodeFill = {
    system:   'var(--bg-2)',
    service:  'var(--bg-2)',
    platform: 'var(--bg-2)',
    env:      'var(--bg-2)',
    ext:      'var(--bg-2)',
  };
  const stateBorder = {
    live:    'var(--cyan-brand)',
    council: 'var(--cyan-brand)',
    ok:      'var(--border-strong)',
    blocked: 'var(--err)',
  };
  const stateText = {
    live:    'var(--fg-0)',
    council: 'var(--fg-0)',
    ok:      'var(--fg-0)',
    blocked: 'var(--fg-0)',
  };

  const center = (n) => ({ x: n.x + n.w / 2, y: n.y + n.h / 2 });
  const map = Object.fromEntries(nodes.map(n => [n.id, n]));

  return (
    <div className="eden-page" data-screen-label="map" style={{ maxWidth: 1320 }}>
      <div className="eden-page__head">
        <div>
          <div className="eden-page__eyebrow">SYSTEM MAP · ORG · rbx · ENV · production</div>
          <h1 className="eden-page__title">System map</h1>
        </div>
        <div className="eden-page__actions">
          <Button icon="filter">Filter</Button>
          <Button icon="refresh-cw">Refresh</Button>
          <Button variant="primary" icon="plus" onClick={() => go('create')}>Create mission</Button>
        </div>
      </div>

      <div className="eden-map" style={{ aspectRatio: '12 / 7' }}>
        <svg viewBox="0 0 1200 700" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#13161A" strokeWidth="1"/>
            </pattern>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#3A4048"/>
            </marker>
            <marker id="arrow-risk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#C56A6A"/>
            </marker>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* edges */}
          {edges.map((e, i) => {
            const a = center(map[e.from]); const b = center(map[e.to]);
            const stroke = e.risk ? 'var(--err)' : 'var(--border-strong)';
            const dash   = e.risk ? '4 3' : 'none';
            return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={stroke} strokeWidth="1" strokeDasharray={dash} markerEnd={e.risk ? 'url(#arrow-risk)' : 'url(#arrow)'} />;
          })}

          {/* nodes */}
          {nodes.map(n => (
            <g key={n.id} style={{ cursor: 'pointer' }} onClick={() => n.id === 'strategos' ? go('system') : null}>
              <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="2" fill={nodeFill[n.kind]} stroke={stateBorder[n.state]} strokeWidth="1" />
              {/* L-brackets */}
              {n.state === 'live' && (
                <>
                  <path d={`M ${n.x - 2} ${n.y + 8} L ${n.x - 2} ${n.y - 2} L ${n.x + 8} ${n.y - 2}`} stroke="var(--cyan-brand)" strokeWidth="1.5" fill="none" opacity="0.6"/>
                  <path d={`M ${n.x + n.w - 8} ${n.y + n.h + 2} L ${n.x + n.w + 2} ${n.y + n.h + 2} L ${n.x + n.w + 2} ${n.y + n.h - 8}`} stroke="var(--cyan-brand)" strokeWidth="1.5" fill="none" opacity="0.6"/>
                </>
              )}
              <text x={n.x + 12} y={n.y + 22} fill="var(--fg-2)" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.4">
                {n.kind.toUpperCase()}
              </text>
              <text x={n.x + 12} y={n.y + 42} fill={stateText[n.state]} fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500">
                {n.label}
              </text>
              {n.state !== 'ok' && (
                <circle cx={n.x + n.w - 14} cy={n.y + 14} r="4" fill={n.state === 'blocked' ? 'var(--err)' : 'var(--cyan-brand)'} />
              )}
            </g>
          ))}

          {/* divider line: platform layer */}
          <line x1="60" y1="570" x2="1140" y2="570" stroke="var(--border)" strokeDasharray="2 4" />
          <text x="68" y="563" fill="var(--fg-3)" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.4">RUNTIME / EXTERNAL</text>
        </svg>

        <div className="eden-map__legend">
          <div className="row"><span style={{ width: 18, height: 1, background: 'var(--border-strong)' }} /> dependency</div>
          <div className="row"><span style={{ width: 18, height: 1, borderTop: '1px dashed var(--err)' }} /> risk edge</div>
          <div className="row"><Pip tone="council" /> live · governed</div>
          <div className="row"><Pip tone="blocked" /> blocked</div>
          <div className="row"><Pip tone="ok" /> healthy</div>
        </div>
      </div>

      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        <Stat label="Systems" value="6" sub="strategos, thalamus, robson, truthmetal, identity, infra" />
        <Stat label="Risk edges" value="1" sub="robson → rbx-identity · MED" />
        <Stat label="External integrations" value="2" sub="github · WhatsApp API" />
        <Stat label="Environments" value="2" sub="k3s · production / staging" />
      </div>
    </div>
  );
}

Object.assign(window, { SystemMap });
