# Breadcrumb

Caminho da página, visível, gerado da mesma lista que alimenta o BreadcrumbList do JSON-LD. O consumidor fornece a lista de itens com nome e caminho; o último é a página atual.

- Mostre em toda página de profundidade dois ou mais. Na home e em páginas de primeiro nível não renderize nada.
- Estilo `breadcrumb` em caixa alta, cor `fg-2`. O primeiro item é o ícone de início em traço 1,5px com `aria-label="Início"`. Separador › em `fg-3`, com `aria-hidden="true"`. Página atual em `fg-0`, sem link, com sublinhado de 1px em `cyan-dim` e `aria-current="page"`.
- Envolva em `<nav aria-label="Caminho">` com uma lista ordenada. Gap `s-2` entre itens.
- Posição: logo abaixo da faixa secundária, com `s-5` acima e `s-7` abaixo, antes do `eyebrow` do cabeçalho de página.
- Abaixo de 768px mantenha os dois últimos níveis e resuma os anteriores em um item "…" que leva ao nível anterior.
