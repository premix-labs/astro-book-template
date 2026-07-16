# Accessibility Checklist

Record the browser, viewport, input method, and results in `validation-report.md`.

`tests/e2e/accessibility.spec.ts` enforces the automated Axe gate. The checklist below still requires human keyboard, zoom and assistive-technology review before release.

## Structure And Content

- [ ] Each page has one `h1`, and headings do not skip levels without a reason.
- [ ] Page titles and landmarks are meaningful.
- [ ] Link text identifies its destination when read out of context.
- [ ] Code, tables, and diagrams have sufficient explanations or captions.
- [ ] Meaningful images have alt text; decorative images use empty alt text.

## Keyboard And Focus

- [ ] Navigation, search, theme, tabs, copy buttons, and the mobile menu work with a keyboard.
- [ ] Focus indicators are visible in light and dark themes.
- [ ] Focus order follows the content order.
- [ ] Modals contain focus, close with Escape, and return focus to their trigger.
- [ ] There are no unintended keyboard traps.

## Visual And Responsive

- [ ] Text and controls meet WCAG 2.2 AA contrast requirements.
- [ ] Content remains usable at 200% zoom.
- [ ] A 320 CSS px viewport has no horizontal overflow except intentional code or table scrollers.
- [ ] Information does not rely on color alone.
- [ ] Motion respects `prefers-reduced-motion`.

## Assistive Technology

- [ ] Controls expose accessible names and states.
- [ ] Status and error messages are announced when necessary.
- [ ] Automated scans report no critical or serious findings.
- [ ] Complete at least one keyboard and screen-reader smoke test before release.
