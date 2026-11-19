# PhotoGallery

A galeria de fotos da página do anúncio: foto grande, setas, contador e miniaturas.

Use no topo da página de detalhe. A foto aparece inteira no quadro 4:3, sobre `sunken`, sem cantos arredondados. O contador ("1 / 12") é anunciado com `aria-live`.

**Props:** `photos` (`{src, alt}`; vazio mostra quadros "Foto do anunciante"), `total`, `index`, `category` (ícone do quadro vazio).

- Faça: `alt` descrevendo a foto ("Sala com janela para a varanda").
- Não faça: cortar o item principal; marca-d'água sobre a foto.
