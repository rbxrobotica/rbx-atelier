# Badge

Carimbo curto de estado ou categoria, sempre com palavra e com ícone opcional.

## Quando usar
- Vagas ("6 vagas", "Poucas vagas", "Esgotado"), novidades ("Novo"), formato ("Online").
- `size="l"` dentro de cartões; `outline` quando o fundo já é colorido.

## Quando não usar
- Como botão ou link (não é clicável).
- Texto longo: no máximo três palavras.
- Só cor, sem palavra: `sucesso` e `marca` são verdes vizinhos.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `tone` | `'neutro' | 'marca' | 'sucesso' | 'aviso' | 'erro' | 'info'` | `'neutro'` | Tom |
| `label` | `string` | — | A palavra (ou filhos) |
| `icon` | `IconName` | — | Ícone de 16 px antes da palavra |
| `size` | `'m' | 'l'` | `'m'` | 20 ou 28 px de altura |
| `outline` | `boolean` | `false` | Só contorno |

## Em HTML puro (sem Svelte)
```html
<span class="itr-badge itr-badge--aviso"><svg class="itr-icon" …></svg>Poucas vagas</span>
<span class="itr-badge itr-badge--erro itr-badge--outline">Esgotado</span>
```

## Acessibilidade
- Texto do tom sobre o `-suave` do mesmo tom: 4,74 : 1 ou mais em todos os pares, nos dois temas.
- `label` 12 px em caixa alta só porque é curto; nunca para frases.

## Tokens
`--neutro`: `--superficie-2`/`--texto-2`; `--<tom>` e `--<tom>-suave`; `--fs-label`, `--ls-label`, `--radius-pill`.
