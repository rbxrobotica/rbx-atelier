# Select

Lista de opções nativa com rótulo, placeholder, dica e erro, estilizada como os outros campos.

## Quando usar
- Escolha entre poucas opções conhecidas: assunto, turma, forma de atendimento.
- `placeholder` como primeira opção desabilitada quando nada foi escolhido.

## Quando não usar
- Mais de 10 opções (use busca) ou menos de 3 (use Checkbox ou botões).
- Para escolher várias opções: use Checkbox.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `label` | `string` | — | Rótulo visível |
| `options` | `{ value, label, disabled? }[]` | `[]` | Opções |
| `placeholder` | `string` | — | Opção vazia e desabilitada |
| `value` | `string` | `''` | `bind:value` |
| `id / name` | `string` | — | Identidade e nome |
| `hint / error / optional` | `string / string / boolean` | — | Como em TextField |
| `required / disabled` | `boolean` | `false` | Estados nativos |

## Em HTML puro (sem Svelte)
```html
<div class="itr-field">
  <label class="itr-field__label" for="assunto">Assunto</label>
  <div class="itr-select">
    <select class="itr-select__control" id="assunto" name="assunto">
      <option value="" disabled selected>Escolha um assunto</option>
      <option value="suporte">Suporte e manutenção</option>
    </select>
    <svg class="itr-icon itr-select__chevron" …></svg>
  </div>
</div>
```

## Acessibilidade
- `<select>` nativo: teclado, leitor de tela e celular funcionam sem código.
- Chevron decorativo (`aria-hidden`); mesmas regras de rótulo, dica e erro do TextField.

## Tokens
Os mesmos do TextField, mais `--texto-2` no chevron.
