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
    wrapDocument as wrapDocumentV2,
    __unsafe__use__it__at__your__own__risks__wrapDocuments as wrapDocumentsV3,
    __unsafe__use__it__at__your__own__risks__wrapDocument as wrapDocumentV3,
} from '@tradetrust-tt/tradetrust'

// Re-export everything
export type { WrappedDocument, SignedWrappedDocument }
export {
    validateSchema,
    OpenAttestationDocument,
    obfuscateDocument,
    verifySignature,
    signDocument,
    getDataV2,
    isSchemaValidationError,
    wrapDocumentsV2,
    wrapDocumentV2,
    wrapDocumentsV3,
    wrapDocumentV3,
    v2,
    v3,
    SchemaId,
    SUPPORTED_SIGNING_ALGORITHM,
}
