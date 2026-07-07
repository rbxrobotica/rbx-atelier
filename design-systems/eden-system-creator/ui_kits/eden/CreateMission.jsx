/* CreateMission.jsx — the brief composer */

function RadioCard({ label, hint, active, onClick }) {
  return (
    <div className={`eden-radio-card ${active ? 'is-active' : ''}`} onClick={onClick}>
      <div className="eden-radio-card__label">{label}</div>
      <div className="eden-radio-card__hint">{hint}</div>
    </div>
  );
}

function CreateMission({ go }) {
  const [autonomy, setAutonomy] = React.useState('PROPOSE');
  const [risk, setRisk]         = React.useState('MED');
  const [system, setSystem]     = React.useState('strategos');
  const [agents, setAgents]     = React.useState(['aurelio','iza','pedra','vena','thalamus']);
  const toggle = (id) => setAgents(a => a.includes(id) ? a.filter(x => x !== id) : [...a, id]);

  return (
    <div className="eden-page" data-screen-label="create-mission" style={{ maxWidth: 1080 }}>
      <div className="eden-page__head">
        <div>
          <div className="eden-page__eyebrow">NEW MISSION · DRAFT</div>
          <h1 className="eden-page__title">Compose mission brief</h1>
        </div>
        <div className="eden-page__actions">
          <Button variant="ghost" icon="arrow-left" onClick={() => go('dashboard')}>Discard</Button>
          <Button icon="save">Save brief</Button>
          <Button variant="primary" icon="play" onClick={() => go('council')}>Convene council</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
        {/* MAIN COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {/* 1. Objective */}
          <section>
            <Eyebrow style={{ marginBottom: 10 }}>01 · OBJECTIVE</Eyebrow>
            <Field label="Mission title">
              <input className="eden-input" defaultValue="Replace auth module with rbx-identity" />
            </Field>
            <div style={{ height: 12 }} />
            <Field label="Intent" hint="Declarative. State the change to the system in one sentence. Avoid implementation language.">
              <textarea className="eden-textarea" defaultValue="Move Strategos authentication onto the rbx-identity adapter package. Preserve session refresh behavior. Migration must be reversible inside one release cycle." />
            </Field>
          </section>

          {/* 2. Target & context */}
          <section>
            <Eyebrow style={{ marginBottom: 10 }}>02 · TARGET & CONTEXT</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Field label="Target system">
                <select className="eden-select" value={system} onChange={(e) => setSystem(e.target.value)}>
                  {EDEN_DATA.systems.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </Field>
              <Field label="Environment affected">
                <select className="eden-select"><option>staging.k3s.03</option><option>production.k3s.04</option></select>
              </Field>
            </div>
            <div style={{ height: 14 }} />
            <Field label="Attach context sources" hint="Documents, repos, ADRs, runbooks, prior decisions. Drives RAG and council reasoning.">
              <div className="eden-chipset">
                {['strategos/auth/*','rbx-identity@2.1','ADR-014','thalamus/policy.v4.2','threat-model.md','docs/sso-runbook','PR-PLAN.md','prior-mission/4HN-015'].map(c => (
                  <span key={c} className={`eden-chipset__chip is-on`}>{c} <span style={{color:'var(--fg-3)'}}>×</span></span>
                ))}
                <span className="eden-chipset__chip" style={{borderStyle:'dashed', color:'var(--fg-2)'}}>+ attach</span>
              </div>
            </Field>
          </section>

          {/* 3. Agents */}
          <section>
            <Eyebrow style={{ marginBottom: 10 }}>03 · ASSIGN AGENTS</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {EDEN_DATA.agents.map(a => {
                const on = agents.includes(a.id);
                const rail = AGENT_RAIL[a.role] || 'var(--fg-2)';
                return (
                  <div key={a.id}
                    className={`eden-radio-card ${on ? 'is-active' : ''}`}
                    onClick={() => toggle(a.id)}
                    style={{ position: 'relative', paddingLeft: 14 }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: rail, borderRadius: '2px 0 0 2px' }} />
                    <div className="eden-radio-card__label">{a.role}</div>
                    <div className="eden-radio-card__hint" style={{ color: 'var(--fg-1)' }}>{a.name} <span style={{color:'var(--fg-3)'}}>· {a.model}</span></div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. Autonomy */}
          <section>
            <Eyebrow style={{ marginBottom: 10 }}>04 · AUTONOMY LEVEL</Eyebrow>
            <div className="eden-radio-row">
              <RadioCard label="OBSERVE" hint="Agents read context, produce analysis. No proposals committed."
                active={autonomy === 'OBSERVE'} onClick={() => setAutonomy('OBSERVE')} />
              <RadioCard label="PROPOSE" hint="Agents draft artifacts. Plans, ADRs, diffs. No code committed."
                active={autonomy === 'PROPOSE'} onClick={() => setAutonomy('PROPOSE')} />
              <RadioCard label="EXECUTE" hint="Agents open PRs under human approval. Diffs land in feature branch."
                active={autonomy === 'EXECUTE'} onClick={() => setAutonomy('EXECUTE')} />
              <RadioCard label="PROMOTE" hint="Mission may recommend deploy path. Promotion remains human-gated."
                active={autonomy === 'PROMOTE'} onClick={() => setAutonomy('PROMOTE')} />
            </div>
          </section>

          {/* 5. Risk & cost */}
          <section>
            <Eyebrow style={{ marginBottom: 10 }}>05 · CONSTRAINTS</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
              <Field label="Risk ceiling">
                <select className="eden-select" value={risk} onChange={(e) => setRisk(e.target.value)}>
                  <option>LOW</option><option>MED</option><option>HIGH</option><option>CRIT</option>
                </select>
              </Field>
              <Field label="Cost envelope" hint="USD per run">
                <input className="eden-input eden-mono" defaultValue="2.50" />
              </Field>
              <Field label="Deadline">
                <input className="eden-input eden-mono" defaultValue="2026-04-25 12:00 UTC" />
              </Field>
            </div>
          </section>

          {/* 6. Expected artifacts */}
          <section>
            <Eyebrow style={{ marginBottom: 10 }}>06 · EXPECTED ARTIFACTS</Eyebrow>
            <div className="eden-chipset">
              {['ADR','Implementation plan','PR plan','Tests','Runbook','Threat model','Risk register entry'].map(c => (
                <span key={c} className="eden-chipset__chip is-on">{c}</span>
              ))}
              <span className="eden-chipset__chip">Migration plan</span>
              <span className="eden-chipset__chip">Deployment plan</span>
            </div>
          </section>
        </div>

        {/* SIDE — brief summary */}
        <aside>
          <div className="eden-card eden-card--bracket">
            <Eyebrow>BRIEF SUMMARY</Eyebrow>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 10 }}>
                <span className="eden-label">System</span><span>{EDEN_DATA.systems.find(s => s.id === system).name}</span>
                <span className="eden-label">Autonomy</span><Mono style={{ color: 'var(--fg-0)' }}>{autonomy}</Mono>
                <span className="eden-label">Risk</span><Mono style={{ color: 'var(--fg-0)' }}>{risk}</Mono>
                <span className="eden-label">Agents</span><span>{agents.length} assigned</span>
                <span className="eden-label">Context</span><span>8 sources attached</span>
                <span className="eden-label">Cost</span><Mono style={{ color: 'var(--fg-0)' }}>$2.50 ceiling</Mono>
                <span className="eden-label">Policy</span><span>v4.2 / production</span>
              </div>
            </div>
            <div style={{ height: 14 }} />
            <div style={{ paddingTop: 14, borderTop: '1px solid var(--border)' }}>
              <Mono style={{ fontSize: 10, color: 'var(--fg-2)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>POLICY PRE-CHECK</Mono>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 11, color: 'var(--fg-1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span><Pip tone="ok" /> Autonomy within policy</span><Mono style={{color:'var(--ok)'}}>PASS</Mono></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span><Pip tone="ok" /> Risk ceiling allowed</span><Mono style={{color:'var(--ok)'}}>PASS</Mono></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span><Pip tone="ok" /> Cost envelope within tier</span><Mono style={{color:'var(--ok)'}}>PASS</Mono></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span><Pip tone="warn" /> Reviewer required for EXECUTE</span><Mono style={{color:'var(--warn)'}}>NOTE</Mono></div>
              </div>
            </div>
            <div style={{ height: 16 }} />
            <Button variant="primary" icon="play" onClick={() => go('council')}>Convene council</Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

Object.assign(window, { CreateMission, RadioCard });
