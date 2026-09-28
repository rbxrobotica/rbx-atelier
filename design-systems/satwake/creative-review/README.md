# Satwake creative batch and local review

This is a deterministic, local candidate generator and browser review gallery. It reads a versioned JSON brief, creates message × visual variants, adapts each to declared formats, validates PNGs, records human decisions, and exports only exact approved versions. It does not call an AI provider, publish ads, or authorize spending.

The engine lives with the Satwake design system because it uses the canonical tokens, CSS, and lockup in `design-systems/satwake/`. The private H1 example brief lives in `rbx-growth/marketing/2026-h2-growth/creatives/satwake/satwake-h1-batch-brief-v1.json`; this public repository contains only the engine and contract. The existing RBX Systems renderer remains in `design-systems/rbx-systems/marketing-creatives/` for that separate visual identity. Both use Playwright; the Satwake layouts use Satwake tokens and locally bundled fonts.

## Setup and commands

Requires Node.js 22+, pnpm, and Playwright Chromium. From this directory:

```bash
pnpm install --frozen-lockfile
pnpm exec playwright install chromium

BRIEF=/absolute/path/to/rbx-growth/marketing/2026-h2-growth/creatives/satwake/satwake-h1-batch-brief-v1.json
node scripts/creative.mjs generate --brief "$BRIEF"
# The command prints the absolute batch directory. Use that path below.
BATCH=/absolute/path/to/creative-review/output/<batch-id>
node scripts/creative.mjs verify --batch "$BATCH"
node scripts/creative.mjs serve --batch "$BATCH" --port 4179
# Open http://127.0.0.1:4179/; select pieces, enter reviewer name, decide.
node scripts/creative.mjs export --batch "$BATCH" --out /absolute/path/to/export
```

To resume after interruption, run the same `generate` command with `--resume`. It skips complete, valid files and rebuilds missing files. A file left after a screenshot rename but before its manifest checkpoint is rebuilt on explicit resume. It refuses altered existing files and refuses an existing export directory. The batch ID changes when the brief, cited source contents, brand files, renderer, or core engine changes. Outputs are local and gitignored.

## Brief contract

`brief.schema.json` describes version 1. Required fields are campaign ID/version/hypothesis, audience, objective, offer, HTTPS destination, formats (`1x1`, `4x5`, `9x16`), maximum message × visual variants, cited source files, authorized facts, editorial constraints, identity version, attribution convention, and concepts. A concept has a hypothesis, fact IDs, message variants, and visual treatments. Each message and visual combination requires a unique `utmContent`; for multiple visual treatments set `utmContentByVisual` on the message. Format adaptations share that content ID and the same hypothesis. Maximum variants counts combinations before format adaptation.

The input validator enforces the Satwake Meta candidate naming pattern from the Growth UTM taxonomy, the exact financial disclaimer in primary text, and basic banned copy. Generated URLs contain one each of `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term`. Platform ad IDs are `null` until assigned by a platform; no Meta or Google IDs are invented.

## Manifest, decisions, and export

`manifest.json` stores brief/source hashes, brand and engine fingerprints, concept/variant/file IDs, copy, layout, facts, attribution, destination, real PNG dimensions, device scale factor, PNG SHA-256, and render checks. Rendering uses `deviceScaleFactor: 1` and checks actual PNG dimensions against viewport × device scale factor. Font files are bundled via Fontsource into each render so loading is deterministic and network independent.

`decisions.ndjson` is append-only. Every decision records reviewer, time, piece ID, exact review hash, and PNG hash. The active decision is valid only while copy, destination, attribution, file metadata, and actual PNG hash still match. Edits preserve old events but show the piece as changed. Copy edits also fail the stored render-input check until rerendered as a new batch. Approval requires all automatic checks to pass. Batch actions apply only to explicitly selected pieces; adjustment requests require a comment. The local server binds to `127.0.0.1` and has no user authentication. Keep it local.

An export is refused when there are no currently approved and valid pieces. Otherwise it contains only approved PNGs and `approved-manifest.json` with full copy, tracked URL, hashes, IDs, and decision records. Export is a handoff package, not a publication receipt.

| Automatic checks | Human review still required |
| --- | --- |
| Brief shape, source availability, UTM syntax, disclaimer, basic prohibited copy | Claim accuracy, tone, legal and Meta policy eligibility |
| Actual PNG dimensions/hash, embedded font loading, DOM text bounds and overlap, token background | Visual readability on target devices and overall brand judgment |
| Exact approval fingerprint and export membership | Destination reachability, sample/editorial approval, analytics and account readiness |

The rendered text-bound checks detect DOM overflow and element collisions but cannot prove every glyph is legible or that the message is compliant. The Satwake design tokens are still an owner-review proposal. The campaign destination is a candidate and has not been verified as publicly reachable. `rbx-creatives-assets` remains the governed registry and manual publication path under ADR-0602; this workflow does not sync to it or to Meta/Google.

## Verification

```bash
pnpm test
```

The integration tests generate real PNGs, exercise the local decision API and restart persistence, verify batch isolation, reject malformed briefs, invalidate decisions after URL/copy/PNG changes, export only approved files, and recover interrupted rendering. They use temporary fixtures and never approve the private H1 candidates.
