# Card

Superfície de conteúdo sobre `bg-0` ou `bg-1`. O consumidor fornece o conteúdo; o card não tem título obrigatório.

- Fundo `bg-2`, borda 1px `border`, raio `radius-md`, padding `s-5`. Hover só quando o card inteiro é link: borda `border-strong`.
- Rótulo opcional em `eyebrow` e `fg-2` no topo; título em `h4`; texto em `body` e `fg-1`; metadados em `caption` e `fg-2`.
- Sem sombra, sem borda lateral colorida, sem ícone decorativo. Estado é comunicado por palavra em `ok`, `warn`, `err` ou `info` sobre o fundo `*-subtle` correspondente, nunca só pela cor.
- Em grade, gap `s-6`; abaixo de 768px uma coluna.
