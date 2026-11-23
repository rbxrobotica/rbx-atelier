# Button

O botão do GPH: primário rosa com brilho para a ação principal da tela, secundário com contorno lilás para o resto.

**Primário** (`variant="primary"`) aparece no máximo uma vez por área de tela: "Publique seu Anúncio", "Pesquisar", "Enviar mensagem". Preenchimento `pink-fill`, texto `on-pink`, borda e brilho em `pink` (`glow-pink`); hover `pink-strong`. **Secundário** é o padrão: contorno e texto `lilac`, fundo `raised` no hover. **Quiet** serve a ações de baixo peso em barras e cartões.

**Props:** `variant`, `size` (`m` 44px, `l` 52px), `block`, `href` (vira `<a>`), `type`, `disabled`, `loading`, `onClick`, `aria-label`.

**Texto:** verbo no infinitivo ou imperativo, sem ponto final. Caixa de título só nas chamadas herdadas do protótipo ("Publique seu Anúncio"); caixa de frase no resto ("Enviar mensagem").

- Estados: repouso, hover, foco (anel `focus`), carregando (`aria-busy`, spinner), desabilitado (sem brilho).
- Não existe variante de perigo em rosa: excluir usa secundário com texto em `err`, seguido de confirmação.
