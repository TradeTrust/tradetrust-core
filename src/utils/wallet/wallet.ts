import { Signer } from 'ethers'
import { Provider } from '@ethersproject/abstract-provider'

export type ConnectedSigner = Signer & {
    readonly provider: Provider
    readonly publicKey?: never
    readonly privateKey?: never
}
