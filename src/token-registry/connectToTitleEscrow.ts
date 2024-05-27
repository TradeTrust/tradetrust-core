import { Wallet } from 'ethers'
import { ConnectedSigner } from 'src/utils'
import {
    TitleEscrow,
    TitleEscrow__factory,
    TradeTrustToken,
    TradeTrustToken__factory,
} from '@tradetrust-tt/token-registry/dist/contracts'

export interface ConnectToTitleEscrowArgs {
    tokenId: string
    address: string
    wallet: Wallet | ConnectedSigner
}

export const connectToTitleEscrow = async ({
    tokenId,
    address,
    wallet,
}: ConnectToTitleEscrowArgs): Promise<TitleEscrow> => {
    const tokenRegistry: TradeTrustToken =
        await TradeTrustToken__factory.connect(address, wallet)
    const titleEscrowAddress = await tokenRegistry.ownerOf(tokenId)
    return await TitleEscrow__factory.connect(titleEscrowAddress, wallet)
}
