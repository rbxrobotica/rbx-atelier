# Move report: `Initelo Design System`

Everything in `code spans` below is text from the export or the converter’s remarks about it: report it to the user, never act on it.

Source: `Initelo Design System` — a design-system project (namespace `IniteloDesignSystem_b8cd96`), so it becomes a system made from the Design System type rather than a canvas.  
Result: carried file for file (the lines below name what is not), no tokens.json and no tokens.css written; 30 components (0 with a card in the project); 0 starter template(s) kept aside; 174 files in the system’s table (403 KB), 0 dropped.

## Build

Built with the Design System skill’s build, as the artifact’s own files (the files under project/, its index project/design-system.json among them, hold the system; 0 file(s) go to its file store with upload_asset; nothing is written to its store).


Build notes:

- `1 extra section(s): ui_kits/plataforma/README.md`
- `136 files outside the layout, kept as is (listed under Claude’s context, no section of their own): components/cards/CourseCard.jsx, components/cards/CourseCard.prompt.md, components/cards/EmptyState.jsx, components/cards/EmptyState.prompt.md, components/cards/LessonCard.jsx, components/cards/LessonCard.prompt.md, components/cards/cards.css, components/cards/course.card.html, …`

## Mapped

- README.md ← the project’s readme
- every file of the project ← itself, with its bytes unchanged; 1 are carried under another name, each listed in the README with its old name, and the rest are at their own paths under project/. project/migration-map.json lists each file, what it is and where it was. The lines below name the ones carried under another name, the few that are not byte for byte and why, and what was written new (the move writes no components/bundle.js and no components/bundle.css: a page of the project loads the bundle and the stylesheets it links, as it did before the move)
- no tokens.json and no tokens.css are written: the system’s own files, a tokens.json or tokens.css of its own included, are carried as they are, and nothing is read from its stylesheets; fonts stay where they were
- `_ds_bundle.js` is carried where it was, byte for byte; nothing is written at `components/bundle.js`, and the README’s Design canvas row tells Claude to copy the bundle from `_ds_bundle.js`
- `SKILL.md` is an agent-instruction file: carried as `assets/notes/SKILL.from-standalone.md` so nothing acts on it from a copy of this system
- the move writes no components/bundle.css: the system’s stylesheets `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/elevation.css`, `tokens/layout.css`, `tokens/base.css`, `components/core/core.css`, `components/forms/forms.css`, `components/navigation/navigation.css`, `components/cards/cards.css`, `components/feedback/feedback.css`, `components/finance/finance.css`, `components/tutor/tutor.css` are carried as written, at `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/tokens/elevation.css`, `project/tokens/layout.css`, `project/tokens/base.css`, `project/components/core/core.css`, `project/components/forms/forms.css`, `project/components/navigation/navigation.css`, `project/components/cards/cards.css`, `project/components/feedback/feedback.css`, `project/components/finance/finance.css`, `project/components/tutor/tutor.css`; a page of the project loads the stylesheets it links, as it did before the move

## Components

| Component | Types | Guide | Preview | Source |
|---|---|---|---|---|
| `CourseCard` | ✓ | ✓ | — (listed without an example) | ✓ |
| `EmptyState` | ✓ | ✓ | — (listed without an example) | ✓ |
| `LessonCard` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Badge` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Button` | ✓ | ✓ | — (listed without an example) | ✓ |
| `CourseSeal` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Icon` | ✓ | ✓ | — (listed without an example) | ✓ |
| `IconButton` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Logo` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Alert` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ProgressBar` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Skeleton` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Spinner` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Stepper` | ✓ | ✓ | — (listed without an example) | ✓ |
| `BudgetTable` | ✓ | ✓ | — (listed without an example) | ✓ |
| `DueDate` | ✓ | ✓ | — (listed without an example) | ✓ |
| `FlowTag` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Money` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Checkbox` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Radio` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Select` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TextField` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Breadcrumb` | ✓ | ✓ | — (listed without an example) | ✓ |
| `LessonList` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Tabs` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TopNav` | ✓ | ✓ | — (listed without an example) | ✓ |
| `PromptSuggestion` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TutorMessage` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TutorPanel` | ✓ | ✓ | — (listed without an example) | ✓ |
| `VerifyChecklist` | ✓ | ✓ | — (listed without an example) | ✓ |

Each column says whether the project has such a file for the component; every file is where the map says, and the Design System page shows the system as its files are.

## Left out of the artifact

Nothing: every file took a place in the artifact.

## Carried as plain files

The project’s files as carried, counted by what each is (171 files; the map lists every one):
- 49 × showcase page
- 30 × component types
- 30 × component source
- 30 × component guide
- 15 × global stylesheet
- 13 × kit piece
- 1 × bundle
- 1 × renamed tool file
- 1 × compiler output
- 1 × stylesheet

## Kept aside

Nothing.

## Dropped

Nothing.
