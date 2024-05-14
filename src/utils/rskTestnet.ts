import { defineChain } from 'viem';

// RSK testnet information 
export const RskTestnet = defineChain({
    id: 31,
    name: 'RSK Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Rootstock Smart Bitcoin',
      symbol: 'tRBTC',
    },
    rpcUrls: {
      default: {
        http: ['https://public-node.testnet.rsk.co']
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://explorer.testnet.rsk.co' },
    },
  });
  
