---
id: eden-adr-0005
domain: governance
entity_type: adr
created_at: 2026-05-19T00:00:00Z
updated_at: 2026-05-19T00:00:00Z
author: "@architecture-planning-session"
owner: "rbx-eden-system-creator"
status: accepted
tags: [eden, design-system, voltage, brand]
related: [eden-adr-0009]
source_system: rbx-eden-system-creator
retention_class: permanent
---

# ADR-0005: Design System and Voltage Alignment

**Status:** Accepted (operational decision for this repository's product surface).

**Date:** 2026-05-19

## Context

The Claude Design Éden System Creator design system exists in `atelier/Éden System Creator Design System/`, built on the accepted RBX Voltage brand system. It is comprehensive: tokens, editorial rules, iconography, and a full product UI kit (Dashboard, SystemView, CreateMission, AgentCouncil, ArtifactReview, Governance, SystemMap).

## Decision

The Éden product uses this design system as canonical. No redesign from scratch. Components are lifted from `ui_kits/eden/`, not reinvented. Editorial rules (no em-dashes, no arrows, no emoji, no marketing verbs, institutional voice, bilingual with mandatory Portuguese diacritics) are binding for product surfaces and for artifact output. This planning package itself follows them. The design system applies to Éden product surfaces only; the deferred Governance Console module, when built in Strategos, uses the Strategos design system. Both align to the RBX Voltage brand; neither extends the other across the product boundary.

## Consequences

Positive: immediate, consistent, institutional surface; no design debt. Negative: contributors must learn the editorial discipline. Risk: drift toward generic AI aesthetics; mitigated by the design system "What to avoid" section being binding.

## Status rationale

Operational decision about this product's own surface; Accepted now.
