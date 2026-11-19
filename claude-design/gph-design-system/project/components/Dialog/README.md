# Dialog

Diálogo modal para contato com quem anuncia, confirmações e decisões curtas.

Use para uma tarefa curta que precisa de foco: enviar mensagem, confirmar exclusão, marcar como vendido. Nunca para conteúdo longo ou formulários de várias etapas.

**Props:** `open`, `title`, `description`, `children`, `actions` (botões, o primário por último), `onClose` (mostra o botão Fechar e fecha com Esc), `size` (`s`, `m`, `l`), `alert` (vira `alertdialog`, para ações destrutivas), `inline` (sem posição fixa, para documentação e telas estáticas).

O diálogo tem `role="dialog"`, `aria-modal`, título ligado por `aria-labelledby`. O véu usa `scrim`.
