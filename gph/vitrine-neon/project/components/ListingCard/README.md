# ListingCard

O anúncio na vitrine: foto sobre `surface`, rótulo em ciano, título em ink, preço em magenta.

A foto fica em 4:3 dentro de uma moldura `surface` com `space-2` de margem, para que o fundo roxo não distorça a leitura de cor. Embaixo, na mesma ordem sempre: `label` (categoria · tipo de oferta) em `cyan`, título em `body-strong`, preço em `price` (`magenta`, `text-glow-pink`), local e hora em `small`. `featured` liga o selo Destaque e o `glow-pink` (Hipótese comercial). `status="vendido"` ou `"indisponivel"` tira a cor da foto, risca o preço e mostra o selo com a palavra.

**Props:** `title`, `href`, `photo`, `photoAlt`, `category`, `offer`, `price`, `place`, `when`, `featured`, `status`.

- Sem foto: quadro `bar` com "Foto do anunciante" (`role="img"`).
- Grid recomendado: `repeat(auto-fill, minmax(240px, 1fr))` com `space-5`.
- O título é o link; o cartão inteiro não é clicável.
