# StatusBadge

Carimbo de status da ordem de serviço: ícone mais palavra em mono, caixa alta, borda na cor do estado.

## Quando usar
- Sempre que uma OS aparece: cabeçalho (`size="l"`), listas, orçamento, mensagens.

## O que você fornece
- `status`: `solicitado`, `em-diagnostico`, `aguardando-aprovacao`, `aprovado`, `em-execucao`, `pronto-para-entrega`, `entregue`, `cancelado`. Ícone, palavra e cor saem do estado.

## Faça
- Deixe o carimbo perto do número da OS.
- Leia as cores como família: `info` (em andamento, a Informat está trabalhando), `warn` (espera o cliente), `ok` (concluído), `err` (cancelado), neutro (recebido).

## Não faça
- Não invente estados nem troque a palavra; se precisar de mais detalhe, escreva ao lado em `small`.
- Não use o carimbo como botão.
- Não confie na cor: `ok` e a cor da marca são verdes parecidos, por isso o ícone e a palavra são obrigatórios.

## Estados
Oito, fixos. Em tema escuro as cores clareiam e os fundos escurecem, mantendo 4.5:1 ou mais.
