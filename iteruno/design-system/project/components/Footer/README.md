# Footer

Rodapé com logotipo, promessa, colunas de links, contato e linha legal.

## Quando usar
- Uma vez por site, em todas as páginas; `contact` repete WhatsApp, e-mail, endereço e horário.
- `legal` recebe CNPJ e cidade quando existirem; até lá, `[[CONFIRMAR]]`.
- `sign` fica vazio por padrão: a linha "um produto RBX" depende da pendência 3 de `marca/decisoes.md`.
- WhatsApp e e-mail só viram link quando o dado existe (`whatsappHref` presente; e-mail sem `[[CONFIRMAR]]`); até lá aparecem como texto destacado.
- `children` entra na linha de base: é onde o site põe o `ThemeToggle`. Link com `external: true` abre em nova aba.

## Quando não usar
- Mapa do site completo ou newsletter.
- Logotipo de parceiros ao lado do símbolo (proibido pelo Brand System).

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `promise` | `string` | — | Frase sob o logotipo |
| `columns` | `{ title, links: { label, href, icon? }[] }[]` | `[]` | Colunas de links |
| `contact` | `{ whatsapp, whatsappHref?, email, address, hours }` | — | Coluna Contato; sem `whatsappHref` ou com e-mail pendente, vira texto |
| `legal` | `string` | — | Texto depois de "© ano Iteruno Tecnologias" |
| `year` | `number` | `ano atual` | Ano |
| `sign` | `string` | — | Linha de assinatura opcional |
| `children` | `snippet` | — | Conteúdo extra na linha de base (botão de tema) |

## Em HTML puro (sem Svelte)
```html
<footer class="itr-footer">
  <div class="itr-footer__grid">
    <div class="itr-footer__brand">…logo…<p class="itr-footer__promise">…</p></div>
    <nav class="itr-footer__col" aria-label="Serviços"><p class="itr-label itr-footer__title">Serviços</p><ul><li><a href="…">Suporte &amp; Manutenção</a></li></ul></nav>
  </div>
  <div class="itr-footer__base"><p class="itr-footer__legal">© 2026 Iteruno Tecnologias</p></div>
</footer>
```

## Acessibilidade
- Cada coluna é um `<nav aria-label>` com o título da coluna.
- Links em `texto-2` (6,60 : 1) com sublinhado em hover; ícones decorativos.
- Uma coluna no celular, duas a partir de 768 px, quatro a partir de 1200 px.

## Tokens
`--superficie`, `--linha`, `--texto-2`, `--texto-3`, `--space-10/16`, `--content-max`.
