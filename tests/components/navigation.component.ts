import {Page, Locator} from '@playwright/test'

export class NavigationComponent {
    readonly getStartedLink: Locator;
    readonly docsLink: Locator;  
    readonly apiLink: Locator;
    constructor(private page: Page){
        this.getStartedLink = page.locator('a', {hasText: 'Get started'});
        this.docsLink = page.locator('a', {hasText: 'Docs'});
        this.apiLink = page.locator('a', {hasText: 'API'});
    }
    async navigateToGetStarted(){
        await this.getStartedLink.click();
    }
}