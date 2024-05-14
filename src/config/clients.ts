import { createPublicClient, createWalletClient, http } from 'viem';
import { RskTestnet } from '../utils/rskTestnet';
import { privateKeyToAccount } from 'viem/accounts';
import dotenv from 'dotenv';

dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY;


if (!PRIVATE_KEY) {
    throw new Error('Private key is not provided. Please set the environment variable PRIVATE_KEY.');
}


const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

export const PublicClient = createPublicClient({
    chain: RskTestnet,
    transport: http()
});

export const WalletClient = createWalletClient({
    account: account,
    chain: RskTestnet,
    transport: http()
});
