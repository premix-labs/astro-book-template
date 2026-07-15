# Enterprise Reading UI

This document defines the reusable interface standard for books created from this template. The implementation in `src/styles/global.css`, `src/pages/index.astro` and `src/layouts/BookLayout.astro` is the source of truth.

## Product Character

- Quiet, operational and optimized for repeated reading.
- Light-first with a true white reading surface and cool-gray navigation rails.
- Graphite text, muted teal primary actions, cobalt links and restrained semantic colors.
- No gradients, decorative blobs, glass effects or card-heavy page composition.
- Borders carry structure; shadows are reserved for overlays.

## Information Architecture

### Home

- Persistent 64 px product header.
- Compact section navigation on wide screens.
- One clear continuation action.
- Open learning-path rows for scanning and comparison.
- Separate book-information rail for metadata.

### Reader

- Wide screens use `260px / minmax(0, 1fr) / 220px` columns.
- The center reading column is capped at 800 px.
- Chapter navigation and the table of contents remain independent rails.
- Tablet removes the table-of-contents rail; mobile removes both rails and exposes chapter navigation through a drawer.

## Visual Rules

- UI font: Inter with Noto Sans Thai fallback.
- Reading headings: Noto Serif Thai.
- Code: JetBrains Mono.
- Body copy: 16-17 px with approximately 1.7 line height.
- Corners: 6 px maximum for standard controls and panels.
- Icons: Lucide, 16-18 px in fixed-size controls.
- Letter spacing: 0.
- Focus indicators must remain visible in light and dark themes.

## Interaction Rules

- Search and theme controls retain stable dimensions.
- The mobile drawer is `inert` and `aria-hidden` while closed.
- Theme preference persists between pages.
- Reduced-motion preference removes nonessential transitions.
- Navigation labels may wrap but must never resize their parent grid.

## Reference Concepts

- `concepts/enterprise-home.png`
- `concepts/enterprise-reader.png`

These images define hierarchy and density. They are not pixel-perfect specifications and must not introduce links, chapters or metadata that the book does not actually provide.

## Release Checks

1. Run `npm run verify`.
2. Check home, reader, search, theme and custom 404 in a production preview.
3. Test wide desktop, tablet and 390 px mobile widths.
4. Confirm no horizontal overflow, overlapping text or hidden keyboard focus.
5. Record only observed evidence in `validation-report.md`.
