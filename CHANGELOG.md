# Changelog

All notable template changes are documented here. This project follows Semantic Versioning.

## [Unreleased]

### Fixed

- kept book status and review metadata in one sticky container so localized text cannot overlap while scrolling

## [1.1.0] - 2026-07-15

### Added

- evidence-backed tutorial scoring with severity definitions and hard score caps
- a stable audit report contract for chapter, part and full-book reviews
- deterministic `audit:book` checks with text and JSON output
- regression fixtures for enterprise-ready and high-risk tutorial chapters
- Unicode-aware audit heuristics and a documented stable rule registry

### Changed

- standardized template-owned authoring and QA documentation in English
- expanded auditor metadata and managed-file lifecycle coverage
- added learner checkpoints to every hands-on template chapter
- completed managed lifecycle coverage for the book creator and visual-baseline update command
- made generated-book tests independent of template chapter count, titles, and localized search labels
- classified visual regression baselines as book-owned evidence to prevent template update conflicts
- replaced complete identity lines when deriving a new book from an already customized source

## [1.0.1] - 2026-07-15

### Changed

- upgraded GitHub Pages upload and deploy actions to Node 24-compatible major versions
- verified production rollback from the immutable `v1.0.0` tag

## [1.0.0] - 2026-07-15

### Added

- production-ready Astro technical-book scaffold
- enterprise home and reader experience
- clean book initializer, chapter generator and deterministic validation scripts
- Pagefind search, responsive navigation and GitHub Pages deployment
- versioned managed-file manifest and conflict-aware template synchronization
- enterprise content lifecycle metadata and staleness validation
- cross-browser, accessibility and performance-budget tests
- reviewed Windows/Linux visual regression baselines
- pull-request, security, deployment and release workflows
- immutable-reference GitHub Pages rollback workflow and operations runbook
- contribution, ownership, security and issue governance
