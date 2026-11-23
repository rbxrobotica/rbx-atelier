Sistema de marca e interface do site institucional da RBX Systems (rbx.ia.br em pt-BR, rbxsystems.ch em inglês). Escuro por padrão, um único acento ciano, tipografia de interface sem ornamento e navegação em três faixas que mostram onde o leitor está. Valores vêm do `tokens.css` do site; o tema claro, a estrutura de header e as três direções de marca são propostas desta repaginada.

## Conteúdo

- Escreva institucional, claro e direto. Frases curtas, uma ideia por frase. Sem travessões, sem setas, sem emoji, sem exclamação.
- Fale da empresa como "a RBX" e do leitor como "você" só quando precisar. Prefira o concreto: "Uma prioridade por vez, com direção técnica e implementação."
- Números só com fonte verificável. Nada de métricas inventadas, depoimentos genéricos ou promessas de retorno.
- Títulos em caixa de frase: "Como a parceria funciona". Caixa alta só nos estilos `eyebrow` e `breadcrumb`.
- Cada texto nasce em pt-BR ou em inglês e ganha a outra variante antes de publicar; o mesmo slug vale para os dois idiomas.
- Exemplo real, abertura da home: "Para empresas com um produto em operação ou em piloto avançado. A RBX combina direção técnica e implementação para cuidar de uma prioridade por vez."

## Cor

- Escuro primeiro. `bg-0` é o chão da página e do header; `bg-1` para a faixa secundária, rodapé e superfícies planas; `bg-2` para cards, sempre com borda `border`; `bg-3` para hover de superfície e campos.
- Texto: `fg-0` em títulos, texto principal, item ativo e página atual; `fg-1` no corpo; `fg-2` em texto secundário, rótulos e itens de navegação em repouso. `fg-3` só em separadores e marcas decorativas, nunca em texto.
- Um acento. Use `cyan-brand` para o sublinhado de 1px do item ativo, o hover de links e o anel de foco `ring-focus`. Use `cyan-signal` só na marca e em gráficos. Use `cyan-muted` para texto de acento e `cyan-dim` para bordas de acento e o sublinhado da página atual do breadcrumb. `cyan-subtle` é tinta de fundo.
- Um único elemento preenchido por header: o CTA Contato em `cta` com texto `on-cta`. Todo o resto do header é texto e linhas.
- Estados `ok`, `warn`, `err` e `info` sempre acompanham palavra ou ícone; nunca comunicam só pela cor. Os fundos `*-subtle` levam o texto da cor correspondente.
- Tema claro (proposta). Mesmos nomes, valores por tema. Use-o em materiais institucionais, impressão e quando a página precisar conversar com bancos e reguladores. No claro, `cyan-brand` vale para linhas e marcas (3:1 sobre `bg-0`), nunca para texto pequeno: texto de acento usa `cyan-muted`.
- Nada de gradientes, vidro ou blur. O header legado usava `bg-nav-glass`; o novo é opaco em `bg-0` com uma borda `border` embaixo.

## Tipografia

- Inter para interface e leitura, JetBrains Mono para rótulos, breadcrumb, código e números tabulares. Ambas hospedadas no Google Fonts: Inter 300 a 700, JetBrains Mono 400 e 500. Ative `font-feature-settings: 'ss01', 'cv11', 'calt'` no Inter.
- H1 em `display`, um por página, largura máxima `prose-w`. Seções em `h2`, subseções em `h3`, cards em `h4`.
- Primeiro parágrafo sob o H1 em `lead` e `fg-0`; corpo em `body` e `fg-1`; metadados em `caption` e `fg-2`.
- `eyebrow` sempre em caixa alta com `track-label`, acima do H1 ou de um card. O mesmo estilo serve ao seletor de idioma PT / EN.
- `display-serif` (Newsreader) é alternativa institucional ao `display` para o H1, inspirada no contraste serifa no título e sem serifa no resto. Decida por página; nunca misture os dois na mesma página.
- `wordmark` (Archivo 700, largura expandida 125%) é só para o wordmark das direções B e C da marca. Não use Archivo em interface.

## Espaço, raio, borda e sombra

- Escala `s-1` a `s-10`. Padding de card em `s-5`, gap entre colunas e entre itens da navegação principal em `s-6`, espaço entre seções em `s-8`.
- Bordas de 1px em `border`, hover em `border-strong`. Superfícies planas não têm sombra; `shadow-overlay` só em modais, gavetas e menus flutuantes.
- Raios pequenos: `radius-sm` em botões, `radius-md` em cards e campos, `radius-lg` em modais. `radius-pill` só em chips e badges, nunca em itens de navegação.
- Foco: `ring-focus` sólido de 2px com `outline: none`, em todo elemento interativo.

## Movimento

- Durações 120ms para micro, 160ms padrão, 240ms para painéis. Curva `cubic-bezier(0.2, 0, 0, 1)`, saída `cubic-bezier(0.16, 1, 0.3, 1)`. Só cor, borda e opacidade transitam. Sem animação decorativa.

## Marca

- A marca da RBX é o bloco com dois chanfros opostos, `assets/Logos/marca-rbx-b2.svg`: um quadrado em `cyan-brand` com os cantos superior esquerdo e inferior direito cortados a 45°, cada corte com 46% do lado. O corte diagonal é o DNA herdado da marca anterior; a forma fechada é o que a torna legível a 12px e distinta na barra de abas.
- Lockup principal, empilhado: marca à esquerda, "RBX" em `wordmark` e "SYSTEMS" em `eyebrow` com espaçamento 0.2em abaixo, alinhados à esquerda, gap `s-3`. Header desktop: marca 28px, RBX 17px, SYSTEMS 9px. Header mobile: marca 24px e "RBX" 16px, sem SYSTEMS.
- Lockup horizontal, para rodapé, documentos e assinaturas: marca, "RBX" em `wordmark` e "Systems" em Inter 300 `fg-1`, na mesma linha de base.
- Favicon e ícone de app são sempre a marca, nunca uma letra: marca em `cyan-brand` sobre `bg-0` a 16px e 32px; ícone de app com fundo `cyan-brand` e marca em `on-cta`.
- Área de respiro de metade da altura da marca em todos os lados. Tamanho mínimo de 12px. Nunca gire, incline, aplique gradiente, sombra ou contorno, e nunca a coloque sobre fotografia.
- Sobre fundo claro use `cyan-brand` do tema claro (#0f8f8f). Em tinta única, como impressão ou gravação, use `fg-0` do tema em uso.
- Marca anterior (`rbx-mark-legado.svg`, disco com três cortes): aposentada em 8 de novembro de 2026 por colisão estrutural com a marca do Linear e por virar listra a 16px. Não use em nada novo; substitua onde ainda aparecer.
- Direções estudadas e descartadas, mantidas em `assets/Logos` só para registro: A Corte (disco com dois cortes, mesma colisão com o Linear), B Bloco (um chanfro, lia como chip SIM) e C Traço (X de dois traços, colide com X Corp, XTB, XM e com a SIX; o X isolado lê como botão de fechar). Não as use.

## Navegação

- Três faixas, todas com largura máxima `nav-w` e margem `gutter`. Linha de marca com `header-row` de altura: lockup à esquerda, seletor de idioma PT / EN e o CTA Contato à direita. Navegação principal com `nav-row`: cinco seções em `nav-primary`, gap `s-6`. Faixa secundária com `band-row` sobre `bg-1`, entre duas bordas `border`: as páginas irmãs da seção ativa em `nav-secondary`, separadas por divisores verticais de 1px em `border` e padding horizontal `s-4`.
- Estado ativo é sublinhado, não pílula: item em `fg-0` com 1px de `cyan-brand` na base da faixa. Repouso em `fg-2`, hover em `fg-0`. Não use fundo preenchido, borda ou blur em itens de navegação.
- Mapa de seções. Empresa: Sobre, História, Equipe, Carreiras, Manifesto, Trust. Soluções: Soluções, Cases, Atelier. Produtos: Visão geral, Robson, Briefing BTC, Strategos, Verentir, Kulinaryos. Parceria: Parceria. Journal: Journal, Changelog, Newsroom. Contato é o CTA; Aviso Legal fica no rodapé.
- Breadcrumb visível em toda página de profundidade dois ou mais, gerado da mesma lista que alimenta o BreadcrumbList do JSON-LD. Estilo `breadcrumb` em `fg-2`, ícone de início em traço, separador › em `fg-3`, página atual em `fg-0` com sublinhado de 1px em `cyan-dim`. Fica logo abaixo da faixa secundária, acima do `eyebrow`.
- Mobile. A navegação principal vai para um menu aberto pelo botão Menu; a faixa secundária vira uma linha com a seção atual e uma seta; o breadcrumb mantém os dois últimos níveis e resume os anteriores em reticências.

## Iconografia

- Ícones em SVG inline de traço 1,5px, cantos redondos, caixa de 20px ou 24px, cor herdada do texto. Sem fonte de ícones, sem emoji. Marque ícones decorativos com `aria-hidden="true"` e dê `aria-label` a botões só de ícone.
- Ícones de marca de terceiros (GitHub, LinkedIn) só no rodapé.

## Layout

- Header, faixa secundária e rodapé em `nav-w`; conteúdo em `content-w`; texto corrido e cabeçalho de página em `prose-w`. Margem lateral mínima `gutter` em qualquer largura.
- Colunas com flex ou grid e gap `s-6`; abaixo de 768px tudo empilha, tabelas largas rolam dentro de uma caixa. Alvos de toque de pelo menos 44px.
