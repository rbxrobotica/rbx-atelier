# Tokens

Exportações de `tokens.json` para código. Gere e altere as três juntas.

- `gph.css`: variáveis CSS com prefixo `--gph-`. Tema claro em `:root`; escuro por `@media (prefers-color-scheme: dark)` com `:root:not([data-theme="light"])` e por `:root[data-theme="dark"]`. Inclui classes `.gph-text-<estilo>` para cada estilo de texto.
- `gph.tokens.json`: formato DTCG no padrão do RBX Atelier (`$type`, `$value`, `$description`), com `color` (claro) e `color-dark`, fontes, estilos de texto, espaço, raios, sombras, tamanhos, breakpoints, movimento e camadas.
