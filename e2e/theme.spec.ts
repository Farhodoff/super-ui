import { test, expect } from '@playwright/test';

test.describe('Theme Customization', () => {
  test('opens theme customizer and toggles mode', async ({ page }) => {
    await page.goto('/');

    // Open theme customizer popover
    const themeButton = page.getByRole('button', { name: /customize/i });
    await themeButton.click();

    // Verify popover appears with mode buttons
    const lightBtn = page.getByRole('button', { name: /^light$/i });
    const darkBtn = page.getByRole('button', { name: /^dark$/i });

    await expect(lightBtn).toBeVisible();
    await expect(darkBtn).toBeVisible();

    // Click dark mode
    await darkBtn.click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Click light mode
    await lightBtn.click();
    await expect(page.locator('html')).toHaveClass(/light/);
  });
});
