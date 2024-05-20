import { utils } from '@tradetrust-tt/tradetrust'
import type { DiagnoseError } from '@tradetrust-tt/tradetrust/dist/types/shared/utils'

const {
    isTransferableAsset,
    getAssetId,
    isWrappedV2Document,
    isSignedWrappedV2Document,
    isWrappedV3Document,
    isSignedWrappedV3Document,
    isRawV3Document,
    isObfuscated,
    getDocumentData,
    getIssuerAddress,
    diagnose,
} = utils

export {
    isTransferableAsset,
    getAssetId,
    isWrappedV2Document,
    isSignedWrappedV2Document,
    isWrappedV3Document,
    isSignedWrappedV3Document,
    isRawV3Document,
    isObfuscated,
    getDocumentData,
    getIssuerAddress,
    diagnose,
}

export type { DiagnoseError }
