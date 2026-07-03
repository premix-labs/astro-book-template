# Premium UX/UI Book Template

The ultimate template for authoring high-end, award-winning technical books and masterclasses. Built from the ground up with Astro, MDX, and pure Vanilla CSS.

## Book Documentation Standard

This template includes the shared `Book Documentation Standard v1` for technical books. Planning, quality control, release gates, and decision records live in `docs/internal`.

```text
docs/internal/
  README.md
  book-plan.md
  api-contract.md
  final-project-structure.md
  manuscript-status.md
  release-checklist.md
  style-guide.md
  teaching-principles.md
  validation-report.md
  decisions/
  qa/
```

When starting a new book, update these internal docs before writing chapters. Keep book-specific notes inside `docs/internal` and explain them in this README.

This template also includes a local workflow skill:

```text
AGENTS.md
skills/tutorial-book-auditor/
```

When copying the template for a new book, keep the skill and then customize only the book-specific checks.

## 🚀 Features

- **Blazing Fast**: Zero-JS baseline layout. 100% Vanilla CSS.
- **Premium Aesthetics**: Curated typography using Inter, low-contrast dark mode, and meticulously calculated line-heights for maximum reading endurance.
- **Micro-interactions**: Subtle spring animations and hover states that make the UI feel alive.
- **MDX Support**: Author your content in Markdown/MDX with auto-styled components like Warnings, Tips, and interactive Code Blocks.

## 🧞 Commands

Requires Node.js matching:

```text
^22.22.3 || ^24.16.0 || >=26.3.0
```

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/`     |

## 📖 Content Authoring

All chapters are stored in `src/content/chapters/`.
To add a new chapter:

1. Create a new `.mdx` file.
2. Register it in the `chapters` array inside `src/pages/[slug].astro` and `src/layouts/BookLayout.astro` for sidebar navigation.

## 🎨 Theme & Styling

The core design system is located in `src/styles/global.css`. You can customize the entire color palette by editing the `:root` CSS variables.
