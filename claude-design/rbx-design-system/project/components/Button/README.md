# Button

Botão e CTA em três níveis. O consumidor fornece o rótulo e a ação; ícones só em botões de ícone, com `aria-label`.

- Primário: fundo `cta`, texto `on-cta`, estilo `eyebrow` em caixa alta, padding 10px por `s-4`, raio `radius-sm`. Hover em `cyan-signal`. Um por tela; no header é o Contato.
- Secundário: fundo `cyan-subtle`, borda 1px `cyan-dim`, texto `cyan-brand` no escuro e `cyan-muted` no claro, mesmo padding e tipografia. Hover reforça a borda para `cyan-brand`. É o `.rbx-cta` do site atual.
- Terciário: texto `fg-0` com sublinhado de 1px em `border-strong`, hover em `cyan-brand`. Para ações de baixo peso dentro do texto.
- Foco sempre em `ring-focus`. Desabilitado em `fg-3` sobre `bg-2`, sem hover. Durante uma mutação, desabilite a superfície inteira até a resposta chegar.
- Altura mínima de 44px em toque; em desktop o padding define a altura.
