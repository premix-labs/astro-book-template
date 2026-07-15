# Operations Runbook

## Purpose

Use this runbook when publishing, diagnosing or restoring the production book site. Record the commit, workflow run and result in `validation-report.md`.

## Normal Deployment

1. Merge a reviewed pull request after all required checks pass.
2. Confirm **Deploy to GitHub Pages** completes for the merged commit.
3. Open the home page, one direct chapter URL and search from the deployed site.
4. For a release, create the matching `vX.Y.Z` tag and confirm the GitHub release contains `site.tar.gz` and `sbom.cdx.json`.

## Incident Triage

1. Check GitHub Actions for the first failing job and preserve its logs.
2. Determine whether the fault is content, build, dependency, Pages configuration or availability.
3. Stop concurrent production changes until the failure is understood.
4. If the current deployment is unusable, restore the last known-good tag using the rollback procedure.

## Rollback

1. Identify a previously validated tag or immutable commit SHA.
2. Open **Actions > Roll Back GitHub Pages > Run workflow**.
3. Enter the approved tag or commit in `ref` and run the workflow.
4. Confirm the workflow rebuilds and verifies that exact revision before deployment.
5. Smoke-test home, direct chapter navigation, search and assets under the repository base path.
6. Record the incident, restored revision and follow-up fix in the validation report and changelog.

## Recovery Verification

- GitHub Pages returns HTTP 200 for home and a chapter URL.
- Search opens and returns indexed content.
- CSS, fonts and icons load under the configured base path.
- The deployed footer/version identifies the expected release where applicable.
- A forward-fix pull request includes a regression test for the incident when practical.

## Escalation And Ownership

Repository CODEOWNERS approve platform changes. Security reports follow `SECURITY.md`. If GitHub Pages itself is unavailable, preserve evidence and monitor GitHub Status; do not bypass verification by uploading unreviewed artifacts.
