# TradeTrust Core

Unified interface for interacting with TradeTrust's various services. This library contains a set of modules.

| Module            | Description                                            |
| ----------------- | ------------------------------------------------------ |
| [Verify](#verify) | Verify TradeTrust issued document                      |
| [Utils](#utils)   | Provide utility methods for TradeTrust functionalities |

## Installation

```sh
npm i @tradetrust-tt/tradetrust-core
```

## Verify

`verify` allows you to verify issued document programmatically. After verification, use `isValid` method to answer some questions:

-   Has the document been tampered with ?
-   Is the issuance state of the document valid ?
-   Is the document issuer identity valid ? (see [identity proof](https://docs.tradetrust.io/docs/topics/verifying-documents/issuer-identity))

Document can be either [verifiable document](https://docs.tradetrust.io/docs/tutorial/verifiable-documents/overview) or [transferrable record](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview) which follows [TradeTrust document schema](https://docs.tradetrust.io/docs/topics/introduction/tradetrust-document-schema/)

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

verify(document, { provider }).then((res) => {
    // to check the overall validity of the document
    console.log(isValid(res))
})
```

For more information about building provider, visit [tt-verify repository](https://github.com/TradeTrust/tt-verify?tab=readme-ov-file#provider)

## Utils

This module provides utility methods that supports the shared functionalities for other TradeTrust modules.

#### InterpretFragments

`interpretFragments` allows you to extract out the verified results from the fragments.

```ts
import {interpretFragments} from '@tradetrust-tt/tradetrust-core/utils`;

const fragments = await verify(document, {
            network: 'sepolia',
});

const {hasValid, issuedValid, identityValid} = interpretFragments(fragments);
console.log({hasValid, issuedValid, identityValid});
```

## Contributing

We welcome contributions to the TradeTrust core library. Please feel free to submit a pull request or open an issue.
