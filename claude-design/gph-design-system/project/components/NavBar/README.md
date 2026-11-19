# NavBar

Barra superior: marca, links, conta RBX e o botão Publique seu anúncio.

Aparece em todas as telas no desktop. O botão primário "Publique seu anúncio" (texto herdado do GPH original) é a única ação primária da barra. "Entrar" leva ao login da conta RBX (RBX Identity); o GPH não tem login próprio.

**Props:** `active` (id do link atual), `links` (`{id, label, href}`), `signedIn`, `userName`, `search` (nó opcional, ex.: um `SearchBar` compacto), `compact` (só o símbolo e ícones, para larguras pequenas), `homeHref`, `loginHref`, `publishHref`, `accountHref`, `onMenu`.

No celular, use `compact` no topo e `BottomNav` embaixo.
