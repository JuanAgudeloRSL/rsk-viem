import { defineChain, createPublicClient, http, getContract } from 'viem';
import BigNumber from "bignumber.js";
import { MoCContract } from './contracts/MoC'; 

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

// Client
const PublicClient = createPublicClient({
  chain: RskTestnet,
  transport: http()
});

// Contract instance
const contract = getContract({
    address: MoCContract.address as `0x${string}` || '',
    abi: MoCContract.abi,
    client: PublicClient
});

// Testing
async function call() {
    try {
        console.log(`adrress: ${contract.address}`)
        const feeToken = await contract.read.feeToken()
        console.log(`Fee Token ${feeToken}`)
    } catch (error) {
        console.error('Failed to call getBts:', error);
    }
}

call();
