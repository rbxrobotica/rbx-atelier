# ContactPanel

O painel de contato do anúncio: preço, Enviar mensagem, Ver telefone, dica de segurança e denúncia.

Use na coluna lateral da página do anúncio (desktop) ou fixo no rodapé (celular). "Enviar mensagem" abre o `Dialog` de contato, entregue pela central de mensagens RBX (RBX Comms). "Ver telefone" só aparece se o anunciante deixou o telefone visível (campo `visibility` do legado).

**Props:** `price`, `priceNote`, `phoneVisible`, `phone`, `revealed`, `onRevealPhone`, `onMessage`, `messageHref`, `reportHref`.

A dica de segurança é fixa e factual; não prometa garantias.
