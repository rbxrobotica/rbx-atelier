# Brand System

## Posicionamento

**Para** quem compra, aluga ou contrata e **para** quem anuncia, em todo o Brasil enquanto a região inicial não for decidida, **o GPH** são classificados em que cada anúncio é apresentado como peça de galeria: foto em destaque, ficha padronizada, hora de publicação visível e contato direto com quem anuncia. **Diferente** dos classificados que empilham anúncios sem critério, o GPH revisa cada anúncio antes de publicar e dá a todos a mesma apresentação cuidadosa.

- **Público principal:** pessoas procurando imóveis, veículos, serviços e itens à venda perto de si, que querem ver rápido o que é, quanto custa, onde está e desde quando.
- **Público secundário:** anunciantes, pessoas físicas e pequenos profissionais (corretores, autônomos, lojas pequenas), que querem um anúncio bem apresentado sem saber fotografar ou escrever bem.
- **Proposta de valor:** (1) descoberta clara por categoria, busca e região; (2) uma etiqueta igual para todos os anúncios, que facilita comparar; (3) revisão antes de publicar; (4) contato direto, com telefone visível só quando o anunciante quer; (5) frescor, com a hora de publicação sempre à vista.
- **Personalidade:** curadora, clara, direta, confiável, contemporânea. Nunca esnobe: "Premium" é a apresentação, não o preço.

## Relação com a RBX

Marca endossada. O GPH tem nome, símbolo, cores e voz próprios; a RBX aparece como garantia de plataforma na assinatura "um produto RBX", em `small` e `ink-3`, no rodapé do site, nos e-mails e na tela de passagem para o login da conta RBX. A RBX nunca divide o cabeçalho com o GPH.

## Logo

**Símbolo: a Moldura G.** Um G quadrado que é, ao mesmo tempo, a moldura de um quadro. No lugar do terminal da letra fica o ponto de ouro velho: o selo da etiqueta de galeria e o "hoje" do nome.

Construção em grade de 48 unidades:
- Moldura com espessura de 9 unidades (topo, lateral esquerda e base inteiros).
- Lateral direita só na metade de baixo (y 24 a 48), com o braço do G entrando até x 24 (y 24 a 33).
- Abertura na lateral direita entre y 9 e y 24.
- Ponto com diâmetro igual à espessura da moldura (9), centrado em x 43,5 e y 16,5, na abertura.
- Cor: moldura `klein` (#1F3AB0), ponto `ouro` (#C08B2C).

**Logotipo.** "GPH" em Familjen Grotesk Bold, convertido em contornos, com espaçamento de -1,2%. O descritor "GALERIA PREMIUM HOJE" usa Archivo Narrow SemiBold em caixa alta, com espaçamento de 14% a 16%.

**Assinaturas** (arquivos no grupo de assets Logos; PNG 1x e 4x no grupo PNG):

| Arquivo | Uso |
|---|---|
| `gph-horizontal.svg` | Assinatura principal: símbolo + GPH. Cabeçalhos, site, e-mail. |
| `gph-assinatura-completa.svg` | Símbolo + GPH + fio + "Galeria / Premium / Hoje" em três linhas, como uma etiqueta de parede. Apresentações, rodapés, peças institucionais. |
| `gph-vertical.svg` | Símbolo sobre GPH e descritor. Formatos quadrados, perfil de rede social, adesivo. |
| `gph-simbolo.svg` | Símbolo sozinho, quando o nome já está perto ou o espaço é menor que 120px. |
| `*-negativo.svg` | Sobre fundos escuros: moldura e texto brancos, ponto em ouro. |
| `*-mono-tinta.svg` / `*-mono-branco.svg` | Uma cor só (tinta #15161A ou branco), para carimbo, gravação, fax, impressão de uma cor. |
| `gph-favicon.svg` | Fundo Klein com o G branco e o ponto, simplificado para 16px e 32px. |
| `gph-icone-app.svg` | Ícone de aplicativo 512px: fundo Klein, Moldura G branca a 56% da largura. |

**Área de proteção.** Em volta de qualquer assinatura, deixe livre pelo menos o diâmetro do ponto (9/48 da altura do símbolo, cerca de 19%). Na assinatura horizontal com 40px de altura, isso dá 7,5px.

**Tamanho mínimo.** Assinatura horizontal: 72px de largura na tela, 18mm impressa. Assinatura completa: 160px ou 40mm (abaixo disso o descritor perde legibilidade; use a horizontal). Símbolo: 24px; abaixo disso, use o favicon.

**Usos inadequados:**
1. Recolorir a moldura com outra cor que não `klein`, branco ou a tinta.
2. Mudar a cor do ponto para vermelho: o vermelho é reservado ao "vendido".
3. Girar, inclinar, espelhar ou distorcer o símbolo.
4. Redesenhar "GPH" com outra fonte ou digitar o logotipo como texto.
5. Colocar a assinatura colorida sobre fotos movimentadas ou sobre fundos com menos de 3:1 de contraste com a moldura (use a versão negativa ou mono).
6. Aplicar sombra, brilho, contorno ou degradê.
7. Encaixar o símbolo dentro de outra forma (círculo, balão).
8. Separar o ponto da moldura ou usá-lo como marcador de lista.

## Paleta

| Cor | Hex claro | Hex escuro | Função |
|---|---|---|---|
| Parede (`wall`) | #F4F4F2 | #101114 | Fundo da página |
| Superfície (`surface`) | #FFFFFF | #191A1F | Cartões, campos, diálogos, etiqueta |
| Recuo (`sunken`) | #EAEAE6 | #0A0B0D | Faixas e fundo das fotos |
| Tinta (`ink`) | #15161A | #F1F1EE | Texto principal |
| Azul Klein (`klein`) | #1F3AB0 | #8FA3FF | Marca e ação: botão primário, links, seleção, foco |
| Ouro velho (`ouro`) | #C08B2C | #E3B65C | Ponto do símbolo e Destaque (Hipótese); nunca texto |
| Ponto (`ponto`) | #D7352B | #FF6A5C | Vendido ou indisponível, sempre com a palavra |

Combinações acessíveis: texto `ink` sobre `wall`, `surface` ou `sunken` (14,9:1 ou mais); `on-klein` sobre `klein` (9,2:1 claro, 7,9:1 escuro); `klein` como texto sobre `surface` (9,2:1 / 7,3:1); `ouro-ink` sobre `ouro-soft` (5,9:1 / 9,4:1). Nunca use `ouro` ou `ponto` como cor de texto. A tabela completa está no README e nos usos de cada token.

Por que Azul Klein: o azul ultramar intenso de Yves Klein é uma referência do mundo da arte, distinta dos azuis corporativos, e funciona como cor de ação com contraste alto sobre branco. Num site de classificados, uma cor só para agir deixa claro onde clicar.

## Tipografia

| Papel | Fonte | Pesos | Uso |
|---|---|---|---|
| Display | Familjen Grotesk | 600, 700 | Títulos de página, título do anúncio, logotipo |
| Texto | Archivo | 400, 500, 600 | Interface, descrições, campos, botões |
| Etiqueta | Archivo Narrow | 500, 600 | Categoria, rótulos de ficha, preços (algarismos tabulares) |

Hierarquia: `display-xl` 64/68, `display-l` 44/50, `title-1` 32/38, `title-2` 22/28, `body-l` 18/28, `body` 16/24, `small` 14/20, `label` 12/16 caixa alta, `price` 20/24, `price-l` 34/38.

Licença: as três famílias são distribuídas pelo Google Fonts sob a SIL Open Font License 1.1, que permite uso comercial, incorporação em sites e aplicativos e conversão em contornos para o logotipo.

Alternativas, se uma família ficar indisponível: Familjen Grotesk → Hanken Grotesk; Archivo → Public Sans; Archivo Narrow → Barlow Semi Condensed. As alternativas mudam o desenho; registre a troca no histórico deste sistema.

## Fotografia, ilustração e iconografia

- **Fotografia de anúncio:** é do anunciante. O produto orienta (luz natural, item inteiro no quadro, fundo neutro, foto na horizontal, sem texto escrito na imagem) e mostra o quadro vazio quando não há foto. O GPH nunca preenche anúncios com fotos de banco de imagens.
- **Fotografia de marca:** objetos e lugares reais em luz natural, enquadramento frontal ou de três quartos, muito espaço vazio, como uma foto de catálogo de exposição. Sem pessoas posando, sem filtros, sem montagens.
- **Ilustração:** não é parte da marca no lançamento. Quando preciso, use formas geométricas da Moldura G (barras e o ponto) em `klein`, `ouro` e tinta.
- **Iconografia:** traço de 1,75px em grade de 24px (componente `Icon`), sempre acompanhando rótulo.

## Aplicações

As aplicações estão desenhadas no canvas [GPH · Telas e Protótipos](https://claude.ai/artifact/SHPkAFb2gK3G5E6WVGQb3H):
- **Site:** página inicial, resultados, anúncio, perfil, publicação, gestão, contato, estados e exploração de Destaque, em desktop e celular.
- **Anúncio em rede social:** post 1080 x 1080 que apresenta um anúncio como obra com etiqueta.
- **Comunicação de atendimento:** mensagem de anúncio publicado e de anúncio recusado, como chegam pela central de mensagens RBX.
