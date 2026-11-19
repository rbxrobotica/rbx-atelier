# Alert

Aviso dentro da página: informação, sucesso, atenção ou erro, com título e próximo passo.

Use para estados que o usuário precisa ler antes de seguir: anúncio em revisão, recusado com motivo, fotos faltando, falha de envio. Para confirmação passageira use `Toast`.

**Props:** `tone` (`info`, `ok`, `warn`, `err`), `title`, `children`, `action` (botões), `onClose`.

**Texto:** o título diz o que aconteceu; o corpo diz o que fazer. "Anúncio recusado" + "O preço informado não corresponde ao item. Ajuste e envie de novo."

`err` usa `role="alert"`; os outros, `role="status"`.
