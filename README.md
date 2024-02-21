# TradeTrust Core

Unified interface for interacting with TradeTrust's various services. This libraru contains a set of modules.

| Plugin | Description                                            |
| ------ | ------------------------------------------------------ |
| Verify | Verify TradeTrust wrapped document                     |
| Utils  | Provide utility methods for TradeTrust functionalities |

## Installation

```sh
npm i @tradetrust-tt/tradetrust-core
```

## Verify

This module that allows you to verify wrapped document programmatically. A verification happens on a wrapped document, and use `isValid` method to answer some questions:

-   Has the document been tampered with ?
-   Is the issuance state of the document valid ?
-   Is the document issuer identity valid ? (see [identity proof](https://docs.tradetrust.io/docs/topics/verifying-documents/issuer-identity))

Document can be either [verifiable document](https://docs.tradetrust.io/docs/tutorial/verifiable-documents/overview) or [transferrable record](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview) which follows [TradeTrust document schema](https://docs.tradetrust.io/docs/topics/introduction/tradetrust-document-schema/)

```ts
// verify document on testnet
import { verify, isValid } from '@tradetrust-tt/tradetrust-core/verify'
let document = {
    // your tradetrust document
}
const fragments = await verify(document, {
    network: 'sepolia',
})
console.log(isValid(fragments))
```

```ts
// verify document using your own blockchain provider
import { ethers } from 'ethers'
// Replace YOUR_RPC_URL with your actual JSON-RPC URL
const rpcUrl = 'YOUR_RPC_URL'
const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
let document = {
    // your tradetrust document
}
const fragments = await verify(document, { provider })
console.log(isValid(fragments))
```

## Utils

This module provide utilities method that supports the shared functionalities for other TradeTrust modules.

#### InterceptFragments

InterceptFragments allows you to extract out the verified results from the fragments.

```ts
import {interpretFragments} from '@tradetrust-tt/tradetrust-core/verify`;

const fragments = await verify(document, {
            network: 'sepolia',
});

const {hasValid, issuedValid, identityValid} = interpretFragments(fragments);
console.log({hasValid, issuedValid, identityValid});
```

## Contributing

We welcome contributions to the TradeTrust core library. Please feel free to submit a pull request or open an issue.
