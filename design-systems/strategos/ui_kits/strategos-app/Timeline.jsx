/* global React, Icon, ConfidenceBar, AuditTrailItem, Eyebrow, SegmentedTabs */
const { useState } = React;

const Timeline = ({ seed }) => {
  const I = Icon;
  const [filter, setFilter] = useState("all");
  const tabs = [
    { id: "all", label: "All decisions" },
    { id: "override", label: "Human overrides" },
    { id: "audit", label: "Audit ledger" },
  ];

  return (
    <div className="timeline">
      <header className="zone-head">
        <SegmentedTabs tabs={tabs} value={filter} onChange={setFilter}/>
        <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
          <button className="btn btn--ghost btn--sm"><I.Filter size={12}/> Filter</button>
          <span className="zone-head__meta">142 decisions · 2,847 audit events · since 2025-09-01</span>
        </div>
      </header>

      {filter !== "audit" && (
        <section className="dec-history">
          {seed.decisions.filter(d => filter === "all" ? true : d.status === "COMMITTED_OVERRIDE").map(d => {
            const isOverride = d.status === "COMMITTED_OVERRIDE";
            const ok = d.outcome?.status === "ok";
            return (
              <article key={d.id} className={`dec-row ${isOverride ? "dec-row--override" : ""}`}>
                <div className="dec-row__rail" style={{background: isOverride ? "var(--aurum)" : "var(--cyan-dim)"}}/>
                <div className="dec-row__head">
                  <span className="dec-row__ts">{(d.committedAt || d.createdAt).replace("T"," ").replace("Z","Z")}</span>
                  <span className="dec-row__id">{d.id}</span>
                  {isOverride
                    ? <span className="chip chip--aurum">OVERRIDE</span>
                    : d.status === "COMMITTED" ? <span className="chip chip--cyan">ACCEPTED</span> : <span className="chip">PENDING</span>}
                  {d.outcome && <span className={`chip chip--${ok ? "ok" : "warn"}`}>OUTCOME: {ok ? "favorable" : "neutral"}</span>}
                </div>
                <h3 className="dec-row__title">{d.title}</h3>
                <div className="dec-row__cols">
                  <div className="dec-row__col">
                    <Eyebrow>AI RECOMMENDED</Eyebrow>
                    <div className="kv"><span>{d.alternatives.find(a => a.id === d.ai.chosenAltId)?.label}</span></div>
                    <ConfidenceBar value={d.ai.confidence} />
                  </div>
                  <div className="dec-row__col">
                    <Eyebrow tone="aurum">HUMAN CHOSE</Eyebrow>
                    <div className="kv"><span>{d.alternatives.find(a => a.id === (d.humanChoice || d.ai.chosenAltId))?.label}</span></div>
                    <span className="dec-row__by">{d.committedBy || "—"}</span>
                  </div>
                  <div className="dec-row__col">
                    <Eyebrow>OUTCOME</Eyebrow>
                    <p className="dec-row__outcome">{d.outcome?.note || "Pending observation."}</p>
                  </div>
                </div>
                {d.rationale && <div className="dec-row__rationale">"{d.rationale}"</div>}
              </article>
            );
          })}
        </section>
      )}

      {filter === "audit" && (
        <section className="audit-ledger">
          <Eyebrow>AUDIT LEDGER · UTC · second precision</Eyebrow>
          <div className="audit-list">
            {seed.audit.map((ev, i) => <AuditTrailItem key={i} ev={ev}/>)}
          </div>
        </section>
      )}
    </div>
  );
};

window.Timeline = Timeline;
