/* global React, Icon, ConfidenceBar, Eyebrow, LCorners */
const { useState } = React;

const HypothesisLab = ({ seed }) => {
  const I = Icon;
  const [draft, setDraft] = useState("If we delay the European launch by 90 days due to AI Act, what's the financial impact?");
  const sim = seed.hypothesis;

  return (
    <div className="hypo">
      <section className="panel panel--hypo">
        <LCorners tone="cyan-brand"/>
        <Eyebrow tone="cyan">FORMULATE HYPOTHESIS · isolated sandbox · production state read-only</Eyebrow>
        <textarea className="hypo__input" value={draft} onChange={e => setDraft(e.target.value)} />
        <div className="hypo__chips">
          <span className="hypo__chip">+ Variable</span>
          <span className="hypo__chip">+ Constraint</span>
          <span className="hypo__chip">+ Time horizon</span>
          <button className="btn btn--primary" style={{marginLeft:"auto"}}>Run simulation <I.ArrowRight size={12}/></button>
        </div>
      </section>

      <section className="hypo__result">
        <header className="hypo__result-head">
          <Eyebrow>SIMULATION COMPLETE · {sim.id} · 3.2s · agents consulted: 4</Eyebrow>
          <button className="btn btn--ghost btn--sm">Save scenario</button>
        </header>

        <div className="hypo__cols">
          <div className="hypo__col">
            <Eyebrow>ESTIMATED IMPACT</Eyebrow>
            <ul className="hypo__metrics">
              {sim.impact.map((m, i) => (
                <li key={i}>
                  <span>{m.label}</span>
                  <b style={{color: m.tone === "neg" ? "var(--warn)" : m.tone === "pos" ? "var(--ok)" : "var(--ink-1)"}}>{m.delta}</b>
                </li>
              ))}
            </ul>
            <div className="hypo__conf">
              <Eyebrow>CONFIDENCE</Eyebrow>
              <ConfidenceBar value={sim.confidence} label="MODERATE"/>
              <p className="hypo__conf-note">Limited regulatory precedent for this scenario.</p>
            </div>
          </div>

          <div className="hypo__col">
            <Eyebrow>SECONDARY EFFECTS</Eyebrow>
            <ul className="hypo__effects">{sim.secondary.map((s, i) => <li key={i}>{s}</li>)}</ul>

            <Eyebrow style={{marginTop: 16}}>COMPARE TO</Eyebrow>
            <div className="hypo__compare">
              <div><span>vs. status quo</span><b>+€18M downside avoided</b></div>
              <div><span>vs. accelerate</span><b style={{color:"var(--warn)"}}>+47% reg risk</b></div>
            </div>
          </div>

          <div className="hypo__col">
            <Eyebrow tone="aurum">SANDBOX NOTICE</Eyebrow>
            <p className="hypo__notice">This simulation runs against an isolated state snapshot taken at 14:21:44Z. No production decisions, agent memory, or audit ledger entries are mutated. Results are advisory.</p>
            <div className="hypo__actions">
              <button className="btn btn--ghost btn--sm"><I.Plus size={12}/> Variation</button>
              <button className="btn btn--aurum btn--sm">Promote to decision</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

window.HypothesisLab = HypothesisLab;
