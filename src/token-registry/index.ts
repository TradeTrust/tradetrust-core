import {
    TradeTrustToken__factory,
    TitleEscrow__factory,
    TitleEscrowFactory__factory,
    TDocDeployer__factory,
    // types
    type TitleEscrow,
    type TitleEscrowFactory,
    type TradeTrustToken,
} from '@tradetrust-tt/token-registry/contracts'

import type { TypedEvent } from '@tradetrust-tt/token-registry/dist/contracts/common'
import type { DeploymentEvent } from '@tradetrust-tt/token-registry/dist/contracts/contracts/utils/TDocDeployer'
import {
    utils,
    constants as TOKEN_REG_CONSTS,
} from '@tradetrust-tt/token-registry'

const { getEventFromReceipt, encodeInitParams } = utils

export {
    TradeTrustToken__factory,
    TitleEscrow__factory,
    TitleEscrowFactory__factory,
    TDocDeployer__factory,
    TOKEN_REG_CONSTS,
    // utils
    getEventFromReceipt,
    encodeInitParams,
}
export type {
    TitleEscrow,
    TradeTrustToken,
    TypedEvent,
    DeploymentEvent,
    TitleEscrowFactory,
}

export * from './connectToTitleEscrow'
