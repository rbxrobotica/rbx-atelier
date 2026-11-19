# TextField

Campo de texto ou área de texto com rótulo sempre visível, dica, erro e contador.

## Quando usar
- Todo dado digitado: nome, e-mail, telefone, mensagem (`multiline`).
- `hint` para instruções antes do erro ("Com DDD"); `error` para a mensagem depois da validação.
- `maxlength` em mensagens: aparece o contador "n de máx".
- `mono` para série, modelo, protocolo.

## Quando não usar
- Placeholder no lugar do rótulo: o rótulo nunca some.
- Asterisco em obrigatórios: marque os opcionais com `optional` (a maioria dos campos é obrigatória).
- Mensagens de erro genéricas ("Campo inválido"): diga o que corrigir.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `label` | `string` | — | Rótulo visível (obrigatório) |
| `id` | `string` | `gerado` | Liga rótulo, dica e erro ao campo |
| `hint` | `string` | — | Instrução abaixo do rótulo |
| `error` | `string` | — | Erro; liga `aria-invalid` e `aria-describedby` |
| `optional` | `boolean` | `false` | Mostra "(opcional)" |
| `multiline` | `boolean` | `false` | `<textarea>` com `rows` |
| `rows` | `number` | `5` | Linhas da área de texto |
| `mono` | `boolean` | `false` | Fonte mono |
| `type` | `'text' | 'email' | 'tel' | 'url' | 'number' | 'password' | 'search'` | `'text'` | Tipo do `<input>` (teclado certo no celular) |
| `value` | `string` | `''` | `bind:value` |
| `name` | `string` | — | Nome enviado no formulário |
| `placeholder` | `string` | — | Exemplo curto, nunca instrução |
| `maxlength` | `number` | — | Limite com contador |
| `required / disabled` | `boolean` | `false` | Estados nativos |

## Em HTML puro (sem Svelte)
```html
<div class="itr-field">
  <label class="itr-field__label" for="nome">Nome</label>
  <p class="itr-field__hint" id="nome-dica">Como quer ser chamado</p>
  <input class="itr-input" id="nome" name="nome" aria-describedby="nome-dica" required>
</div>
<div class="itr-field">
  <label class="itr-field__label" for="msg">Mensagem</label>
  <textarea class="itr-input itr-input--area" id="msg" rows="5"></textarea>
</div>
```
Erro: `aria-invalid="true"` no campo e `<p class="itr-field__error" id="…-erro">` referenciado em `aria-describedby`.

## Acessibilidade
- `<label for>` sempre; dica e erro ligados por `aria-describedby`; erro com `aria-invalid`.
- Borda em `borda-campo` (4,07 : 1 sobre `fundo`), foco em `foco`; erro em `erro` (6,05 : 1).
- Altura `control-m` 44 px; texto 16 px (evita zoom automático no iOS).

## Tokens
`--borda-campo`, `--superficie`, `--texto`, `--texto-2`, `--erro`, `--foco`, `--control-m`, `--radius-m`, `--fs-body`, `--fs-small`, `--font-mono`.
