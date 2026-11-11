# Marketing UI Kit

Full recreation of the `rbxsystems.ch` homepage flow, built with the RBX design tokens.

**Screens / sections**
- `TopNav`: header in three rows (brand row, primary navigation, section band). Opaque, not sticky. Click a section to see its band and the breadcrumb. This page is a desktop composition; for the header under 768px open `../header/`
- `Breadcrumb`: path of the page, hidden on the home page
- `Hero`: thin-weight display H1 + supporting lead + primary/outline CTAs + the mark
- `PositioningRow`: asymmetric "Positioning" block with lead paragraph
- `Capabilities`: 3-column numbered hairline-left cards (Architecture / Governance / Operations)
- `Products`: tabular product index with phase tags (Institutionalized, Structuring, Seed)
- `Team`: 5-person grid on `polka-dots.svg` rhythm background
- `Footer`: 4-column link grid on `surface-3`, with the horizontal lockup

**Components used**
`Container`, `Hair`, `Eyebrow`, `Button`, `PhaseTag`, `RbxLogo`, `RbxMark`, `Icon`, `TopNav`, `Breadcrumb`, `Footer`.

**Intentional gaps**
- `Blog` list and `Services` detail page not recreated — they reuse the same primitives with a different composition.
- Product phase tags use `accent` (brass) only for `Institutionalized` — matches the "earned gravitas" rule.

**Known fidelity notes**
- The repo's homepage ships an animated goo-gradient background behind the hero. Per the Zurich-coded brief, we have removed it in favor of flat `--rbx-ink`. The file is present in `assets/bitmap_bg.svg` if you want it back.
- Team photos are not included in the repo imports. We substitute initials discs.
