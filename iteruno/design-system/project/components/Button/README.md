# Button

Botão ou link com cara de botão, em quatro variantes e três alturas, com estados de foco, carregando e desabilitado.

## Quando usar
- `primary` para a ação principal da tela, uma por tela: "Chamar no WhatsApp", "Enviar mensagem".
- `secondary` para a alternativa ("Ver serviços"), `ghost` para ações discretas ("Cancelar"), `danger` só para apagar ou cancelar algo irreversível.
- `inverse` e `inverse-ghost` sobre fundo em `marca` (ContactCTA, Hero em marca).
- Com `href` o componente renderiza `<a>`: navegação é link, ação é botão.

## Quando não usar
- Dois primários lado a lado.
- Rótulos em caixa alta ou com exclamação; escreva em caixa de frase: "Ver serviços".
- Ícone sem rótulo (use `itr-iconbtn` com `aria-label` só para fechar e menu).

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `variant` | `'primary' | 'secondary' | 'ghost' | 'danger' | 'inverse' | 'inverse-ghost'` | `'primary'` | Hierarquia |
| `size` | `'s' | 'm' | 'l'` | `'m'` | 36, 44 ou 52 px de altura |
| `block` | `boolean` | `false` | Largura total (formulário no celular) |
| `href` | `string` | — | Renderiza `<a>` em vez de `<button>` |
| `type` | `'button' | 'submit' | 'reset'` | `'button'` | Tipo do `<button>` |
| `disabled` | `boolean` | `false` | Desabilitado (`aria-disabled` no link) |
| `loading` | `boolean` | `false` | Spinner, `aria-busy`, sem cliques; o rótulo fica |
| `icon` | `IconName` | — | Ícone antes do rótulo |
| `iconEnd` | `IconName` | — | Ícone depois do rótulo (setas) |
| `label` | `string` | — | Rótulo; alternativa aos filhos |

## Em HTML puro (sem Svelte)
```html
<button class="itr-btn itr-btn--primary itr-btn--m" type="button">Chamar no WhatsApp</button>
<a class="itr-btn itr-btn--secondary itr-btn--m" href="/servicos">Ver serviços <svg class="itr-icon" …></svg></a>
<button class="itr-btn itr-btn--primary itr-btn--block" disabled>Desabilitado</button>
```
Modificadores: `--s` `--m` `--l`, `--block`, `--ghost`, `--danger`, `--inverse`, `--inverse-ghost`. Carregando: acrescente `<span class="itr-spinner">` e `aria-busy="true"`.

## Acessibilidade
- Alvo mínimo 44 × 44 px no tamanho `m`; `s` (36 px) só em linhas densas, nunca como ação principal no celular.
- Anel de foco de 2 px em `foco` com 2 px de afastamento, em todas as variantes.
- Contraste: `sobre-marca` sobre `marca` 4,91 : 1 (claro) e 8,32 : 1 (escuro); hover escurece para `marca-forte` (8,74 : 1).
- `loading` mantém o rótulo visível e informa `aria-busy`; `disabled` não recebe foco.

## Tokens
`--marca`, `--marca-forte`, `--sobre-marca`, `--erro`, `--borda-campo`, `--control-s/m/l`, `--radius-m`, `--fs-body`, `--fw-semibold`, `--duration-fast`, `--ease-standard`.
