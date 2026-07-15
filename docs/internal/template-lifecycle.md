# Template Lifecycle

## Version Contract

`package.json` and `.template-manifest.json` define the released template version. Generated books record the installed version and managed-file checksums in `.book-template.json`.

Book-owned files include chapter content, `src/site.config.ts`, curriculum documents, examples, validation evidence and reviewed visual-regression baselines. Template-managed files include the shared reader shell, components, validators, test logic and workflows listed in `.template-manifest.json`.

## Check An Installed Book

Set the local path to a newer template checkout and compare it without writing files:

```powershell
$env:BOOK_TEMPLATE_PATH = 'D:\code\books\astro-book-template'
npm run template:check
```

```bash
BOOK_TEMPLATE_PATH=../astro-book-template npm run template:check
```

## Apply An Update

Create a branch and ensure the working tree is clean. Then run:

```bash
npm run template:update -- --from ../astro-book-template
npm install
npm run verify:enterprise
```

The updater refuses to overwrite managed files changed since the book was generated or last updated. Resolve those files deliberately. `--force` is reserved for reviewed migrations where replacing local changes is intentional.

## Release Process

1. Move changelog entries from `Unreleased` to the target version.
2. Update `package.json` and `.template-manifest.json` to the same semantic version.
3. Run `npm run verify:enterprise` and record evidence.
4. Merge through the protected `main` branch.
5. Create and push the matching signed or annotated tag.
6. Confirm the release workflow publishes the site archive, SBOM and generated notes.

## Repository Settings

Require pull requests, one approving review, resolved conversations and these checks before merge:

- `quality`
- `browser`
- `codeql`
- `dependency-review`

Enable GitHub Pages with **GitHub Actions** as the source and enable private vulnerability reporting.
