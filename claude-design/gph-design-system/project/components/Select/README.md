# Select

Seletor nativo com o mesmo desenho dos campos.

Use para escolhas de lista fechada com mais de 4 opções ou onde o espaço é curto: categoria, subcategoria, tipo de oferta. Até 4 opções visíveis, prefira `FilterChips` ou botões de rádio.

**Props:** `label`, `options` (strings ou `{value, label}`), `placeholder` (primeira opção vazia), `hint`, `error`, mais atributos de `<select>`.

- Não faça: usar `Select` para sim/não; esconder a opção atual.
