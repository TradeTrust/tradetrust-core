# TradeTrust Core

Unified interface for interacting with TradeTrust's various services. This library contains a set of modules.

-   [verify](#verify-module) contains methods related to verification of Tradetrust documents.
-   [utils] provide utility methods for TradeTrust functionalities. It contains sub modules.
    -   [constants](#utilsconstants-module) contains constant values, such as list of supported networks
    -   [fragment](#utilsfragments-module) provides a set of methods to interact with verification fragments
    -   [provider](#utilsproviders-module) contains method to generate provider

## Installation

```sh
npm i @tradetrust-tt/tradetrust-core
```

## Example

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
    // modify your provider accordingly
    network: 'sepolia',
    providerType: 'infura' as providerType,
    apiKey: 'your-api-key',
}
// create provider object
const provider = generateProvider(providerOptions)

let document = {
    // tradetrust document
} as any

verify(document, { provider }).then((fragments) => {
    // to check the overall validity of the document
    console.log(isValid(fragments))
    const { hasValid, issuedValid, identityValid } =
        interpretFragments(fragments)
    // to check if the document has not been modified, has been issued and has valid issuer identity
    console.log({ hasValid, issuedValid, identityValid })
})
```

## verify module

It exports methods related to verificaton of the documents.

#### verify

It allows you to verify wrapped/ issued document programmatically. Upon successful verification, it will return fragments which would collectively prove the validity of the document.

Document can be either [verifiable document](https://docs.tradetrust.io/docs/tutorial/verifiable-documents/overview) or [transferrable record](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview) which follows [TradeTrust document schema](https://docs.tradetrust.io/docs/topics/introduction/tradetrust-document-schema/)

For more information about building provider, visit [tt-verify repository](https://github.com/TradeTrust/tt-verify?tab=readme-ov-file#provider)

#### isValid

It will execute over fragments, returned from [verify](#verify) method and determine if the fragments produced a valid result. The function will return true if a document fulfill the following conditions:

The document has not been tampered, and
The document has been issued, and
The document has not been revoked, and
The issuer identity is valid.

## utils/constants module

It exposes the following constant values.

-   `networks` list of supported networks
-   `networkCurrency` list of supported currencies
-   `CHAIN_ID` mapping between supported network names and chain ids
-   `SUPPORTED_CHAINS` mapping between list of supported network names and their attributes.

## utils/fragments module

It exposes method to interact with verification fragments, returned by [verify](#verify) method

#### interpretFragments

It allows you to extract out the verified results from the fragments.

After verification, use `isValid` method to answer some questions:

-   Has the document been tampered with ?
-   Is the issuance state of the document valid ?
-   Is the document issuer identity valid ? (see [identity proof](https://docs.tradetrust.io/docs/topics/verifying-documents/issuer-identity))

## utils/providers module

It contains method to generate provider.

#### generateProvider

It generates receives provider options and returns the ethereum JSON RPC provider to be used for [verify](#verify) method.

## Contributing

We welcome contributions to the TradeTrust core library. Please feel free to submit a pull request or open an issue.
