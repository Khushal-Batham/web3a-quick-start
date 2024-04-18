import { useEffect, useState } from "react";
// IMP START - Quick Start
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
// IMP END - Quick Start
import Web3 from "web3";

import "./App.css";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

// IMP START - SDK Initialization
// IMP START - Dashboard Registration
const clientId =
  "BLf-Hm1P-OUoUoc_ntYD66r8XdP4HKoer5_CJPvGcCd6-0QEBXT5rSW7EC02vyrUMy17PhUYe6yxk3TEFZFLnzk"; // get from https://dashboard.web3auth.io
// IMP END - Dashboard Registration

const chainConfig = {
  chainId: "0x1", // Please use 0x1 for Mainnet
  rpcTarget: "https://rpc.ankr.com/eth",
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  displayName: "Ethereum Mainnet",
  blockExplorerUrl: "https://etherscan.io/",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://images.toruswallet.io/eth.svg",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig: chainConfig },
});

const web3auth = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider: privateKeyProvider,
});
// IMP END - SDK Initialization

function App() {
  return <p>Hello world</p>;
}

export default App;
