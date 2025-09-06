import { defineWalletSetup } from '@synthetixio/synpress'
import { MetaMask, getExtensionId } from '@synthetixio/synpress/playwright'

const SEED_PHRASE = 'one captain attend meat october know iron debris split case glow fake';
const PASSWORD = 'fake@Te$t1234';

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const extensionId = await getExtensionId(context, 'MetaMask')
  const metamask = new MetaMask(context, walletPage, PASSWORD, extensionId)
  await metamask.importWallet(SEED_PHRASE)
});