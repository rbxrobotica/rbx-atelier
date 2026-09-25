# Satwake · Brand and Design System

Satwake é o nome público do produto antes chamado Briefing BTC: a leitura diária do mercado de Futuros BTC/USDT da RBX Systems.

- **Status:** v0.1.0, proposta para revisão do owner, 2026-09-24.
- **Canvas de design (Claude Design):** https://claude.ai/artifact/WZDWeNUrovcJkFVKUbzbZW, com brand system, tokens e componentes, landing desktop e mobile, estados do checkout, modelo de campanhas, anúncios e especificação.
- **Decisões duráveis:** ficam nas ADRs de governança da RBX (produto, domínios, campanhas e mensuração). Os detalhes visuais ficam aqui e no canvas.

## Direção

Clara, editorial, técnica e acessível. Tem que parecer um jornal bem editado, não uma sala de apostas. Merovelis serviu de referência de sobriedade e organização, mas o Satwake tem identidade própria: papel claro, texto grafite e acentos de amanhecer usados com parcimônia.

## Assinatura

| Arquivo | Uso |
|---|---|
| `assets/satwake-lockup.svg` | Símbolo e wordmark sobre fundo claro |
| `assets/satwake-lockup-dark.svg` | Símbolo e wordmark sobre grafite |
| `assets/satwake-mark.svg` | Só o símbolo, fundo claro |
| `assets/satwake-mark-dark.svg` | Só o símbolo, fundo escuro |
| `assets/satwake-app-icon.svg` | Ícone de app e favicon |

O símbolo é um horizonte com régua: o sol nasce sobre um eixo de gráfico. O arco e o raio são as únicas partes na cor de amanhecer.

O wordmark é Newsreader 600, sempre em minúsculas. Nos lockups ele está como texto SVG. Antes de imprimir ou de usar num lugar sem a fonte, converta em contornos.

- Tamanho mínimo: símbolo com 20 px de altura; lockup com 88 px de largura.
- Área de respiro: igual à altura do arco.

## Tokens

`tokens.json` é a fonte, num formato inspirado no W3C Design Tokens (DTCG), sem conformidade total: cores têm `$type` e `$value`, os demais grupos são valores simples. `colors_and_type.css` traduz esse arquivo em variáveis com o prefixo `--sw-`: cada estilo de texto vira `size`, `line`, `weight` e `family`. Mude os dois no mesmo commit e não use cor literal nos componentes.

Contraste (WCAG 2.2) medido sobre o papel `#F7F5F0`:

| Token | Valor | Contraste | Uso |
|---|---|---|---|
| `ink` | `#1E2227` | 14.7:1 | Texto |
| `ink-2` | `#474D56` | 7.8:1 | Texto secundário |
| `ink-3` | `#626873` | 5.1:1 | Legenda |
| `action` | `#B4461A` | 5.0:1 | Ação; branco sobre ele dá 5.5:1 |
| `predawn` | `#26456B` | 9.0:1 | Link, dado, foco |
| `field` | `#8A8375` | 3.8:1 sobre branco | Borda de campo |

`sunrise` e `first-light` são só decorativos: nunca levam texto e nunca são o único sinal de um estado. Erro sempre aparece com ícone e texto. Nada de verde para alta e vermelho para baixa.

## Tipografia

- **Newsreader:** títulos e assinatura.
- **IBM Plex Sans:** corpo e interface.
- **IBM Plex Mono:** números, níveis, horários e rótulos, com algarismos tabulares.

Em produção, sirva as fontes pelo próprio domínio.

## Voz e conteúdo

Segue `brand-voice/rbx-voice-system.md` e a política interna de conteúdo financeiro da RBX (não publicada neste repositório):

- nada de exclamação, emoji, travessão ou urgência;
- nada de sinal de compra e venda, alvo de preço ou promessa de retorno;
- nada de depoimento, resultado ou número de assinantes sem evidência;
- o aviso legal aparece sempre, com este texto exato, o mesmo que o pipeline de geração exige literalmente na seção 10 de cada edição e que a landing atual do produto já publica:

  > Este briefing é material de preparação operacional e governança. Não constitui recomendação de investimento, sinal de trading ou orientação financeira. A decisão de operar é exclusiva do operador humano. Este produto não gera ordens, não recomenda compra/venda e não aciona sistemas de execução.

- trechos do produto aparecem como publicados, e qualquer corte é dito na legenda.

## Imagem e gráficos

**Usar:** o próprio produto (a mensagem de WhatsApp, a tabela de cenários, as regras de não-operação) e luz de manhã cedo.

**Evitar:** foguetes, lua, dinheiro, gráficos que só sobem, ordens na tela e degradês neon.

**Em gráficos:**
- a linha de preço vai em `predawn`;
- zonas de atenção aparecem como faixas suaves, com rótulo e valor;
- zona é referência de estrutura, nunca alvo.
