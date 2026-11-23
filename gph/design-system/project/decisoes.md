# Fontes, decisões e pendências

## Fontes consultadas

**Verificadas em 09/10/2026:**
- Repositório `Galeria-Premium-Hoje/marketplace` (GitHub, licença BSD-3, 32 commits entre 21/10/2023 e 03/03/2024). Única repo da organização.
- Imagens públicas no Docker Hub: `ldamasio/gph-frontend` e `ldamasio/gph-backend-monolith` (última em 03/03/2024) e `ldamasio/gph-marketplace` (30/10/2023).
- Manifestos de produção antigos em `rbx-k8s-cluster/gph/` (host `gph.rbxrobotica.com.br`, que hoje não resolve DNS).
- Governança RBX: ADR-0011 (domínios de produto e plataforma compartilhada) e ADR-0014 (domínio público + entrada autenticada em `app.merovelis.com`), no `rbx-governance`.
- Convenções de tokens do RBX Atelier (`design-systems/satwake`: `tokens.json` DTCG + CSS com prefixo).

**O que existia no legado (verificado):**
- Textos de interface em português: "O que você está procurando?", "Todas Categorias", "Todo Brasil", "Pesquisar", "Publique seu Anúncio", "Minha Conta", "Ajuda", "Blog", "Responsabilidade Corporativa".
- Categorias, nesta ordem: Imóveis, Serviços, Veículos, Compra & Venda, Pessoais. Nenhuma subcategoria nomeada.
- Título da página: "Galeria Premium Hoje - Market Place & Cashback". Não há código de cashback.
- Modelo de dados Django (anúncio, foto, telefone com visibilidade, cliente, usuário) sem estado, datas ou moderação. Nenhuma API além do admin.
- Busca, publicação, edição, contato, login e cobrança não implementados.
- Identidade visual: tema pronto Bootswatch "Vapor" (roxo #6F42C1, rosa #EA39B8, ciano #32FBE2 sobre #1A0933, efeito neon), título "GPH" em magenta #ED2590 com DejaVu Sans Condensed Bold Oblique. Nenhum logo: o favicon `gph.svg` nunca foi versionado.

**Não verificado ou inexistente:** região-alvo (só "Todo Brasil"), público, modelo de receita, significado de "Premium" e de "Cashback", valores possíveis de `individual_type`, `offer_type` e da visibilidade do telefone.

## Duas direções exploradas

**A. Parede de galeria (escolhida).** Parede branca, Azul Klein como única cor de ação, ouro velho para o selo, o ponto vermelho de "vendido" das galerias de arte, e a etiqueta de parede como estrutura de todo anúncio. Familjen Grotesk, Archivo e Archivo Narrow. Símbolo: a Moldura G.

**B. Vitrine néon (não escolhida).** Evoluir o que o protótipo tinha: fundo roxo-escuro, magenta #ED2590 como cor da marca, ciano de apoio, títulos condensados e oblíquos com brilho néon. Teria continuidade visual com o legado e energia de feira noturna.

**Por que A.** O visual do legado era um tema pronto, não uma decisão de marca, então não havia patrimônio a preservar. O néon sobre fundo escuro cansa na leitura de listas longas, prejudica a avaliação de cor das fotos dos anúncios (imóveis e veículos são julgados pela foto) e comunica vida noturna e jogos, não confiança para negociar com desconhecidos. A direção A transforma o próprio nome em sistema: "Galeria" vira a parede e a etiqueta, "Premium" vira o cuidado na apresentação, "Hoje" vira a hora sempre visível e o ponto do símbolo. A direção B segue registrada aqui e no canvas para comparação.

## Premissas adotadas

1. O GPH é um classificado geral, não um marketplace com pagamento entre as partes: a negociação acontece entre interessado e anunciante.
2. Todo anúncio passa por revisão antes de publicar (os estados pedidos incluem revisão).
3. "Todo o Brasil" continua como região padrão até a decisão sobre região inicial.
4. `individual_type` foi tratado como "Pessoa física" ou "Profissional" e `offer_type` como Venda, Aluguel, Troca ou Serviço, só como exemplo.
5. A visibilidade do telefone é escolha do anunciante (mostrar ou receber só mensagens).
6. Login, mensagens e cobrança vêm da plataforma RBX (ADR-0011, ADR-0014).
7. Os preços dos anúncios de exemplo são conteúdo fictício de demonstração, marcados como exemplo nas telas. Nenhum preço do GPH foi definido.

## Pendências que exigem decisão do proprietário

1. **Região inicial e nicho prioritário.** Lançar em todo o Brasil ou numa cidade ou região? Começar por uma categoria (por exemplo, Imóveis ou Veículos)?
2. **Categoria "Pessoais".** Ela cobre itens pessoais ou anúncios de relacionamento? Se for relacionamento, exige política de moderação, idade mínima, termos próprios e risco reputacional; a recomendação é renomear ou retirar no lançamento.
3. **Modelo comercial.** Destaque pago, plano profissional, curadoria e cashback são hipóteses. Qual (se algum) entra no lançamento, com quais preços ([PREÇO]) e regras?
4. **Nome e promessa "Premium".** Manter "Galeria Premium Hoje" por extenso ou usar só "GPH" como marca principal? O sistema trata "Premium" como apresentação; confirmar que não haverá restrição de preço ou de tipo de item.
5. **Revisão antes de publicar.** Manual, automática ou mista? Qual prazo prometer ([PRAZO]) e quais critérios de recusa?
6. **Domínio público do GPH** ([dominio-gph]). O antigo `gph.rbxrobotica.com.br` não resolve mais.
7. **Validade dos anúncios.** Por quanto tempo um anúncio fica no ar antes de expirar ([PRAZO])? Renovação gratuita?
8. **Canal das mensagens.** Só na central RBX, também por e-mail, ou WhatsApp?
9. **Moderação e denúncias.** Quem trata, em quanto tempo e com que respostas ao denunciante?
10. **Fotos.** Quantidade máxima por anúncio, tamanho e moderação de imagens.
11. **Termos de uso e privacidade (LGPD).** Tratamento de telefone, endereço e mensagens; o CEP e o endereço completo do legado devem aparecer só como bairro e cidade?
12. **Subcategorias** de cada categoria, que o legado previa no modelo mas nunca nomeou.
