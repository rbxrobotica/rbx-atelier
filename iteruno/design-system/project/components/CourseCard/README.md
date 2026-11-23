# CourseCard

Cartão de curso com formato, duração, próxima turma, vagas e botão.

## Quando usar
- Lista de cursos na página inicial e em Cursos; `seats` vira Badge ("6 vagas", "Poucas vagas" em `aviso`, "Esgotado" em `erro`).
- Data da próxima turma ainda não definida: `next="[[CONFIRMAR data]]"` ou `"Sob demanda"`.

## Quando não usar
- Para conteúdo que não é turma (use ServiceCard ou texto).
- Preço no cartão de curso: o valor vai na página do curso ou em um PriceCard.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `title` | `string` | — | Nome do curso |
| `description` | `string` | — | O que a pessoa aprende |
| `format` | `string` | — | "Presencial", "Online" |
| `duration` | `string` | — | "16 h · 8 encontros" |
| `next` | `string` | — | Próxima turma |
| `seats` | `string` | — | Vagas, como Badge |
| `seatsTone` | `Tone` | `'marca'` | Tom do Badge de vagas |
| `badge` | `{ label, tone?, icon? }` | — | Selo no canto ("Novo") |
| `icon` | `IconName` | `'book-open'` | Ícone do curso |
| `action` | `{ label, href, icon? }` | — | Botão ("Reservar vaga") |
| `headingLevel` | `2 | 3 | 4` | `3` | Nível do título |

## Em HTML puro (sem Svelte)
```html
<article class="itr-course">
  <div class="itr-course__top"><span class="itr-course__pad">…ícone…</span><span class="itr-badge itr-badge--marca">Novo</span></div>
  <h3 class="itr-course__title">Informática básica</h3>
  <p class="itr-course__desc">…</p>
  <dl class="itr-course__meta"><dt>Formato</dt><dd>Presencial</dd><dt>Duração</dt><dd>16 h · 8 encontros</dd><dt>Próxima turma</dt><dd>…</dd></dl>
  <div class="itr-course__foot"><span class="itr-badge …">6 vagas</span> <a class="itr-btn itr-btn--primary itr-btn--s" href="…">Reservar vaga</a></div>
</article>
```

## Acessibilidade
- Metadados em `<dl>`: o leitor de tela lê "Formato: Presencial".
- Vagas sempre com palavra; `aviso` e `erro` diferem em luminosidade, não só em matiz.

## Tokens
`--superficie`, `--linha`, `--marca-suave`, `--texto-2`, `--radius-l`, `--space-5/6`.
