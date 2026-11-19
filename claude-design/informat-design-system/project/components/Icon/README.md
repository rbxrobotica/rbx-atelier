# Icon

Ícones de traço do Informat em grade de 24, traço de 1.75 e cantos arredondados, desenhados para o atendimento técnico.

## Quando usar
- Ao lado de uma palavra: status, botões, itens de lista, contato. O ícone reforça; a palavra informa.
- Sozinho só em botões de ícone (fechar, menu), sempre com `aria-label` no botão.

## O que você fornece
- `name`: um dos nomes de `IconName` (veja a grade da prévia). `size`: 16, 20 ou 24 (tokens `icon-s`, `icon-m`, `icon-l`).
- `label` só quando o ícone carrega sentido sozinho; sem `label` ele é decorativo (`aria-hidden`).
- A cor vem de `currentColor`: pinte o elemento pai (`color: var(--placa)`).

## Faça
- Use `search` para Em diagnóstico, `hourglass` para Aguardando aprovação, `wrench` para Em execução, `package` para Pronto para entrega, `check-circle` para Entregue, `x-circle` para Cancelado.
- Use `video` para remoto e `home` para presencial, sempre com a palavra.

## Não faça
- Não use ícone como única indicação de status, erro ou sucesso.
- Não misture com outros conjuntos de ícones nem com emoji.
- Não use pinguim nem logotipos de distribuições: para Linux use `terminal` ou `server`.

## Estados
Herda a cor do pai. Em botão desabilitado, fica em `ink-3` com o rótulo.
