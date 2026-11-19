# SearchBar

A busca da página inicial, como o protótipo a desenhava: a pergunta em ciano, categoria, região e um botão Pesquisar de largura total, empilhados.

A pergunta é o estilo `prompt` ("O que você está procurando?"); os dois `<select>` ficam em `surface` com borda `field`; o botão é `Button primary` de 52px. No desktop, margem lateral `search-inset` (12%); no celular, `space-4`. Use `compact` no topo da página de resultados.

**Props:** `prompt`, `category`, `region`, `regions`, `compact`, `onSubmit`, `id`.

- Os selects têm `<label>` só para leitores de tela; a pergunta é o rótulo visível do bloco.
- Enviar leva a Resultados com os filtros na URL (`?categoria=&onde=`), para que a página possa ser compartilhada.
- Não acrescente campo de texto livre sem decisão do proprietário: o protótipo buscava só por categoria e região.
