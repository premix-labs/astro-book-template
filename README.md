# Astro Technical Book Template

A versioned Astro and MDX platform for technical tutorial books. It provides structured authoring, automatic chapter navigation, Pagefind search, reusable MDX components, conflict-aware template updates, cross-browser quality gates, security automation and GitHub Pages deployment.

Current template version: **1.2.1**

## Create A New Book

Run this command from the template repository:

```powershell
npm run create-book -- --title "C# Fundamentals" --slug csharp-fundamentals-book --lang th --target ../csharp-fundamentals-book
```

The command works in PowerShell and Bash. It creates a clean copy without repository state, generated output, reports, inherited curriculum or visual baselines; updates package/site identity; resets chapter content and validation evidence; and keeps the shared authoring standard. Only this source repository can create a book, so an already generated book cannot silently become a template.

Then run:

```powershell
cd ../csharp-fundamentals-book
npm install
npm run verify
```

Required options:

| Option    | Purpose                       |
| --------- | ----------------------------- |
| `--title` | Display title of the new book |
| `--slug`  | Lowercase npm/repository name |

Optional options:

| Option          | Purpose                                                            |
| --------------- | ------------------------------------------------------------------ |
| `--lang`        | HTML/content language; defaults to `en`                            |
| `--description` | Book description shown on the home page and in metadata            |
| `--target`      | Output directory; defaults to a sibling folder named from `--slug` |

## Requirements

Use a Node.js version allowed by `package.json`. Do not assume a fixed development port; open the URL printed by Astro.

## Commands

| Command                          | Purpose                                                            |
| -------------------------------- | ------------------------------------------------------------------ |
| `npm install`                    | Install dependencies                                               |
| `npm run dev`                    | Start the local authoring server                                   |
| `npm run check`                  | Run Astro diagnostics                                              |
| `npm run lint`                   | Lint Astro, TypeScript and JavaScript                              |
| `npm run format:check`           | Verify formatting without changing files                           |
| `npm run test`                   | Test template scripts, Unicode slugs and initialization            |
| `npm run test:e2e`               | Test desktop browsers, mobile behavior and accessibility           |
| `npm run test:visual`            | Compare desktop and mobile pages with reviewed snapshots           |
| `npm run test:visual:update`     | Deliberately regenerate visual baselines after design review       |
| `npm run test:performance`       | Enforce asset, DOM and navigation performance budgets              |
| `npm run audit:book`             | Detect objective teaching, safety and portability issues           |
| `npm run check:book`             | Validate required docs, chapters, frontmatter and plan/status sync |
| `npm run build`                  | Build the site and Pagefind index                                  |
| `npm run check:links`            | Validate links and assets in `dist`                                |
| `npm run check:visual-baselines` | Require reviewed snapshots for the current operating system        |
| `npm run verify`                 | Run all local quality gates in release order                       |
| `npm run verify:enterprise`      | Add browser, accessibility, performance and dependency gates       |
| `npm run template:status`        | Show installed template version and managed-file drift             |
| `npm run new-chapter -- "Title"` | Create the next chapter scaffold                                   |

Install browser runtimes once before running the full cross-browser gate:

```powershell
npx playwright install chromium firefox webkit
```

Run `npm run security:audit` after dependency changes.

## Add A Chapter

```powershell
npm run new-chapter -- "Getting Started" --part "Part 1: Foundations"
```

Unicode titles produce valid Unicode slugs. Use an explicit ASCII URL slug when desired:

```powershell
npm run new-chapter -- "Getting Started" --slug getting-started
```

The script assigns the next chapter number and writes valid frontmatter. Replace every scaffold placeholder before marking the chapter ready.

## Content Model

Chapters live in `src/content/chapters`. Astro Content Collections validate frontmatter at build time. Chapter numbers control ordering; filenames control URLs. Navigation, part grouping, previous/next links, reading time, table of contents and search are generated automatically.

Every chapter records lifecycle metadata:

```yaml
difficulty: beginner
prerequisites: []
learningOutcomes: ['Complete one observable learner outcome.']
testedWith: ['Runtime or tool version']
lastVerified: 2026-07-15
status: published
```

Published chapters fail validation when their verification date exceeds the configured age limit.

Available MDX components require no per-chapter imports:

| Component          | Purpose                                 |
| ------------------ | --------------------------------------- |
| `<Callout>`        | Note, tip, warning or danger context    |
| `<Steps>`          | Numbered guided procedure               |
| `<Tabs>` / `<Tab>` | Keyboard-accessible alternatives        |
| `<Figure>`         | Image, caption and optional dark source |
| `<Kbd>`            | Keyboard key label                      |
| `<Badge>`          | Inline status label                     |

See `src/content/chapters/04-components.mdx` for the rendered authoring reference.

## Book Documentation Standard

Read `AGENTS.md`, `skills/tutorial-book-auditor/SKILL.md`, and `docs/internal/README.md` before planning or reviewing a book. The auditor combines a deterministic CLI gate with an evidence-based scoring and reporting policy. Every generated book includes:

```text
docs/internal/
  README.md
  book-plan.md
  api-contract.md
  final-project-structure.md
  manuscript-status.md
  operations-runbook.md
  release-checklist.md
  style-guide.md
  teaching-principles.md
  template-lifecycle.md
  validation-report.md
  decisions/
  qa/
```

Examples are verification sources and optional references. Chapters must remain self-contained for learners.

## Manual Customization

`create-book` is the recommended rebranding path. For later edits:

- `src/site.config.ts`: visible title, short title, language, status and repository link
- `astro.config.mjs`: canonical site/base behavior
- `src/styles/global.css`: colors, typography, spacing and component styling
- `public/`: favicon, social image and public assets
- `docs/internal/`: curriculum, contracts, decisions and release evidence
- `package.json`: package identity, scripts and supported Node.js versions

Do not copy validation results from the template into a new book. Record only commands and checks run against that book.

## Template Updates

Generated books own chapters, curriculum, examples, `src/site.config.ts` and validation evidence. Shared platform files listed in `.template-manifest.json` are checksum-managed.

```powershell
npm run template:check -- --from ../astro-book-template
npm run template:update -- --from ../astro-book-template
npm install
npm run verify:enterprise
```

The updater refuses to overwrite locally modified managed files unless a reviewed migration deliberately uses `--force`. See `docs/internal/template-lifecycle.md` for the version and release contract.

## Project Policy

Contributions follow [CONTRIBUTING.md](CONTRIBUTING.md), [GOVERNANCE.md](GOVERNANCE.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Support boundaries are documented in [SUPPORT.md](SUPPORT.md), security reports follow [SECURITY.md](SECURITY.md), and the template is distributed under the [MIT License](LICENSE).
