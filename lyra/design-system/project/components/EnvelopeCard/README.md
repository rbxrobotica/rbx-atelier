# EnvelopeCard

Cartão do envelope de uma edição: ID, versão, hash curto e tipo em `data-s`, manchete genérica em `title-2`, rodapé com o estado da verificação. É o que chega pelo sinal; o conteúdo da edição só aparece depois da verificação.

- O consumidor fornece: ID, versão, hash, tipo, manchete genérica e o estado: verificado, verificando, recuperando, bloqueado por plano ou falha na verificação.
- Selecionado: borda `vega`. Falha: borda `err`, selo com ícone e a ação Baixar de novo. Bloqueado: selo Pro, manchete em `ink-2` e link Conhecer o Pro.
- A manchete do envelope é sempre genérica. Nenhum dado de perfil entra aqui.
