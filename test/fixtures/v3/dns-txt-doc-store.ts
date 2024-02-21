import { SchemaId, WrappedDocument, v2 } from '@tradetrust-tt/tradetrust'

interface CustomDocument extends v2.OpenAttestationDocument {
    recipient: {
        name: string
    }
}

interface CustomDocumentObfuscated extends v2.OpenAttestationDocument {}

export const dnsTxtDocStore: WrappedDocument<CustomDocument> = {
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
            method: 'DOCUMENT_STORE',
            value: '0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
        },
        identityProof: {
            type: 'DNS-TXT',
            identifier: 'example.tradetrust.io',
        },
    },
    attachments: [
        {
            fileName: 'sample.pdf',
            mimeType: 'application/pdf',
            data: 'BASE64_ENCODED_FILE',
        },
    ],
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '660e07e2defb55f04d6715448ac4f9c5718c8115c50ebd8931be15ed61ae8580',
        proofs: [],
        merkleRoot:
            '660e07e2defb55f04d6715448ac4f9c5718c8115c50ebd8931be15ed61ae8580',
        salts: 'W3sidmFsdWUiOiI0YmQ0MGZjZjliMGRjNzU3YjViMWU4MDhlNmEwMGQ3NWQ4NjZmYzg0ODYzYTA3YjRkYTllNGU4NjQ5MThiMjY3IiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiMDk4ZDk0ODZlNjZiMTQ4MDk5ZDQ2ZTI2NGQ3N2E0NjRjZDcwNjA3M2MwYTg2Yzk0NDlkNmIyMWYxYmRiZjFkZSIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI3OWZkMDU0YjhjYzMwM2M3NWMzZDAxN2QzNTRhYzJjOGQyNjI1YjViNTdjZjM0OGJjMDVhODMwZTUzNDQzODBjIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6IjIyNjZkNmQxZTI4YTQwNzBmNTcyMDY3YTcwNTIzZjMxOWMyYTQ4YjJlMmVjMzRhNjgwNjAzNWU5YWVhM2QzMmIiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiOTk4YTVmODU5NzMzODRlYTE4ODMzMTY2NmRjZWY0ZTMwZGIyZDFjYmNjYjk0MzNjZmM5MmIyNjdjZDM5YWM2NSIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiIwMjg5ZDVmNjBiN2Y4MmMxMDg5MzFlYWZmNzAwYWI0YTgyMmYxYzAwMTMyMDQ1YjViYWE2YzZmYmE3NzBmYjk1IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiI5NDU3ZGEwMjI1MTVlYWU0MjRkZGI2ZDBiNmRiZmJkN2Y1ODRhNzM1ZjQ5OGQyNzc4ODhlOTY1ZTFjMjkxYjVkIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiNzY1ZmY5NDA3YWM5OWI1ZDNjYmY1YzhiMWQzNWQzYzVmOThiMTdkNzdmNDcyMWM5MWE3YTY2ZDZmMzEwYWVhMCIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiZjE0NDNkYjcxY2Q3YjJlYmZlMjk2NDA4NzViNjk5YWI4YjBkN2JmODEyZGM2MmZjZTQ1ZWEzMWU2MTllNzJhZiIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiNTIyODQ5ODgxODNjODk4NzM2NTBkMTNhNGYzN2NjOWNkMmVlNjcyMDIzZmFhNzVmMzY3NTZkNjMxYjAxZmI3OSIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiMDczMTc2YjZhNzAzNGJiZWE1YTIxNmNkMDIzOTA0NGUyYTVlNjdlMjRmY2M3MGM2ODg2YjM3YjhlY2RmMjJjMiIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiIzNTU2ODY5MjBmZTM5OGY3OThlZTk0OTcxMmU4YmQyY2Y2YmY4YmQ4OTU2M2E0ZTRlMTRlZjgzOGQwYTlhYWM1IiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjBhMzZiN2YwMjVmZGZmMjZmZTc1ZDlhNTFjMzdiNzhjOTU0NGMwMjQzNjAxYzEzMjJkYWFhYjVjNjA0NDdlMWUiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiIzMjliM2VmMDg3NjhjOTRmZDZiOTEyYWI2ZmIzOWNiMzhiN2MwODVkYjJlNGMzNWY3NzI1OGVjMzJiNTMyZGJjIiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiYmE1M2JlN2VhZjczN2Q2ZTIwZTY0YjVjNWIwZTcwMTZiNTkwOGM0MWRhZWVmMjJmMjczMmQ4NTEzNWJiNmIwNiIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6ImU2MTc3Nzc0MWViYzljNzM2MmU2MjVhNmEwZDhiNDdkOWUzM2ZmMDk1MzQ4ZTgwYzg0ZjkzN2Q1ZjRkMjRhMmEiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiZWM1NGExYjM2MzExNDA1MjY0ODZhZDFkMzk5ZTZmNTA0NWM0MmI2MzUyODg5MzhhN2FjYTRjMzY3OWFmMzc1NCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6ImRkY2UzNjBjNDQwMmI0OGU1MzNmMDM4NWMxMzNlMTAzYTI2OGYyOWI2OWY2Zjc5YzUzOTQzOThiNzkyMTQ5YmMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiI2NDEzMjhkMmQzN2UzMGI0NTA5YWVkNWM0ODQwYWRlOTRjMTIzMmUxMjBkZmMxMWE0OGJmZTM3MDhmYzRjNzhiIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiZDk2ZDI5YjE1NjM1YzgwYmY4ZDgxYmQ0OGMzZTk3MWVjNTRmNmNjMTY4YTI3NGJjMTllY2VkYjczMTQwZDg4ZCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6ImIxZmZiMjQ5ZmVlYzg2N2JkZDUxOWM4YzY4NGEzMDllNWE1MDE3ZjM1Njk2NWNiNzU5MjY3MjhkYmE1MzgwMTkiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiJkOGQyYjA4YmIxYjU2MDNkYjk2N2QxNWUwMDM4N2ZkMmIxMmQxYzk2NjFkZDAxZGVhODhiNzkzZTI5OWEyNWVhIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiYjkwZjdlMzIyN2ZkYjA4MWRjZTg3ZTI4MWMwNjUzYWJiNGQyYzJkMGU0NTY3ZTcxNjk2MmMwOGZhYzkwMThhZSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiZDE5NzIxZWJkYjNlMDhlZmZlMTUyYTkyNDljYzg5NTkxZGNhNGMzMTA0MzI5NjdkYTllZjFkMmFkNDk4YjdlNiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6IjI2M2FkODRjOWQ3ZTljMzRhMzY5MjYxYTEyMGNhMDdlODJhMTI0NTE3NzdmM2MyYjg2NDVjYjY4OWU3MDViYjIiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6IjgyM2E3MTRiMzdiMGJjOWE1Y2Q3ZDBlNGRjMTNmYWVhZTYxNTdiZjM5NjQ2NmE1YTA3OGIwODM4MDA4YWVmYmQiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiY2IyZGE4NWQ2MmRlOWNmNmZmMzNkMWU2MjFkNjBkM2EzZjJlZjBiMjBhZGZjZGZjOTkxYTEzMzZhNjA3ODUxYSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiNmJhMzBmNjgwYTg2OTUxOTMwMGE5ZjQzNjE5M2FiODYyZDM5MzIyODkxNTFjMzc5YzFhZDQxNDk0ODVjM2Y4OSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifSx7InZhbHVlIjoiYWZmM2Y3YWNkYTBlMDM4N2U1MTU4NDFjNTNkOWNjZjFkZmU0ODc5YmEzNjBmYjJkYmRkNmVlNWJlYmRiODcwMSIsInBhdGgiOiJhdHRhY2htZW50c1swXS5maWxlTmFtZSJ9LHsidmFsdWUiOiI1YTE5NTlmZWRkMDkyZDg1YTBmYzk3MGM0MGI3ZjcyNjYzNWRmZDMyYzI1Yjk1NjhjODlmZTE3MjQwYWMxYzNhIiwicGF0aCI6ImF0dGFjaG1lbnRzWzBdLm1pbWVUeXBlIn0seyJ2YWx1ZSI6ImRjYWVkYTNmMzg0MjYyNzc1MWU5ZGJlZDExNWFkNWQ4ZmYyOTZhYWFjYWZmNzhmNTQxNTJmNjc1MzhkYzgyZDEiLCJwYXRoIjoiYXR0YWNobWVudHNbMF0uZGF0YSJ9XQ==',
        privacy: {
            obfuscated: [],
        },
    },
}

export const dnsTxtDocStoreTampered: WrappedDocument<CustomDocument> = {
    version: SchemaId.v3,
    '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://schemata.openattestation.com/com/openattestation/1.0/DrivingLicenceCredential.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json',
        'https://schemata.openattestation.com/com/openattestation/1.0/CustomContext.json',
    ],
    reference: 'TAMPERED_SERIAL_NUMBER_123',
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
            method: 'DOCUMENT_STORE',
            value: '0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
        },
        identityProof: {
            type: 'DNS-TXT',
            identifier: 'example.tradetrust.io',
        },
    },
    attachments: [
        {
            fileName: 'sample.pdf',
            mimeType: 'application/pdf',
            data: 'BASE64_ENCODED_FILE',
        },
    ],
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '660e07e2defb55f04d6715448ac4f9c5718c8115c50ebd8931be15ed61ae8580',
        proofs: [],
        merkleRoot:
            '660e07e2defb55f04d6715448ac4f9c5718c8115c50ebd8931be15ed61ae8580',
        salts: 'W3sidmFsdWUiOiI0YmQ0MGZjZjliMGRjNzU3YjViMWU4MDhlNmEwMGQ3NWQ4NjZmYzg0ODYzYTA3YjRkYTllNGU4NjQ5MThiMjY3IiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiMDk4ZDk0ODZlNjZiMTQ4MDk5ZDQ2ZTI2NGQ3N2E0NjRjZDcwNjA3M2MwYTg2Yzk0NDlkNmIyMWYxYmRiZjFkZSIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI3OWZkMDU0YjhjYzMwM2M3NWMzZDAxN2QzNTRhYzJjOGQyNjI1YjViNTdjZjM0OGJjMDVhODMwZTUzNDQzODBjIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6IjIyNjZkNmQxZTI4YTQwNzBmNTcyMDY3YTcwNTIzZjMxOWMyYTQ4YjJlMmVjMzRhNjgwNjAzNWU5YWVhM2QzMmIiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiOTk4YTVmODU5NzMzODRlYTE4ODMzMTY2NmRjZWY0ZTMwZGIyZDFjYmNjYjk0MzNjZmM5MmIyNjdjZDM5YWM2NSIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiIwMjg5ZDVmNjBiN2Y4MmMxMDg5MzFlYWZmNzAwYWI0YTgyMmYxYzAwMTMyMDQ1YjViYWE2YzZmYmE3NzBmYjk1IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiI5NDU3ZGEwMjI1MTVlYWU0MjRkZGI2ZDBiNmRiZmJkN2Y1ODRhNzM1ZjQ5OGQyNzc4ODhlOTY1ZTFjMjkxYjVkIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiNzY1ZmY5NDA3YWM5OWI1ZDNjYmY1YzhiMWQzNWQzYzVmOThiMTdkNzdmNDcyMWM5MWE3YTY2ZDZmMzEwYWVhMCIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiZjE0NDNkYjcxY2Q3YjJlYmZlMjk2NDA4NzViNjk5YWI4YjBkN2JmODEyZGM2MmZjZTQ1ZWEzMWU2MTllNzJhZiIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiNTIyODQ5ODgxODNjODk4NzM2NTBkMTNhNGYzN2NjOWNkMmVlNjcyMDIzZmFhNzVmMzY3NTZkNjMxYjAxZmI3OSIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiMDczMTc2YjZhNzAzNGJiZWE1YTIxNmNkMDIzOTA0NGUyYTVlNjdlMjRmY2M3MGM2ODg2YjM3YjhlY2RmMjJjMiIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiIzNTU2ODY5MjBmZTM5OGY3OThlZTk0OTcxMmU4YmQyY2Y2YmY4YmQ4OTU2M2E0ZTRlMTRlZjgzOGQwYTlhYWM1IiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjBhMzZiN2YwMjVmZGZmMjZmZTc1ZDlhNTFjMzdiNzhjOTU0NGMwMjQzNjAxYzEzMjJkYWFhYjVjNjA0NDdlMWUiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiIzMjliM2VmMDg3NjhjOTRmZDZiOTEyYWI2ZmIzOWNiMzhiN2MwODVkYjJlNGMzNWY3NzI1OGVjMzJiNTMyZGJjIiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiYmE1M2JlN2VhZjczN2Q2ZTIwZTY0YjVjNWIwZTcwMTZiNTkwOGM0MWRhZWVmMjJmMjczMmQ4NTEzNWJiNmIwNiIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6ImU2MTc3Nzc0MWViYzljNzM2MmU2MjVhNmEwZDhiNDdkOWUzM2ZmMDk1MzQ4ZTgwYzg0ZjkzN2Q1ZjRkMjRhMmEiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiZWM1NGExYjM2MzExNDA1MjY0ODZhZDFkMzk5ZTZmNTA0NWM0MmI2MzUyODg5MzhhN2FjYTRjMzY3OWFmMzc1NCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6ImRkY2UzNjBjNDQwMmI0OGU1MzNmMDM4NWMxMzNlMTAzYTI2OGYyOWI2OWY2Zjc5YzUzOTQzOThiNzkyMTQ5YmMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiI2NDEzMjhkMmQzN2UzMGI0NTA5YWVkNWM0ODQwYWRlOTRjMTIzMmUxMjBkZmMxMWE0OGJmZTM3MDhmYzRjNzhiIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiZDk2ZDI5YjE1NjM1YzgwYmY4ZDgxYmQ0OGMzZTk3MWVjNTRmNmNjMTY4YTI3NGJjMTllY2VkYjczMTQwZDg4ZCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6ImIxZmZiMjQ5ZmVlYzg2N2JkZDUxOWM4YzY4NGEzMDllNWE1MDE3ZjM1Njk2NWNiNzU5MjY3MjhkYmE1MzgwMTkiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiJkOGQyYjA4YmIxYjU2MDNkYjk2N2QxNWUwMDM4N2ZkMmIxMmQxYzk2NjFkZDAxZGVhODhiNzkzZTI5OWEyNWVhIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiYjkwZjdlMzIyN2ZkYjA4MWRjZTg3ZTI4MWMwNjUzYWJiNGQyYzJkMGU0NTY3ZTcxNjk2MmMwOGZhYzkwMThhZSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiZDE5NzIxZWJkYjNlMDhlZmZlMTUyYTkyNDljYzg5NTkxZGNhNGMzMTA0MzI5NjdkYTllZjFkMmFkNDk4YjdlNiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6IjI2M2FkODRjOWQ3ZTljMzRhMzY5MjYxYTEyMGNhMDdlODJhMTI0NTE3NzdmM2MyYjg2NDVjYjY4OWU3MDViYjIiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6IjgyM2E3MTRiMzdiMGJjOWE1Y2Q3ZDBlNGRjMTNmYWVhZTYxNTdiZjM5NjQ2NmE1YTA3OGIwODM4MDA4YWVmYmQiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiY2IyZGE4NWQ2MmRlOWNmNmZmMzNkMWU2MjFkNjBkM2EzZjJlZjBiMjBhZGZjZGZjOTkxYTEzMzZhNjA3ODUxYSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiNmJhMzBmNjgwYTg2OTUxOTMwMGE5ZjQzNjE5M2FiODYyZDM5MzIyODkxNTFjMzc5YzFhZDQxNDk0ODVjM2Y4OSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifSx7InZhbHVlIjoiYWZmM2Y3YWNkYTBlMDM4N2U1MTU4NDFjNTNkOWNjZjFkZmU0ODc5YmEzNjBmYjJkYmRkNmVlNWJlYmRiODcwMSIsInBhdGgiOiJhdHRhY2htZW50c1swXS5maWxlTmFtZSJ9LHsidmFsdWUiOiI1YTE5NTlmZWRkMDkyZDg1YTBmYzk3MGM0MGI3ZjcyNjYzNWRmZDMyYzI1Yjk1NjhjODlmZTE3MjQwYWMxYzNhIiwicGF0aCI6ImF0dGFjaG1lbnRzWzBdLm1pbWVUeXBlIn0seyJ2YWx1ZSI6ImRjYWVkYTNmMzg0MjYyNzc1MWU5ZGJlZDExNWFkNWQ4ZmYyOTZhYWFjYWZmNzhmNTQxNTJmNjc1MzhkYzgyZDEiLCJwYXRoIjoiYXR0YWNobWVudHNbMF0uZGF0YSJ9XQ==',
        privacy: {
            obfuscated: [],
        },
    },
}

export const dnsTxtDocStoreRevoked: WrappedDocument<CustomDocument> = {
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
            method: 'DOCUMENT_STORE',
            value: '0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
        },
        identityProof: {
            type: 'DNS-TXT',
            identifier: 'example.tradetrust.io',
        },
    },
    attachments: [
        {
            fileName: 'sample.pdf',
            mimeType: 'application/pdf',
            data: 'BASE64_ENCODED_FILE',
        },
    ],
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            'eeef582def4ebea8fad684c33f67194f3a922692a3d9b96ca9d90150adf7259c',
        proofs: [],
        merkleRoot:
            'eeef582def4ebea8fad684c33f67194f3a922692a3d9b96ca9d90150adf7259c',
        salts: 'W3sidmFsdWUiOiI0ZTk0NWY3ODhiMzUxZjVjMmQ3MjNmOTE0NzBmMTBkZmRmYjM3ZjI4MDMyYTQzMzQ2YTA5ZWE4MzdmOGM4Y2UwIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiZTU0MDM1YzEyNWFlMDBjMmE4YjE0N2EwYzg1NWIzZDRkNjI1OGU2YWVhY2E5YjI2YWE2OGQ0YzhjZmQ5MmY3NCIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI2NGNmMzIzM2MxNTE4NmQxNTA3ODkzYWY0ZThlYzc3OTQzNDExZjFlNjE5YTU1ZTA1YjllNzE1OGMwYjdmMWNjIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6ImY4Yzg3MjQxMjBkZjNkODYyOWM5YzFmZjZiNzRjYjlmOWRiNmE4NWQ3ZDY5ZWY5OTFkYzIwNzc5OGNkOThkMjYiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiNGEwZDZjOGRlODU5MGUyNDRiYzU5NGEwMzQwNmMwYjRiMzhmNjkzYzQyNjJmMzc1Mzg5NzM3NGU1NDM2OGVkNyIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiI5MjBjNjhjNmU2N2NiZWQ5YWQzMzFmNWQzMmJkM2MyMDM3NzNiMmRiYWIyYzU0Y2QxZjM1MmZmZjA5NTQ2MGU2IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiJiZmRiNzE5NDY3NjhhNzc0MTZkYzdhYmVlZGYzYWYxN2QwYjUxYjQ1ZmYyZDVkYTIxODMzYjkwYThlZjRmZjBjIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiY2Y4N2QzMDM2N2M4MDU3YmNiZjE5NTJhMGRkNDQ3Nzg1YjZkZDk4NGY2NWYzYzdjOGIyMDdlZDE0NWUyOWM2OSIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiODExMGZkZWNmM2FkMDkwYjk4MTM0NTQwNzEwOWVkZDJiNjVlMDM3OGYyNGJlZmZlOTQxZWYyZjE4NzU2YzQ0MCIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiZmJkNTU0ZWRlNjM1Zjg4MzVmMmU1NDI2ZDJlNTNkMjczMDYzNzczMDQ5NGJiY2Q3Zjg4MTI5ZTczY2U1MzIxYyIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiOTIwMjA5M2VjMGU4ZTQ3YmRhOGMzZmI1NDcyMGM3NDQ1MGM0NzQxZDc3NmFhMWI1ODA3MDAxNjRiNDY1ZmY0MCIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiJhNWFjZGIzOTE2ZThlYTU4ZjIxOTQwOGQ5YTNiZjM5MzNiZThiNDhmYjhiMTJmMjg2NGY0NWRhYzczYWUwZjgyIiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6Ijg3OGMxNjY0ZGQ3MDgxNzk4ZmM5M2ZhMDY3ZjZmMTRjODkwMGU2NWE4M2RkMTg4ODcwNzA5YWRkZWI2NjVmYWIiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiIwYjZlZDk3YzRhZjBiYmE5ZTg2ZGE5ZjJmZTQ0YTUxYzU0YTNlOTA0ZjVkZWRkMTc4ODc1Mzc1OGYyMTdkMDEwIiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiMGY5ZTA0MzdiNGEzYjU1YzNhYzI2ZWE1MDk4MjU3MDFlNGQ2NzkwMWE3Y2ExNzNkYWM5YTM1M2E1MTE0NzQ1OCIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6Ijg3NjhmNTNhYzAzODBkODY5OWJhM2VlNmM5YTJkYThhODJjYWIyNjg5MTU5OGNiOTVhMWRmZjI1MTg3MzEyYjYiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiOGRiNGZiYzRlMzIwOGI3MjhhNTdmYjQ0MzQyN2U2ODA2MWNjMjRjNGQxZTZmNjBjMjlkYWUwMjQzYzhhMGIzOCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6ImUzZjFlOTMwYzliYWNmNDMyYmNhODg5NTZmZTgzODcwZTUyNzg0MTQxODIyNjQ2MzExOGEyNmFhZjY0OGM3YzMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiJjMDkxOTdkYTk0YTk4OTg5NDdkYjYxOTZiMTIyMTdjZmFiYjFhZmYzYTNiOTQ0YTJkYTI5ZDk0Njk5NDExNjA4IiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiMmYzNTg4NjljNWRkZDgwNTI2MjcwZmViNDlhMmRiMmJlNWI4ZDZlM2E2MjlhMGFiMDk1YTgzN2YzNzc4YTljNSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6IjI2ODhmYWY2MjQyMmY3NGJiZjk2YWM0ZGY0MDUyMzVkYzQyMGFiZTczZWU0Y2RjNzg2ZTQyZTAyYWJmZWM5MzgiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiI4OWYxMzdlZDI3MzQyN2MwNTg1ZWI2MTg5YWZiYzlkYTVmY2IxNjMxNDI1ODkxOGRkODg1NDU5OTgyNzIyMTIyIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiMTY4YmJkZTk4ZjAzNDMxZDFmMzcxMjgwMmUwY2Y5NjI0MWI2ODcxNDRmYTAwMTllYWVkZTI5YjJmZDQxYzE3NSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiZDc1MGY2M2Y0MTkxMDJlZGYzMTQ0MzRiZTg2OWQ3YWJmYWQwNGUwY2IwODBmZDYwNTE1ZmZlMTlmNmQ2OTg5ZiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6Ijk1YjkzNmViYmY4MmI2M2I2YTI3ODAwMGJjNjAxZDZjNGM4NDk1NWYxMjE4OTc4YWU5NGViZDcxYTA5ZTNhNmQiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6Ijk5OWE2ZjIwNmQyMDcyNzlkNTBjM2IyOTJjNjE0OTBmZGIyNDllMDQ4NzY0ZjM2NWExOWJhN2VjNWZkNGU1MDEiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiOWNlYjhjZmQ4YmFjYWI1MjVkMWJhM2UzOTUyZWRhODk5NDQzYjY3ZDBiNThiOGFmZGIzYThkYjk2ODA5NjViMSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiMGM2MmVhMTY0MTE3NzBiMDdiNmJiOTU0MTMzZWFhZjNjYzEzMjIxZjZmMDBjMDIwODNjZjZjMWRiZDg4MmM3ZSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifSx7InZhbHVlIjoiNmQzMzhmZDU4YWY3ZjJkZDMxNWY4NzA2ODFkM2VhY2RlZmVhNWRlOTEwNDc2ODdiYjlkZTEwZTU1ZDQ0YjYxNyIsInBhdGgiOiJhdHRhY2htZW50c1swXS5maWxlTmFtZSJ9LHsidmFsdWUiOiJjNTZmN2UyZTg4NTRkMjQ5NTNkNWU4OTAzZjcxNjY4M2FkMmZhNzVkMDE4MTRkNzA0OGU0NmNkNTRhYWNiZTZmIiwicGF0aCI6ImF0dGFjaG1lbnRzWzBdLm1pbWVUeXBlIn0seyJ2YWx1ZSI6IjFjMmZhZmQ4MGMxNzJjYmNjM2M2ZDFmNWI1OTVmYmY4MjE2YmEwOWM5ODVlMTliNmU1ZTE3MzAzMGE2MGE2NTYiLCJwYXRoIjoiYXR0YWNobWVudHNbMF0uZGF0YSJ9XQ==',
        privacy: {
            obfuscated: [],
        },
    },
}

export const dnsTxtDocStoreIncorrectDNS: WrappedDocument<CustomDocument> = {
    version: 'https://schema.openattestation.com/3.0/schema.json',
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
            method: 'DOCUMENT_STORE',
            value: '0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
        },
        identityProof: {
            type: 'DNS-TXT',
            identifier: 'example123.tradetrust.io',
        },
    },
    attachments: [
        {
            fileName: 'sample.pdf',
            mimeType: 'application/pdf',
            data: 'BASE64_ENCODED_FILE',
        },
    ],
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '3ef17c1a3b5a05395340c7ba30c41fc1a73f3091585fade6401a42eb684944a8',
        proofs: [],
        merkleRoot:
            '3ef17c1a3b5a05395340c7ba30c41fc1a73f3091585fade6401a42eb684944a8',
        salts: 'W3sidmFsdWUiOiI0ZmQ4Yzg4MmI4N2E4YWMyYWU2MjZiZjFmNzlmYTQ5NzQ5NTAzYTRmNTg3MzhhMGFhZTlkMmRmMTNmMjFlNTExIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiYWM1ZmVjNjgzMzZiY2ZiNDk5Y2MzNzIxZmU4ZWRjZThkNzY2ZjdmYTc4NDllMGFiZDgxMGJlYTc3YmY3ZjJiOCIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI1YzRiMDQzNTcwNjUxZDc4N2NjNjcxNDE0ZTY5ZGZkZGU0MjA3NjNhY2IwYzQxYzEwZjIxMzgxYjc4YzVhZmQxIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6ImZkMzQ4ZmY5ZjNiMDkwNWQxNjM3ZjQ4MTcyMDMxZmI3ZmM1N2U1MDkzMDQ4YjBlNzVkZmJmOGExZTFhMDRjNzgiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiZTQxNzA5ZTFiYTg5N2I1MWEyODk5NTczOWEyYmJlMmViZWQwMGEyMWJmZWM1ZTFjODk0NWMxOGFjZjgzZjQwNSIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiJjOWRiYjA1OWI5NGUzN2QyOWM1YjBiMmI2MmE1OWY1N2ZiNTMyMmExYzM1ODg5MGUwYjM2NDJiMDczNjdhYjhiIiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiJiYjc4NGM3ZTE0OWY5ODcyNjA2MzA2YjVmNTAxNjQxNDRlNmYxYTI5ZGQ2YTJkNDlhZDZmZDk2NWZlMjM5OWY2IiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiNmY0YzQ3ZjQ4NTI5YzIwMjA3YjQ4MDBkODRiNDk5ZWI3ODU1ODBlMTFkZjFlMGU5Nzc3Y2IwYzUyMDY0NzkzNiIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiNDU1NzMzYzU0NzNiYTA5ZjBmMDMxM2IwMjE4Y2IzNjU5ZTg1MTgxY2IzYjdmMGVkNTE2ODg4NjViZDBjZDI4YSIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiNGE2MTc3ZDQ1MzYxYmIxMTljNTMxZGIyOTM1Mjg4MzEyYzM5MmNhODZiNTIxYjMzYzllMmI3NjIzMDNmNzVmOSIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiYWZiY2U1OTUyYzdlNjM4YTU4ZWRlYjRkYWQ0OTI4MTNiZWZlODJmZWJhYzhkYmEyZTk1MzVkMDVkNDJjMmRhYiIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiJmM2M0OTJmYzgxOTc2NzQ5MWE5ZGM5ODU0MWI2OTgwZjZkZTg3YjNjNDY1MmRmY2U4ZDQwNzYxMjc3NTI1NGMzIiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6ImE5ZDc3MDlkN2U3YjE2MmMzZTllMzQzOWQ4ODBlOTk1MTdjZGJlODFiZDFmMTFlNGZkOWQzZGU4ZWIyOTE1MGQiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiJiMDQ4YjJmODBlY2UzMTY1MzliYmE3N2VmMzczNDhiM2U0MzZkOGJjYmYxM2M5NmMxZGRhYjIzYWU5N2M2ZjY3IiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiNTdiYmE1Nzg3YWZiNzA5NjA3Y2UwNWExZGVjMzJkMGQ2YjA5YWE2OTcwYmVlYzQ4YWZlMTljNmQyNmQzMjlkNyIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6Ijc1ODQ2MDk4YTI1ZTE3NTZjZTliZmViNzE3MTIwOThmMjIxOTVlNGMwZDgwNTdmMGQ3ZjJiNzE5ZGY0Nzk0OGEiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiNDE0Njg4NzNhYzBkYmVkYzBlZjc4YTI3MmE5MDgyNWMyOGNkNjRiNzc5ZjFkZmU3YTIyZWE3MTVlYWRiMmQ1MSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6IjVkNzMyZjI1YWExOTlkZjI4NDRkNmI4MWQyNWIzNjdhY2E4Yjc4ZTM4NGE2NWNhOTZkMGI4ZTQxYmU2ZTcwMDEiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiJlMTY5Yjg4YjdjZTJiNTI1OTFjZGRhYjY0MTFhMDE2Y2JjMzA1ZDUzYjVlYTBkYTczZDdlODM5MDNiNjYyMDM5IiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiNWNjZWY0M2U0OWIxN2FhM2E1YmIzNzM3NjdhODUyZmVjYmViN2ViMTM1NmUyMDQzZGE4YTMyMjZlNzA3MmEzNSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6ImIzMzNhMDJjNTY2OTkyYjQwZmJkYjVjYjgxZjEyNmM5OWUzOGNmYTE4MTBlNTdjZmQ1ZDI2NjkzYTczNDBlMjAiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiIzYjg2MjM1N2RkYzkwNzc0YzJiNDY3ZGJiNjM5MzE4ZmY1MDdmYTdmOThhNTM0NWIzZTI2ZWFmOTM5MzNjYWY4IiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiNGFhYTVmYTEyZmZkZjgyOTMxMTUyYzYyZGVjYTE0NDMxMTQ2MzM2N2FiNzU4MDAyN2E0YTI2ZDVmMzI4N2UzOSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiMDAwZThmNDYwNWY0YjRkNTFjYzM4NDM2ZWFlZWIzOGQwNzc3N2NlYjA5NmJkYWZhOTU0OTU1Y2VhMjI0MzJlOSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6ImQxZWMwODhmZDVhNGY0ZjFiM2EyY2M3MGU1NjQ1MTUxNWI3NDNhZDhiZjg3YTE3MTAwNzgyNDkyYjQwOGI3NDAiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6ImIwZTU1NTc4NmMzNjI5YjNmMDdmYmQ3NDAxNzQyNjJlZDE3M2RiYzk5M2NmMmRmNDkwZDkyNWZhYzk4YmFhYjUiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiZTBhYmExYWU4ZThhMGNjZTU4MDllNDI0MjQ4YjE0ZTExYTdkN2QzOTEwYjI5ZjA3NjNmNzc3MzM5NDFiMDM5MSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiNzUxOWQ0YzcyMTlhMjZjYzM5M2I3NzAzZjIzYjhhZjkzZjI1OTg1N2I1YjdiMjIwODMyMmU1YmQ5MDk0M2MzMiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifSx7InZhbHVlIjoiODkyZTNjNDdmNTcxNTc3OTY4YWI2NTdjYzAzN2Q2ZjRkZjAxZmQ5NzdkMWMwM2JkMzM5OGVlZmYyZDU4N2I2OCIsInBhdGgiOiJhdHRhY2htZW50c1swXS5maWxlTmFtZSJ9LHsidmFsdWUiOiIxMWM4ZGVkNDhmOTAxNjZmZTY5MTZhY2EyMTQ3NjcxOGNlN2M0OTA3MGE0NjBjMTJkOTIwZTdiZDU5MjE5OGE4IiwicGF0aCI6ImF0dGFjaG1lbnRzWzBdLm1pbWVUeXBlIn0seyJ2YWx1ZSI6IjhmMGUyNWI1ODgyMzJjNDhmNDU3ZmQ3M2RlNDE1MGZlMTQxMGU4ODQzMzdiMzc4MWM1NzI5Mjc4NDBjZGIzODkiLCJwYXRoIjoiYXR0YWNobWVudHNbMF0uZGF0YSJ9XQ==',
        privacy: {
            obfuscated: [],
        },
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
                method: 'DOCUMENT_STORE',
                value: '0x99f7E4777a8D1b6EdD5F2d9b8582e2817F0B0953',
            },
            identityProof: {
                type: 'DNS-TXT',
                identifier: 'example.tradetrust.io',
            },
        },
        attachments: [
            {
                fileName: 'sample.pdf',
                mimeType: 'application/pdf',
                data: 'BASE64_ENCODED_FILE',
            },
        ],
        proof: {
            type: 'OpenAttestationMerkleProofSignature2018',
            proofPurpose: 'assertionMethod',
            targetHash:
                'f039e1328ad4a21e7d58d6dab1caea228238bee71080b1364bb6f1097c39b407',
            proofs: [],
            merkleRoot:
                'f039e1328ad4a21e7d58d6dab1caea228238bee71080b1364bb6f1097c39b407',
            salts: 'W3sidmFsdWUiOiJhODAzNGZlOTA0MjNmMDAwMDdlMGMxNzA5MTg0ZjY2NWI0NDcwZTEwNDk0OGFiMzhlOTkzNGNlNTkwOWYwZmQ2IiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiMGY4N2IzMDcwZGU1YzY5YTU4OTgzMmQ2NDFlZTc1OWE1MzBiMGM3MWU2ZDQ1NzExY2YxZTVlNzUzNGZiMDA0ZiIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiIwZDI4NTAyNjE5ZmViZTQ5NTc4YTViNmEzN2JlYzk1MTU3OWVmY2FhYmUwM2ViZjY0YmY1YzkzYTZiNmM1ZTNkIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6Ijg1OTFmZGQwMTdmOGMwMTQyNGIxYTkzOTAxZjAzNjdiNDRjYmU3ODljNzRjYTk4YzFhZjAwMzNlODc3MmExOWQiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiOGRjZjc4ZDQyZDNmMTQ4YzY1NThiZWM4ODZjNDIzZmJhODg0YThmN2NhOGFjZWRkMmY5YjViMGJhN2E3M2JiYSIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiIzMjI1YjZlZWE1M2VhZGNhNmEzZGZhZmNlOTAyYmEyNjk4M2JmMDRjOWFmY2UwMDhhNzkxM2FiNTRmZWY1ODIwIiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiJjNGUyYWQ4Mzk1YWUxNmExMzdhMTEyNjcxN2YyNDU0ZmY2N2E5ZmFhYzY1MWJjODliMTYxZWY1NTlmYjQ5NzZlIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiNDRlOGZhOTEzNGVhZGRlZjE3OTRiMTE2ZDViMmM5OTE5ODdiZTYyMjA5Yjk0MjgyYzdiYjJiNTI4Zjk0Y2I3NiIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiNGZiMjIxM2FmNzEwOGZjNzNlMGZlMDkwZmVmZWE2YWE2ZGNmNWJlN2ZlNWQ2YzJlMjQ3NTgzNzcyY2RmMzgxYSIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiNmQ5OGUxZWJmNDRlYjdkNDUyZTk1YjY2NzAxNzY3YjYyMjU0NTIwNDlmNDNjMjJhMjhkY2YwYjA0Y2JhNGE1ZiIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiMDAxMDIzYTJlNDkwYTNhYzdhYzAyOTNiNjJhZmRhNTNlYzJjNmRiMDRmZDVkODVjMWU0OWY0MzVmNjNjNTQ2NiIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiI4MWVkODJjYWRhOThjY2NjZDJjZDgyNzFlZTg5NzRlNmUyNWRmMDlkYzdhMzg0MGJhOWQxY2NjYWVhZDIzZDA4IiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjA5NjlhMjIwYTUyZDVhZDA3YjZmZjFlYTBhMzY2NzY1OTQ1NGEyYjRmOTJmN2JiNTgwYjg1MmYwZWIyMGE3M2MiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiJhZDU3YThjYmNhZGI4N2IyMDQxNzM0YjRjNDU4ODVmMDhhNWFmZTc5YTIyNTQ1NjlhOTNjMWM1Yjc4ZGRlYzk2IiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiZjY0ODM4MDVmODE5NThkNWViYjk0ZDM5MTk3MjAzODVlODUyMmFmN2JmNmE1NGRjZDU1YTJmZmFjMjdlN2ViZSIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6IjRlNDA0NGIyYWQ1YmZmZGI1OWIyMWUyZWM1MWEzMzNhN2QwMGRiMTNjOTY2ODc2ZGZhZTM2ODI5N2EzZDk1NmQiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiMTQzZjkzYWEwMzFmZTUwNzI3NGE2ODEyZGZmZDkzOTIxMWE5YWRhZjRjNGUzMzBhOGYzN2RmNmE1M2E1NmY0ZCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6ImViMjFjYWI2NDU5MTdlOWQ4MGYzOWQwNmNkYzdjZDE2ZTRiYmRjZTk4ZmFmZTRlM2FiYTY2NmQwZTE5Zjc3NzAiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiJjZGJlYzlmMjE1YjNlM2YwNzNhNGQyY2Q0NGIyODJkZDY2MjVjZDgzMGFkZGY2NTQ1MWM5ZWQ0YjQ3MjEzMmE0IiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiYzdiYzdiNGIxYWM1OGQ0MThiZmNkMDZiOTdjN2Y3Yzk4MjFlMjkxYWJlNmFiYzVhNWNiMmYzZDIzNzdiMDNjZSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6ImE1ZGIwNWZiZGIxMmQ5ZTdlNTUwMWJmYTdlOGE0NTg4OGJjYWI4YTIxNTQ0YjE1NzUzMjIyZDhjNWY5MWJkZTQiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiI4MjE4YjkwNDJhNjhiNjhiZTU3YmQ4MWY3ODc5MzdjZWM3MDVhNDcxMDllYTU4NjVlMjMwN2E0MmY3ZThjY2IzIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiNDFlMjQyMGU0NThhNGRjOGM2ZGM2YzczZDllYTlmMGVhMjVmZTQ1YzY5OTliMWZjZjEyNTI1M2EyYzhjNTY1OSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiZmNhNGQwNzA3NDEzZDM2ZjhjM2ZmMDVkOTIzMTNhMmEwYmIxNGU5Y2IzNjk3ODQwNTljNTNjZTVlYzJiN2QzMiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6ImE4MzM4OTM1YjRiOWZmNDc1NmE0NjJjMjZmNmY4ZTYzYmVjY2VlNzlhYjIwYTk3MDlkMTY4N2Q3MjBmNWY4YTQiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6Ijk5NGUxODNiNjdkZDhkZjBkZTVlN2RiMTdiNzI4MTJlNzQ0OWMyZjA5MjYzNmZlNGI0M2ZmYjIzMTM0YjhkNDgiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiODE4MTJkNDgxNGFjMDJlYjZjOWNiMDBjOTZiOTE4MTlhMTgxZGE1MGVmYWZmYTY0N2YyMzlmNDQ5NmFmZTU2MiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiN2M2YTNkZTNlNjdmNGNiMWNjMGRhYzlmZDczYzdmYzFmMzM3NDlmMWM3YTZiM2E1YmQzOWNkZDdhOWZlMTQ4MSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifSx7InZhbHVlIjoiOTI1NzUxNDNmMmI2NzhkZjRmYmY3MjAzZTY4MzkxOGUwNGFlODgwYTk1ZTc2MGU4ZmExMDBlNzU2YzEwNWMwMSIsInBhdGgiOiJhdHRhY2htZW50c1swXS5maWxlTmFtZSJ9LHsidmFsdWUiOiJlMmVhYzE4YjFkNTY2NTU2Yjk2MmE4N2ViMmNlM2NmOWJmNmMwNDE1NzExOTJhOGZjN2Q5OWZhMmE4M2VjYTViIiwicGF0aCI6ImF0dGFjaG1lbnRzWzBdLm1pbWVUeXBlIn0seyJ2YWx1ZSI6Ijk4Zjk1MWM5NThlYmRiNmYzZWMyN2VkMDg1NDE0ZGIzZjhhZWFhM2M0Zjk0M2FmNzBhZDY5ZDE1ZmQxMTNmMDAiLCJwYXRoIjoiYXR0YWNobWVudHNbMF0uZGF0YSJ9XQ==',
            privacy: {
                obfuscated: [],
            },
        },
    }
