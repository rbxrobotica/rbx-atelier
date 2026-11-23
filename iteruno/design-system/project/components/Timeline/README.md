# Timeline

Linha do tempo vertical com marcos (quando, título, texto): a história da Iteruno na página Sobre.

## Quando usar
- Página Sobre: 2021, 2021 a 2025, 2026. Cada marco pode trazer um ícone.
- Um marco sem dado confirmado recebe `pending: true` ou um `[[CONFIRMAR]]` no texto: o ponto fica tracejado e o marcador aparece destacado.

## Quando não usar
- Processos (use `Steps`) ou agenda de turmas (use `CourseCard`).
- Mais de 6 marcos: resuma.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `items` | `{ when, title, text?, icon?, pending? }[]` | `[]` | Marcos em ordem cronológica |
| `headingLevel` | `1 | 2 | 3 | 4` | `3` | Nível do título de cada marco |

## Em HTML puro (sem Svelte)
```html
<ol class="itr-timeline">
  <li class="itr-timeline__item"><span class="itr-timeline__dot" aria-hidden="true"></span><p class="itr-timeline__when">2021</p><h3 class="itr-timeline__title">Fundação</h3><p class="itr-timeline__text">…</p></li>
  <li class="itr-timeline__item itr-timeline__item--pendente">…</li>
</ol>
```

## Acessibilidade
- `<ol>` em ordem cronológica; o trilho e os pontos são decorativos (`aria-hidden`).
- Ano em `marca-forte` (8,7 : 1 sobre `superficie`); texto em `texto-2`.
- Estado pendente nunca só pelo tracejado: o `[[CONFIRMAR]]` aparece no texto.

## Tokens
`--marca`, `--marca-forte`, `--marca-suave`, `--linha`, `--border-strong`, `--font-display`, `--fs-title-1/2`, `--space-6/8/12/16`.
