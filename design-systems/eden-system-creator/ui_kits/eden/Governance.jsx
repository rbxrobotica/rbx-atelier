/* Governance.jsx — audit + policy + cost view */

function Governance({ go }) {
  return (
    <div className="eden-page" data-screen-label="governance">
      <div className="eden-page__head">
        <div>
          <div className="eden-page__eyebrow">GOVERNANCE · POLICY v4.2 · ORG · rbx</div>
          <h1 className="eden-page__title">Governance &amp; Audit</h1>
        </div>
        <div className="eden-page__actions">
          <Button icon="filter">Filter</Button>
          <Button icon="download">Export audit</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="eden-grid eden-grid--4" style={{ marginBottom: 24 }}>
        <Stat label="Open decisions" value="3" sub="2 pending · 1 deferred" />
        <Stat label="Policy violations · 24h" value="1" sub="auto-blocked · 4HN-019" />
        <Stat label="Cost · 7d" value="$48.20" sub="of $250 envelope" />
        <Stat label="Promotions · 7d" value="4" sub="0 rolled back" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 16, marginBottom: 24 }}>
        {/* Decisions queue */}
        <div className="eden-card" style={{ padding: 0 }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Eyebrow>DECISION QUEUE</Eyebrow>
            <Mono style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>SORTED BY OPEN RISK</Mono>
          </div>
          {EDEN_DATA.decisions.map(d => (
            <div key={d.id} style={{ padding: '14px 18px', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '90px 1fr 200px auto', gap: 16, alignItems: 'center' }}>
              <Mono style={{ fontSize: 11, color: 'var(--fg-2)', letterSpacing: '0.04em' }}>{d.id}</Mono>
              <div>
                <div style={{ fontSize: 13 }}>{d.title}</div>
                <Mono style={{ fontSize: 10, color: 'var(--fg-3)', marginTop: 4 }}>consensus {d.consensus} · conf {d.conf} · risk {d.risk}</Mono>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <Chip tone={d.state === 'adopted' ? 'approved' : d.state === 'deferred' ? 'review' : 'blocked'}>{d.state.toUpperCase()}</Chip>
                <span className="eden-chip" style={{ color: d.risk === 'HIGH' ? 'var(--err)' : d.risk === 'MEDIUM' ? 'var(--warn)' : 'var(--ok)' }}>{d.risk}</span>
              </div>
              <Button variant="ghost" size="sm" icon="eye" onClick={() => go('artifact')}>Trace</Button>
            </div>
          ))}
        </div>

        {/* Policy panel */}
        <div className="eden-card" style={{ padding: 18 }}>
          <Eyebrow>POLICY v4.2 · PRODUCTION</Eyebrow>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <RailRow rail="var(--ok)">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><div style={{fontSize:13}}>EXECUTE requires reviewer concurrence</div><Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>rule policy.exec.reviewer</Mono></div>
                <Mono style={{ color: 'var(--ok)' }}>ENFORCED</Mono>
              </div>
            </RailRow>
            <RailRow rail="var(--ok)">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><div style={{fontSize:13}}>PROMOTE requires explicit human gate</div><Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>rule policy.promote.gate</Mono></div>
                <Mono style={{ color: 'var(--ok)' }}>ENFORCED</Mono>
              </div>
            </RailRow>
            <RailRow rail="var(--warn)">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><div style={{fontSize:13}}>Cost ceiling per run · $2.50</div><Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>1 mission near limit · 4HN-020</Mono></div>
                <Mono style={{ color: 'var(--warn)' }}>WARN</Mono>
              </div>
            </RailRow>
            <RailRow rail="var(--ok)">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><div style={{fontSize:13}}>Eval drift threshold · 0.08</div><Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>thalamus · run #214</Mono></div>
                <Mono style={{ color: 'var(--ok)' }}>PASS</Mono>
              </div>
            </RailRow>
            <RailRow rail="var(--err)">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><div style={{fontSize:13}}>Edge worker secret rotation</div><Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>risk register · iza</Mono></div>
                <Mono style={{ color: 'var(--err)' }}>OPEN</Mono>
              </div>
            </RailRow>
          </div>
        </div>
      </div>

      {/* Audit log */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <Eyebrow>AUDIT LOG · 24H</Eyebrow>
        <Mono style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em' }}>147 ENTRIES · 1 BLOCK · 0 ROLLBACKS</Mono>
      </div>
      <div className="eden-audit">
        <div className="eden-audit__row">
          <span>WHEN</span><span>ACTOR</span><span>ACTION · TARGET</span><span>POLICY · MODEL</span><span>RESULT</span>
        </div>
        {EDEN_DATA.audit.map((a, i) => {
          const isBlock = a.result === 'BLOCK';
          return (
            <div key={i} className="eden-audit__row">
              <span className="when">{a.when}</span>
              <span className="actor">{a.actor}</span>
              <span><span className="action">{a.action}</span> · <span style={{ color: 'var(--fg-2)' }}>{a.target}</span></span>
              <span style={{ color: 'var(--fg-3)' }}>v4.2 · {a.actor === 'thalamus' ? 'policy-4.2' : 'opus-4'}</span>
              <span style={{ color: isBlock ? 'var(--err)' : a.result === 'PASS' ? 'var(--ok)' : 'var(--fg-0)' }}>{a.result}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { Governance });
