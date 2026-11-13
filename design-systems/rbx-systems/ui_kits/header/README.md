# Header and breadcrumb

The site header and the breadcrumb on their own, on a page that follows the width of the window. The marketing and atelier kits are desktop compositions; this is the page to open on a phone, or in a narrow window, to see the header under 768px.

**What it shows**
- `TopNav`: brand row, primary navigation and section band. Under 768px: compact lockup, icon CTA, menu button, and the band as a `Section › Page` button. Under 364px: the mark alone in place of the compact lockup.
- `Breadcrumb`: hidden on the home page; the section alone on a landing page; ancestors as links and the page as the current crumb elsewhere.
- The states the two resolve together through `resolveNav(active, leaf)`: a detail page under a page, a detail page under a landing page (the band highlights nothing), a long title cut on one line, a title that loses the site name, and a standalone page with a breadcrumb and no band.

**Components used**
`Container`, `Eyebrow`, `Button`, `RbxLogo`, `RbxMark`, `TopNav`, `Breadcrumb`.

**Not in the kit**
The site also feeds BreadcrumbList structured data from the same resolution, and its language switch links to the other host. Here the switch only shows the control and its active state.
