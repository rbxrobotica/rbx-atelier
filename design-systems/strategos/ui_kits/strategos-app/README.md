# Strategos UI Kit · "Obsidian Council"

High-fidelity recreation of the Strategos war room. Built directly against the source in `ldamasio/strategos-ui` — now SvelteKit + Svelte 5 + Tailwind 3 — but rendered here as a single HTML file using vanilla React + Babel so it can be opened without a build.

## What's in this kit

- **`index.html`** — clickable prototype switching between the five core zones.
- **`AppShell.jsx`** — sidebar + topbar + page chrome.
- **`Cockpit.jsx`** — Strategic Command Center (situation summary, pending decisions, key metrics, agent strip).
- **`DecisionDeliberation.jsx`** — pending-decision detail with full AI reasoning panel, alternatives, override dialog.
- **`Timeline.jsx`** — Decision History with filters and audit ledger.
- **`RiskLandscape.jsx`** — risk matrix, risk cards by category.
- **`AgentObservatory.jsx`** — agent health grid, recent reasoning log.
- **`primitives.jsx`** — shared building blocks: `ConfidenceBar`, `AgentStatusBadge`, `RiskBadge`, `AuditTrailItem`, `SegmentedTabs`, `Eyebrow`, `Sparkline`, etc.

## How to read this kit

This is a **visual reference**, not production code. Components mirror the design language but skip the ConnectRPC/Zustand wiring — data comes from a fake `seed.js`. Lift the styling, motion, and copy decisions; rewire the runtime in your own components.

## Mapping back to `strategos-ui`

| Kit component | Real source |
|---|---|
| `AppShell` | `src/components/layout/{shell,sidebar,topbar}.tsx` |
| `Cockpit` | `src/components/layout/cockpit-grid.tsx` + `painel/painel-mini.tsx` |
| `DecisionDeliberation` | `src/components/painel/{decision-list,decision-approve-modal}.tsx` |
| `Timeline` | `src/components/painel/audit-alerts.tsx` (extended) |
| `RiskLandscape` | new (zone 3 in `docs/CONCEPTUAL-ZONES.md`) |
| `AgentObservatory` | `src/components/painel/agent-overview.tsx` |
