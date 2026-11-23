# Guia de implementação

## De tokens a telas

1. **Tokens** (`tokens.json`) são a fonte única: cores com tema claro e escuro, tipografia, espaço, raios, sombras, alturas de controle, breakpoints, durações e camadas. Para código, use as exportações do grupo de assets **Tokens**:
   - `gph.css`: variáveis CSS com prefixo `--gph-` (claro em `:root`, escuro por `prefers-color-scheme` e por `[data-theme="dark"]`) e classes de texto `.gph-text-<estilo>`.
   - `gph.tokens.json`: formato DTCG no padrão do RBX Atelier (`$type`, `$value`, `$description`), com `color` e `color-dark`.
   Altere `tokens.json` e as exportações juntos, no mesmo commit.
2. **Componentes** (`components/bundle.js`, `window.Gph`, React 18) consomem só variáveis de token, nunca valores soltos. O CSS fica em `components/bundle.css`, com prefixo `gph-`. Os tipos estão em `components/index.d.ts`.
3. **Telas** combinam componentes com layout próprio. O canvas [GPH · Telas e Protótipos](https://claude.ai/artifact/SHPkAFb2gK3G5E6WVGQb3H) é a referência visual e de fluxo; cada tela do canvas lista os componentes que usa.

Na implementação de produção (Codex), recrie os componentes na stack do produto mantendo nomes, props, estados e classes de token. O bundle deste sistema é a especificação executável, não o código final.

## Inventário de componentes

| Componente | Uso | Jornadas | Estados |
|---|---|---|---|
| Icon | Ícones de traço e das 5 categorias | Todas | Não se aplica |
| Logo | Assinatura ao vivo, adapta ao tema | Navegação, login, rodapé | Claro, escuro |
| Button | Ações | Todas | Repouso, hover, foco, carregando, desabilitado |
| TextField | Texto, preço, CEP, descrição, mensagem | Publicar, editar, contato | Vazio, preenchido, foco, erro, desabilitado |
| Select | Categoria, subcategoria, tipo de oferta | Publicar, filtros | Idem |
| SearchBar | Busca o que, categoria e onde | Início, resultados | Vazia, preenchida, foco |
| FilterChips | Filtros rápidos com contagem | Resultados | Ligado, desligado, limpar |
| ListingCard | Anúncio com etiqueta de parede | Início, resultados, perfil, meus anúncios | Publicado, Destaque (Hipótese), vendido, indisponível, em revisão, pausado |
| PhotoGallery | Fotos do anúncio | Detalhe | Com foto, sem foto, foto atual |
| ContactPanel | Mensagem, telefone, segurança, denúncia | Detalhe, contato | Telefone oculto, revelado, sem telefone |
| AdvertiserCard | Quem anuncia | Detalhe, perfil | Completo, compacto |
| Badge | Atributo curto | Cartões, perfil | Tons |
| StatusBadge | Ciclo de vida do anúncio | Meus anúncios, edição | Rascunho, em revisão, publicado, pausado, expirado, vendido, indisponível, recusado |
| Alert | Aviso na página | Publicar, meus anúncios, estados | Info, ok, atenção, erro |
| Toast | Confirmação passageira | Contato, salvar, rascunho | Ok, info, atenção, erro |
| Dialog | Contato, confirmação, exclusão | Contato, meus anúncios | Aberto, alerta |
| NavBar | Barra superior | Todas | Visitante, logado, compacta |
| BottomNav | Navegação do celular | Todas (celular) | Item atual |
| Tabs | Listas da mesma página | Meus anúncios, perfil | Aba atual |
| Stepper | Etapas da publicação | Publicar, editar | Concluída, atual, a fazer |
| EmptyState | Lista vazia | Resultados, meus anúncios, salvos | Com ação, sem ação |
| Skeleton | Carregamento | Resultados, detalhe | Pulsando, parado (movimento reduzido) |

Intencionalmente fora: avaliações com estrelas, chat em tempo real, mapa interativo, comparador. Nenhum deles foi decidido; entram só depois de decisão do proprietário.

## Comportamento responsivo

- **Acima de `bp-l` (1280px):** grid de resultados com 4 colunas; filtros em painel lateral fixo de 280px.
- **Entre `bp-m` e `bp-l`:** 3 colunas; painel lateral continua.
- **Entre `bp-s` e `bp-m` (640 a 960px):** 2 colunas; filtros viram uma folha que abre por "Filtros"; a ficha do anúncio vai para baixo da galeria.
- **Abaixo de `bp-s` (640px):** 1 coluna (ou 2 cartões compactos a partir de 400px); `NavBar compact` em cima e `BottomNav` embaixo; `SearchBar` empilha as células; o `ContactPanel` vira barra fixa no rodapé com "Enviar mensagem" e "Ver telefone".
- Layout por `flex-wrap` e `grid auto-fill`; media queries só onde a estrutura muda (navegação e painel de filtros).

## Interações

- **Busca:** enviar leva a Resultados com os filtros na URL (`?q=&categoria=&onde=`), para que a página possa ser compartilhada.
- **Salvar anúncio:** o coração alterna na hora; se a pessoa não estiver logada, abre a passagem para o login RBX e volta ao anúncio salvo.
- **Ver telefone:** revela o número no próprio botão e registra o evento (para o anunciante saber quantos viram).
- **Enviar mensagem:** abre o `Dialog`; ao enviar, mostra `Toast` "Mensagem enviada para quem anuncia" e a conversa passa a existir na central de mensagens RBX.
- **Publicar:** cinco etapas com rascunho salvo a cada etapa; "Enviar para revisão" leva ao estado Em revisão; a publicação chega como mensagem.
- **Meus anúncios:** Editar reabre o `Stepper` na etapa escolhida; Pausar e Reativar são imediatos; Marcar como vendido e Excluir pedem confirmação (`Dialog alert`).

## Estados

| Estado | Como aparece |
|---|---|
| Carregando | `Skeleton` no formato do cartão, sem texto falso |
| Vazio | `EmptyState` com explicação e saída ("Limpar filtros", "Publique seu anúncio") |
| Erro de carregamento | `Alert err` com "Tentar de novo"; o que já carregou continua visível |
| Erro de campo | Borda `err` de 2px, mensagem que diz como corrigir |
| Sucesso | `Toast ok` para ações rápidas; `Alert ok` quando a próxima etapa importa |
| Em revisão | `StatusBadge em-revisao` + `Alert info` explicando o que acontece depois |
| Indisponível | Página do anúncio com foto sem cor, preço riscado, ponto + "Indisponível" e anúncios parecidos |
| Foco | Anel `focus` de 2px a 2px de distância |
| Desabilitado | Fundo `sunken`, texto `ink-3` e o motivo por perto |

## Pontos de integração com a plataforma RBX

| Momento | Serviço RBX | Contrato |
|---|---|---|
| Entrar, criar conta, salvar anúncio, publicar | RBX Identity (`auth.merovelis.com`) | OIDC; a área logada do GPH fica em `app.merovelis.com/gph` |
| Mensagem entre interessado e anunciante | RBX Comms | Conversa por anúncio; notificação por e-mail ou canal a definir |
| Aviso de revisão, publicação, recusa, expiração | RBX Comms | Mensagens transacionais com o modelo de voz deste sistema |
| Destaque pago e plano profissional (Hipóteses) | RBX Commerce | Produto e cobrança na plataforma; o GPH só mostra e consulta o direito de uso |
| Denúncia de anúncio | GPH (moderação) + RBX Comms | Fila de moderação do GPH; resposta ao denunciante pela central |
| Site público e SEO | Domínio do GPH ([dominio-gph]) | Páginas públicas de busca e anúncio; links para `app.merovelis.com/gph` nas ações logadas |

Modelo de dados herdado do protótipo (Django): `Ad` com `category`, `subcategory`, `postcode`, `individual_type`, `title`, `description`, `offer_type`, `price`, `address`, `full_address`, `photos`, `phones`; `Phone` com `visibility`; `Client` com `name`, `address`, `email`. Faltam estado do anúncio, datas de publicação e atualização, motivo de recusa e moderação: veja as pendências.
