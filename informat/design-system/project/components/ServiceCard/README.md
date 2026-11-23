# ServiceCard

Cartão de uma frente de serviço do Informat (ícone, número da frente, título, o que inclui e link para a página do serviço).

## Quando usar
- Na Início e em listagens de serviço, sempre as três frentes juntas e na mesma ordem: 01 Computador pronto para usar, 02 Manutenção e reparo, 03 Linux.

## O que você fornece
- `index` ("01"), `title`, `description` (uma frase), `items` (três itens curtos do que está incluído), `icon` (`monitor`, `wrench`, `terminal`), `href`.
- `tag` quando algo do cartão é hipótese, ex.: "Hipótese: remoto quando possível".

## Faça
- Descreva processo, não promessa vaga: "Orçamento com peças e mão de obra separadas".
- Coloque os cartões numa grade `auto-fit` com mínimo `card-min`.

## Não faça
- Não ponha preço, prazo ou garantia no cartão enquanto forem [PREÇO], [PRAZO], [GARANTIA].
- Não use ilustração no lugar do ícone; não use borda colorida lateral.

## Estados
Estático. O link tem hover (`placa-strong`) e foco (anel `focus`).
