import shell from 'shelljs'

const TT_CLI_PATH = 'tradetrust'
const ACCOUNT_KEY =
    '0xe82294532bcfcd8e0763ee5cef194f36f00396be59b94fb418f5f8d83140d9a7'
const TOKEN_REGISTRY_ADDRESS = '0x9Eb613a88534E2939518f4ffBFE65F5969b491FF'
const DOCUMENT_STORE_ADDRESS = '0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953'
const TITLE_ESCROW_FACTORY_ADDRESS =
    '0x63A223E025256790E88778a01f480eBA77731D04'

// const ACCOUNT_ADDR = '0xe0A71284EF59483795053266CB796B65E48B5124'
// const ISSUER_DNS = 'minhtetoo.lol'

const issuedMerkleRoot = [
    '0x56a72ab0a30bef3d6fb767d16f66a854a21624739a773b590a2381d68eea9468', // issued correctly
    '0x8db570494b2beeea4e6431f2f7abda199f676ae50c2a7bb4a0d0c548da0952df', // revoked
    '0xba891dc3da5db9155ec370bb80f17b8fbe115893feb4337a3e321fd2300ea9b0', // invalid dns
    '0x1249f84c06bddebc947022569b77f6b30cdc9bff53fda9700ef2a8cc30e7dcc5', // incorrect document store
]

const revokedMerkleRoot = [
    '0x8db570494b2beeea4e6431f2f7abda199f676ae50c2a7bb4a0d0c548da0952df',
]

shell.exec(
    `${TT_CLI_PATH} deploy title-escrow-factory -n local -k ${ACCOUNT_KEY}`
)

shell.exec(
    `${TT_CLI_PATH} deploy token-registry "DEMO TOKEN REGISTRY" DTR -n local -k ${ACCOUNT_KEY} --factory-address ${TITLE_ESCROW_FACTORY_ADDRESS} --standalone`
)

shell.exec(
    `${TT_CLI_PATH} deploy document-store "test document store" --network local -k ${ACCOUNT_KEY}`
)

issuedMerkleRoot.forEach((ele) => {
    shell.exec(
        `${TT_CLI_PATH} document-store issue --address ${DOCUMENT_STORE_ADDRESS} --hash ${ele}  --network local --k ${ACCOUNT_KEY}`
    )
})
revokedMerkleRoot.forEach((ele) => {
    shell.exec(
        `${TT_CLI_PATH} document-store revoke --address ${DOCUMENT_STORE_ADDRESS} --hash ${ele}  --network local --k ${ACCOUNT_KEY}`
    )
})
