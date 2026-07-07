---
name: strategos-design
description: Use this skill to generate well-branded interfaces and assets for Strategos (Merovelis), either for production code in strategos-ui or for throwaway prototypes/mocks. Strategos is a "situation room" for AI-augmented strategic leadership — dark, deliberative, auditable. The skill carries the Obsidian Council design system: warm-graphite surfaces, hairline structure, cyan (AI) + aurum (human) accents, monospaced numerals, and the seven Rules of Design.
user-invocable: true
---

Read `README.md` in this skill to understand the product, then `RULES_OF_DESIGN.md` for the hard constraints (every AI recommendation needs confidence/factors/limitations/alternatives; every human action produces an audit artifact; metrics without decisions are noise; etc.).

Reference files:

- `colors_and_type.css` — every token, ready to copy into `globals.css` of a Tailwind project.
- `implementation_guide.md` — how to replace tokens in the live `strategos-ui` repo and update `tailwind.config.ts`.
- `assets/` — Strategos placeholder mark (SVG) and agent-class glyphs.
- `ui_kits/strategos-app/` — high-fidelity React (JSX) recreations of the cockpit, decision-pending screen, timeline, and risk landscape; lift these as the canonical visual reference.
- `preview/` — per-card specimens that populate the Design System tab.

If the user asks for visual artifacts (slides, mocks, throwaway prototypes), copy the relevant assets and CSS into a new HTML file. If the user is in production `strategos-ui`, follow `implementation_guide.md` step-by-step and respect the legacy variable shims.

If invoked without other guidance, ask the user which zone they are working in (Command Center, Decision History, Risk Landscape, Agent Observatory, Hypothesis Lab, Deliberation Space), what entity they are presenting (Decision, Risk, Recommendation, Audit Event, Hypothesis), and whether the surface is editorial (rare) or war-room (default — full-bleed, dense, cyan + aurum + hairlines). Then act as an expert designer producing either an HTML artifact or production code.
