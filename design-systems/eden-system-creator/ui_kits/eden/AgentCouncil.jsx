/* AgentCouncil.jsx — the flagship screen.
   Structured deliberation: left = agent contributions, right = artifacts + approval. */

const AGENT_RAIL = {
  architect:  'var(--agent-architect)',
  backend:    'var(--agent-backend)',
  frontend:   'var(--agent-frontend)',
  infra:      'var(--agent-infra)',
  security:   'var(--agent-security)',
  qa:         'var(--agent-qa)',
  docs:       'var(--agent-docs)',
  reviewer:   'var(--agent-reviewer)',
  governance: 'var(--agent-governance)',
  product:    'var(--agent-product)',
  human:      'var(--agent-human)',
};

function AgentContribution({ entry }) {
  const agent = EDEN_DATA.agents.find(a => a.id === entry.agent);
  const rail = AGENT_RAIL[agent.role] || 'var(--fg-2)';
  const stanceTone = entry.stance === 'PROPOSAL' ? 'council' : entry.stance === 'RISK' ? 'review' : entry.stance === 'OBSERVE' ? 'briefing' : 'approved';
  return (
    <div className="eden-agent">
      <span className="eden-agent__rail" style={{ background: rail }} />
      <div className="eden-agent__head">
        <div>
          <div className="eden-agent__role">{agent.role} · {agent.name}</div>
          <div className="eden-agent__name" style={{ marginTop: 6 }}>{entry.title}</div>
        </div>
        <div className="eden-agent__meta">
          <Chip tone={stanceTone}>{entry.stance}</Chip>
          {agent.conf != null && <span>conf <span className="num">{agent.conf.toFixed(2)}</span></span>}
        </div>
      </div>
      <div className="eden-agent__body">{entry.body}</div>
      <div className="eden-agent__refs">
        {entry.refs.map(r => <span key={r} className="eden-agent__ref">{r}</span>)}
      </div>
      <div className="eden-agent__footer">
        <div className="eden-agent__footer-info">
          <span>model · {agent.model}</span>
          {agent.cost > 0 && <span>${agent.cost.toFixed(2)}</span>}
          {agent.tok > 0 && <span>{agent.tok.toLocaleString()} tok</span>}
          <span>ctx · {agent.ctx} sources</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ color: 'var(--fg-2)' }}>next: {entry.next}</span>
        </div>
      </div>
    </div>
  );
}

function ApprovalPanel() {
  return (
    <div className="eden-approval">
      <div className="eden-approval__head">
        <div>
          <div className="eden-approval__title">Decision pending · D-0042</div>
          <Mono style={{ fontSize: 10, color: 'var(--fg-2)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 4 }}>5 / 6 AGENTS CONVERGED · CONF 0.84 · RISK MED</Mono>
        </div>
        <Chip tone="council">COUNCIL · READY</Chip>
      </div>
      <p style={{ fontSize: 13, color: 'var(--fg-1)', margin: '0 0 14px', lineHeight: 1.55 }}>
        Authorize execution at autonomy level <Mono style={{ color: 'var(--fg-0)' }}>PROPOSE</Mono>. The mission will draft adapter package and PR plan; no code commits without further approval.
      </p>
      <div className="eden-approval__actions">
        <Button variant="primary" icon="check">Approve execution</Button>
        <Button icon="edit">Redirect</Button>
        <Button icon="message-square">Request second pass</Button>
        <div style={{ flex: 1 }} />
        <Button variant="danger" icon="x">Reject</Button>
      </div>
    </div>
  );
}

function AgentCouncil({ go }) {
  const mission = EDEN_DATA.missions.find(m => m.id === '4HN-021');
  return (
    <div className="eden-page" data-screen-label="council">
      <div className="eden-page__head">
        <div>
          <div className="eden-page__eyebrow">MISSION 4HN-021 · STRATEGOS · RUN #214</div>
          <h1 className="eden-page__title">{mission.title}</h1>
        </div>
        <div className="eden-page__actions">
          <Button variant="ghost" icon="arrow-left" onClick={() => go('dashboard')}>Back</Button>
          <Button icon="pause">Pause council</Button>
          <Button variant="primary" icon="check">Approve execution</Button>
        </div>
      </div>

      {/* status strip */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
        <Chip tone="council">COUNCIL · DELIBERATING</Chip>
        <span className="eden-chip eden-chip--tint">6 agents</span>
        <span className="eden-chip eden-chip--tint">autonomy · PROPOSE</span>
        <span className="eden-chip eden-chip--tint">policy v4.2</span>
        <span className="eden-chip eden-chip--tint"><Mono>$0.41 / $2.50</Mono></span>
        <span className="eden-chip eden-chip--tint"><Mono>started 00:42 ago</Mono></span>
      </div>

      <div className="eden-split">
        {/* LEFT — council */}
        <div className="eden-split__left">
          <div className="eden-split__head">
            <div>
              <h3>Deliberation</h3>
              <Mono style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 4, display: 'inline-block' }}>4 contributions · 2 in-flight</Mono>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <Button variant="ghost" size="sm" icon="filter">Filter</Button>
              <Button variant="ghost" size="sm" icon="users">Roster</Button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {EDEN_DATA.council.map((c, i) => <AgentContribution key={i} entry={c} />)}

            {/* In-flight */}
            <div className="eden-agent" style={{ opacity: 0.85 }}>
              <span className="eden-agent__rail" style={{ background: 'var(--agent-reviewer)' }} />
              <div className="eden-agent__head">
                <div>
                  <div className="eden-agent__role">reviewer · Otavio</div>
                  <div className="eden-agent__name" style={{ marginTop: 6 }}>Reviewing aurelio's proposal …</div>
                </div>
                <div className="eden-agent__meta">
                  <Chip tone="running">DRAFTING</Chip>
                </div>
              </div>
              <div className="eden-agent__body" style={{ color: 'var(--fg-2)' }}>
                <Mono>opus-4 · 1,204 tok · 00:12 elapsed</Mono>
              </div>
            </div>

            {/* Orchestrator slot */}
            <div className="eden-agent" style={{ borderColor: 'var(--cyan-dim)', background: 'rgba(34, 229, 229, 0.03)' }}>
              <span className="eden-agent__rail" style={{ background: 'var(--agent-human)' }} />
              <div className="eden-agent__head">
                <div>
                  <div className="eden-agent__role">orchestrator · {EDEN_DATA.user.name}</div>
                  <div className="eden-agent__name" style={{ marginTop: 6 }}>Steer the council</div>
                </div>
                <div className="eden-agent__meta"><Chip tone="briefing">YOU</Chip></div>
              </div>
              <textarea className="eden-textarea" placeholder="Add a directive. Constraints. Priorities. Trade-offs to weigh. Keep it short and declarative."
                style={{ marginTop: 10 }}
                defaultValue="Prioritize reversibility. Two-PR rollout is acceptable. Do not commit code in this run." />
              <div style={{ marginTop: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
                <Button variant="primary" icon="send" size="sm">Brief council</Button>
                <Button variant="ghost" size="sm" icon="link">Attach context</Button>
                <div style={{ flex: 1 }} />
                <Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>directive recorded in run #214</Mono>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — artifacts + approval */}
        <div className="eden-split__right">
          <ApprovalPanel />

          <div style={{ marginTop: 18 }}>
            <Eyebrow>ARTIFACTS · IN-FLIGHT</Eyebrow>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {EDEN_DATA.artifacts.slice(0, 5).map(a => (
                <div key={a.id} className="eden-rail-row" style={{ paddingLeft: 16 }}>
                  <span className="eden-rail-row__rail" style={{ background: a.status === 'ready' ? 'var(--ok)' : a.status === 'review' ? 'var(--warn)' : 'var(--fg-3)' }} />
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <i data-lucide={a.kind === 'DIFF' ? 'git-pull-request' : a.kind === 'TEST' ? 'flask-conical' : a.kind === 'RUNBOOK' ? 'book-open' : a.kind === 'PLAN' ? 'list-checks' : 'file-text'} style={{ width: 14, height: 14, color: 'var(--fg-2)' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, color: 'var(--fg-0)' }}>{a.title}</div>
                      <Mono style={{ fontSize: 10, color: 'var(--fg-3)' }}>{a.id} · {a.meta}</Mono>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => go('artifact')}>Open</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <Eyebrow>CONTEXT IN USE</Eyebrow>
            <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['ADR-014','strategos/auth/*','rbx-identity@2.1','thalamus/policy.v4.2','PR-PLAN.md','threat-model.md','rbx-infra/secrets.v3','docs/sso-runbook'].map(c => (
                <span key={c} className="eden-chip eden-chip--tint">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AgentCouncil, AgentContribution, ApprovalPanel });
