# ContactCTA

Faixa de conversão em `marca` com o símbolo, texto e botão WhatsApp (wa.me com mensagem pronta); versão cartão para dentro de páginas.

## Quando usar
- Fim da página inicial e das páginas de serviço (faixa); ao lado do formulário de Contato (`card`).
- `whatsapp` com DDI e DDD, só dígitos; `message` é o texto que já vai preenchido na conversa.
- `meta` para horário e prazo de resposta, que podem trazer `[[CONFIRMAR]]`.

## Quando não usar
- Mais de um por página.
- Número de WhatsApp inventado: `[[CONFIRMAR 5511…]]` até existir (o link fica `#`).

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `title` | `string` | `'Vamos resolver isso?'` | Título em display-l |
| `text` | `string` | — | Uma frase de convite |
| `whatsapp` | `string` | — | Dígitos (5511900000000) ou `[[CONFIRMAR]]` |
| `href` | `string` | — | Destino alternativo do botão enquanto não há número (o site usa `/contato/`) |
| `message` | `string` | `'Olá! Vim pelo site da Iteruno e preciso de ajuda com '` | Mensagem pré-preenchida |
| `email` | `string` | — | Mostra o botão de e-mail (`mailto:`) |
| `buttonLabel / emailLabel` | `string` | `'Chamar no WhatsApp' / 'Enviar e-mail'` | Rótulos |
| `meta` | `string` | — | Horário, prazo |
| `card` | `boolean` | `false` | Cartão em vez de faixa |
| `pattern / symbol` | `boolean` | `true` | Padrão de sinal e símbolo |
| `headingLevel` | `2 | 3` | `2` | Nível do título |

## Em HTML puro (sem Svelte)
```html
<section class="itr-cta">
  <div class="itr-cta__inner">
    <div class="itr-cta__body"><h2 class="itr-cta__title">Vamos resolver isso?</h2><p class="itr-cta__text">…</p><p class="itr-cta__meta">Seg. a sex., 9h às 18h</p></div>
    <div class="itr-cta__actions"><a class="itr-btn itr-btn--inverse" href="https://wa.me/5511…?text=…">Chamar no WhatsApp</a></div>
  </div>
</section>
```

## Acessibilidade
- Texto `sobre-marca` sobre `marca` (4,91 : 1); botões `inverse`.
- Símbolo e padrão são `aria-hidden`; o link do WhatsApp abre em nova aba com `rel="noopener"`.
- A mensagem pronta é curta e deixa a pessoa completar.

## Tokens
`--marca`, `--marca-forte`, `--sobre-marca`, `--font-display`, `--fs-display-l`, `--radius-l`, `--space-10/12`.
