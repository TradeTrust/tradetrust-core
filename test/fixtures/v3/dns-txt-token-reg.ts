import { SchemaId, v3 } from '@tradetrust-tt/tradetrust'

export const dnsTxtTokenRegIncorrectTokenReg = {
    version: SchemaId.v3,
    '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://schemata.openattestation.com/com/openattestation/1.0/DrivingLicenceCredential.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/CustomContext.json',
    ],
    reference: 'SERIAL_NUMBER_123',
    name: 'Republic of Singapore Driving Licence',
    issuanceDate: '2010-01-01T19:23:24Z',
    validFrom: '2010-01-01T19:23:24Z',
    issuer: {
        id: 'https://example.com',
        type: 'OpenAttestationIssuer',
        name: 'DEMO STORE',
    },
    type: [
        'VerifiableCredential',
        'DrivingLicenceCredential',
        'OpenAttestationCredential',
    ],
    credentialSubject: {
        id: 'did:example:SERIAL_NUMBER_123',
        class: [
            {
                type: '3',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
            {
                type: '3A',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
        ],
    },
    openAttestationMetadata: {
        template: {
            name: 'CUSTOM_TEMPLATE',
            type: 'EMBEDDED_RENDERER',
            url: 'https://localhost:3000/renderer',
        },
        proof: {
            type: 'OpenAttestationProofMethod',
            method: 'TOKEN_REGISTRY',
            value: '0x88b613a88534E2939518f4ffBFE65F5969b491FF',
        },
        identityProof: {
            type: 'DNS-TXT',
            identifier: 'example.tradetrust.io',
        },
    },
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            'f5a2421f4d1bc7081766f025c1f84eb1730837e1d797695942e15920e438498c',
        proofs: [],
        merkleRoot:
            'f5a2421f4d1bc7081766f025c1f84eb1730837e1d797695942e15920e438498c',
        salts: 'W3sidmFsdWUiOiIxOTJmZTU3NDZjNmEwMTMxYWE0YzQyZGZhYTk1ODc4NTE1MDJiN2Q2YjI4NTNhZThjZWQ1OTBjOGM4ODg2MzUwIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiYmM5MTJjMzFkYjM3YjMyYjIwMTRjOTkyOTAyM2IwZmQ4YTk5MzljMTg3ZGNhMGI5M2EyYTY1MzJlNjgwMmFiZiIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI1MzFhYzMyNmQ0MTdlYjViNjMyMzdmNzU2NjQyOWZjZWI4NDZmNDI3NDNkMGFkMWU2MjQzZjkxYmVmNmU1MzljIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6IjYxNGQ5MzJmN2Y2YjY0OWFkNGExNTllNzgwZjYyODU5NmQxOGRmMmRhOGEwNDg3ZGVkMmI4MjljNGM0OWQ0MDEiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiMzMyZTZjNzNjY2UzMjUxZTBiNGE0YzEwZjlmMTM5MjQxMTQ3ZTRmZDEyYjljMDUxOGZkZTU0Yzg2NGEyNzZhNSIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiIwOWE1NmNjMGZhMTY3NDkwZjVkNTkyMTcxNDcwZTYxODljY2MwM2IwNTc4NzMwMWFhZjE0YThlZWRjMGVjY2Q4IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiI1YjM2ZmU1Mjk5N2U3MTM2NTg5NjIwZTFmZWRlMTRmMGFkODYzMDFhYzg0YzIzN2U0MzEyOGE4ZmMyYzBmMThiIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiNjI2Y2E5YjBkYzRkZTBjODI1ZWEzNjAyYmJhNmQzMTRiYTE0YzFkOTI2NmExYmY0OTFiMTJiZTZiMzMzNWJjYyIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiODc3NWVkYzJmYmUyOTNjMGIzZmUwNjk1MjhmMjFjODJmOTk1ZTQ4YmMwOTIyY2JmZjYzODY3OTZiNTUxODBiNiIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiYzk4NzU2Y2ZhZmMwY2YyMGM0ZDliYWYzZDUyMWM0MmQ0MDFkMWE0NTI5Y2ZmZjcwOTNkYjNkZTcyMTRjNDIwYyIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiZjJkYWFmNGIxNDE3MWQxNzFlN2U4NjZlMTQxZjMwNDE0ZTUwNjBjOGU4MDRhNzQ1YmU0MTNiMjgwNDAyMjQyNCIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiJlZTk0MjVhZGY5ZDQwOWUxZjgxYjQ4NWU3YTNiNjg3MWUzN2ZjNzJlOThjMmY3MjFiMmI0MjJmZjgxOTZkNjkzIiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjA3NGUyZjE4Y2Q5ODZiMDM1MDg2MjBmNGU5OGIwNTcxMTdlZTIyNzhhY2ZmZDhmMWY3ZjgwMThkNDMyM2MwMzAiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiI4ZjQ4NWMxZmNhZTA5NmFmNDEwOTE0NzllNDM2OGYwMWI3OGFlOWYxYmIzODE0ZTlmYjI0MjU1OWY2ZDE0N2Y1IiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiYmQ5YmMzNzlmOTg5MzZlMzcwM2RjNWQzMGJiY2NkYjM2ZDFhNmYzOGE4Njg4Y2RmYWM0ZDlkOGY2YWYxMTQ2OSIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6IjI0N2UyMTA0N2RjMjg0NGI1YmI4MzMxYWU0YjFjYzhiNTJmZWM5YzBjOWUxMTNkNzZmOTUwN2UzZDQzOTY2NTciLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiNGYwZjZkYmI0YTdhY2IxZjkzNGFhYThkNmE5YThhOWVjZGM3ZDM5ZWRmM2MyNmYwNmI1ZGUzMDRiMmE1N2MyOCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6IjNhNmQxYmRhYjU0ZDhmYjkyYmQ4NTdhNjFiNTA1MmZmM2IxMmI3NDVmYmYwNjY2MjhjMDgyZTc1OWI2NDdiMWEiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiI4ZGU1NDAzN2YwYzY0NjFjMTJiYmNhMjBlN2QxNTYwNzgxMDBkMzMyN2I2NDlkNWZiYWQ5NjkyY2QxZDY3MTI0IiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiNGZjMzlhMmNjODdlNDg1YjYzYTcxOTUyYjE1N2FjM2Q3Y2MyZDFiNDg1ZjUxOGFlMDNiNjE0ZTFlMjhjMDhkNCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6IjUzNjcwNjlhNGI0MjdhNGYzYzc2N2NjNDIzMDMwYTJjODBkMWUxNTI5ZTUyY2VmODM1YmE3MGUwMTdiYmJjNjMiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiJhYTJkNGMyODQ2MWNjMjJiYjI5ZTVmMmY1OTVkMmNiOTU1MGQ2NDFkZDZhODE1NWMyMzgzZDY1ZDFkNzY0OWVkIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiNDhjMjI1MTVmYjdhOTVhZTFiMWU0YTFhNTExZmM4ZjEwNDk5Y2E2NGM2NTMyYjIzMWEyYTMxODRmODRhNTJjMCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiZDFiOTc2M2QyZWY5NWMyNGU0NTRkMjMwNmRjZmUzNTI1YjA1NTI1ZWVjYjE4MmRkNzAzMzAyMTVmMTQwODIzOCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6IjRiNzFlZDY3MDMxOGY4N2VkY2MzNWRkNGYzZjcxYzJmMDI5MDVlMzhlMjZlMDdhNDk3YWY1ZDQ2ZWY3N2M3ZWEiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6IjE5NGI5ZDliZjY5ZWE3YWQ5MWI0ZWY4YTYwNTVlNWM4YmMwODg4NDNlYTBiZTA1MDU0YjI4NmI5MjZkZGE2YzkiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiODFmOGRhOWRlN2MxNzIzODY5YjNhM2U5M2EwNjY4YWE2YjQ2OWVhZWVmMjU5NmM0ZjI3NmQxY2Q5N2MwMzZmYiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiMzk2MGUzNTRiNDJhMTMwMzhlYTdmZDU4YzE3ODI5OGE4ZjI0ZGJmM2VjY2I1NjY4MWI3MWZjY2U5NDZkY2VlYSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifV0=',
        privacy: {
            obfuscated: [],
        },
    },
} as v3.WrappedDocument

export const dnsTxtTokenRegIncorrectDNS = {
    version: SchemaId.v3,
    '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://schemata.openattestation.com/com/openattestation/1.0/DrivingLicenceCredential.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/CustomContext.json',
    ],
    reference: 'SERIAL_NUMBER_123',
    name: 'Republic of Singapore Driving Licence',
    issuanceDate: '2010-01-01T19:23:24Z',
    validFrom: '2010-01-01T19:23:24Z',
    issuer: {
        id: 'https://example.com',
        type: 'OpenAttestationIssuer',
        name: 'DEMO STORE',
    },
    type: [
        'VerifiableCredential',
        'DrivingLicenceCredential',
        'OpenAttestationCredential',
    ],
    credentialSubject: {
        id: 'did:example:SERIAL_NUMBER_123',
        class: [
            {
                type: '3',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
            {
                type: '3A',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
        ],
    },
    openAttestationMetadata: {
        template: {
            name: 'CUSTOM_TEMPLATE',
            type: 'EMBEDDED_RENDERER',
            url: 'https://localhost:3000/renderer',
        },
        proof: {
            type: 'OpenAttestationProofMethod',
            method: 'TOKEN_REGISTRY',
            value: '0x9Eb613a88534E2939518f4ffBFE65F5969b491FF',
        },
        identityProof: {
            type: 'DNS-TXT',
            identifier: 'example123.tradetrust.io',
        },
    },
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '3b11827925e0ceb00d4fb7dc8aac83ada4009e70315e8f64a75b75c361318a4f',
        proofs: [],
        merkleRoot:
            '3b11827925e0ceb00d4fb7dc8aac83ada4009e70315e8f64a75b75c361318a4f',
        salts: 'W3sidmFsdWUiOiJjYjI0ZjRkYmZkOGVmM2IxMjg3ODNmMzI2MDU1YzY1NzRkMmEwYWY5MjBhMDY2MDAwZjVkN2ZiZDU0M2Q0Y2VmIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiMjg1YmRlMjY2ZWU3NTMwZTRkNDlmYjUyZmJhMWEyYjBhYTEwMTdjMjJjMTVhNzc5ODc5MDRlNzY2NTcyZjFlNiIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiJiNjI3NTI0MWMxNDMxYjNlNmNjOTRkOTg2MGFiMTEzMGIxYzM3MTcyNjNiYzFjMDE3M2Y1ODdlODQ1YTc3NGYxIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6ImNjZjIxZTk5NzlkMzFkYjhkZTU2YjQ4MDYyOWNjMDI3N2Y3YWI1OTY5YzRiNWVlOWMzODQ5ZDk0MTg0ZTUxNWYiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiNjE5OWI3NzgzY2U3N2QzOGM4MTE1MjA4YmI2NWM5MGQ3Njg2NzU1MTkxNGIwNjAzN2NkMTY4ZjFiYjhiOGE3MCIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiJmZmYyZGIxZTRjYmRjZDBlMzMyN2RkZDFjNDhiMTRmZDYxMjMzNzM1M2M2NmZkNzk1MmY2ODBhYTg4ODBmNWM1IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiI1YjhmYzE2ZWRmM2UzODNjYzkxNmQwYTFiMjVjYjc0ODQ4ZTI3ZTI3MWZiNTM4ZmNlOThhMTUwMTQ3N2U1ZjZlIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiZGE0Y2MxMTM2OTY0MjBlMzg0ODcyMDRjYjEwMDA4YzIzMmY0OTcwMDBkMjBiYTgwOTRhMGJlNWYyMzhhNzZmNSIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiZmY5ZWIxYzU0ZmU2MjFiNTYyZjEzOTMyMDQ0MjkxMTMwNGVlZDljZGFhZjAxNmU1OTczYTkzYTI2MTQzNzcwNCIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiNjQzODhkMWQxM2ZhNzJhNTJkNDg3NTgzNzU5Y2ZhNWQ0YmYzODhiZDY5NTBmOGM5NzQzN2RkZjZiYjViMGUzMyIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiYzI0ZWEwOWUzZTZiMTIzOTk0Yzg2NmZmZDE5YmM3M2UzOWZlY2Y3NmZiYmM2MGUyZGMyODQ2MmNmMWM4YjJkYSIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiJkM2FmODgyOGE2MThiNGI3ZjhkNDljYWMzMGYzNjgwYmE0NmI3NjFjNDEyYmQxZWZjNjFlNDRjOGRhNmJiN2U4IiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjE5MzkxNGVjMTQ5NTNkNDYzODhlZWNiNTIwMjRiOTdlYjZkNWZlOTgwZWI2ZDY4MWI0YTIwMmZlNThhMjhiZjkiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiI1Yzg1OTk3OTQ4YmU3NDFkZjI4NzhhOGNjYjQ2MDc4ZWJiN2UxMDM5ZDRiZTY5YjQ3YzczOGY4ODVmNjIxNjQxIiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiYWE3NDBkZTMzOTc0YjM2MTYzNGE0MDhhMzIzZjM0M2IyM2U1ODRmNGM0MWQ1OTNlMGFlODEzYjY4ZjI3OTE4MiIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6IjA1NzM3ZGVlNGRlNjVjYTYzYTllZmYzODgzZGE4ZWY1ODY2MmViZGYwM2FmNDU1NGZlOTkyYTc1NzE2YTYxM2YiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiNjAyYjk5MGEyNmY1ZTNlYzlkOWQ2OTg1OTIzYTdiZmZjNGM0MjM0MWY1NWNlZGE1NjE1NmQ0MmQ3ZDIxNDE3OCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6ImEzOWQwNzU0YmE1MTY5NzI4ZTA0Y2VjMjQzODZiNTA1NDE3NmU3OGMxYzBiNWU1NjA3YmE5NWYxNjJkYjViYWUiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiJmZmVjMWNkNDM5N2NmZjU1NGZjNzBmOWU5YmJlMzJmYzA5NDFjMTA5ZGRmNjczNGUxZGExOTQ1MDcxZWYyNWJhIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiMTQ2YzhiZjdiYzJjNmM0YmRhZmJkNzBmOGM3NGQyMzg0ZDEyOGFhMGIwNjgxNDM0YzlmMTEyNzI4YjJlNmFkZiIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6IjQwOWM0MTM5ZjYzN2IzOTM0ZDE4NThhMjRiNDJiZWY4OTU4YTFmNDViNmZkMDZhNzRlZGM2MjJjYzMyNmRiZGMiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiJhODA3ZmZjOThmNWUxNTE5ZWQ0YjYxNmJkNjUwM2QwY2I2NjFiNGU3MDg1NTExMzJlNzcxOThjZDA2MDBmODA3IiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiZWUyODk0ODliNWFlMzFlOGQwOTVhY2Y3MTEyMjliN2I2N2I4MDI2NjU0Y2VmN2Y2MWRmNzJhMWY0NjUyYTNmZiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiMWRjOTZiZTVhNzgyN2RhZDUxN2JiMmQwOGI5NDY3NThjODFhMjI1OTVjMDJhMDNiMmNiN2VhYWY3ZTM3ODgyZSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6ImQ2OGMwODJjYzNmOTBlMTc3OTMwZTMyM2Q5MTZkODUzYzZmYjA0ZTg4NTc3Nzc5Mzk4NzA4NjBjNTNhZDQ3YzUiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6ImZiYTg1YzQ5MDQwNzkyOTcxMWU5OTM3NDdiZDc3NmY1OTMyOGY4YzE1YjYwOTc2NTlhNjQyOGE4NWFmYTk3NWEiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiMTA2ZjRiNTllZWVhOTMwNjMzODBhYTI1ZjA1ZjJjNDYzYzg1OGZmZDM2MGI5ZmQ5NjhkMDM2M2FhMGM1ZTA4YyIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiZWEzODQ5M2NhNGMxZGY5YTMwNGZjMzAzYTYwNTA4ZDkxOGQ5Y2FlOTU0MDNjZWYwNjZjMTYwMzQ4ZTZlYmQyMiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifV0=',
        privacy: {
            obfuscated: [],
        },
    },
} as v3.WrappedDocument

export const dnsTxtTokenRegTampered = {
    version: SchemaId.v3,
    '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://schemata.openattestation.com/com/openattestation/1.0/DrivingLicenceCredential.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/CustomContext.json',
    ],
    reference: 'SERIAL_NUMBER_123',
    name: 'Republic of Singapore Driving Licence',
    issuanceDate: '2010-01-01T19:23:24Z',
    validFrom: '2010-01-01T19:23:24Z',
    issuer: {
        id: 'https://example.com',
        type: 'OpenAttestationIssuer',
        name: 'DEMO STORE',
    },
    type: [
        'VerifiableCredential',
        'DrivingLicenceCredential',
        'OpenAttestationCredential',
    ],
    credentialSubject: {
        id: 'did:example:TAMPERED_SERIAL_NUMBER_123',
        class: [
            {
                type: '3',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
            {
                type: '3A',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
        ],
    },
    openAttestationMetadata: {
        template: {
            name: 'CUSTOM_TEMPLATE',
            type: 'EMBEDDED_RENDERER',
            url: 'https://localhost:3000/renderer',
        },
        proof: {
            type: 'OpenAttestationProofMethod',
            method: 'TOKEN_REGISTRY',
            value: '0x9Eb613a88534E2939518f4ffBFE65F5969b491FF',
        },
        identityProof: {
            type: 'DNS-TXT',
            identifier: 'example.tradetrust.io',
        },
    },
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '9e4f74864999eed515ebc5ff02a4ee21e2cc99d660690864784055b6aeff04af',
        proofs: [],
        merkleRoot:
            '9e4f74864999eed515ebc5ff02a4ee21e2cc99d660690864784055b6aeff04af',
        salts: 'W3sidmFsdWUiOiIxYWRlMWM2NGUyMGQwM2NhNmU3NmM4NDFkOTc2Y2ExZTk5MGMzNThhYzFjYTdjYmE1ZGMyYmNiZjc1OTg1NmY3IiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiOTA4YmQwY2U4ZGM4ZjNmYzhjNmM0MjhkNjlhMWFmNWUzMWQzNWJkOTZmYjNhYThiYWYxZTM1MmM3NTZmMGEzYSIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI1YTI1ZWJmM2QyODRkMmZlODMyNWRhOTc5MTM2Y2FjNDFjYmYxZDA5OWQyNGU5MzRmMDgyZWM0NmZiM2E1MDU5IiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6IjE1NDliYmIwMGY5OTg3ZThmMjIxNTYzMzU2NWJkMDExY2RjOWFmZTZjMGVjZjVjZjczMWNiZmFhODZkZTNlMGMiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiYTJkNzc4MzQxZGMxZGViMzNlMzVlNmVlNzYwNDg0OGFjOTI5NmQyYjA3NTVlYzA1YmQ0NGE5YmQ5YzMxYWRlYSIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiI1MGMwYjVjMzJiZTlhZGE1NWJhMzQyZjkyMWQ1YWFmZjlmMDQwZTQwNTVlY2Q4NzAzZGYyNWIzZTZiMTkwYWY2IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiJjMjU0MDkyZjNmZjFkZWQ2MDdiYzZhMzM5ZWY4ZWE2Y2Y1ODFiNjMyM2U4MWIwNTFlNTZjYTNlMjAzZjFiMzM1IiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiMjljNDA5MWZhN2U3ZjYxMzIzNzg1ZjRkY2M4NTU5NzhmZTE1MzczMTI3NjZiNWVmMGJjNGZiY2YwNWU4MjI1MCIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiNGVjYWU1M2JkZmQ2ZWYxMzEzNGRkYzUxOTZjZTc5MjRjMDA5MTg3MjAyZmYxMzJhOWMwMjU5NmY0ZDVhNTE4YSIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiNWRjY2U0ODE2YjNhODU4NGE5ZTIwYzZlNmI3MTg2Yzk2N2EwYTE2ZWIwMGQ4NWFiYjI5ZGM2NTk1ZDI0NzM2NCIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiZTQ2MTgwZmVhMzhkZDg2OGNjODhjMGRlM2I2MWM0MTIyZDBmZGIyMWI1ODZlYTJiYjgxNmEyZTE0YWI1NjlkNCIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiI3ZjNkMjIyNzUyYWIwZTY4Nzg3YWI2OTVjNmI4ZWMyNGM3ZDkxZjgzNDZlMDFkMTMyYTI2YzI3N2E3MzI4Yjc2IiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjJjYmMzN2NlYmQwYTdlODNmY2YzZDk3MTYxYjdjMGQ4MDljYWQ4OWE3ZDgyMjAzZmU1ZGVhY2E2YmJiM2YwZWQiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiIzYzc0MDA1YjA2MmQ4NDEzNDRiNzMzODIwMzdiMDNiNWFiMzk3MjFjYzBjNmEwNmQ0NmY0NGY5NGY3OWQzZmQ2IiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiZGVmYTcyYzZlMTYyNjNlMmQxMjdlNGUzY2E1MzQyMDYwZGVlODc3YWIxNDg3MjY0Y2U3YTM0NTllYmFiMWE1YiIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6IjEzZDQ0Y2I2ZTVjNWU1NWMxYmJmNzlhMWRiMDZhYzUxY2JmMGMwMzM3YjVlYjliOTE5Y2U4MDhjNTJhYjliZmUiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiY2Q1NzI4OGQ2MWVjZjE0NmQwY2ViNzI5N2ZhNTdmOTQ0ODg1NDdmOWEzY2E0ZWUxMWExNmMxNjcwMzU3ZDczNCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6IjJiZDM4OWYyNmFhNmFkNzU3OWYwYWQyMDBhYWE5MTI2YzMyMzVhMzIzYzkyZmQyNGVmYmU3MDhjMTlmMDA4MjgiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiJiYzUxYzMwNWM5YWNmMjA4ZjRhNzY3MGI0YjhmYjMyOWI1OGFlMjNhZGEzZmU0MjA4NDc2NmVhZjEyZGFhNDEwIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiN2ZmNzE3ZDU2YTM2MzA4NWRiZmNmOGI3MDMwODA2M2Y5ZDFiODk2MzM5NzJlNWE4ZmI5YjFjYjVhOGZiZjkyMyIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6ImFmN2MxYmRlODI2NjAxYTJjYjEzMTgxYmRmNDMyMTAyODRkNWVmYTYxYTg5MjFhNDVlNGJhNDIyOTI5N2UwYTQiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiI5YTJiMTAwNGRmMGZhZjZlMjg1NDc2MzczODViN2YyZjU5NmYyNmFiNDJlMzEyNmI5YjcxNjA5NGYwYWIzZmZhIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiYmI3MzdhZDI0MTkyMmZjOTI0OTUyYWI1MjMwNDBkNWQyYWQ4NGI0MTI5ZDczNjk0ODJkMzQzYWM5ZjA3Zjc0NCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiYTNjMTNhOTA1ZGE0M2VkZjM4YzgwNmI5YzIxY2Q5ZDVjNDQyYWNiOTY1NGQ3YTE1MDBhNGU1MzBhODU3ZDdjNyIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6IjExZGUyYWNiYWJmMDQ1OGRjNzE0ZDgxOWQzNDJjNjZhMjg1ZmU5ZTMzNDA0ZmVlN2ZjNDU0OGY5NmRlODgxMjciLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6ImE4ZjQ3ZGI0YTRjODU4NGY5NGJhYzk0MTVmM2I3OGQyOTNjOGU1NTEzMjZjNTFlMDllOGY3OTQ3OGY2MWExZTkiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiOGM2NmRkMjBlMmY0YTE3NWExNGE1YWU1ODZhMjY4YTYwMTZhN2YyMjUxZGRhODJiZTY2ZWI0YThhYzhhOTliYiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiMGYzNWUwZjEzYWQ5OGM5NjY3YjQ5MDYwZTljZWJkMDY5ODVjMDM1MmU4Njg2M2JiNDBiYzRhZjM4ZjE2ZTc3NyIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifV0=',
        privacy: {
            obfuscated: [],
        },
    },
} as v3.WrappedDocument

export const dnsTxtTokenRegMinted = {
    version: SchemaId.v3,
    '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://schemata.openattestation.com/com/openattestation/1.0/DrivingLicenceCredential.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/CustomContext.json',
    ],
    reference: 'SERIAL_NUMBER_123',
    name: 'Republic of Singapore Driving Licence',
    issuanceDate: '2010-01-01T19:23:24Z',
    validFrom: '2010-01-01T19:23:24Z',
    issuer: {
        id: 'https://example.com',
        type: 'OpenAttestationIssuer',
        name: 'DEMO STORE',
    },
    type: [
        'VerifiableCredential',
        'DrivingLicenceCredential',
        'OpenAttestationCredential',
    ],
    credentialSubject: {
        id: 'did:example:SERIAL_NUMBER_123',
        class: [
            {
                type: '3',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
            {
                type: '3A',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
        ],
    },
    openAttestationMetadata: {
        template: {
            name: 'CUSTOM_TEMPLATE',
            type: 'EMBEDDED_RENDERER',
            url: 'https://localhost:3000/renderer',
        },
        proof: {
            type: 'OpenAttestationProofMethod',
            method: 'TOKEN_REGISTRY',
            value: '0x9Eb613a88534E2939518f4ffBFE65F5969b491FF',
        },
        identityProof: {
            type: 'DNS-TXT',
            identifier: 'example.tradetrust.io',
        },
    },
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '9e4f74864999eed515ebc5ff02a4ee21e2cc99d660690864784055b6aeff04af',
        proofs: [],
        merkleRoot:
            '9e4f74864999eed515ebc5ff02a4ee21e2cc99d660690864784055b6aeff04af',
        salts: 'W3sidmFsdWUiOiIxYWRlMWM2NGUyMGQwM2NhNmU3NmM4NDFkOTc2Y2ExZTk5MGMzNThhYzFjYTdjYmE1ZGMyYmNiZjc1OTg1NmY3IiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiOTA4YmQwY2U4ZGM4ZjNmYzhjNmM0MjhkNjlhMWFmNWUzMWQzNWJkOTZmYjNhYThiYWYxZTM1MmM3NTZmMGEzYSIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI1YTI1ZWJmM2QyODRkMmZlODMyNWRhOTc5MTM2Y2FjNDFjYmYxZDA5OWQyNGU5MzRmMDgyZWM0NmZiM2E1MDU5IiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6IjE1NDliYmIwMGY5OTg3ZThmMjIxNTYzMzU2NWJkMDExY2RjOWFmZTZjMGVjZjVjZjczMWNiZmFhODZkZTNlMGMiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiYTJkNzc4MzQxZGMxZGViMzNlMzVlNmVlNzYwNDg0OGFjOTI5NmQyYjA3NTVlYzA1YmQ0NGE5YmQ5YzMxYWRlYSIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiI1MGMwYjVjMzJiZTlhZGE1NWJhMzQyZjkyMWQ1YWFmZjlmMDQwZTQwNTVlY2Q4NzAzZGYyNWIzZTZiMTkwYWY2IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiJjMjU0MDkyZjNmZjFkZWQ2MDdiYzZhMzM5ZWY4ZWE2Y2Y1ODFiNjMyM2U4MWIwNTFlNTZjYTNlMjAzZjFiMzM1IiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiMjljNDA5MWZhN2U3ZjYxMzIzNzg1ZjRkY2M4NTU5NzhmZTE1MzczMTI3NjZiNWVmMGJjNGZiY2YwNWU4MjI1MCIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiNGVjYWU1M2JkZmQ2ZWYxMzEzNGRkYzUxOTZjZTc5MjRjMDA5MTg3MjAyZmYxMzJhOWMwMjU5NmY0ZDVhNTE4YSIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiNWRjY2U0ODE2YjNhODU4NGE5ZTIwYzZlNmI3MTg2Yzk2N2EwYTE2ZWIwMGQ4NWFiYjI5ZGM2NTk1ZDI0NzM2NCIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiZTQ2MTgwZmVhMzhkZDg2OGNjODhjMGRlM2I2MWM0MTIyZDBmZGIyMWI1ODZlYTJiYjgxNmEyZTE0YWI1NjlkNCIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiI3ZjNkMjIyNzUyYWIwZTY4Nzg3YWI2OTVjNmI4ZWMyNGM3ZDkxZjgzNDZlMDFkMTMyYTI2YzI3N2E3MzI4Yjc2IiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjJjYmMzN2NlYmQwYTdlODNmY2YzZDk3MTYxYjdjMGQ4MDljYWQ4OWE3ZDgyMjAzZmU1ZGVhY2E2YmJiM2YwZWQiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiIzYzc0MDA1YjA2MmQ4NDEzNDRiNzMzODIwMzdiMDNiNWFiMzk3MjFjYzBjNmEwNmQ0NmY0NGY5NGY3OWQzZmQ2IiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiZGVmYTcyYzZlMTYyNjNlMmQxMjdlNGUzY2E1MzQyMDYwZGVlODc3YWIxNDg3MjY0Y2U3YTM0NTllYmFiMWE1YiIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6IjEzZDQ0Y2I2ZTVjNWU1NWMxYmJmNzlhMWRiMDZhYzUxY2JmMGMwMzM3YjVlYjliOTE5Y2U4MDhjNTJhYjliZmUiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiY2Q1NzI4OGQ2MWVjZjE0NmQwY2ViNzI5N2ZhNTdmOTQ0ODg1NDdmOWEzY2E0ZWUxMWExNmMxNjcwMzU3ZDczNCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6IjJiZDM4OWYyNmFhNmFkNzU3OWYwYWQyMDBhYWE5MTI2YzMyMzVhMzIzYzkyZmQyNGVmYmU3MDhjMTlmMDA4MjgiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiJiYzUxYzMwNWM5YWNmMjA4ZjRhNzY3MGI0YjhmYjMyOWI1OGFlMjNhZGEzZmU0MjA4NDc2NmVhZjEyZGFhNDEwIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiN2ZmNzE3ZDU2YTM2MzA4NWRiZmNmOGI3MDMwODA2M2Y5ZDFiODk2MzM5NzJlNWE4ZmI5YjFjYjVhOGZiZjkyMyIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6ImFmN2MxYmRlODI2NjAxYTJjYjEzMTgxYmRmNDMyMTAyODRkNWVmYTYxYTg5MjFhNDVlNGJhNDIyOTI5N2UwYTQiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiI5YTJiMTAwNGRmMGZhZjZlMjg1NDc2MzczODViN2YyZjU5NmYyNmFiNDJlMzEyNmI5YjcxNjA5NGYwYWIzZmZhIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiYmI3MzdhZDI0MTkyMmZjOTI0OTUyYWI1MjMwNDBkNWQyYWQ4NGI0MTI5ZDczNjk0ODJkMzQzYWM5ZjA3Zjc0NCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiYTNjMTNhOTA1ZGE0M2VkZjM4YzgwNmI5YzIxY2Q5ZDVjNDQyYWNiOTY1NGQ3YTE1MDBhNGU1MzBhODU3ZDdjNyIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6IjExZGUyYWNiYWJmMDQ1OGRjNzE0ZDgxOWQzNDJjNjZhMjg1ZmU5ZTMzNDA0ZmVlN2ZjNDU0OGY5NmRlODgxMjciLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6ImE4ZjQ3ZGI0YTRjODU4NGY5NGJhYzk0MTVmM2I3OGQyOTNjOGU1NTEzMjZjNTFlMDllOGY3OTQ3OGY2MWExZTkiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiOGM2NmRkMjBlMmY0YTE3NWExNGE1YWU1ODZhMjY4YTYwMTZhN2YyMjUxZGRhODJiZTY2ZWI0YThhYzhhOTliYiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiMGYzNWUwZjEzYWQ5OGM5NjY3YjQ5MDYwZTljZWJkMDY5ODVjMDM1MmU4Njg2M2JiNDBiYzRhZjM4ZjE2ZTc3NyIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifV0=',
        privacy: {
            obfuscated: [],
        },
    },
} as v3.WrappedDocument

export const dnsTxttokenRegNotMinted = {
    version: SchemaId.v3,
    '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://schemata.openattestation.com/com/openattestation/1.0/DrivingLicenceCredential.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/CustomContext.json',
    ],
    reference: 'SERIAL_NUMBER_123',
    name: 'Republic of Singapore Driving Licence',
    issuanceDate: '2010-01-01T19:23:24Z',
    validFrom: '2010-01-01T19:23:24Z',
    issuer: {
        id: 'https://example.com',
        type: 'OpenAttestationIssuer',
        name: 'DEMO STORE',
    },
    type: [
        'VerifiableCredential',
        'DrivingLicenceCredential',
        'OpenAttestationCredential',
    ],
    credentialSubject: {
        id: 'did:example:SERIAL_NUMBER_123',
        class: [
            {
                type: '3',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
            {
                type: '3A',
                effectiveDate: '2010-01-01T19:23:24Z',
            },
        ],
    },
    openAttestationMetadata: {
        template: {
            name: 'CUSTOM_TEMPLATE',
            type: 'EMBEDDED_RENDERER',
            url: 'https://localhost:3000/renderer',
        },
        proof: {
            type: 'OpenAttestationProofMethod',
            method: 'TOKEN_REGISTRY',
            value: '0x9Eb613a88534E2939518f4ffBFE65F5969b491FF',
        },
        identityProof: {
            type: 'DNS-TXT',
            identifier: 'example.tradetrust.io',
        },
    },
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '65918f0fd52db1c2f81f3b57c13c9198e5c525ef7c95ab40889ea8464f4e6470',
        proofs: [],
        merkleRoot:
            '65918f0fd52db1c2f81f3b57c13c9198e5c525ef7c95ab40889ea8464f4e6470',
        salts: 'W3sidmFsdWUiOiJjOTFlYjY4ZDU1YWZmNTZlYzdjOGZmNjcxYjE3MjcxYjE3M2EwNmQwZmI5NGZlOGE3ZmEyYmM0YjA4ZDliYjlkIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiZTI2NzI4NDJjZjJiMWVkODI0YTg4ZGUyYTJjZGE5MWUyZDI0MTRkNDA1YTcyY2E1NmIyODAyN2Y4YTVmYTkzZiIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI4YjlkY2E3ODAzNjM0NTE1ZmMyN2E4YTc0N2VhNTZkYTgyMjAwNmE2OGIzMTE3YjUyYjM2YjhhMThjMmY0OTZjIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6IjQwMTU3OTM1ZjljMjhhZGVhZGQwMWU1MWVkMjcwZWUzMTM4MTA4ZWIzZTJhMzQxZjFkMmIzZGQyNjg5MGRkMDkiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiOTA5ZGQ4MWFjNmM2YzYzNjhiMDhjOTZmZDEyZGNiOTlmYWI2NTVmYmM1ODJiZWRkYjhiNTc0MDM3M2JmOGM3MyIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiI0NGJiMGNmOTk1YWFjY2ZjODA1ZGE2NDgzZGQzNzhjY2ZjZTNiNzU5YzhiNjIyMTYyNGNiZjE3Mjg4OTI0NTllIiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiJkNjBmZjdhYjVjNTJlOTk4ZmQ4YTJkOWIyYWU3MzY2ZjdjOGU4OGQ3MDEzMWI2YmNhNGU5NmEzNjRlZmM5Mzg2IiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiM2IyN2I0ZTUzODg2ZmVjY2NmOTc2NmJkNDFmMTBlNjcyNDJlNzY5YzY2NTMwNGUyZDM5ZGJhMGNlODkyMTA5NiIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiY2ZkMmExZWU2MGEwMzc3ZGY1YjgxZTM4MTA0ZTQ1NDZmZmJiZDVkMjE4MTVkYTMwZTFjNjViMzI5YTNjZmVhNiIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiMzIzYjg4OWU1ZDY3YTlmNTQxMDZjMmQ3OTlkOWQxZWU3MTViOWY2ZTk4YjIzZTA3ZmM2N2RiMzVjNGNhNzg3YSIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiZmU1OTFmNjI3ZWJkMTQ1M2ZkYzk4ZDY5ZDQ1MjI5OWMzYzVhN2RmYjlmYzE3YjlhZTFmOWM0NGE0MzUyYzA2ZSIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiIxOTU1MzcxNzY5MTkxNDQyMzQ5NDYwNzhiMTNkZDM0YjFkMmI1OTJjZTE0NTcxZjY1NWQ4MTFlNDkxM2JhNTViIiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6Ijg4MmIzYjIzMDE1NzYzYzQ5NjA1YmY4MDQ3ZjlmZGI4Yjg4YjIzYThmNmMwZGFiMzRiZjZhNTY3OWUxMmY5MWEiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiJjZTQwYzU5ZjNjNmE2YmY1NzU0YTFjZTZhNTJiM2NhN2I3YjBiMTIyOTEyMzA3NTc5YmQzNmM1NWFhMmE2MGE2IiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiMGZjNmVmOTIzMDRlY2FkZjdlNGRjZjA5NzdlMGEzNzkwYTM0MTJmYjVkNjVmYmQ0MDEwNTc2OWViZTY4MDQyOCIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6IjNmMDVhNWY2ZGY2YTA5ZWQwYjA0NjY3ZDhkOTM4YmZmMmJhMjRhYmI3ZjFmYzc0ODQ5NWNmOWFjYTE3ODRjMmQiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiZGUxOWJkYjFlYzIwMTQ3OWI5ZmI2OTJiNTk1YTZjZDdjOGE1N2ZlMDE5MmI3YWVmNjdkOTQ5ZjUxYzdjN2Q2NCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6ImQwNDZhZDk4NmM4ZTNiOTYxMmFjZGEzZmIwYjM4OTYyNjYxMjk3OTlmMDRlNzZlN2EyODlmM2NkMmY5NTRkNzAiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiJiNmExYWI0M2ViZjYxYzUwNDQxNDNkYmQxNWIzMjU5NjQ2MzM3NmJhY2RlODBmN2RiZDMzNTU5N2Y3MzQ1ZTUzIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiMWZkZTcwZWEzZjIzYzg5N2M2MjllYmE4YWMzNjEzMDg2NTgwYWZlYzI1NmRhNzY4YjI2ZmFkYWZkODU2YjVlYyIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6IjE4YzAxYzdiMGVjMWNjYWVhZjRhNGNlODNmMDA4ZTk4ZjczNWQzZjhkNWUyYzFmNDk3NDdlZTQyMGQ1NDVmZjIiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiI5YTU5MmE3NWIzM2FlMzU5OGNhZGM1MzU5MDBjMzY2NjdiMzhlYzMzNTM2YzE3Yjk2YzVhOGM4NDJhZjEwZTc4IiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiNjBmYTY4MTgwZDk3ZjQ0YmJjMDY0YmY1ODEzZWIwODkyNDc2YTZhMTAzMDAzZGNlZjk1ODJiMDgzMTNkZDQ2YiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiNWFkZGY4Yzc2MWRlMWZkOTk0ZmZhMTlhMjc4YTkyN2NjM2NlYmZjNTlkYTU5MTViMzcyMmNhYmRkNzZiYWQ3NyIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6ImE0NTRlNGNhYWU1MDRmZTEzOTk1MmY3YmU4NGE4ZGE0NTUxYjQ4MGYxYTJjNDdkMjFlMTY4ZDBlZGRkYzQ3MjYiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6IjM2ZTY1YWIwMDAwMDUxYTBjNmViZGQ2Zjk3NjkxMGFlMjg4M2MyODM1NmYyMzUxMGNhZDFiZjhiNDUwZWRjNGIiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiZDJjNTJmYTZiYzQ4ZmM3ZWRkMGY0MzI3NmI3MTE4ZjBlODIzYzc4NzMxNzcxYjgzODg5NDE2NDdjOTdhYzVlMiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiNzE5YjliZDc5YTU2ODIzMTBkODQ1ZWE2YTIxM2FiMjM1OGE2ZDNkMDUzZDRiMjVhNDEzN2E2NzNlZTMxNGM0YyIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifV0=',
        privacy: {
            obfuscated: [],
        },
    },
} as v3.WrappedDocument
