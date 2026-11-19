# Steps

Passos numerados de "como funciona": cartões com número, título e uma frase, na ordem em que o cliente vive o serviço.

## Quando usar
- Em Serviços (do contato ao relatório) e em Cursos (da inscrição ao certificado); 3 a 5 passos.
- `columns` igual ao número de passos quando são até 5; `auto` quando a quantidade varia.

## Quando não usar
- Lista de vantagens ou de itens sem ordem: use `ServiceCard` ou uma lista no `itr-prose`.
- Mais de 5 passos: divida em duas seções.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `items` | `{ title, text? }[]` | `[]` | Passos, na ordem |
| `columns` | `'auto' | 2 | 3 | 4 | 5` | `'auto'` | Colunas a partir de 1200 px (2 a partir de 768 px, 1 no celular) |
| `headingLevel` | `1 | 2 | 3 | 4` | `3` | Nível do título de cada passo |

## Em HTML puro (sem Svelte)
```html
<ol class="itr-steps itr-steps--3">
  <li class="itr-steps__item"><span class="itr-steps__num" aria-hidden="true">1</span><div class="itr-steps__body"><h3 class="itr-steps__title">Você conta o problema</h3><p class="itr-steps__text">…</p></div></li>
</ol>
```

## Acessibilidade
- É um `<ol>`: o leitor de tela anuncia a posição; o número visível é decorativo (`aria-hidden`).
- Número em `sobre-marca` sobre `marca` (4,9 : 1); texto em `texto-2` (7,1 : 1 sobre `superficie`).

## Tokens
`--marca`, `--sobre-marca`, `--superficie`, `--linha`, `--radius-l`, `--control-m`, `--font-display`, `--space-3/4/5/6`.
