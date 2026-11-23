# Grid

Grade responsiva de cartões: uma coluna no celular, duas a partir de 768 px, três ou quatro a partir de 1200 px.

## Quando usar
- Cartões de serviço (3), planos (3), cursos (3), depoimentos (2).
- `auto` quando a quantidade varia: colunas de no mínimo 240 px (`card-min`).

## Quando não usar
- Layout de página inteira (use Section) ou tabelas de dados.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `columns` | `'auto' | 2 | 3 | 4` | `'auto'` | Colunas no desktop |

## Em HTML puro (sem Svelte)
```html
<div class="itr-grid itr-grid--3">…cartões…</div>
<div class="itr-grid itr-grid--auto">…</div>
```

## Acessibilidade
- Ordem visual igual à do DOM; nada de reordenar por CSS.
- Vão de `space-5` (20 px) no celular e `space-6` (24 px) no desktop.

## Tokens
`--card-min` 240, `--space-5/6`, `--bp-m`, `--bp-l`.
