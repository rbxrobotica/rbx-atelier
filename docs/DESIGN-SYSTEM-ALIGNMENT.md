# Design System Alignment

**Status:** Recommended. Pairs with `docs/adr/ADR-0005`.
**Canonical design source:** `atelier/Éden System Creator Design System/README.md` and the files it indexes.

---

## 1. Canonical source

The Éden product visual and editorial language is defined by the Claude Design artifacts already present in this repository at:

`atelier/Éden System Creator Design System/README.md`

with `SKILL.md`, `colors_and_type.css`, `assets/`, `preview/`, and `ui_kits/eden/`. This is canonical for Éden product vocabulary and visual direction. It is built on the accepted RBX Voltage brand system and must not be redesigned from scratch.

## 2. What to extract and apply

- **Visual principles:** dark-first only (no light surfaces in production), warm-dark background tiers, single Voltage cyan accent, hairline structure as the primary structural device, small radii (2, 4, 8 px), rings not shadows, near-absent motion, control room over canvas.
- **Product vocabulary:** the canonical verbs and nouns (Create mission, Convene council, Attach context, Review decision, Approve execution, Escalate risk, Trace decision, Validate readiness, Promote to production; Mission, System, Council, Context vault, Decision trace, Artifact, Readiness score, Risk register, Policy). These are the same terms used throughout this planning package, by design.
- **Component vocabulary:** Sidebar, Topbar, StatusPip, Badge, Button, Field, Card, AgentCard, MissionCard, DecisionCard, ArtifactCard, CouncilSplit, DenseTable, StatusRail, ApprovalPanel, Timeline, CommandPalette. Lift from `ui_kits/eden/`; do not invent equivalents.
- **Governance screens:** `ui_kits/eden/Governance.jsx` already defines the Governance and Audit surface. The per-mission governance visibility in this package maps to that screen.
- **Mission screens:** Dashboard, SystemView, CreateMission, AgentCouncil, ArtifactReview, SystemMap exist in the kit and map directly to the mission lifecycle in `docs/agents/AGENTIC-ORCHESTRATION-MODEL.md`.
- **Agent council model:** structured contribution slots with a hard 60/40 split, never a chat box, never avatar personas. Agents are roles with a 4 px left rail color, not characters.
- **Artifact review model:** the ArtifactReview screen, durable artifact on the right, deliberation on the left.
- **System map concepts:** the SystemMap screen for cross-system dependency visualization, which aligns with the boundary and capability ownership model.

## 3. What to avoid

Bubble chat UI for the council, gradients on text or hero, purple AI accents, neon glow beyond the single live-pulse pip, drag-and-drop builders or canvas tools, marketing illustrations or 3D or isometric art, cartoon agent personas, long-form chat composers, soft pastel pill statuses, excessive radii or shadow, marketing copy, emoji anywhere. These are enumerated in the design system "What to avoid" section and are binding.

## 4. Editorial rules applied to this package

This planning package follows the same editorial rules as the product: no em-dashes, no arrows, no emoji, no marketing verbs, active voice, mono for metrics. This is deliberate. The documentation an agent reads should model the voice the agent must produce.

## 5. Implications for the Governance Console

The Éden Voltage design system applies to Éden product surfaces, including the per-mission Governance and Audit screen. It does not automatically extend to the deferred Governance Console. When a Governance Console module is built in Strategos (per the extraction criteria), it uses the Strategos design system, because it is an institutional Strategos surface for a different audience. The two systems share the RBX Voltage brand lineage but are not the same product skin. A stricter institutional variant is not required for Éden itself; Éden is already institutional by construction. The recommendation: do not extend the Éden design system across product boundaries; align both to the RBX Voltage brand, skin each product in its own system.

## 6. Adoption sequence

Design system adoption is `PACK-002` in `docs/implementation/AGENT-EXECUTION-PACKS.md`: convert the design tokens and the `ui_kits/eden/` components into a usable local frontend foundation without committing to backend architecture prematurely. Tokens and components first, screens second, wiring last.
