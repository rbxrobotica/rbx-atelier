# FlowLine

Linha do fluxo cronológico: carimbo de hora em `data-s` numa coluna de 44 px e o conteúdo ao lado (envelope, aviso ou mensagem de sistema). Cabeçalhos de dia em `label` com divisor.

- O consumidor fornece: o horário local e o conteúdo da linha.
- Ordem cronológica, mais recente embaixo. Toda linha tem carimbo; nenhum item aparece sem hora.
- Mensagens de sistema ficam em `ink-2`, com valores em `data`.
