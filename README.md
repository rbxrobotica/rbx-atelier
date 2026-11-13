# RBX Atelier

Repositório central da **Identidade Visual**, da **Voz Verbal** e dos **Design Systems** do ecossistema RBX.

Este repositório reúne a marca canônica (Brand Voltage), o sistema de escrita (Brand Voice) e os sistemas visuais dos produtos RBX em um único lugar, pronto para consulta, handoff e publicação.

---

## Estrutura

```
rbx-atelier/
├── brand-voltage/              ← Identidade Visual RBX (source of truth)
├── brand-voice/                ← Sistema de Escrita RBX (source of truth)
├── design-systems/             ← Design Systems por produto
│   ├── rbx-systems/            ← RBX Systems (institucional / site)
│   ├── rbx-design-system/      ← Robson (trading / execução e risco)
│   ├── eden-system-creator/    ← Éden System Creator
│   ├── strategos/              ← Strategos (situation room)
│   └── satwake/                ← Satwake (leitura diária BTC, antes Briefing BTC)
└── docs/                       ← Documentação de alinhamento e decisões
```

---

## 1. Brand Voltage — Identidade Visual

`brand-voltage/`

Source of truth para a identidade visual da RBX: marca, wordmarks, cores e tipografia base.

| Arquivo / Pasta | Conteúdo |
|---|---|
| `colors_and_type.css` | Tokens de cor e tipografia da marca |
| `marks/` | Símbolos/monogramas RBX (`rbx-mark-B-refined.svg`, `rbx-mark-C-geometric.svg`) |
| `wordmarks/` | Lockups textuais (Holding, Systems, Robson, TruthMetal) |
| `preview/voltage-preview.html` | Amostra visual da marca |

---

## 2. Brand Voice — Sistema de Escrita (Zurich-coded)

`brand-voice/`

Source of truth para a voz verbal da RBX: princípios universais de escrita, tokens de voz, registros por contexto (institucional, marketing, UI, documentação, briefings, outputs de agentes) e regras de enforcement. Complementa o Brand Voltage: o Voltage define como a RBX se parece; o Voice define como a RBX soa.

| Arquivo | Conteúdo |
|---|---|
| `rbx-voice-system.md` | Sistema completo: princípios, tokens, registros, anti-padrões, enforcement |

Wiring para agentes: skill `rbx-voice-system` no repositório `rbx-agent-layer`.

---

## 3. Design Systems por produto

### `design-systems/rbx-systems/` — RBX Systems
Design system institucional, derivado do site `rbxsystems.ch`. Tom **Zurich-coded**: escuro, institucional, engenharia acima de decoração.

- `README.md` — fundamentos visuais e editoriais
- `colors_and_type.css` — tokens completos
- `assets/` — logos, patterns e hero graphics
- `preview/` — cartões de amostra (cores, tipografia, componentes)
- `ui_kits/{marketing,atelier,product}/` — kits de UI por superfície

### `design-systems/rbx-design-system/` — Robson
Design system do produto Robson (execução e risco em trading). Interfaces que parecem painéis de instrumentos: quietas, determinísticas, auditáveis.

- `README.md` — princípios, voz, fundamentos visuais
- `colors_and_type.css` — tokens
- `assets/` — logos e marcas
- `preview/` — amostras de componentes
- `ui_kits/{app,site}/` — dashboard de operações e site de marketing

### `design-systems/eden-system-creator/` — Éden System Creator
Design system do produto Éden, construído sobre o Brand Voltage. Canônico para as superfícies do Éden.

- `README.md` — diretrizes do sistema
- `SKILL.md` — manifesto para agentes
- `colors_and_type.css` — tokens
- `assets/` — marcas e patterns
- `preview/` — amostras visuais
- `ui_kits/eden/` — componentes de produto (Dashboard, CreateMission, AgentCouncil, etc.)

### `design-systems/strategos/` — Strategos (Obsidian Council)
Design system do Strategos: *war room* para liderança estratégica com IA. Superfície deliberativa, não dashboard.

- `README.md` — fundamentos do sistema
- `RULES_OF_DESIGN.md` — regras rígidas de design do Strategos
- `SKILL.md` — manifesto para agentes
- `colors_and_type.css` — tokens
- `assets/` — marcas (inclui placeholder do mark Strategos)
- `preview/` — cartões de amostra
- `ui_kits/strategos-app/` — kit de UI da aplicação Strategos

### `design-systems/satwake/` · Satwake
Brand e design system do Satwake, nome público do antigo Briefing BTC. Direção clara e editorial: papel claro, texto grafite, acentos de amanhecer.

- `README.md`: marca, cores com contraste medido, tipografia, voz e imagem
- `tokens.json`: fonte dos tokens (formato inspirado no W3C DTCG, sem conformidade total); `colors_and_type.css` traduz em variáveis `--sw-`
- `assets/`: símbolo, lockups claro e escuro, ícone de app

---

## 4. Documentação de alinhamento

`docs/`

- `DESIGN-SYSTEM-ALIGNMENT.md` — como o Éden adota o Voltage e onde cada design system se aplica
- `ADR-0005-design-system-voltage-alignment.md` — decisão arquitetural de alinhamento ao Voltage

---

## 5. Verificações de segurança

`.github/workflows/guardrails.yml`

O workflow `Guardrails` roda em todo pull request e em todo push na `main`. Ele aplica a seção 2 dos guardrails de engenharia da RBX (`rbx-engineering-guardrails.md`, no repositório `rbx-agent-layer`) em três jobs.

| Job | O que verifica |
|---|---|
| `secret-scan` | Segredos no histórico do Git, com gitleaks. No pull request, os commits do próprio pull request. No push na `main`, o histórico completo. Entram na leitura commits de merge, arquivos que mudam de tipo, arquivos que o Git trata como binários e arquivos renomeados. O job reprova quando o Git emite qualquer aviso, porque nesse caso o gitleaks não lê nada |
| `dependency-scan` | Vulnerabilidades conhecidas, com osv-scanner, em todo lockfile do repositório e nas versões de React, ReactDOM e Babel que as páginas dos kits carregam do unpkg. Todo `package.json` precisa de um lockfile ao lado, em dia com ele. Uma página reprova quando carrega script de outra origem sem versão exata ou sem um atributo `integrity` que o navegador de fato aplique, quando carrega um arquivo do repositório que o lint não lê, quando usa `<base href>`, quando declara um import map e quando não está em UTF-8 de forma inequívoca. Link simbólico no repositório também reprova |
| `security-lint` | Regras de segurança do ESLint nos arquivos `.js`, `.mjs`, `.cjs` e `.jsx` e nos scripts embutidos nas páginas `.html` e `.htm`: `eval` e equivalentes, texto inserido como HTML, arquivo ou propriedade acessados por nome calculado, expressão regular insegura, módulo importado de outra origem |

Tudo o que o workflow executa tem versão fixa: as actions pelo SHA do commit, gitleaks e osv-scanner pela versão e pelo SHA-256 do binário, o Node pela versão exata, os pacotes npm por `.github/guardrails/package-lock.json`.

Um achado do lint se resolve no código ou com uma justificativa na própria linha: `// eslint-disable-next-line <regra> -- <motivo>`. Uma exceção do osv-scanner fica em um `osv-scanner.toml` ao lado do lockfile, com motivo e data de validade.

As verificações apoiam a revisão e não a substituem. Um pull request pode alterar o próprio workflow, as ferramentas e as exceções, e essas alterações aparecem no diff. Sete coisas ficam fora do alcance, quatro do lint e da leitura das páginas e três da varredura de segredos:

1. Código escrito em atributo HTML (`onclick`, endereço `javascript:`, `srcdoc`).
2. Script dentro de arquivo SVG ou de qualquer arquivo que não seja página `.html` ou `.htm`.
3. O que o código carrega ou executa em tempo de execução.
4. O que o servidor decide ao servir um arquivo, como a codificação ou o tipo anunciados em cabeçalho HTTP.
5. Segredo em arquivo que as regras do gitleaks pulam pelo nome, como imagens (SVG incluído), fontes, PDF, lockfiles e pastas `node_modules`.
6. Segredo que nenhuma regra do gitleaks reconhece, como uma senha comum, ou escrito em arquivo UTF-16.
7. Commit que nenhum branch ou tag do repositório alcança.

---

## Como usar

1. **Identidade visual:** comece em `brand-voltage/`.
2. **Escrita e tom de voz:** leia `brand-voice/rbx-voice-system.md` antes de produzir copy, docs ou posts.
3. **Design system de produto:** escolha a pasta correspondente em `design-systems/`.
4. **Tokens:** cada pasta tem seu `colors_and_type.css`.
5. **Componentes:** os design systems que têm `ui_kits/` trazem exemplos executáveis (abrir `index.html` no navegador); os do Satwake estão no canvas de design citado no README dele.

---

## Origem

Materiais consolidados a partir dos repositórios internos da RBX, com source of truth em `rbx-eden-system-creator/atelier/` e `strategos-ui/Strategos Design System/`.
