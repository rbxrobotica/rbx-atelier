# Checkbox

Caixa de seleção com rótulo, descrição e erro, para consentimento e opções independentes.

## Quando usar
- Consentimento ("Li e concordo com a Política de privacidade"), com `description` explicando o uso dos dados.
- Opções independentes entre si ("Quero receber avisos de novas turmas").

## Quando não usar
- Escolha única entre alternativas (use Select).
- Ligar/desligar com efeito imediato (um interruptor; não há no sistema).

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `label` | `string` | — | Rótulo clicável |
| `description` | `string` | — | Linha de apoio abaixo do rótulo |
| `error` | `string` | — | Erro ("Marque esta opção para continuar.") |
| `checked` | `boolean` | `false` | `bind:checked` |
| `id / name / value` | `string` | — | Identidade e valor enviado |
| `required / disabled` | `boolean` | `false` | Estados nativos |

## Em HTML puro (sem Svelte)
```html
<label class="itr-check" for="lgpd">
  <input class="itr-checkbox" type="checkbox" id="lgpd" name="lgpd" required>
  <span class="itr-check__body">Li e concordo com a Política de privacidade
    <span class="itr-check__desc">Seus dados são usados só para responder a esta mensagem.</span></span>
</label>
```

## Acessibilidade
- Input nativo (`appearance: none` só na pele): espaço e teclado funcionam; área clicável inclui o rótulo.
- Caixa de 20 px com borda `borda-campo` (3 : 1 ou mais); marcada em `marca` com o check em `sobre-marca`.
- Erro liga `aria-invalid` e `aria-describedby`.

## Tokens
`--borda-campo`, `--marca`, `--sobre-marca`, `--erro`, `--foco`, `--radius-s`.
