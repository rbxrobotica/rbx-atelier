# Dialog

Diálogo modal com `role="dialog"`, `aria-modal="true"`, título ligado por `aria-labelledby`, foco preso dentro dele e fechamento por Escape.

## Quando usar
- Confirmar uma decisão que muda a OS: recusar orçamento, cancelar atendimento, seguir sem backup.
- Mostrar um detalhe técnico longo sem sair da tela (`size="l"`).

## O que você fornece
- `open`, `onClose`, `title` (pergunta direta: "Recusar o orçamento?"), `description` (consequência), `footer` com os botões, a ação principal por último.
- `role="alertdialog"` em confirmações destrutivas; `inline` só para documentação e canvas.

## Faça
- Diga o que acontece depois: "A OS-0427 fica como Cancelado".
- Use `danger` no botão que confirma a perda; o outro botão é "Voltar", nunca "Cancelar" (ambíguo).

## Não faça
- Não abra diálogo sobre diálogo.
- Não use para avisos que não pedem decisão.

## Estados
Fechado (não renderiza), aberto (véu `scrim`, painel `surface` com `shadow-2`, entrada em `duration-base`, sem animação com movimento reduzido).
