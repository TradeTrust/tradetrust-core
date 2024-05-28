// Import everything except utils from @tradetrust-tt/tradetrust
import {
    type OpenAttestationDocument,
    type WrappedDocument,
    type SignedWrappedDocument,
    v2,
    v3,
    SchemaId,
    SUPPORTED_SIGNING_ALGORITHM,
    validateSchema,
    obfuscateDocument,
    verifySignature,
    signDocument,
    getData as getDataV2,
    isSchemaValidationError,
    wrapDocuments as wrapDocumentsV2,
    __unsafe__use__it__at__your__own__risks__wrapDocuments as wrapDocumentsV3,
    utils,
} from '@tradetrust-tt/tradetrust'

import type { DiagnoseError } from '@tradetrust-tt/tradetrust/dist/types/shared/utils'

const {
    isTransferableAsset,
    getAssetId,
    isWrappedV2Document,
    isSignedWrappedV2Document,
    isWrappedV3Document,
    isSignedWrappedV3Document,
    isRawV2Document,
    isRawV3Document,
    isObfuscated,
    getDocumentData,
    getIssuerAddress,
    diagnose,
} = utils

export type { WrappedDocument, SignedWrappedDocument, OpenAttestationDocument }
export {
    validateSchema,
    obfuscateDocument,
    verifySignature,
    signDocument,
    getDataV2,
    isSchemaValidationError,
    wrapDocumentsV2,
    wrapDocumentsV3,
    v2,
    v3,
    SchemaId,
    SUPPORTED_SIGNING_ALGORITHM,
}

// utils
export {
    isTransferableAsset,
    getAssetId,
    isWrappedV2Document,
    isSignedWrappedV2Document,
    isWrappedV3Document,
    isSignedWrappedV3Document,
    isRawV2Document,
    isRawV3Document,
    isObfuscated,
    getDocumentData,
    getIssuerAddress,
    diagnose,
}

export type { DiagnoseError }
