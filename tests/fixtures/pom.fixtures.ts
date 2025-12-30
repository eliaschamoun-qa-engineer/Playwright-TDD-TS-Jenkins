import { test as base } from '@playwright/test';
import { PlaywrightDevPage } from '../pages/playwright-dev-page';

type MyFixtures = {
    playwrightDevPage: PlaywrightDevPage;
};

export const test = base.extend<MyFixtures>({
    playwrightDevPage: async ({ page }, use) => {
        const devPage = new PlaywrightDevPage(page);
        // We can optionally navigate here if it's common for all tests using this fixture
        // await devPage.goto(); 
        await use(devPage);
    },
});

export { expect } from '@playwright/test';
