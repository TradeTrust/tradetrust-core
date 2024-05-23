# TradeTrust Core

Unified interface for interacting with TradeTrust's various services such as document verification and validation of the fragments. This library contains a set of modules.

## Installation

```sh
npm i @tradetrust-tt/tradetrust-core
```

## Basic Usage

#### Wrapping and Signing of verifiable document

This example provides how to sign tradetrust wrapped verifiable document, as well as a public/private key pair or an [Ethers.js Signer](https://docs.ethers.io/v5/api/signer/).
Replace `<your_wallet_address>` and `<your_private_key>` with your actual wallet address and private key.

```ts
import {
    wrapDocumentV2,
    signDocument,
    isSignedWrappedV2Document,
    SUPPORTED_SIGNING_ALGORITHM,
} from '@minhtetoo/tradetrust-core'

const document = {
    // raw v2 document with dns-did as identitify proof
} as any

async function start() {
    const wrappedDocument = wrapDocumentV2(document)
    const signedDocument = await signDocument(
        wrappedDocument,
        SUPPORTED_SIGNING_ALGORITHM.Secp256k1VerificationKey2018,
        {
            public: 'did:ethr:<your_wallet_address>#controller',
            private: '<your_private_key>',
        }
    )
    // check is the document has already wrapped and signed
    console.log(isSignedWrappedV2Document(signedDocument))
}

start()
```

#### Verifying

This example provides how to verify tradetrust document using your own provider configurations.

```ts
import {
    verify,
    isValid,
    interpretFragments,
    generateProvider,
    providerType,
} from '@tradetrust-tt/tradetrust-core'

const providerOptions = {
    // modify your provider options accordingly
    network: 'sepolia',
    providerType: 'infura' as providerType,
    apiKey: 'your-api-key',
}
// create provider object
const provider = generateProvider(providerOptions)

let document = {
    // tradetrust document
} as any

async function start() {
    const fragments = await verify(document, { provider })

    // to check the overall validity of the document
    console.log(isValid(fragments))

    // to check if the document has not been modified, has been issued and has valid issuer identity
    const { hashValid, issuedValid, identityValid } =
        interpretFragments(fragments)
    console.log({ hashValid, issuedValid, identityValid })
}

start()
```

## Methods

tradetrust-core provides the following methods for document verification and validations.

#### `generateProvider`

It generates receives provider options and returns the ethereum JSON RPC provider to be used for [verify](#verify) method.

#### `wrapDocumentV2`

It takes in a Tradetrust v2 document and returns the wrapped document.

#### `wrapDocumentsV2`

It takes in array of Tradetrust v2 documents and returns the wrapped documents.

#### `obfuscateDocument`

It removes a key-value pair from the document's data section, without causing the file hash to change. This can be used to generate a new document containing a subset of the original data, yet allow the recipient to proof the provenance of the document.

#### `getDataV2`

It returns the original data stored in the Tradetrust v2 document, in a readable format.

#### `diagnose`

Tool to find out why a document is not a valid open attestation file (wrapped or signed document)

#### `signDocument`

It takes a wrapped document, a wallet (public and private key pair) or an Ethers.js Signer. The method will sign the merkle root from the wrapped document, append the signature to the document and return it. Currently, it supports `Secp256k1VerificationKey2018` sign algorithm.

#### `verify`

It allows you to verify wrapped/ issued document programmatically. Upon successful verification, it will return fragments which would collectively prove the validity of the document.

Document can be either [verifiable document](https://docs.tradetrust.io/docs/tutorial/verifiable-documents/overview) or [transferrable record](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview) which follows [TradeTrust document schema](https://docs.tradetrust.io/docs/topics/introduction/tradetrust-document-schema/)

For more information about building provider, visit [tt-verify repository](https://github.com/TradeTrust/tt-verify?tab=readme-ov-file#provider)

#### `isValid`

It will execute over fragments, returned from [verify](#verify) method and determine if the fragments produced a valid result. The function will return true if a document fulfill the following conditions:

The document has not been tampered, and
The document has been issued, and
The document has not been revoked, and
The issuer identity is valid.

#### `interpretFragments`

It allows you to extract out the verified results from the fragments.

After verification, use `isValid` method to answer some questions:

-   Has the document been tampered with ?
-   Is the issuance state of the document valid ?
-   Is the document issuer identity valid ? (see [identity proof](https://docs.tradetrust.io/docs/topics/verifying-documents/issuer-identity))

#### `verifySignature`

It checks that the signature of the document corresponds to the actual content in the document. In addition, it checks that the target hash (hash of the document content), is part of the set of documents wrapped in the batch using the proofs.

Note that this method does not check against the blockchain or any registry if this document has been published. The merkle root of this document need to be checked against a publicly accessible document store (can be a smart contract on the blockchain).

#### `isWrappedV2Document`

type guard for wrapped v2 document

#### `isSignedWrappedV2Document`

type guard for signed v2 document

#### `isWrappedV3Document`

type guard for wrapped v3 document

#### `isSignedWrappedV3Document`

type guard for signed v3 document

## Contributing

We welcome contributions to the TradeTrust core library. Please feel free to submit a pull request or open an issue.
