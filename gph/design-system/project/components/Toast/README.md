# Toast

Confirmação passageira de uma ação: mensagem enviada, anúncio salvo, rascunho guardado.

Aparece no canto inferior por 5 segundos, com ação opcional ("Desfazer", "Ver"). Nunca use para erros que exigem correção (use `Alert`).

**Props:** `tone` (`ok`, `info`, `warn`, `err`), `children`, `action`, `onClose`.

Usa `role="status"` e `aria-live="polite"`.
