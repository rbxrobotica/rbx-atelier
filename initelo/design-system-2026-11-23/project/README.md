# Initelo — Design System

A **Initelo** (initelo.com) é uma plataforma educacional brasileira. O primeiro curso é **“Finanças pessoais com IA”**: ensina o aluno a usar IA para lidar com situações financeiras do dia a dia — formular perguntas, comparar cenários, revisar hipóteses —, conferir os resultados e tomar as próprias decisões. A marca precisa abrigar futuras formações em outros temas. Produto: plataforma web de cursos (desktop e mobile), toda em português do Brasil.

**Fontes recebidas:** apenas o briefing escrito. Não havia identidade, código, Figma nem logotipo. Tudo aqui foi criado do zero e **toda decisão de marca está marcada como PROPOSTA** (nome de cor, logotipo, tipografia, tom) até validação do fundador. Todos os dados de exemplo são fictícios.

O sistema se organiza em três seções na aba Design System:

1. **Initelo — Brand System** — posicionamento, tom de voz, direções visuais, assinatura, paleta, tipografia, iconografia, ilustração, gráficos, materiais didáticos e identidade de curso (`guidelines/brand/`).
2. **Initelo — Design System** — tokens semânticos, layout responsivo, formatos de valores e datas, contraste, foco e componentes (`guidelines/system/`, `components/`).
3. **Jornada do primeiro curso** — três telas em desktop e mobile (`ui_kits/plataforma/`).

---

## CONTENT FUNDAMENTALS (PROPOSTA)

**Promessa:** “Você pergunta, confere e decide.” · **Assinatura:** “Pergunte melhor. Confira sempre. Decida você.”

**Princípio central:** a IA é ferramenta; quem decide é o aluno. Nenhum texto sugere que a IA resolve, cuida ou decide.

**Tom — quatro traços**
- **Claro:** uma ideia por frase; palavras do dia a dia; termo técnico só com explicação.
- **Adulto:** sem infantilizar, sem promessa de enriquecer, sem urgência artificial.
- **Próximo:** tratamento por “você”; exemplos de vida real (aluguel, conta de luz, fatura do cartão).
- **Honesto sobre a IA:** ela ajuda a pensar e também erra; mostramos como conferir.

**Regras de escrita**
- Português do Brasil, acentuação correta, sempre.
- Caixa normal em títulos, botões e rótulos (só a primeira letra maiúscula). Caixa alta apenas em sobrelinhas curtas.
- Botões começam com verbo no infinitivo e dizem o destino: “Começar pelo módulo 1”, “Registrar minha decisão”, “Usar esta pergunta”.
- Instruções em passos numerados, um verbo por passo; a decisão é sempre o último passo.
- Sem emoji. Sem ponto de exclamação em instruções. Sem “Ops!”.
- Erros dizem o que aconteceu e o que fazer: “A soma não confere. Refaça a soma antes de seguir.”
- Números no padrão brasileiro (ver “Valores e datas”).

**Exemplos**
- Página do curso: “Aprenda a usar a IA para organizar as contas do mês, comparar cenários e revisar suas hipóteses — conferindo cada resultado antes de decidir.”
- Instrução: “Compare a resposta com a sua tabela, linha por linha. Só então escreva o que você decide fazer com o saldo.”
- Conferência: “A IA faz contas rápido, mas não conhece a sua vida. Confira valores, contas e premissas. Se algo não conferir, corrija a pergunta e pergunte de novo. Errar a primeira pergunta faz parte.”
- Evite: “A IA calcula tudo para você!”, “Deixe a IA cuidar do seu dinheiro.”, “Rápido, fácil e sem esforço!”

**Valores e datas**
- Moeda: `R$ 1.234,56` — símbolo, espaço fixo, ponto de milhar, vírgula e dois centavos. Em colunas, algarismos tabulares alinhados à direita (`.ini-num`, componente `Money`).
- Datas: `dd/mm` em colunas (10/12); “vence dia 10” / “entra dia 5” em frases (sem zero à esquerda); “10 de dezembro de 2026” por extenso.
- Entrada: sinal “+”, seta para dentro, rótulo “Entrada”. Despesa: sinal “−” (U+2212), seta para fora, rótulo “Despesa”, texto neutro — **despesa nunca é vermelha** (vermelho é erro).
- Nunca transmitir informação só por cor: sempre texto e/ou ícone junto.

---

## VISUAL FOUNDATIONS (PROPOSTA)

**Direção escolhida: “Caderno”.** Papel quente, azul-tinta, grifo amarelo, serifa editorial. Foi preferida à direção “Lousa” (fundo escuro, giz, grade) por sustentar leitura longa e tabelas (clareza), lembrar material de estudo adulto e não app de banco ou produto de IA (maturidade) e usar gestos que todo aluno conhece — grifar, anotar, etiquetar (proximidade).

- **Cores.** Neutros quentes *Papel* (0–400) e *Grafite* (500–900); marca e ação em *Azul-tinta* (700 = primário); destaque *Grifo* (amarelo de marca-texto, só como fundo de trecho e nos pingos do logotipo); feedback em verde, âmbar, vermelho e azul, cada um com ícone. Uma cor dominante + um acento; nada de gradientes.
- **Cor de curso.** Cada formação tem número, uma cor (600/800/50) e um padrão de papel, aplicados via `[data-curso]`. *Finanças pessoais com IA* = verde-caderneta + pauta contábil. A cor de curso aparece em capa, faixa do card, selo, sobrelinhas e barra de progresso do curso — **nunca** em botões, links, foco ou feedback.
- **Tipografia.** *Newsreader* (títulos, logotipo, notas de margem em itálico), *Source Sans 3* (texto e interface, com algarismos tabulares), *IBM Plex Mono* (apenas o texto que o aluno digita para a IA). Corpo 17/1,6; títulos fluidos com `clamp()`. Todas cobrem ã õ ç é ê í ó ú à.
- **Fundos.** Papel liso (`--surface-page`). Padrões de papel (pauta, linhas, quadriculado, pontilhado) só em áreas de identidade de curso. Sem imagens full-bleed, sem texturas fotográficas, sem gradientes.
- **Espaçamento.** Base 4 px: 16 dentro de componentes, 24–32 entre blocos, 48–80 entre seções.
- **Cantos.** Discretos: 4 px em selos, 8 px em botões e campos, 12 px em cards. Pílula só em barras de progresso.
- **Cards.** Fundo branco, borda de 1 px (`--border-default`), raio 12, **sem sombra** em repouso; hover escurece a borda e aplica `--shadow-2`. Nunca borda colorida só à esquerda.
- **Bordas.** Sutil (divisórias), padrão (contornos), forte (controles, ≥ 3:1). Tracejada em sugestões de pergunta, estados vazios e no selo “Proposta”.
- **Sombras.** Interface plana. `--shadow-1` para barras fixas, `--shadow-2` para hover/menus, `--shadow-3` para folhas e diálogos. Sem sombra interna.
- **Hover.** Escurece (primário 700→800), ou recebe fundo `--action-ghost-hover`/`--action-secondary-hover`. Sem mudança de tamanho, sem opacidade.
- **Pressionado.** Um tom mais escuro (900). Sem encolher.
- **Foco.** Anel de 3 px (`--focus-ring`, Tinta 500) com afastamento de 2 px em todo elemento interativo; em superfície inversa, Grifo 400. Sempre `:focus-visible`.
- **Movimento.** Curto e funcional: 120 ms (hover/foco), 200 ms (painéis), 320 ms (progresso), curva `--ease`. Só cor, opacidade e largura; sem quique; respeita “reduzir movimento”.
- **Transparência e desfoque.** Não usados. Sobreposições são superfícies opacas com sombra.
- **Layout.** Mobile primeiro; 4/8/12 colunas (<768 / 768–1023 / ≥1024); contêiner máx. 1200 px; leitura máx. 68ch; barra superior no fluxo (não flutua); no mobile, colunas laterais viram abas e a ação principal fica em barra inferior fixa. Alvos de toque ≥ 44 px.
- **Imagens.** Sem fotos por ora. Se houver: mesa, caderno, mãos, luz natural quente. Ilustração = o próprio material de estudo (linha do mês, tabela anotada, grifo, nota de margem). Sem personagens, robôs, moedas, cofrinhos, brilhos.
- **Gráficos.** Rótulo direto, valor escrito, eixo em zero, uma cor + um padrão (hachura), sem legenda separada.
- **Contraste.** Todos os pares de texto ≥ 4,5:1 e não texto ≥ 3:1 (card “Contraste — WCAG AA” calcula ao vivo).
- **Tema escuro — “Lamparina” (PROPOSTA).** O segundo tema, `escuro`, é o mesmo caderno aberto à noite: fundo de terra (`terra-900`), cards um tom acima (`terra-850`), texto na cor do papel (`papel-50` e `papel-200`), ação em azul-tinta clareado (`tinta-200`, com rótulo `tinta-900`) e o grifo em âmbar de lamparina (`grifo-900` atrás do texto, `grifo-400` no anel de foco). A referência é a aula noturna de adultos da pedagogia de Paulo Freire: chão de terra, luz quente, giz e papel. É uma referência de clima, não de imagem: não use retrato, citação nem iconografia dele.
  - Ative com `data-theme="escuro"` no `<html>`. Nas telas do kit, abra a página com `?tema=escuro`.
  - Use sempre os tokens semânticos (`surface-*`, `text-*`, `border-*`, `action-*`, `feedback-*`, `curso-*`, `logo-*`): são eles que mudam de valor entre os temas. As escalas (`papel-*`, `terra-*`, `tinta-*`…) têm o mesmo valor nos dois.
  - No escuro, a elevação vem do tom: página `terra-900`, card `terra-850`, hover `terra-800`, selecionado `terra-750`. Área rebaixada é mais escura (`terra-950`).
  - No escuro, hover clareia em vez de escurecer, e as cores de feedback e de curso usam o tom 300 como cor principal, com o 900 de fundo.
  - O logotipo no tom `clara` acompanha o tema (tinta no claro, papel no escuro). Use `escura` só sobre `surface-inverse` e `mono` em uma cor.
  - Conferido por cálculo: 96 pares por tema, texto ≥ 4,5:1 e bordas de controle, foco e ícones ≥ 3:1 nos dois temas. As páginas de `guidelines/` mostram só o tema claro.

---

## ICONOGRAPHY (PROPOSTA)

- **Biblioteca:** [Lucide](https://lucide.dev) via CDN (`lucide@0.469.0`), traço 1,75 px, cantos arredondados. Não há conjunto próprio; é uma **substituição/proposta** — se a marca adotar outro conjunto, troque apenas `components/core/Icon.jsx`.
- **Uso:** componente `Icon` (carrega a biblioteca sozinho). 16 px em selos, 20 px no texto, 24 px na navegação. Cor herdada do texto.
- **Regra:** o ícone reforça, o texto informa. Todo ícone com significado vem com rótulo.
- **Vocabulário:** `circle-check` concluído · `circle-dot` em andamento · `circle` disponível · `lock` bloqueada · `info` · `triangle-alert` atenção · `circle-alert` erro · `list-checks` conferir · `arrow-down-left` entrada · `arrow-up-right` despesa · `calendar` vencimento · `clock` duração · `message-circle` tutor de IA · `book-open` aula · `pencil-line` exercício.
- **Fora da marca:** robôs, brilhos/varinhas para “IA”; moedas, cofrinhos, cifrões e foguetes para “finanças”; emoji; caracteres unicode como ícone (exceção: “↳” nas notas de margem e os sinais + e −).
- **Logotipo:** não existe arquivo vetorial. A assinatura é tipográfica e renderizada em HTML/CSS pelo componente `Logo` (Newsreader + “pingos nos is”). Quando aprovada, deve ser convertida em curvas e salva em `assets/`.

---

## Índice

**Raiz**
- `styles.css` — ponto de entrada (só `@import`).
- `tokens.json` (gera `tokens.css`) — cores (base + semânticos), tipografia, espaçamento, raios, sombras, layout e foco; `components/bundle.css` — escopos `[data-curso]`, atalhos `--type-*`, movimento, grade responsiva e a base (reset mínimo, `.ini-num`, `.ini-grifo`, `.ini-container`, `[data-surface="inverse"]`); fontes do Google Fonts importadas por `styles.css`.
- `guidelines/brand/` — 22 cards do Brand System. `guidelines/system/` — 17 cards de tokens, formatos, contraste e foco. `guidelines/card.css` — estilos só dos cards.
- `components/` — componentes React por grupo (`components/<grupo>/*.jsx`) + CSS em `components/bundle.css`; guia, tipos e preview de cada um em `components/<Comp>/`.
- `ui_kits/plataforma/` — Jornada do primeiro curso (ver README da pasta).
- `thumbnail.html`, `assets/notes/SKILL.from-standalone.md`.

**Componentes**
- `core/` — `Icon`, `Logo`, `Button`, `IconButton`, `Badge`, `CourseSeal`
- `forms/` — `TextField`, `Select`, `Checkbox`, `Radio`
- `navigation/` — `TopNav`, `Breadcrumb`, `Tabs`, `LessonList`
- `cards/` — `CourseCard`, `LessonCard`, `EmptyState`
- `feedback/` — `Alert`, `ProgressBar`, `Stepper`, `Skeleton`, `Spinner`
- `finance/` — `Money`, `FlowTag`, `DueDate`, `BudgetTable`
- `tutor/` — `TutorPanel`, `TutorMessage`, `PromptSuggestion`, `VerifyChecklist`

Estados cobertos: padrão, hover, foco, desabilitado, erro, carregamento, vazio e concluído. Para demonstrar hover/foco de forma estática, passe `className="is-hover"` ou `"is-focus"`.

**Como criar um novo curso:** declare `[data-curso="chave"]` em `components/bundle.css` com `--curso-cor`, `--curso-cor-forte`, `--curso-cor-suave`, `--curso-linha`, `--curso-padrao` e `--curso-padrao-size`; confira AA; use `<CourseSeal curso="chave" number="02" …>`.

**Pendências conhecidas**
- Fontes servidas pelo Google Fonts (sem arquivos locais).
- Logotipo sem arquivo vetorial; cursos 02–04 são exemplos fictícios do sistema de identidade.
- Nome do fundador não informado: aparece como “Fundador da Initelo”.

## Arquivos do sistema

- **Valores.** `tokens.json` é a fonte, com dois temas (`claro` e `escuro`); `tokens.css` é gerado a partir dele. Na interface, use os tokens semânticos (`surface-*`, `text-*`, `border-*`, `action-*`, `focus-*`, `feedback-*`, `finance-*`, `curso-*`); as escalas (`papel-*`, `grafite-*`, `tinta-*`, `grifo-*`, feedback e cores de curso) são a base deles.
- **Tipografia.** Títulos e texto usam os atalhos `--type-*` com a propriedade `font` (`components/bundle.css`). Os estilos `type-*` de `tokens.json` registram os mesmos valores; nos títulos fluidos, o tamanho é o máximo do `clamp()`.
- **Componentes.** `components/bundle.js` define `window.IniteloDesignSystem_b8cd96` e espera React 18 na página; carregue `tokens.css` e depois `components/bundle.css`. Guia (`README.md`), tipos e preview de cada componente ficam em `components/<Comp>/`.
- **Páginas do projeto.** `guidelines/` e `ui_kits/plataforma/` carregam `styles.css`, que importa as fontes, `tokens.css` e `components/bundle.css`.
- **Contraste.** `text-disabled` fica abaixo de 4,5:1 e só aparece em controles desabilitados. `border-default` é contorno decorativo (cards, tabelas); campos e botões de ícone usam `border-strong` (≥ 3:1).
