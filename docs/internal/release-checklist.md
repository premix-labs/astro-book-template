# Release Checklist

Treat this checklist as a release gate, not optional guidance. Mark irrelevant items N/A and record the reason in `validation-report.md`.

## Curriculum

- [ ] Audience, prerequisites, scope, and target outcomes match `book-plan.md`.
- [ ] The chapter sequence does not use a concept before introducing it.
- [ ] Every chapter has a verifiable outcome, changed-file list, expected result, and checkpoint.
- [ ] Commands, routes, ports, filenames, and versions are consistent throughout the book.
- [ ] Excluded or deferred topics are documented explicitly.

## Chapters And Examples

- [ ] Readers can complete chapters without opening the final source to infer missing steps.
- [ ] The progressive example matches each chapter and does not include future code.
- [ ] The final project matches `final-project-structure.md`.
- [ ] Install, run, test, build, and migration commands work in the documented environment.
- [ ] Expected output and common failures match actual behavior.
- [ ] API, DTO, and authentication contracts match the implementation or are marked N/A.

## Site Quality

- [ ] `npm ci` passes from a clean checkout.
- [ ] `npm run verify` passes.
- [ ] `npm run test:e2e` passes Chromium, Firefox, WebKit, and mobile projects.
- [ ] `npm run test:performance` passes the performance budget.
- [ ] `npm run test:visual` passes reviewed desktop and mobile snapshots.
- [ ] Axe reports no critical or serious accessibility violations.
- [ ] `npm run security:audit` reports no moderate-or-higher vulnerabilities.
- [ ] Navigation, search, theme, code copy, and the mobile menu work.
- [ ] Internal links and public assets work under the repository base path.
- [ ] The browser test plan passes on desktop, tablet, and mobile.
- [ ] The accessibility checklist passes and any limitations are recorded.

## Security And Operations

- [ ] There are no secrets, credentials, local-only absolute paths, or personal data.
- [ ] Dependency and version baselines include dates and primary sources.
- [ ] Configuration examples use safe values and explain production differences.
- [ ] The security review checklist passes for applicable content.
- [ ] GitHub Actions use full commit SHAs and no Dependabot security update is outstanding.
- [ ] CodeQL and dependency review pass.

## Release Evidence

- [ ] `manuscript-status.md` matches the actual chapters.
- [ ] `validation-report.md` records commands, results, dates, scope, and remaining risk.
- [ ] README and deployment instructions match the repository.
- [ ] Known limitations and breaking changes are explicit.
- [ ] `package.json`, `.template-manifest.json`, `CHANGELOG.md`, and the release tag use one version.
- [ ] Release artifacts and the SBOM come from the verified commit.
- [ ] GitHub Pages deployment passes for the commit being published.
