# Auditoria de Posicionamento RBX

Sep 24, 2026 · @Leandro Damasio

Auditoria dos 15 PRs mergeados em rbx-flightdeck, rbx-public-presence, rbx-maestro, rbx-infra, rbx-governance, rbx-creatives e strategos-core: mapeamento do ecossistema, verificacao de alinhamento com o roadmap/governanca, e lista de atualizacoes de documentacao/ADRs/contextos agenticos.

## Veredito: arquitetura solida, documentacao defasada

Nos 15 PRs, cada fronteira que cada repo alegava ter se manteve sob revisao adversarial: **Strategos** foi pego tentando influenciar missions e formalmente reduzido a outcome-only (`rbx-maestro#23`, batendo com o proprio ADR-0010 draft do strategos-core, secao 11); **Flight Deck** nunca ganhou capacidade de publicar ou controlar browser; **Public Presence** nunca ganhou autoridade de orquestracao; **rbx-creatives** nunca virou sistema de registro. O novo modelo de autonomia (`AutonomyAuthorization` limitado e revogavel, dispatch vinculado a request, estagios sem intervencao com credenciais separadas) foi implementado com rigor real: 16 rounds de revisao Codex numa unica PR, um E2E de 4 repos.

Mas **o registro escrito nao acompanhou**, e isso e sistemico, nao incidental:

- Os documentos de visao geral e plataforma do proprio rbx-governance estao \~7 semanas desatualizados e nao mencionam rbx-flightdeck, rbx-public-presence ou rbx-creatives, apesar dos tres terem PRs mergeadas nesta leva e rbx-flightdeck ja ter secrets de producao.
- Nenhum plano de roadmap rastreado referencia este cluster, a maior iniciativa cross-repo coordenada da leva; o plano `plan-rbx-2026-003` tem revisao em 7 dias (2026-09-30).
- A matriz de acesso a repositorios da governanca nao tem linhas para rbx-flightdeck ou rbx-creatives, ambos ja com `ExternalSecret`s de producao.
- README/CLAUDE.md do rbx-infra descrevem um repo com \~4 apps; na verdade roda \~34-37, e nunca mencionam o Corbetti (seu proprio workbench de execucao, hoje central para a ponte de decisao-para-acao).
- Tres repos tem documentos de arquitetura que contradizem o que seu proprio codigo recem-mergeado faz (diagrama do rbx-maestro ainda mostra Strategos na cadeia de admissao; architecture.md do rbx-flightdeck ainda chama materializacao de "reservada para o futuro" depois da PR#15 implementa-la; o contrato de capacidade do rbx-maestro descreve um vocabulario que a PR#24 ja substituiu).
- Colisao de numeracao de ADR na mesma leva: ADR 0010 do rbx-flightdeck ("Public Presence autopilot bridge") e ADR-0010 do strategos-core ("deliberation vocabulary") sao ADRs nao relacionadas, ambas mergeadas nesta leva, e pelo menos uma citacao cross-repo ja se refere a uma delas so pelo numero.

## Mapa do ecossistema (pos-15-PRs)

| Repo | Papel |
| --- | --- |
| **rbx-flightdeck** | Produto independente de planejamento semanal de Workstreams sob capacidade escassa, com gate de aprovacao humana obrigatorio antes de qualquer acao ligada a destinatario (LinkedIn/XING/trading permanecem proibidos, nenhuma credencial e armazenada). Com as PRs #13 e #15, passou a hospedar uma ponte de autopilot limitada e revogavel para o Public Presence (ADR 0010 local): uma Action de Workstream aprovada cria atomicamente uma execution intent imutavel, e quando o request esta integralmente dentro de uma `AutonomyAuthorization` ratificada pelo dono, uma decisao de dispatch produzida por politica (nunca por humano) deixa materializacao/ativacao/reconciliacao rodarem sem intervencao. Nunca publica, nunca controla browser, nunca guarda credencial social. |
| **rbx-public-presence** | 'Kernel de comunicacao publica' (palavras da propria ADR-0614): identidades, editorial, Creative Engine, assets, publicacao com recibos, analytics, archive. Agora busca e verifica a entrega do Corbetti diretamente (`RepositoryFetcher` + `PRESENCE_GITHUB_TOKEN`) em vez de confiar numa alegacao de import, e pode avancar uma entrega para READY/SCHEDULED sem confirmacao humana por item quando uma `AutonomyAuthorization` do Flight Deck cobre o caso. Ainda nao cria estrategia, nao orquestra missions, nao controla browser. |
| **rbx-maestro** | Plano de Orquestracao de Agentes: admissao/loop/graph de Missions (o seam governado de admissao de ExecutionRequest) mais Service Discovery horizontal. Agora hospeda um piloto FlightDeck V2 aditivo e desabilitado por padrao; reduziu Strategos formalmente a outcome-only (rejeitando `origin=strategos` em toda superficie de admissao/lease/mutacao, fechando uma violacao real de fronteira); completou o loop V2 com projecao de resultado + reconciliacao deterministica e dois JSON Schemas canonicos cross-repo que rbx-infra e rbx-public-presence agora consomem por path+versao. |
| **rbx-infra** | Fonte da verdade GitOps/manifests para o cluster k3s, mais DNS/certs/Execution-Identity-and-Epoch (ADR-0607) — mas seus docs de topo (README, CLAUDE.md) ainda descrevem um repo de 3-4 produtos enquanto `apps/prod/` roda \~34-37 aplicacoes cobrindo toda a stack de agente/LLM/comms/pagamentos/identidade. Tambem hospeda o Corbetti, o Agent Execution Workbench provider-neutral que arrenda missions do Maestro, executa em worktrees isolados com capability-probing fail-closed, e abre PRs — e, via PR#264/265/268/269, esta ativamente conectando (somente admissao, dispatch key retida) a ponte FlightDeck→Public Presence→Maestro→Corbetti em prod. |
| **rbx-governance** | Camada institucional de ADR/politica/padroes, nao runtime; aplica precedencia Estrategico (strategos-core) > Tatico (rbx-governance) > Operacional. A PR#79 mostra a governanca ativamente corretora da mudanca de confirmacao humana estrita por item para autonomia limitada e revogavel (ADR-0614, Proposed) em todo o loop comercial/publicacao — nomeando Public Presence 'o kernel de comunicacao publica' e rbx-creatives 'workbench/biblioteca, nao sistema de registro' — enquanto seus proprios docs de visao geral/roadmap nao foram atualizados para acompanhar. |
| **rbx-creatives** | Workbench de execucao de mission (nao sistema de registro) que produz e verifica deterministicamente assets criativos (SVG/PNG/video planejado) para RBX e Merovelis via adapters intercambiaveis, despachado pelo Maestro e rodando no Corbetti. Nao guarda credencial de canal, nunca publica; saida terminal e uma PR de entrega revisada por humano. A PR#3 fechou defeitos de integridade de evidencia e vazamento de credencial no pipeline inicial. |
| **strategos-core** | Camada de cognicao estrategica para organizacoes (objetivos, riscos, cenarios, decisoes, memoria estrategica) — explicitamente nao o control plane de IA/LLM, nao um dashboard, nao um orquestrador. A PR#5 (ADR-0010 Draft, nao ratificada) formaliza uma camada SaaS multi-tenant e reafirma por escrito, com um fix companheiro no rbx-maestro, que Strategos so escreve seus proprios objetos estrategicos e nunca admite ou ativa missions do Maestro ('command by reference' apenas). |

## Componentes novos ou reposicionados

- **`AutonomyAuthorization`** (autorizacao permanente limitada e revogavel): novo primitivo de governanca cross-cutting (rbx-flightdeck, rbx-public-presence, rbx-maestro) que deixa politica (nunca um humano) aprovar e despachar trabalho comercial/publicacao rotineiro por request, substituindo confirmacao humana por item para os dois perfis de execucao ja admitidos.
- **Public Presence reposicionado como 'kernel de comunicacao publica'**: saiu de servico de publicacao delimitado que so esperava humano para o unico lugar que pode avancar e agendar uma publicacao autonomamente sob uma autorizacao que aplica mas nao cria.
- **rbx-creatives mapeado na governanca pela primeira vez**: ADR-0614 e o primeiro tratamento a nivel de governanca, definindo-o como 'workbench do repositorio e biblioteca de producao reutilizavel, nao o sistema de registro'.
- **Corbetti revelado como hub de execucao central dentro do rbx-infra**: um Agent Execution Workbench completo (runner provider-neutral, capability-probing fail-closed, attestation por mission) vivendo dentro do que os docs publicos do rbx-infra ainda descrevem como um repo GitOps simples.
- **Registro de JSON Schema canonico cross-repo**: `runner-result.v1` e `flightdeck-result-projection.v1`, donos e versionados no rbx-maestro, agora consumidos por path+versao pelo rbx-infra e rbx-public-presence em vez de cada repo manter sua propria copia.
- **Strategos formalmente rebaixado a outcome-only ('command by reference')**: `StrategosPort` reduzido a `PublishOutcome`; toda superficie de admissao/lease/mutacao do Maestro agora rejeita `origin=strategos`. Fecha o que o proprio corpo da PR do rbx-maestro chama de violacao arquitetural real.
- **Camada de dispatch vinculado a request**: nova distincao entre 'admitido' (Maestro sabe do request) e 'despachado' (aprovacao produzida por politica, vinculada ao fingerprint exato do request admitido, sob lock consultivo) — introduzida junto em flightdeck, maestro e public-presence.
- **Colisao de identificador ADR-0010**: duas ADRs locais nao relacionadas, ambas numeradas '0010', mergeadas na mesma leva: a do rbx-flightdeck ('Public Presence autopilot bridge') e a do strategos-core ('Deliberation vocabulary and council composition'). Ja ha pelo menos uma citacao cross-repo que se refere a uma delas so pelo numero — risco real de referencia cruzada errada.

## Desalinhamentos encontrados

| Severidade | Achado | Evidencia |
| --- | --- | --- |
| **Alta** | Visao geral/plataforma do rbx-governance omitem 3 dos 7 repos auditados por completo | `RBX-ECOSYSTEM-OVERVIEW.md` e `PLATFORM.md` atualizados pela ultima vez em 2026-08-06, antes de ADR-0406/0604 (08-24), ADR-0606/0607 (09-03), ADR-0608 (09-06), ADR-0609-0613 (09-08) e ADR-0614 (09-22); tabelas de mapeamento nao citam rbx-flightdeck, rbx-public-presence ou rbx-creatives |
| **Alta** | rbx-flightdeck e rbx-creatives ja detem secrets de producao mas nao aparecem na matriz de acesso a repositorios | `REPOSITORY-ACCESS-MATRIX.md` / `repository-access-matrix.yaml` sem linhas para os dois; rbx-infra PR#268 adiciona `ExternalSecret` real + CronJob para rbx-flightdeck em prod na mesma leva |
| **Alta** | Implementacao adiante da ratificacao: ADR-0608 e as ADR-0013/0014/0015 do rbx-public-presence seguem 'Proposed', mas ja tem 3 PRs mergeadas, aprovadas por Codex e validadas por E2E de 4 repos | ADR-0608 sem mudanca desde 09-06; `docs/adr/README.md` do rbx-public-presence vs. PR#2/#3/#6 |
| **Alta** | Docs publicos do rbx-infra descrevem repo \~10x menor que o real e nunca citam o Corbetti | README/CLAUDE.md descrevem \~4 apps; `apps/prod/` e `gitops/app-of-apps/` listam \~34-37; CLAUDE.md indexa so 2 de 18 runbooks existentes |
| **Alta** | Nenhum plano de roadmap rastreado referencia o cluster flightdeck/public-presence/creatives, a maior iniciativa cross-repo coordenada da leva | `plan-rbx-2026-003` cita so rbx-agent-layer/rbx-harness/truthmetal/verentir/rbx-governance-scripts/rbx-observability, proxima revisao em 2026-09-30 (7 dias); `plan-rbx-2026-002` cita ADR-0603/0604 mas nao ADR-0606-0614 |
| **Media** | Diagrama de arquitetura do rbx-maestro contradiz o que suas proprias PRs acabaram de entregar | Diagrama 'Position in RBX Stack' sem no Flight Deck e ainda desenha Strategos na cadeia de admissao direta, nao tocado por PR#21/#23/#24 |
| **Media** | `docs/architecture.md` do rbx-flightdeck nunca atualizado pela PR#15 apesar dela implementar exatamente o que o arquivo chama de reservado para o futuro | Secao 'Consequences' emendada da ADR 0010 (mesma PR) lista materializacao/ativacao/reconciliacao como implementadas |
| **Media** | Contrato de capacidade cross-repo do rbx-maestro descreve vocabulario que diverge do que a mesma leva entregou | `docs/contracts/public-presence-creative-execution.md` define estados available/degraded/unavailable/unverified; PR#24 implementou booleano observado + mode:direct/degraded/unavailable, sem 'unverified' |
| **Media** | `catalog/products.yml` do rbx-infra (fonte da verdade do Eden IDP) fora de sincronia com a mesma leva | Sem entradas para rbx-maestro/rbx-flightdeck apesar de ambos ganharem Deployments/CronJobs reais via PR#268; rbx-public-presence ainda listado como phase:seed apesar do primeiro pin de imagem de producao |
| **Media** | Colisao de identificador ADR-0010 entre rbx-flightdeck e strategos-core, ja citada cross-repo por numero isolado | `docs/adr/0010-public-presence-autopilot-bridge.md` vs. `docs/adr/ADR-0010-deliberation-vocabulary-and-council-composition.md`; rbx-maestro cita 'strategos-core ADR-0010 §11' por numero |
| **Baixa** | ADR-0614 nao deixou backlink nas ADRs que emenda | ADR-0604 e ADR-0406 sem nota 'Amended by ADR-0614 (Proposed)', ao contrario da convencao bidirecional do proprio repo |

**Conclusao desta secao:** nenhum destes e um "nitpick" — sao contradicoes concretas e citaveis entre o que e verdade agora e o que o registro escrito diz, mesmo com a intencao de posicionamento por tras sendo solida.

## Quase-incidente investigado: ordem de merge rbx-maestro#23 / rbx-infra#268

A PR `rbx-maestro#23` documenta explicitamente no proprio corpo: **'Merge order: operational prerequisites (rbx-infra#268 runbook steps 1-4), then rbxrobotica/rbx-infra#268, then this PR'** — o novo step de CI (promocao de imagem via `yq` em `apps/prod/rbx-maestro/kustomization.yml`) depende do arquivo que a PR#268 cria.

Os timestamps reais de merge mostram a ordem invertida: `rbx-maestro#23` mergeou as **02:01:27Z**, e `rbx-infra#268` so tres segundos depois, as **02:01:30Z**.

Verifiquei o log real do GitHub Actions do push resultante (run `35945464189`, `rbx-maestro`, sucesso). O step 'Promote image tag to rbx-infra' so executou as **02:03:45Z** — mais de dois minutos depois de ambos os merges. Nesse momento o checkout do rbx-infra ja continha o arquivo criado pela PR#268; o `yq` encontrou o arquivo, aplicou o patch, commitou e deu push direto para `main` do rbx-infra com sucesso.

**Conclusao: nenhum incidente ocorreu.** A ordem de merge foi tecnicamente violada, mas o tempo real de execucao do step de CI (build + docker push antes do step de promocao) deu folga suficiente para que a PR#268 ja estivesse em `main` quando o step realmente rodou. Vale apertar a disciplina de ordem de merge documentada para o futuro, mas isso nao e um item de acao urgente — e um quase-incidente resolvido, documentado aqui para registro.

## Lista de atualizacao (28 itens)

**Mecanicos** (13 — posso executar direto, sem julgamento de governanca): sincronizar docs/diagramas com o que ja foi mergeado e revisado. **Decisao humana** (15 — documentados na PR relevante, sem bloquear os mecanicos): status de ADR, entradas em matriz de acesso/capacidade, renomeacao de ADR, cobertura em plano de roadmap.

| Repo | Item | Tipo | Prioridade | Status |
| --- | --- | --- | --- | --- |
| rbx-governance | RBX-ECOSYSTEM-OVERVIEW.md + PLATFORM.md: incluir os 3 repos ausentes, reconciliar com ADR-0406/0604/0606-0613/0614 | Mecanico | Alta | Planejado |
| rbx-governance | ADR-0604 / ADR-0406: backlink 'Amended by ADR-0614' | Mecanico | Media | Planejado |
| rbx-governance | REPOSITORY-ACCESS-MATRIX: linhas para rbx-flightdeck e rbx-creatives | Decisao | Alta | Aguardando |
| rbx-governance | Planos H2 2026 e 2026-2028: cobrir o cluster flightdeck/public-presence/creatives/infra antes da revisao de 09-30 | Decisao | Alta | Aguardando |
| rbx-governance | CAPABILITY-OWNERSHIP-MATRIX: marcar linhas Operator Browser Edge / Personal Browser Communication para emenda quando ADR-0614 ratificar | Decisao | Baixa | Aguardando |
| rbx-governance | CAPABILITY-OWNERSHIP-MATRIX: adicionar linhas para rbx-public-presence e rbx-creatives | Decisao | Media | Aguardando |
| rbx-governance | ADR-0614 §3: confirmar se ha issue de follow-up para os perfis comms-delivery/v1 e browser-edge/v1 reservados | Decisao | Baixa | Aguardando |
| rbx-public-presence | README.md: descrever o caminho materialize→import→projecao→continuation ja implementado | Mecanico | Alta | Planejado |
| rbx-public-presence | docs/architecture/glossary.md: adicionar AutonomyAuthorizationProjection, Materialization, ContinuationStatus etc | Mecanico | Media | Planejado |
| rbx-public-presence | AGENTS.md: auditar contra o reframing 'kernel' da ADR-0013 | Mecanico | Media | Planejado |
| rbx-public-presence | docs/adr/README.md: status de ADR-0013/0014/0015 (todas mergeadas e E2E-validadas mas 'Proposed') | Decisao | Alta | Aguardando |
| rbx-public-presence | docs/architecture/security.md: adicionar PRESENCE\_GITHUB\_TOKEN com escopo/rotacao | Decisao | Media | Aguardando |
| rbx-flightdeck | docs/architecture.md: reconciliar secoes 'bridge' e 'Future integrations' com a ADR 0010 emendada | Mecanico | Alta | Planejado |
| rbx-flightdeck | docs/operations.md: corrigir contagem de testes desatualizada | Mecanico | Baixa | Planejado |
| rbx-flightdeck | docs/adr/0010-...: status Accepted apos merge das PR#13/#15 | Decisao | Media | Aguardando |
| rbx-flightdeck | docs/adr/0010-...: renomear/qualificar para evitar colisao com strategos-core ADR-0010 | Decisao | Media | Aguardando |
| rbx-maestro | docs/architecture.md: diagrama 'Position in RBX Stack' — adicionar Flight Deck, remover Strategos da cadeia de admissao | Mecanico | Alta | Planejado |
| rbx-maestro | docs/contracts/public-presence-creative-execution.md: reconciliar vocabulario de capability com o que a PR#24 entregou | Mecanico | Alta | Planejado |
| rbx-maestro | AGENTS.md: atualizar rodape 'Last updated' | Mecanico | Baixa | Planejado |
| rbx-maestro | docs/adr/ADR-0006 e ADR-0007: status Proposed vs Accepted/Implemented | Decisao | Media | Aguardando |
| rbx-infra | catalog/products.yml: adicionar rbx-maestro e rbx-flightdeck; atualizar fase do rbx-public-presence | Mecanico | Media | Planejado |
| rbx-infra | CLAUDE.md: indexar DECISION-TO-ACTION-BRIDGE.md, CORBETTI-EXECUTION.md, CLAUDE-CODE-DESIGN-CAPABILITY.md | Mecanico | Media | Planejado |
| rbx-infra | README.md e CLAUDE.md: decidir se reescreve para refletir escopo real (\~34-37 apps) ou mantem como onboarding simplificado | Decisao | Alta | Aguardando |
| rbx-infra | docs/adr/ADR-0008 e ADR-0009: status Proposed vs Accepted | Decisao | Media | Aguardando |
| rbx-creatives | CLAUDE.md: sincronizar com correcoes de evidencia/credencial da PR#3 | Mecanico | Media | Planejado |
| rbx-creatives | docs/adr/ADR-0001: status Proposed → Accepted/superseded | Decisao | Media | Aguardando |
| strategos-core | docs/adr/ADR-0010: obter revisao humana independente + ratificacao do Chair exigida pela ADR-0009 | Decisao | Alta | Aguardando |
| rbx-infra / rbx-maestro | Ordem de merge #23/#268 | — | — | **Resolvido** (ver secao acima, sem acao necessaria) |

Itens "Planejado" estao sendo executados agora, uma PR por repo, seguindo o padrao de revisao adversarial ja usado no MINT-DIRECT-001 (Codex `sol` max-effort antes de qualquer link de PR).

## Status de execução

Todas as 6 PRs de sincronização mecânica foram abertas, cada uma passando por múltiplas rondas de revisão Codex `sol` max-effort (nenhuma foi aberta sem passar por pelo menos 1 ronda limpa) antes do link sair:

| Repo | PR | Rondas de revisão |
| --- | --- | --- |
| rbx-governance | [#82](https://github.com/rbxrobotica/rbx-governance/pull/82) | 2 (1 High + 1 Medium + 3 Low corrigidos) |
| rbx-public-presence | [#9](https://github.com/rbxrobotica/rbx-public-presence/pull/9) | 5 (1 High + 8 Medium/Low corrigidos ao longo das rondas) |
| rbx-flightdeck | [#18](https://github.com/rbxrobotica/rbx-flightdeck/pull/18) | 3 (3 Medium corrigidos + 1 fix proativo de consistência) |
| rbx-maestro | [#27](https://github.com/rbxrobotica/rbx-maestro/pull/27) | 2 (1 High + 3 Medium corrigidos) |
| rbx-infra | [#273](https://github.com/rbxrobotica/rbx-infra/pull/273) | 2 (1 Low corrigido) |
| rbx-creatives | [#7](https://github.com/rbxrobotica/rbx-creatives/pull/7) | 3 (1 Medium + 1 Low corrigidos ao longo das rondas) |

strategos-core não teve PR: nenhum item mecânico foi identificado ali, só o item de decisão humana (ratificação da ADR-0010) já listado na tabela acima.

Nenhuma PR foi mergeada por mim; aguardando revisão e merge do operador.

Em andamento: 6 PRs de sincronizacao documental (rbx-governance, rbx-public-presence, rbx-flightdeck, rbx-maestro, rbx-infra, rbx-creatives), cada uma cobrindo os itens mecanicos daquele repo mais uma secao listando os itens que exigem decisao sua, sem bloquear o merge dos mecanicos. strategos-core nao tem item mecanico — so a decisao de ratificacao da ADR-0010, que fica registrada acima.

Esta secao sera atualizada com os links das PRs assim que abrirem.
