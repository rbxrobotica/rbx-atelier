# Marca Merovelis

**Situação:** oficial, adotada em 8 de novembro de 2026. Em 11 de novembro de 2026 a casa passou a se chamar Merovelis Systems. A marca não mudou: mudou o nome escrito ao lado dela.
**Origem:** estudo de marca feito no design system da casa no Claude Design, que na época se chamava RBX Design System, com três direções comparadas a marcas vizinhas na Suíça, no Brasil e no setor. A direção escolhida pelo fundador foi a B2, asset `Logos/marca-rbx-b2.svg` daquele sistema. Este repositório é a cópia pública de referência: o traçado aqui, no asset de origem e no site é o mesmo. Substitui o disco com três cortes diagonais, que colidia na estrutura com a marca do Linear e virava listra a 16px.

## A marca

Um quadrado em tinta única com os cantos superior esquerdo e inferior direito cortados a 45°. Cada corte tem 46% do lado. O corte diagonal vem da marca anterior; a forma fechada é o que a mantém legível a 12px e distinta na barra de abas.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#22E5E5" d="M30 8 H56 V34 L34 56 H8 V30 Z"/></svg>
```

Este bloco registra a geometria. Quem precisar do traçado copia o `d` sem alterar.

## Arquivos

| Arquivo | Tinta e fundo | Uso |
|---|---|---|
| `marks/merovelis-mark.svg` | `cyan-brand` #22E5E5, sem fundo | Header, documentos e qualquer superfície escura |
| `marks/merovelis-mark-on-light.svg` | #0F8F8F, sem fundo | Fundos claros: papel, materiais institucionais |
| `marks/merovelis-mark-tile.svg` | `cyan-brand` sobre `bg-0` #07080A | Favicon, avatar, logo da organização em dados estruturados |
| `marks/merovelis-app-icon.svg` | `bg-0` sobre `cyan-brand` | Ícone de app e de tela inicial |
| `marks/archive/` | | Marcas aposentadas, só para registro |

Em tinta única de impressão ou gravação, use a cor de texto principal do tema: `fg-0`.

## Wordmark

O wordmark é composto em tipografia ao lado da marca. Ele não é desenhado: "Merovelis" e "Systems" são texto. O nome é escrito em caixa alta e baixa, "Merovelis", nunca todo em maiúsculas.

| Lockup | Composição | Uso |
|---|---|---|
| Empilhado, o padrão | Marca à esquerda. À direita, "Merovelis" em Archivo 700 com largura 125% e espaçamento -0.02em, sobre "SYSTEMS" em JetBrains Mono 500, caixa alta, espaçamento 0.2em. Alinhados à esquerda, com a marca centralizada na altura do bloco de texto e 12px entre marca e texto. | Header em desktop: marca 28px, Merovelis 17px, SYSTEMS 9px |
| Compacto | Marca e "Merovelis", sem SYSTEMS. | Header em mobile: marca 24px, Merovelis 16px |
| Só a marca | A marca sozinha, com o nome "Merovelis Systems" no rótulo acessível. | Header em telas de até 363px de largura, o que inclui os celulares de 360px |
| Horizontal | Marca, "Merovelis" em Archivo 700 com largura 125% e "Systems" em Inter 300 na cor `fg-1`, na mesma linha e no mesmo corpo de 17px, os três centralizados na altura. | Rodapé, documentos, assinaturas. No rodapé do site a marca tem 24px |

No header de celular, o lockup compacto precisa de 364px de tela para manter 12px livres até os controles. Abaixo disso o header mostra só a marca. A anatomia do header não muda.

O descritor da casa é `Systems`. O descritor `Holding` é reservado e não é usado antes de essa entidade existir.

Archivo existe só para o wordmark. Não use Archivo em texto de interface. A fonte e a classe `.rbx-wordmark` estão em `colors_and_type.css`, que fixa a versão v25 da Archivo: uma versão nova só chega ao wordmark por uma edição revisada daquela URL.

Os 12px entre marca e texto são o valor nominal de `s-3`, em raiz de 16px. O site usa raiz de 15px, e lá esse intervalo mede 11,25px. Os tamanhos da marca e do texto estão em px e são os mesmos.

Os arquivos `wordmarks/merovelis-wordmark-systems.svg` e `wordmarks/merovelis-wordmark-systems-stacked.svg` são exportações de conveniência, com o wordmark como texto SVG. Eles só saem como desenhado onde Archivo, Inter e JetBrains Mono estão instaladas, ou quando o SVG entra inline em uma página que carrega essas fontes. Usados como imagem em outro lugar, o navegador troca a fonte. A referência é o lockup em tipografia: `preview/voltage-preview.html` aqui e o componente `Logo.svelte` do site. Uma versão vetorizada do wordmark ainda não existe.

Os arquivos `wordmarks/merovelis-wordmark-holding.svg` e `wordmarks/merovelis-wordmark-holding-stacked.svg` trazem o lockup com o descritor `Holding`. Ficam prontos e sem uso, pela regra acima.

Os lockups com o nome anterior ficam no repositório até os sites trocarem de nome, e depois vão para arquivo: `rbx-wordmark-systems.svg`, `rbx-wordmark-systems-stacked.svg`, `rbx-wordmark-holding.svg`, `rbx-wordmark-robson.svg` e `rbx-wordmark-truthmetal.svg`. Os três últimos ainda seguem o desenho antigo, em Inter com sublinhado. Robson e TruthMetal são nomes internos e não têm lockup com a casa.

## Regras

- Favicon e ícone de app são sempre a marca. Nunca uma letra.
- Área de respiro: metade da altura da marca em todos os lados.
- Tamanho mínimo: 12px.
- Não gire, não incline, não aplique gradiente, sombra ou contorno, e não coloque a marca sobre fotografia.
- Não redesenhe a marca em CSS. Use o traçado.
- Em uso decorativo, marque com `aria-hidden`. Sozinha e com função de identificação, dê o nome acessível "Merovelis".

## Implementações de referência

- Svelte 5: `rbx-systems-frontend/src/lib/design/components/Logo.svelte`, variantes `stacked`, `compact`, `horizontal` e `mark`. O componente do site ainda traz o nome anterior e muda quando o site mudar.
- Este repositório: `design-systems/rbx-systems/ui_kits/_shared/RbxPrimitives.jsx`, componentes `RbxMark` e `RbxLogo`.
