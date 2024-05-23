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

import { constants as TOKEN_REG_CONSTS } from '@tradetrust-tt/token-registry'

export {
    TradeTrustToken__factory,
    TitleEscrow__factory,
    TitleEscrowFactory__factory,
    TDocDeployer__factory,
    TOKEN_REG_CONSTS,
}
export type {
    TitleEscrow,
    TradeTrustToken,
    TypedEvent,
    DeploymentEvent,
    TitleEscrowFactory,
}
