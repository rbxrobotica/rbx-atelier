// Fake data shaped like strategos-core's proto types, scoped to the kit.
window.SEED = {
  user: { name: "L. Damasio", role: "CEO" },

  agents: [
    { id: "market-analyst-ai", name: "Market Analyst", class: "STRATEGIC", status: "healthy", uptime: 99.9, latencyMs: 450, lastActivityS: 30, recent: ["Generated REC-0214-A", "Fetched market data", "Analyzed competitor moves"] },
    { id: "risk-assessor-ai", name: "Risk Assessor", class: "STRATEGIC", status: "degraded", uptime: 92.4, latencyMs: 1240, lastActivityS: 88, recent: ["Recomputed RISK-FX-117", "Slow upstream from Thalamus"] },
    { id: "scenario-runner-ai", name: "Scenario Runner", class: "TACTICAL", status: "healthy", uptime: 99.7, latencyMs: 612, lastActivityS: 124, recent: ["Tested HYP-0042", "Tested HYP-0041"] },
    { id: "audit-bookkeeper", name: "Audit Bookkeeper", class: "OPERATIONAL", status: "healthy", uptime: 99.99, latencyMs: 88, lastActivityS: 6, recent: ["Wrote 3 events to ledger"] },
    { id: "regulatory-watch", name: "Regulatory Watch", class: "OBSERVER", status: "healthy", uptime: 99.8, latencyMs: 320, lastActivityS: 47, recent: ["Tracked 4 jurisdictions"] },
  ],

  decisions: [
    {
      id: "DEC-0214-A",
      title: "Increase market position by 10%",
      proposal: "Reallocate 10% of cash reserves into core equity holdings to capture favorable volatility window.",
      status: "PENDING_HUMAN",
      createdAt: "2026-04-26T14:21:44Z",
      ai: {
        confidence: 0.82,
        chosenAltId: "alt-1",
        factors: [
          "Market volatility low (78th percentile)",
          "Regulatory environment stable through Q1",
          "Similar 2021 conditions returned +15%",
        ],
        limitations: [
          "Does not account for black swan events",
          "Market data is 2 hours old",
          "Excludes private-equity correlations",
        ],
      },
      alternatives: [
        { id: "alt-1", label: "Increase position by 10%", confidence: 0.82 },
        { id: "alt-2", label: "Hold position",            confidence: 0.65 },
        { id: "alt-3", label: "Reduce position by 5%",    confidence: 0.42 },
      ],
      impact: { risk: "medium", timeframe: "30d", financial: "+R$ 2.3M expected" },
      evidence: 6,
    },
    {
      id: "DEC-0213-B",
      title: "Diversify tech exposure",
      proposal: "Add semiconductor and infrastructure positions to reduce concentration in pure software equities.",
      status: "PENDING_HUMAN",
      createdAt: "2026-04-26T13:02:18Z",
      ai: { confidence: 0.68, chosenAltId: "alt-1", factors: ["Software sector P/E rising", "Hardware undervalued vs trailing demand"], limitations: ["Sector rotation timing uncertain"] },
      alternatives: [{ id: "alt-1", label: "Diversify across hardware", confidence: 0.68 }, { id: "alt-2", label: "Hold concentrated", confidence: 0.45 }],
      impact: { risk: "low", timeframe: "60d", financial: "neutral expected" },
      evidence: 4,
    },
    {
      id: "DEC-0212-C",
      title: "Hold position pending regulatory guidance",
      proposal: "Hold all positions until Q1 regulatory guidance is published, expected mid-February.",
      status: "COMMITTED_OVERRIDE",
      createdAt: "2026-04-25T16:14:09Z",
      committedAt: "2026-04-25T16:33:21Z",
      committedBy: "L. Damasio",
      rationale: "Markets may not behave like 2021. Holding until Q1 regulatory guidance is released.",
      ai: { confidence: 0.45, chosenAltId: "alt-1", factors: [], limitations: [] },
      alternatives: [{ id: "alt-1", label: "Reduce position by 10%", confidence: 0.72 }, { id: "alt-2", label: "Hold position", confidence: 0.45 }],
      humanChoice: "alt-2",
      impact: { risk: "low", timeframe: "45d", financial: "deferred" },
      outcome: { status: "ok", note: "Regulatory guidance released favorably; gained 2% over AI path." },
    },
    {
      id: "DEC-0211-D",
      title: "Onboard new market data vendor",
      proposal: "Switch primary market data source to Polaris Feed.",
      status: "COMMITTED",
      createdAt: "2026-04-22T09:11:00Z",
      committedAt: "2026-04-22T11:40:02Z",
      committedBy: "L. Damasio",
      ai: { confidence: 0.79, chosenAltId: "alt-1", factors: [], limitations: [] },
      alternatives: [{ id: "alt-1", label: "Switch to Polaris", confidence: 0.79 }],
      humanChoice: "alt-1",
      impact: { risk: "low", timeframe: "—", financial: "−R$ 80k/yr" },
      outcome: { status: "ok", note: "Latency improved 32%; coverage parity confirmed." },
    },
  ],

  risks: [
    { id: "RISK-REG-001", category: "Regulatory", name: "Policy uncertainty (BCB Q2 framework)", probability: 0.6, impact: 8, severity: "CRITICAL", trend: "up",   status: "Active",   mitigation: "Monitoring + scenario modeling underway", updatedS: 240 },
    { id: "RISK-MKT-014", category: "Market",     name: "Volatility spike vs hedge ratio",       probability: 0.35, impact: 7, severity: "ELEVATED", trend: "flat", status: "Active",   mitigation: "60% hedged via index puts",            updatedS: 540 },
    { id: "RISK-FX-117",  category: "Market",     name: "BRL/USD currency drift",                probability: 0.20, impact: 4, severity: "MONITORED", trend: "down", status: "Emerging", mitigation: "Under evaluation",                     updatedS: 80 },
    { id: "RISK-OPS-022", category: "Operational", name: "Single market-data vendor concentration", probability: 0.15, impact: 5, severity: "MONITORED", trend: "down", status: "Mitigating", mitigation: "Polaris onboarded; cutover ETA 2 wk", updatedS: 1800 },
    { id: "RISK-AI-009",  category: "AI",         name: "Risk-Assessor degraded latency",         probability: 0.40, impact: 3, severity: "ELEVATED", trend: "up",   status: "Active",   mitigation: "On-call paged",                       updatedS: 60 },
  ],

  audit: [
    { ts: "2026-04-26T14:23:07Z", action: "COMMIT",   actor: "L. Damasio",      target: "DEC-0214-A", note: "accepted \"Increase position\"" },
    { ts: "2026-04-26T14:21:44Z", action: "EMIT",     actor: "market-analyst-ai", target: "REC-0214-A", note: "82% conf · 3 factors" },
    { ts: "2026-04-26T14:19:12Z", action: "OVERRIDE", actor: "L. Damasio",      target: "DEC-0212-C", note: "\"waiting for Q1 guidance\"" },
    { ts: "2026-04-26T14:17:00Z", action: "SIGNAL",   actor: "CFO",             target: "—",          note: "\"regulatory uncertainty rising\"" },
    { ts: "2026-04-26T14:02:11Z", action: "EMIT",     actor: "risk-assessor-ai", target: "REC-0213-B", note: "68% conf · 2 factors" },
    { ts: "2026-04-26T13:48:55Z", action: "ACK",      actor: "L. Damasio",      target: "RISK-REG-001", note: "reviewed" },
    { ts: "2026-04-26T13:11:02Z", action: "PLAN",     actor: "L. Damasio",      target: "RISK-MKT-014", note: "hedge ratio reaffirmed" },
    { ts: "2026-04-26T11:40:02Z", action: "COMMIT",   actor: "L. Damasio",      target: "DEC-0211-D", note: "Polaris vendor switch" },
  ],

  hypothesis: {
    id: "HYP-0042",
    confidence: 0.61,
    impact: [
      { label: "Revenue (12mo)", delta: "−€42M", tone: "neg" },
      { label: "Reg. exposure",  delta: "−68%",  tone: "pos" },
      { label: "Time-to-market", delta: "+90d",  tone: "neg" },
      { label: "Compliance cost", delta: "−€8M", tone: "pos" },
    ],
    secondary: [
      "Competitor BlackRock launches first → ~12% market share at risk",
      "Engineering team reallocated to APAC for 90d window",
      "Audit posture improves materially in EU",
      "Investor narrative shifts: defensive vs. growth",
    ],
  },

  metrics: [
    { label: "Risk score",    value: "7.2",  unit: "/10", trend: "down" },
    { label: "Volatility",    value: "↑",    unit: "21d", trend: "up" },
    { label: "Portfolio",     value: "+2.3", unit: "%",   trend: "up" },
    { label: "Regulatory",    value: "—",    unit: "Q1",  trend: "flat" },
    { label: "Agents",        value: "4/5",  unit: "ok",  trend: "down" },
    { label: "Last decision", value: "23m",  unit: "ago", trend: "flat" },
  ],
};
