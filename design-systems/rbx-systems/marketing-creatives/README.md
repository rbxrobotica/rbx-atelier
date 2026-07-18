# RBX Marketing Creatives

Programmatic creative system for the 2026 H2 growth campaign. Templates render from Brand Voltage tokens. Output PNG/SVG at declared dimensions, validated.

Source of truth: `rbx-atelier/brand-voltage/colors_and_type.css` (mirrored in `templates/tokens.css`).
Spec: `rbx-growth/marketing/2026-h2-growth/creative/` (matrix, README, voice rules).

## Structure

```
marketing-creatives/
├── templates/
│   ├── tokens.css          # Brand Voltage tokens (self-contained for rendering)
│   ├── insight-card.html   # 1:1 / 4:5  · eyebrow + headline + body + L-brackets
│   ├── carousel-cover.html # 1:1        · big numeral + headline (carousel cover)
│   └── post-vertical.html  # 9:16 / 4:5 · story: headline + bullets + CTA
├── scripts/
│   ├── render.mjs          # Playwright renderer (token fill + dimension validation)
│   └── variants.json       # sample copy variants per template
├── exports/                # generated PNGs (gitignored output)
└── README.md
```

## Visual rules (mandatory)

- Dark-first (warm-dark, never pure black, never cool-blue).
- Single accent: cyan family (`--cyan-brand` #22E5E5). One accent per surface.
- Geometric, diagram-led, structural. L-corner brackets, hairlines, tick rulers.
- Inter (sans) + JetBrains Mono (mono/metrics).
- No stock office photos. No people smiling. No 3D. No gradients on text.
- No em-dashes. No unicode arrows. No emoji. (Voice rule, enforced in copy.)
- Legible on small screens. Do not overload with text.

## Use

```bash
pnpm install        # or: npm install
npx playwright install chromium

# render one
node scripts/render.mjs --template insight-card --variant b2b-mod-001

# render all variants in scripts/variants.json
pnpm render:all
```

Output: `exports/<template>__<variant>__<WxH>.png` at deviceScaleFactor 2.

## How it works

1. `render.mjs` reads `templates/<name>.html`.
2. Replaces `{{PLACEHOLDER}}` tokens from `scripts/variants.json` (or a variant you pass).
3. Intercepts the `tokens.css` route so the rendered HTML is fully self-contained (no network fonts at screenshot time beyond the Google Fonts import).
4. Sets the declared viewport, waits for fonts, screenshots.
5. Validates the `.stage` element matches the declared dimensions. Fails loudly on mismatch.

## Add a new template

1. Create `templates/<name>.html` using `tokens.css` classes (`eyebrow`, `headline`, `body`, `mono`, `bracket`, `mark`, `hair`, `tick`). Use `{{PLACEHOLDER}}` for variable copy.
2. Declare its viewports in `VIEWPORTS` in `scripts/render.mjs`.
3. Add variants to `scripts/variants.json` under the template key.
4. Run `node scripts/render.mjs --template <name> --variant <v>`.

## Add a new format

Extend the template's `VIEWPORTS` entry with `{ w, h, tag }`. Required campaign formats: 1:1 (1080x1080), 4:5 (1080x1350), 9:16 (1080x1920), 1.91:1 (1200x628).

## Templates to add next (per creative-matrix.csv)

- quote-card (1:1), technical-insight-card (1:1), case-study-card (1:1), institutional-ad (1.91:1), product-ad (4:5), og-image (1200x630), video-thumbnail (16:9). Each follows the same pattern.

## Governance

- **Publication boundary:** approved creatives are published only via
  `rbx-creatives-assets` (private repo; ADR-0602 governed flow → Contabo
  `rbx-creatives` bucket). Renders in `exports/` are candidates, never finals.
- **This repo is public:** keep real pre-launch campaign copy OUT of
  `scripts/variants.json` — use placeholder/sample copy only; real copy lives
  in `rbx-growth` and is injected at render time.
- Copy in variants must pass claim/brand/compliance evals (rbx-growth automation/). No publish without approval.
- Robson/Briefing creatives require the financial-content policy gate (disclaimer, no promise).
- See `rbx-growth/marketing/2026-h2-growth/governance/release-checklist.md`.
