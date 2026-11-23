# Form

Formulário com linhas de uma ou duas colunas, resumo de erros que recebe o foco e validação em português.

## Quando usar
- Todo formulário do site (Contato, reserva de vaga) com `Form`, `FormRow`, `FormActions`.
- Ao enviar, valide com `validar(form)` e passe o resultado em `errors`: o resumo lista cada erro com link para o campo e recebe o foco.
- `FormActions` leva o botão primário e, com `note`, a frase de expectativa ("Resposta em até um dia útil.").

## Quando não usar
- Formulários longos em etapas (não há assistente no sistema; divida em páginas).
- Validação a cada tecla: valide ao sair do campo ou ao enviar.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `errors` | `{ id, message }[]` | `[]` | Erros a listar no resumo; `id` é o do campo |
| `summaryTitle` | `string` | `'Corrija os campos abaixo para enviar'` | Título do resumo |
| `novalidate` | `boolean` | `true` | Desliga a validação nativa; `validar` assume |
| `onsubmit` | `(e) => void` | — | Trate o envio (o site estático usa um serviço de formulário ou mailto) |
| `FormRow.columns` | `1 | 2` | `1` | Duas colunas a partir de 768 px |
| `FormActions.note` | `string` | — | Nota abaixo dos botões |

Componentes auxiliares exportados junto: `FormRow`, `FormActions` e a função `validar`.

## Em HTML puro (sem Svelte)
```html
<form class="itr-form" novalidate>
  <div class="itr-form__summary" role="alert" tabindex="-1" hidden>…</div>
  <div class="itr-form__row itr-form__row--2"> <!-- dois .itr-field --> </div>
  <div class="itr-form__actions"><button class="itr-btn itr-btn--primary" type="submit">Enviar mensagem</button></div>
  <p class="itr-form__note">Resposta em até um dia útil.</p>
</form>
```
Validação sem framework: `Iteruno.validar(form)` devolve `[{ id, name, message }]`; regras: `required`, `type="email"`, `data-tipo="telefone"` (DDD + número, só dígitos), `minlength`.

## Acessibilidade
- Resumo com `role="alert"` e `tabindex="-1"`; recebe `focus()` ao aparecer; cada item é um link `#id` para o campo.
- Cada campo mostra o próprio erro (TextField, Select, Checkbox) além do resumo.
- Mensagens dizem o que fazer: "Confira o telefone: use DDD e número, só dígitos."

## Tokens
`--erro`, `--erro-suave`, `--space-4/5/6`, `--radius-m`, `--bp-m` (768) para a segunda coluna.
