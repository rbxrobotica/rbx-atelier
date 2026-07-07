# Rules of Design — Strategos

These rules are the Design System's hard constraints. Break them and the system breaks character. Designers and contributing engineers should review them before opening any PR that touches the UI.

## The Seven Rules

### 1. No strategic logic in the UI
Recommendations, risk scores, confidence numbers, override consequences — none of it is computed in the UI. The UI is a view layer. If a value is not in the response from `strategos-core`, **render `—` (em-dash) in `--ink-3`**, never a fallback estimate.

### 2. Every AI recommendation shows confidence, factors, limitations, alternatives
A `RecommendationCard` is invalid (and TypeScript-rejected) if any of the four are missing. Confidence is shown as a 5-segment bar AND a tabular percentage. Factors are listed (top 3 max in default view). Limitations are explicit ("data 2 h old", "assumes no black swan"). At least one alternative is named, even if it is "Hold position".

### 3. Every critical human action produces an auditable artifact
Approve, Override, Defer, Inject Signal, Commit Plan all generate an `AuditEvent` (see `strategos-core` proto). The UI captures the actor, the timestamp, the rationale field (free text, required for overrides), and the linked decision/risk/hypothesis ID. The artifact appears in Timeline & Decision History within one tick.

### 4. Every alert color must mean an action
Red, amber, violet (uncertain) only appear if a human can do something. A risk that is "monitored" is `--info`, not `--warn`. A score that is "informational" gets `--ink-1`, not `--cyan`. **No decorative reds.**

### 5. Metric without a decision = noise (cut it)
If a number cannot be linked to a pending decision, an active risk, or an audit obligation, it does not belong on the screen. The Command Center shows 5–7 KPIs maximum. The Risk Landscape shows 3–5 critical risks; a "show all" reveals the rest.

### 6. Cyan is for AI, Aurum is for humans, Semantic is for the world
- **Cyan** (`--cyan-brand` and family) — AI recommendations, focus rings, links, brand chrome.
- **Aurum** (`--aurum` and family) — human-decided artifacts, "decision committed", override badges, signed audit items.
- **Semantic** (`--risk`/`--warn`/`--ok`/`--info`/`--uncertain`) — describing the state of the world (a risk's severity, an agent's health, a hypothesis's epistemic status).
Never blend the families. A red AI badge is wrong; a red audit "committed" stamp is wrong; an aurum "high risk" badge is wrong.

### 7. No dashboard tropes
- No emoji icons in chrome.
- No marketing gradients, orbs, bokeh, glassmorphism on body chrome.
- No drop shadows on cards (overlays only).
- No left-border-only accent cards (we use full hairlines + L-corners).
- No bouncing/springy motion.
- No sparkles, no confetti, no celebratory toasts. Decisions are serious.

---

## Component-level corollaries

- **DecisionCard** must show: title, status chip, AI confidence %, divergence indicator (↕) if human chose differently, decision-maker name + timestamp once committed.
- **AIReasoningPanel** must list factors and limitations as separate sections; never merge.
- **OverrideDialog** requires a non-empty rationale field before "Commit override" enables.
- **AuditTrailItem** is monospaced, timestamped to the second in UTC, and shows actor + action + target ID.
- **RiskBadge** never shows a probability without an impact, and never shows criticality without a trend arrow.
- **EmptyState** uses mono uppercase, `--ink-3`, no illustration.

---

## Question to ask before shipping any change

> _Does this support deliberation, or just monitoring?_

If only monitoring — cut it, hide it behind "show details", or give it back to the agent observatory.
