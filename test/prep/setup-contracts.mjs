import shell from 'shelljs'

const TT_CLI_PATH = 'tradetrust'
const ACCOUNT_ADDRESS = '0xe0A71284EF59483795053266CB796B65E48B5124'
const ACCOUNT_KEY =
    '0xe82294532bcfcd8e0763ee5cef194f36f00396be59b94fb418f5f8d83140d9a7'

// const ACCOUNT_DNS_DID_ADDRESS = '0x391aFf3942857a10958425FebF1fC1938D9F5AE7'
// const ACCOUNT_DNS_DID_KEY =
;('0x3760fb287bee810607433485cfa3fc665c2d682a1816991dccce645b096ae19a')
const TOKEN_REGISTRY_ADDRESS = '0x9Eb613a88534E2939518f4ffBFE65F5969b491FF'
const DOCUMENT_STORE_ADDRESS = '0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953'
const TITLE_ESCROW_FACTORY_ADDRESS =
    '0x63A223E025256790E88778a01f480eBA77731D04'

// const ACCOUNT_ADDR = '0xe0A71284EF59483795053266CB796B65E48B5124'
// const ISSUER_DNS = 'minhtetoo.lol'

const issuedMerkleRootVerifiableDocs = [
    // v2 documents
    '0x56a72ab0a30bef3d6fb767d16f66a854a21624739a773b590a2381d68eea9468', // issued correctly
    '0x8db570494b2beeea4e6431f2f7abda199f676ae50c2a7bb4a0d0c548da0952df', // revoked
    '0xba891dc3da5db9155ec370bb80f17b8fbe115893feb4337a3e321fd2300ea9b0', // invalid dns
    '0x1249f84c06bddebc947022569b77f6b30cdc9bff53fda9700ef2a8cc30e7dcc5', // incorrect document store

    // v3 documents
    '660e07e2defb55f04d6715448ac4f9c5718c8115c50ebd8931be15ed61ae8580', // issued correctly
    'eeef582def4ebea8fad684c33f67194f3a922692a3d9b96ca9d90150adf7259c', // revoked
    '3ef17c1a3b5a05395340c7ba30c41fc1a73f3091585fade6401a42eb684944a8', // invalid dns
    'f039e1328ad4a21e7d58d6dab1caea228238bee71080b1364bb6f1097c39b407', // incorrect document store
]

const mintedMerkleRootTransferrableRecord = [
    // v2 documents
    '0x8b59f2f2792f802e15c7ecfc44eb4e5a8da3ce830c1c53faaafbab9de5812bdb', // issued correctly
    '26a31b2d50a79a6e7966227714bc1e7e2fd31f6bfdf5ac8066a3b9c01046c35b', // incorrect dns
    '0x82de42fe0d4dc965546a08f0555a33d66f25192f8121dab54b0a8d213a984a81', //incorrect token reg

    // v3 documents
    '9e4f74864999eed515ebc5ff02a4ee21e2cc99d660690864784055b6aeff04af', // issued correctly
    '3b11827925e0ceb00d4fb7dc8aac83ada4009e70315e8f64a75b75c361318a4f', // incorrect dns
    'f5a2421f4d1bc7081766f025c1f84eb1730837e1d797695942e15920e438498c', // incorrect token reg
]

const revokedMerkleRootVerifiableDocs = [
    '0x8db570494b2beeea4e6431f2f7abda199f676ae50c2a7bb4a0d0c548da0952df', // v3 record
    'eeef582def4ebea8fad684c33f67194f3a922692a3d9b96ca9d90150adf7259c', //v3 record
]
console.log('\n## Deploying Token Registry ##\n')
shell.exec(
    `${TT_CLI_PATH} deploy title-escrow-factory -n local -k ${ACCOUNT_KEY}`
)

shell.exec(
    `${TT_CLI_PATH} deploy token-registry "DEMO TOKEN REGISTRY" DTR -n local -k ${ACCOUNT_KEY} --factory-address ${TITLE_ESCROW_FACTORY_ADDRESS} --standalone`
)

console.log('\n## Deploying Document Store ##\n')
shell.exec(
    `${TT_CLI_PATH} deploy document-store "test document store" --network local -k ${ACCOUNT_KEY}`
)

console.log('\n## Issuing Documents on Document Store ##\n')
issuedMerkleRootVerifiableDocs.forEach((ele) => {
    shell.exec(
        `${TT_CLI_PATH} document-store issue --address ${DOCUMENT_STORE_ADDRESS} --hash ${ele}  --network local --k ${ACCOUNT_KEY}`
    )
})

console.log('\n## Revoking Documents on Document Store ##\n')
revokedMerkleRootVerifiableDocs.forEach((ele) => {
    shell.exec(
        `${TT_CLI_PATH} document-store revoke --address ${DOCUMENT_STORE_ADDRESS} --hash ${ele}  --network local --k ${ACCOUNT_KEY}`
    )
})

console.log('\n## Minting Documents on Token Registry ##\n')
mintedMerkleRootTransferrableRecord.forEach((ele) => {
    shell.exec(
        `${TT_CLI_PATH} token-registry mint --address ${TOKEN_REGISTRY_ADDRESS} --tokenId ${ele} --beneficiary ${ACCOUNT_ADDRESS} --holder ${ACCOUNT_ADDRESS} --network local --k ${ACCOUNT_KEY}`
    )
})
