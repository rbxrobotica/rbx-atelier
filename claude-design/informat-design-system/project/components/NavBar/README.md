# NavBar

Barra de navegação fixa no topo, com a assinatura horizontal, os links, "Entrar" pela conta RBX e a chamada "Solicitar atendimento"; abaixo de 768 px vira logo mais botão de menu.

## Quando usar
- Em todas as páginas públicas e na área autenticada do Informat (com links diferentes).

## O que você fornece
- `links` (até quatro: "Serviços", "Como funciona", "Acompanhar OS"), com `current` na página atual.
- `signIn`: `{ label: "Entrar", href }` apontando para o login da RBX (auth.merovelis.com). Na área logada, troque por `{ label: "Minha conta", icon: "user" }`.
- `cta`: `{ label: "Solicitar atendimento", href }`.
- `compact` para forçar o layout de celular (canvas, frames estreitos).

## Faça
- Mantenha a chamada principal visível no desktop; no celular ela fica no fim do menu, em `size="l"`.

## Não faça
- Não coloque o logotipo da RBX no topo: a relação aparece no rodapé ("um produto RBX") e no login.
- Não passe de quatro links.

## Estados
Link atual (`aria-current="page"`, fundo `placa-soft`), hover (`sunken`), foco (anel `focus`), menu fechado e aberto (`aria-expanded`, `aria-controls`).
