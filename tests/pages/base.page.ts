import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}

  async goto(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  protected async clickElement(locator: Locator) {
    await locator.click();
  }

  protected async fillInput(locator: Locator, text: string) {
    await locator.fill(text);
  }
}