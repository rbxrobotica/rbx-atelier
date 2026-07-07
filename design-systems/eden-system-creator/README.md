# Éden System Creator — Design System

> A platform for creating, evolving and governing real systems through agentic orchestration. The interface is sober, dark, precise and institutional. Zurich-coded. Control room over canvas.

Éden System Creator is RBX Systems' creation layer: where humans define intent and constraints, and specialized AI agents reason, debate, produce artifacts and prepare systems for production. The user is **the orchestrator** (the maestro). The agents are specialized **musicians**. The platform is **the room, the score, the memory, the rules and the production path**.

This design system encodes the visual and editorial language used across the Éden product surfaces. It builds on the accepted **RBX Voltage** brand system: dark-first, cyan single-accent, Inter + JetBrains Mono, hairline structure, no decoration.

---

## Sources

This system is rooted in material the user attached. If you have access, explore for higher fidelity work:

- **Product manifesto.** `rbxrobotica/rbx-eden-system-creator` → `MANIFEST.md`. The 16-section foundation document. Read it before designing anything new.
  https://github.com/rbxrobotica/rbx-eden-system-creator
- **Accepted brand assets — RBX Voltage.** `rbxrobotica/rbx-eden-system-creator/atelier/brand-voltage/`. Marks, wordmarks, tokens, preview. Imported into `assets/` and `colors_and_type.css`.
- **Prior systems explored (archived).** `atelier/RBX Systems Design System/` and `atelier/RBX Design System/`. The README for *RBX Systems* is the most thorough write-up of the editorial / visual posture and was used directly to seed this document.
- **Existing aligned products.** `rbxrobotica/robson` and `ldamasio/strategos-ui` already render against the Voltage tokens. Use those repos as reference implementations.

The RBX ecosystem Éden integrates with:
- **Strategos** — strategy, planning, situation room
- **Thalamus** — AI policy, evaluation, semantic governance
- **Robson** — trading execution (a *consumer* of governed evolution)
- **TruthMetal** — groundtruth, evaluation, validation
- **rbx-identity** — SSO, sessions, authorization
- **rbx-infra** — GitOps, K8s, observability, deployment

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This file — foundations, content, visuals, iconography, microcopy |
| `SKILL.md` | Agent Skill manifest for downstream use in Claude Code |
| `colors_and_type.css` | All design tokens — colors, type, spacing, radii, motion, **plus Éden-specific tokens** (mission states, risk tiers, autonomy levels, agent role colors) |
| `assets/` | Logos, marks, wordmarks, brand patterns |
| `preview/` | Foundation cards (type, color, spacing, components, brand) rendered for the Design System tab |
| `ui_kits/eden/` | Éden System Creator product UI kit — full click-thru of Dashboard, System view, Create Mission, Agent Council, Artifact Review, Governance & Audit, System Map |

---

## Content Fundamentals

The Éden voice is **institutional, engineering-led, controlled**. It reads like a Swiss systems firm operating critical infrastructure. It explicitly rejects AI-marketing, productivity-app tone, and chatbot familiarity.

**Persona.** Write as *"the platform"*, *"the council"*, *"the orchestrator"*. Never as a friendly assistant ("I'll help you…"). Never as a faceless brand voice.

**Tone test.** Before shipping a sentence, ask: *Does this sound like a control room operator, a senior systems engineer, or a governance officer?* If not, rewrite.

- Less adjective, more architecture.
- Less marketing, more system.
- Less invitation, more declaration.

**Casing.**
- Sentence case for body and button labels: `Create mission`, `Approve execution`, `Trace decision`.
- Title Case for page titles when scanning structure matters: `Agent Council`, `Production Readiness`.
- **UPPERCASE + `0.14em` tracking** for eyebrows, labels, section markers, state names: `MISSION · 4HN-021`, `AUTONOMY: PROPOSE`, `COUNCIL ACTIVE`.
- ALL-CAPS mono for runtime status: `RUNNING`, `BLOCKED`, `REVIEW`, `APPROVED`, `ARCHIVED`.

**Use of person.** Prefer system-statement declaratives over second-person calls-to-action.
- Good: *"The council deliberates before execution."*
- Bad: *"You can let the council deliberate first."*
- Use *"you"* only inside forms and inline help.

**Editorial rules (mandatory).**
- **No em-dashes (—).** Use periods or commas.
- **No arrows (→ ↓ ⇒).** Use prose, sequence numbers, or `/` separators.
- **No marketing verbs.** No *magic*, *supercharge*, *10x*, *unleash*, *unlock*, *seamless*, *empower*.
- **No emoji.** Not in UI, not in microcopy, not in artifact output.
- **No filler.** Drop *essentially*, *basically*, *actually*, *simply*.
- Active voice. Short sentences. Trust the reader.
- **Bilingual (en / pt-BR).** The product is bilingual. English is the default for institutional surfaces; Portuguese is the default for `rbx.ia.br`. Diacritics in Portuguese are mandatory (`execução`, `políticas`, `revisão`). Never ASCII approximations.

**Microcopy primitives.** Prefer these verbs and noun phrases. They are the canonical vocabulary of the product.

| Verb | Use |
|---|---|
| `Create mission` | Define a unit of governed work |
| `Brief agents` | Attach context and constraints |
| `Assemble council` | Convene specialized agents for a decision |
| `Convene council` | Open a multi-agent deliberation |
| `Deliberate` | Council in progress |
| `Propose` | Agent action — non-executing |
| `Run` | Mission moves from brief to active |
| `Attach context` | Bind sources, repos, ADRs, memory |
| `Review decision` | Human reads a council outcome |
| `Approve execution` | Authorize escape from observe/propose |
| `Reject` | Block a proposal with reason |
| `Escalate risk` | Move a finding into the governance queue |
| `Trace decision` | Open the audit trail for a single artifact |
| `Open artifact` | Inspect the durable output |
| `Promote to production` | The terminal authorization |
| `Validate readiness` | Run the production-readiness checklist |
| `Archive mission` | Close, preserving full trace |

| Noun | Use |
|---|---|
| `Mission` | A unit of orchestrated work |
| `System` | A product, service or platform under stewardship |
| `Council` | A structured multi-agent deliberation |
| `Context vault` | The system's memory (docs, decisions, repos, RAG, policies) |
| `Decision trace` | The auditable record of a mission |
| `Artifact` | A durable agent output (ADR, diff, runbook, plan, test, etc.) |
| `Implementation cell` | A scoped, governed execution unit |
| `Readiness score` | Composite of testing, observability, security, rollback, docs |
| `Risk register` | Open governance items per system |
| `Policy` | Constraints binding agent execution |
| `Run` | One execution of a mission; numbered |
| `Cost envelope` | Permitted spend per mission |

**Forbidden phrases (rewrite on sight).**

| Forbidden | Replace with |
|---|---|
| *Let's build something amazing* | *Define mission* |
| *AI assistant* | *Specialized agent* / *Council* |
| *Chat with your agent* | *Brief the council* |
| *Smart suggestions* | *Proposals* |
| *Powered by AI* | *Governed by Thalamus* |
| *Easy*, *simple*, *effortless* | omit entirely |
| *Generate your app* | *Compose system* / *Author missions* |
| *Try our magic builder* | omit; this product does not have one |

**Numerals.** Spell out zero to nine in prose. Digits for 10+ and for **all** metrics, costs, run numbers, durations, tokens. Metrics always in mono: `$0.41`, `12,840 tok`, `p99 48ms`, `run #214`.

---

## Visual Foundations

### Color

The system is **dark-first**. Light surfaces do not exist in production Éden.

**Backgrounds (warm-dark tiers — never pure black, never cool-blue).**
`#07080A` page → `#0D0F12` raised → `#13161A` card → `#1A1E23` hover/nested. Borders are hairline `#24282E` with strong divider `#3A4048`.

**Foreground (warm off-whites — never pure white).**
`#ECECEC` primary → `#B8BCC2` secondary → `#7A7F87` meta/labels → `#4A4F56` placeholder/disabled.

**Voltage cyan (single accent).** `#00FFFF` signal → `#22E5E5` brand → `#06B6B6` muted → `#0B6E6E` dim. This is the **only** accent family. Reserve `signal` for primary CTAs, focus rings, live-pulse, kill-switch. Reserve `brand` for logos, hero, eyebrow rules, council-active state. Use `muted` for hover and links. Use `dim` for tick rulers, secondary divisions, eyebrow underlines.

**Semantic (status only, never chrome).** Calm, desaturated: `#7FB77E` ok / `#D9B55A` warn / `#C56A6A` err / `#7A93B0` info. They sit quietly on dark surfaces. Each has a `.12` subtle tint for row backgrounds.

**Éden domain tokens (extending Voltage).**
- **Mission state.** `--state-drafting | briefing | running | council | review | approved | blocked | archived`.
- **Risk tiers.** `low / med / high / crit`.
- **Autonomy levels.** `observe / propose / execute / promote`.
- **Agent role identity.** 11 hues — `architect / backend / frontend / infra / security / qa / docs / reviewer / governance / product / human`. Each renders as a 4px left rail on the agent card, never as a full fill. Agents are roles, not toys.

**Rules.**
- One accent per surface. Two is noise.
- Color only carries hierarchy, status, or emphasis. Never decoration.
- No gradients on text. No gradients on large surfaces. Pure flat near-black.
- Patterns (`polka-dots.svg`, `diamond-sunset.svg`) exist at ≤8% opacity, small scale, for differentiating one positioned card from a flat surface. Never used as hero.

### Typography

**Families.** `Inter` for UI, headings, body. `JetBrains Mono` for data, metrics, status, run numbers, costs, file paths, code. Both loaded from Google Fonts via `colors_and_type.css`.

> Substitution note: Inter and JetBrains Mono are the canonical faces and are bundled via Google Fonts. The legacy Robson codebase uses Geist — if you find Geist references, replace with Inter.

**Hierarchy carries through weight, not size.**

| Role | Family / Weight / Size / Tracking / Leading |
|---|---|
| Display (H1) | Inter / `300` / 64px / `-0.015em` / `1.1` |
| H2 | Inter / `400` / 36px / `-0.015em` / `1.25` |
| H3 | Inter / `500` / 22px / — / `1.25` |
| H4 | Inter / `500` / 18px / — / `1.25` |
| Lead | Inter / `300` / 18px / — / `1.55` |
| Body | Inter / `400` / 15px / — / `1.55` |
| Caption | Inter / `400` / 13px / muted |
| Eyebrow / Label | Mono / `500` / 11px / `UPPER` / `0.14em` |
| Status | Mono / `500` / 11px / `UPPER` / `0.04em` |
| Metric (numeric) | Mono / `500` / `tabular-nums`, `font-variant-numeric: tabular-nums` |

**Column widths.** `42rem` (672px) max for prose. `72rem` (1152px) for content surfaces. Dashboards use full viewport with `--gutter: 24px`.

### Spacing

4-px base, **strict 8-pt rhythm**: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.

- Section padding (institutional surface): 64–128 px vertical.
- Card padding (product surface): 16–24 px.
- Dense table row height: 32–40 px.
- Sections are separated by a `1px` hairline border-top, not by padding alone. **The hairline is the structure.**

### Borders, radii, shadows

- **Borders.** 1 px, `--border (#24282E)`. Hairlines are a primary structural device. Strong divider only when columns separate (governance side panel, council split).
- **Radii.** Small and institutional. `2px` buttons/inputs/badges, `4px` cards/panels, `8px` modals only, `999px` for status dots only. **No `16px+` corners anywhere.** Mixing radii inside one composition is forbidden.
- **Shadows.** Nearly absent. Overlays use `0 8px 24px rgba(0,0,0,0.5)`. Most surfaces use **rings, not shadows**: `box-shadow: 0 0 0 1px var(--border)`.

### Backgrounds & imagery

- Full-bleed photographic imagery is **rare**. When used, images are dark-biased, cool, b&w or near-mono, grainless. No warm filters. No bright product photography.
- The L-bracket signature (10×10 px, 1.5 px stroke, `--cyan-brand` at 50% opacity, on top-left + bottom-right of cards) is a **signature mark**, used for institutional cards (dashboard hero card, council frame, governance card). Not for every card.
- Patterns at low opacity for rhythm only. Never hero.
- No hand-drawn illustrations, no isometric scenes, no 3D renders, no character art.

### Motion

- Entry: 240 ms, `ease-out`, short translate (8–16 px) + opacity fade.
- Hover: 120–160 ms, color/border only. **No scale, no lift, no bounce.**
- Press: instant. Slight opacity `0.9`. No transform.
- Focus: 2 px cyan ring (`--ring-focus`), 2 px offset. Never a glow.
- Agent council new-turn animation: a hairline progress bar slides L→R at the top of the new contribution. 600 ms, `ease-out`, then settles.
- Live-pulse pip: 1.6 s `eden-pulse` keyframe (defined in CSS). Used only for `RUNNING` mission state and `LIVE` runtime.
- Reduced motion: disable translates and pulse, keep opacity.

### Transparency & blur

- **Blur is allowed exactly once:** the sticky top bar (`backdrop-filter: blur(12px)` over `rgba(7,8,10,0.72)`). Nowhere else.
- Modals use a flat `bg-overlay` scrim, no blur.
- Avoid stacked transparencies.

### Layout rules

- **Sidebar.** Fixed `224px`, dark `bg-1`, hairline right border. Brand mark + product label at top. Nav items mono-12-uppercase. System switcher pinned to bottom.
- **Top bar.** Fixed `52px`. Mono breadcrumb on left (`org / system / mission`). Environment badge + cost envelope + user/avatar on right. No logo here; the sidebar carries it.
- **Split view.** The Agent Council and Artifact Review screens use a hard 60/40 vertical split with a 1 px hairline divider. The left column is the deliberation/discussion, the right column is artifacts/decisions. Never a full-width council.
- **Status rail.** A 6 px-wide vertical bar on the left edge of an `<aside>` or a row, colored by mission state. Reserved for system-level surfaces. Quiet but legible.

### Corner rhythm

If the card is `4px`, its inputs are `2px`, its status dot is `999px`. Nothing else has a radius. Mixing radii inside one composition is forbidden.

---

## Iconography

The system uses **Lucide** (via CDN: `https://unpkg.com/lucide@latest`). No custom icon font, no sprite, no PNGs.

> Substitution flag: Lucide is loaded from CDN at runtime in this design-system project. In production code, npm-install `lucide-react` and tree-shake.

**Rules.**
- Icons are **line**, stroke `1.5`, never filled except for the 6 px status pip.
- Neutral color. Icons inherit `--fg-2` or `--fg-1`. They do not carry accent color, except inside an active state.
- 16 px at body size. 20 px for sidebar/nav. 24 px for empty-state marks. Never decorative at >32 px.
- **No emoji. Ever.**
- **No unicode glyphs as icons**, except `•` for inline separators, `/` for path separators, `·` for mono dividers.

**Canonical icons (use these names).**

| Concept | Icon |
|---|---|
| System | `layers` |
| Mission | `target` |
| Agent | `cpu` (default) — agent roles override below |
| Council | `radio-tower` |
| Context vault | `database` |
| Artifact | `file-text` |
| Decision | `git-pull-request` |
| Risk | `triangle-alert` |
| Policy | `shield` |
| Audit / trace | `eye` |
| Readiness | `gauge` |
| Cost | `circle-dollar-sign` |
| Run | `play` |
| Approve | `check` |
| Reject | `x` |
| Escalate | `chevron-up` |
| Promote to production | `arrow-up-from-line` |
| Search / command palette | `command` |
| User / human orchestrator | `user-cog` |

**Status indicators.** A 6 px filled circle (`.eden-pip`) precedes ALL-CAPS mono state labels: `● RUNNING`, `● COUNCIL`, `● REVIEW`, `● APPROVED`, `● BLOCKED`. The pip uses the matching state color. For live work, append `.eden-pip--pulse`.

---

## Microcopy reference

### Buttons / primary actions

- Primary: `Create mission`, `Convene council`, `Approve execution`, `Promote to production`
- Secondary: `Save brief`, `Attach context`, `Assign agents`, `Open artifact`, `Trace decision`
- Destructive: `Reject proposal`, `Abort run`, `Archive mission`

### Empty states (technical, never cute)

- Dashboard, no missions: `No active missions. Compose a brief or open a system to begin.`
- System, no missions: `No missions on record for this system. Create the first mission to start governed evolution.`
- Council, no contributions: `Council not yet convened. Brief agents and run the mission.`
- Artifacts, none: `No artifacts produced. Artifacts are recorded once an agent commits a proposal.`
- Audit, no entries: `No audit entries for this filter. Adjust the window or scope.`

### Loading states

- Council deliberating: `Council deliberating. Run #214 · 6 agents · started 00:42 ago.`
- Mission running: `Mission running. Last update 4s ago.`
- Inline: `Loading trace…` (never `please wait`)

### Error states (technical, no apology theatre)

- Generic: `Operation failed. Trace recorded as run #214 / err-7102.`
- Policy block: `Policy denied execution. Required approval not granted.`
- Cost ceiling: `Cost envelope exceeded. Mission paused pending re-authorization.`
- Connectivity: `Agent unreachable. Last heartbeat 00:42 ago.`

### Confirmation prompts

- Approve execution: `Authorize execution at autonomy level PROPOSE? This will allow the mission to draft artifacts but not commit code.`
- Promote: `Promote mission 4HN-021 to production? This action is recorded in the governance trail and notifies on-call.`
- Reject: `Reject this proposal? A reason is required for the audit record.`

### Status sentences (mono, for cards)

- `RUN #214 · 6 AGENTS · COST $0.41 · STARTED 00:42`
- `READINESS 72% · 4 OPEN RISKS · LAST PROMOTION 4d AGO`
- `MODEL CLAUDE-OPUS · TOKENS 12,840 · TEMP 0.20`

---

## What to avoid

To preserve the institutional, control-room posture, **do not** introduce:

- Bubble-style chat UI for the council. Use structured cards/rows.
- Gradients on text or on hero surfaces.
- Purple "AI" accents — the only accent family is Voltage cyan.
- Neon glow effects beyond the single live-pulse pip.
- Drag-and-drop visual builders, canvas tools, or whiteboards. Éden does not "build apps".
- Marketing illustrations, 3D renders, isometric scenes, hand-drawn art.
- Avatars with cartoon agent personas. Agents are roles, not characters.
- Long-form chat composers. The council has structured contribution slots, not a chat box.
- Soft pastel pill statuses. State is mono-uppercase, with a 6 px pip.
- Excessive radii (`12px+`). Excessive shadow. Excessive ornamentation.
- "Try our magic …" / "Powered by AI" copy.
- Emoji in any surface. Ever.

---

## Index of preview cards

See `preview/` for the rendered cards that populate the Design System tab.

**Type** · display · body · mono · status · numerics
**Colors** · backgrounds · foreground · cyan voltage scale · semantic · agent role identity · mission states
**Spacing** · scale · radii · shadow / rings · L-bracket signature
**Components** · buttons · inputs · badges · status pip · agent card · mission card · decision card · artifact card · dense table row · status rail
**Brand** · marks · wordmarks · lockups for products

## UI Kit

`ui_kits/eden/` — clickable Éden System Creator product. Open `ui_kits/eden/index.html` to step through Dashboard / System / Create Mission / Agent Council / Artifact Review / Governance & Audit / System Map.
