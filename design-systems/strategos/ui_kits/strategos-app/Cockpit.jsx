/* global React, Icon, ConfidenceBar, RiskBadge, AgentStatusBadge, AuditTrailItem, Sparkline, LCorners, Eyebrow */
const Cockpit = ({ seed, onOpenDecision }) => {
  const I = Icon;
  const pending = seed.decisions.filter(d => d.status === "PENDING_HUMAN");

  return (
    <div className="cockpit">
      {/* Situation summary strip */}
      <section className="situation">
        <div className="situation__left">
          <Eyebrow>SITUATION · 2026-04-26 14:23 Z · last sync 2s</Eyebrow>
          <h2 className="situation__statement">Market volatile. Regulatory change pending. <span style={{color:"var(--ink-2)"}}>Two recommendations await human judgment.</span></h2>
        </div>
        <div className="situation__right">
          <div className="freshness"><span>Market data</span><b style={{color:"var(--ok)"}}>live</b></div>
          <div className="freshness"><span>Regulatory</span><b style={{color:"var(--warn)"}}>1h old</b></div>
          <div className="freshness"><span>Agents</span><b style={{color:"var(--warn)"}}>4/5</b></div>
        </div>
      </section>

      <div className="cockpit__grid">
        {/* Pending decisions */}
        <section className="panel panel--span2">
          <header className="panel__head">
            <Eyebrow>PENDING DECISIONS · {pending.length}</Eyebrow>
            <button className="btn btn--ghost btn--sm"><I.Plus size={12}/> New</button>
          </header>
          <div className="panel__body" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            {pending.map(d => (
              <article key={d.id} className="dec-card dec-card--pending" onClick={() => onOpenDecision(d.id)}>
                <LCorners tone="cyan-brand" />
                <div className="dec-card__head">
                  <span className="dec-card__id">{d.id}</span>
                  <span className="dec-card__status">PENDING HUMAN</span>
                </div>
                <h3 className="dec-card__title">{d.title}</h3>
                <p className="dec-card__proposal">{d.proposal}</p>
                <div className="dec-card__meta">
                  <ConfidenceBar value={d.ai.confidence} label={d.ai.confidence >= 0.7 ? "HIGH" : "MOD"} />
                  <span className="dec-card__sep">·</span>
                  <span className="dec-card__factoid">{d.alternatives.length} alternatives</span>
                  <span className="dec-card__sep">·</span>
                  <span className="dec-card__factoid">{d.evidence} evidence</span>
                  <span className="dec-card__sep">·</span>
                  <span className="dec-card__factoid">impact {d.impact.timeframe}</span>
                  <button className="btn btn--primary btn--sm" style={{marginLeft:"auto"}}>Deliberate <I.ArrowRight size={12}/></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Key metrics */}
        <section className="panel">
          <header className="panel__head"><Eyebrow>KEY METRICS · linked to decisions</Eyebrow></header>
          <div className="panel__body">
            <div className="metrics">
              {seed.metrics.map((m, i) => (
                <div key={i} className="metric">
                  <div className="metric__label">{m.label}</div>
                  <div className="metric__row">
                    <span className="metric__value">{m.value}<span className="metric__unit">{m.unit}</span></span>
                    <Sparkline color={m.trend === "up" ? "var(--ok)" : m.trend === "down" ? "var(--warn)" : "var(--ink-2)"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent strip */}
        <section className="panel panel--span2">
          <header className="panel__head"><Eyebrow>AGENT OBSERVATORY · 4 of 5 healthy</Eyebrow></header>
          <div className="panel__body" style={{display:"flex", flexDirection:"column", gap:"4px"}}>
            {seed.agents.map(a => <AgentStatusBadge key={a.id} agent={a}/>)}
          </div>
        </section>

        {/* Risk strip */}
        <section className="panel">
          <header className="panel__head"><Eyebrow>TOP RISKS</Eyebrow></header>
          <div className="panel__body" style={{display:"flex", flexDirection:"column", gap:"8px"}}>
            {seed.risks.slice(0, 3).map(r => (
              <div key={r.id} className="risk-row">
                <div style={{flex:1, minWidth:0}}>
                  <div className="risk-row__cat">{r.category}</div>
                  <div className="risk-row__name">{r.name}</div>
                </div>
                <RiskBadge severity={r.severity} P={r.probability} I={r.impact} score={(r.probability * r.impact * 10 / 6).toFixed(1)} trend={r.trend}/>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

window.Cockpit = Cockpit;
