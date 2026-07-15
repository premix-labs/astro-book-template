import { expect, test } from '@playwright/test';

test('home exposes a stable learning path without horizontal overflow', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.locator('.chapter-row')).toHaveCount(5);
  await expect(page.getByRole('link', { name: /Continue with/i })).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
});

test('reader navigation, theme and search remain operational', async ({ page }) => {
  await page.goto('/intro/');

  await expect(page.getByRole('heading', { level: 1, name: 'Template Introduction' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Chapter Navigation' })).toBeVisible();

  const themeButton = page.getByRole('button', { name: /Switch to dark mode/i });
  await themeButton.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('button', { name: /Switch to light mode/i })).toBeVisible();

  await page.keyboard.press(process.platform === 'darwin' ? 'Meta+K' : 'Control+K');
  await expect(page.locator('pagefind-modal')).toBeAttached();
  await expect(page.getByRole('dialog', { name: 'search' })).toBeVisible();
  await expect(page.getByRole('searchbox')).toBeVisible();
});

test('mobile drawer manages visibility, focus and overflow', async ({ page }, testInfo) => {
  test.skip(!/(mobile|tablet)/.test(testInfo.project.name), 'Collapsed-navigation interaction');
  await page.goto('/intro/');

  const drawer = page.locator('#mobile-menu-overlay');
  await expect(drawer).toHaveAttribute('aria-hidden', 'true');
  await page.getByRole('button', { name: 'Menu' }).click();
  await expect(drawer).toHaveAttribute('aria-hidden', 'false');
  await expect(page.getByRole('button', { name: 'Close menu' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(drawer).toHaveAttribute('aria-hidden', 'true');
  await expect(page.getByRole('button', { name: 'Menu' })).toBeFocused();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
});
