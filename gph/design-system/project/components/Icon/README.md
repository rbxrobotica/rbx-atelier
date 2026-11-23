# Icon

Ícones de traço do GPH, em grade de 24px com traço de 1,75px.

Use `Icon` para reforçar um rótulo, nunca para substituí-lo, exceto em botões só de ícone com `aria-label`.

**Props:** `name` (um dos nomes em `Icon.names`), `size` (padrão 20), `title` (só quando o ícone carrega significado sozinho; vira `role="img"`).

**Categorias:** `imoveis`, `servicos`, `veiculos`, `compra-venda`, `pessoais` desenham as cinco categorias do GPH. Use sempre o mesmo ícone para a mesma categoria.

- Faça: herdar a cor do texto (`currentColor`), alinhar ao centro da linha.
- Não faça: emoji, ícones preenchidos misturados com traço, ícone colorido de enfeite.
