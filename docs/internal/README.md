# Book Documentation Standard

This directory defines the internal documentation standard for every technical book created from the template. It keeps planning, authoring, review, and release work consistent.

## Required Structure

Every book should include this minimum structure:

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
  validation-report.md
  design/
  decisions/
  qa/
```

Use `decisions/` for numbered decision records such as `0001-tech-stack.md`. Use `qa/` for browser, accessibility, and security review checklists.

## File Roles

- `book-plan.md`: book scope, audience, target outcomes, and chapter sequence
- `api-contract.md`: routes, DTOs, authentication, and error contracts required by examples or frontends
- `final-project-structure.md`: the target structure of the final project
- `manuscript-status.md`: chapter status, open work, and release readiness
- `operations-runbook.md`: deployment, incident diagnosis, rollback, and release recovery procedures
- `release-checklist.md`: mandatory gates before publication
- `style-guide.md`: language, code, command, and explanation standards
- `teaching-principles.md`: step-by-step teaching principles and the chapter definition of done
- `validation-report.md`: build, example, link, navigation, and residual-risk evidence
- `template-lifecycle.md`: template versions, managed files, updates, releases, and repository settings
- `design/`: UX/UI standards and reference images governing hierarchy, density, and responsive behavior
- `decisions/`: rationale for technical choices that should not be scattered across chapters
- `qa/`: quality checklists used before delivery or release

## Optional Files

Book-specific files are allowed when they govern quality or book development rather than storing temporary notes. For example, a frontend book may add `cross-backend-compatibility.md` to define compatibility with multiple backend implementations.

Keep book-specific governance files in `docs/internal` and explain their purpose in the repository README.

## Working Order

Before writing or revising chapters:

1. Read `book-plan.md`.
2. Read `teaching-principles.md`.
3. Read `style-guide.md`.
4. Check `api-contract.md` and `final-project-structure.md` when a chapter changes behavior or examples.
5. Update `manuscript-status.md` and `validation-report.md` when status changes.

Before release:

1. Complete `release-checklist.md`.
2. Complete the relevant files in `qa/`.
3. Run build and test commands appropriate to the change scope.
4. Record current evidence in `validation-report.md`.
