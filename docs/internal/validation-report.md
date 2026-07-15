# Validation Report

## Summary

- Status: Enterprise quality gates passed; version `1.0.1` is a maintenance release candidate
- Last validated: 2026-07-15
- Validator: Codex
- Scope: lifecycle tooling, content contracts, production build, cross-browser behavior, accessibility, performance and supply-chain controls
- Main remaining risk: assistive-technology and physical-device checks require manual release evidence

## Environment

- Local runtime: Node.js `v26.4.0`, npm `11.7.0`
- CI runtime: Node.js 24
- Supported runtime: `package.json#engines`
- Browser automation: Playwright 1.61.1 with Chromium, Firefox and WebKit
- Production search: Pagefind Component UI 1.5.2

## Automated Evidence

| Command                    | Result | Evidence                                                                                                          |
| -------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| `npm run verify`           | Passed | Prettier, ESLint, 43-file Astro check, 6 script tests, 5 content files, 23 required files, 7-page build and links |
| `npm run test:e2e`         | Passed | 22 passed; 3 desktop-only drawer skips across Chromium, Firefox, WebKit, Chromium tablet and Chromium mobile      |
| `npm run test:performance` | Passed | 1 production performance-budget test passed                                                                       |
| `npm run security:audit`   | Passed | 0 vulnerabilities at moderate severity or above                                                                   |
| `npm run template:check`   | Passed | Source version 1.0.1 matches the release manifest; no update or drift detected                                    |
| `npm sbom`                 | Passed | Valid CycloneDX 1.5 JSON generated; tagged releases create the equivalent artifact                                |
| Generated-book clean gate  | Passed | `create-book`, `npm ci` and `npm run verify` passed; one source-only lifecycle test skipped by design             |
| `npm run test:visual`      | Passed | 4 reviewed home/reader baselines passed locally; Windows and Ubuntu snapshots are versioned                       |

## Remote Evidence

- Pull request 1 passed quality, browser, CodeQL policy, CodeQL analysis and dependency review before merge.
- GitHub Pages deployed the protected `main` commit and returned HTTP 200 for home, a direct chapter and Pagefind.
- Release `v1.0.0` published `site.tar.gz` and `sbom.cdx.json` after the enterprise gate passed on GitHub Actions.
- Rollback run 29386489414 rebuilt, verified and redeployed immutable tag `v1.0.0` successfully.
- Version `1.0.1` upgrades Pages actions to remove the Node 20 deprecation found during that rollback exercise.

## Enterprise Controls

| Area               | Implemented control                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| Architecture       | Shared header/head components, typed site configuration and explicit book-owned/template-owned boundaries     |
| Content governance | Required outcomes, prerequisites, difficulty, tested versions, status and verification freshness              |
| Template lifecycle | Semantic template version, manifest, JSON schema, checksums and update conflict detection                     |
| CI and deployment  | Pull-request quality/browser gates, SHA-pinned actions, least-privilege Pages deployment and concurrency      |
| Security           | Dependabot, CodeQL, dependency review, npm audit, security policy and no-secret release checklist             |
| Release management | Tag-driven validation, site artifact, CycloneDX SBOM, changelog and GitHub release                            |
| Operations         | Immutable-ref rollback workflow, shared production concurrency and incident/recovery runbook                  |
| Browser quality    | Desktop Chromium/Firefox/WebKit, Chromium tablet/mobile, keyboard behavior and horizontal-overflow assertions |
| Accessibility      | Automated Axe checks plus semantic headings, named progressbar, focus restoration and inert mobile navigation |
| Performance        | Repeatable production-server budgets enforced by Playwright                                                   |

## Findings Resolved

| Severity | Finding                                                  | Resolution                                                                            |
| -------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| High     | Generated books had no safe upgrade path                 | Added checksum-managed template updates that stop on local conflicts                  |
| High     | Release confidence depended on one desktop browser       | Added cross-browser, tablet, mobile, Axe and performance automation                   |
| High     | Third-party Actions could float to changed code          | Pinned every workflow action to a full commit SHA and added validator enforcement     |
| Medium   | Content could become stale without a detectable signal   | Added tested-version and last-verified metadata with a published-content age gate     |
| Medium   | Header behavior was duplicated between home and reader   | Consolidated brand, search, theme and mobile behavior into shared components          |
| Medium   | Pagefind dialog duplicated an element ID in production   | Removed the duplicate ID and selected the production custom element directly          |
| Medium   | Reader progress had no accessible name                   | Added an explicit accessible label to the progressbar                                 |
| Medium   | Fresh generated books failed their first format gate     | Generator now emits Prettier-stable README, site config and internal evidence files   |
| Medium   | UI changes had no image-level regression gate            | Added reviewed desktop/mobile baselines for both Windows and Ubuntu runners           |
| Low      | Source-only lifecycle test ran inside generated books    | Limited the self-source assertion to the source template; conflict tests still run    |
| Low      | Version and ownership contracts could silently diverge   | Validator now checks package/manifest versions, managed paths and workflow references |
| Low      | Manual release output had no software inventory artifact | Release workflow now emits a CycloneDX SBOM alongside the built site                  |

## Release Decision

The enterprise template platform and recovery path are proven on GitHub. Version `1.0.1` must pass its protected pull request, Pages deployment and matching release workflow before it replaces `v1.0.0`. Generated books must still produce their own curriculum, example, contract and release evidence.
