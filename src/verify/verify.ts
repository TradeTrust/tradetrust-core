import {
    verificationBuilder as originalVerificationBuilder,
    openAttestationVerifiers,
    openAttestationDidIdentityProof,
    isValid,
} from '@tradetrust-tt/tt-verify'
import {
    DocumentsToVerify,
    VerificationBuilderOptions,
} from '@tradetrust-tt/tt-verify/dist/types/src/types/core'

const verificationBuilder = (builderOptions: VerificationBuilderOptions) => {
    return originalVerificationBuilder(
        [...openAttestationVerifiers, openAttestationDidIdentityProof],
        builderOptions
    )
}

const verify = (
    document: DocumentsToVerify,
    builderOptions: VerificationBuilderOptions
) => {
    return verificationBuilder(builderOptions)(document)
}

export { verificationBuilder, verify, isValid }
