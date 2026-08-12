# RBX Voice System (Zurich-coded writing)

**Version:** 0.1
**Date:** 2026-08-12
**Status:** Approved direction
**Source of truth:** This file (`rbx-atelier/brand-voice/rbx-voice-system.md`).
**Companion:** `brand-voltage/` in this repository (visual identity). Voltage defines how RBX looks; Voice defines how RBX sounds.
**Agent wiring:** skill `rbx-voice-system` in the RBX agent operating layer repository, referenced from its operating rules.
**Precedence:** safety, truthfulness, evidence, legal and compliance text, and repository technical conventions override voice rules. Voice never changes meaning, never removes stated uncertainty, and never invents certainty. Product design systems in this repository may define semantic glyph exceptions for data displays; those rules win inside their product surfaces.

---

## Summary

One writing system for RBX Systems and all products (Robson, TruthMetal, Strategos, Briefing BTC, agents, docs, marketing). Modeled on the Swiss institutional register ("zurich-coded"): fact-first, enumerated, one superlative per piece, governance visible, restraint as authority.

Scope model, borrowed from design systems:

- **Principles are universal.** They apply to every word RBX publishes or an RBX agent emits: marketing, docs, UI copy, briefings, commit messages, reports.
- **Ornaments are register-specific.** The aphorism, the superlative, the CTA, and the legal footer are components. Each register declares which components it may use.

A doc page never gets an aphorism. A LinkedIn post never gets two CTAs. The grammar underneath is identical.

---

## Principles (apply everywhere)

1. **Fact before emotion.** Events, features, and failures are stated in the indicative, without evaluative adjectives that lack evidence, and without defense. Hard news is registered, not explained away.
2. **Confidence lives in grammar, not vocabulary.** No "we believe", "we strive", "buscamos", "acreditamos". Declare or omit.
3. **Enumerate, do not narrate.** Visible structure is the argument: named layers, numbered lists, taxonomies. Order signals competence.
4. **Scarcity of emphasis.** At most one superlative per piece, phrased as if auditable. Zero exclamation marks. Energy concentrated in exactly one point.
5. **Governance is the signature.** External pieces end in compliance, registry, or legal reference, not in marketing.
6. **Poetic containment.** At most one aphorism per piece: short, the final editorial sentence (before the CTA and the governance footer), about the collective or a principle, never self-praise. Component order in external pieces: body, optional aphorism, CTA, governance footer.
7. **The bans define the style.** What the system forbids matters as much as what it prescribes.

---

## Voice tokens (constants)

Tokens are defaults per register, not absolutes; the stated exceptions are part of the token.

| Token | Value |
|-------|-------|
| Tense | Present indicative by default; past for completed events; imperative for UI controls |
| Person | Institutional "we" (brand), impersonal (docs and agent deliveries); product persona rules override (Strategos AI never speaks in first person) |
| Exclamation marks | 0 |
| Question marks | External copy: max 1 per piece, only as conversion CTA. UI confirmation prompts and internal docs exempt |
| Superlative budget | 1 per piece, auditable phrasing; 0 in docs, UI, agent outputs |
| Aphorism budget | Max 1 per piece, final editorial sentence before CTA and footer; institutional and marketing only |
| CTA budget | Max 1 per piece |
| Em-dashes | Forbidden in prose (org policy). Data displays governed by a product design system are exempt (Strategos unavailable-value em dash) |
| Arrow glyphs | Forbidden in prose, UI labels, reports (org policy). Semantic data glyphs in product tables (Robson) and diagrams are exempt |
| Emoji | Forbidden in external copy; tolerated only in internal chat |
| Numbers | Exact. Never "several", "many", "vários", "diversos" when a number exists |
| Hedging | Forbidden as tone ("should work", "deve funcionar"). Uncertainty is stated as fact with its verification path |

### Banned vocabulary (external copy)

revolutionary, disruptive, game-changing, cutting-edge, seamless, powerful, supercharge, unlock, 10x, world-class (unless it is the audited superlative of the piece), revolucionário, disruptivo, poderoso, "sem esforço".

---

## Registers (components per context)

Select the register by DESTINATION (R1..R5, R7). R6 is not a destination: it is an overlay for agent-authored text. The overlay adds duties without changing the destination's grammar (tense and person always follow the destination register): outcome stated first where the destination is prose, failures declared as fact with evidence, no hedging tone, and provenance (project and first-party model, per the journal policy) recorded in the delivery metadata, not forced into the text. A pull request body written by an agent is R7 with the R6 overlay; a landing page drafted by an agent is R2 with the R6 overlay; UI microcopy stays imperative R3 even when an agent writes it.

| Register | Applies to | Components allowed |
|----------|-----------|--------------------|
| R1 Institutional | site about, LinkedIn page, press releases, company profiles | Full system: superlative, taxonomy, aphorism, 1 CTA, legal footer |
| R2 Marketing | posts, ads, landing copy, creative text (SVG-as-Code) | Principles + 1 CTA; aphorism optional; legal footer when a claim is made; superlative budget 1 |
| R3 Product UI | microcopy, buttons, empty states, errors | Fact + imperative verbs; no superlative, no aphorism, no CTA rhetoric; errors state cause and next action |
| R4 Documentation | READMEs, runbooks, ADRs, guides | Impersonal, enumerated, exact; zero marketing vocabulary; zero superlatives |
| R5 Briefings and reports | Briefing BTC, exec reports, portal | Facts numbered, one thesis per edition, uncertainty quantified, sources named |
| R6 Agent overlay | any text an RBX agent authors, on top of its destination register | Outcome first in prose destinations; failures declared as fact with evidence; no hedging tone; grammar follows the destination; provenance (project, model) in delivery metadata per journal policy |
| R7 Internal | commits, issues, chat | Principles only; format follows repo conventions |

### Register examples

**R1 Institutional (illustrative structure, not publishable as-is):** every claim below must pass the review checklist against real evidence, the `[link]` must resolve, and the legal page must be live before external use.

> RBX Systems opera sistemas autônomos de negociação e infraestrutura soberana de execução. Operamos através de três camadas: Execução (Robson), Governança (Thalamus) e Distribuição (Merovelis). Cada decisão de capital é registrada e auditável.
>
> Sistemas confiáveis não nascem de pressa. Nascem de invariantes.
>
> Conheça o Briefing BTC: [link]
>
> RBX Systems opera sob política de acesso governado. rbxsystems.ch/legal

**R3 Product UI:**

- Bad: "Oops! Algo deu errado :("
- Good: "Falha ao carregar posições. A API não respondeu em 5s. Tentar novamente."

**R4 Documentation:**

- Bad: "This powerful script makes deployment effortless."
- Good: "This script deploys the service to k3s. It runs three steps: build, push, apply."

**R6 overlay on R7 (pull request body; provenance recorded in the delivery metadata):**

- Bad: "I made some improvements and everything should work now!"
- Good: "Deploy concluído. 3 arquivos alterados, 12 testes passam, smoke test em prod retorna 200."

---

## Anti-patterns

1. Exclamation anywhere in external copy.
2. Two or more CTAs in one piece.
3. Adjectives doing the work of evidence ("robust", "reliable" without a number or mechanism).
4. Apologetic or defensive framing of bad news. State the event, the impact, the correction.
5. Aphorism inflation: more than one, or placed at the opening, or about the firm instead of a principle.
6. Buzzword salad from the banned list.
7. Humor as filler in external copy.
8. Vague quantities where an exact number exists.

---

## Enforcement (how this stays policy)

1. **Mechanical lint** before publishing any external piece:
   ```bash
   grep -nE '—|→|←|↑|↓|▼|⇒|▲|↔|⇄|➜|⟶|»|!' <file>
   grep -nP '[\x{1F000}-\x{1FAFF}\x{2190}-\x{21FF}\x{2600}-\x{27BF}\x{2B00}-\x{2BFF}]' <file>
   grep -niE 'revolutionar|revolucion|disrupt|game[- ]chang|cutting[- ]edge|seamless|powerful|supercharge|unlock|10x|world[- ]class|effortless|poderoso|sem esforço' <file>
   ```
   The second grep needs GNU grep (`-P`) and sweeps emoji plus the Unicode arrow blocks. The greps cover glyphs and banned vocabulary only. Hits inside quoted bad examples and regex literals are expected; judge hits in real copy. Superlative, CTA, aphorism, and question budgets are semantic checks done by reading. A versioned Markdown-aware linter with fixtures is the v0.2 roadmap item; until it exists, enforcement is grep plus checklist.
2. **Review checklist** (5 items): one superlative max; ends in governance (R1/R2); zero exclamation; one CTA max; every claim has a number or mechanism.
3. **Agent wiring:** skill `rbx-voice-system` in the agent operating layer repository, loaded by any agent producing external copy, docs, or reports; referenced by the marketing content production workflow.
4. **CI (optional, later):** run the lint grep on frontend content and marketing repos.

---

## Open gaps

- The R1 governance footer depends on the `/legal` page being live on rbxsystems.ch; tracked in `rbx-systems-frontend` PR #69.

---

## Test

Before publishing, apply the test: would a Zurich private bank have signed the piece. If it sounds excited, it fails. If every sentence is either evidenced or names its verification path, it passes.
