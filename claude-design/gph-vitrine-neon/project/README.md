## A marca em uma frase

GPH, Galeria Premium Hoje, são classificados apresentados como uma vitrine iluminada à noite: fundo roxo-escuro, o nome em magenta brilhando, uma pergunta direta em ciano e um único botão rosa para agir. "Galeria" aqui é galeria comercial com letreiro aceso, não parede branca de museu. "Premium" é o acabamento, não o preço. "Hoje" é a inclinação do letreiro: velocidade.

Construa toda tela a partir de três ideias:

1. **A noite**: fundo `ground` com o gradiente para `horizon` só no fim da página; nenhuma decoração além do brilho dos poucos elementos que brilham.
2. **O letreiro**: o nome `GPH` em `wordmark`, `magenta`, com `text-glow-white`. É a única coisa na tela com personalidade própria; tudo o mais fica quieto para ele.
3. **Um quente, um frio**: tudo que se clica é rosa (`pink-fill` com `glow-pink`); tudo que pergunta ou rotula é `cyan`. Nunca dois quentes no mesmo bloco. O que se lê longamente é `ink`.

## Voz e tom

O GPH fala como um vendedor de feira noturna que respeita o comprador: direto, em português, sem rodeio e sem gritar. Trata por "você", pergunta antes de oferecer e usa verbos concretos. Caixa de título nos itens de menu, como o protótipo escrevia ("Minha Conta", "Publique seu Anúncio"); caixa de frase em todo o resto. Nunca exclamação em série, emoji ou superlativos.

| Situação | Escreva | Evite |
|---|---|---|
| Pergunta da busca | O que você está procurando? | Encontre tudo o que você sonha! |
| Chamada para anunciar | Publique seu Anúncio | Anuncie grátis agora mesmo!!! |
| Região padrão | Todo Brasil | Selecione a sua localização |
| Botão de busca | Pesquisar | Buscar agora |
| Sucesso | Anúncio enviado para revisão. Você recebe uma mensagem quando ele for publicado. | Parabéns!!! Seu anúncio é um sucesso! |
| Vazio | Nenhum anúncio encontrado. Tente outra categoria ou amplie a região. | Ops! Nada por aqui :( |
| Rodapé | Copyright © Galeria Premium Hoje | Todos os direitos reservados ® |

Regras de texto:
- Datas relativas até 48 horas ("Hoje, 09:40", "Ontem"), depois data curta ("12 out").
- Preço como o anunciante escreveu, com "R$" e separador de milhar, em `price`; "A combinar" quando não houver valor.
- "Cashback" só aparece quando existir cashback. O protótipo prometia no título e não entregava.

## Fundamentos visuais

**Cor.** Use `ground` como fundo da página e `bar` na barra de navegação, com `glow-bar` embaixo. Campos, cartões e diálogos em `surface`; hover e menus em `raised`. Texto corrido em `ink`, secundário em `ink-2`, legendas em `ink-3`. `cyan` é a voz que pergunta e rotula: `prompt`, `label`, abas em repouso e links. `magenta` é a marca: `wordmark`, `footer` e `price`, nunca texto abaixo de 19px. `pink-fill` é a única cor de ação: botão primário com `glow-pink`; a aba ativa usa `pink` como texto com `text-glow-pink`. `lilac` é a navegação e o botão secundário. `purple` só em faixas (Destaque, progresso), nunca como texto. `ok`, `warn`, `err` e `info` são estados, sempre com ícone e palavra.

**Brilho.** O néon é a assinatura, então é raro: `text-glow-white` no `wordmark` e em `display-l`; `text-glow-cyan` em `prompt` e `label`; `text-glow-pink` na aba ativa e no `price`; `glow-pink` no botão primário e no cartão de Destaque; `glow-cyan` no campo em foco. Nada mais brilha. O protótipo aplicava brilho em todo o texto do body; isso cansa em listas longas e foi removido de propósito.

**Tipografia.** DejaVu Sans Condensed (`display`) é o letreiro: `wordmark`, `nav` e `footer` em negrito inclinado; `display-l` nos títulos de página; `title` e `price` em negrito reto, porque o item não grita. Lato (`sans`) em tudo que se lê: `prompt`, `body`, `body-strong`, `small`, `label`. No celular, `wordmark` desce para 34px e `display-l` para 28px. Texto corrido nunca passa de `measure`.

**Espaço e grid.** Base de 4px (`space-1` a `space-8`). Conteúdo limitado a `container` (1280px). O bloco de busca da página inicial tem margem lateral `search-inset` (12%) no desktop e `space-4` no celular, com `space-4` entre as células, empilhadas como no protótipo. A vitrine de resultados é um grid `repeat(auto-fill, minmax(240px, 1fr))` com `space-5` entre cartões: 4 colunas acima de `bp-l`, 2 no celular, 1 abaixo de 400px.

**Raios.** `radius-m` (6px) em botões, campos e cartões, como o Bootstrap do protótipo. `radius-s` em selos e chips. `radius-l` no bloco de busca e em diálogos. Fotos de anúncio ficam retas dentro do cartão arredondado.

**Bordas e elevação.** `line` separa; `field` contorna campos e controles. Em Noite a elevação é brilho, não sombra: só `shadow-dialog` em diálogos e toasts. Em Dia os brilhos viram sombras curtas ou somem.

**Movimento.** `duration-fast` para hover, foco e aba; `duration-base` para menu, diálogo e toast. O brilho acende em `duration-fast`; nada pulsa, nada pisca. Com `prefers-reduced-motion`, tudo é instantâneo.

**Estados.** Foco: anel de 2px sólido em `focus`, afastado 2px, mais `ring-focus`; campos somam `glow-cyan`. Hover: botão primário vai para `pink-strong`; links de navegação para `lilac-strong`; cartão para `raised`. Desabilitado: fundo `surface`, texto `ink-3`, sem brilho. Vendido ou indisponível: foto sem cor, preço riscado, selo com a palavra.

**Fotografia.** As fotos são dos anunciantes. Sobre `ground`, uma foto colorida parece mais saturada do que é; por isso a foto sempre fica sobre `surface` dentro do cartão, com `space-2` de margem, para ter um referencial neutro. Onde não há foto, um quadro `surface` com o ícone da categoria e "Foto do anunciante".

## Iconografia

Traço de 1,75px em grade de 24px, herdando a cor do texto. As cinco categorias têm ícones fixos (`imoveis`, `servicos`, `veiculos`, `compra-venda`, `pessoais`). Botão só de ícone exige `aria-label`. Sem emoji, sem ícones preenchidos, sem ícones coloridos de enfeite. O protótipo não tinha ícones; estes seguem o padrão do GPH Design System (direção Parede de galeria) para os dois sistemas compartilharem o mesmo conjunto.

## Componentes

- **Marca**: `Wordmark` (o letreiro GPH) na navegação e no rodapé. `Symbol` (a lojinha, vetorizada do logo original) e `Lockup` (símbolo + wordmark) no rodapé, capas e perfil. A navegação usa só o `Wordmark`.
- **Buscar**: `SearchBar` com a pergunta em `prompt`, dois `select` (categoria e região) e o botão Pesquisar, empilhados.
- **Categorias**: `CategoryTabs` com as cinco categorias na ordem do protótipo: Imóveis, Serviços, Veículos, Compra & Venda, Pessoais.
- **Ver anúncios**: `ListingCard` em grid.
- **Navegação**: `NavBar` com `Wordmark`, links em `nav` e o botão Publique seu Anúncio.
- **Ações**: `Button` primário (rosa, com brilho), secundário (contorno lilás) e quiet.
- Um único botão primário por área de tela.

## Acessibilidade

Contrastes medidos (WCAG 2.1) nos dois temas:

| Par | Noite | Dia |
|---|---|---|
| `ink` sobre `ground` | 15,2:1 | 16,8:1 |
| `ink-2` sobre `surface` | 8,7:1 | 11,3:1 |
| `ink-3` sobre `ground` | 7,1:1 | 6,7:1 |
| `cyan` sobre `ground` | 14,2:1 | 4,9:1 |
| `magenta` sobre `ground` (texto 19px+ negrito) | 4,7:1 | 5,1:1 |
| `on-pink` sobre `pink-fill` | 4,8:1 | 4,8:1 |
| `on-pink` sobre `pink-strong` | 5,3:1 | 5,3:1 |
| `lilac` sobre `bar` | 7,0:1 | 7,1:1 |
| `err` sobre `ground` | 6,7:1 | 5,9:1 |
| `field` (borda) sobre `surface` | 3,3:1 | 3,4:1 |
| `focus` sobre `surface` | 7,8:1 | 4,5:1 |

- O protótipo usava `pink` (#ea39b8) com texto branco no botão (3,6:1). O sistema adota `pink-fill` (#c7309c, o hover original) como repouso e mantém `pink` no brilho: o olho vê a mesma cor, o texto passa.
- Todo controle tem alvo de pelo menos 44px (`control-m`).
- Estado nunca depende só de cor: há palavra e ícone.
- Abas e links em `cyan` ganham sublinhado no hover; brilho não substitui sublinhado.
- Formulários usam `<label>` visível, `aria-invalid` e mensagens ligadas por `aria-describedby`.

## Integração com a plataforma RBX

O GPH é um produto RBX e não constrói login, cobrança nem mensageria próprios: conta RBX (RBX Identity), mensagens pela central RBX (RBX Comms), cobrança de Destaque, se aprovado, pela RBX Commerce. Assinatura institucional "um produto RBX" no rodapé em `small`, cor `ink-3`, abaixo da linha `footer` em magenta. Nunca um segundo logo no cabeçalho.
