import {Page, Locator} from '@playwright/test'

export class HeaderComponent{
    readonly docsLink: Locator;  
    readonly apiLink: Locator
    constructor(private page: Page){
        this.docsLink = page.locator('a', {hasText: 'Docs'});
        this.apiLink = page.locator('a', {hasText: 'API'});
    }
}