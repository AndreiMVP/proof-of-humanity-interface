import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { ChainId, RPC_ENDPOINTS, SUPPORTED_CHAIN_IDS } from "constants/chains";

export const network = new NetworkConnector({
  urls: RPC_ENDPOINTS,
  defaultChainId: ChainId.MAINNET,
});

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});
