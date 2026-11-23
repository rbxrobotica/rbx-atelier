# Origem, decisões e pendências

## De onde vem este sistema

Este é o Brand System e Design System do GPH na **direção B, Vitrine néon**, reconstruída a partir do protótipo de 2023-2024 e não de memória. A direção A, Parede de galeria, está no artefato "GPH Design System" e continua válida como alternativa; as duas compartilham voz, componentes e integração RBX, e diferem em identidade visual.

Fontes verificadas em 28/10/2026:
- Repositório público `Galeria-Premium-Hoje/marketplace` (BSD-3, 32 commits entre 21/10/2023 e 03/03/2024). Frontend Vite + React 18 + react-bootstrap; tema Bootswatch 5.3.2 "Vapor"; quatro regras próprias em `index.css`.
- O build do frontend (`frontends/web/build/`) renderizado em navegador, com valores computados medidos em `getComputedStyle`, no desktop e a 375px. As capturas estão no grupo de assets **Legado**.
- Manifestos de produção em `rbx-k8s-cluster/gph/` (host `gph.rbxrobotica.com.br`, que não resolve DNS).

## O que o protótipo tinha, e o que cada coisa virou

| No protótipo | Medido | Neste sistema |
|---|---|---|
| Fundo do body | #1A0933 com gradiente #17082E → #1A0933 → #0C1F4C | `ground` e `horizon` |
| Navbar `bg-dark` | #170229 com glow escuro | `bar` + `glow-bar` |
| Texto do body | ciano #32FBE2 com text-shadow ciano em tudo | `cyan` só em `prompt`, `label`, abas e links; texto corrido em `ink` |
| Título "GPH" | #ED2590, 42px, DejaVu Sans Condensed Bold Oblique, glow branco | `wordmark` em `magenta` + `text-glow-white` |
| Links do menu | #A98EDA, mesma fonte, 18px | `nav` em `lilac` |
| Botões | #EA39B8, texto branco, glow rosa em 4 camadas | `pink-fill` #C7309C com `on-pink` e `glow-pink`; `pink` fica no brilho e na aba ativa |
| Selects | #30115E, texto branco, borda clara | `surface` com borda `field` |
| Aba ativa | #EA39B8 com glow; inativas em ciano | `CategoryTabs` |
| Rodapé | "Copyright © Galeria Premium Hoje", #ED2590, 24px, condensada oblíqua | `footer` em `magenta` |
| Fonte do corpo | Lato | `sans` |
| Paleta semântica do Vapor (verde, amarelo, vermelho, azul) | existia no CSS, nunca usada na tela | `ok`, `warn`, `err`, `info`, com `err` e `info` clareados para passar 4,5:1 |

## O que mudou de propósito, e por quê

1. **Brilho só onde é assinatura.** O protótipo aplicava text-shadow em todo o texto. Isso era o tema, não uma decisão, e é a principal razão de a direção B ter sido descartada em 09/10 ("lê pior em listas longas"). Aqui o brilho fica no wordmark, em `display-l`, em `prompt`/`label`, na aba ativa, no preço e no botão primário.
2. **Texto corrido em `ink`, não em ciano.** Ciano continua sendo a voz da pergunta e do rótulo; parágrafos e descrições são lavanda quase branca. Resolve leitura longa sem perder o par quente/frio.
3. **Botão primário em `pink-fill`.** Branco sobre #EA39B8 dá 3,6:1. O hover original (#C7309C) dá 4,8:1 e, com o `glow-pink` na cor original, o olho vê o mesmo botão.
4. **Fotos sobre `surface`.** A segunda crítica à direção B era que o fundo escuro distorce a leitura de cor das fotos. O cartão dá à foto uma moldura `surface` com `space-2` de margem, um referencial neutro.
5. **Tema Dia.** O protótipo não tinha. Existe para leitura diurna e para impressão, com os mesmos papéis de cor; o néon vira sombra curta.
6. **Caixa de título nos itens de menu.** O protótipo escrevia "Minha Conta", "Publique seu Anúncio". Mantido, porque é parte da voz; o resto usa caixa de frase.

## Premissas adotadas

As mesmas do GPH Design System (Parede de galeria): classificado geral sem pagamento entre as partes; revisão antes de publicar; "Todo Brasil" como região padrão; login, mensagens e cobrança pela plataforma RBX; preços de exemplo marcados como exemplo.

## Pendências que exigem decisão do proprietário

As 12 pendências do GPH Design System continuam abertas (região e nicho, categoria "Pessoais", modelo comercial, nome e promessa "Premium", revisão, domínio, validade, canal de mensagens, moderação, fotos, LGPD, subcategorias). Esta direção acrescenta três:

13. **Qual direção vai para implementação:** A (Parede de galeria) ou B (Vitrine néon)? As duas estão prontas no mesmo nível de detalhe de tokens; A tem 22 componentes, B tem os 6 fundamentais.
14. **Símbolo.** Existe: a lojinha do logo original do grupo de WhatsApp (`assets/Legado/legado-logo-whatsapp.png`), encontrada em 29/10/2026. Decisões: (a) **decidido em 29/10/2026:** vetorizada como está, com limpeza geométrica (não redesenhada), porque é o único ativo de reconhecimento que sobreviveu de 2017; (a2) **decidido em 29/10/2026:** a cor do símbolo é o rosa-claro original #FAD3E8 (token `simbolo`), escolhido na prancha contra rosa-suave, lilás, água-marinha, ciano e ciano-suave; fidelidade à memória do grupo pesou mais que a suavidade; (b) **decidido em 29/10/2026 pelo proprietário:** o fundo é a noite roxa `ground` (#1A0933). Revisto no mesmo dia: o vinho `#17030E` entra como token `noite-funda`, fundo exclusivo das peças de marca (ícone, perfil, capa, abertura); o produto segue em `ground` roxo. O proprietário chegou a ponderar trocar o `ground` do produto pelo vinho; diante da comparação de telas reais (barra, busca, cartões sobre os dois fundos), **confirmou a noite roxa no produto em 29/10/2026**. Motivo: sobre o vinho, `surface` e `raised` perdem o parentesco com o fundo e contrastam mais, não menos; migrar exigiria refazer a família inteira.
15. **"Cashback".** O título do protótipo prometia "Market Place & Cashback". Entra no lançamento, fica como hipótese ou sai do nome?

## Não verificado ou inexistente

Região-alvo, público, modelo de receita, significado de "Premium" e de "Cashback", valores possíveis de `individual_type`, `offer_type` e da visibilidade do telefone. Nenhum logo, ícone ou ilustração existia no repositório.
