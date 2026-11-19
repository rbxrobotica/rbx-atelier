# OsHeader

Cabeçalho da ordem de serviço: rótulo "Ordem de serviço", número em mono cor de cobre (OS-0427), carimbo de status grande, título com o equipamento e a ficha técnica.

## Quando usar
- No topo de Diagnóstico e orçamento, Aprovação do escopo, Acompanhamento e Entrega. É o objeto central da marca: cada tela do atendimento parte dele.

## O que você fornece
- `osNumber` sempre no formato OS-0000, `status`, `title` com o problema nas palavras do cliente ("Notebook que desliga sozinho"), `meta` (`label`, `value`, `mono` para série e modelo).
- `headingLevel` 1 quando é o título da página.

## Faça
- Mantenha de três a cinco itens na ficha: Aberta em, Equipamento, Atendimento, Série.

## Não faça
- Não mude o formato do número (nada de "#427" ou "Pedido 427").
- Não use o cobre do número em outros textos da tela.

## Estados
Segue o StatusBadge. A ficha quebra em colunas automáticas e vira uma coluna no celular.
