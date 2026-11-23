# Toast

Mensagem passageira em fundo `ink` com texto `surface`, que confirma uma ação ou relata uma falha sem tirar o cliente da tela.

## Quando usar
- Depois de salvar, enviar mensagem, aprovar escopo.
- Falhas que o cliente pode resolver na hora, com `action` ("Tentar de novo").

## O que você fornece
- `children` (uma frase), `tone` (`ok`, `err`, `neutral`), `action`, `onClose`, `floating` para fixar no rodapé da janela.

## Faça
- Fique por pelo menos 6 segundos; erros ficam até o cliente fechar.

## Não faça
- Não use para informação que o cliente precisa guardar (use Alert).
- Não empilhe mais de um.

## Estados
`role="status"` (ok, neutro) e `role="alert"` (erro). Foco em `surface` sobre `ink`.
