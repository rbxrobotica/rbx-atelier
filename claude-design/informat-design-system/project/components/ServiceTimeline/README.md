# ServiceTimeline

Linha do tempo das cinco etapas do atendimento, desenhada como trilha de placa: etapa concluída é um ponto `placa` com check, a atual é uma via de cobre, as próximas são anéis vazios ligados por trilha tracejada.

## Quando usar
- Vertical no Acompanhamento e na lateral da OS; horizontal em cabeçalhos largos. Abaixo de 768 px a horizontal vira vertical sozinha.
- `mode="explain"` para explicar o processo antes de existir uma OS (Início, "Como funciona"; etapas típicas na página de serviço): todas as etapas viram vias de cobre ligadas por trilha contínua, só com o número, sem estado.

## O que você fornece
- `current` (0 a 4) para usar as cinco etapas padrão, ou `stages` com `title`, `description`, `time` e `state`.
- `time` com data e hora reais ou "[DATA] · [HORA]".

## Faça
- Escreva a descrição do que acontece na etapa, do ponto de vista do cliente.
- Combine com StatusBadge no cabeçalho: a linha do tempo mostra a etapa, o carimbo mostra o estado.

## Não faça
- Não acrescente etapas internas da oficina; a linha é do cliente.
- Não remova a palavra do estado ("01 · Concluída", "03 · Etapa atual", "04 · A seguir").

## Estados
Concluída, atual (`aria-current="step"`), a seguir; no modo `explain`, etapa neutra.
