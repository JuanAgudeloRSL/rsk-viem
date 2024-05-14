import { WalletClient } from "./config";




// Testing
async function call() {
    try {
        console.log(WalletClient)
    } catch (error) {
        console.error('Failed to call getBts:', error);
    }
}

call();
