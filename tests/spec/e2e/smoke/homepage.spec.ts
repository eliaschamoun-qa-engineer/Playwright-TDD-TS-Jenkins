import { test, expect } from '../../../fixtures/pom.fixtures';

test.describe('Playwright Homepage', () => {
  test('should navigate to getting started', async ({ page, playwrightDevPage }) => {
    await playwrightDevPage.goto('https://playwright.dev/');
    await playwrightDevPage.waitForPageLoad()
    await playwrightDevPage.navigation.navigateToGetStarted();
    
    // Use 'page' directly for page-level assertions
    await expect(page).toHaveURL(/.*intro/);
  });
});