# Testimonial

Depoimento com citação, nome e papel; iniciais quando não há foto; só com autorização por escrito.

## Quando usar
- Clientes e alunos reais, com autorização; `role` diz o contexto ("Cliente de suporte").
- `card={false}` dentro de uma faixa que já tem fundo.

## Quando não usar
- Depoimento inventado ou "exemplo" publicado como real: até existir, o nome fica `[[CONFIRMAR nome]]`.
- Fotos sem autorização; foto de banco de imagem.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `quote` | `string` | — | Citação, sem aspas (o componente desenha a marca) |
| `name` | `string` | — | Nome; pode trazer `[[CONFIRMAR]]` |
| `role` | `string` | — | Papel ou empresa |
| `photo` | `string` | — | URL da foto (quadrada); sem ela, iniciais |
| `card` | `boolean` | `true` | Com fundo e borda |

## Em HTML puro (sem Svelte)
```html
<figure class="itr-testimonial itr-testimonial--card">
  <span class="itr-testimonial__mark" aria-hidden="true">“</span>
  <blockquote class="itr-testimonial__text">…</blockquote>
  <figcaption class="itr-testimonial__author"><span class="itr-testimonial__avatar">AN</span><span><span class="itr-testimonial__name">Ana N.</span><span class="itr-testimonial__role">Cliente de suporte</span></span></figcaption>
</figure>
```

## Acessibilidade
- `<figure>` + `<blockquote>` + `<figcaption>`: semântica de citação.
- Avatar com iniciais tem `aria-hidden`; o nome está no texto.

## Tokens
`--superficie`, `--linha`, `--marca`, `--marca-suave`, `--fs-body-l`, `--radius-l`.
