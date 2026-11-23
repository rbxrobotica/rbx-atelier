# Header

Cabeçalho do site em três faixas: linha de marca, navegação principal e faixa secundária da seção ativa. Substitui a barra flutuante de vidro com pílulas.

- O consumidor fornece a seção ativa, a página ativa, o idioma e a lista de seções com suas filhas. O componente não decide o mapa; ele vem do mesmo lugar que o sitemap.
- Linha de marca com altura `header-row`: lockup à esquerda (componente Logo, marca a 28px), à direita o seletor PT / EN em `eyebrow` e o CTA Contato em `cta` com texto `on-cta`. É o único elemento preenchido do header.
- Navegação principal com altura `nav-row`: cinco itens em `nav-primary`, gap `s-6`. Ativo em `fg-0` com sublinhado de 1px em `cyan-brand` na base da faixa; repouso em `fg-2`; hover em `fg-0`. Borda inferior de 1px em `border` fecha o header.
- Faixa secundária com altura `band-row` sobre `bg-1`, com borda inferior `border`: as páginas irmãs da seção em `nav-secondary`, separadas por divisores verticais de 1px em `border`, padding horizontal `s-4`. Ativo igual ao da principal. Some em páginas sem seção, como a home.
- Fundo opaco em `bg-0`, sem blur nem sombra. Fixo no topo só a linha de marca e a navegação principal; a faixa secundária rola com a página.
- Abaixo de 768px: a navegação principal vira um botão Menu com ícone de traço; a faixa secundária vira uma linha com o nome da seção e uma seta; o CTA vira ícone com `aria-label`.
