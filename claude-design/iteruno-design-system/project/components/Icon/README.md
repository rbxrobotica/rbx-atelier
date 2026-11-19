# Icon

Ícone de traço na grade de 24, com 49 nomes, herdando a cor do texto.

## Quando usar
- Ao lado de uma palavra: em botões (20), carimbos (16), cartões (24 e 32).
- Ícone fixo por frente: `wrench` (Suporte & Manutenção), `globe` (Sites), `book-open` (Cursos).

## Quando não usar
- Sozinho, sem rótulo, para transmitir informação: dê `label` ou escreva a palavra ao lado.
- Como ilustração: a ilustração da marca é só o símbolo e o padrão de sinal.
- Emoji, ícones preenchidos ou logotipos de sistema operacional.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `name` | `IconName` | — | Um dos 49 nomes (veja `ICON_NAMES`) |
| `size` | `16 | 20 | 24 | 32` | `20` | Lado em px |
| `label` | `string` | — | Nome acessível; sem ele o ícone é decorativo (`aria-hidden`) |
| `strokeWidth` | `number` | `1.75` | Espessura do traço |

## Em HTML puro (sem Svelte)
Copie o SVG de `assets/Icones` para dentro do HTML e dê a classe `itr-icon` (o `stroke` passa a ser `currentColor`):

```html
<svg class="itr-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">…</svg>
```

## Acessibilidade
- Decorativo por padrão (`aria-hidden="true"`, `focusable="false"`); com `label` vira `role="img"`.
- Estado nunca só por ícone: Badge e Alert escrevem a palavra.

## Tokens
`--icon-s` 16, `--icon-m` 20, `--icon-l` 24, `--icon-xl` 32; cor via `currentColor`.
