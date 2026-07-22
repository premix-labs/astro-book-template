# Validation Report

## Summary

- Status: Dependency refresh and clean-sync gates passed; version `1.2.2` requires CI confirmation
- Last validated: 2026-07-22
- Validator: Codex
- Scope: clean generation, managed lifecycle, governance, operations, production build, cross-browser behavior, accessibility, visual regression, performance, portability and supply-chain controls
- Main remaining risk: version 1.2.2 deployment and repository-policy controls require evidence from the pushed commit and tag

## Environment

- Local runtime: Node.js `v26.4.0`, npm `11.7.0`
- Compatibility runtime: Node.js `v24.18.0`
- CI runtime: Node.js 24
- Supported runtime: `package.json#engines`
- Browser automation: Playwright 1.61.1 with Chromium, Firefox and WebKit
- Production search: Pagefind Component UI 1.5.2

## Dependency Refresh

- Astro 7.0.9 to 7.1.3
- Tailwind CSS and Vite integration 4.3.2 to 4.3.3
- Fontsource packages 5.2.x to 5.3.0
- Lucide Astro 1.24.0 to 1.25.0
- TypeScript ESLint 8.64.0 to 8.65.0
- Prettier 3.9.5 to 3.9.6
- TypeScript remains at 6.0.3 because current Astro Check and TypeScript ESLint peer ranges exclude TypeScript 7
- Node type definitions remain on major 24 to preserve the minimum supported runtime contract
- a managed ESM bridge makes clean and forced Astro/Vite content synchronization deterministic when loading CommonJS `picomatch`
- transitive security fixes include brace-expansion 5.0.7, DOMPurify 3.4.12, fast-uri 3.1.4, Sharp 0.35.3 and SVGO 4.0.2

## Automated Evidence

| Command                     | Result | Evidence                                                                                                                                |
| --------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run verify`            | Passed | Prettier, ESLint, 46-file Astro check, 12 script tests, 5 content files, 36 required files, zero audit findings, 7-page build and links |
| `npm run test:e2e`          | Passed | 27 passed; 3 desktop-only drawer skips across Chromium, Firefox, WebKit, Chromium tablet and Chromium mobile                            |
| `npm run test:performance`  | Passed | 1 production performance-budget test passed                                                                                             |
| `npm run security:audit`    | Passed | 0 vulnerabilities at moderate severity or above                                                                                         |
| Skill `quick_validate.py`   | Passed | Skill metadata, naming and folder structure are valid                                                                                   |
| `npm run audit:book`        | Passed | 5 chapters audited with 0 Critical, High, Medium or Low findings                                                                        |
| `npm run template:check`    | Passed | Source version 1.2.2 matches package and release manifests; no update or drift detected                                                 |
| `npm sbom`                  | Passed | Valid CycloneDX 1.5 JSON generated; tagged releases create the equivalent artifact                                                      |
| Generated-book clean gate   | Passed | Version 1.2.2 `create-book`, `npm ci` and `npm run verify` passed with 0 vulnerabilities; four source-only tests skipped by design      |
| `npm run test:visual`       | Passed | 4 reviewed home/reader baselines passed locally; Windows and Ubuntu snapshots are versioned                                             |
| `npm run verify:enterprise` | Passed | Deterministic gate, 17 Chromium desktop/tablet/mobile checks, 4 visual checks, 1 performance budget and npm audit passed                |

## Current Sandbox Rerun

- Forced content synchronization passed with Node 24.18.0 and Node 26.4.0 after adding the managed `picomatch` ESM bridge.
- Astro Check reports 0 errors, 0 warnings and 0 hints; book validation, tutorial audit and template drift checks pass.
- The complete enterprise gate passed after the dependency tree refresh and before the bridge was added.
- A post-bridge rerun cannot complete in the current managed sandbox because Node test workers and esbuild receive `spawn EPERM`; normal-shell CI must repeat the full gate before release.

## Remote Evidence

- Pull request 1 passed quality, browser, CodeQL policy, CodeQL analysis and dependency review before merge.
- GitHub Pages deployed the protected `main` commit and returned HTTP 200 for home, a direct chapter and Pagefind.
- Release `v1.0.0` published `site.tar.gz` and `sbom.cdx.json` after the enterprise gate passed on GitHub Actions.
- Rollback run 29386489414 rebuilt, verified and redeployed immutable tag `v1.0.0` successfully.
- Version `1.0.1` upgrades Pages actions to remove the Node 20 deprecation found during that rollback exercise.
- Pull request 13 passed quality, browser, Ubuntu/Windows/macOS portability, CodeQL and dependency review before merge.
- Release run 29483071237 published version `1.2.0` with the site archive, CycloneDX SBOM, SHA-256 checksums and build-provenance attestations.
- Version `1.2.0` Pages deployment exposed a subpath-aware Playwright readiness defect; version `1.2.1` contains the tested correction.

## Enterprise Controls

| Area               | Implemented control                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| Architecture       | Shared header/head components, typed site configuration and explicit book-owned/template-owned boundaries     |
| Content governance | Required outcomes, prerequisites, difficulty, tested versions, status and verification freshness              |
| Audit governance   | Stable severity levels, rubric hard caps, report contract, deterministic CLI findings and regression fixtures |
| Template lifecycle | Source-only clean creation, semantic version, manifest, JSON schema, checksums and update conflict detection  |
| CI and deployment  | Quality/browser gates, three-OS portability, SHA-pinned actions, enterprise Pages gate and concurrency        |
| Security           | Dependabot, CodeQL, dependency review, npm audit, security policy, governance and no-secret release checklist |
| Release management | Tag validation, site artifact, CycloneDX SBOM, SHA-256 checksums, provenance attestation and GitHub release   |
| Operations         | Immutable-ref rollback, shared concurrency, severity/RTO/RPO targets, ownership and quarterly recovery drill  |
| Browser quality    | Desktop Chromium/Firefox/WebKit, Chromium tablet/mobile, keyboard behavior and horizontal-overflow assertions |
| Accessibility      | Automated Axe checks plus semantic headings, named progressbar, focus restoration and inert mobile navigation |
| Performance        | Repeatable production-server budgets enforced by Playwright                                                   |

## Findings Resolved

| Severity | Finding                                                    | Resolution                                                                                 |
| -------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| High     | Generated books had no safe upgrade path                   | Added checksum-managed template updates that stop on local conflicts                       |
| High     | Release confidence depended on one desktop browser         | Added cross-browser, tablet, mobile, Axe and performance automation                        |
| High     | Third-party Actions could float to changed code            | Pinned every workflow action to a full commit SHA and added validator enforcement          |
| Medium   | Content could become stale without a detectable signal     | Added tested-version and last-verified metadata with a published-content age gate          |
| Medium   | Header behavior was duplicated between home and reader     | Consolidated brand, search, theme and mobile behavior into shared components               |
| Medium   | Pagefind dialog duplicated an element ID in production     | Removed the duplicate ID and selected the production custom element directly               |
| Medium   | Reader progress had no accessible name                     | Added an explicit accessible label to the progressbar                                      |
| Medium   | Fresh generated books failed their first format gate       | Generator now emits Prettier-stable README, site config and internal evidence files        |
| Medium   | UI changes had no image-level regression gate              | Added reviewed desktop/mobile baselines for both Windows and Ubuntu runners                |
| Low      | Source-only lifecycle test ran inside generated books      | Limited the self-source assertion to the source template; conflict tests still run         |
| Low      | Version and ownership contracts could silently diverge     | Validator now checks package/manifest versions, managed paths and workflow references      |
| Low      | Manual release output had no software inventory artifact   | Release workflow now emits a CycloneDX SBOM alongside the built site                       |
| High     | Tutorial scores could vary without enforceable evidence    | Added severity definitions, score caps, a report contract and deterministic audit rules    |
| Medium   | Auditor behavior had no regression evaluation              | Added passing and high-risk fixtures with stable rule-ID and severity assertions           |
| Medium   | Whitespace word counts could penalize Thai chapters        | Added Unicode word segmentation and a Thai regression case                                 |
| Medium   | Independently sticky book metadata could overlap           | Made the information panel one sticky unit and added scroll geometry regression coverage   |
| High     | A customized book could be reused as an unsafe template    | Restricted creation to the source template and added source-contract regression tests      |
| High     | Release artifacts had no integrity or provenance evidence  | Added SHA-256 checksums and GitHub build-provenance attestations                           |
| Medium   | CI did not prove authoring portability across host OSes    | Added Ubuntu, Windows and macOS authoring, test and build matrix jobs                      |
| Medium   | Generated books inherited curriculum and visual evidence   | Reset plans/changelog and removed snapshots, reports, caches and generated output          |
| Medium   | Missing visual baselines failed deep inside Playwright     | Added a platform-aware preflight and Linux baseline artifact workflow                      |
| Medium   | Incident guidance had no measurable recovery objectives    | Added severity, RTO/RPO, named roles, update cadence, incident records and recovery drills |
| Medium   | Legal, conduct, support and merge policy were implicit     | Added license, code of conduct, support and governance contracts                           |
| Medium   | Windows checkout converted text files and failed Prettier  | Added managed `.gitattributes` with LF text policy and explicit binary asset rules         |
| High     | Deployment browser gate assumed the site was hosted at `/` | Made Playwright readiness and navigation relative to the configured GitHub Pages base path |
| Medium   | Pull-request browser checks covered only root deployments  | Added a project-subpath Chromium gate before deployment                                    |

## Release Decision

The version `1.2.2` dependency tree, clean generated book and forced content synchronization pass locally. Release approval remains conditional on a post-bridge full enterprise gate in normal-shell CI, followed by the remote three-OS matrix, protected pull request, provenance-producing tagged release and GitHub Pages deployment. Generated books must still define and validate their own curriculum, examples, contracts, branding, visual baselines and release evidence.
