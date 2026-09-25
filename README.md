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

## Como usar

1. **Identidade visual:** comece em `brand-voltage/`.
2. **Escrita e tom de voz:** leia `brand-voice/rbx-voice-system.md` antes de produzir copy, docs ou posts.
3. **Design system de produto:** escolha a pasta correspondente em `design-systems/`.
4. **Tokens:** cada pasta tem seu `colors_and_type.css`.
5. **Componentes:** os design systems que têm `ui_kits/` trazem exemplos executáveis (abrir `index.html` no navegador); os do Satwake estão no canvas de design citado no README dele.

---

## Origem

Materiais consolidados a partir dos repositórios internos da RBX, com source of truth em `rbx-eden-system-creator/atelier/` e `strategos-ui/Strategos Design System/`.
