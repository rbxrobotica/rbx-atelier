# Implementation Guide — strategos-ui cutover

How to adopt the Obsidian Council Design System in `~/apps/strategos-ui/` without breaking the current mock-mode runtime.

## 1. Replace `src/lib/design/strategos.css`

Copy the contents of [`colors_and_type.css`](./colors_and_type.css) over `src/lib/design/strategos.css`. Keep the existing `@tailwind base; @tailwind components; @tailwind utilities;` directives at the top — they are already present in our file.

The legacy variable names the codebase currently consumes (`--bg-primary`, `--bg-card`, `--bg-card-hover`, `--accent-blue`, `--accent-cyan`, `--accent-red`, `--accent-amber`, `--accent-green`, `--accent-gray`, `--text-primary`, `--text-secondary`, `--text-muted`, `--agent-strategic`, `--agent-tactical`, `--agent-operational`, `--agent-observer`, `--border`) are kept as **shims** that point to the new tokens — existing components continue to render without code changes.

## 2. Update `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/routes/**/*.{js,ts,svelte,mdx}",
    "./src/lib/**/*.{js,ts,svelte,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surface ladder
        "obsidian-0": "var(--obsidian-0)",
        "obsidian-1": "var(--obsidian-1)",
        "obsidian-2": "var(--obsidian-2)",
        "obsidian-3": "var(--obsidian-3)",
        "obsidian-4": "var(--obsidian-4)",

        // Foreground
        "ink-0": "var(--ink-0)",
        "ink-1": "var(--ink-1)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",

        // Hairlines
        hairline: "var(--hairline)",
        "hairline-strong": "var(--hairline-strong)",

        // Cyan family (AI / focus)
        "cyan-signal": "var(--cyan-signal)",
        "cyan-brand":  "var(--cyan-brand)",
        "cyan-muted":  "var(--cyan-muted)",
        "cyan-dim":    "var(--cyan-dim)",

        // Aurum family (human / committed)
        "aurum-bright": "var(--aurum-bright)",
        aurum:          "var(--aurum)",
        "aurum-muted":  "var(--aurum-muted)",
        "aurum-dim":    "var(--aurum-dim)",

        // Semantic
        risk:      "var(--risk)",
        warn:      "var(--warn)",
        ok:        "var(--ok)",
        info:      "var(--info)",
        uncertain: "var(--uncertain)",

        // Legacy shims — keep until all components migrate
        "bg-primary":      "var(--bg-primary)",
        "bg-card":         "var(--bg-card)",
        "bg-card-hover":   "var(--bg-card-hover)",
        "text-primary":    "var(--text-primary)",
        "text-secondary":  "var(--text-secondary)",
        "text-muted":      "var(--text-muted)",
        "accent-blue":     "var(--accent-blue)",
        "accent-cyan":     "var(--accent-cyan)",
        "accent-red":      "var(--accent-red)",
        "accent-amber":    "var(--accent-amber)",
        "accent-green":    "var(--accent-green)",
        "accent-gray":     "var(--accent-gray)",
        border:            "var(--hairline)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Menlo", "monospace"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      transitionTimingFunction: {
        "voltage": "cubic-bezier(0.20, 0, 0, 1)",
        "voltage-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
```

## 3. Class conventions

**Always prefer the semantic primitives** in `colors_and_type.css` over inline color classes:

| Use case | Use this | Avoid |
|---|---|---|
| Page section eyebrow | `.s-eyebrow` | `text-xs uppercase tracking-wider text-text-muted font-mono` |
| Card | `.card` | hand-rolled `bg-bg-card border border-border rounded-md p-6` |
| Primary card (pending decision, active session) | `.card .card-primary` | extra divs |
| Committed decision | `.card .card-committed` | green tints |
| Numeric value | `.s-num` | `font-mono tabular-nums` |
| Status pill | `.s-status` + `.dot dot-ok` | unstyled spans |
| Buttons | `.btn .btn-primary` / `.btn-aurum` / `.btn-ghost` / `.btn-danger` | colored Tailwind buttons |
| Agent class | `.badge-strategic` etc. | hand-rolled bg/border combos |

Tailwind utilities remain available for layout (`flex`, `grid`, `gap-*`, `space-*`) — they are still the right tool. Color, typography, and component chrome should flow through the design tokens.

## 4. Library compatibility

- **lucide-react** — already a dependency. Keep `strokeWidth={1.5}`, default size 16/18.
- **recharts** — wire chart series to `--chart-1 … --chart-5`. Disable default tooltips and use the institutional tooltip in `ui_kits/strategos-app/Tooltip.jsx` (mono labels, hairline border).
- **Zustand** — no changes; design tokens are runtime CSS variables.
- **ConnectRPC + TanStack Query** — UI binds to service responses only. Never compute strategic values in selectors; if a server-side value is missing render `—`.
- **React Flow (`@xyflow/react`)** — used for the Organograma. Use `--obsidian-1` for the canvas background, `--hairline` for edges, and the agent-class colors for nodes.

## 5. Migration checklist

  - [ ] Replace `src/lib/design/strategos.css`.
- [ ] Update `tailwind.config.ts`.
- [ ] Run the dev server (`npm run dev`) — every existing component should render unchanged thanks to the legacy-name shims.
- [ ] Migrate `src/components/layout/sidebar.tsx`: replace the placeholder `Users` icon with `assets/strategos-mark.svg`, swap `bg-[var(--accent-blue)] text-white` active state for `.btn-primary` look (cyan border, cyan-subtle background, no white fill).
- [ ] Migrate `src/components/painel/decision-list.tsx`: import the new `DecisionCard`, `ConfidenceBar`, `AgentStatusBadge`, `AuditTrailItem` from this kit.
- [ ] Replace `cockpit-grid.tsx` left-border-only accents with full hairlines + L-corner signature on the active quadrant only.
- [ ] Verify no component creates strategic values client-side (per Rule 1).
- [ ] Replace any `text-accent-blue` / `text-accent-cyan` paired with chrome usage by `text-cyan-brand`; reserve semantic names for state-of-the-world cases.
