import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { NavigationComponent } from '../components/navigation.component';

export class PlaywrightDevPage extends BasePage {
    readonly navigation: NavigationComponent;
    readonly tocList: Locator;

    constructor(page: Page) {
        super(page);
        this.navigation = new NavigationComponent(page);
        this.tocList = page.locator('article div.markdown ul > li > a')
    }
}