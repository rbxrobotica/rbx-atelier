# Skeleton

Blocos de carregamento no formato do conteúdo que vai chegar, com aviso "Carregando" para leitor de tela e pulso suave que some com movimento reduzido.

## Quando usar
- Ao abrir a OS, o orçamento ou a lista de mensagens, quando a resposta passa de meio segundo.

## O que você fornece
- `variant`: `card` (cartão), `row` (linhas de especificação e de orçamento), `text`. `lines` e `label` ("Carregando orçamento").

## Faça
- Use a variante com a forma do conteúdo real.

## Não faça
- Não use para envios (use `loading` no Button).
- Não deixe o esqueleto por mais de alguns segundos: mostre erro com Alert.

## Estados
Único.
