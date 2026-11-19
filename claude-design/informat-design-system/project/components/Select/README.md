# Select

Lista de opções nativa (`<select>`) com rótulo, orientação, erro e chevron desenhado; fica acessível pelo teclado e pelo leitor de tela sem truques.

## Quando usar
- Mais de quatro opções mutuamente exclusivas: tipo de equipamento, sistema atual, faixa de horário.
- Até quatro opções com explicação: prefira ChoiceCard.

## O que você fornece
- `label`, `options` (`{ value, label }`), `placeholder` como primeira linha desabilitada ("Escolha o tipo de equipamento").
- `hint`, `error`, `optional` como no TextField.

## Faça
- Ordene as opções pela frequência esperada e termine com "Outro".

## Não faça
- Não use Select para sim ou não.
- Não esconda uma opção importante (como "Não sei") fora da lista.

## Estados
Repouso, foco, erro e desabilitado iguais ao TextField.
