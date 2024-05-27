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
    wrapDocumentsV2,
    signDocument,
    isSignedWrappedV2Document,
    SUPPORTED_SIGNING_ALGORITHM,
} from '@tradetrust-tt/tradetrust-core'

const document = {
    // raw v2 document with dns-did as identitify proof
} as any

async function start() {
    const wrappedDocuments = wrapDocumentsV2([document])
    const wrappedDocument = wrappedDocuments[0]

    const signedDocument = await signDocument(
        wrappedDocument,
        SUPPORTED_SIGNING_ALGORITHM.Secp256k1VerificationKey2018,
        {
            public: 'did:ethr:<your_wallet_address>#controller',
            private: '<your_private_key>',
        }
    )
    // check if the document has already wrapped and signed
    console.log(isSignedWrappedV2Document(signedDocument))
}

start()
```

#### Deploying token-registry

This example provides how to deploy tradetrust standard token-registry for [transferrable records](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview/). It requires less gas compared to [standalone deployment](#deploying-standalone-token-registry), as it uses deployer and implementation addresses for deployment. Currently, it supports the following networks.

-   ethereum
-   sepolia
-   polygon
-   stabilitytestnet
-   stability

```ts
import {
    TDocDeployer__factory,
    TOKEN_REG_CONSTS,
    DeploymentEvent,
    encodeInitParams,
    getEventFromReceipt,
} from '@tradetrust-tt/tradetrust-core'

const unconnectedWallet = new Wallet('privateKey')
const provider = ethers.getDefaultProvider('sepolia')
const wallet = unconnectedWallet.connect(provider)
const walletAddress = await wallet.getAddress()
const chainId = await wallet.getChainId()

const { TokenImplementation, Deployer } = TOKEN_REG_CONSTS.contractAddress

const deployerContract = TDocDeployer__factory.connect(
    Deployer[chainId],
    wallet
)

const initParam = encodeInitParams({
    name: 'DemoTokenRegistry',
    symbol: 'DTR',
    deployer: walletAddress,
})

const tx = await deployerContract.deploy(
    TokenImplementation[chainId],
    initParam
)
const receipt = await tx.wait()
const registryAddress = getEventFromReceipt<DeploymentEvent>(
    receipt,
    deployerContract.interface.getEventTopic('Deployment')
).args.deployed

// Contract Address
console.log(`Contract Address: ${registryAddress}`)
```

#### Deploying standalone token-registry

This example provides how to deploy tradetrust standalone token-registry for [transferrable records](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview/). It works on all the [supported networks](https://docs.tradetrust.io/docs/topics/introduction/supported-network/#tradetrust-supported-networks).

```ts
import { TradeTrustToken__factory } from '@tradetrust-tt/tradetrust-core'

async function start() {
    const tokenFactory = new TradeTrustToken__factory(wallet)
    const tokenRegistry = await tokenFactory.deploy(
        registryName,
        registrySymbol,
        factoryAddress
    )
    const registryAddress = token.address
}
start()
```

#### Minting of Transferrable Record

This example provides how to mint the tradetrust token for [transferrable record](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview/) using the existing token registry address.

```ts
import { TradeTrustToken__factory } from '@tradetrust-tt/tradetrust-core'

const connectedRegistry = TradeTrustToken__factory.connect(
    tokenRegistryAddress,
    signer
)
await connectedRegistry.mint(beneficiaryAddress, holderAddress, tokenId)
```

#### Manage ownership of tradetrust token

This example demonstrates how to manage and represent the ownership of a TradeTrust token between a beneficiary and holder for [Title Transfer](https://docs.tradetrust.io/docs/topics/introduction/transferable-records/title-transfer), and eventually surrender the document. During [minting](#minting-of-transferrable-record), the [Token Registry](https://docs.tradetrust.io/docs/topics/appendix/glossary/#token-registry) will create and assign a [Title Escrow](https://docs.tradetrust.io/docs/topics/introduction/transferable-records/title-transfer/#title-escrow) as the owner of that token. The actual owners will use the Title Escrow contract to perform their ownership operations.

```ts
import { connectToTitleEscrow } from '@tradetrust-tt/tradetrust-core'

const titleEscrow = await connectToTitleEscrow({ tokenId, address, wallet })
```

After getting the titleEscrow instance, we can call the following methods to change the ownership of the tradetrust token.

```ts
/*
allow the holder of the transferable record to endorse the transfer to an approved owner and approved holder of the transferable record.
*/
const transaction = await titleEscrow.transferBeneficiary(
    beneficiaryNomineeAddress
)
await transaction.wait()

// allow the owner of a transferable record to change its holder.
const transaction = await titleEscrow.transferHolder(newHolderAddress)
await transaction.wait()

/* change the owner and holder. It will fail if the provided holder and owner's addresses are the same as the current owner and current holder's addresses.
 */

const transaction = await titleEscrow.transferOwners(
    beneficiaryNomineeAddress,
    newHolderAddress
)
await transaction.wait()

/* allow the owner of the transferable record to nominate a new owner of the transferable record. It will fail if you are not the owner of the transferable record.
 */
const transaction = await titleEscrow.nominate(beneficiaryNomineeAddress)
await transaction.wait()

/*
allow the entity (who is both an owner and holder) to surrender it's transferable record to the token registry.
*/
const transaction = await titleEscrow.surrender()
await transaction.wait()
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

#### `wrapDocumentsV2`

It takes in array of Tradetrust v2 documents and returns the wrapped documents.

#### `wrapDocumentsV3`

It takes in array of Tradetrust v3 documents and returns the wrapped documents.

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

#### `connectToTitleEscrow`

It accepts the tokenId and address of the token resgitry and returns the address of the [TitleEscrow](https://docs.tradetrust.io/docs/topics/introduction/transferable-records/title-transfer/#title-escrow) which is connected to that token registry.

#### `isWrappedV2Document`

type guard for wrapped v2 document

#### `isSignedWrappedV2Document`

type guard for signed v2 document

#### `isWrappedV3Document`

type guard for wrapped v3 document

#### `isSignedWrappedV3Document`

type guard for signed v3 document

#### `getEventFromReceipt`

extracts a specific event from a transaction receipt.

#### `encodeInitParams`

prepare the initialization parameters for deploying the [token-registry](#deploying-token-registry)

## Contributing

We welcome contributions to the TradeTrust core library. Please feel free to submit a pull request or open an issue.
