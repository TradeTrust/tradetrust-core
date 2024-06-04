# TradeTrust Core

Unified interface for interacting with TradeTrust's various services such as document verification and validation of the fragments. This library contains a set of modules.

## Installation

```sh
npm i @tradetrust-tt/tradetrust-core
```

## Basic Usages

#### Wrapping and Signing of verifiable Document

This example provides how to wrap and sign tradetrust verifiable document using public/private key pair. This method doesn't need user to have existing [document store](https://docs.tradetrust.io/docs/topics/introduction/verifiable-documents/document-store/) deployed on blockchain.
Replace `<your_wallet_address>` and `<your_private_key>` with your actual wallet address and private key.

```ts
import {
    wrapDocumentsV2,
    signDocument,
    isSignedWrappedV2Document,
    SUPPORTED_SIGNING_ALGORITHM,
} from '@tradetrust-tt/tradetrust-core'

const document = {
    // raw tradetrust v2 document with dns-did as identitify proof
} as any

async function start() {
    // wrapping the raw v2 document
    const wrappedDocuments = wrapDocumentsV2([document])
    const wrappedDocument = wrappedDocuments[0]

    // signing with public and private key
    const signedDocument = await signDocument(
        wrappedDocument,
        SUPPORTED_SIGNING_ALGORITHM.Secp256k1VerificationKey2018,
        {
            public: 'did:ethr:<your_wallet_address>#controller',
            private: '<your_private_key>',
        }
    )

    // signed document
    console.log(signedDocument)
    // check if the document has already wrapped and signed
    console.log(isSignedWrappedV2Document(signedDocument))
}

start()
```

#### Deploying Document Store

This example provides how to deploy trandetrust [document-store](https://docs.tradetrust.io/docs/topics/introduction/verifiable-documents/document-store/) to issue and revoke verifiable documents. Replace the values for `<your_private_key>` and `<your_provider_url>` accordingly.

```ts
import { DocumentStoreFactory } from '@tradetrust-tt/tradetrust-core'
import { Wallet, ethers } from 'ethers'

async function start() {
    // preparing the wallet
    const unconnectedWallet = new Wallet('<your_private_key>')
    const provider = new ethers.providers.JsonRpcProvider(
        '<your_placeholder_url>'
    )
    const wallet = unconnectedWallet.connect(provider)

    // document store deployment
    const docStoreFactory = new DocumentStoreFactory(wallet)
    const ownerAddr = wallet.getAddress()
    const transaction = await docStoreFactory.deploy('my doc store', ownerAddr)
    const receipt = await transaction.deployTransaction.wait()

    // new document store address
    console.log(receipt.contractAddress)
}

start()
```

#### Wrapping, Issuing and Revoking of the Verifiable Document

This example provides how to wrap the [raw verifiable document](https://docs.tradetrust.io/docs/tutorial/verifiable-documents/advanced/document-store/raw-document) and issue the tradetrust verifiable document using the existing [document store](https://docs.tradetrust.io/docs/topics/introduction/verifiable-documents/document-store/). After successfully issued, transaction hash will be displayed and the wrappedDocument should be successfully [verified](#verifying). Replace the placeholders `<your_private_key>`, `<your_provider_url>` and `<document_store_address>` accordingly.

```ts
import {
    connectDocumentStore,
    wrapDocumentsV2,
} from '@tradetrust-tt/tradetrust-core'
import { Wallet, ethers } from 'ethers'
const document = {
    // raw tradetrust verifiable v2 document with dns-txt as identity proof
} as any

async function start() {
    // wrapping the raw v2 document
    const wrappedDocuments = wrapDocumentsV2([document])
    const wrappedDocument = wrappedDocuments[0]
    const documentHash = wrappedDocument.signature.targetHash

    // preparing the wallet
    const unconnectedWallet = new Wallet('<your_private_key>')
    const provider = new ethers.providers.JsonRpcProvider('<your_provider_url>')
    const wallet = unconnectedWallet.connect(provider)

    // connect to existing document store
    const docStoreAddr = '<document_store_address>'
    const docStore = await connectDocumentStore(docStoreAddr, wallet)

    // issue the document
    const transaction = await docStore.issue(`0x${documentHash}`)
    const receipt = await transaction.wait()

    // transaction hash
    console.log(receipt.transactionHash)
    // issued document, which can be verified
    console.log(console.log(JSON.stringify(wrappedDocument)))
}

start()
```

After the document is issued on document store, we can [revoke](https://docs.tradetrust.io/docs/tutorial/verifiable-documents/advanced/document-store/revoking-document/revoking-document-cli) the document. Replace the `<document_store_address>` with the address of the document store that the document is issued and the `<document_hash>` with the `targetHash` or `merkleRoot` of the document.

```ts
const docStore = await connectDocumentStore('<document_store_address>', wallet)
const transaction = await docStore.revoke(`<document_hash>`)
const receipt = await transaction.wait()
// transaction hash
console.log(receipt.transactionHash)
```

Document Store also provides a list of functions to get the state of document or manage ownership of the document store.

```
documentIssued
documentRevoked
isOwner
name
owner
renounceOwnership
transferOwnership
version
initialize
issue
bulkIssue
getIssuedBlock
isIssued
isIssuedBefore
revoke
bulkRevoke
isRevoked
isRevokedBefore
```

#### Deploying Token Registry

This example provides how to deploy tradetrust standard token-registry for [transferrable records](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview/). It requires less gas compared to [standalone deployment](#deploying-standalone-token-registry), as it uses deployer and implementation addresses for deployment. Replace the values for `<your_private_key>` and `<your_provider_url>` with your wallet private key and the JSON RPC url for desired network accordingly. Currently, it supports the following networks.

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
import { Wallet, ethers } from 'ethers'

async function start() {
    // preparing the wallet
    const unconnectedWallet = new Wallet('<your_private_key>')
    const provider = new ethers.providers.JsonRpcProvider('<your_provider_url>')
    const wallet = unconnectedWallet.connect(provider)
    const walletAddress = await wallet.getAddress()
    const chainId = await wallet.getChainId()

    // deploy standard token registry
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

    // new token registry contract address
    console.log(registryAddress)
}
start()
```

#### Deploying Standalone Token Registry

This example provides how to deploy tradetrust standalone token-registry for [transferrable records](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview/). Replace the values for `<your_private_key>` and `<your_provider_url>` with your wallet private key and the JSON RPC url for desired network accordingly. It works on all the [supported networks](https://docs.tradetrust.io/docs/topics/introduction/supported-network/#tradetrust-supported-networks).

```ts
import {
    TradeTrustToken__factory,
    TOKEN_REG_CONSTS,
} from '@tradetrust-tt/tradetrust-core'
import { Wallet, ethers } from 'ethers'

async function start() {
    const unconnectedWallet = new Wallet('<your_private_key>')
    const provider = new ethers.providers.JsonRpcProvider('<your_provider_url>')
    const wallet = unconnectedWallet.connect(provider)
    const tokenFactory = new TradeTrustToken__factory(wallet)
    const CHAIN_ID = await wallet.getChainId()
    // get the title escrow factory address for each network
    const TitleEscrowFactory =
        TOKEN_REG_CONSTS.contractAddress.TitleEscrowFactory[CHAIN_ID]
    const tokenRegistry = await tokenFactory.deploy(
        'DemoTokenRegistry',
        'DTR',
        TitleEscrowFactory
    )
    const registryAddress = tokenRegistry.address
    // new standalone token registry contract address
    console.log(registryAddress)
}
start()
```

#### Wrapping and Minting of Transferrable Record

This example provides how to wrap the [raw transferrable document](https://docs.tradetrust.io/docs/tutorial/transferable-records/raw-document) and mint the tradetrust token for [transferrable record](https://docs.tradetrust.io/docs/tutorial/transferable-records/overview/) using the existing token registry address. Replace the place holders `<your_private_key>`, `<your_provider_url>`, `<token_registry_address>`, `<beneficiary_address>` and `<holder_address>` accordingly. After successfully minted, transaction hash will be displayed and the wrappedDocument should be successfully [verified](#verifying).

```ts
import { TradeTrustToken__factory } from '@tradetrust-tt/tradetrust-core'
import { Wallet, ethers } from 'ethers'

async function start() {
    const document = {
        // raw tradetrust transferable v2 document with dns-txt as identitify proof
    } as any

    // wrapping tradetrust v2 document
    const wrappedDocuments = wrapDocumentsV2([document])
    const wrappedDocument = wrappedDocuments[0]
    const tokenId = wrappedDocument.signature.targetHash

    // preparing the wallet
    const unconnectedWallet = new Wallet('<your_private_key>')
    const provider = new ethers.providers.JsonRpcProvider('<your_provider_url>')
    const wallet = unconnectedWallet.connect(provider)

    // connect to the existing token registry
    const connectedTokenReg = TradeTrustToken__factory.connect(
        '<token_registry_address>',
        wallet
    )
    // minting the document
    const transaction = await connectedTokenReg.mint(
        '<beneficiary_address>',
        '<holder_address>',
        tokenId
    )
    console.log(`Waiting for transaction ${transaction.hash} to be completed`)
    const receipt = await transaction.wait()

    // transaction hash
    console.log(receipt.transactionHash)
    // minted document, which should be able to verified
    console.log(wrappedDocument)
}

start()
```

#### Managing the Ownership of Transferable Record

The examples in this section demonstrate how to manage and represent the ownership of a TradeTrust token between a beneficiary and holder for [Title Transfer](https://docs.tradetrust.io/docs/topics/introduction/transferable-records/title-transfer), and eventually surrender the document. During [minting](#minting-of-transferrable-record), the [Token Registry](https://docs.tradetrust.io/docs/topics/appendix/glossary/#token-registry) will create [Title Escrow](https://docs.tradetrust.io/docs/topics/introduction/transferable-records/title-transfer/#title-escrow) with initial owner and holder. In order to do the title transfer, we will need to connect to the titleEscrow first.

```ts
import { connectToTitleEscrow } from '@tradetrust-tt/tradetrust-core'
import { Wallet, ethers } from 'ethers'

const unconnectedWallet = new Wallet('<your_private_key>')
const provider = new ethers.providers.JsonRpcProvider('<your_provider_url>')
const wallet = unconnectedWallet.connect(provider)

const tokenId = '<your_token_id>'
const tokenRegAddress = '<your_token_registry_address>'
const titleEscrow = await connectToTitleEscrow({
    tokenRegAddress,
    address,
    wallet,
})
```

After getting the titleEscrow, we can call the following methods to change the ownership of the tradetrust token.

`nominate`

Allow the owner of the transferable record to nominate a new owner. After nomination,
the holder need to endorse with transferBeneficiary method.

```ts
const transaction = await titleEscrow.nominate(beneficiaryNomineeAddress)
await transaction.wait()
```

`transferBeneficiary`

Allow the holder of the transferable record to endorse the transfer to new owner who is being nominated by the current owner.
If you are both the owner and holder, the change of ownership can happen without nomination.

```ts
const transaction = await titleEscrow.transferBeneficiary(
    beneficiaryNomineeAddress
)
await transaction.wait()
```

`transferHolder`

Allow the holder of the transferable record to change its holder.

```ts
const transaction = await titleEscrow.transferHolder(newHolderAddress)
await transaction.wait()
```

`transferOwners`

Allow the entity (who is both an owner and holder) to change to the new owner and holder of the document

```ts
const transaction = await titleEscrow.transferOwners(
    beneficiaryNomineeAddress,
    newHolderAddress
)
await transaction.wait()
```

`surrender`

Allow the entity (who is both an owner and holder) to surrender it's transferable record to the issuer of the token registry at the end of it's life cycle.

```ts
const transaction = await titleEscrow.surrender()
await transaction.wait()
```

After the the transferable record is surrendered by the owner, the issuer of the token registry need to accept or reject that surrender.
Reference [here](#wrapping-and-minting-of-transferrable-record) on how to get the connected registry.

`restore`

Allow the issuer of the token registry to reject the surrender.

```ts
const transaction = await connectedTokenReg.restore(tokenId)
await transaction.wait()
```

`burn`

Allow the issuer of the token registry to accept the surrender and burn the document.

```ts
const transaction = await connectedTokenReg.burn(tokenId)
await transaction.wait()
```

#### Managing Role and Access for Token Registry

Roles are useful for granting users to access certain functions only on existing token registry. A trusted user can be granted multiple roles by the admin user to perform different operations. This example provides how to use `grantRole` and `revokeRole` methods, which can be called on the existing token registry by the admin user to grant and revoke roles to and from users.
Replace `<user_address>` with the actual address of the user.

```ts
import { TOKEN_REG_CONSTS } from '@tradetrust-tt/tradetrust-core'

// granting minter role to specific user
await tokenRegistry.grantRole(
    TOKEN_REG_CONSTS.roleHash.MinterRole,
    '<user_address>'
)

// revoking accepter role from specific user
await tokenRegistry.revokeRole(
    TOKEN_REG_CONSTS.roleHash.AccepterRole,
    '<user_address>'
)
```

Currently, here are the designated roles meant for the different key operations.

| Role           | Access                              |
| -------------- | ----------------------------------- |
| `DefaultAdmin` | Able to perform all operations      |
| `MinterRole`   | Able to mint new tokens             |
| `AccepterRole` | Able to accept a surrendered token  |
| `RestorerRole` | Able to restore a surrendered token |

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

#### `connectDocumentStore`

connect to the existing document store

## Contributing

We welcome contributions to the TradeTrust core library. Please feel free to submit a pull request or open an issue.
