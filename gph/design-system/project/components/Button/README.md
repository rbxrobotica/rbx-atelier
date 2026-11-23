# Button

O botão do GPH: primário em Azul Klein para a ação principal da tela, secundário para o resto.

**Primário** (`variant="primary"`) aparece no máximo uma vez por área de tela: "Publique seu anúncio", "Pesquisar", "Enviar mensagem", "Enviar para revisão". **Secundário** é o padrão. **Quiet** serve a ações de baixo peso em barras e cartões. **Danger** só para excluir, sempre seguido de confirmação em `Dialog`.

**Props:** `variant`, `size` (`s` 36px, `m` 44px, `l` 52px), `icon`, `iconEnd`, `iconOnly` (exige `aria-label`), `loading`, `disabled`, `block`, `href` (vira link `<a>`), `type`.

**Texto:** verbo no infinitivo ou imperativo, caixa de frase, sem ponto final: "Ver telefone", "Salvar rascunho". Nunca "Clique aqui".

- Estados: repouso, hover, foco (anel `focus`), carregando (`aria-busy`), desabilitado. No celular, a altura mínima é 44px.
