/* global React, Icon, RiskBadge, Eyebrow */
const RiskLandscape = ({ seed }) => {
  const I = Icon;
  const cats = [...new Set(seed.risks.map(r => r.category))];
  const total = (seed.risks.reduce((s, r) => s + r.probability * r.impact * 10 / 6, 0) / seed.risks.length).toFixed(1);

  return (
    <div className="risk-lx">
      <header className="risk-lx__hero">
        <div>
          <Eyebrow>AGGREGATE RISK SCORE</Eyebrow>
          <div className="risk-lx__score">{total}<span>/10</span></div>
          <div className="risk-lx__trend"><I.ArrowDown size={12} color="var(--ok)"/> <span>improving · −0.3 over 7d</span></div>
        </div>

        {/* P × I matrix */}
        <div className="matrix">
          <Eyebrow>P × I MATRIX</Eyebrow>
          <div className="matrix__grid">
            {[0, 1, 2, 3, 4].reverse().map(row => (
              <div key={row} className="matrix__row">
                {[0, 1, 2, 3, 4].map(col => {
                  const tone = (row + col >= 6) ? "risk" : (row + col >= 4) ? "warn" : (row + col >= 2) ? "info" : "ok";
                  const dotsHere = seed.risks.filter(r => Math.floor(r.probability * 5) === col && Math.floor(r.impact / 2) === row);
                  return (
                    <div key={col} className="matrix__cell" style={{background: `color-mix(in oklab, var(--${tone}) 8%, transparent)`, borderColor: `var(--hairline)`}}>
                      {dotsHere.map(d => <span key={d.id} className="matrix__dot" style={{background: `var(--${tone})`}} title={d.name}/>)}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="matrix__axes"><span>P low →</span><span>P high</span></div>
        </div>
      </header>

      {cats.map(cat => (
        <section key={cat} className="risk-cat">
          <Eyebrow>{cat.toUpperCase()} · {seed.risks.filter(r => r.category === cat).length} risks</Eyebrow>
          <div className="risk-cat__grid">
            {seed.risks.filter(r => r.category === cat).map(r => {
              const score = (r.probability * r.impact * 10 / 6).toFixed(1);
              return (
                <article key={r.id} className="risk-card">
                  <div className="risk-card__head">
                    <span className="risk-card__id">{r.id}</span>
                    <RiskBadge severity={r.severity} P={r.probability} I={r.impact} score={score} trend={r.trend}/>
                  </div>
                  <h3 className="risk-card__name">{r.name}</h3>
                  <div className="risk-card__mit"><Eyebrow>MITIGATION</Eyebrow><p>{r.mitigation}</p></div>
                  <div className="risk-card__foot">
                    <span>Status · <b>{r.status}</b></span>
                    <span>·</span>
                    <span>updated {r.updatedS < 60 ? `${r.updatedS}s` : `${Math.round(r.updatedS/60)}m`} ago</span>
                    <button className="btn btn--ghost btn--sm" style={{marginLeft:"auto"}}>Acknowledge</button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

window.RiskLandscape = RiskLandscape;
