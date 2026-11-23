# Guia de implementação

## Ordem de construção: tokens, componentes, telas

1. **Tokens.** Carregue as variáveis antes de tudo. Fonte única: `tokens.json` (formato desta página). Exportações prontas no grupo Tokens: `inf.css` (variáveis com prefixo `--inf-`, claro em `:root`, escuro por `prefers-color-scheme` e por `[data-theme="dark"]`) e `inf.tokens.json` (formato DTCG). Os nomes sem prefixo (`--placa`, `--space-4`) são os que `bundle.css` usa.
2. **Componentes.** Carregue React 18, `components/bundle.css` e `components/bundle.js`; use `window.Informat.<Componente>`. Os tipos estão em `components/index.d.ts`.
3. **Telas.** Monte com os componentes e com layout fluido (`flex-wrap`, grades `auto-fit` com `card-min`). As oito telas e os protótipos estão no canvas "Informat · Telas e Protótipos".

## Inventário de componentes

| Componente | Uso | Jornadas (telas) | Estados |
| --- | --- | --- | --- |
| Icon | Ícone de traço com palavra ao lado | Todas | herda cor; decorativo ou com rótulo |
| Logo | Assinatura, wordmark, símbolo | NavBar, rodapé, login | cor, mono, claro e escuro |
| Button | Ação | Todas | repouso, hover, foco, carregando, desabilitado |
| TextField | Texto curto e longo | Solicitar atendimento, Aprovação (pastas) | repouso, foco, erro, desabilitado, somente leitura, contador |
| Select | Lista de opções | Solicitar atendimento | repouso, foco, erro, desabilitado |
| ChoiceCard | Escolha explicada | Presencial ou remoto, Solicitar | repouso, selecionado, foco, desabilitado, erro |
| UploadField | Fotos do problema | Solicitar atendimento | vazio, arrastando, enviando, enviada, falhou |
| BackupAgreement | Combinado de dados | Aprovação do escopo, Entrega (leitura) | nada escolhido, escolhido, sem backup com ciência, leitura |
| ServiceCard | Frente de serviço | Início, Página de serviço | estático, link com foco |
| StatusBadge | Carimbo de estado da OS | Diagnóstico, Aprovação, Acompanhamento, Entrega | 8 estados |
| OsHeader | Cabeçalho da OS | Diagnóstico, Aprovação, Acompanhamento, Entrega | segue o status |
| ServiceTimeline | Cinco etapas | Início (horizontal), Acompanhamento (vertical) | concluída, atual, a seguir |
| QuoteSummary | Orçamento e decisão | Diagnóstico e orçamento, Aprovação | aguardando, aprovado (sem ações), vencido |
| Checklist | Testes e escopo | Aprovação (interativo), Entrega (testes) | passou, falhou, pendente, não se aplica; marcado |
| Alert | Aviso no conteúdo | Todas | info, warn, ok, err, neutro |
| Toast | Confirmação passageira | Aprovação, Acompanhamento | ok, err com ação, neutro |
| Skeleton | Carregando | Acompanhamento, Diagnóstico | card, row, text |
| Dialog | Decisão | Diagnóstico (recusar), Aprovação (sem backup) | aberto, fechado |
| EmptyState | Lista vazia | Área logada sem OS | único |
| NavBar | Navegação | Todas | desktop, compacto, menu aberto |
| SiteFooter | Rodapé e assinatura RBX | Todas | padrão, compacto |

### Adições intencionais
Além da lista do briefing, três componentes entram por motivo de marca: **Logo** (desenha os contornos oficiais e segue o tema pelos tokens, para que ninguém escreva "informat" em texto vivo), **OsHeader** (a OS é o objeto central da marca e aparece em quatro telas; repetir a marcação abriria espaço para variações) e **SiteFooter** (garante a assinatura "um produto RBX" exatamente igual em todas as páginas).

## Comportamento responsivo

- **Breakpoints:** `bp-s` 480, `bp-m` 768, `bp-l` 1024, `bp-xl` 1280 (referência das telas desktop). As telas são fluidas; os breakpoints só fazem três trocas:
  1. abaixo de 768 px, o hero troca `display-xl` por `display-xl-mobile`;
  2. abaixo de 768 px, a NavBar vira logo mais menu (ou com `compact`);
  3. abaixo de 768 px, a ServiceTimeline horizontal vira vertical.
- **O que empilha:** grades de ServiceCard e ChoiceCard (mínimo `card-min`, 240 px), colunas do OsHeader, colunas do rodapé, o par conteúdo e orçamento (lado a lado a partir de cerca de 1024 px, com a coluna do orçamento de 380 a 440 px), botões do QuoteSummary (primário em linha inteira).
- **Margens:** `space-12` no desktop, `space-4` no celular; seções separadas por `space-20` e `space-16`.
- **Toque:** todo alvo com 44 px (`control-m`) ou mais; o botão final de formulário no celular usa `block`.

## Interações

- **Solicitar atendimento:** formulário em uma coluna, validação ao sair do campo e ao enviar; fotos sobem em segundo plano; o envio leva para Presencial ou remoto.
- **Detalhe técnico:** no diagnóstico, o resumo vem em linguagem simples e o detalhe técnico fica num `<details>` com "Ver detalhes técnicos".
- **Aprovar escopo:** o botão só habilita quando o escopo foi conferido e o combinado de backup escolhido (com a ciência marcada, se for "Sem backup"). Depois da aprovação, o pagamento segue para a RBX Commerce e o Toast confirma.
- **Recusar:** abre Dialog (`alertdialog`) com a consequência e o botão `danger` "Recusar orçamento".
- **Tirar dúvida:** abre a conversa da OS (mensagens pela RBX Comms) com o assunto preenchido.
- **Acompanhamento:** cada mudança de etapa atualiza o StatusBadge e a ServiceTimeline e gera mensagem da central RBX.
- **Movimento:** `duration-fast` para cor, `duration-base` para entrar e sair; nada com rebote; tudo parado com `prefers-reduced-motion`.

## Estados

| Estado | Como aparece | Componentes |
| --- | --- | --- |
| Carregando | Skeleton no formato do conteúdo; `loading` no botão durante envio | Skeleton, Button |
| Vazio | EmptyState com o motivo de trilhas e a próxima ação | EmptyState |
| Erro | Alert `err` com o que fazer; erro de campo com borda `err`, ícone e mensagem | Alert, TextField, Select, UploadField |
| Sucesso | Toast `ok` para ações; Alert `ok` quando o cliente precisa guardar a informação | Toast, Alert |
| Indisponível | Opção desabilitada com motivo na descrição (ex.: remoto não serve para hardware); serviço fora de `[CIDADE]` com Alert `warn` | ChoiceCard, Alert |
| Foco | Anel sólido de 2 px em `focus`, 2 px de afastamento; `surface` dentro do Toast | todos os interativos |
| Desabilitado | Fundo `sunken`, texto `ink-3`, cursor bloqueado, motivo visível perto | Button, campos, ChoiceCard |

## Pontos de integração com a plataforma RBX

| Tela ou momento | Serviço RBX | Contrato |
| --- | --- | --- |
| Site público (Início, Página de serviço) | nenhum (domínio da marca `[dominio-informat]`) | Páginas estáticas; a chamada "Solicitar atendimento" leva à área logada em `app.merovelis.com/informat`. |
| "Entrar" na NavBar; início de Solicitar atendimento | RBX Identity (`auth.merovelis.com`) | Login OIDC pela conta RBX; texto "Entrar com sua conta RBX" e "um produto RBX". O produto não guarda senha. |
| Contato na solicitação | RBX Identity | Nome, e-mail e telefone vêm do perfil da conta RBX; a tela mostra e permite corrigir no perfil, não pede de novo. |
| Acesso à área do Informat | RBX Identity e RBX Commerce | Verificação de sessão e de direito de uso (entitlement) no Hub `app.merovelis.com/informat`. |
| Aprovação do escopo e pagamento | RBX Commerce | Depois de "Aprovar escopo", o cliente segue para o pagamento processado pela RBX; a OS recebe o resultado (aprovado, pendente, falhou). Nenhum formulário de cartão no produto. |
| Mensagens de etapa, "Tirar dúvida", aviso de orçamento | RBX Comms | Mensagens e notificações enviadas pela central RBX, com o número da OS; o canal (e-mail, WhatsApp, SMS) é `[CANAL]`, a definir. |
| Entrega, avaliação opcional | RBX Comms | Pedido de avaliação enviado pela central; a resposta volta para a OS. |

## Como consumir os tokens

- **Na página do sistema:** os componentes leem as variáveis sem prefixo geradas de `tokens.json`.
- **Num projeto:** importe `assets/Tokens/inf.css` (variáveis `--inf-*` mais o `@import` das fontes do Google) ou converta `assets/Tokens/inf.tokens.json` (DTCG) no seu pipeline. Altere sempre `tokens.json` e as exportações juntos; o gerador está em `src/tokens_src.py` no pacote de origem.
- **Tema escuro:** escuro automático por `prefers-color-scheme`, forçado com `data-theme="dark"` no elemento raiz, e claro forçado com `data-theme="light"`.

## Contraste medido

Todos os pares de texto e marca citados nas notas de uso dos tokens, nos dois temas (WCAG 2). Nenhum par ficou abaixo do mínimo.

| texto ou marca | fundo | mínimo | claro | escuro |
| --- | --- | --- | --- | --- |
| `ink` | `base` | 4.5:1 | 16.34:1 | 15.97:1 |
| `ink` | `surface` | 4.5:1 | 17.76:1 | 14.86:1 |
| `ink` | `sunken` | 4.5:1 | 14.87:1 | 16.57:1 |
| `ink` | `placa-soft` | 4.5:1 | 15.13:1 | 12.17:1 |
| `ink` | `cobre-soft` | 4.5:1 | 14.68:1 | 12.48:1 |
| `ink` | `info-soft` | 4.5:1 | 14.65:1 | 13.36:1 |
| `ink` | `warn-soft` | 4.5:1 | 15.83:1 | 12.53:1 |
| `ink` | `ok-soft` | 4.5:1 | 15.41:1 | 12.23:1 |
| `ink` | `err-soft` | 4.5:1 | 15.61:1 | 13.91:1 |
| `ink-2` | `base` | 4.5:1 | 8.53:1 | 10.38:1 |
| `ink-2` | `surface` | 4.5:1 | 9.27:1 | 9.65:1 |
| `ink-2` | `sunken` | 4.5:1 | 7.76:1 | 10.76:1 |
| `ink-2` | `placa-soft` | 4.5:1 | 7.90:1 | 7.91:1 |
| `ink-2` | `cobre-soft` | 4.5:1 | 7.66:1 | 8.11:1 |
| `ink-2` | `info-soft` | 4.5:1 | 7.65:1 | 8.68:1 |
| `ink-2` | `warn-soft` | 4.5:1 | 8.26:1 | 8.14:1 |
| `ink-2` | `ok-soft` | 4.5:1 | 8.04:1 | 7.94:1 |
| `ink-2` | `err-soft` | 4.5:1 | 8.15:1 | 9.04:1 |
| `ink-3` | `base` | 4.5:1 | 5.87:1 | 6.88:1 |
| `ink-3` | `surface` | 4.5:1 | 6.38:1 | 6.40:1 |
| `ink-3` | `sunken` | 4.5:1 | 5.34:1 | 7.13:1 |
| `ink-3` | `placa-soft` | 4.5:1 | 5.43:1 | 5.24:1 |
| `ink-3` | `cobre-soft` | 4.5:1 | 5.27:1 | 5.37:1 |
| `ink-3` | `info-soft` | 4.5:1 | 5.26:1 | 5.75:1 |
| `ink-3` | `warn-soft` | 4.5:1 | 5.68:1 | 5.39:1 |
| `ink-3` | `ok-soft` | 4.5:1 | 5.53:1 | 5.26:1 |
| `ink-3` | `err-soft` | 4.5:1 | 5.61:1 | 5.99:1 |
| `surface` | `ink` | 4.5:1 | 17.76:1 | 14.86:1 |
| `surface` | `ink-2` | 4.5:1 | 9.27:1 | 9.65:1 |
| `placa` | `base` | 4.5:1 | 7.13:1 | 10.06:1 |
| `placa` | `surface` | 4.5:1 | 7.75:1 | 9.36:1 |
| `placa` | `sunken` | 4.5:1 | 6.49:1 | 10.43:1 |
| `placa` | `placa-soft` | 4.5:1 | 6.60:1 | 7.66:1 |
| `placa-strong` | `base` | 4.5:1 | 9.44:1 | 12.49:1 |
| `placa-strong` | `surface` | 4.5:1 | 10.26:1 | 11.62:1 |
| `placa-strong` | `placa-soft` | 4.5:1 | 8.74:1 | 9.52:1 |
| `on-placa` | `placa` | 4.5:1 | 7.75:1 | 10.06:1 |
| `on-placa` | `placa-strong` | 4.5:1 | 10.26:1 | 12.49:1 |
| `serigrafia` | `mascara` | 4.5:1 | 7.37:1 | 6.78:1 |
| `cobre-ink` | `base` | 4.5:1 | 6.29:1 | 10.59:1 |
| `cobre-ink` | `surface` | 4.5:1 | 6.83:1 | 9.85:1 |
| `cobre-ink` | `cobre-soft` | 4.5:1 | 5.65:1 | 8.27:1 |
| `cobre` | `base` | 3.0:1 | 4.00:1 | 7.95:1 |
| `cobre` | `surface` | 3.0:1 | 4.34:1 | 7.40:1 |
| `cobre` | `sunken` | 3.0:1 | 3.64:1 | 8.24:1 |
| `cobre-via` | `mascara` | 3.0:1 | 3.30:1 | 3.30:1 |
| `info` | `info-soft` | 4.5:1 | 6.72:1 | 7.36:1 |
| `info` | `surface` | 4.5:1 | 8.14:1 | 8.19:1 |
| `info` | `base` | 4.5:1 | 7.49:1 | 8.80:1 |
| `warn` | `warn-soft` | 4.5:1 | 5.28:1 | 7.85:1 |
| `warn` | `surface` | 4.5:1 | 5.93:1 | 9.30:1 |
| `warn` | `base` | 4.5:1 | 5.45:1 | 10.00:1 |
| `ok` | `ok-soft` | 4.5:1 | 5.62:1 | 7.97:1 |
| `ok` | `surface` | 4.5:1 | 6.47:1 | 9.68:1 |
| `ok` | `base` | 4.5:1 | 5.96:1 | 10.41:1 |
| `ok` | `sunken` | 4.5:1 | 5.42:1 | 10.79:1 |
| `err` | `err-soft` | 4.5:1 | 6.32:1 | 6.80:1 |
| `err` | `surface` | 4.5:1 | 7.19:1 | 7.26:1 |
| `err` | `base` | 4.5:1 | 6.61:1 | 7.80:1 |
| `field` | `surface` | 3.0:1 | 3.74:1 | 3.84:1 |
| `field` | `base` | 3.0:1 | 3.44:1 | 4.12:1 |
| `field` | `sunken` | 3.0:1 | 3.13:1 | 4.28:1 |
| `focus` | `base` | 3.0:1 | 7.13:1 | 10.06:1 |
| `focus` | `surface` | 3.0:1 | 7.75:1 | 9.36:1 |
| `focus` | `sunken` | 3.0:1 | 6.49:1 | 10.43:1 |
