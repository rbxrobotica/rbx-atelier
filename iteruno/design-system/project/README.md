# Iteruno

Design System da Iteruno Tecnologias · versão 1.2 · 02/11/2026. Traduz o Brand System de 31/10/2026 (direção **Sinal**, aprovada; nome Iteruno desde 02/11/2026, D-24, antes Informat) em tokens, CSS e componentes Svelte 5, para o site da Iteruno (domínio a confirmar) e para as peças que vierem depois. Na v1.2 o prefixo das classes passou de `inf-` para `itr-`, o global de `window.Informat` para `window.Iteruno` e os logotipos foram regerados com a wordmark ITERUNO. Fonte do conteúdo: `marca/marca.md` e `marca/decisoes.md` no repositório; nada aqui copia material de terceiros.

## 1. Princípios

A marca é **próxima, direta, competente e clara**. No sistema isso vira quatro regras:

1. **Texto primeiro.** Todo componente começa pela palavra: título em caixa de frase, rótulo visível, estado escrito. Cor, ícone e padrão vêm depois e nunca sozinhos.
2. **Uma marca só.** Os serviços são descritores, não submarcas: não têm cor, fonte nem logotipo próprios. O único verde é `marca`; o único adorno é o padrão de sinal.
3. **Funciona sem JavaScript.** Menu e perguntas frequentes usam `<details>`; formulários são HTML nativo; o site é estático. O JavaScript só melhora o que já funciona.
4. **Nada inventado.** Preço, prazo, endereço, CNPJ, telefone, depoimento e data só entram quando existem. Até lá, o texto traz `[[CONFIRMAR …]]`, que o sistema mostra destacado (`.itr-ph`) para não passar despercebido.

## 2. Como consumir

Três superfícies, uma fonte: `tokens.json` gera `tokens.css`; `bundle.css` (classes `itr-*`) é a pele; os componentes Svelte só compõem essas classes e não têm `<style>` próprio.

**SvelteKit (o site, Entrega 3).** O pacote `@iteruno/design-system` exporta os componentes e os dois CSS:

```js
import '@iteruno/design-system/tokens.css';
import '@iteruno/design-system/bundle.css';
import { NavBar, Hero, Section, Grid, ServiceCard, Footer } from '@iteruno/design-system';
```

**HTML e CSS puros (documentos, e-mails de sistema, apostilas em HTML).** Carregue `tokens.css` e `components/bundle.css` e use as classes; cada README de componente traz a marcação equivalente.

**Bundle clássico (prévias, protótipos).** `components/bundle.js` define `window.Iteruno` com os componentes compilados, o runtime do Svelte e três ajudantes:

```html
<div id="raiz"></div>
<script>
  Iteruno.mount(Iteruno.Button, { target: document.getElementById('raiz'), props: { label: 'Chamar no WhatsApp', icon: 'whatsapp' } });
  // filhos ou snippets a partir de HTML pronto: Iteruno.html('<p>…</p>'); desmontar: Iteruno.unmount(instancia)
</script>
```

**Tema.** `<html data-theme="claro">` ou `"escuro"`; sem o atributo, segue `prefers-color-scheme`. Os dois temas estão em todos os tokens de cor e sombra; o resto é igual.

**Fontes.** Saira Condensed (500, 600) e Public Sans (400 a 700) via Google Fonts, importadas na primeira linha de `bundle.css`; a mono é a pilha do sistema (sem download). Nenhuma outra dependência externa.

## 3. Tokens

Escreva sempre o nome do token, nunca o hex. Os valores completos, com o uso de cada um, estão em `tokens.json` (e na aba Tokens desta página).

### Cor

| Token | Papel | Claro | Escuro |
| --- | --- | --- | --- |
| `fundo` | Fundo da página | #F3F7F5 | #0C1714 |
| `superficie` | Cartões, formulários, barra | #FFFFFF | #142019 |
| `superficie-2` | Áreas rebaixadas: campo desabilitado, código, faixa secundária | #E8EFEB | #0A1210 |
| `linha` | Divisórias decorativas | #D7E2DD | #243730 |
| `borda-campo` | Borda de campo e caixa de seleção (3 : 1 ou mais) | #6B7C76 | #6E857C |
| `texto` / `texto-2` / `texto-3` | Principal / secundário / metadados (nunca abaixo de 14 px) | #16231F / #4D5B56 / #5F6F69 | #E6F0EC / #A8B8B1 / #8A9A93 |
| `marca` | Símbolo, botão primário, link, foco, ícone ativo | #008066 | #35C4A0 |
| `marca-forte` | Hover e pressionado; link sobre fundos suaves | #00563F | #7ADFC4 |
| `marca-suave` | Seleção, item ativo, fundo de destaque leve | #E3F5EE | #163A30 |
| `sobre-marca` | Texto e ícone sobre `marca` e `marca-forte` | #FFFFFF | #0C1714 |
| `sucesso`, `aviso`, `erro`, `info` (+ `-suave`) | Estados: concluído, pede ação, falhou, em andamento | ver `tokens.json` | ver `tokens.json` |
| `foco` | Anel de foco (alias de `marca`) | = `marca` | = `marca` |
| `veu` | Véu atrás de menu e diálogo | rgba(22,35,31,.56) | rgba(0,0,0,.64) |

Regras: `marca` como texto só sobre `fundo` e `superficie` (sobre `superficie-2` e `marca-suave` use `marca-forte`); estado nunca só por cor, porque `sucesso` é vizinho de `marca`; o botão do WhatsApp usa `marca`, não o verde do WhatsApp; `linha` é decorativa, o que precisa ser percebido usa `borda-campo` ou `marca`; não combine `texto` sobre `marca` nem `marca` escuro sobre `superficie` clara.

### Contraste medido (WCAG 2)

Todos os pares usados pelos componentes, nos dois temas. Mínimo 4,5 : 1 para texto e 3 : 1 para bordas de campo. Gerado por `tools/contraste.py --md`.

| Texto / borda | Fundo | Mínimo | Claro | Escuro |
| --- | --- | --- | --- | --- |
| `texto` | `fundo` | 4.5:1 | 15.01 | 15.71 |
| `texto` | `superficie` | 4.5:1 | 16.22 | 14.43 |
| `texto-2` | `fundo` | 4.5:1 | 6.60 | 8.84 |
| `texto-2` | `superficie` | 4.5:1 | 7.13 | 8.12 |
| `texto-3` | `fundo` | 4.5:1 | 4.90 | 6.20 |
| `texto-3` | `superficie` | 4.5:1 | 5.30 | 5.70 |
| `marca` | `fundo` | 4.5:1 | 4.54 | 8.32 |
| `marca` | `superficie` | 4.5:1 | 4.91 | 7.64 |
| `marca-forte` | `fundo` | 4.5:1 | 8.09 | 11.48 |
| `marca-forte` | `superficie` | 4.5:1 | 8.74 | 10.54 |
| `sucesso` | `fundo` | 4.5:1 | 5.99 | 9.99 |
| `sucesso` | `superficie` | 4.5:1 | 6.47 | 9.17 |
| `aviso` | `fundo` | 4.5:1 | 5.02 | 9.81 |
| `aviso` | `superficie` | 4.5:1 | 5.43 | 9.01 |
| `erro` | `fundo` | 4.5:1 | 6.05 | 7.66 |
| `erro` | `superficie` | 4.5:1 | 6.54 | 7.03 |
| `info` | `fundo` | 4.5:1 | 7.53 | 8.64 |
| `info` | `superficie` | 4.5:1 | 8.14 | 7.93 |
| `texto` | `superficie-2` | 4.5:1 | 13.89 | 16.30 |
| `texto-2` | `superficie-2` | 4.5:1 | 6.10 | 9.18 |
| `texto-3` | `superficie-2` | 4.5:1 | 4.53 | 6.44 |
| `marca-forte` | `superficie-2` | 4.5:1 | 7.48 | 11.91 |
| `marca-forte` | `marca-suave` | 4.5:1 | 7.72 | 7.84 |
| `texto` | `marca-suave` | 4.5:1 | 14.34 | 10.73 |
| `texto-2` | `marca-suave` | 4.5:1 | 6.30 | 6.04 |
| `sobre-marca` | `marca` | 4.5:1 | 4.91 | 8.32 |
| `sobre-marca` | `marca-forte` | 4.5:1 | 8.74 | 11.48 |
| `sucesso` | `sucesso-suave` | 4.5:1 | 5.61 | 7.79 |
| `aviso` | `aviso-suave` | 4.5:1 | 4.74 | 7.85 |
| `erro` | `erro-suave` | 4.5:1 | 5.42 | 6.80 |
| `info` | `info-suave` | 4.5:1 | 6.72 | 7.36 |
| `texto` | `sucesso-suave` | 4.5:1 | 14.05 | 12.25 |
| `texto` | `aviso-suave` | 4.5:1 | 14.19 | 12.56 |
| `texto` | `erro-suave` | 4.5:1 | 13.46 | 13.94 |
| `texto` | `info-suave` | 4.5:1 | 13.38 | 13.39 |
| `borda-campo` | `fundo` | 3.0:1 | 4.07 | 4.62 |
| `borda-campo` | `superficie` | 3.0:1 | 4.40 | 4.25 |
| `linha` | `superficie` | 3.0:1 | 1.33 | 1.33 |

### Tipografia

| Estilo | Família e peso | Desktop | Celular (até 767 px) | Uso |
| --- | --- | --- | --- | --- |
| `display-xl` | Saira Condensed 600 | 64 / 64, +0,01 em | 40 / 42 | promessa no hero |
| `display-l` | Saira Condensed 600 | 44 / 48 | 32 / 36 | título de página, preço, título do CTA |
| `title-1` | Public Sans 700 | 28 / 34, −0,01 em | 24 / 30 | seção |
| `title-2` | Public Sans 700 | 20 / 26 | 20 / 26 | cartão |
| `body-l` | Public Sans 400 | 18 / 28 | 18 / 28 | abertura de seção |
| `body` / `body-strong` | Public Sans 400 / 600 | 16 / 24 | 16 / 24 | texto; ênfase, botões, rótulos |
| `small` | Public Sans 400 | 14 / 20 | 14 / 20 | notas, dicas |
| `label` | Public Sans 600 | 12 / 16, caixa alta, +0,08 em | 12 / 16 | eyebrow, carimbo |
| `code` | mono 400 | 14 / 22 | 14 / 22 | código, série, protocolo |

Display só em Saira Condensed e só em caixa de frase (caixa alta é da wordmark e de `label`). Parágrafos com até 68 caracteres por linha (`text-max`). Nada abaixo de 12 px; texto corrido nunca abaixo de 14 px. Classes prontas: `.itr-display-xl`, `.itr-display-l`, `.itr-title-1`, `.itr-title-2`, `.itr-body-l`, `.itr-small`, `.itr-label`, `.itr-code`, `.itr-prose`.

### Espaço, raio, sombra, tamanhos, movimento

- **Espaçamento** em base 4: `space-1` 4 · `space-2` 8 · `space-3` 12 · `space-4` 16 · `space-5` 20 · `space-6` 24 · `space-8` 32 · `space-10` 40 · `space-12` 48 · `space-16` 64 · `space-20` 80 · `space-24` 96. Dentro de componentes, até `space-6`; entre seções, de `space-10` a `space-20`.
- **Raio:** `radius-s` 4 (caixa de seleção, carimbo de código) · `radius-m` 8 (botão, campo, alerta) · `radius-l` 12 (cartão) · `radius-pill` 999 (Badge).
- **Sombra:** `shadow-1` (cartão em repouso) e `shadow-2` (menu, cartão em destaque), por tema. Prefira borda `linha` a sombra.
- **Tamanhos:** `control-s/m/l` 36 / 44 / 52 · `icon-s/m/l/xl` 16 / 20 / 24 / 32 · `border-hair` 1 · `border-strong` 2 · `content-max` 1200 · `content-narrow` 760 · `card-min` 240 · `text-max` 68ch.
- **Movimento:** `duration-fast` 120 ms (hover, cor) · `duration-base` 200 ms (menu, abrir) · `ease-standard` cubic-bezier(.2, 0, 0, 1), sem rebote. Com `prefers-reduced-motion`, nada se move.
- **Camadas:** `z-sticky` 100 (barra) · `z-menu` 150 · `z-dialog` 200 · `z-toast` 300.

## 4. Grade e breakpoints

Mobile first. Três larguras de referência: **360** (`bp-s`), **768** (`bp-m`) e **1200** (`bp-l`).

| | 360 a 767 | 768 a 1199 | 1200 ou mais |
| --- | --- | --- | --- |
| Margem lateral | 16 px | 24 px | 32 px |
| Largura do conteúdo | total | total | 1200 px centrados (`content-max`); 760 px para texto corrido |
| Grid 2 / 3 / 4 | 1 coluna | 2 colunas | 2 / 3 / 4 colunas |
| Grid auto | colunas de no mínimo 240 px | idem | idem |
| NavBar | menu `<details>` | links visíveis | links visíveis |
| Hero | só texto; display 40 px | só texto; display 64 px | texto 7/12 + padrão 5/12 |
| Formulário (`FormRow` 2) | 1 coluna | 2 colunas | 2 colunas |
| Espaço entre seções | `space-10` | `space-16` | `space-20` |

## 5. Acessibilidade

- **Contraste:** todos os pares da tabela acima passam 4,5 : 1 (texto) e 3 : 1 (bordas), nos dois temas. O par mais apertado é `marca` sobre `fundo` claro (4,54 : 1): por isso `marca` nunca é texto sobre `superficie-2` ou `marca-suave`.
- **Foco:** anel sólido de 2 px em `foco` com 2 px de afastamento em tudo que recebe teclado (`:focus-visible`), inclusive links do rodapé e `summary`.
- **Teclado e leitor de tela:** menu e perguntas frequentes com `<details>`; `aria-current` na navegação; formulários com `<label for>`, dica e erro via `aria-describedby`, `aria-invalid` e resumo de erros com `role="alert"` que recebe o foco; ícones decorativos com `aria-hidden`, ou `role="img"` com nome quando sozinhos.
- **Alvos:** 44 × 44 px no tamanho `m`; o tamanho `s` (36 px) só em linhas densas e nunca como ação principal no celular.
- **Texto:** 16 px nos campos (evita zoom automático), 14 px mínimo em texto corrido, caixa de frase nos títulos e botões, `lang="pt-BR"`.
- **Movimento:** transições de 120 e 200 ms; com `prefers-reduced-motion` tudo para.
- **Estado nunca só por cor:** Badge e Alert escrevem a palavra; `sucesso` e `marca` são verdes vizinhos, e `aviso` e `erro` diferem em luminosidade.
- **Pular para o conteúdo:** o site começa com `<a class="itr-skip" href="#conteudo">`, invisível até receber foco pelo teclado.

## 6. Logotipo, ícones e padrão

- **Logotipo** (`assets/Logotipos`, componente `Logo`): horizontal como padrão; curta abaixo de 40 px de altura; símbolo em `marca` sobre fundos claros, versão `-escuro` sobre escuros, mono branca sobre `marca`. Área de proteção x = metade da altura das capitulares; mínimos de 220 px (horizontal), 110 px (curta), 24 px (símbolo). Nunca em texto vivo, nunca esticado, recolorido ou com sombra.
- **Ícones** (`assets/Icones`, componente `Icon`): 49 ícones de traço na grade de 24, traço 1,75, `currentColor`. Fixos por frente: `wrench`, `globe`, `book-open`. Tamanhos 16 / 20 / 24 / 32.
- **Padrão de sinal** (`assets/Padroes`, componente `Sinal`): quartos de círculo a partir do canto inferior esquerdo, em `marca` sobre `fundo` ou `marca-forte` sobre `marca`; só em capas, faixa de marca e estados vazios, nunca atrás de texto, nunca mais de 8 arcos.
- **Fotografia:** o trabalho real, luz natural, fundo limpo, dados cobertos; nunca banco de imagem nem imagem gerada por IA apresentada como real.

## 7. Componentes

23 componentes, todos com README e prévia nos dois temas. Marca: `Logo`, `Icon`. Ações: `Button`. Formulários: `TextField`, `Select`, `Checkbox`, `Form` (com `FormRow`, `FormActions` e `validar`). Estados: `Badge`, `Alert`. Navegação: `NavBar`, `Footer`, `ThemeToggle`. Layout: `Hero`, `Section`, `Grid`. Cartões: `ServiceCard`, `PriceCard`, `CourseCard`, `Testimonial`. Conteúdo e conversão: `Accordion`, `Steps`, `Timeline`, `ContactCTA`. Versão 1.1 (02/11/2026) acrescentou `Steps`, `Timeline` e `ThemeToggle`, pedidos pelo site da Entrega 3, e os ícones `sun` e `moon`; o Footer passou a aceitar conteúdo na linha de base e só transforma WhatsApp e e-mail em link quando o dado existe. As telas **Página inicial** e **Contato** (desktop 1200 px e celular 360 px, claro e escuro) são montadas só com esses componentes e mostram o site da Entrega 3 antes de ele existir.

Componentes do sistema de 10/10/2026 que não entram (ficam arquivados no repositório, para um eventual app de atendimento): ChoiceCard, Dialog, ServiceTimeline, QuoteSummary, BackupAgreement, UploadField, EmptyState, Skeleton, Toast, OsHeader.

## 8. Repositório e comandos

```
design-system/
  tokens.json              fonte única dos tokens (formato desta página)
  src/tokens.css           gerado: variáveis sem prefixo, dois temas, classes de texto
  src/bundle.css           a pele: classes itr-*
  src/lib/*.svelte         os componentes (Svelte 5, sem <style>)
  src/bundle-entry.js      entrada do bundle clássico (window.Iteruno)
  dist/bundle.js           gerado pelo Vite (IIFE)
  tools/tokens.py          tokens.json → tokens.css, assets/Tokens/itr.css, itr.tokens.json
  tools/contraste.py       verificação WCAG dos pares (--md imprime a tabela acima)
  tools/previews.py        gera as prévias e as telas de aprovação
  tools/readmes.py         gera os READMEs dos componentes
  tools/stage.py           monta artefato/project/ (bundle com cabeçalho @ds-bundle)
  tools/indice.py          gera design-system.json a partir dos uploads
  artefato/project/        o que está publicado nesta página
site/                      SvelteKit + adapter-static (Entrega 3), importa os mesmos .svelte
```

Node só dentro do podman (sem Node na máquina):

```bash
podman run --rm -v "$PWD":/work:Z -w /work/design-system docker.io/library/node:22-alpine npx vite build
```

Depois: `python3 -I tools/tokens.py && python3 -I tools/contraste.py && python3 -I tools/stage.py && python3 -I tools/previews.py && python3 -I tools/readmes.py`. `fontes/` nesta página é uma cópia dos `.svelte` e do `tokens.css` para consulta.

## 9. Decisões e pendências

Registradas em `marca/decisoes.md` (D-19: Direção 1, trilho duplo CSS-first + Svelte 5 no lugar de React). Ficam abertas e aparecem como `[[CONFIRMAR]]` nas telas: preços, datas de turma, WhatsApp, horário, endereço, CNPJ, depoimentos e nomes, política de diagnóstico e nota fiscal, a linha "um produto RBX" no rodapé (pendência 3), o login (pendência 12, sem botão por padrão) e a fonte mono (pendência 13, pilha do sistema por padrão).
