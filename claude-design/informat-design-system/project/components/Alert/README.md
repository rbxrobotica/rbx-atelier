# Alert

Aviso em bloco dentro do conteúdo, com ícone, título, texto e ação opcional, em quatro tons e um neutro.

## Quando usar
- `info`: explica um passo ("O diagnóstico começa quando o equipamento chega").
- `warn`: algo depende do cliente ou tem risco ("Sem backup, os dados podem ser perdidos").
- `ok`: confirma o que aconteceu e o que vem depois.
- `err`: falha que impede seguir, com o que fazer.

## O que você fornece
- `tone`, `title` (a frase que resume), `children` (uma ou duas frases), `action` opcional (um Button `secondary` ou link).
- Para avisos que chegam depois de uma ação, adicione `role="status"` (ou `role="alert"` em erro).

## Faça
- Comece o título pelo fato: "Orçamento vence em [PRAZO]".
- Diga o próximo passo no texto.

## Não faça
- Não empilhe vários alertas; resolva o mais importante.
- Não use para mensagens passageiras (use Toast).

## Estados
Estático; `onClose` mostra o botão "Fechar aviso".
