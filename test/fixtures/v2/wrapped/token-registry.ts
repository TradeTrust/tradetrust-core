import { SchemaId, WrappedDocument, v2 } from '@tradetrust-tt/tradetrust'

interface CustomDocument extends v2.OpenAttestationDocument {
    recipient: {
        name: string
    }
}

export const tokenRegistryMinted: WrappedDocument<CustomDocument> = {
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
