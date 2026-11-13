# RBX Systems — Design System

> Institutional. Zurich-coded. Dark-first. Engineered, not decorated.

RBX Systems develops software and AI systems for financial and high-reliability environments: trading engines, decision platforms, and data validation systems. This design system encodes the visual and editorial language used across the marketing site, product surfaces, and institutional materials.

**Principles**
- Structural, not decorative. Every element serves a purpose.
- Interfaces reflect system state. Clarity > ornament.
- Restrained color. High signal-to-noise ratio.
- Typography carries hierarchy.
- Calm, precise, dependable. Not playful, not aggressive.

---

## Sources

- **Codebase:** `rbxrobotica/rbx-robotica-frontend` (Next.js 14 + Tailwind + shadcn/ui). Key files read:
  - `app/globals.css`, `tailwind.config.ts` — Tailwind/shadcn token layer
  - `app/atelier/AtelierContent.tsx` — the most Zurich-coded surface, most-aligned reference
  - `app/page/views/{main,about,header,footer}` — marketing surfaces
  - `app/data/products/productsData.ts` — product catalog + phase taxonomy
  - `docs/WRITING-STYLE.md`, `.claude/…/feedback_zurich_coded.md` — editorial direction
  - `blog-posts/*.mdx` — tone reference
- **Assets:** `public/bitmap_bg.svg` (hero graphic), `public/diamond-sunset.svg`, `public/polka-dots.svg` (section patterns), copied into `assets/`. The logo first copied from `public/bitmap.svg` is retired and sits in `assets/archive/`.

### Alignment of 2026-11-11

The RBX mark changed on 2026-11-08 and the site header was rebuilt. The site is now `rbxrobotica/rbx-systems-frontend` (SvelteKit). This kit follows it in three places, read from `src/lib/design/components/{Logo,NavBar,Breadcrumb}.svelte` and `src/lib/design/tokens.css`:

- **Mark and lockup.** `assets/merovelis-mark.svg`, `RbxMark`, `RbxLogo`. Rules in `brand-voltage/BRAND-MARK.md`.
- **Header.** `TopNav` is three rows, opaque, not sticky. See Layout rules.
- **Breadcrumb.** New `Breadcrumb` component. See Layout rules.

Sizes in the kit are the nominal token values on a 16px root. The site runs on a 15px root, so what it sets in rem computes 6.25% smaller there: the header is 1200px wide at most instead of 1280px, the gaps are 22.5px and 30px instead of 24px and 32px, primary text is 14.06px instead of 15px, band text 13.13px instead of 14px, and the gap of the lockup 11.25px instead of 12px. The row heights and the sizes of the lockup are in px and are the same in both.

Not changed: the palette. This kit still carries the brass accent and the cool-neutral surfaces of the previous site, while the live site runs on the Brand Voltage tokens (`brand-voltage/colors_and_type.css`: warm-dark surfaces, one cyan accent). The mark, the header and the breadcrumb take the brand cyan through the `--rbx-brand` tokens; everything else in the kit is as it was.

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This file — foundations, content, visuals, iconography |
| `SKILL.md` | Skill manifest for Claude Code / Agent Skills |
| `colors_and_type.css` | Design tokens — colors, type, spacing, radii, shadows, motion |
| `assets/` | The mark, patterns, hero graphics |
| `preview/` | Rendered cards (typography, color, components, spacing, brand) |
| `ui_kits/marketing/` | Marketing site UI kit (header, breadcrumb, hero, about, products, footer) |
| `ui_kits/header/` | The header and the breadcrumb on their own, on a page that follows the window width |
| `ui_kits/atelier/` | RBX Atelier surface — the most Zurich-coded reference |
| `ui_kits/product/` | Product / operations UI kit (TruthMetal-style control plane) |

---

## Content Fundamentals

The RBX voice is **institutional, engineering-led, Zurich-coded**. It reads like a Swiss B2B systems firm: sober, structural, precise. It explicitly rejects agency speak.

**Persona.** Write as *"RBX Systems"* or *"the RBX engineering team"* — never as a faceless brand, never as a single individual. Use first-person plural sparingly; prefer declarative system statements.

**Tone tests.** Before shipping a sentence, ask: *Does this sound like it could come from a Swiss engineering firm?* If not, rewrite.

- Less adjective, more architecture.
- Less creativity, more precision.
- Less marketing, more system.
- Less agency, more engineering.

**Casing.** Sentence case for body and buttons. Title Case for headings only when scanning structure matters. **UPPERCASE + `0.14em` tracking** for eyebrows, labels, and section markers (e.g. `POSITIONING`, `CAPABILITIES`, `WHAT WE DO`). State labels are ALL-CAPS mono (`SUBMITTED`, `CANONICAL`, `REJECTED`).

**"We" vs "You".** Prefer neutral declaratives about the system over second-person calls-to-action. *"Parameters move through four states"* beats *"You can track your parameters…"*. Use *"you"* only in direct instructions (forms, CTAs).

**Editorial rules (mandatory).**
- **No em-dashes (—).** Use periods or commas.
- **No arrows (→, ↓, ⇒).** Use prose or bullets.
- **No filler.** Drop *essentially*, *basically*, *actually*.
- Active voice, short sentences, trust the reader.
- **No emoji.** Not in UI, not in marketing, not in blog.
- **No sensitive infra.** No IPs, hostnames, credentials.

**Good examples (from the corpus).**
- *"Systems engineering for operations that demand control."* (hero)
- *"We treat software as operational infrastructure. Every system we deliver is designed to be maintained, observed and evolved safely over years, not just to work on deployment day."* (positioning)
- *"A parameter moves through four states: SUBMITTED, VALIDATING, CONSENSUS_PENDING, and CANONICAL. If consensus fails, it becomes REJECTED."* (technical)
- *"We work with a limited number of projects per cycle."* (atelier CTA)

**Anti-patterns (rewrite on sight).**
- *"Transformamos ideias em realidade"* / *"soluções inovadoras"* / *"presença digital"*
- *"Essentially provides a way to manage…"* → *"Manages…"*
- *"Unlock the power of AI"* — never.

**Numerals.** Spell out zero to nine in prose; use digits for 10+ and for all metrics, counts, states, and timings. Metrics use the mono face (`99.97%`, `p99: 48ms`).

**Bilingualism.** Site is bilingual (en / pt-BR). English default on `rbxsystems.ch`, Portuguese default on `rbx.ia.br`. Portuguese uses full UTF-8 diacritics — never ASCII approximations.

---

## Visual Foundations

### Color

The system is **dark-first**. Light mode exists in the codebase but is de-prioritized — institutional surfaces run dark.

**Surfaces (dark scale).** Near-black, cool-neutral, narrow step.
`#050507` page → `#0A0A0B` primary → `#0F1012` raised → `#15161A` card → `#1D1D22` footer → `#26272C` hairline → `#33343A` strong divider.

**Foreground.** Warm off-whites.
`#F5F5F3` primary text → `#B4B5B8` secondary → `#72747A` labels/captions → `#45474D` disabled.

**Accents.** Restrained and rare.
- `#D9CBA3` (warm metallic / brass-bone) — the preferred institutional accent for emphasis and highlights.
- `#01FFFF` (cyan) — legacy product accent inherited from the current site. Use **sparingly**, for product-facing surfaces only. Not for institutional work.

**Semantic.** Calm, desaturated. `#7FB77E` ok · `#D9B55A` warn · `#C56A6A` err · `#7A93B0` info. These are muted enough to sit quietly on dark surfaces without screaming.

**Rules.**
- At most one accent color per surface. Two is noise.
- Color only carries hierarchy, status, or emphasis — never decoration.
- No gradients on text. No gradients on large surfaces. The legacy `gradient-bg` goo effect on `main.tsx` is explicitly de-emphasized in favor of flat near-black.
- Backgrounds are flat. Patterns (`polka-dots.svg`, `diamond-sunset.svg`) are available but used at low contrast and small scale only.

### Typography

**Families.** Inter (UI + headings + body), JetBrains Mono (data, code, status, metrics). The codebase ships Geist; we substitute Inter as the canonical face per spec.

> Substitution note: the repo uses Geist (via `localFont`). We've replaced it with **Inter** (Google Fonts) as specified. If this deviates from your intent, ship the Geist `.woff` files and swap the `@import`.

**Hierarchy.** Weight, not size, does most of the work. Display (H1) at `300` weight for a thin, institutional presence. Body at `400`. Labels at `500`. Never `700+` in interface text.

**Wordmark.** The one exception to the families and the weight rule: the "RBX" of the lockup is set in Archivo 700 at 125% width (`--rbx-font-wordmark`). Archivo is for the wordmark only.

- H1 64 / 300 / -0.015em
- H2 36 / 400 / -0.015em
- H3 22 / 500
- Lead 18 / 300 — used for positioning paragraphs
- Body 15 / 400 / 1.55
- Caption 13 / 400, muted
- Eyebrow 11 / 500 / UPPER / 0.14em
- Status 11 / 500 / UPPER / 0.04em (mono)

**Column width.** `42rem` (672px) max for prose. Wider columns feel like marketing, narrower feel like poetry. Neither is wanted.

### Spacing

4px base, preferring generous vertical rhythm between sections (64–128px) and tight rhythm within components (4–16px). Sections on institutional surfaces are separated by `border-top: 1px solid var(--rbx-line)` rather than padding alone — the hairline **is** the structure.

Scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.

### Borders, radii, shadows

- **Borders.** 1px, `var(--rbx-line)`. Hairlines are a primary structural device. Avoid thicker borders except on explicit focus rings.
- **Radii.** Small. `2 / 4 / 8px`. Buttons `6px`. Cards `8px`. Pills `999px` for status only. Never aggressive roundness. Rounded-2xl (16px) exists in the codebase and is considered legacy — prefer `8px`.
- **Shadows.** Nearly absent. A 1px inset highlight at 3–5% white plus a long, soft, near-black drop is all most surfaces need. Never colored shadows.

### Backgrounds & imagery

- Full-bleed imagery is rare. When used, images are dark-biased, cool, grainless, **b&w or near-mono**. Warm filters forbidden. No bright product photography.
- Team photos: square, subtle border, minimal chrome. Sit over a repeating low-contrast pattern (`polka-dots.svg`) for rhythm.
- Brand patterns (`diamond-sunset.svg`, `polka-dots.svg`) at ≤10% opacity, background-repeat, used to differentiate one positioned card from a flat surface. Never as hero.
- No hand-drawn illustrations. No isometrics. No 3D renders.

### Motion

- Entry: 500–800ms, `ease-out`, short translate (20–30px) + opacity fade. Framer `staggerChildren: 0.1–0.15`.
- Hover: 120–200ms, color/border only. **No scaling, no lifting, no bouncing.**
- Press: instant. Slight opacity change (0.9). No shrink.
- Reduced motion: disable translate, keep opacity.

### Hover / press / focus

- **Hover.** Link: border color shifts from `--rbx-line-strong` to `--rbx-fg`. Button: background shifts one step (primary → primary/90). Icon button: `color` shift only.
- **Press.** Opacity 0.9. No transform.
- **Focus.** 1px ring in `--rbx-line-strong` + 2px offset. Never a glow.
- **Disabled.** Opacity 0.5, no pointer events. No color change.

### Transparency & blur

- **No blur and no glass.** The header used to be a floating bar with `backdrop-filter`. It is now opaque on `--rbx-ink`, and nothing else in the system blurs.
- Avoid stacked transparencies. Prefer flat surfaces.

### Layout rules

- **Header in three rows**, each `80rem` wide at most (`--rbx-nav-w`), opaque, not sticky, no shadow:
  1. **Brand row**, `72px`: the stacked lockup on the left; on the right the language switch `PT / EN` in the eyebrow style and the contact CTA. The CTA is the only filled element of the header: `--rbx-cta` with `--rbx-on-cta` text, hover in `--rbx-brand-signal`.
  2. **Primary row**, `48px`: the five sections (Company, Solutions, Products, Partnership, Journal), `32px` apart. A hairline closes the header.
  3. **Section band**, `44px`, on `--rbx-surface-1` with a hairline below: the pages of the active section, separated by `1px` vertical dividers. The home page has no active section and no band.
- **Active state is an underline, not a pill:** text in `--rbx-fg` with `1px` of `--rbx-brand`. In the primary row the underline sits at the bottom of the row; in the language switch and in the band it sits under the text. Rest in `--rbx-chrome-fg`, hover in `--rbx-fg`. No filled background, border or radius on navigation items. The underline is drawn as a background, not a box-shadow: the site draws its focus ring with a box-shadow, and the ring has to stay visible on the active item.
- **Rest text** of the header and the breadcrumb is `--rbx-chrome-fg`, not `--rbx-fg-dim`: at these sizes `--rbx-fg-dim` falls under 4.5:1 on `--rbx-ink` and on `--rbx-surface-1`.
- **Focus** in the header and the breadcrumb is a solid `2px` ring in `--rbx-brand`, drawn as an outline. The site draws the same ring with a box-shadow.
- **Click areas.** Every link and button of the header and the breadcrumb takes the click on an area at least `32px` high: primary links fill their row, band links fill theirs, the language links and the CTA have a minimum height, the brand link is `44px` high, and the breadcrumb links extend their area without growing on screen. The site is tighter on the language links, the CTA, the band links and the breadcrumb links.
- **Under 768px:** the brand row drops to `60px` with the compact lockup (mark and "RBX"); the CTA becomes a `44px` icon button with a label for assistive technology; the primary row moves into a menu opened by a button, placed after the band; the band becomes one row with the section, `›` and the current page, which opens the list of pages. Every control of the header and the breadcrumb is then at least `44px` high; the two language links are narrower than `44px`.
- **Breadcrumb** on every page except the home page, between the site header and the title of the page. `TopNav` and `Breadcrumb` read one resolution, `resolveNav(active, leaf)`, so the band, the mobile label and the trail cannot disagree. Eyebrow style in `--rbx-chrome-fg`: a home icon, `›` separators in `--rbx-fg-faint`, ancestors as links, the current page in `--rbx-fg` with `1px` of `--rbx-brand-dim` below and `aria-current="page"`. A section's landing page shows the section alone. A page known only by its parent (a post, a service, a person) is named by its title; under a landing page the band then highlights nothing. A long title stays on one line and is cut with an ellipsis; the full title is the page heading right below. A title that carries the site name (`LLMOps — RBX Systems`) loses that suffix in the crumb. Contact and Legal Notice have a breadcrumb and no band.
- **On the site only:** the same resolution feeds the BreadcrumbList structured data, so the visible trail and the structured data cannot disagree. The kits emit no structured data. On the site the breadcrumb sits inside the page padding with `--s-7` below it; in the kits it has a `32px` top margin and the sections bring their own padding. The language switch of the site links to the other host; in the kits it shows the control and its active state and translates nothing.
- Footer is a solid darker surface (`#1D1D22`) separated by hairline.
- Content columns: 72rem max (1152px). Prose columns: 42rem max.
- Grid gutters: 16–32px. Section padding: 96–128px vertical.

### Corner rhythm

Mixing radii is forbidden within a composition. If the card is `8px`, the button inside is `6px`, the pill is `999px` — and nothing else has a radius.

---

## Iconography

The codebase uses **Lucide** (via shadcn/ui) and **React Icons `si`** (Simple Icons) for brand marks (GitHub, LinkedIn). There is no custom icon font or sprite.

**Rules.**
- Icons are **line**, stroke `1.5`, never filled except for status dots.
- Neutral color — icons inherit `--rbx-fg-muted` or `--rbx-fg-dim`; they do not carry accent color.
- 16–20px at body size, 24px for section markers. Never decorative at >32px.
- No emoji. Ever.
- No unicode glyphs as icons, except `•` for inline separators and `/` for path separators.

**CDN usage.** This design system links Lucide from CDN (`https://unpkg.com/lucide@latest`). Brand marks (GitHub, LinkedIn) use inline SVGs copied from Simple Icons. Substitution flag: the repo bundles these via npm; we use CDN equivalents. If you need an offline build, inline the SVGs.

**Status indicators.** A `6px` filled circle, color from the semantic palette, precedes ALL-CAPS mono state labels. This is the canonical status pattern (e.g. `● HEALTHY`, `● DEGRADED`, `● REJECTED`).

---

## Preview cards

Rendered swatches, specimens, components in `preview/`. These populate the Design System tab.

## UI kits

- `ui_kits/marketing/`: the rbxsystems.ch homepage: header, hero, positioning, products, team, footer. A desktop composition.
- `ui_kits/header/`: the header and the breadcrumb alone, with the states they resolve together. Open it in a narrow window for the layout under 768px.
- `ui_kits/atelier/`: the most Zurich-coded reference in the corpus.
- `ui_kits/product/`: an internal control-plane surface inspired by TruthMetal's state machine.

Each kit has its own `README.md`, an `index.html` click-thru, and small JSX components you can lift.
