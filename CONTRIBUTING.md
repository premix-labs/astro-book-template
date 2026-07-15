# Contributing

## Working Agreement

Every change must preserve a learner's ability to follow the book from prose, reproduce commands and verify an observable result. Internal examples are evidence, not hidden instructions.

## Before Editing

1. Read `AGENTS.md` and `docs/internal/README.md`.
2. Confirm scope in `docs/internal/book-plan.md` and related decision records.
3. Create an issue for changes that alter curriculum, contracts, shared UI or release behavior.
4. Work on a branch; do not push directly to `main`.

## Quality Gates

Run the smallest relevant checks while editing and the full deterministic gate before opening a pull request:

```bash
npm run verify
```

For shared UI, navigation, dependencies or release changes, also run:

```bash
npx playwright install chromium
npm run verify:enterprise
```

Update `docs/internal/validation-report.md` with commands actually run, results and residual risk. Do not copy evidence from another book or release.

## Pull Requests

- Keep one coherent purpose per pull request.
- Include migration notes for managed template files or metadata changes.
- Do not commit `dist`, `.astro`, `node_modules`, browser reports or secrets.
- A reviewer must be able to connect every changed chapter to the plan and every code change to a test or documented manual check.

## Releases

Releases use semantic versioning. A tag must match `package.json`, `.template-manifest.json` and the top unreleased entry in `CHANGELOG.md`.
