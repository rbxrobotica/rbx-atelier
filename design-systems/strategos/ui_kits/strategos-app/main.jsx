/* global React, ReactDOM, AppShell, Cockpit, DecisionDeliberation, Timeline, RiskLandscape, AgentObservatory, HypothesisLab, SEED */
const { useState } = React;

const TITLES = {
  cockpit:    { t: "Cockpit",            s: "Strategic command · all signals at a glance",       c: "Situation Room" },
  decision:   { t: "Decision DEC-0214-A", s: "Pending CEO approval · regulatory exposure",        c: "Situation Room / Pending decisions" },
  timeline:   { t: "Timeline & Audit",   s: "Decision history with outcomes and immutable ledger", c: "Situation Room" },
  risk:       { t: "Risk Landscape",     s: "Aggregate exposure · P × I matrix · live mitigation", c: "Situation Room" },
  agents:     { t: "Agent Observatory",  s: "Council agent health, latency and reasoning trails",  c: "Situation Room" },
  hypothesis: { t: "Hypothesis Lab",     s: "Sandboxed what-if simulation · production read-only", c: "Situation Room" },
};

const App = () => {
  const [zone, setZone] = useState("cockpit");
  const [decisionId, setDecisionId] = useState(null);

  const goto = (id) => { setZone(id); setDecisionId(null); };
  const openDecision = (id) => { setDecisionId(id); setZone("decision"); };

  const meta = TITLES[zone];

  return (
    <AppShell active={zone === "decision" ? "decision" : zone} onNavigate={goto} title={meta.t} subtitle={meta.s} breadcrumb={meta.c}>
      {zone === "cockpit"    && <Cockpit seed={SEED} onOpenDecision={openDecision}/>}
      {zone === "decision"   && <DecisionDeliberation seed={SEED} decisionId={decisionId || "DEC-0214-A"} onBack={() => goto("cockpit")} onCommit={() => goto("timeline")}/>}
      {zone === "timeline"   && <Timeline seed={SEED}/>}
      {zone === "risk"       && <RiskLandscape seed={SEED}/>}
      {zone === "agents"     && <AgentObservatory seed={SEED}/>}
      {zone === "hypothesis" && <HypothesisLab seed={SEED}/>}
    </AppShell>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
