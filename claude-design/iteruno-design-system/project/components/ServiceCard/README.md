# ServiceCard

Cartão de um serviço: ícone fixo da frente, descrição, o que entra e link.

## Quando usar
- Os três serviços na página inicial e em Serviços, sempre na mesma ordem: Suporte & Manutenção (`wrench`), Sites (`globe`), Cursos (`book-open`).
- `items` lista o que entra, com check; `href` leva à página do serviço.

## Quando não usar
- Como cartão genérico de conteúdo ou para preço (use PriceCard).
- Ícones diferentes dos fixos ou "FRENTE 01" numerado.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `title` | `string` | — | Nome do serviço |
| `description` | `string` | — | Uma ou duas linhas, sem jargão |
| `items` | `string[]` | `[]` | O que entra |
| `icon` | `IconName` | `'wrench'` | Ícone de 32 px |
| `href` | `string` | — | Link do cartão |
| `linkLabel` | `string` | `'Saiba mais'` | Texto do link |
| `headingLevel` | `2 | 3 | 4` | `3` | Nível do título |

## Em HTML puro (sem Svelte)
```html
<article class="itr-service">
  <span class="itr-service__pad"><svg class="itr-icon" width="32" …></svg></span>
  <h3 class="itr-service__title">Suporte &amp; Manutenção</h3>
  <p class="itr-service__desc">…</p>
  <ul class="itr-service__list"><li>Diagnóstico com explicação</li></ul>
  <a class="itr-service__link" href="/servicos#suporte">Saiba mais →</a>
</article>
```

## Acessibilidade
- O cartão inteiro não é clicável: só o link, com texto que diz o destino.
- Lista com checks decorativos; o texto é a informação.

## Tokens
`--superficie`, `--linha`, `--marca`, `--marca-suave`, `--radius-l`, `--shadow-1`, `--space-6`.
