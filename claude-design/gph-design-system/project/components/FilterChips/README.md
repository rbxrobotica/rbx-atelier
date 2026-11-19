# FilterChips

Filtros de alternância, com contagem, para refinar resultados.

Use na página de resultados para filtros rápidos (tipo de oferta, com foto, pessoa física ou profissional) e na categoria. Filtros de faixa (preço, ano) ficam no painel lateral com `TextField`.

**Props:** `items` (`{id, label, count?, icon?, selected?}`), `selected` + `onChange` (controlado), `clearable` (mostra "Limpar filtros"), `label` (rótulo do grupo para leitores de tela).

Cada chip é um botão com `aria-pressed`. A contagem usa algarismos tabulares.
