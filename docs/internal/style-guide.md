# Style Guide

This standard keeps language, chapter structure, examples, and evidence consistent across the book.

## Language

- Write so readers do not have to infer prerequisites or which files to edit.
- Explain the problem and rationale before introducing new syntax, packages, annotations, or configuration.
- Use direct, concise sentences and define terminology on first use.
- Distinguish demonstrations, local development, production practice, and deliberate simplifications.
- Avoid unsupported claims such as "easy", "just", "obvious", and "latest".
- Use terminology from official documentation consistently throughout the book.

## Chapter Shape

Hands-on chapters should follow this sequence:

1. Observable learner outcome
2. Prerequisites and starting state
3. New concept and rationale
4. Files to create or edit
5. Small steps with precise code locations
6. Run, test, or build commands
7. Observable expected result
8. Common failures and diagnosis
9. Checkpoint before the next chapter

Conceptual or reference chapters may adjust the sequence but still need an outcome and a way to verify understanding.

## Code And Commands

- State the path and insertion point before an ambiguous code block.
- Show only the changed section unless the complete file is necessary for understanding.
- Explain important lines after the code instead of requiring readers to reverse-engineer them.
- Show PowerShell and Bash variants when syntax differs.
- Never embed real secrets or credentials; use descriptive placeholders.
- Test every command from the working directory stated by the chapter.
- Format, build, and test examples according to the stack's standards.

## Naming And Versions

- Project names, routes, DTOs, port policy, and filenames must match the implementation.
- Use verifiable version numbers and record dates and sources in `book-plan.md`.
- Renames must update chapters, examples, contracts, the README, and the validation report together.

## Frontmatter

- `title`: unique and accurately describes the topic
- `description`: one sentence stating the learner outcome
- `chapter`: sequential integer, with the introduction starting at 0
- `part`: identical for every chapter in the same part
- `draft`: hides unfinished chapters and does not replace status tracking

Run `npm run check:book` after adding, moving, or renumbering chapters.
