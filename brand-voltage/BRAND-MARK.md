# Marca RBX

**Situação:** oficial, adotada em 8 de novembro de 2026.
**Origem:** estudo de marca feito no RBX Design System (Claude Design), com três direções comparadas a marcas vizinhas na Suíça, no Brasil e no setor. A direção escolhida pelo fundador foi a B2, asset `Logos/marca-rbx-b2.svg` daquele sistema. Este repositório é a cópia pública de referência: o traçado aqui, no asset de origem e no site é o mesmo. Substitui o disco com três cortes diagonais, que colidia na estrutura com a marca do Linear e virava listra a 16px.

## A marca

Um quadrado em tinta única com os cantos superior esquerdo e inferior direito cortados a 45°. Cada corte tem 46% do lado. O corte diagonal vem da marca anterior; a forma fechada é o que a mantém legível a 12px e distinta na barra de abas.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#22E5E5" d="M30 8 H56 V34 L34 56 H8 V30 Z"/></svg>
```

Este bloco registra a geometria. Quem precisar do traçado copia o `d` sem alterar.

## Arquivos

| Arquivo | Tinta e fundo | Uso |
|---|---|---|
| `marks/rbx-mark.svg` | `cyan-brand` #22E5E5, sem fundo | Header, documentos e qualquer superfície escura |
| `marks/rbx-mark-on-light.svg` | #0F8F8F, sem fundo | Fundos claros: papel, materiais institucionais |
| `marks/rbx-mark-tile.svg` | `cyan-brand` sobre `bg-0` #07080A | Favicon, avatar, logo da organização em dados estruturados |
| `marks/rbx-app-icon.svg` | `bg-0` sobre `cyan-brand` | Ícone de app e de tela inicial |
| `marks/archive/` | | Marcas aposentadas, só para registro |

Em tinta única de impressão ou gravação, use a cor de texto principal do tema: `fg-0`.

## Wordmark

O wordmark é composto em tipografia ao lado da marca. Ele não é desenhado: "RBX" e "Systems" são texto.

| Lockup | Composição | Uso |
|---|---|---|
| Empilhado, o padrão | Marca à esquerda. À direita, "RBX" em Archivo 700 com largura 125% e espaçamento -0.02em, sobre "SYSTEMS" em JetBrains Mono 500, caixa alta, espaçamento 0.2em. Alinhados à esquerda, com a marca centralizada na altura do bloco de texto e 12px entre marca e texto. | Header em desktop: marca 28px, RBX 17px, SYSTEMS 9px |
| Compacto | Marca e "RBX", sem SYSTEMS. | Header em mobile: marca 24px, RBX 16px |
| Horizontal | Marca, "RBX" em Archivo 700 com largura 125% e "Systems" em Inter 300 na cor `fg-1`, na mesma linha e no mesmo corpo de 17px, os três centralizados na altura. | Rodapé, documentos, assinaturas. No rodapé do site a marca tem 24px |

Archivo existe só para o wordmark. Não use Archivo em texto de interface. A fonte e a classe `.rbx-wordmark` estão em `colors_and_type.css`, que fixa a versão v25 da Archivo: uma versão nova só chega ao wordmark por uma edição revisada daquela URL.

Os 12px entre marca e texto são o valor nominal de `s-3`, em raiz de 16px. O site usa raiz de 15px, e lá esse intervalo mede 11,25px. Os tamanhos da marca e do texto estão em px e são os mesmos.

Os arquivos `wordmarks/rbx-wordmark-systems.svg` e `wordmarks/rbx-wordmark-systems-stacked.svg` são exportações de conveniência, com o wordmark como texto SVG. Eles só saem como desenhado onde Archivo, Inter e JetBrains Mono estão instaladas, ou quando o SVG entra inline em uma página que carrega essas fontes. Usados como imagem em outro lugar, o navegador troca a fonte. A referência é o lockup em tipografia: `preview/voltage-preview.html` aqui e o componente `Logo.svelte` do site. Uma versão vetorizada do wordmark ainda não existe.

Os lockups `rbx-wordmark-holding.svg`, `rbx-wordmark-robson.svg` e `rbx-wordmark-truthmetal.svg` são anteriores a esta decisão e ainda seguem o desenho antigo, em Inter com sublinhado. Não foram revistos.

## Regras

- Favicon e ícone de app são sempre a marca. Nunca uma letra.
- Área de respiro: metade da altura da marca em todos os lados.
- Tamanho mínimo: 12px.
- Não gire, não incline, não aplique gradiente, sombra ou contorno, e não coloque a marca sobre fotografia.
- Não redesenhe a marca em CSS. Use o traçado.
- Em uso decorativo, marque com `aria-hidden`. Sozinha e com função de identificação, dê o nome acessível "RBX".

## Implementações de referência

- Svelte 5: `rbx-systems-frontend/src/lib/design/components/Logo.svelte`, variantes `stacked`, `compact`, `horizontal` e `mark`.
- Este repositório: `design-systems/rbx-systems/ui_kits/_shared/RbxPrimitives.jsx`, componentes `RbxMark` e `RbxLogo`.
