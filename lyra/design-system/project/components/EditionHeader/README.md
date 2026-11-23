# EditionHeader

Cabeçalho fixo da edição aberta: ID, versão e hash em `data`, selo de verificação, data de publicação e o botão Premissas que abre o painel.

- O consumidor fornece: os campos do envelope, o resultado da verificação e o estado do painel.
- Com falha de verificação, o cabeçalho mostra o selo em `err` e a leitura não é renderizada.
