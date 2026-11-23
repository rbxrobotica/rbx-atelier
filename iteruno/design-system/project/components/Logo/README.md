# Logo

Assinatura da Iteruno em SVG embutido, em seis variantes, com as cores seguindo o tema.

## Quando usar
- `horizontal` (padrão) em cabeçalhos de documento e rodapé; `curto` (sem TECNOLOGIAS) quando a altura fica abaixo de 40 px, como na barra de navegação.
- `wordmark` e `wordmark-curto` quando o símbolo já aparece perto (hero, capa de apostila).
- `simbolo` como selo ou marcador; `avatar` para perfis redondos.
- `tone="mono"` sobre fundo em `marca` ou sobre foto: tudo em `currentColor` (defina `color`).

## Quando não usar
- Nunca escreva "Iteruno" em texto vivo no lugar do logotipo.
- Nunca o símbolo verde sobre fundo `marca`; use `tone="mono"` com `color: var(--sobre-marca)`.
- Abaixo de 24 px de altura use o favicon (assets/Logotipos).

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `variant` | `'horizontal' | 'curto' | 'wordmark' | 'wordmark-curto' | 'simbolo' | 'avatar'` | `'horizontal'` | Qual assinatura |
| `tone` | `'cor' | 'mono'` | `'cor'` | `cor`: símbolo em `marca`, texto em `texto`; `mono`: tudo em `currentColor` |
| `height` | `number` | — | Altura em px; a largura segue a proporção |
| `title` | `string` | `'Iteruno Tecnologias'` | Nome acessível do SVG |
| `decorative` | `boolean` | `false` | `aria-hidden` quando o nome está escrito ao lado |

## Em HTML puro (sem Svelte)
Use os arquivos de `assets/Logotipos` com `<img>`, escolhendo a versão `-escuro` no tema escuro:

```html
<a class="itr-nav__brand" href="/"><img src="iteruno-horizontal-curto.svg" height="28" alt="Iteruno Tecnologias"></a>
```

## Acessibilidade
- O SVG tem `role="img"` e `aria-label` com o `title`; com `decorative` recebe `aria-hidden="true"`.
- Contraste: `marca` sobre `fundo` 4,54 : 1 no claro e 8,32 : 1 no escuro; o texto da wordmark usa `texto`.

## Tokens
`--marca` (símbolo), `--texto` (wordmark), `--sobre-marca` e `--marca` (avatar).
