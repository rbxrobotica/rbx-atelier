## Marca em uma frase

**Informat: assistência técnica e consultoria Linux que mostra o diagnóstico e o orçamento antes de mexer no seu computador.**

Trate a **ordem de serviço (OS)** como o objeto central da marca. Toda tela do atendimento parte de uma OS numerada (`OS-0427`), com carimbo de status, ficha técnica e etapas visíveis. A paleta vem de uma placa de circuito: `placa` (máscara de solda verde), `cobre` (trilhas e vias), `serigrafia` (as marcações brancas). Use o motivo de trilhas com vias com parcimônia: capa, estados vazios, divisórias de seção, nunca atrás de texto.

O Informat é uma marca endossada pela RBX: escreva "um produto RBX" no rodapé e no momento de login, em texto pequeno. Nunca coloque o logotipo da RBX ao lado do logotipo do Informat.

## Voz e tom

Fale como um técnico competente que explica antes de agir: claro, cuidadoso com o equipamento e com os dados, honesto sobre limites. "Não compensa consertar" é uma resposta válida e deve aparecer quando for verdade.

- Trate o cliente por **você**. Use frases curtas, verbos concretos, caixa de frase em títulos e botões.
- Explique em linguagem simples primeiro; ofereça o detalhe técnico recolhido ("Ver detalhes técnicos") para quem quiser.
- Escreva processo, nunca superlativo: "Você aprova o escopo antes de qualquer serviço", não "o melhor atendimento da cidade".
- Não use exclamação, emoji, gíria técnica sem explicação, nem urgência artificial.
- Nunca invente preço, prazo, garantia, cidade, horário, depoimento ou certificação: escreva `[PREÇO]`, `[PRAZO]`, `[GARANTIA]`, `[CIDADE]`, `[HORÁRIO]` e marque na interface com a classe `inf-ph`.
- Marque toda hipótese comercial com a etiqueta **Hipótese** (`inf-tag`), por exemplo o atendimento remoto.

Exemplos aprovados:

| Onde | Texto |
| --- | --- |
| Título do hero | Diagnóstico antes do orçamento. Orçamento antes do conserto. |
| Apoio do hero | Formatação, reparo de notebooks e computadores e consultoria em Linux. Você aprova cada passo e o combinado sobre os seus dados fica registrado. |
| Chamada | Solicitar atendimento |
| Título de seção | Como funciona o atendimento |
| Botões | Aprovar escopo · Tirar dúvida · Recusar · Enviar solicitação · Ver detalhes técnicos |
| Dica de campo | Conte quando começou, o que aparece na tela e o que você já tentou. |
| Erro | Confira a etiqueta: o número tem letras e números, sem espaços. |
| Sucesso | Escopo aprovado. A OS-0427 foi para Aprovado. |
| Estado vazio | Nenhuma OS aberta ainda |
| Atendimento (mensagem) | Olá, [NOME]. Terminamos o diagnóstico da OS-0427: o disco tem setores com defeito e deve ser trocado. O orçamento está no link, válido até [PRAZO]. Nada será feito antes da sua aprovação. |
| Atendimento (limite) | Pelo que encontramos, o conserto custaria mais do que o equipamento vale. Recomendamos não seguir. Se houver taxa de diagnóstico, ela já está no orçamento: [VALOR]. |

## Fundamentos visuais

### Cor
- Fundo da página em `base`; cartões, formulários e a folha da OS em `surface`; áreas rebaixadas (linhas de especificação, trilho da linha do tempo, campo desabilitado) em `sunken`.
- Texto principal em `ink`; secundário em `ink-2`; metadados em `ink-3`, nunca abaixo de 14 px. Rótulos mono de 12 px usam `ink-2`.
- `placa` é a cor da marca e da ação: botão primário (texto `on-placa`), links, foco. `placa-strong` no hover. `placa-soft` para seleção e item ativo.
- `mascara` é a placa vista de cima: faixas de marca (hero, capa, anúncio), o quadro do símbolo e o ícone de app. Não muda com o tema. Sobre ela, texto em `serigrafia` e trilhas em `cobre-via`.
- `cobre` é decorativo: vias, trilhas, o anel do i, a etapa atual da linha do tempo. Como texto, só `cobre-ink` (o número da OS no OsHeader, a numeração das frentes).
- Status por famílias: `info` em andamento, `warn` espera o cliente, `ok` concluído, `err` falha ou cancelado. Cada uma tem seu fundo `-soft`. Status sempre leva ícone e palavra.
- Bordas de controles em `field` (3:1 ou mais); divisórias e contornos de cartão em `line`.
- Tema escuro: os mesmos nomes trocam de valor; escreva sempre o nome do token, nunca o hex.

### Tipografia
- Uma família para tudo que se lê: **Atkinson Hyperlegible Next** (Google Fonts, SIL OFL 1.1). Display em 800, títulos em 700, corpo em 400, ênfase e botões em 600.
- **Atkinson Hyperlegible Mono** para tudo que é registro da OS: número (`os-number`), série e especificação (`spec`), rótulos e carimbos em caixa alta com +0.06em (`label`).
- Escala: `display-xl` 56/60 (no celular `display-xl-mobile` 36/40), `display-l` 40/46, `title-1` 30/36, `title-2` 22/28, `body-l` 18/28, `body` 16/24, `small` 14/20, `label` 12/16, `os-number` 15/20, `spec` 14/20. Os números também existem como variáveis (`fs-*`, `lh-*`, `ls-*`, `fw-*`).
- Parágrafos com até `text-max` (68ch). Nada abaixo de 12 px; texto corrido nunca abaixo de 14 px.

### Espaço, grid e layout
- Base 4 px: `space-1` a `space-24`. Padding de cartão `space-6`; entre campos `space-6`; entre seções `space-20` no desktop e `space-16` no celular.
- Conteúdo com largura máxima `content-max` (1200 px), margem lateral `space-12` no desktop e `space-4` no celular.
- Grades fluidas com `repeat(auto-fit, minmax(min(100%, var(--card-min)), 1fr))`: as telas se ajustam sem trocar de layout. Os breakpoints (`bp-m` 768 px) só trocam a escala do hero e a NavBar.

### Raios, bordas e elevação
- Quase reto, técnico: `radius-s` 4 px (carimbos, checkbox), `radius-m` 8 px (botões, campos, alertas), `radius-l` 12 px (cartões, folha da OS, diálogos, símbolo). `radius-pill` só para barras de progresso e nós da linha do tempo; botão nunca é pílula.
- Bordas de 1 px (`border-hair`) em repouso; 2 px (`border-strong`) para erro, seleção e foco. Separadores internos da OS e do orçamento são tracejados em `line`, como uma ficha impressa.
- Elevação mínima: prefira borda `line`. `shadow-1` só para a folha da OS quando ela flutua sobre `base`; `shadow-2` para Dialog, menu e Toast.

### Movimento
- `duration-fast` (120 ms) para hover e cor; `duration-base` (200 ms) para abrir diálogo, menu e Toast. Curva única `ease-standard`, sem rebote. Com `prefers-reduced-motion`, nada se move.

### Estados
- Hover escurece um passo (`placa-strong`, `sunken`). Foco é sempre o mesmo anel: contorno sólido de 2 px em `focus`, 2 px de afastamento. Desabilitado: fundo `sunken`, texto `ink-3`. Erro: borda de 2 px `err` mais ícone e mensagem. Carregando: Skeleton no formato do conteúdo ou `loading` no Button.

### Imagem
- Fotografe o equipamento real na bancada: luz neutra, vista de cima ou a 45 graus, mãos quando houver ação, fundo `base` ou madeira clara. Cubra números de série, telas com dados pessoais e etiquetas de patrimônio.
- Não use banco de imagem com técnico sorrindo, telas falsas com código, nem ilustração de mascote. A única ilustração da marca é o padrão de trilhas (grupo Padroes).

## Iconografia

- Use apenas o conjunto do grupo **Icones** (38 ícones de traço, grade 24, traço 1.75, pontas e cantos arredondados), pelo componente `Icon` ou pelos SVG. Os SVG do grupo têm tinta fixa `#111A15` (`ink` claro); em código, prefira `Icon`, que usa `currentColor`.
- Tamanhos: `icon-s` 16 em carimbos e texto `small`, `icon-m` 20 em botões e campos, `icon-l` 24 em cartões e estados vazios.
- Para Linux use `terminal` ou `server`; não use pinguim nem logotipos de distribuições.
- Mapa fixo de status: `file-text` Solicitado, `search` Em diagnóstico, `hourglass` Aguardando aprovação, `check` Aprovado, `wrench` Em execução, `package` Pronto para entrega, `check-circle` Entregue, `x-circle` Cancelado.
- Nunca use emoji.

## Componentes

Carregue `components/bundle.css` e `components/bundle.js` depois dos tokens e do React 18; os componentes ficam em `window.Informat`.

- **Ações:** `Button` (`primary` uma vez por vista; `secondary`; `ghost`; `danger` só dentro de confirmação).
- **Formulários:** `TextField`, `Select`, `ChoiceCard` (presencial ou remoto, frente de serviço), `UploadField` (fotos do problema), `BackupAgreement` (combinado de dados antes de mexer no disco).
- **Ordem de serviço:** `OsHeader` (número, carimbo, ficha), `StatusBadge` (os oito estados), `ServiceTimeline` (as cinco etapas), `QuoteSummary` (orçamento com Aprovar escopo, Tirar dúvida, Recusar), `Checklist` (testes de entrega ou escopo a aprovar).
- **Conteúdo:** `ServiceCard` (as três frentes, sempre juntas e em ordem), `EmptyState`.
- **Feedback:** `Alert` (no conteúdo), `Toast` (passageiro), `Skeleton` (carregando), `Dialog` (decisão).
- **Navegação e marca:** `NavBar`, `SiteFooter` (com "um produto RBX"), `Logo`, `Icon`.

Monte as telas nesta ordem: NavBar, OsHeader quando houver OS, conteúdo, uma única chamada `primary`, SiteFooter. Use as classes utilitárias `inf-label` (rótulo mono), `inf-tag` (Hipótese), `inf-ph` (dado pendente) e `inf-link`.

## Acessibilidade

Contraste medido (WCAG 2) nos dois temas; a tabela completa está no Guia de implementação.

| texto ou marca | fundo | claro | escuro |
| --- | --- | --- | --- |
| `ink` | `base` / `surface` | 16.34 / 17.76 | 15.97 / 14.86 |
| `ink-2` | `surface` / `sunken` | 9.27 / 7.76 | 9.65 / 10.76 |
| `ink-3` | `surface` / `sunken` | 6.38 / 5.34 | 6.40 / 7.13 |
| `on-placa` | `placa` | 7.75 | 10.06 |
| `placa` (link) | `surface` / `placa-soft` | 7.75 / 6.60 | 9.36 / 7.66 |
| `serigrafia` | `mascara` | 7.37 | 6.78 |
| `cobre-ink` | `surface` / `cobre-soft` | 6.83 / 5.65 | 9.85 / 8.27 |
| `warn` | `warn-soft` | 5.28 | 7.85 |
| `ok` | `ok-soft` | 5.62 | 7.97 |
| `err` | `err-soft` | 6.32 | 6.80 |
| `cobre` (marca gráfica) | `surface` | 4.34 | 7.40 |
| `cobre-via` (marca gráfica) | `mascara` | 3.30 | 3.30 |
| `field` (borda de controle) | `surface` | 3.74 | 3.84 |
| `focus` (anel) | `base` / `sunken` | 7.13 / 6.49 | 10.06 / 10.43 |

- Mantenha texto em 4.5:1 ou mais (3:1 a partir de 24 px ou 19 px em negrito); bordas de controle, anel de foco e ícones com sentido em 3:1 ou mais.
- Alvos de toque com 44 px ou mais (`control-m`). Botões são `<button>` ou `<a>`; campos têm `<label>`; grupos de rádio são `<fieldset>` com `<legend>`.
- Teclado: tudo alcançável com Tab, na ordem visual. Dialog prende o foco, fecha com Escape e devolve o foco a quem abriu. O menu móvel usa `aria-expanded` e `aria-controls`.
- Foco visível em tudo: anel sólido de 2 px em `focus` com 2 px de afastamento; dentro do Toast, o anel usa `surface`.
- Status nunca só por cor: `ok` e `placa` são verdes próximos e por isso todo status leva ícone e palavra.
- Erros dizem o que fazer e são ligados ao campo por `aria-describedby`; uploads e envios anunciam progresso com `role="progressbar"` e `role="status"`.

## Integração com a plataforma RBX

- O site público fica no domínio da marca (`[dominio-informat]`, a definir). A área logada fica em `app.merovelis.com/informat`.
- Login: sempre pela conta RBX (RBX Identity, `auth.merovelis.com`). Escreva "Entrar com sua conta RBX" e mostre "um produto RBX" nesse momento. Não desenhe tela de senha própria.
- Pagamento: RBX Commerce. Escreva "Pagamento processado pela RBX" no orçamento e na aprovação; não desenhe formulário de cartão.
- Mensagens e avisos de etapa: RBX Comms. Escreva "Mensagens enviadas pela central RBX" no acompanhamento.
- O mapa completo de cada momento da jornada para cada serviço está no Guia de implementação.
