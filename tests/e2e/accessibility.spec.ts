import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

for (const path of ['/', '/intro/']) {
  test(`${path} has no serious or critical accessibility violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact ?? ''));
    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  });
}
