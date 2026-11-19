# PriceCard

Cartão de plano ou serviço com preço, período, lista do que entra e botão; um pode ser destacado.

## Quando usar
- Planos e valores de referência; `featured` em um só por grupo ("Mais procurado").
- Preço ainda não confirmado: `price="[[CONFIRMAR preço]]"`, que aparece destacado até existir; `note` para "Orçamento fechado antes do serviço".

## Quando não usar
- Preço inventado ou "a partir de" sem base.
- Mais de três cartões lado a lado.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `name` | `string` | — | Nome do plano |
| `description` | `string` | — | Para quem é |
| `price` | `string` | — | Valor com unidade ("R$ 150") ou `[[CONFIRMAR preço]]` |
| `period` | `string` | — | "por mês", "por visita" |
| `items` | `string[]` | `[]` | O que entra |
| `action` | `{ label, href, icon? }` | — | Botão (primário no destacado, secundário nos outros) |
| `featured` | `boolean` | `false` | Borda em `marca` e selo |
| `featuredLabel` | `string` | `'Mais procurado'` | Texto do selo |
| `note` | `string` | — | Nota abaixo do botão |
| `headingLevel` | `2 | 3 | 4` | `3` | Nível do título |

## Em HTML puro (sem Svelte)
```html
<article class="itr-price itr-price--featured">
  <span class="itr-price__flag itr-badge itr-badge--marca">Mais procurado</span>
  <h3 class="itr-price__name">Plano mensal</h3>
  <p class="itr-price__desc">…</p>
  <p class="itr-price__value"><span class="itr-price__amount">R$ 000</span> <span class="itr-price__period">por mês</span></p>
  <ul class="itr-price__list">…</ul>
  <div class="itr-price__action">…itr-btn…</div>
  <p class="itr-price__note">…</p>
</article>
```

## Acessibilidade
- O destaque é borda e selo com palavra, não só cor.
- Preço em Saira Condensed grande; o período em texto normal ao lado, legível por leitor de tela como uma frase.

## Tokens
`--superficie`, `--linha`, `--marca`, `--font-display`, `--fs-display-l`, `--radius-l`, `--space-6`.
