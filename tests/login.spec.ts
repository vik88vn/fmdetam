import { testWithSynpress } from '@synthetixio/synpress-core';
import { MetaMask, metaMaskFixtures } from '@synthetixio/synpress/playwright';
import metamaskSetup from '../test/wallet-setup/metamask.setup';
import LoginPage from '../pages/Login.Page';


const test = testWithSynpress(metaMaskFixtures(metamaskSetup));
const { expect } = test;

let loginPage: LoginPage;
test('User connects wallet to dApp successfully', async ({ page, context, metamaskPage, extensionId }) => {
    const metamask = new MetaMask(context, metamaskPage, metamaskSetup.walletPassword, extensionId);
    loginPage = new LoginPage(page, metamask);
    await page.goto('/');
    await loginPage.openWalletConnection();
    await loginPage.connectMetaMask();
    await loginPage.verifyWalletConnected();
});
