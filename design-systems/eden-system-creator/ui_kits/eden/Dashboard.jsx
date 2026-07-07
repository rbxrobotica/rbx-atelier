/* Dashboard.jsx — overview screen */

function MissionCard({ m, onClick }) {
  const sys = EDEN_DATA.systems.find(s => s.id === m.system);
  return (
    <div className="eden-mission-card" onClick={onClick} data-screen-label={`mission-${m.id}`}>
      <div className="eden-mission-card__top">
        <div>
          <div className="eden-mission-card__id">MISSION {m.id} · {sys ? sys.name.toUpperCase() : m.system.toUpperCase()}</div>
          <div className="eden-mission-card__title">{m.title}</div>
        </div>
        <Chip tone={m.state}>{m.state.toUpperCase()}</Chip>
      </div>
      <div className="eden-mission-card__meta">
        <span>{m.agents} agents</span>
        <span>run <span className="num">#{m.run}</span></span>
        <span><span className="num">${m.cost.toFixed(2)}</span></span>
        <span>autonomy <span className="num">{m.autonomy}</span></span>
        <span>{m.updated}</span>
      </div>
      <div className="eden-mission-card__bar" style={{ '--p': `${m.p}%` }} />
    </div>
  );
}

function Dashboard({ go }) {
  const open = EDEN_DATA.missions.filter(m => m.state !== 'archived');
  return (
    <div className="eden-page" data-screen-label="dashboard">
      <div className="eden-page__head">
        <div>
          <div className="eden-page__eyebrow">ORG · rbx · 2026-04-23</div>
          <h1 className="eden-page__title">Dashboard</h1>
        </div>
        <div className="eden-page__actions">
          <Button variant="ghost" icon="download">Export trace</Button>
          <Button variant="primary" icon="plus" onClick={() => go('create')}>Create mission</Button>
        </div>
      </div>

      {/* Top stats */}
      <div className="eden-grid eden-grid--4" style={{ marginBottom: 24 }}>
        <Stat label="Active missions" value="14" sub="3 running · 2 council · 4 review" />
        <Stat label="Systems under stewardship" value="6" sub="readiness 79% avg" />
        <Stat label="Council confidence" value="0.82" sub="run #214 · 6 agents" />
        <Stat label="Cost · last 24h" value="$3.24" sub="of $10.00 envelope" />
      </div>

      {/* Section: open missions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '8px 0 12px' }}>
        <Eyebrow>OPEN MISSIONS · {open.length}</Eyebrow>
        <div style={{ display: 'flex', gap: 8 }}>
          <span className="eden-chip eden-chip--tint">all systems</span>
          <span className="eden-chip eden-chip--tint">state · open</span>
        </div>
      </div>
      <div className="eden-grid eden-grid--2" style={{ marginBottom: 32 }}>
        {open.slice(0, 4).map(m => <MissionCard key={m.id} m={m} onClick={() => m.state === 'council' ? go('council') : go('mission', m)} />)}
      </div>

      {/* Two-column lower split */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
        {/* Decision queue */}
        <div className="eden-card" style={{ padding: 0 }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Eyebrow>DECISIONS · PENDING</Eyebrow>
            <a className="eden-mono" style={{ fontSize: 10, color: 'var(--fg-2)', letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: '1px solid var(--border)' }} href="#" onClick={(e) => {e.preventDefault(); go('governance');}}>open queue</a>
          </div>
          {EDEN_DATA.decisions.map(d => (
            <div key={d.id} style={{ padding: '12px 18px', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 16, alignItems: 'center' }}>
              <Mono style={{ fontSize: 11, color: 'var(--fg-2)', letterSpacing: '0.04em' }}>{d.id}</Mono>
              <div>
                <div style={{ fontSize: 13, color: 'var(--fg-0)' }}>{d.title}</div>
                <div className="eden-mono" style={{ fontSize: 10, color: 'var(--fg-3)', marginTop: 4 }}>consensus {d.consensus} · conf {d.conf} · risk {d.risk}</div>
              </div>
              <Chip tone={d.state === 'adopted' ? 'approved' : d.state === 'deferred' ? 'review' : 'blocked'}>{d.state.toUpperCase()}</Chip>
            </div>
          ))}
        </div>

        {/* Risk + readiness */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="eden-card" style={{ padding: 16 }}>
            <Eyebrow>OPEN RISKS · 4</Eyebrow>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <RailRow rail="var(--err)">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13 }}>Secret rotation gap · Robson edge worker</div>
                    <Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>raised by iza · 2h ago</Mono>
                  </div>
                  <span className="eden-chip" style={{ color: 'var(--err)' }}>HIGH</span>
                </div>
              </RailRow>
              <RailRow rail="var(--warn)">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13 }}>SAML refresh not validated · Strategos</div>
                    <Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>raised by aurelio · 3h ago</Mono>
                  </div>
                  <span className="eden-chip" style={{ color: 'var(--warn)' }}>MED</span>
                </div>
              </RailRow>
              <RailRow rail="var(--warn)">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 13 }}>Eval drift threshold near limit · Thalamus</div>
                    <Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>raised by thalamus · 6h ago</Mono>
                  </div>
                  <span className="eden-chip" style={{ color: 'var(--warn)' }}>MED</span>
                </div>
              </RailRow>
            </div>
          </div>

          <div className="eden-card" style={{ padding: 16 }}>
            <Eyebrow>RECENT ARTIFACTS</Eyebrow>
            <div style={{ marginTop: 10 }}>
              {EDEN_DATA.artifacts.slice(0, 4).map(a => (
                <div key={a.id} style={{ display: 'grid', gridTemplateColumns: '70px 1fr auto', gap: 12, alignItems: 'center', padding: '8px 0', borderTop: '1px solid var(--border)' }}>
                  <Mono style={{ fontSize: 10, color: 'var(--fg-2)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{a.kind}</Mono>
                  <div>
                    <div style={{ fontSize: 13 }}>{a.title}</div>
                    <Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>{a.meta}</Mono>
                  </div>
                  <Chip tone={a.status === 'ready' ? 'approved' : a.status === 'review' ? 'review' : 'drafting'}>{a.status.toUpperCase()}</Chip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard, MissionCard });
