# Tema claro do Voltage: marfim com ciano

**Data:** 13 de novembro de 2026
**Situação:** definido em 13 de novembro de 2026. Os tokens estão em `colors_and_type.css`, sob `[data-theme='light']`. Nenhum site ou produto usa o tema ainda.
**Origem:** estudo comparativo de novembro de 2026, com três claros testados nas páginas do site institucional: branco, papel e marfim. O fundador escolheu o marfim.

## 1. O que é

- O sistema continua dark-first. O tema claro é o segundo tema do mesmo sistema.
- Não mudam: a marca, a tipografia, os raios, os espaços, a anatomia dos componentes e o matiz do ciano, 180°.
- As superfícies são o marfim da identidade antiga do Merovelis. O acento é um só, o ciano escurecido. A argila não entra.
- O branco e o papel foram descartados.

O tema é opcional e só vale sob o atributo `data-theme="light"`. Nada troca sozinho: não há regra por preferência do sistema. O site institucional declara `color-scheme: dark` e continua assim até uma decisão própria.

## 2. Superfícies, texto e linhas

Os nomes são os do Voltage. A coluna do escuro é o valor de sempre, que não muda.

| Token | Escuro | Claro | Uso |
|---|---|---|---|
| `--bg-0` | `#07080A` | `#F2EFE6` | Página |
| `--bg-1` | `#0D0F12` | `#EAE5D8` | Faixa da seção e cartões |
| `--bg-2` | `#13161A` | `#FBFAF4` | Cartão claro, código em bloco, gráfico e campo |
| `--bg-3` | `#1A1E23` | `#E0D9C8` | Hover e superfície aninhada |
| `--fg-0` | `#ECECEC` | `#20201C` | Títulos e texto principal |
| `--fg-1` | `#B8BCC2` | `#4A463E` | Corpo |
| `--fg-2` | `#7A7F87` | `#666056` | Rótulos, navegação em repouso, datas |
| `--fg-3` | `#4A4F56` | `#A8A192` | Dica e texto de exemplo |
| `--border` | `#24282E` | `#D6CFBE` | Linha fina e divisórias |
| `--border-strong` | `#3A4048` | `#C9C0AC` | Sublinhado do link comum e hover de cartão |

Uma diferença de ordem entre os temas: no escuro, `--bg-1` e `--bg-2` são mais claros que a página. No claro, `--bg-1` é mais escuro que a página e `--bg-2` é mais claro.

## 3. Papéis do acento

No escuro, um mesmo ciano serve de linha e de texto. No claro isso não passa em contraste, então o acento se divide em papéis. Os nomes abaixo são novos no Voltage. No escuro cada papel aponta para um token que já existe, e nada muda.

| Papel | Token | Escuro | Claro | Onde |
|---|---|---|---|---|
| Tinta | `--accent-line` | `#22E5E5`, o `--cyan-brand` | `#0F8F8F` | Marca, linha do gráfico, borda da etiqueta, sublinhado dos links em hover |
| Texto em ciano | `--accent-text` | `#22E5E5`, o `--cyan-brand` | `#0B6E6E` | Botão de contorno, etiqueta Novo, título em hover, link no artigo |
| Texto ciano em hover | `--accent-text-hover` | `#00FFFF`, o `--cyan-signal` | `#084F4F` | Link no artigo e botão de contorno, em hover |
| Rótulo de campo | `--accent-label` | `#06B6B6`, o `--cyan-muted` | `#0B6E6E` | Rótulo acima do campo |
| Linha de apoio | `--accent-edge` | `#0B6E6E`, o `--cyan-dim` | `#084F4F` | Sublinhado do link no artigo, item atual da trilha |
| Borda do botão de contorno | `--accent-outline` | `#0B6E6E`, o `--cyan-dim` | `#0F8F8F` | Em repouso |
| A mesma borda, em hover | `--accent-outline-hover` | `#22E5E5` | `#0B6E6E` | Em hover |
| Fundo tingido | `--accent-subtle` | ciano `#00FFFF` a 8% | `#0B6E6E` a 8% | Fundo do botão de contorno |
| Fundo tingido, em hover | `--accent-subtle-hover` | ciano `#00FFFF` a 12% | `#0B6E6E` a 14% | Em hover |
| Botão cheio | `--cta` | `#22E5E5` | `#084F4F` | Botão Contato |
| Botão cheio, em hover | `--cta-hover` | `#00FFFF` | `#0B6E6E` | Em hover |
| Texto sobre o botão cheio | `--on-cta` | `#07080A` | `#FBFAF4` | Texto e ícone |
| Estado ativo | `--accent-active` | `#22E5E5` | `#0B6E6E` | Sublinhado do idioma atual, da navegação principal e da faixa |
| Foco | `--accent-focus` | `#22E5E5` | `#0B6E6E` | Anel de foco de 2 px e borda do campo em foco |
| Fundo do campo | `--field-bg` | branco a 3% | `#FBFAF4`, o `--bg-2` | Campos de formulário |

Dois destes tokens já existem no Voltage e só ganham valor no claro: `--cta` e `--on-cta`. Os demais são novos.

## 4. Cores de estado

Sempre com rótulo, nunca só a cor. O fundo é a própria cor a 12%, nos dois temas, e tem token próprio.

| Estado | Token | Escuro | Claro | Token do fundo |
|---|---|---|---|---|
| Concluído | `--ok` | `#7FB77E` | `#3F6837` | `--ok-subtle` |
| Em revisão | `--info` | `#7A93B0` | `#3B5A80` | `--info-subtle` |
| Atenção | `--warn` | `#D9B55A` | `#7D5A0E` | `--warn-subtle` |
| Falhou | `--err` | `#C56A6A` | `#963A3A` | `--err-subtle` |

## 5. Regras de uso

1. **Marca.** O símbolo usa a tinta `#0F8F8F`. O nome usa `--fg-0`, `#20201C`. O descritor usa `--fg-2`, `#666056`.
2. **Texto em ciano nunca usa a tinta.** Usa `--accent-text`. A tinta fica para o que é desenho: marca, linha de gráfico, bordas.
3. **Hover.** Texto neutro vai para `--accent-text`. Texto que já é ciano escurece para `--accent-text-hover`. O botão cheio vai para `--cta-hover`. O sublinhado do link em hover usa a tinta.
4. **Estado ativo.** Os três sublinhados do cabeçalho usam `--accent-active`.
5. **Foco.** O anel de 2 px e a borda do campo em foco usam `--accent-focus`.
6. **Superfícies.** Página em `--bg-0`. Faixa e cartões em `--bg-1`. Código, gráfico e campo em `--bg-2`.
7. **Linhas.** Divisórias em `--border`. Sublinhado do link comum e hover de cartão em `--border-strong`.
8. **Gráfico.** Linha de 2 px na tinta, área na tinta a 10%, ponto com contorno em `--bg-2`, eixos em `--fg-2`, grade em `--border`.
9. **Acento único.** Nenhuma segunda cor de acento.

## 6. Contraste no claro

Texto pede 4,5.

| Par | Contraste |
|---|---|
| Título e texto principal, `fg-0`, na página | 14,22 |
| Título e texto principal, na faixa e no cartão | 13,00 |
| Título e texto principal, no cartão claro | 15,63 |
| Corpo, `fg-1`, na página | 8,17 |
| Corpo, na faixa e no cartão | 7,47 |
| Corpo, no cartão claro | 8,98 |
| Rótulo e navegação em repouso, `fg-2`, na página | 5,42 |
| Rótulo, na faixa e no cartão | 4,95 |
| Rótulo, no cartão claro | 5,95 |
| Texto em ciano, `accent-text`, na página | 5,26 |
| Texto em ciano, na faixa e no cartão | 4,81 |
| Texto em ciano, no cartão claro | 5,79 |
| Rótulo de campo, `accent-label`, na página | 5,26 |
| Texto do botão de contorno, sobre o fundo tingido | 4,72 |
| Texto ciano em hover, `accent-text-hover`, na página | 8,15 |
| Texto do botão de contorno em hover | 6,70 |
| Texto do botão cheio, em repouso | 8,96 |
| Texto do botão cheio, em hover | 5,79 |
| Estado Concluído, sobre o próprio tom a 12% | 4,78 |
| Estado Em revisão | 5,21 |
| Estado Atenção | 4,65 |
| Estado Falhou | 5,15 |

Linha, marca e indicador de estado pedem 3.

| Par | Contraste |
|---|---|
| Marca e linha do gráfico, `accent-line`, na página | 3,42 |
| Tinta na faixa e no cartão | 3,12 |
| Linha do gráfico e tinta no cartão claro | 3,76 |
| Linha de apoio, `accent-edge`, na página | 8,15 |
| Sublinhado ativo, `accent-active`, na página | 5,26 |
| Sublinhado ativo, na faixa | 4,81 |
| Foco, `accent-focus`, na página | 5,26 |
| Foco, na faixa e no cartão | 4,81 |
| Foco, no cartão claro e no fundo do campo | 5,79 |

Três pares ficam abaixo do mínimo ou sem mínimo. Os dois primeiros já são assim no site de hoje, nos quatro temas testados.

| Par | Contraste | Mínimo |
|---|---|---|
| Texto de exemplo do campo, `fg-3`, no fundo do campo | 2,46 | 4,5 |
| Borda do campo em repouso, `border`, contra a página | 1,35 | 3 |
| Anel de foco contra o botão cheio | 1,55 | sem mínimo |

Separação entre superfícies e linhas. Não há mínimo de norma: quanto maior, mais aparece.

| Par | Razão |
|---|---|
| Faixa e cartão, `bg-1`, contra a página | 1,09 |
| Cartão claro, código, gráfico e campo, `bg-2`, contra a página | 1,10 |
| Hover e aninhado, `bg-3`, contra a página | 1,22 |
| Linha fina, `border`, contra a página | 1,35 |
| Linha fina, contra a faixa | 1,23 |
| Linha fina, contra o cartão claro | 1,48 |
| Linha forte, `border-strong`, contra a página | 1,57 |

## 7. O que não está definido

- **H1 em serifa.** Sem decisão.
- **Quem oferece o tema.** O atributo `data-theme="light"` liga o tema. Se e onde os sites oferecem a troca ao visitante não está decidido.
- **Véu e sombra de sobreposição.** `--bg-overlay` e `--shadow-overlay` não foram testados no claro.
- **Halo dos campos no site.** Três componentes do site institucional somam ao foco um halo escrito com a cor fixa do escuro, e o formulário de parceria usa um contorno próprio. Eles precisam de ajuste antes de o site adotar o tema.
- **Sem teste:** imagens dentro dos artigos, capa escura em página clara fora do artigo, impressão e PDF, formulários completos, menu aberto no celular, larguras abaixo de 375 px e os produtos, que têm design system próprio.

## 8. Conferência

Os contrastes da seção 6 foram calculados pela fórmula da WCAG 2 e recalculados de forma independente em 13 de novembro de 2026, sem divergência. Os valores do claro foram conferidos contra as páginas do estudo, e os do escuro contra `colors_and_type.css`.
