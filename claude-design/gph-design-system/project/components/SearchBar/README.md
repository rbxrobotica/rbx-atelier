# SearchBar

A busca do GPH: o que, em qual categoria e onde, numa única barra.

É a peça central da página inicial e o topo da página de resultados. Mantém as perguntas do produto original: "O que você está procurando?", "Todas as categorias" e "Todo o Brasil".

**Props:** `query`, `location`, `category`, `categories` (padrão: as cinco do GPH), `size` (`l` na página inicial, `m` no topo dos resultados), `placeholder`, `submitLabel`, `onSubmit({query, location})`.

No celular as três células empilham e o botão ocupa a largura toda.

- Faça: manter "Todo o Brasil" como padrão até a região inicial ser decidida.
- Não faça: esconder a categoria atrás de um ícone.
