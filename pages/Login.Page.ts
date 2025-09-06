import { test, Page, expect } from '@playwright/test';
import { MetaMask } from '@synthetixio/synpress/playwright';
import { BaseUI } from '../core/BaseUI';

export default class LoginPage extends BaseUI {
    constructor(page: Page, metamask: MetaMask) {
        super(page, metamask);
    };

    async openWalletConnection() {
        const connectWalletBtn = this.page.locator('[data-testid="rk-connect-button"]');
        await expect(connectWalletBtn).toBeVisible();
        await connectWalletBtn.click();
    }

    async connectMetaMask() {
        const metamaskOption = this.page.locator('[data-testid="rk-wallet-option-metaMask"]');
        await expect(metamaskOption).toBeVisible();
        await metamaskOption.click();
        await this.metamask.connectToDapp();
    }

    async verifyWalletConnected() {
        const accountButton = this.page.locator('[data-testid="rk-account-button"]');
        await expect(accountButton).toBeVisible();
        await this.page.getByText("0xf60...1E10").isVisible();
    }
}