import { SchemaId, WrappedDocument, v2 } from '@tradetrust-tt/tradetrust'

interface CustomDocument extends v2.OpenAttestationDocument {
    recipient: {
        name: string
    }
}

interface CustomDocumentObfuscated extends v2.OpenAttestationDocument {}

export const dnsTxtDocStore: WrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        $template: {
            name: '456f5ada-b199-4012-b359-ad689d3a5df6:string:main',
            type: 'a8b58b42-cd8c-4da5-ad83-fc0a71e342d0:string:EMBEDDED_RENDERER',
            url: '92c32eb4-5119-4707-8c43-a4a4411d62ca:string:https://tutorial-renderer.openattestation.com',
        },
        recipient: {
            name: '3728fb07-d41b-47c6-b3c4-c2165cb76f3e:string:John Doe',
        },
        issuers: [
            {
                name: 'ea308a68-db59-422f-8da3-a37788f0fcd1:string:Demo Issuer',
                documentStore:
                    'af1be992-cf0e-477d-b5f2-a847c12289dd:string:0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
                identityProof: {
                    type: '5947b4b6-0d4e-4bef-9d50-5aee88f3783b:string:DNS-TXT',
                    location:
                        '5e0eba02-56ae-46a1-9c99-4008578cbe96:string:example.tradetrust.io',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '56a72ab0a30bef3d6fb767d16f66a854a21624739a773b590a2381d68eea9468',
        proof: [],
        merkleRoot:
            '56a72ab0a30bef3d6fb767d16f66a854a21624739a773b590a2381d68eea9468',
    },
}

export const dnsTxtDocStoreTampered: WrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        $template: {
            name: '456f5ada-b199-4012-b359-ad689d3a5df6:string:main',
            type: 'a8b58b42-cd8c-4da5-ad83-fc0a71e342d0:string:EMBEDDED_RENDERER',
            url: '92c32eb4-5119-4707-8c43-a4a4411d62ca:string:https://tutorial-renderer.openattestation.com',
        },
        recipient: {
            name: '3728fb07-d41b-47c6-b3c4-c2165cb76f3e:string:John Doe123',
        },
        issuers: [
            {
                name: 'ea308a68-db59-422f-8da3-a37788f0fcd1:string:Demo Issuer',
                documentStore:
                    'af1be992-cf0e-477d-b5f2-a847c12289dd:string:0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
                identityProof: {
                    type: '5947b4b6-0d4e-4bef-9d50-5aee88f3783b:string:DNS-TXT',
                    location:
                        '5e0eba02-56ae-46a1-9c99-4008578cbe96:string:example.tradetrust.io',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '56a72ab0a30bef3d6fb767d16f66a854a21624739a773b590a2381d68eea9468',
        proof: [],
        merkleRoot:
            '56a72ab0a30bef3d6fb767d16f66a854a21624739a773b590a2381d68eea9468',
    },
}

export const dnsTxtDocStoreRevoked: WrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        $template: {
            name: '972df188-c53c-4c30-ac89-06e0c4dced2a:string:main',
            type: '423b0d90-246b-46e0-9e79-22cf1be59f65:string:EMBEDDED_RENDERER',
            url: 'cb067340-ba6b-4d78-b190-4e33385770dc:string:https://tutorial-renderer.openattestation.com',
        },
        recipient: {
            name: 'b9f4c31b-fe8a-4d17-9248-1aa9dfe15b34:string:John Doe',
        },
        issuers: [
            {
                name: '36f6164a-ae7b-4fb1-9a0f-14be44b887af:string:Demo Issuer',
                documentStore:
                    '2caad7b5-a48b-4163-9d0d-0eb00b21c29c:string:0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
                identityProof: {
                    type: 'a01aea55-bf30-468b-89bf-6d4c7ea4e8ae:string:DNS-TXT',
                    location:
                        '2e984e1e-3323-40bb-b1c8-808658a977c9:string:example.tradetrust.io',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '8db570494b2beeea4e6431f2f7abda199f676ae50c2a7bb4a0d0c548da0952df',
        proof: [],
        merkleRoot:
            '8db570494b2beeea4e6431f2f7abda199f676ae50c2a7bb4a0d0c548da0952df',
    },
}

export const dnsTxtDocStoreIncorrectDNS: WrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        $template: {
            name: '8650ba19-cce3-43b6-a966-ee4f8fc6485a:string:main',
            type: '20a3fa71-a25c-425d-9d67-31d147c4e996:string:EMBEDDED_RENDERER',
            url: '9f775314-bcfa-4069-b330-1dffcb2e3615:string:https://tutorial-renderer.openattestation.com',
        },
        recipient: {
            name: '9a037b55-2717-474f-821d-845aa4b7b054:string:John Doe',
        },
        issuers: [
            {
                name: '18322448-990c-45d0-961b-9e6c333ec5ef:string:Demo Issuer',
                documentStore:
                    'b08f8a5e-36ee-4008-bce6-9c8098eeaf2f:string:0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
                identityProof: {
                    type: '91fa0cf3-ec4e-409a-b934-38e6f21e3c39:string:DNS-TXT',
                    location:
                        'd3be6135-2c5f-40bd-ac20-a4f03b497504:string:example123.tradetrust.io',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            'ba891dc3da5db9155ec370bb80f17b8fbe115893feb4337a3e321fd2300ea9b0',
        proof: [],
        merkleRoot:
            'ba891dc3da5db9155ec370bb80f17b8fbe115893feb4337a3e321fd2300ea9b0',
    },
}

export const dnsTxtDocStoreObfuscated: WrappedDocument<CustomDocumentObfuscated> =
    {
        version: SchemaId.v2,
        data: {
            $template: {
                name: '456f5ada-b199-4012-b359-ad689d3a5df6:string:main',
                type: 'a8b58b42-cd8c-4da5-ad83-fc0a71e342d0:string:EMBEDDED_RENDERER',
                url: '92c32eb4-5119-4707-8c43-a4a4411d62ca:string:https://tutorial-renderer.openattestation.com',
            },
            issuers: [
                {
                    name: 'ea308a68-db59-422f-8da3-a37788f0fcd1:string:Demo Issuer',
                    documentStore:
                        'af1be992-cf0e-477d-b5f2-a847c12289dd:string:0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
                    identityProof: {
                        type: '5947b4b6-0d4e-4bef-9d50-5aee88f3783b:string:DNS-TXT',
                        location:
                            '5e0eba02-56ae-46a1-9c99-4008578cbe96:string:example.tradetrust.io',
                    },
                },
            ],
        },
        signature: {
            type: 'SHA3MerkleProof',
            targetHash:
                '56a72ab0a30bef3d6fb767d16f66a854a21624739a773b590a2381d68eea9468',
            proof: [],
            merkleRoot:
                '56a72ab0a30bef3d6fb767d16f66a854a21624739a773b590a2381d68eea9468',
        },
        privacy: {
            obfuscatedData: [
                '8c5c965edb2e14df766ad1e77822428d2cbf2d2d761f7c36a5801deaa971fe83',
            ],
        },
    }

export const dnsTxtDocStoreIncorrectDocumentStore: WrappedDocument<CustomDocument> =
    {
        version: SchemaId.v2,
        data: {
            $template: {
                name: '780fdc2c-d385-46c3-8abc-cb72b412d98f:string:main',
                type: 'f14b2cc9-2965-464a-b734-7235290016ff:string:EMBEDDED_RENDERER',
                url: '5344265c-edb6-4700-800e-ea1625d8c3ab:string:https://tutorial-renderer.openattestation.com',
            },
            recipient: {
                name: 'c48268db-6655-41e0-b657-247b5e2ce973:string:John Doe',
            },
            issuers: [
                {
                    name: '45ad3669-3dd8-47f2-864b-7d4e011ac8ea:string:Demo Issuer',
                    documentStore:
                        '91efd177-638f-474c-852f-d8c333c949a9:string:0x5Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
                    identityProof: {
                        type: '093ff56d-05db-4ca4-a5cb-f775faa06397:string:DNS-TXT',
                        location:
                            '7382f992-2c4f-42d4-96d0-469b32b0a9ee:string:example123.tradetrust.io',
                    },
                },
            ],
        },
        signature: {
            type: 'SHA3MerkleProof',
            targetHash:
                '920d98cd370552fa42013782bccd1b3ca23424d11b81f3d1850de3a65ce6fd82',
            proof: [],
            merkleRoot:
                '920d98cd370552fa42013782bccd1b3ca23424d11b81f3d1850de3a65ce6fd82',
        },
    }
