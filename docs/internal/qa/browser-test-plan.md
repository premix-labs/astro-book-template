# Browser Test Plan

Use a production preview or deployed URL with the real base path. Do not assume a fixed development-server port.

## Test Matrix

| Project          | Viewport          | Automated gate     | Manual release check |
| ---------------- | ----------------- | ------------------ | -------------------- |
| Chromium desktop | 1440 x 900        | `npm run test:e2e` | visual hierarchy     |
| Chromium tablet  | 768 x 1024        | `npm run test:e2e` | touch and wrapping   |
| Chromium mobile  | Pixel 5 emulation | `npm run test:e2e` | real-device smoke    |
| Firefox desktop  | 1440 x 900        | `npm run test:e2e` | font rendering       |
| WebKit desktop   | 1440 x 900        | `npm run test:e2e` | Safari smoke         |

## Core Flows

1. Open the home page and navigate to the introduction or first chapter.
2. Open the sidebar or mobile menu and navigate to the final chapter.
3. Search for text from a chapter and open a result.
4. Switch between light and dark themes, then reload the page.
5. Use previous and next navigation.
6. Open and refresh a direct URL under the repository base path.
7. Test the 404 page with a nonexistent URL.

## Visual And Runtime Checks

- [ ] Text, controls, and navigation do not overlap.
- [ ] Code blocks and tables remain usable on mobile.
- [ ] Mermaid diagrams and figures render when present.
- [ ] The search index loads from the production build.
- [ ] There are no broken assets or failed network requests.
- [ ] There are no unexpected console errors or warnings.
- [ ] Keyboard flows pass the accessibility checklist.

## Release Evidence

- Tested URL/commit:
- Date:
- Tester:
- Automated report or workflow URL:
- Manual screenshots/logs:
- Remaining issues:

Generated books must replace these fields. Passing evidence from the template does not transfer to a new repository.
