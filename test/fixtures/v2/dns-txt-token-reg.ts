import { SchemaId, WrappedDocument, v2 } from '@tradetrust-tt/tradetrust'

interface CustomDocument extends v2.OpenAttestationDocument {
    recipient: {
        name: string
    }
}

export const dnsTxtTokenRegIncorrectTokenReg: WrappedDocument<CustomDocument> =
    {
        version: SchemaId.v2,
        data: {
            $template: {
                name: 'a4fe54c9-6da2-459a-9fe3-f11d2ecca24f:string:main',
                type: '236e2694-c949-428c-b105-bed1a6d68c16:string:EMBEDDED_RENDERER',
                url: '387c1469-2c28-4da7-9787-0e1fcfb7b963:string:https://tutorial-renderer.openattestation.com',
            },
            recipient: {
                name: '1fac4b24-9720-4945-b5b9-2fecacc9e947:string:John Doe',
            },
            issuers: [
                {
                    name: '464bfbbe-9b41-4c63-967c-e90ceea2f43b:string:Demo Issuer',
                    tokenRegistry:
                        'd204a475-42ef-4044-b9cd-ff53f8f3ab45:string:0x1Fb613a88534E2939518f4ffBFE65F5969b491FF',
                    identityProof: {
                        type: '581497a4-4d1d-4426-b0e4-199dc29634f9:string:DNS-TXT',
                        location:
                            'bd2a2f65-50f6-42d2-9f0d-387c455f24e7:string:example.tradetrust.io',
                    },
                },
            ],
        },
        signature: {
            type: 'SHA3MerkleProof',
            targetHash:
                '82de42fe0d4dc965546a08f0555a33d66f25192f8121dab54b0a8d213a984a81',
            proof: [],
            merkleRoot:
                '82de42fe0d4dc965546a08f0555a33d66f25192f8121dab54b0a8d213a984a81',
        },
    }

export const dnsTxtTokenRegIncorrectDNS: WrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        $template: {
            name: '795c6391-b05a-455c-96f0-2664faeb0f7b:string:main',
            type: '2fb67d3c-fd76-4759-9b5a-ca1c6026a6ef:string:EMBEDDED_RENDERER',
            url: '72fc5787-d5fe-4a07-8d62-e8cc0b94060b:string:https://tutorial-renderer.openattestation.com',
        },
        recipient: {
            name: '7454e768-af43-45aa-9a33-40ccbffc0e54:string:John Doe',
        },
        issuers: [
            {
                name: 'a202c60d-687b-451f-92b9-8d8f36f78658:string:Demo Issuer',
                tokenRegistry:
                    'c2c76af8-2914-42b5-9ae2-1064d366d1d6:string:0x9Eb613a88534E2939518f4ffBFE65F5969b491FF',
                identityProof: {
                    type: 'f567358b-7bad-4d38-9aa9-005cefbea1b1:string:DNS-TXT',
                    location:
                        'ad38dca4-07dd-481d-b0e5-ca67dd751450:string:example123.tradetrust.io',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '26a31b2d50a79a6e7966227714bc1e7e2fd31f6bfdf5ac8066a3b9c01046c35b',
        proof: [],
        merkleRoot:
            '26a31b2d50a79a6e7966227714bc1e7e2fd31f6bfdf5ac8066a3b9c01046c35b',
    },
}

export const dnsTxtTokenRegTampered: WrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        $template: {
            name: '65deecd5-b41f-408c-b2ee-7f2561f32502:string:main',
            type: 'a8cdd6cd-e0bd-4b1b-9de3-63c49d66e226:string:EMBEDDED_RENDERER',
            url: '060acff7-fca4-4c3d-ac2e-b9d70a031924:string:https://tutorial-renderer.openattestation.com',
        },
        recipient: {
            name: '24d1e2cf-e245-4fca-b8b4-76f4ad61c7b6:string:John Doe123',
        },
        issuers: [
            {
                name: '1b949346-fc02-404f-94ff-a3b0a442141c:string:Demo Issuer',
                tokenRegistry:
                    '9c9e8d16-aaa0-40ca-8633-f61e2f2d3b81:string:0x9Eb613a88534E2939518f4ffBFE65F5969b491FF',
                identityProof: {
                    type: 'd1d58014-31af-45cc-a1c2-2b48022a0cb7:string:DNS-TXT',
                    location:
                        '195e5963-b6ed-440a-9e31-1f52f41df24f:string:example.tradetrust.io',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '8b59f2f2792f802e15c7ecfc44eb4e5a8da3ce830c1c53faaafbab9de5812bdb',
        proof: [],
        merkleRoot:
            '8b59f2f2792f802e15c7ecfc44eb4e5a8da3ce830c1c53faaafbab9de5812bdb',
    },
}

export const dnsTxtTokenRegMinted: WrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        $template: {
            name: '65deecd5-b41f-408c-b2ee-7f2561f32502:string:main',
            type: 'a8cdd6cd-e0bd-4b1b-9de3-63c49d66e226:string:EMBEDDED_RENDERER',
            url: '060acff7-fca4-4c3d-ac2e-b9d70a031924:string:https://tutorial-renderer.openattestation.com',
        },
        recipient: {
            name: '24d1e2cf-e245-4fca-b8b4-76f4ad61c7b6:string:John Doe',
        },
        issuers: [
            {
                name: '1b949346-fc02-404f-94ff-a3b0a442141c:string:Demo Issuer',
                tokenRegistry:
                    '9c9e8d16-aaa0-40ca-8633-f61e2f2d3b81:string:0x9Eb613a88534E2939518f4ffBFE65F5969b491FF',
                identityProof: {
                    type: 'd1d58014-31af-45cc-a1c2-2b48022a0cb7:string:DNS-TXT',
                    location:
                        '195e5963-b6ed-440a-9e31-1f52f41df24f:string:example.tradetrust.io',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '8b59f2f2792f802e15c7ecfc44eb4e5a8da3ce830c1c53faaafbab9de5812bdb',
        proof: [],
        merkleRoot:
            '8b59f2f2792f802e15c7ecfc44eb4e5a8da3ce830c1c53faaafbab9de5812bdb',
    },
}

export const dnsTxttokenRegNotMinted: WrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        $template: {
            name: '5c59bd33-5fba-4904-ad73-a6423993a1e3:string:main',
            type: 'dbcd76ba-4c5e-43d8-8b0d-47f90c7d7492:string:EMBEDDED_RENDERER',
            url: 'e78f3c82-9be6-4c9f-83dc-2817988c17bb:string:https://tutorial-renderer.openattestation.com',
        },
        recipient: {
            name: 'a5964e36-318e-40aa-b49e-a06131a74730:string:John Doe',
        },
        issuers: [
            {
                name: '47e0a10d-7b3e-4308-a865-3fae07c164f1:string:Demo Issuer',
                tokenRegistry:
                    '8df433de-fb6b-4d13-afe5-feedc8bf48ef:string:0x9Eb613a88534E2939518f4ffBFE65F5969b491FF',
                identityProof: {
                    type: 'b05dea77-c7ed-40a8-a5b0-7d9315e6d1a6:string:DNS-TXT',
                    location:
                        'b9d5f684-80ba-4cda-bd94-cec907931d09:string:example.tradetrust.io',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '1d24bc3377f39cd66ef196796236ced7eecec87571a857f2c309fd853834837d',
        proof: [],
        merkleRoot:
            '1d24bc3377f39cd66ef196796236ced7eecec87571a857f2c309fd853834837d',
    },
}
