# ListingCard

O cartão de anúncio: a foto como obra e, embaixo, a etiqueta de parede com categoria, título, preço, local e hora.

É o componente que define o GPH. A foto ocupa o topo em 4:3, sem cantos arredondados; a **etiqueta** embaixo segue sempre a mesma ordem: categoria e tipo de oferta em `label`, título (até 2 linhas), preço em `price`, local e hora de publicação.

**Props:** `href`, `photo` (url; sem foto, mostra o quadro vazio com o ícone da categoria e "Foto do anunciante"), `photoAlt`, `photoCount`, `category`, `offerType`, `title`, `price`, `priceNote` (ex.: "/mês"), `location`, `publishedAt` (sempre visível: é o "Hoje" do nome), `status`, `highlight` (Destaque, **Hipótese** comercial), `saved`/`onSave`, `hideSave`, `layout` (`grid` ou `row`).

**Vendido ou indisponível:** a foto perde a cor, o preço é riscado e aparece o ponto vermelho com a palavra, como nas galerias.

- Faça: preços como o anunciante escreveu, com "A combinar" quando não houver valor.
- Não faça: selos inventados ("Mais vendido", "Verificado") ou contagem de visualizações.
