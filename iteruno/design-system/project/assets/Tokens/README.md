# Tokens exportados

Gerados de `tokens.json` por `tools/tokens.py`; não edite à mão.

- `itr.css`: as mesmas variáveis do sistema com o prefixo `--itr-` (`--itr-marca`, `--itr-space-4`…), nos dois temas, para projetos que não usam o bundle e precisam conviver com outro CSS.
- `itr.tokens.json`: formato DTCG (Design Tokens Community Group) para ferramentas de design e geradores de outras plataformas.

Dentro do sistema (bundle.css, site) as variáveis não têm prefixo: `var(--marca)`.
