---
name: tutorial-book-auditor
description: Audit and improve technical tutorial books and companion example projects using the shared Book Documentation Standard. Use when reviewing, scoring, or editing chapters, README/docs, validation reports, book plans, API contracts, final project structures, progressive/final examples, teaching quality, release readiness, production-readiness, browser/accessibility/security QA, or 10/10 tutorial content.
---

# Tutorial Book Auditor

## Required Reference

Read `references/teaching-principles.md` before scoring or rewriting chapters. It contains the generic tutorial-book rubric, chapter checklist, common failure patterns, and verification gates.

When the task touches planning, structure, examples, behavior, compatibility, or release quality, also inspect the relevant files in `docs/internal/`:

- `README.md`
- `book-plan.md`
- `api-contract.md`
- `final-project-structure.md`
- `style-guide.md`
- `release-checklist.md`
- `validation-report.md`

## Workflow

1. Resolve the exact scope: repository, part, chapter, example project, report, QA checklist, or release gate.
2. Inspect source files with `rg`/file reads. Do not rely on memory when files are available.
3. Compare the chapter against the progressive example at the same learning point and the final example when relevant.
4. Check that the work follows `docs/internal/README.md` and the book-specific planning docs.
5. Score with the 10-point rubric from the reference file when reviewing teaching quality.
6. Lead with concrete blockers: missing explanation, skipped folder/file setup, hidden helper usage, long code blocks, wrong ports/routes, missing expected results, missing UI/API states, or unsynced examples.
7. If the user asks to fix, edit the smallest set of files that makes the lesson clearer and correct.
8. Verify with commands that match the touched scope.

## Editing Rules

- Explain a new concept before asking the learner to use it.
- Split code into small, teachable blocks instead of replacing whole files with long code.
- Include folder/file creation commands before a lesson creates new files.
- Include Windows PowerShell and macOS/Linux Bash commands when the action differs by OS.
- Keep ports, routes, project names, filenames, commands, expected responses, and expected screens aligned with the actual example project.
- Preserve the progressive learning path. Do not introduce future-chapter files, helpers, fields, packages, routes, or security behavior without an explanation.
- Make chapters self-contained. A learner should not need to open example source files to understand what to write, where to write it, or how to verify it.
- Treat example projects as source of truth for verification and optional reference only.
- Update docs, examples, README, validation report, API contract notes, QA notes, and release checklist together when behavior changes.

## Book Standard Checks

- `docs/internal/README.md` defines the standard structure.
- `book-plan.md` defines audience, scope, chapter map, and final outcome.
- `api-contract.md` defines API behavior when the book uses an API; write `Not applicable` only when the book truly has no API dependency.
- `final-project-structure.md` must match the final example project.
- `style-guide.md` controls language, code block shape, commands, and naming.
- `validation-report.md` must record the latest meaningful build/test/review result.
- `qa/` checklists must be updated when browser, accessibility, or security behavior changes.

## Verification

Run only commands relevant to the files touched:

- Book/docs changes in a scaffolded site: `npm run build`.
- Example project changes: run the build/test command defined by that example.
- Browser/UI changes: run available browser/e2e checks, or inspect the rendered app when available.
- Docker/Compose changes: run `docker compose config` in the touched compose directory.
- Security/dependency changes: run the relevant audit command when the package manager supports it.

If a command cannot be run because the copied book has not been scaffolded yet, report that directly instead of pretending validation happened.

## Response Shape

For reviews, return score, findings by chapter/file, and the next edits needed. For fixes, return changed files and verification results. Keep the answer concise and grounded in file paths.
