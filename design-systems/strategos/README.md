# Strategos Design System — "Obsidian Council"

> _A war room for AI-augmented strategic leadership._

Strategos is not a dashboard. It is a **situation room** — a space where human leaders deliberate with AI agents, judge their reasoning, and produce auditable strategic decisions. This Design System turns that philosophy into a coherent visual language that the `strategos-ui` codebase (SvelteKit / Svelte 5 / Tailwind 3) can adopt directly.

The system is named **Obsidian Council**: warm-graphite surfaces, hairline structure, a controlled cyan signature inherited from the RBX family, and a second strategic accent ("Aurum" — cool amber/dim gold) reserved for human judgment moments. It deliberately reads as an executive war-room, not a gamer-grade or sci-fi cockpit.

---

## Product context

**Strategos** (Merovelis) is a "situation room for AI-augmented strategic leadership." `strategos-ui` is the presentation/collaboration layer; `strategos-core` is the strategic logic and decision engine; **Thalamus** supplies external intelligence. The UI never computes strategy — it presents recommendations, captures human judgment, and produces decision artifacts.

Core entities modeled by `strategos-core` and surfaced in the UI:

- Objectives, Risks, Scenarios, Hypotheses, Plans
- Decisions, Strategic Sessions, State Snapshots
- Decision Logs, Governance Policies, Audit Trails

Six **conceptual zones** organize the interface:

1. **Strategic Command Center** — current situation, pending decisions
2. **Timeline & Decision History** — decision archaeology
3. **Risk Landscape** — risks, probabilities, mitigations
4. **Agent Observatory** — health & reasoning of AI agents
5. **Hypothesis Validation Lab** — what-if analysis
6. **Strategic Deliberation Space** — collaborative annotations & consensus

### UX principles the system encodes

| Principle | How the visual system expresses it |
|---|---|
| Deliberation over dashboards | Quiet base, decisions and recommendations get the only saturated chrome |
| Humans judge, AI explains | Cyan = AI reasoning; Aurum = human action; semantic colors = state of the world |
| Transparency as trust | Confidence bars, factor lists, limitation chips, audit trail are first-class components |
| Decision archaeology | Timeline items, audit-trail items, override-reason fields are official primitives |
| Progressive disclosure | Hairline cards stay flat; one click promotes them into a full deliberation panel |

---

## Sources

All references were read via the GitHub connector. Local paths are recorded for the user's machine.

| Source | Path | Used for |
|---|---|---|
| Strategos UI codebase | `github.com/ldamasio/strategos-ui` (private) · local `~/apps/strategos-ui/` | Current tokens, sidebar/topbar, decision/agent/painel components, six-zones doc |
| Strategos Core (entities) | `github.com/ldamasio/strategos-core` (private) · local `~/apps/strategos-core/` | Domain model — Decision, Risk, Agent, AuditEvent (read indirectly through `src/types/agent.ts` of strategos-ui) |
| Merovelis frontend base | `github.com/rbxrobotica/rbx-robotica-frontend` · local `~/apps/rbx-robotica-frontend/` | Institutional dark theme, Zurich-coded base (`app/globals.css`, `tailwind.config.ts`) |
| Robson trading runtime | `github.com/ldamasio/robson` · local `~/apps/robson/` | RBX **Voltage System** tokens (`apps/frontend/src/lib/design/tokens.css`), warm-dark, mono+tabular numerals, hairline cards with L-corner signatures |

> Cross-project caveat: the user mentioned `apps/frontend-v2/` and `atelier/RBX Design System/` paths in `~/apps/robson/`. Those folders are **not present** in the public repo tree at `e8d20213239b`; we sourced the equivalent content from `apps/frontend/src/lib/design/tokens.css`, which carries the RBX Voltage System tokens. If a private branch contains v2 / atelier, please re-attach.

---

## Visual identity at a glance

- **Surface ladder** — `obsidian-0 → obsidian-3`, warm graphite (`#0B0C0E → #1A1D22`), never pure black, never navy/slate-blue.
- **Foreground** — warm off-whites, never pure white.
- **Hairlines** — single-pixel borders carry structure. No drop shadows on body chrome; shadows only on overlays.
- **Two accents** — **Cyan** (`#22E5E5`, RBX inheritance) for AI reasoning, focus, links. **Aurum** (`#C9A86A`, cold amber/dim gold) for human-decided moments, override badges, "decision committed" states. Used sparingly.
- **Semantic** — desaturated, never neon: `risk`, `warn`, `ok`, `info`, `uncertain`. They mean _state of the world_, not chrome.
- **Type** — Inter (sans) + JetBrains Mono (status, numerals, eyebrows). Tabular numerals everywhere a number can change.
- **Radii** — 2 / 4 / 8 px max. No pills except status dots.
- **Density** — 4/8 px grid; comfortable but information-dense — this is a war room, not a marketing page.
- **Motion** — short, decelerate, no bounce. 120/160/240 ms.

Full token CSS: [`colors_and_type.css`](./colors_and_type.css).

---

## Content fundamentals

**Voice.** Institutional, deliberative, plain. Strategos talks like a senior staff officer briefing an executive: short declarative sentences, no marketing adjectives, no exclamation marks, no emoji. The product itself is bilingual (the codebase ships with `pt-BR` and `en` JSON dictionaries) — design tokens, component names, and UI strings should remain English; user-visible copy is rendered through `svelte-i18n`/Next i18n.

**Casing.**
- **UPPERCASE + monospaced + tracked** for eyebrows, status, slot labels, audit chips: `PENDING APPROVAL · 02:14`. Borrowed from Robson; a Strategos signature.
- **Sentence case** for headings and body. Title Case is reserved for proper nouns of zones (Strategic Command Center, Risk Landscape, Agent Observatory).
- **Numerals are tabular**, monospaced, with explicit units (`82% conf`, `+2.3%`, `2 min ago`).

**Pronouns & framing.**
- The user is "you" only in micro-copy (empty states, hints). In decision artifacts, _humans are named_ ("CEO", "CFO", "L. Damasio") and _AI is named_ ("Market Analyst Agent · v0.4"). Never "we".
- AI never speaks in first person. AI output is reported, e.g. _"Market Analyst Agent recommends Increase position — 82% confidence."_ never _"I recommend…"_

**Concrete examples.**

| Surface | ❌ Avoid | ✅ Strategos |
|---|---|---|
| Empty state | "Looks like nothing here yet 🎉 Get started!" | `NO PENDING DECISIONS · Last reviewed 14:02 UTC` |
| AI recommendation | "🤖 We think you should increase your position!" | `Market Analyst Agent · Increase position by 10% · 82% conf · 3 factors · 2 limitations` |
| Risk badge | "⚠️ High Risk!!" | `RISK · HIGH · score 9.3 · trending ↓` |
| Confirmation | "Awesome — decision saved!" | `DECISION COMMITTED · audit-id 8f2a · 14:23 UTC by L. Damasio` |
| Error | "Oops, something went wrong 😬" | `OFFLINE · core unreachable · last sync 11:42 UTC · [retry]` |

**No emoji** in product chrome. Status icons come from `lucide-react` (already a dependency); state is conveyed by color + text, not by `🔴/🟢`.

**Numbers carry meaning.** Every metric in the UI must be tied to a decision or a risk; rules in `RULES_OF_DESIGN.md` enforce this.

---

## Visual foundations

### Color

- **Surfaces**: `--obsidian-0 #0B0C0E` (page) → `--obsidian-1 #111317` (raised) → `--obsidian-2 #161A1F` (card) → `--obsidian-3 #1C2026` (hover/nested). Warm graphite, slightly more neutral than Robson's near-black so cyan and aurum don't fight.
- **Foreground**: `--ink-0 #ECEEF1` → `--ink-1 #B6BBC2` → `--ink-2 #7A818A` → `--ink-3 #4A4F57`.
- **Borders**: `--hairline #23272D` (default), `--hairline-strong #353A42` (hover/active), `--hairline-cyan rgba(34,229,229,0.55)` (focus).
- **Cyan family** (AI / focus / brand): `--cyan-signal #00FFFF` (signals only), `--cyan-brand #22E5E5` (links, focus, AI badges), `--cyan-muted #06B6B6`, `--cyan-dim #0B6E6E`, `--cyan-subtle rgba(0,255,255,0.08)`.
- **Aurum family** (human judgment, "decision committed", override): `--aurum-bright #D9B36A`, `--aurum #C9A86A`, `--aurum-dim #8A7440`, `--aurum-subtle rgba(201,168,106,0.10)`. Cold gold, never warm orange.
- **Semantic**: `--risk #C56A6A` / `--warn #D9B55A` / `--ok #7FB77E` / `--info #7A93B0` / `--uncertain #8A7FAE` (a quiet violet specific to Strategos, used for "unknown unknowns" / hypothesis state). Each has a `-subtle` 10–12 % alpha companion.
- **Chart palette**: 5 desaturated tints derived from the surface family, designed not to compete with cyan/aurum.
- **Agent-class accents**: Strategic = cyan-brand · Tactical = cyan-muted · Operational = ink-2 · Observer = ink-3 dashed border.

### Type

- **Inter** 300 / 400 / 500 / 600 — body and headings.
- **JetBrains Mono** 400 / 500 — eyebrows, status, numerals, audit ids, timestamps, code.
- Display heading is **300 weight** (institutional thinness), body is 400, semibold reserved for emphasis. No Google-Fonts trope (no Fraunces, no Roboto). Both fonts are loaded via the same Google Fonts CSS the Robson reference uses; `fonts/` directory is left for the developer to add self-hosted `.woff2` if they wish.
- Type scale (`text-xs 11px → text-5xl 64px`) follows RBX Voltage exactly.
- Every numeric value uses `font-variant-numeric: tabular-nums`.

### Spacing & density

- 4 / 8 px base grid, scale `s-1 4 → s-10 128`.
- Default card padding `s-5 24px`. Compact list items `s-3 12px`. Two density settings overall — _comfortable_ (default) and _dense_ (audit views, decision logs).
- Page gutters 24 px on tablet, 32 px on desktop. Max content width 72 rem (1152 px) for editorial views; war-room canvas is full-bleed.

### Backgrounds

- The base surface is **flat**. There are **no marketing gradients, no orbs, no bokeh, no goo-filter blobs** (the RBX site uses goo gradients for its hero — Strategos does not). The only "texture" is an optional **1 px hairline grid** at `rgba(255,255,255,0.015)` reserved for empty states of the Risk Landscape and Hypothesis Lab. Imagery is rare — when present, it is desaturated, warm-graded.

### Borders, shadows, focus

- Borders are 1 px `--hairline`. Hover lifts to `--hairline-strong`. Focus shows a 2 px `--cyan-brand` ring (`box-shadow`, not `outline`) and is **always visible**.
- Shadows reserved for floating overlays only: `--shadow-overlay 0 8px 24px rgba(0,0,0,0.5)`. Body chrome is shadow-free.
- The **L-corner card signature** from Robson is preserved, but optional and toned down (cyan opacity 0.3 default, 0.6 on hover) — used for "primary" cards (a pending decision, the active session) and never on every card.

### Motion

- Tokens: `--dur-fast 120ms`, `--dur 160ms`, `--dur-slow 240ms`. Eases: `cubic-bezier(0.2, 0, 0, 1)` (in/out), `cubic-bezier(0.16, 1, 0.3, 1)` (out, used for entries). No bounces, no springs, no easing-back.
- Hover = border-color + opacity transitions (no scale beyond 1.005). Press = quick 1.0 → 0.985 scale on buttons, no color flash.
- Loading: a 12-tick mono **TickRuler** (also Robson-borrowed) instead of a spinner — fits the war-room aesthetic.
- Streaming AI reasoning uses a 200 ms-per-line cascade (typewriter is too cute; cascade is institutional).

### Borders & radii

- `--radius-sm 2px` (buttons, badges, inputs), `--radius-md 4px` (cards, panels), `--radius-lg 8px` (modals, top-level containers, the AI Reasoning Panel). Anything larger reads as marketing.
- Status dots are perfect circles (`--radius-pill 999px`) — exception, not rule.

### Transparency & blur

- Used sparingly. The **command-bar overlay** when a critical decision is pending uses `backdrop-filter: blur(8px) + rgba(7,8,10,0.72)`. Modal scrims are opaque. Toasts and chips never blur.

### Card anatomy

```
┌─────────────────────────────────────────┐  ← 1px --hairline, --radius-md
│ EYEBROW · MONO · UPPERCASE              │  ← --ink-2, mono, --track-label
│ Title sentence case                     │  ← --ink-0
│ Body paragraph in --ink-1 …             │
│                                         │
│ ──────────────────  ← optional hairline │
│ MONO STATUS · 82%   [ACTION]            │
└─────────────────────────────────────────┘
   ▝       ▝   ← optional cyan L-corners (primary cards only)
```

---

## Iconography

- **Library: Lucide React** — already a dependency in `strategos-ui` (`lucide-react ^0.484.0`). Strategos uses Lucide exclusively. Stroke 1.5 px, default 16 px (chrome) or 18 px (cards). Color inherits from `currentColor`; never colored fills.
- **Strategos-specific glyph mapping:**
  - Pending decision → `Vote`
  - AI agent → `Bot` (Strategic), `Cog` (Operational), `Eye` (Observer), `Activity` (Tactical)
  - Risk → `AlertTriangle` (active), `ShieldAlert` (acknowledged)
  - Audit / decision-committed → `Stamp` (or fall back to `BadgeCheck`)
  - Hypothesis → `FlaskConical`
  - Timeline → `History`
  - Override (human takes over AI) → `Hand`
  - Confidence indicator → built from primitive bars, not an icon
- **No emoji anywhere**, including loading states, empty states, and error messages.
- **No PNG icons**, no Material Icons, no Font Awesome.
- **Logo / wordmark.** Strategos has no committed brand mark yet (the codebase currently uses the generic Lucide `Users` icon as a placeholder in `sidebar.tsx`). We provide a **placeholder mark** in `assets/strategos-mark.svg` — a hairline obsidian "S" inside a chamfered square, mono-weight, drawn to live next to RBX wordmarks at the same optical weight. **Flag to user**: please supply final mark; until then, the placeholder is used.
- The user provided three reference image files in `strategos-ui` (`ChatGPT Image Mar 28, 2026, 04_*.png`, ~2 MB each) — these appear to be moodboard / direction references and are not bundled here to avoid bloat. They can be re-attached if a particular detail should be lifted into the system.

---

## Index — what's in this folder

```
README.md                  ← you are here
RULES_OF_DESIGN.md         ← the seven hard rules; designers MUST read
SKILL.md                   ← Claude Code-compatible skill manifest
colors_and_type.css        ← all CSS variables — the runtime
implementation_guide.md    ← how to swap into strategos-ui (globals.css + tailwind.config.ts)
fonts/                     ← (empty — Google Fonts CDN; self-host here if needed)
assets/                    ← logos, marks, agent-class glyphs (SVG)
preview/                   ← per-card HTML specimens for the Design System tab
ui_kits/
  strategos-app/           ← high-fidelity React kit
    index.html             ← interactive cockpit + decision + timeline + risk
    *.jsx                  ← components (AppShell, Sidebar, Topbar,
                              DecisionCard, RecommendationCard, AIReasoningPanel,
                              ConfidenceBar, RiskBadge, AgentStatusBadge,
                              AuditTrailItem, TimelineItem, SignalForm,
                              OverrideDialog, GovernanceChip, EmptyState)
```

For the rules of design (no calculated strategy in UI, every metric tied to a decision, etc.) see [`RULES_OF_DESIGN.md`](./RULES_OF_DESIGN.md).
For the implementation cutover (replacing `src/lib/design/strategos.css` and `tailwind.config.ts`) see [`implementation_guide.md`](./implementation_guide.md).
