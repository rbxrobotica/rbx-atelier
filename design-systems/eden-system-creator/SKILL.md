---
name: eden-system-creator-design
description: Use this skill to generate well-branded interfaces and assets for Éden System Creator (RBX Systems' agentic system-creation platform), either for production or throwaway prototypes/mocks. Contains the design tokens, the editorial voice, the brand assets, the iconography rules, and a full product UI kit for Dashboard, Agent Council, Create Mission, Artifact Review, Governance & Audit and System Map. Dark-first, Zurich-coded, institutional. Built on the accepted RBX Voltage brand system.
user-invocable: true
---

# Éden System Creator — design skill

Read `README.md` first, then explore the other files in this skill folder.

## Files

- `README.md` — full visual + content foundations, microcopy primitives, iconography rules, what to avoid.
- `colors_and_type.css` — all design tokens. Built on RBX Voltage, extended with Éden domain tokens (mission states, risk tiers, autonomy levels, agent role identity).
- `assets/` — logos, marks, wordmarks (RBX, RBX Systems, Robson, TruthMetal), brand patterns.
- `preview/` — foundation cards rendered as HTML. Cross-reference these when building new surfaces.
- `ui_kits/eden/` — product UI kit (React + JSX via Babel). Lift components from here for new screens.

## When invoked

If the user asks for a mock, a screen, a prototype, a slide, a doc, or production code:

1. **Establish target.** Ask whether this is for the product, an internal doc, a slide, a marketing page (rare for Éden), or production code in `rbxrobotica/rbx-eden-system-creator`.
2. **Load tokens.** Import or reference `colors_and_type.css`. Add `.rbx` to the root container.
3. **Build with the vocabulary.** Use the canonical verbs (`Create mission`, `Convene council`, `Approve execution`, `Trace decision`, `Promote to production`) and noun phrases (`Mission`, `Council`, `Artifact`, `Decision trace`, `Readiness score`, `Risk register`, `Policy`).
4. **Lift, do not invent.** If a component already exists in `ui_kits/eden/`, copy it. Components in this kit: `Sidebar`, `Topbar`, `StatusPip`, `Badge`, `Button`, `Field`, `Card`, `AgentCard`, `MissionCard`, `DecisionCard`, `ArtifactCard`, `CouncilSplit`, `DenseTable`, `StatusRail`, `ApprovalPanel`, `Timeline`, `CommandPalette`.
5. **Verify against rules.** Re-read the "What to avoid" section of `README.md` before shipping.

## Forbidden, in any output

- Em-dashes (—), arrows (→), emoji.
- Purple "AI" accents, glow effects beyond live-pulse, gradients on text or hero.
- Marketing verbs: *magic*, *supercharge*, *10x*, *unlock*, *seamless*, *empower*.
- Chat-bubble UIs, drag-and-drop builders, avatar personas for agents.
- "Powered by AI", "Try our magic …", "Build apps instantly".
- Soft pastel pill statuses; status is **always** mono-uppercase with a 6 px pip.

## Required, in every output

- Dark background (`--bg-0` or `--bg-1`).
- Inter + JetBrains Mono via Google Fonts (already in `colors_and_type.css`).
- Hairline structure between sections (`border-top: 1px solid var(--border)`).
- Small radii only (`2 / 4 / 8 px`).
- One accent family: Voltage cyan. Status colors only for status.
- Mono `tabular-nums` for all metrics, costs, run numbers, durations.

If unsure, ask the orchestrator. The point of this product is *governed* execution; the design skill behaves the same way.
