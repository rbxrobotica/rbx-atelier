/* global React, Icon, AgentClassChip, Eyebrow */
const AgentObservatory = ({ seed }) => {
  const I = Icon;
  return (
    <div className="agentobs">
      <header className="agentobs__strip">
        <div className="agentobs__big">
          <Eyebrow>SYSTEM STATUS</Eyebrow>
          <div className="agentobs__big-val"><span style={{color:"var(--warn)"}}>4 of 5</span> agents healthy</div>
          <div className="agentobs__big-sub">1 degraded · risk-assessor-ai · investigating</div>
        </div>
        <div className="agentobs__nums">
          <div><Eyebrow>API</Eyebrow><b>234ms</b></div>
          <div><Eyebrow>THALAMUS</Eyebrow><b>2m old</b></div>
          <div><Eyebrow>EVENTS / MIN</Eyebrow><b>87.3</b></div>
          <div><Eyebrow>MOCK MODE</Eyebrow><b style={{color:"var(--cyan-brand)"}}>active</b></div>
        </div>
      </header>

      <div className="agentobs__grid">
        {seed.agents.map(a => {
          const dot = a.status === "healthy" ? "ok" : a.status === "degraded" ? "warn" : "ink-3";
          return (
            <article key={a.id} className="agent-card">
              <header className="agent-card__head">
                <span className="agent-card__dot" style={{background: `var(--${dot})`}}/>
                <h3 className="agent-card__name">{a.name}</h3>
                <AgentClassChip klass={a.class}/>
              </header>
              <div className="agent-card__id">{a.id}</div>
              <div className="agent-card__row">
                <div><Eyebrow>STATUS</Eyebrow><b style={{color: `var(--${dot})`, textTransform: "uppercase"}}>{a.status}</b></div>
                <div><Eyebrow>UPTIME</Eyebrow><b>{a.uptime}%</b></div>
                <div><Eyebrow>RESPONSE</Eyebrow><b>{a.latencyMs}ms</b></div>
                <div><Eyebrow>LAST</Eyebrow><b>{a.lastActivityS}s</b></div>
              </div>
              <div className="agent-card__recent">
                <Eyebrow>RECENT REASONING</Eyebrow>
                <ul>{a.recent.map((r, i) => <li key={i}>{r}</li>)}</ul>
              </div>
              <div className="agent-card__actions">
                <button className="btn btn--ghost btn--sm"><I.Eye size={12}/> View activity log</button>
                <button className="btn btn--ghost btn--sm">Recent reasoning</button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

window.AgentObservatory = AgentObservatory;
