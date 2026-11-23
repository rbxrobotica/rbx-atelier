## A marca em uma frase

GPH, Galeria Premium Hoje, são classificados apresentados como uma galeria: cada anúncio é exposto como uma obra, com a foto em destaque, uma etiqueta clara embaixo e contato direto com quem anuncia. "Premium" quer dizer cuidado na apresentação, não preço alto. "Hoje" quer dizer frescor: a hora de publicação está sempre visível.

Construa toda tela a partir de três ideias:

1. **A parede**: fundo `wall` limpo, muito respiro, nenhuma decoração competindo com as fotos.
2. **A obra**: a foto do anunciante em 4:3, sem cantos arredondados (`radius-none`), sobre `sunken` quando não preenche o quadro.
3. **A etiqueta**: o texto do anúncio sempre na mesma ordem, como a etiqueta de parede de um museu: categoria e tipo de oferta em `label`, título, preço em `price`, local e hora em `small`.

## Voz e tom

O GPH fala como um bom galerista: direto, cordial, sem pressa e sem exagero. Trata a pessoa por "você", usa frases curtas e verbos concretos. Nunca usa exclamação em série, caixa alta para gritar, emoji ou superlativos ("o melhor", "imperdível").

| Situação | Escreva | Evite |
|---|---|---|
| Título da busca | O que você está procurando? | Encontre tudo o que você sonha! |
| Chamada para anunciar | Publique seu anúncio | Anuncie grátis agora mesmo!!! |
| Benefício | Anúncios revisados antes de ir ao ar, com foto, ficha e contato direto. | A plataforma mais segura do Brasil. |
| Botão de contato | Enviar mensagem | Fale já! |
| Sucesso | Anúncio enviado para revisão. Você recebe uma mensagem quando ele for publicado. | Parabéns!!! Seu anúncio é um sucesso! |
| Recusa | Anúncio recusado: o preço informado não corresponde ao item. Ajuste e envie de novo. | Erro 422. Violação de política. |
| Vazio | Nenhum anúncio encontrado. Tente outra categoria ou amplie a região. | Ops! Nada por aqui :( |
| Atendimento | Olá, Marina. Seu anúncio "Bicicleta aro 29" foi publicado hoje às 09:40. | Prezado(a) usuário(a), informamos que... |

Regras de texto:
- Caixa de frase em títulos e botões ("Meus anúncios", não "Meus Anúncios"). Caixa alta só no estilo `label`, com espaçamento.
- Datas relativas até 48 horas ("Hoje, 09:40", "Ontem"), depois data curta ("12 out").
- Preço como o anunciante escreveu, com "R$" e separador de milhar; "A combinar" quando não houver valor.
- Hipóteses comerciais (Destaque, plano profissional) aparecem com a palavra "Hipótese" em todo material interno até serem aprovadas.

## Fundamentos visuais

**Cor.** Use `wall` como fundo da página, `surface` para cartões, campos e diálogos, `sunken` para faixas recuadas e para o fundo das fotos. Texto principal em `ink`; secundário em `ink-2`; legendas em `ink-3`. O Azul Klein (`klein`) é a única cor de ação e de marca: botão primário, links, seleção e anel de foco. Não use `klein` como fundo de seções grandes. Texto sobre preenchimento `klein` é sempre `on-klein`. O ouro velho (`ouro`) existe só para o Destaque (Hipótese); como texto use `ouro-ink` sobre `ouro-soft`. O ponto vermelho (`ponto`) marca apenas anúncio vendido ou indisponível, sempre com a palavra ao lado. `ok`, `warn` e `err` são estados, nunca decoração, e vêm sempre com ícone e texto.

**Tipografia.** Familjen Grotesk (`display`) só em títulos: `display-xl` na busca da página inicial, `display-l` nos títulos de página, `title-1` no título do anúncio, `title-2` em blocos e diálogos. Archivo (`sans`) em todo o resto: `body-l`, `body`, `body-strong`, `small`. Archivo Narrow (`narrow`) é a voz da etiqueta: `label` em caixa alta com 0,08em de espaçamento, `price` e `price-l` com algarismos tabulares. No celular, desça um degrau nos estilos de display. Texto corrido nunca passa de `measure` (68ch).

**Espaço e grid.** Base de 4px (`space-1` a `space-9`). Margem lateral `space-6` no desktop e `space-4` no celular; conteúdo limitado a `container` (1240px). A galeria de resultados é um grid `repeat(auto-fill, minmax(240px, 1fr))` com `space-5` entre cartões: 4 colunas acima de `bp-l`, 2 no celular grande, 1 abaixo de 400px.

**Raios e bordas.** Fotos com `radius-none`. Selos e etiquetas com `radius-s`. Botões, campos, chips e cartões com `radius-m`. Diálogos e a barra de busca com `radius-l`. Separe com linhas (`line`, 1px) antes de recorrer a sombras. Bordas de campos e controles usam `field`, nunca `line`.

**Elevação.** `shadow-1` no botão de salvar sobre a foto; `shadow-2` em hover de cartão, menus e na barra de busca da página inicial; `shadow-3` em diálogos e toasts. Nada mais flutua.

**Movimento.** Curto e funcional: `duration-fast` para hover e foco, `duration-base` para abrir menus, diálogos e toasts, `duration-slow` para trocar foto. Sem molas, sem parallax. Com `prefers-reduced-motion`, tudo é instantâneo.

**Estados.** Foco: anel de 2px sólido em `focus`, afastado 2px, em todo elemento interativo. Hover: borda escurece para `ink` ou fundo vai para `sunken`. Desabilitado: fundo `sunken`, texto `ink-3`, cursor bloqueado, e sempre uma explicação por perto. Carregando: `Skeleton` no formato do conteúdo; botões com `loading`. Vazio: `EmptyState` com saída. Erro: `Alert` com o que fazer. Indisponível: foto sem cor, preço riscado, `StatusBadge` "Indisponível".

**Fotografia.** As fotos são dos anunciantes; o GPH não usa banco de imagens para fingir anúncios. Onde não há foto, use o quadro vazio do `PhotoSlot` (ícone da categoria e "Foto do anunciante"). Em material de marca, prefira fotos de objetos e lugares reais, luz natural, enquadramento frontal, fundo neutro, sem pessoas posando e sem filtros.

## Iconografia

Use apenas `Icon`: traço de 1,75px em grade de 24px, cantos e pontas arredondados, herdando a cor do texto. As cinco categorias têm ícones fixos (`imoveis`, `servicos`, `veiculos`, `compra-venda`, `pessoais`). Ícones acompanham rótulos; botão só de ícone exige `aria-label`. Sem emoji, sem ícones preenchidos, sem ícones coloridos de enfeite. O ponto (`ponto`) e a estrela do Destaque são as únicas marcas coloridas.

## Componentes

- **Buscar**: `SearchBar` (grande na página inicial, média no topo dos resultados) + `FilterChips` + `Select`/`TextField` no painel de filtros.
- **Ver anúncios**: `ListingCard` em grid, `Skeleton` enquanto carrega, `EmptyState` sem resultados.
- **Página do anúncio**: `PhotoGallery`, título em `title-1`, ficha em `label` + `body`, `ContactPanel`, `AdvertiserCard`.
- **Contato**: `ContactPanel` abre `Dialog` com `TextField` multilinha; confirmação com `Toast`.
- **Publicar e editar**: `Stepper` + `TextField`, `Select`, `FilterChips`; avisos com `Alert`; estado com `StatusBadge`.
- **Meus anúncios**: `Tabs` + `ListingCard layout="row"` + `StatusBadge` + `Button` (Editar, Pausar, Marcar como vendido, Excluir com `Dialog alert`).
- **Navegação**: `NavBar` no desktop; `NavBar compact` + `BottomNav` no celular.
- Um único botão primário por área de tela.

## Acessibilidade

Contrastes medidos (WCAG 2.1) nos dois temas, claro e escuro:

| Par | Claro | Escuro |
|---|---|---|
| `ink` sobre `wall` | 16,4:1 | 16,7:1 |
| `ink-2` sobre `surface` | 9,5:1 | 10,2:1 |
| `ink-3` sobre `wall` | 5,7:1 | 7,1:1 |
| `klein` sobre `surface` | 9,2:1 | 7,3:1 |
| `on-klein` sobre `klein` | 9,2:1 | 7,9:1 |
| `ouro-ink` sobre `ouro-soft` | 5,9:1 | 9,4:1 |
| `err` sobre `err-soft` | 5,7:1 | 7,1:1 |
| `field` (borda) sobre `surface` | 3,8:1 | 3,8:1 |
| `focus` sobre `sunken` | 7,6:1 | 8,3:1 |

- Todo controle tem alvo de pelo menos 44px (`control-m`); a navegação inferior, 56px.
- Formulários usam `<label>` visível, `aria-invalid` e mensagens ligadas por `aria-describedby`.
- Estado nunca depende só de cor: há palavra e ícone (ou o ponto com a palavra).
- Fotos têm `alt` que descreve o item; o quadro vazio tem `role="img"` com rótulo.
- Ordem de tabulação segue a leitura; diálogos fecham com Esc e devolvem o foco.

## Integração com a plataforma RBX

O GPH é um produto RBX e não constrói login, cobrança nem mensageria próprios:
- **Entrar**: conta RBX (RBX Identity, `auth.merovelis.com`). A área logada do GPH vive em `app.merovelis.com/gph`; o site público fica no domínio do GPH ([dominio-gph]).
- **Mensagens entre interessados e anunciantes, avisos de revisão e publicação**: central de mensagens RBX (RBX Comms).
- **Destaque pago e plano profissional (Hipóteses)**: se aprovados, cobrança pela RBX Commerce.
- Assinatura institucional: "um produto RBX" no rodapé e na passagem para o login, em `small`, cor `ink-3`. Nunca um segundo logo no cabeçalho.
