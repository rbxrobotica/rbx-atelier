# RBX Voice System (Zurich-coded writing)

**Version:** 0.1
**Date:** 2026-08-12
**Status:** Approved direction
**Source of truth:** This file (`rbx-atelier/brand-voice/rbx-voice-system.md`). A pointer mirror exists at `~/docs/rbx-voice-system.md` on the operator workstation.
**Companion:** `brand-voltage/` in this repository (visual identity). Voltage defines how RBX looks; Voice defines how RBX sounds.
**Agent wiring:** skill `rbx-voice-system` in `rbxrobotica/rbx-agent-layer` (`.agents/skills/rbx-voice-system/SKILL.md`), referenced from `rbx-agent-operating-rules.md` §8.

---

## Summary

One writing system for RBX Systems and all products (Robson, TruthMetal, Strategos, Briefing BTC, agents, docs, marketing). Modeled on the Swiss institutional register ("zurich-coded"): fact-first, enumerated, one superlative per piece, governance visible, restraint as authority.

Scope model, borrowed from design systems:

- **Principles are universal.** They apply to every word RBX publishes or an RBX agent emits: marketing, docs, UI copy, briefings, commit messages, reports.
- **Ornaments are register-specific.** The aphorism, the superlative, the CTA, and the legal footer are components. Each register declares which components it may use.

A doc page never gets an aphorism. A LinkedIn post never gets two CTAs. The grammar underneath is identical.

---

## Principles (apply everywhere)

1. **Fact before emotion.** Events, features, and failures are stated in the present indicative, without adjectives and without defense. Hard news is registered, not explained away.
2. **Confidence lives in grammar, not vocabulary.** No "we believe", "we strive", "buscamos", "acreditamos". Declare or omit.
3. **Enumerate, do not narrate.** Visible structure is the argument: named layers, numbered lists, taxonomies. Order signals competence.
4. **Scarcity of emphasis.** At most one superlative per piece, phrased as if auditable. Zero exclamation marks. Energy concentrated in exactly one point.
5. **Governance is the signature.** External pieces end in compliance, registry, or legal reference, not in marketing.
6. **Poetic containment.** At most one aphorism per piece: short, final position, about the collective or a principle, never self-praise.
7. **The bans define the style.** What the system forbids matters as much as what it prescribes.

---

## Voice tokens (constants)

| Token | Value |
|-------|-------|
| Tense | Present indicative |
| Person | Institutional "we" (brand), impersonal (docs), first person direct (agent reports) |
| Exclamation marks | 0 |
| Question marks | Max 1 per piece, only as CTA |
| Superlative budget | 1 per piece, auditable phrasing; 0 in docs, UI, agent outputs |
| Aphorism budget | Max 1 per piece, final position; institutional and marketing only |
| CTA budget | Max 1 per piece |
| Em-dashes | Forbidden (org policy, operating rules §8) |
| Arrow glyphs | Forbidden in copy, UI, reports (org policy, operating rules §8) |
| Emoji | Forbidden in external copy; tolerated only in internal chat |
| Numbers | Exact. Never "several", "many", "vários", "diversos" when a number exists |
| Hedging | Forbidden as tone ("should work", "deve funcionar"). Uncertainty is stated as fact with its verification path |

### Banned vocabulary (external copy)

revolutionary, disruptive, game-changing, cutting-edge, seamless, powerful, supercharge, unlock, 10x, world-class (unless it is the audited superlative of the piece), revolucionário, disruptivo, poderoso, "sem esforço".

---

## Registers (components per context)

| Register | Applies to | Components allowed |
|----------|-----------|--------------------|
| R1 Institutional | site about, LinkedIn page, PR, company profiles | Full system: superlative, taxonomy, aphorism, 1 CTA, legal footer |
| R2 Marketing | posts, ads, landing copy, creative text (SVG-as-Code) | Principles + 1 CTA; aphorism optional; legal footer when a claim is made; superlative budget 1 |
| R3 Product UI | microcopy, buttons, empty states, errors | Fact + imperative verbs; no superlative, no aphorism, no CTA rhetoric; errors state cause and next action |
| R4 Documentation | READMEs, runbooks, ADRs, guides | Impersonal, enumerated, exact; zero marketing vocabulary; zero superlatives |
| R5 Briefings and reports | Briefing BTC, exec reports, portal | Facts numbered, one thesis per edition, uncertainty quantified, sources named |
| R6 Agent outputs | reports, PR descriptions, summaries any RBX agent emits | Outcome first, indicative, no hedging tone; failures declared as fact with evidence; project and model named (journal policy) |
| R7 Internal | commits, issues, chat | Principles only; format follows repo conventions |

### Register examples

**R1 Institutional (reference boilerplate):**

> RBX Systems opera sistemas autônomos de negociação e infraestrutura soberana de execução. Operamos através de três camadas: Execução (Robson), Governança (Thalamus) e Distribuição (Merovelis). Cada decisão de capital é registrada, auditável e reversível.
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

**R6 Agent output:**

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
   grep -nE '—|→|←|↑|↓|▼|!' <file>
   grep -niE 'revolucionar|disrupt|seamless|game.chang|cutting.edge|effortless|supercharge|poderoso' <file>
   ```
2. **Review checklist** (5 items): one superlative max; ends in governance (R1/R2); zero exclamation; one CTA max; every claim has a number or mechanism.
3. **Agent wiring:** skill `rbx-voice-system` in `rbx-agent-layer`, loaded by any agent producing external copy, docs, or reports; referenced by the `rbx-marketing-content-production` workflow.
4. **CI (optional, later):** run the lint grep on frontend content and marketing repos.

---

## Open gaps

- `rbxsystems.ch/legal` returned 404 on 2026-08-12. A `/legal` route PR is open in `rbx-systems-frontend`; the page content carries an operator placeholder for the registered legal entity data before external use of the R1 footer.

---

## Test

Before publishing, read the piece and ask: could a Zurich private bank have signed this? If it sounds excited, it fails. If it sounds certain, it passes.
