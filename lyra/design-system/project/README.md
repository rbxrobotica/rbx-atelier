Lyra by Merovelis é o briefing econômico diário para quem opera logística. Traduz diesel, câmbio, piso mínimo de frete, safra e eventos em portos e rodovias em impacto estimado de custo para um perfil declarado. Cada edição tem três blocos, sempre nesta ordem e com estes títulos: "O que mudou", "Quanto custa para o seu perfil" e "O que observar", com as premissas visíveis. Versão 0.1.0, proposta para revisão do owner em 2026-10-30. Espelho local em `rbx-atelier/design-systems/lyra/` (variáveis com prefixo `--ly-`, mesmos nomes).

## Como usar este sistema

- Leia os tokens pelos nomes. Toda cor sai de `bg`, `surface`, `sunken`, `raised`, `ink`, `ink-2`, `ink-3`, `line`, `line-strong`, `field`, `vega`, `vega-strong`, `vega-soft`, `on-vega`, `ok`, `warn`, `err` e seus `-soft`. Não use cor literal em componente.
- Os dois temas usam os mesmos nomes. `light` (Papel) é o padrão; `dark` (Noite) entra por `prefers-color-scheme` ou por `data-theme="dark"`. Cada nota de uso diz sobre quais fundos a cor é legível; todos os pares medem 4,5:1 ou mais para texto e 3:1 ou mais para borda e foco, nos dois temas.
- Os componentes desta versão são markup com classes `ly-` e CSS puro. Não há bundle nem namespace JavaScript. Copie o markup da prévia e o CSS do espelho local (`ui-kit/web-seca.html`).
- Conteúdo de exemplo é sintético: "Frota Norte (exemplo)", rota Sorriso MT a Santos SP, preços e filas ilustrativos.

## Voz

Siga `rbx-atelier/brand-voice/rbx-voice-system.md`, registro R3 (interface) e R5 (edições).

- Sem exclamação, emoji, travessão ou seta em qualquer superfície. Use ponto, vírgula e ponto médio.
- Erros dizem a causa e a próxima ação: "Falha na verificação da edição LYR-2026-10-29-D. O conteúdo recebido não confere com o hash 7c2e91b4 registrado no envelope. O conteúdo não foi exibido. Baixar de novo."
- A interface nunca cita o protocolo interno de sinal. Os estados são "Conectando", "Sincronizado", "Recuperando o que perdeu" e "Offline, lendo do cache".
- Toda estimativa mostra premissas e fontes. O aviso de estimativa é obrigatório no bloco 2 e no painel de premissas, com este texto: "Estimativa, não medição. Calculada a partir do seu perfil declarado e de médias públicas do dia anterior. Não substitui o custo real da sua operação nem constitui recomendação."
- Números exatos, calculados de forma determinística. O texto é redigido a partir deles e nunca os altera. Variação de custo leva sinal no número, em `data`, nunca verde ou vermelho.
- Nada de recomendação de investimento, promessa de retorno ou claim de Strategos. Nada do vocabulário banido pelo voice system nem superlativo.

## Marca

A constelação de Lyra que é também uma lira. Quatro estrelas formam o paralelogramo, corpo do instrumento; duas cordas o atravessam; Vega, a quinta e mais brilhante, é o único ponto em cor e fica acima, ligada ao corpo. Leitura: muitas variáveis soltas viram uma leitura afinada.

- Use os arquivos de `assets/Marca/`, nunca redesenhe o símbolo. Só Vega leva `vega`; o resto fica em `ink` do tema. Não recolorir, não girar, não acrescentar brilho nem degradê.
- Wordmark "Lyra" em `display` (Fraunces 600, tracking -0,01 em). Assinatura "by Merovelis" em Public Sans 600, caixa alta, tracking 0,15 em, em `ink-2`. Os lockups têm texto SVG: converta em contornos antes de imprimir.
- Tamanho mínimo: símbolo 20 px; lockup completo 240 px de largura. Abaixo disso use símbolo e wordmark, como na barra de marca do app (símbolo 24 px, wordmark 20 px, assinatura 9,5 px), ou o símbolo sozinho.
- Área de respiro: metade da altura do símbolo em todos os lados.
- Ícone de app: `lyra-app-icon.svg`, símbolo do tema noite sobre `#15161b`, raio `radius-m` proporcional (7 em 32).

## Cor

- `vega` é a única cor de ação: link, botão primário, item selecionado, data da edição não lida e anel de foco. No tema noite ela clareia e o rótulo sobre ela passa a `on-vega` escuro.
- `ok`, `warn` e `err` são estado, nunca cromo, e nunca aparecem sem palavra ou ícone. Conexão: conectando em `ink-3` com ponto vazado; sincronizado em `ok`; recuperando o que perdeu em `warn` com barra de progresso; offline com cache em `err` com a ação "Tentar reconectar". Falha de verificação de hash em `err` com ícone.
- `line` é divisor e borda de cartão. Borda de campo, seleção, botão secundário e trilho de interruptor são sempre `field`.
- Fundos: `bg` na página, `surface` em envelope, painel, barra de estado e formulário, `sunken` na lista de edições, no cabeçalho de tabela e no bloqueio por plano, `raised` só em hover.
- Foco visível: `focus-ring` (alias de `vega`), 2 px sólido com 2 px de afastamento, em todo controle.

## Tipografia

- `display`, `title-1` e `title-2` em Fraunces: wordmark, título da edição, manchete do envelope e títulos dos três blocos. Nada mais em serifa.
- `body` e `body-s` em Public Sans para tudo que se lê e se opera. `label` em caixa alta, `ink-3`, só em cabeçalho de dia, de coluna e de tabela.
- `data`, `data-s` e `number` em Source Code Pro com algarismos tabulares, para tudo que vem do envelope ou do cálculo: carimbo de hora, ID, versão, hash, valores e tabela de impacto.
- As três famílias são OFL e estão no Google Fonts. Em produção, sirva pelo próprio domínio.

## Espaço, raio, sombra e movimento

- Base de 4 px. A web seca usa `space-1` a `space-5`; a etapa por dispositivo usa a escala toda.
- Web seca: `radius-xs` em botão, campo e selo; `radius-s` em cartão, aviso e grupo. Sem sombra. Linhas de 32 px (`row`).
- Etapa por dispositivo: `radius-m` em cartão e folha, `shadow-1` em cartão, `shadow-2` só em folha ou menu, alvo de toque de 44 px.
- Movimento: `dur-fast` em hover, `dur` em troca de estado e abertura de painel, `dur-slow` em folha mobile, sempre com `ease`. Com `prefers-reduced-motion`, 0 ms.

## Layout da web seca

Três colunas: lista de edições (`sidebar`, fundo `sunken`), fluxo cronológico (até `flow-max`, com carimbo de hora em toda linha) e painel de premissas (`panel`, abre sob demanda). O envelope chega antes do conteúdo e só vira leitura depois da verificação do hash. A leitura mantém os três blocos na ordem fixa; o bloco 2 leva o selo Estimativa e a tabela de impacto.

## Iconografia

Ícones são SVG inline de traço, 16 px, `stroke-width` 1,75, `currentColor`: check, cadeado, alerta, x em círculo, informação, atualizar, painel, engrenagem, chevron, busca, relógio. Sem emoji. Um ícone nunca é o único sinal de um estado.

## Evitar

Degradê, brilho, sombra na web seca, cartão com barra colorida à esquerda, verde para alta e vermelho para baixa, pill em botão, texto branco literal sobre `vega`, ícone sem palavra, qualquer menção a protocolo interno na interface, qualquer conteúdo de cliente real em exemplo.
