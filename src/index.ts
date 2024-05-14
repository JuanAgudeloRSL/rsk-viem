import { ERC1155 } from "./contracts/ERC1155";



// Testing
async function call() {
    try {
        const mint = ERC1155.write.mint(['0x08C4E4BdAb2473E454B8B2a4400358792786d341',1])
        console.log(await mint)
    } catch (error) {
        console.error('Failed to call getBts:', error);
    }
}

call();
