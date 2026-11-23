# TextField

Campo de texto com rótulo visível, dica, contador e mensagem de erro.

Use em todo formulário do GPH: publicação de anúncio, contato, conta. O rótulo fica sempre visível acima do campo; o placeholder dá exemplo, nunca instrução.

**Props:** `label`, `hint`, `error` (substitui a dica e marca `aria-invalid`), `counter` (ex.: "18/70"), `prefix`/`suffix` (ex.: "R$", "/mês"), `icon`, `multiline` + `rows`, `optional` (acrescenta "(opcional)"), mais qualquer atributo de `<input>`.

**Erros** dizem o que corrigir: "Informe um CEP com 8 números", não "Campo inválido".

- Campos do anúncio vindos do legado: `title`, `description`, `price`, `postcode` (CEP), `address`, `phones`.
