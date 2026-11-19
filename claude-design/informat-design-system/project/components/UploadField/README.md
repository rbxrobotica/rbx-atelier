# UploadField

Campo de envio de fotos do problema: área de soltar que é um `<label>` do `<input type="file">`, com lista de arquivos, progresso, erro e remoção.

## Quando usar
- Na Solicitação de atendimento (fotos da tela, da etiqueta, do dano). Sempre opcional.

## O que você fornece
- `label` ("Fotos do problema"), `hint` dizendo o que fotografar, `optional`, `files` com `name`, `size`, `status` e `progress`, `onSelect` e `onRemove`.
- Limites de quantidade e tamanho são decisão de implementação: escreva-os no `hint` quando existirem.

## Faça
- Explique o porquê: "Ajudam no diagnóstico, mas são opcionais."
- Mantenha o envio em segundo plano: o cliente segue preenchendo.

## Não faça
- Não bloqueie o envio da solicitação por falta de foto.
- Não mostre só "Erro": diga o formato aceito.

## Estados
Vazio, arrastando (`placa-soft`), enviando (barra de progresso com `role="progressbar"`), enviada (ícone `ok`), falhou (borda `err` e motivo), foco (anel na área).
