import { Page, expect } from "@playwright/test";
import { MetaMask } from "@synthetixio/synpress/playwright";

export class BaseUI {
    private static defaultTimeout: number = 10000;
    constructor(protected page: Page, protected metamask: MetaMask) {
        this.page = page;
        this.metamask = metamask;
    };

    protected async openApplicationUrl(url: string) {
        await this.page.goto(url);
    };

    protected async click(locator: string) {
        const element = this.page.locator(locator);
        await expect(element).toBeVisible();
        await element.click();
    };

    protected async input(locator: string, inputValue: string) {
        const element = this.page.locator(locator);
        await expect(element).toBeVisible();
        await element.fill(inputValue);
    };

    protected async clearInput(locator: string) {
        const element = this.page.locator(locator);
        await expect(element).toBeVisible();
        await element.clear();
    };

    protected async getTextElement(locator: string) {
        const element = this.page.locator(locator);
        await expect(element).toBeVisible();
        return await element.textContent();
    };

    protected async getAttributeValue(locator: string, attribute: string) {
        const element = this.page.locator(locator);
        await expect(element).toBeVisible();
        return await element.getAttribute(attribute);
    };

    protected async selectOption(locator: string, option: string) {
        const element = this.page.locator(locator);
        await expect(element).toBeVisible();
        await element.selectOption(option);
    };
}