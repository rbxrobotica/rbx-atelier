# Acervo de artefatos por projeto

Cópias dos artefatos publicados no claude.ai (Claude Design, Design System, Design, Docs e páginas próprias), guardadas para consulta. Cada projeto tem uma pasta na raiz do repositório e cada artefato uma subpasta: `<projeto>/<artefato>/`.

As cópias foram tiradas em 19 de novembro de 2026, porque o claude.ai/design standalone fecha em 14 de dezembro de 2026. O Initelo Design System entrou em 22 de novembro de 2026.

Estas pastas são acervo: ninguém as executa nem as serve a partir deste repositório. Os design systems em uso continuam em `design-systems/`, e a marca e a voz em `brand-voltage/` e `brand-voice/`. Quando um projeto aparece nos dois lugares, vale o que está nessas três pastas.

## O que tem em cada artefato

- `_backup.json`: título, link original, tipo, versão lida, data, e a lista de arquivos e assets com tamanho e sha256.
- Artefatos com tipo (Design System, Design): os arquivos do projeto como estavam publicados, sob `project/`, mais os assets enviados (logos, ícones, imagens) em `_assets/<id>.<ext>`. O nome original de cada asset está no `project/design-system.json` do próprio artefato (campo `assetGroups`). O runtime do tipo (`artifact-type/`, `SKILL.md`, `index.html`) ficou de fora: é o mesmo em todos os artefatos do tipo.
- Páginas próprias (sem tipo): o `index.html` completo, que já é a página inteira.
- Docs: o texto exportado em Markdown.
- `initelo/design-system/_standalone/`: o export Project HTML do projeto original no claude.ai/design, de antes da conversão para o formato Design System.

Uma versão nova de um artefato entra como outra subpasta do mesmo projeto, com a data no nome (por exemplo `initelo/design-system-2027-01-15/`), sem apagar a anterior.

## O que não foi copiado

- Comentários, o banco de dados interno de cada artefato e as conversas em que foram gerados.
- O artefato compartilhado por outra pessoa ("Kosmos por dentro").
- Projetos que só existissem no claude.ai/design standalone e não aparecessem como artefato em 19 de novembro de 2026.
- As páginas sem tipo não declaram a capacidade de assets, então não dá para listar se têm algum; o HTML delas é autocontido.

Para abrir um design system de novo no claude.ai, crie um artefato do tipo Design System e publique os arquivos de `project/` (e os assets) nele.

## Verificações de segurança

O lint de segurança e a leitura de scripts de CDN deixam estas pastas de fora, porque são cópias guardadas como foram publicadas: bundles gerados, páginas de protótipo e scripts de CDN sem `integrity`. A varredura de segredos lê tudo. A lista das pastas e o que a exceção deixa de cobrir estão em `.github/guardrails/archive.mjs`. Código que roda não entra nestas pastas.

## Índice

### FlightDeck — `flightdeck/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `flightdeck/clearance/` | FlightDeck Clearance | página única | 1 | 0 | https://claude.ai/artifact/VzRaMFAQbuvAsy79QN1SrJ |
| `flightdeck/engenharia-de-loop/` | Engenharia de Loop | página única | 1 | 0 | https://claude.ai/artifact/TMiNRLhRhXsaWC2VFZem3T |

### GPH — `gph/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `gph/design-system/` | GPH Design System | Design System | 59 | 39 | https://claude.ai/artifact/1Kz8T2FFgd3PoYeGDQ35BF |
| `gph/telas-e-prototipos/` | GPH · Telas e Protótipos | Design | 27 | 13 | https://claude.ai/artifact/SHPkAFb2gK3G5E6WVGQb3H |
| `gph/vitrine-neon/` | GPH Vitrine Néon | Design System | 32 | 6 | https://claude.ai/artifact/1UBNFBatpCS65Jw1JCQRpH |

### Informat — `informat/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `informat/brand-system/` | Informat · Brand System | página única | 1 | 0 | https://claude.ai/artifact/W9iKqH8cK5ZEuoQymZZG2u |
| `informat/controle-diario/` | Informat Controle Diário | página única | 1 | 0 | https://claude.ai/artifact/V64XPuFkng88rKRvnRzNqP |
| `informat/design-system/` | Informat Design System | Design System | 59 | 74 | https://claude.ai/artifact/P91WvNUejSguDTQduP8iV4 |
| `informat/direcoes-de-marca/` | Informat · Direções de Marca | página única | 1 | 0 | https://claude.ai/artifact/UvFW9iMb88uansMZRwHRry |
| `informat/direcoes-do-design-system/` | Informat · Direções do Design System | página única | 1 | 0 | https://claude.ai/artifact/KVnHLDZVnVvVsN36s8Vhr6 |
| `informat/direcoes-do-site/` | Informat · Direções do Site | página única | 1 | 0 | https://claude.ai/artifact/XQcvwiw9Bzgvow1sk446rW |
| `informat/telas-e-prototipos/` | Informat · Telas e Protótipos | Design | 25 | 12 | https://claude.ai/artifact/WbBeWYi7VnfM5NwSuzQWTv |

### Initelo — `initelo/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `initelo/design-system/` | Initelo Design System | Design System | 211 | 0 | https://claude.ai/artifact/B71osy1venY5CQUQsfsFiC |

### Iteruno — `iteruno/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `iteruno/design-system/` | Iteruno Design System | Design System | 103 | 115 | https://claude.ai/artifact/3N63RvzQ4yS5EGzHnQh3K5 |
| `iteruno/site-prova/` | Iteruno · Site (prova) | página única | 29 | 0 | https://claude.ai/artifact/PsHi6hAZ6kHDRmPPKc5NTd |

### Kairos — `kairos/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `kairos/freeze/` | Kairos Freeze | página única | 1 | 0 | https://claude.ai/artifact/KZGHtSQtQGZbCKs7xSWeRJ |
| `kairos/review/` | Kairos Review | página única | 1 | 0 | https://claude.ai/artifact/RiiiMB4jgZ9RRzvyScfnY2 |

### Kulinaryos — `kulinaryos/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `kulinaryos/setup-lista-vs-stepper/` | Kulinaryos — Setup: lista vs. stepper | página única | 1 | 0 | https://claude.ai/artifact/BgMP7HA7XA4WVYgVRzPFMg |

### Lyra — `lyra/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `lyra/brand-design-canvas/` | Lyra Brand & Design Canvas | Design | 15 | 0 | https://claude.ai/artifact/YMMsoDjimqZQ53FP9VqYRx |
| `lyra/design-system/` | Lyra Design System | Design System | 33 | 5 | https://claude.ai/artifact/1QDVW2uj4EAaLm4cZUajz1 |

### Merovelis (antes RBX) — `merovelis/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `merovelis/auditoria-de-posicionamento-rbx/` | Auditoria de Posicionamento RBX | Docs | 1 | 0 | https://claude.ai/artifact/Nu4wv9SCMMmqJxJE448hBB |
| `merovelis/cenarios-do-atelier/` | Cenários do Atelier | página única | 1 | 0 | https://claude.ai/artifact/1ZEsBZb7C3o9rj1wpPZYUe |
| `merovelis/maquina-de-vendas-rbx/` | Máquina de Vendas RBX | página única | 1 | 0 | https://claude.ai/artifact/MxrKXBAHmjQh4J8vf39aWc |
| `merovelis/radar-de-alertas-rbx/` | Radar de Alertas RBX | página única | 1 | 0 | https://claude.ai/artifact/GcwsVvBqQSvCtSmBDptddV |
| `merovelis/rbx-atlas-design-system/` | RBX Atlas Design System | página única | 1 | 0 | https://claude.ai/artifact/JHAqrNVCr7tsoCesncacmQ |
| `merovelis/rbx-design-system/` | RBX Design System | Design System | 19 | 6 | https://claude.ai/artifact/J6UUcnNTpHvMh3TCWrw9YK |
| `merovelis/rbx-header-e-navegacao/` | RBX Header e Navegação | Design | 11 | 0 | https://claude.ai/artifact/3bVutibHza8XfsttYUdQeX |
| `merovelis/rbx-public-presence-design-system/` | RBX Public Presence Design System | página única | 1 | 0 | https://claude.ai/artifact/1S3ESq9mji7dJZM41aR6AJ |
| `merovelis/rbx-relations-design-system/` | RBX Relations Design System | página única | 1 | 0 | https://claude.ai/artifact/XEZWaQmuzETPTdWsLLiKU4 |

### Olha Escola — `olha-escola/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `olha-escola/atelier/` | Olha Escola — Atelier | Design | 10 | 11 | https://claude.ai/artifact/FLNEP9Uhb7GL228tdnPJSB |

### Psyctl — `psyctl/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `psyctl/type-sets/` | Psyctl Type Sets | página única | 1 | 0 | https://claude.ai/artifact/CEpR32cARbusZ7zgBiW6FL |

### Robson — `robson/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `robson/virada-de-setembro/` | Virada de Setembro do Robson | página única | 1 | 0 | https://claude.ai/artifact/NRJuwK5BQTmkCpjy8YasrJ |

### Satwake (antes Briefing BTC) — `satwake/`

| Pasta | Título | Tipo | Arquivos | Assets | Link original |
|---|---|---|---|---|---|
| `satwake/area-logada-briefing-btc/` | Área Logada Briefing BTC | página única | 1 | 0 | https://claude.ai/artifact/VPBAppNu7cvo41yCrBVJBC |
| `satwake/brand-design-system/` | Satwake Brand & Design System | Design | 10 | 0 | https://claude.ai/artifact/WZDWeNUrovcJkFVKUbzbZW |
| `satwake/briefing-btc-subscription-modal/` | Briefing BTC Subscription Modal | página única | 1 | 0 | https://claude.ai/artifact/6gCRWaVj6iEwQLTDRpojBa |
