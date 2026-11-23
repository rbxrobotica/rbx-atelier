# Brand System

## Origem

O GPH nasceu em 2017 no centro de São Paulo, entre as galerias comerciais da região, e o nome vem daí: uma galeria é um corredor de vitrines acesas, e "Hoje" é a promessa de que o que entrou hoje aparece primeiro. A noite roxa, o letreiro magenta e o néon ciano são a memória visual desse lugar, não uma estética escolhida de catálogo. O protótipo web de 2023-2024 foi a primeira materialização dessa marca na tela; este sistema a retoma.

## Posicionamento

**Para** quem compra, aluga ou contrata e **para** quem anuncia, em todo o Brasil enquanto a região inicial não for decidida, **o GPH** é a vitrine que fica acesa: classificados onde cada anúncio aparece iluminado, com foto, preço e contato direto, e onde a pergunta "O que você está procurando?" vem antes de qualquer oferta. **Diferente** dos classificados que parecem planilha, o GPH tem a energia de uma galeria comercial à noite: cor, brilho e pressa boa.

- **Público principal:** pessoas procurando imóveis, veículos, serviços e itens à venda, que querem decidir rápido e à noite, no celular.
- **Público secundário:** anunciantes, pessoas físicas e pequenos profissionais, que querem um anúncio que chame atenção sem parecer spam.
- **Proposta de valor:** (1) uma pergunta e um botão; (2) categorias à vista, como setores de uma galeria; (3) cada anúncio com a mesma moldura iluminada; (4) contato direto, telefone visível só quando o anunciante quer; (5) "Hoje": o que entrou hoje aparece primeiro.
- **Personalidade:** vendedora, direta, noturna, confiável. Brilha, mas não grita: o néon fica no letreiro e no botão, não no texto.

## Relação com a RBX

Marca endossada. O GPH tem nome, cores e voz próprios; a RBX aparece como garantia de plataforma na assinatura "um produto RBX", em `small` e `ink-3`, no rodapé e na passagem para o login. A RBX nunca divide o cabeçalho com o GPH.

## O letreiro

A marca tem duas partes, registradas no logo original do grupo de WhatsApp (`assets/Legado/legado-logo-whatsapp.png`, anterior ao protótipo web):

- O **símbolo**: a lojinha, uma fachada de loja de galeria vista de frente, com toldo ondulado em cima e a porta aberta embaixo, em silhueta sólida `simbolo` (#FAD3E8). É a galeria comercial do centro de São Paulo reduzida a um pictograma.
- O **wordmark**: "GPH" em DejaVu Sans Condensed Bold Oblique, `magenta` (#ED2590, o mesmo valor medido no logo original e no protótipo), com `text-glow-white` em Noite, 42px na barra de navegação (34px no celular), 120px em capas.

No logo original o fundo é `#17030E`, um vinho quase preto; o protótipo web trocou pela noite roxa `ground` (#1A0933), e este sistema fica com a roxa no produto por decisão do proprietário (29/10/2026). O vinho sobrevive como `noite-funda`: é o fundo das peças de marca (ícone de app, foto de perfil, capa, abertura), onde a assinatura aparece sozinha e o olho descansa. O símbolo e o wordmark aparecem lado a lado (símbolo à esquerda, alinhado pela altura das letras, gap de meia altura do "H") na assinatura completa; o wordmark sozinho vale na barra de navegação e em textos; o símbolo sozinho vale como favicon, ícone de app e foto de perfil. O protótipo web não usava o símbolo (apontava para um `gph.svg` nunca versionado); esta é a primeira vez que ele volta a um sistema.

Regras do wordmark:
1. Sempre em `magenta` sobre `ground` ou `bar`. Em material impresso de uma cor, em `ink`.
2. Sempre inclinado. O itálico é o "Hoje".
3. Sempre com o brilho branco em Noite; em Dia, sem brilho.
4. Nunca redesenhado em outra fonte, nunca em caixa baixa, nunca com espaçamento aberto.
5. Área de proteção: a altura do "H" em volta.
6. Tamanho mínimo: 24px na tela, 8mm impresso.

O descritor "Galeria Premium Hoje" aparece por extenso só no rodapé (`footer`, `magenta`) e em peças institucionais, nunca ao lado do wordmark na navegação.

Regras do símbolo:
1. Silhueta sólida, uma cor: `simbolo` sobre `ground`/`bar` em Noite; em Dia, `simbolo` (tema Dia) sobre `ground`. Nunca `magenta`, para não competir com o wordmark.
2. Sem brilho: o néon é do letreiro, a lojinha é a construção por trás dele.
3. Tamanho mínimo: 16px (favicon). Área de proteção: a largura do toldo em volta.
4. Vetorizado em 29/10/2026 (`assets/Marca/gph-simbolo.svg`, grade 154×142) a partir do PNG do grupo de WhatsApp: proporções do desenho de 2017, ondas igualadas, cantos no raio dos botões. Componentes `Symbol` e `Lockup`.

## Cor

| Papel | Token | Noite | Origem |
|---|---|---|---|
| A noite | `ground` | #1A0933 | body-bg do Vapor |
| A barra | `bar` | #170229 | navbar do protótipo |
| A marca | `magenta` | #ED2590 | o .title do protótipo (não é cor do tema) |
| A ação | `pink` / `pink-fill` | #EA39B8 / #C7309C | btn-secondary do Vapor e seu hover |
| A pergunta | `cyan` | #32FBE2 | body-color do Vapor |
| A navegação | `lilac` | #A98EDA | primary-text-emphasis do Vapor |
| O apoio | `purple` | #6F42C1 | primary do Vapor |

Hierarquia: noite (chão) → ciano (pergunta) → magenta (marca) → rosa (ação) → lilás (navegação). Um quente e um frio por bloco; nunca magenta e rosa como texto no mesmo bloco.

## Tipografia

- **Letreiro:** DejaVu Sans Condensed. Bold Oblique para `wordmark`, `nav` e `footer`; Bold reto para `title` e `price`. Arquivos em `fonts/`, licença Bitstream Vera (livre).
- **Texto:** Lato, do Google Fonts, como no Vapor. Regular e Bold.
- Nunca: Lato inclinado para fingir letreiro; DejaVu Condensed em texto corrido.

## Fotografia e ilustração

Fotos dos anunciantes, sempre sobre `surface` dentro do cartão. Em material de marca: lugares à noite, vitrines acesas, letreiros reais, luz de néon refletida em vidro e asfalto molhado. Sem pessoas posando, sem renderizações, sem ilustração vetorial.

## Voz

Veja o README. Em resumo: pergunta antes de oferecer; caixa de título nos itens de menu; sem exclamação em série; "Premium" nunca quer dizer caro.
