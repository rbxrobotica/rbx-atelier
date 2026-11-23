# QuoteSummary

Resumo do orçamento de uma OS: itens com valor em mono, total, validade e as três decisões do cliente (aprovar escopo, tirar dúvida, recusar).

## Quando usar
- Na tela Diagnóstico e orçamento e no topo da Aprovação do escopo. Com `actions={false}`, como registro numa OS já aprovada.

## O que você fornece
- `osNumber`, `status`, `items` (`label`, `detail` com a explicação em linguagem simples, `value`), `total`, `validity`, `note`.
- Valores reais quando houver; enquanto não houver, "[VALOR]" e "[PRAZO]".
- Os callbacks `onApprove`, `onAsk`, `onReject` (ou `*Href`).

## Faça
- Separe diagnóstico, mão de obra e peças: o cliente vê o que paga.
- Diga na `note` quem processa o pagamento: "Pagamento processado pela RBX depois da aprovação."

## Não faça
- Não esconda a recusa: ela fica visível, como ação `ghost`.
- Não mostre total sem itens.

## Estados
Aguardando aprovação (com ações), aprovado (sem ações, carimbo `aprovado`), vencido (Alert `warn` acima, ações desabilitadas).
