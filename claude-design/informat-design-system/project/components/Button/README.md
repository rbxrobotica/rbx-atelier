# Button

Botão de ação do Informat: um `<button>` real, ou um `<a>` quando recebe `href`, com altura mínima de 44 px.

## Quando usar
- `primary` (fundo `placa`, texto `on-placa`) para a ação que é a razão da tela: "Solicitar atendimento", "Aprovar escopo", "Enviar solicitação". Uma por vista.
- `secondary` (borda `field`) para ações de apoio: "Tirar dúvida", "Voltar", "Ver orçamento".
- `ghost` (texto `placa`) para ações terciárias dentro de cartões e listas: "Ver detalhes técnicos", "Recusar".
- `danger` (texto e borda `err`) só para confirmar algo que não volta: "Cancelar OS", "Recusar orçamento" dentro do Dialog.
- `size="l"` (52 px) no hero e na aprovação do escopo.

## O que você fornece
- O rótulo como `children`: verbo no infinitivo + objeto, em caixa de frase. "Aprovar escopo", nunca "OK" ou "Clique aqui".
- `href` para navegar (vira link), `type="submit"` em formulários, `iconLeft` ou `iconRight` com nomes de Icon.
- `loading` durante o envio: troque o rótulo pelo gerúndio ("Enviando").

## Faça
- Coloque a ação principal à direita no desktop e no topo da pilha no celular.
- Use `block` em telas estreitas quando o botão fecha um formulário.

## Não faça
- Não use dois `primary` lado a lado.
- Não use `danger` para "Recusar" no QuoteSummary: recusar é uma escolha legítima, use `ghost`; a confirmação destrutiva fica no Dialog.
- Não faça botão em pílula nem com ícone sozinho sem `aria-label`.

## Estados
Repouso, hover (`placa-strong` no primário, `sunken` no secundário), foco (anel de 2 px em `focus`, 2 px de afastamento), carregando (`aria-busy`, indicador girando, desabilitado), desabilitado (`sunken` com texto `ink-3`).
