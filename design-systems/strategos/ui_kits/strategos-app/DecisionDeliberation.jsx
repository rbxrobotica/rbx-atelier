/* global React, Icon, ConfidenceBar, RiskBadge, AuditTrailItem, Eyebrow, LCorners */
const { useState } = React;

const DecisionDeliberation = ({ seed, decisionId, onBack, onCommit }) => {
  const I = Icon;
  const d = seed.decisions.find(x => x.id === decisionId) || seed.decisions[0];
  const [chosen, setChosen] = useState(d.ai.chosenAltId);
  const [override, setOverride] = useState("");
  const isOverride = chosen !== d.ai.chosenAltId;

  return (
    <div className="delib">
      <button className="backlink" onClick={onBack}>← Back to cockpit</button>

      <header className="delib__head">
        <div>
          <Eyebrow tone="cyan">PENDING HUMAN JUDGMENT · {d.id}</Eyebrow>
          <h2 className="delib__title">{d.title}</h2>
          <p className="delib__proposal">{d.proposal}</p>
        </div>
        <div className="delib__meta">
          <div><span>Created</span><b>{d.createdAt.replace("T"," ").replace("Z","Z")}</b></div>
          <div><span>Impact</span><b>{d.impact.financial}</b></div>
          <div><span>Risk</span><b style={{color:"var(--warn)"}}>{d.impact.risk}</b></div>
          <div><span>Horizon</span><b>{d.impact.timeframe}</b></div>
        </div>
      </header>

      <div className="delib__cols">
        {/* AI reasoning panel */}
        <section className="panel panel--ai">
          <LCorners tone="cyan-dim"/>
          <header className="panel__head">
            <Eyebrow tone="cyan">AI REASONING · market-analyst-ai</Eyebrow>
            <ConfidenceBar value={d.ai.confidence} label="HIGH" />
          </header>
          <div className="panel__body">
            <h4 className="reason-h">Top factors</h4>
            <ol className="reason-list">{d.ai.factors.map((f, i) => <li key={i}>{f}</li>)}</ol>

            <h4 className="reason-h reason-h--warn">Limitations</h4>
            <ul className="reason-list reason-list--warn">{d.ai.limitations.map((f, i) => <li key={i}>{f}</li>)}</ul>

            <h4 className="reason-h">Alternatives considered</h4>
            <div className="alts">
              {d.alternatives.map(alt => (
                <label key={alt.id} className={`alt ${chosen === alt.id ? "is-on" : ""} ${alt.id === d.ai.chosenAltId ? "alt--ai" : ""}`}>
                  <input type="radio" checked={chosen === alt.id} onChange={() => setChosen(alt.id)} />
                  <span className="alt__title">{alt.label}</span>
                  {alt.id === d.ai.chosenAltId && <span className="alt__ai-tag">AI choice</span>}
                  <ConfidenceBar value={alt.confidence} />
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Human judgment panel */}
        <section className="panel panel--human">
          <header className="panel__head"><Eyebrow tone="aurum">HUMAN JUDGMENT · L. Damasio (CEO)</Eyebrow></header>
          <div className="panel__body" style={{display:"flex", flexDirection:"column", gap:"14px"}}>
            <div>
              <div className="kv"><span>Selected</span><b>{d.alternatives.find(a => a.id === chosen)?.label}</b></div>
              <div className="kv"><span>Divergence</span><b style={{color: isOverride ? "var(--aurum-bright)" : "var(--ok)"}}>{isOverride ? "↕ override AI" : "✓ matches AI"}</b></div>
            </div>

            <div>
              <label className="field-lbl" style={{color: isOverride ? "var(--aurum)" : "var(--ink-2)"}}>{isOverride ? "Override rationale · required" : "Notes · optional"}</label>
              <textarea
                className="field-ta"
                style={{borderColor: isOverride ? "var(--aurum-dim)" : "var(--hairline-strong)"}}
                placeholder={isOverride ? "Explain why this differs from the AI recommendation. This rationale is recorded in the audit ledger." : "Optional context for the audit log…"}
                value={override}
                onChange={e => setOverride(e.target.value)}
              />
            </div>

            <div className="govern">
              <Eyebrow>GOVERNANCE</Eyebrow>
              <ul>
                <li><I.Lock size={12}/> Strategic class · CEO approval required</li>
                <li><I.Activity size={12}/> Audit artifact will be written on commit</li>
                <li><I.Layers size={12}/> Snapshot of strategic state captured at 14:21:44Z</li>
              </ul>
            </div>

            <div className="actions">
              <button className="btn btn--ghost" onClick={onBack}>Defer</button>
              <button className="btn btn--danger">Reject</button>
              <button
                className={isOverride ? "btn btn--aurum" : "btn btn--primary"}
                disabled={isOverride && !override.trim()}
                onClick={() => onCommit({ chosen, override, isOverride })}
              >
                {isOverride ? "Commit override" : "Commit decision"} <I.Check size={12}/>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

window.DecisionDeliberation = DecisionDeliberation;
