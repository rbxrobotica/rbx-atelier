/* SystemView.jsx — single-system overview (Strategos) */

function SystemView({ go, systemId = 'strategos' }) {
  const sys = EDEN_DATA.systems.find(s => s.id === systemId) || EDEN_DATA.systems[0];
  const sysMissions = EDEN_DATA.missions.filter(m => m.system === systemId);
  return (
    <div className="eden-page" data-screen-label={`system-${sys.id}`}>
      <div className="eden-page__head">
        <div>
          <div className="eden-page__eyebrow">SYSTEM · {sys.role.toUpperCase()}</div>
          <h1 className="eden-page__title" style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            {sys.name}
            <Chip tone={sys.pip === 'warn' ? 'review' : 'approved'} dot={true}>{sys.pip === 'warn' ? 'ATTENTION' : 'HEALTHY'}</Chip>
          </h1>
        </div>
        <div className="eden-page__actions">
          <Button icon="external-link">Open in GitHub</Button>
          <Button icon="database">Open vault</Button>
          <Button variant="primary" icon="plus" onClick={() => go('create')}>Create mission</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16, marginBottom: 24 }}>
        {/* Left: positioning + modules */}
        <div className="eden-card eden-card--bracket" style={{ padding: 22 }}>
          <Eyebrow>POSITIONING</Eyebrow>
          <p style={{ margin: '10px 0 0', fontSize: 15, color: 'var(--fg-0)', lineHeight: 1.55, fontWeight: 300 }}>
            Strategos is the strategic decision and planning core of the RBX ecosystem. It centralizes objectives, risks, scenarios, and governed human-agent strategy across the situation room.
          </p>
          <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            <div><span className="eden-label">Modules</span><div style={{ fontSize: 18, fontWeight: 500, marginTop: 4 }} className="eden-mono">14</div></div>
            <div><span className="eden-label">Open missions</span><div style={{ fontSize: 18, fontWeight: 500, marginTop: 4 }} className="eden-mono">{sysMissions.length}</div></div>
            <div><span className="eden-label">Open risks</span><div style={{ fontSize: 18, fontWeight: 500, marginTop: 4, color: 'var(--warn)' }} className="eden-mono">2</div></div>
            <div><span className="eden-label">Last promotion</span><div style={{ fontSize: 18, fontWeight: 500, marginTop: 4 }} className="eden-mono">4d ago</div></div>
          </div>
        </div>

        {/* Readiness */}
        <div className="eden-card" style={{ padding: 18 }}>
          <Eyebrow>READINESS SCORE</Eyebrow>
          <div className="eden-readiness" style={{ marginTop: 8 }}>
            <span className="eden-readiness__score">{sys.ready}</span>
            <span className="eden-readiness__unit">/ 100</span>
          </div>
          <div className="eden-readiness__list">
            <div className="eden-readiness__item"><i data-lucide="check" style={{color:'var(--ok)'}} /><span>Tests</span><span className="num">92%</span></div>
            <div className="eden-readiness__item"><i data-lucide="check" style={{color:'var(--ok)'}} /><span>Observability</span><span className="num">88%</span></div>
            <div className="eden-readiness__item"><i data-lucide="alert-triangle" style={{color:'var(--warn)'}} /><span>Security review</span><span className="num">REVIEW</span></div>
            <div className="eden-readiness__item"><i data-lucide="check" style={{color:'var(--ok)'}} /><span>Rollback path</span><span className="num">OK</span></div>
            <div className="eden-readiness__item"><i data-lucide="alert-triangle" style={{color:'var(--warn)'}} /><span>Documentation</span><span className="num">PARTIAL</span></div>
            <div className="eden-readiness__item"><i data-lucide="check" style={{color:'var(--ok)'}} /><span>Secrets / SSO</span><span className="num">OK</span></div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 0 12px' }}>
        <Eyebrow>MISSIONS · {sysMissions.length}</Eyebrow>
        <div style={{ display: 'flex', gap: 6 }}>
          <span className="eden-chip eden-chip--tint">all states</span>
          <span className="eden-chip eden-chip--tint">last 30d</span>
        </div>
      </div>
      <table className="eden-table" style={{ marginBottom: 24 }}>
        <thead><tr>
          <th>Mission</th><th>Title</th><th>State</th><th>Autonomy</th><th>Run</th><th>Cost</th><th>Updated</th>
        </tr></thead>
        <tbody>
          {sysMissions.map(m => (
            <tr key={m.id} onClick={() => m.state === 'council' ? go('council') : null}>
              <td className="id">{m.id}</td>
              <td>{m.title}</td>
              <td><Chip tone={m.state}>{m.state.toUpperCase()}</Chip></td>
              <td className="num">{m.autonomy}</td>
              <td className="num">#{m.run}</td>
              <td className="num">${m.cost.toFixed(2)}</td>
              <td className="num">{m.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className="eden-card" style={{ padding: 18 }}>
          <Eyebrow>ARCHITECTURE DECISIONS</Eyebrow>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              { id: 'ADR-014', title: 'Auth via rbx-identity',                 state: 'drafting' },
              { id: 'ADR-013', title: 'Situation-room data plane (event log)', state: 'approved' },
              { id: 'ADR-012', title: 'Strategic scenarios as first-class',    state: 'approved' },
              { id: 'ADR-011', title: 'Risk register lifecycle',               state: 'approved' },
            ].map(d => (
              <div key={d.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'center', gap: 12, padding: '8px 0', borderTop: '1px solid var(--border)' }}>
                <Mono style={{ fontSize: 11, color: 'var(--fg-2)' }}>{d.id}</Mono>
                <span style={{ fontSize: 13 }}>{d.title}</span>
                <Chip tone={d.state}>{d.state.toUpperCase()}</Chip>
              </div>
            ))}
          </div>
        </div>

        <div className="eden-card" style={{ padding: 18 }}>
          <Eyebrow>ASSIGNED AGENTS</Eyebrow>
          <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {EDEN_DATA.agents.slice(0, 6).map(a => {
              const rail = AGENT_RAIL[a.role] || 'var(--fg-2)';
              return (
                <div key={a.id} style={{ position: 'relative', padding: '8px 12px 8px 16px', background: 'var(--bg-2)', borderRadius: 2, border: '1px solid var(--border)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: rail, borderRadius: '2px 0 0 2px' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Mono style={{ fontSize: 10, color: 'var(--fg-2)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{a.role}</Mono>
                    <Pip tone={a.status === 'active' ? 'ok' : a.status === 'review' ? 'warn' : 'info'} />
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--fg-0)', marginTop: 4 }}>{a.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SystemView });
