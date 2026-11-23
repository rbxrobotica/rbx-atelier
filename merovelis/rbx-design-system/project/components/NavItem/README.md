# NavItem

Item de navegação da faixa principal e da secundária, com os quatro estados. O consumidor fornece o rótulo, o destino e se é o ativo.

- Estado ativo é sublinhado de 1px em `cyan-brand` na base da faixa, com o texto em `fg-0`. Não use fundo, pílula, borda ou negrito para marcar o ativo.
- Repouso em `fg-2`. Hover em `fg-0`, transição de cor em 160ms. Foco em `ring-focus`.
- Principal em `nav-primary`, altura `nav-row`, gap `s-6` entre itens. Secundária em `nav-secondary`, altura `band-row`, divisor vertical de 1px em `border` entre itens.
- Marque o ativo com `aria-current="true"` na principal e `aria-current="page"` na secundária.
