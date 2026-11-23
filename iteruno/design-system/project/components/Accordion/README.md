# Accordion

Perguntas frequentes com `<details>` nativo: funciona sem JavaScript, com um item aberto por vez opcional.

## Quando usar
- Perguntas frequentes em Serviços, Cursos e na página inicial; `exclusive` quando as respostas são longas.
- `items` com `content` (texto) ou `html` (marcação confiável), ou filhos `<AccordionItem>`.

## Quando não usar
- Esconder conteúdo essencial (preço, prazo): isso vai no texto da página.
- Navegação (use NavBar) ou abas.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `items` | `{ id?, title, content?, html?, open? }[]` | `[]` | Itens |
| `exclusive` | `boolean` | `false` | Um aberto por vez (`name` do `<details>`) |
| `name` | `string` | `gerado` | Nome do grupo |
| `AccordionItem.id / title / open` | `string / string / boolean` | — | Item escrito à mão |

Componente auxiliar exportado junto: `AccordionItem`.

## Em HTML puro (sem Svelte)
```html
<div class="itr-acc">
  <details class="itr-acc__item" name="faq" open>
    <summary class="itr-acc__summary"><span>Vocês atendem em casa?</span><svg class="itr-icon itr-acc__chevron" …></svg></summary>
    <div class="itr-acc__content"><p>…</p></div>
  </details>
</div>
```
`name` igual em todos os `<details>` faz o navegador abrir um por vez.

## Acessibilidade
- `<details>/<summary>`: teclado, leitor de tela e busca na página (Chrome abre o item ao achar texto) sem script.
- Chevron decorativo; o estado aberto/fechado vem do próprio elemento.
- Com `prefers-reduced-motion` o chevron não gira.

## Tokens
`--linha`, `--texto`, `--marca` (summary em hover/foco), `--space-4/5`, `--duration-fast`.
