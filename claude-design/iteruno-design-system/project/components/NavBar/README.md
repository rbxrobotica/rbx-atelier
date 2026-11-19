# NavBar

Barra de navegação fixa com logotipo, links e botão WhatsApp; abaixo de 768 px vira um menu com `<details>`, sem JavaScript.

## Quando usar
- Uma por site, no topo de todas as páginas, com os cinco links: Início, Serviços, Cursos, Sobre, Contato.
- `cta` é o botão primário do site ("Chamar no WhatsApp"); `current` marca a página atual.

## Quando não usar
- Mais de seis links ou submenus: simplifique a arquitetura.
- Botão "Entrar": o site não tem área logada (pendência 12 de `marca/decisoes.md`).

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `links` | `{ label, href, current? }[]` | `[]` | Links principais |
| `cta` | `{ label, href, icon? }` | — | Botão à direita |
| `logoHref` | `string` | `'/'` | Destino do logotipo |
| `current` | `string` | — | href da página atual (`aria-current="page"`) |

## Em HTML puro (sem Svelte)
```html
<header class="itr-nav">
  <div class="itr-nav__bar">
    <a class="itr-nav__brand" href="/">…logo curto…</a>
    <nav class="itr-nav__links" aria-label="Principal"><ul class="itr-nav__list"><li><a class="itr-nav__link" href="/" aria-current="page">Início</a></li>…</ul></nav>
    <a class="itr-btn itr-btn--primary itr-btn--s itr-nav__cta" href="…">Chamar no WhatsApp</a>
    <details class="itr-nav__menu"><summary class="itr-nav__toggle" aria-label="Menu">…</summary><div class="itr-nav__panel">…mesmos links…</div></details>
  </div>
</header>
```

## Acessibilidade
- `<nav aria-label>`, `aria-current="page"` no link atual, `summary` com `aria-label="Menu"`.
- Menu com `<details>`: abre e fecha por teclado e sem script; o painel fica abaixo da barra, com `veu` ao fundo.
- Links com 44 px de alvo; o CTA é um Button `s` na barra e `block` no painel.

## Tokens
`--superficie`, `--linha`, `--marca`, `--marca-suave`, `--texto`, `--z-sticky`, `--z-menu`, `--veu`, `--bp-m`.
