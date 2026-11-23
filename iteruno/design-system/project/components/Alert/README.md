# Alert

Aviso em caixa com ícone, título, texto, ação opcional e botão de fechar.

## Quando usar
- `info` para expectativas ("Resposta em até um dia útil"); `aviso` quando o cliente precisa agir; `sucesso` após enviar; `erro` quando falhou, com uma ação de saída ("Chamar no WhatsApp").
- `neutro` para notas sem estado.

## Quando não usar
- Mensagens de marketing ou promoções.
- Mais de um alerta empilhado na mesma área: junte em um.
- Erro de campo: use o `error` do próprio campo e o resumo do Form.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `tone` | `'info' | 'aviso' | 'sucesso' | 'erro' | 'neutro'` | `'info'` | Tom e ícone padrão |
| `title` | `string` | — | Título curto |
| `text` | `string` | — | Texto; pode trazer `[[CONFIRMAR]]` |
| `icon` | `IconName` | `por tom` | Troca o ícone |
| `action` | `Snippet` | — | Botão ou link abaixo do texto |
| `onclose` | `() => void` | — | Mostra o botão fechar |
| `role` | `'alert' | 'status'` | `'status'` | `alert` só para erros que surgem depois do carregamento |

## Em HTML puro (sem Svelte)
```html
<div class="itr-alert itr-alert--info" role="status">
  <svg class="itr-icon itr-alert__icon" …></svg>
  <div class="itr-alert__body"><p class="itr-alert__title">Resposta em até um dia útil</p><div class="itr-alert__text"><p>…</p></div></div>
  <button class="itr-iconbtn itr-alert__close" aria-label="Fechar aviso">…</button>
</div>
```

## Acessibilidade
- Ícone decorativo; a palavra do título ou do texto carrega o sentido.
- `role="alert"` interrompe o leitor de tela: só para falhas; o resto é `status`.
- Botão fechar com `aria-label` e 44 px de alvo.

## Tokens
`--<tom>`, `--<tom>-suave`, `--texto`, `--radius-m`, `--space-4`.
