import { test, expect } from '@playwright/test';

test.describe('Documentation Navigation', () => {
  test('navigates through component doc pages via sidebar', async ({ page }) => {
    await page.goto('/docs');

    // Verify docs intro is shown
    await expect(page).toHaveURL(/.*\/docs/);

    // Click on Button in sidebar
    const buttonLink = page.getByRole('link', { name: 'Button' }).first();
    await buttonLink.click();
    await expect(page).toHaveURL(/.*\/docs\/button/);
    await expect(page.getByRole('heading', { name: 'Button' }).first()).toBeVisible();

    // Click on Tabs in sidebar
    const tabsLink = page.getByRole('link', { name: 'Tabs' }).first();
    await tabsLink.click();
    await expect(page).toHaveURL(/.*\/docs\/tabs/);
    await expect(page.getByRole('heading', { name: 'Tabs' }).first()).toBeVisible();

    // Click on Alert Dialog in sidebar
    const alertDialogLink = page.getByRole('link', { name: 'Alert Dialog' }).first();
    await alertDialogLink.click();
    await expect(page).toHaveURL(/.*\/docs\/alert-dialog/);
    await expect(page.getByRole('heading', { name: 'Alert Dialog' }).first()).toBeVisible();
  });
});
