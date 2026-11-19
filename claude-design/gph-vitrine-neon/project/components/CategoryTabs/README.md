# CategoryTabs

As cinco categorias do GPH como abas, na ordem do protótipo: Imóveis, Serviços, Veículos, Compra & Venda, Pessoais.

A aba atual fica em `pink`, negrito, com `text-glow-pink`; as demais em `cyan`, regular, com sublinhado no hover. Distribuídas na largura (`space-between`); no celular quebram em duas linhas. Linha `line` embaixo.

**Props:** `value` (id atual), `items` (padrão: as cinco), `onChange`.

- `role="tablist"` com `aria-selected`; setas trocam de aba, Tab sai da lista.
- A aba ativa não depende só de cor: é também negrito.
- "Pessoais" segue a pendência 2 do proprietário; não renomeie sem decisão.
