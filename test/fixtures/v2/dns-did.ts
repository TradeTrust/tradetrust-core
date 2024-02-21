import {
    SchemaId,
    SignedWrappedDocument,
    WrappedDocument,
    v2,
} from '@tradetrust-tt/tradetrust'
import { RevocationType } from '@tradetrust-tt/tradetrust/dist/types/__generated__/schema.2.0'

interface CustomDocument extends v2.OpenAttestationDocument {
    recipient: {
        name: string
    }
}

export const dnsDidSigned: SignedWrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        recipient: {
            name: 'c84cfdbe-1c0b-4054-96b5-b47f3a2e8d54:string:John Doe',
        },
        $template: {
            name: '6a251ceb-eaef-4d0c-b12d-6cdcd65bb99a:string:main',
            type: '6bd991b7-9577-4619-81b4-ec7ba837e09d:string:EMBEDDED_RENDERER',
            url: '4c29c7df-a84f-4415-8b78-793d852164a2:string:https://tutorial-renderer.openattestation.com',
        },
        issuers: [
            {
                id: '41393850-42d7-4555-be18-c422c25faccb:string:did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7',
                name: 'd21dd4c4-493a-44ac-ba6c-4ccca772d0cc:string:Demo Issuer',
                revocation: {
                    type: '79404e49-d587-4438-b6a2-b799cc306e3b:string:NONE' as v2.RevocationType,
                },
                identityProof: {
                    type: 'abbb99fa-98cb-42d0-bc3f-4500623146ad:string:DNS-DID',
                    location:
                        'becf6fed-784b-4871-a96d-9f0c7936d7b3:string:example.tradetrust.io',
                    key: '19600faf-b8eb-47d7-be35-ccf3923494b3:string:did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7#controller',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '229f6c1a45e3ca687d1ffcd98283e1199e22d264f212821d1c23c7c09983108e',
        proof: [],
        merkleRoot:
            '229f6c1a45e3ca687d1ffcd98283e1199e22d264f212821d1c23c7c09983108e',
    },
    proof: [
        {
            type: 'OpenAttestationSignature2018',
            created: '2024-02-20T03:57:40.810Z',
            proofPurpose: 'assertionMethod',
            verificationMethod:
                'did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7#controller',
            signature:
                '0xea27eee0c6d12aabf7d823321b48cf45d04bc761daed9e132de988199b874a3e5275e166b4f84858372b9a3e83242898872897bc4bf8f5b79c5754cd43067e141c',
        },
    ],
}
export const dnsDidUnSigned: WrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        recipient: {
            name: 'c84cfdbe-1c0b-4054-96b5-b47f3a2e8d54:string:John Doe',
        },
        $template: {
            name: '6a251ceb-eaef-4d0c-b12d-6cdcd65bb99a:string:main',
            type: '6bd991b7-9577-4619-81b4-ec7ba837e09d:string:EMBEDDED_RENDERER',
            url: '4c29c7df-a84f-4415-8b78-793d852164a2:string:https://tutorial-renderer.openattestation.com',
        },
        issuers: [
            {
                id: '41393850-42d7-4555-be18-c422c25faccb:string:did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7',
                name: 'd21dd4c4-493a-44ac-ba6c-4ccca772d0cc:string:Demo Issuer',
                revocation: {
                    type: '79404e49-d587-4438-b6a2-b799cc306e3b:string:NONE' as RevocationType,
                },
                identityProof: {
                    type: 'abbb99fa-98cb-42d0-bc3f-4500623146ad:string:DNS-DID',
                    location:
                        'becf6fed-784b-4871-a96d-9f0c7936d7b3:string:example.tradetrust.io',
                    key: '19600faf-b8eb-47d7-be35-ccf3923494b3:string:did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7#controller',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '229f6c1a45e3ca687d1ffcd98283e1199e22d264f212821d1c23c7c09983108e',
        proof: [],
        merkleRoot:
            '229f6c1a45e3ca687d1ffcd98283e1199e22d264f212821d1c23c7c09983108e',
    },
}

export const dnsDidSignedAndTampered: SignedWrappedDocument<CustomDocument> = {
    version: SchemaId.v2,
    data: {
        recipient: {
            name: 'c84cfdbe-1c0b-4054-96b5-b47f3a2e8d54:string:John Doe 123',
        },
        $template: {
            name: '6a251ceb-eaef-4d0c-b12d-6cdcd65bb99a:string:main',
            type: '6bd991b7-9577-4619-81b4-ec7ba837e09d:string:EMBEDDED_RENDERER',
            url: '4c29c7df-a84f-4415-8b78-793d852164a2:string:https://tutorial-renderer.openattestation.com',
        },
        issuers: [
            {
                id: '41393850-42d7-4555-be18-c422c25faccb:string:did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7',
                name: 'd21dd4c4-493a-44ac-ba6c-4ccca772d0cc:string:Demo Issuer',
                revocation: {
                    type: '79404e49-d587-4438-b6a2-b799cc306e3b:string:NONE' as v2.RevocationType,
                },
                identityProof: {
                    type: 'abbb99fa-98cb-42d0-bc3f-4500623146ad:string:DNS-DID',
                    location:
                        'becf6fed-784b-4871-a96d-9f0c7936d7b3:string:example.tradetrust.io',
                    key: '19600faf-b8eb-47d7-be35-ccf3923494b3:string:did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7#controller',
                },
            },
        ],
    },
    signature: {
        type: 'SHA3MerkleProof',
        targetHash:
            '229f6c1a45e3ca687d1ffcd98283e1199e22d264f212821d1c23c7c09983108e',
        proof: [],
        merkleRoot:
            '229f6c1a45e3ca687d1ffcd98283e1199e22d264f212821d1c23c7c09983108e',
    },
    proof: [
        {
            type: 'OpenAttestationSignature2018',
            created: '2024-02-20T03:57:40.810Z',
            proofPurpose: 'assertionMethod',
            verificationMethod:
                'did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7#controller',
            signature:
                '0xea27eee0c6d12aabf7d823321b48cf45d04bc761daed9e132de988199b874a3e5275e166b4f84858372b9a3e83242898872897bc4bf8f5b79c5754cd43067e141c',
        },
    ],
}
