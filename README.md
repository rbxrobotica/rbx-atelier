# RBX Atelier

Repositório central da **Identidade Visual** e dos **Design Systems** do ecossistema RBX.

Este repositório reúne a marca canônica (Brand Voltage) e os sistemas visuais dos produtos RBX em um único lugar, pronto para consulta, handoff e publicação.

---

## Estrutura

```
rbx-atelier/
├── brand-voltage/              ← Identidade Visual RBX (source of truth)
├── design-systems/             ← Design Systems por produto
│   ├── rbx-systems/            ← RBX Systems (institucional / site)
│   ├── rbx-design-system/      ← Robson (trading / execução e risco)
│   ├── eden-system-creator/    ← Éden System Creator
│   └── strategos/              ← Strategos (situation room)
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

## 2. Design Systems por produto

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

---

## 3. Documentação de alinhamento

`docs/`

- `DESIGN-SYSTEM-ALIGNMENT.md` — como o Éden adota o Voltage e onde cada design system se aplica
- `ADR-0005-design-system-voltage-alignment.md` — decisão arquitetural de alinhamento ao Voltage

---

## Como usar

1. **Identidade visual:** comece em `brand-voltage/`.
2. **Design system de produto:** escolha a pasta correspondente em `design-systems/`.
3. **Tokens:** cada pasta tem seu `colors_and_type.css`.
4. **Componentes:** cada design system tem `ui_kits/` com exemplos executáveis (abrir `index.html` no navegador).

---

## Origem

Materiais consolidados a partir dos repositórios internos da RBX, com source of truth em `rbx-eden-system-creator/atelier/` e `strategos-ui/Strategos Design System/`.
