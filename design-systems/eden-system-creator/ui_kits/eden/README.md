# Éden System Creator — UI Kit

A clickable React+Babel mock of the Éden System Creator product. Tokens come from `../../colors_and_type.css`; kit-specific styles in `styles.css`.

## Screens

| Screen | File | Purpose |
|---|---|---|
| Dashboard | `Dashboard.jsx` | Overview · open missions, decisions queue, risks, recent artifacts |
| System view | `SystemView.jsx` | Strategos system page · positioning, readiness, missions, ADRs |
| Create mission | `CreateMission.jsx` | Brief composer · objective, target, agents, autonomy, constraints, expected artifacts |
| Agent Council | `AgentCouncil.jsx` | Flagship · structured deliberation (left) + approval & artifacts (right) |
| Artifact Review | `ArtifactReview.jsx` | ADR body, diff, plan, decision trace |
| Governance & Audit | `Governance.jsx` | Decision queue, policy, audit log |
| System Map | `SystemMap.jsx` | Sober SVG dependency map of the RBX ecosystem |
| Command Palette | `CommandPalette.jsx` | ⌘K · actions, systems, missions |

## Atoms

`primitives.jsx`:
- `Button` (primary / secondary / ghost / danger / sm)
- `Pip` (state colors, optional pulse)
- `Chip` (mono-uppercase status / risk / model)
- `Eyebrow`, `Mono`, `Field`, `Stat`, `RailRow`, `Empty`

## Shell

`Shell.jsx`:
- `Sidebar` — brand mark, nav, system switcher
- `Topbar` — breadcrumb, env / cost / policy chips, ⌘K, user

## Click-thru

Open `index.html`. Try:
- **⌘K** opens the command palette.
- Click **Create mission** on the Dashboard.
- From Create Mission, **Convene council** routes to Agent Council.
- In the council, click **Open** on an artifact to inspect the diff/ADR.
- Sidebar **Governance** opens the audit log.
- Sidebar **System map** opens the SVG map.
- Click any system row in the sidebar to open the Strategos view.

## Notes

- All state is local. No backend, no persistence.
- Lucide icons load via CDN.
- React + Babel via UMD per the design-system project's spec.
