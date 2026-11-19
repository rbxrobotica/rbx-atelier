# NavBar

A barra superior do protótipo: fundo `bar` com `glow-bar`, o `Wordmark` à esquerda, links em `nav` (lilás, inclinado) e o botão Publique seu Anúncio à direita.

Links padrão, na ordem do protótipo: Responsabilidade Corporativa, Blog, Minha Conta, Ajuda. Abaixo de `bp-m` (992px) use `compact`: esconde links e botão, mostra o botão de menu com `aria-expanded`, e o `Wordmark` desce para 34px.

**Props:** `homeHref`, `links`, `ctaLabel`, `ctaHref`, `compact`, `onToggle`.

- O `Wordmark` é o único elemento de marca; nunca um segundo logo.
- O botão primário da barra conta como o botão primário da área: a página inicial tem Publique seu Anúncio na barra e Pesquisar no bloco de busca, em áreas distintas.
- Altura mínima `nav-height` (72px); conteúdo limitado a `container`.
