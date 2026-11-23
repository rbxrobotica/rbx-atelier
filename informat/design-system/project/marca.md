# Brand System

## Posicionamento

Assistência técnica e consultoria Linux que mostra o diagnóstico e o orçamento antes de mexer no seu computador.

O Informat não compete por ser o mais rápido nem o mais barato (esses fatos ainda não existem: `[PRAZO]`, `[PREÇO]`). Ele compete pelo processo visível: o cliente vê o que foi encontrado, aprova o que será feito e sabe o que aconteceu com os dados.

## Público principal

- **Principal:** pessoas e pequenos escritórios com notebook ou computador lento, com defeito ou precisando de formatação. Querem o equipamento de volta funcionando e os arquivos preservados; temem pagar por algo que não entendem.
- **Secundário:** quem quer instalar, migrar para ou configurar Linux, incluindo dual boot e servidores domésticos simples. Lê detalhes técnicos e desconfia de linguagem vaga.

## Proposta de valor

1. Diagnóstico antes do orçamento.
2. Nada é executado sem aprovação do escopo.
3. O combinado sobre backup e dados fica registrado.
4. O cliente acompanha cada etapa.
5. Linguagem clara, com profundidade técnica quando o cliente pede.

## Personalidade

Competente, clara, cuidadosa com o equipamento e com os dados, honesta sobre limites. Soa como a ficha de uma boa oficina: datada, numerada, assinada. Nunca soa como anúncio de loja de informática.

## Relação com a RBX e assinatura

Marca endossada. O Informat tem nome, logotipo e domínio próprios; a RBX aparece como assinatura em texto, "um produto RBX", no rodapé de todas as páginas e no momento de login ("Entrar com sua conta RBX"). Nunca há co-logo no cabeçalho, nunca o logotipo da RBX ao lado do símbolo do Informat.

## Logotipo, símbolo e wordmark

### Wordmark
- "informat" em minúsculas, **Atkinson Hyperlegible Next ExtraBold (800)**, convertido em contornos com fontTools (nenhum texto vivo no arquivo). Kerning da própria fonte (tabela GPOS, aplicado com HarfBuzz) e tracking apertado de -22 unidades por glifo (-0.022em).
- O pingo do i vira uma **via de placa**: um anel de cobre com furo vazado, centrado onde ficava o pingo original. Em unidades da fonte (1000 por em): raio externo 104, furo 48, anel de 56. O pingo original tinha 190 de diâmetro; a via tem 208, o suficiente para ler como anel em 24 px de altura.
- Testamos também a via com uma trilha curta a 45 graus saindo dela (variante B). Ficou ruidosa em tamanho pequeno e brigava com o f; a variante A, só o anel, foi a escolhida. O desenho de trilhas mora no padrão, não no logotipo.

### Símbolo
- Grade de 48 x 48 unidades. Quadro `mascara` (#1B5E3B) com raio 12 (o `radius-l` a 48 px).
- O i reproduz a construção da própria Atkinson (haste com bandeira à esquerda no topo): bandeira x 18.5 a 22.5, y 20 a 25; haste x 22.5 a 29.5, y 20 a 41, em `serigrafia`.
- Via: centro (26, 12), raio externo 5, furo 2.25, em `cobre-via` (#E09A5F, 3.30:1 sobre o quadro).
- O conjunto ocupa x 18.5 a 31 e y 7 a 41: centro óptico no centro do quadro.

### Assinaturas
- **Horizontal:** símbolo com altura igual à do wordmark (do topo da via à linha de base), espaço entre os dois igual a 1.15 vez o diâmetro da via.
- **Vertical:** símbolo com 1.6 vez a altura do wordmark, centrado acima, mesmo espaço.

### Variações (grupo Logotipos)
| Arquivo | Uso | Tintas |
| --- | --- | --- |
| `informat-horizontal.svg` | Padrão em fundo claro (`base`, `surface`) | #1B5E3B, #F7FAF8, #E09A5F, #111A15, #B4652A |
| `informat-horizontal-escuro.svg` | Fundo escuro (`base` escuro, fotos escuras) | #1B5E3B, #F7FAF8, #E09A5F, #E9F2EC |
| `informat-vertical.svg` | Espaços quadrados ou altos, capa, embalagem | como a horizontal |
| `informat-logotipo.svg` | Só o nome, quando o símbolo já está por perto | #111A15, #B4652A |
| `informat-logotipo-escuro.svg` | Só o nome em fundo escuro | #E9F2EC, #E09A5F |
| `informat-simbolo.svg` | Avatar, selo, carimbo | #1B5E3B, #F7FAF8, #E09A5F |
| `informat-mono-tinta.svg` | Uma tinta, fundo claro: carimbo, gravação, documento | #111A15 |
| `informat-mono-branco.svg` | Uma tinta, fundo escuro ou foto | #FFFFFF |
| `informat-favicon.svg` | Aba do navegador, 16 e 32 px | #1B5E3B, #F7FAF8, #E09A5F |
| `informat-app-icon.svg` | Ícone de app e PWA, 512 px | #1B5E3B, #F7FAF8, #E09A5F |

Nas versões monocromáticas, o i e a via são vazados no quadro (o furo da via volta a ser tinta).

### Favicon e ícone de app
- **Favicon** (grade 16): sem bandeira, sem furo, via sólida. Quadro de raio 4, haste x 7.5 a 10, y 7.75 a 13.25, via de raio 2.25 em (8.75, 4.5). Use abaixo de 24 px.
- **Ícone de app** (512): quadro sem cantos (a plataforma recorta), o i da grade 48 desenhado a 400 px e centrado; a figura (283 px de altura) fica dentro do círculo seguro de 66%.

### Área de proteção
Use como unidade **x = a altura do anel da via** (26% da altura do wordmark). Deixe x livre em volta de toda a assinatura. Na horizontal de 32 px, x é cerca de 8 px.

### Tamanho mínimo
- Wordmark e assinatura horizontal: 96 px de largura na tela, 24 mm no impresso.
- Símbolo: 16 px; abaixo de 24 px use o favicon simplificado.

### Usos inadequados
1. Escrever "informat" em texto vivo no lugar do logotipo, ou em outra fonte.
2. Trocar a via por um pingo cheio, por outro ícone ou por emoji.
3. Recolorir a via de verde ou o nome de cobre.
4. Aplicar sombra, contorno, gradiente, brilho ou relevo.
5. Distorcer, girar, inclinar ou mudar o tracking.
6. Colocar o logotipo sobre o padrão de trilhas ou sobre foto sem contraste.
7. Juntar o logotipo da RBX ao do Informat (a relação é a assinatura em texto "um produto RBX").
8. Usar o símbolo com o quadro em outra cor que não `mascara`, ou arredondar o quadro em círculo.

## Paleta

| Token | Claro | Escuro | Função |
| --- | --- | --- | --- |
| `placa` | #1B5E3B | #74D19B | Marca e ação primária, links, foco |
| `mascara` | #1B5E3B | #1B5E3B | Faixa de marca e quadro do símbolo, igual nos dois temas |
| `serigrafia` | #F7FAF8 | #E9F2EC | Texto e traço sobre `mascara` |
| `cobre` | #B4652A | #E09A5F | Vias, trilhas, anel do i (decorativo) |
| `cobre-via` | #E09A5F | #E09A5F | Cobre sobre `mascara` |
| `cobre-ink` | #8A4A17 | #F0B88A | Cobre como texto (número da OS) |
| `base` / `surface` / `sunken` | #F4F6F3 / #FFFFFF / #E8ECE7 | #0E1411 / #151C18 / #0A0F0C | Bancada, folha, rebaixo |
| `ink` / `ink-2` / `ink-3` | #111A15 / #3E4A43 / #56625B | #E9EFEA / #B9C4BD / #94A099 | Texto em três níveis |
| `info` `warn` `ok` `err` | #1D4F91 #8A5A00 #1E6B45 #A3283A | #8DB4F0 #E8B65A #7FD3A0 #F08A98 | Status, sempre com ícone e palavra |

Combinações acessíveis (medidas): `on-placa` sobre `placa` 7.75:1 (claro) e 10.06:1 (escuro); `serigrafia` sobre `mascara` 7.37:1 e 6.78:1; `cobre-ink` sobre `surface` 6.83:1 e 9.85:1; `ink-3` sobre `sunken` 5.34:1 e 7.13:1. Não combine: `ink` sobre `mascara` (2.29:1), `cobre` sobre `placa` (1.78:1), texto em `cobre` sobre qualquer fundo.

## Tipografia

| Estilo | Família | Tamanho / entrelinha | Peso | Uso |
| --- | --- | --- | --- | --- |
| `display-xl` | Next | 56/60 (celular 36/40) | 800 | Promessa do hero |
| `display-l` | Next | 40/46 | 800 | Título de página |
| `title-1` | Next | 30/36 | 700 | Seção |
| `title-2` | Next | 22/28 | 700 | Cartão, diálogo |
| `body-l` | Next | 18/28 | 400 | Abertura de seção |
| `body` | Next | 16/24 | 400 | Texto padrão |
| `small` | Next | 14/20 | 400 | Dicas, notas |
| `label` | Mono | 12/16, +0.06em, caixa alta | 500 | Rótulos, carimbos |
| `os-number` | Mono | 15/20, +0.02em | 600 | OS-0427 |
| `spec` | Mono | 14/20 | 400 | Série, modelo, versão |

- **Por quê:** legibilidade é a promessa. A Atkinson Hyperlegible foi desenhada pelo Braille Institute para leitores com baixa visão e diferencia letras que costumam se confundir (I, l, 1; O, 0). Num serviço que lida com números de série, modelos e códigos, isso é função, não estilo.
- **Licença:** Atkinson Hyperlegible Next e Atkinson Hyperlegible Mono, SIL Open Font License 1.1, servidas pelo Google Fonts.
- **Alternativas** (só se a Atkinson ficar indisponível): Lexend para a família principal e JetBrains Mono para a técnica, ambas SIL OFL 1.1. Pilha de fallback no código: `system-ui, sans-serif` e `ui-monospace, monospace`.

## Fotografia, ilustração e iconografia

- **Fotografia:** o equipamento real na bancada, luz neutra, vista de cima ou a 45 graus, fundo `base` ou madeira clara. Mãos aparecem quando há ação (abrir o gabinete, trocar o disco). Esconda dados pessoais, telas com conteúdo do cliente, números de série e patrimônio. Fotos de clientes só com autorização registrada.
- **Ilustração:** apenas o padrão de trilhas com vias (grupo Padroes): trilhas de 3 px com dobras de 45 graus mantidas paralelas por deslocamento em esquadria, passo de 16 px, vias com anel de 7 px. Em cobre sobre fundo claro ou `cobre-via` sobre `mascara`. Nunca atrás de texto, nunca como textura de fundo inteiro.
- **Iconografia:** o conjunto de 38 ícones de traço do grupo Icones. Sem pinguim, sem logotipos de sistemas, sem emoji.

## Aplicações

Veja as pranchas de marca no canvas "Informat · Telas e Protótipos":
- **Site:** hero com a promessa à esquerda, sobre `base`, e à direita a folha da OS montada sobre um painel `mascara`, com as trilhas de cobre chegando à borda dela como a um componente na placa; depois as três frentes em ServiceCard e "Como funciona" com a linha do tempo em modo explain.
- **Anúncio (post 1080 x 1080):** a OS como peça: número em mono, carimbo "Aguardando aprovação" e a frase "Nada é feito sem a sua aprovação." Sem preço até haver `[PREÇO]`.
- **Comunicação de atendimento:** mensagem enviada pela central RBX ao fim do diagnóstico, com número da OS, resumo em linguagem simples, validade `[PRAZO]` e o link para aprovar ou recusar.
