import About from '@/components/about';
import { ThirdwebProvider, metamaskWallet, walletConnect } from "@thirdweb-dev/react";
import { localWallet } from "@thirdweb-dev/react";

export default function Index() {
  return (
    <ThirdwebProvider activeChain="goerli" supportedWallets={[metamaskWallet(), walletConnect(), localWallet()]}>
        <About/>
    </ThirdwebProvider>
  );
}
