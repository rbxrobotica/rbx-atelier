# Hero

Abertura de página com a promessa em display, texto de apoio, dois botões e o padrão de sinal.

## Quando usar
- Primeira dobra da página inicial com `headingLevel=1`; abertura de Serviços e Cursos com `tone="marca"` ou `superficie`.
- `title` é a promessa em caixa de frase ("Tecnologia que funciona, explicada sem jargão.").

## Quando não usar
- Mais de um por página.
- Texto de apoio longo (mais de duas linhas no desktop).
- Foto de banco de imagem: o único adorno é o padrão de sinal.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `title` | `string` | — | A promessa (display-xl; 40 px no celular) |
| `eyebrow` | `string` | — | Rótulo em caixa alta acima |
| `text` | `string` | — | Apoio em body-l |
| `primary / secondary` | `{ label, href, icon? }` | — | Botões |
| `tone` | `'fundo' | 'superficie' | 'marca'` | `'fundo'` | Fundo da faixa |
| `pattern` | `boolean` | `true` | Padrão de sinal à direita (a partir de 1200 px) |
| `headingLevel` | `1 | 2 | 3` | `1` | Nível do título |

## Em HTML puro (sem Svelte)
```html
<section class="itr-hero">
  <div class="itr-hero__inner">
    <div class="itr-hero__body">
      <p class="itr-hero__eyebrow itr-label">Iteruno Tecnologias · São Paulo</p>
      <h1 class="itr-hero__title itr-display-xl">Tecnologia que funciona, explicada sem jargão.</h1>
      <p class="itr-hero__text itr-body-l">…</p>
      <div class="itr-hero__actions">…dois .itr-btn…</div>
    </div>
    <div class="itr-hero__art" aria-hidden="true">…svg .itr-sinal…</div>
  </div>
</section>
```
Modificadores: `itr-hero--superficie`, `itr-hero--marca` (botões `inverse`).

## Acessibilidade
- Um `h1` por página; o padrão é `aria-hidden`.
- Sobre `marca`, texto em `sobre-marca` (4,91 : 1) e botões `inverse`.
- O padrão nunca fica atrás do texto: só à direita, e some abaixo de 1200 px.

## Tokens
`--fs-display-xl` / `--fs-display-xl-m`, `--font-display`, `--marca`, `--sobre-marca`, `--content-max`, `--space-12/16/20`.
