# Strategos Brand Mark

**Status:** official, adopted 2026-08-20.
**Provenance:** drafted by the founder with ChatGPT, Claude, and Claude Design; approved and supplied as final on 2026-08-20. Replaces two earlier fictitious marks: the three-line glyph on strategos.gr and the "hairline S in a chamfered square" placeholder previously shipped in this design system.

## The mark

A customized lowercase Greek sigma with a hawk-beak terminal on the tail. Single path, even-odd fill, square viewBox, fills with `currentColor`.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Strategos" shape-rendering="geometricPrecision"><path fill="currentColor" fill-rule="evenodd" d="M792.7 262.4L477 262.4A253.5 242.6 0 1 0 730.5 511C730.5 450 706 405 665.9 369.2L652.3 384.4L596.5 323L626.5 323L653.1 353.5L679.4 323L747.2 323ZM474.9 344.2A148.3 163.5 0 1 1 474.9 671.2A148.3 163.5 0 1 1 474.9 344.2Z"/></svg>
```

This block is the source of truth for the geometry (SVG-as-code, ADR-0602 spirit). Any renderer that needs the path copies `d` verbatim.

## Assets in this folder

| File | Fill | Use for |
|---|---|---|
| `assets/strategos-mark.svg` | `currentColor` | Inline embeds and components, where CSS `color` is inherited |
| `assets/strategos-mark-adaptive.svg` | explicit, theme-adaptive via `prefers-color-scheme` | `<img>` embeds, favicons, any context that does not inherit `color` |

`currentColor` does not cross an `<img>`, `background-image`, or favicon boundary; browsers render it with the default black fill there, which is invisible on obsidian surfaces. Use the adaptive asset in those contexts.

## Usage rules

- Color comes from `currentColor`. In the Obsidian Council system render it in `--ink-0`. Per RULES_OF_DESIGN rule 6, brand-chrome accenting is Cyan; the mark is never tinted Aurum (Aurum stays reserved for human-decided artifacts).
- The viewBox is square; set one dimension and the proportion holds.
- Decorative placements set `aria-hidden`; standalone placements get `role="img"` plus an accessible name ("Strategos").
- Do not redraw, outline, add strokes, or box the mark inside new chrome. Bordered chips around it (as on strategos.gr) are layout, not part of the mark.

## Reference implementations

- React: `strategos-site/src/components/StrategosMark.tsx` (hook-free, renders in Server Components, accessible name via `aria-label`).
- Svelte 5: `strategos-ui/src/lib/components/LogoStrategos.svelte` (`size`, `title`, `decorative` props; defaults to `--ink-0`).
- This kit: `ui_kits/strategos-app/AppShell.jsx` renders the mark inline in the sidebar brand block.
