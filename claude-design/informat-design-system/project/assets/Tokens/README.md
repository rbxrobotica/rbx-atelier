# Tokens

Exportações dos tokens, geradas da mesma fonte que `tokens.json` (altere todos juntos).

- `inf.css`: variáveis CSS com prefixo `--inf-` (`--inf-placa`, `--inf-space-4`, `--inf-font-sans`). Tema claro em `:root`; escuro por `@media (prefers-color-scheme: dark)` com `:root:not([data-theme="light"])` e por `:root[data-theme="dark"]`. Primeira linha importa as fontes do Google.
- `inf.tokens.json`: formato DTCG (estilo rbx-atelier), com `color`, `color-dark`, `font`, `type`, `space`, `radius`, `shadow`, `shadow-dark`, `motion` e `layout`.
