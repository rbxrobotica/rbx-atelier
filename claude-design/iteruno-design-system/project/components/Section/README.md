# Section

Faixa de página com cabeçalho (rótulo, título, apoio), largura máxima e tons de fundo.

## Quando usar
- Toda seção de conteúdo: Serviços, Planos, Turmas, Perguntas frequentes.
- `narrow` (760 px) para texto corrido: Sobre, Política de privacidade.
- `display` com `headingLevel=1` na abertura de páginas internas sem Hero (Contato).
- `id` para âncoras do menu.

## Quando não usar
- Seções vazias só para dar espaço: ajuste o espaçamento com tokens.
- Tom `marca` para seções longas de leitura (use `fundo` ou `superficie`).

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `title` | `string` | — | Título (title-1; display-l com `display`) |
| `eyebrow` | `string` | — | Rótulo em caixa alta |
| `lead` | `string` | — | Apoio em body-l |
| `tone` | `'fundo' | 'superficie' | 'superficie-2' | 'marca'` | `'fundo'` | Fundo |
| `narrow` | `boolean` | `false` | Largura content-narrow (760 px) |
| `flush` | `boolean` | `false` | Sem espaçamento vertical |
| `center` | `boolean` | `false` | Cabeçalho centralizado |
| `display` | `boolean` | `false` | Título em display-l |
| `headingLevel` | `1 | 2 | 3` | `2` | Nível do título |
| `id` | `string` | — | Âncora |

## Em HTML puro (sem Svelte)
```html
<section class="itr-section itr-section--superficie" id="servicos">
  <div class="itr-section__inner">
    <div class="itr-section__head"><p class="itr-section__eyebrow itr-label">Serviços</p><h2 class="itr-section__title">…</h2><p class="itr-section__lead">…</p></div>
    …conteúdo…
  </div>
</section>
```
Modificadores: `--superficie`, `--superficie-2`, `--marca`, `--flush`, `__inner--narrow`, `__head--center`, `__title--display`.

## Acessibilidade
- Títulos em ordem (um `h1`, depois `h2`, `h3`): `headingLevel` existe para isso.
- Margens laterais de 16 px (360), 24 px (768) e 32 px (1200): nada encosta na borda.

## Tokens
`--content-max` 1200, `--content-narrow` 760, `--space-10/16/20` (vertical por breakpoint), `--fundo`, `--superficie`, `--superficie-2`, `--marca`.
