import { SchemaId, WrappedDocument, v2 } from '@tradetrust-tt/tradetrust'

interface CustomDocument extends v2.OpenAttestationDocument {
    recipient: {
        name: string
    }
}

export const dnsDidSigned: WrappedDocument<CustomDocument> = {
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
            method: 'DID',
            value: 'did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7',
            revocation: {
                type: 'NONE',
            },
        },
        identityProof: {
            type: 'DNS-DID',
            identifier: 'example.tradetrust.io',
        },
    },
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '7e5a3f03f8f4b06314689ec944748e60c97689ef734d75583577d6f647b9747d',
        proofs: [],
        merkleRoot:
            '7e5a3f03f8f4b06314689ec944748e60c97689ef734d75583577d6f647b9747d',
        salts: 'W3sidmFsdWUiOiJhNWI4ZDE5NGM1MjIxMzJjNDgwZTY3ZmM0YmYyZDQzMmU2NWQ0YjlmZmUxMWEwNjlmMjNlYWQ1OTdkMzJjMDRmIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiMjk2ZmZhYTZiM2E5ZTRmZWU0ZjViMGU0NDA0ZDk5N2Q2MGRlY2YxMmZiZmViMDIyMjMwNTEzZGZiMDVjZGE3OSIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI3YjUxMjYyZjcyNDExNDVkNDhkODI2NDJiMWUwMjlkYTdkNTZmNzkwNDU5NWQ1Nzg1M2UyMmQ2MDUwYmQyY2RjIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6IjNlZDhiZmVkNjkxZjg4MWMwZWNmOGNhZjJhYzA0ZGJjYzgzODFiOGIyNmU3YWZkMDg2MTZlNzA2Y2M1ZjZlNzUiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiMWVhMDUxYTlmZDIyNzFhMDBkMWFkZjM2Zjc1ZTFkOWE1M2UyYjcwYTY0ZTc0NjNmYWRlMDhlYjY5NmRmZWFmMCIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiI0MmUxYjIzMTU2ZDNkYWE3Zjc1MTFkYjI1MDY5YjkxYjMwNzhiMjEwNWY1MmFmMTA0N2QwMjRjMzgzZjlkNzg5IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiI3ZGI3YzZlNTgwZGEwZTAyODM3OThjMmQxM2NiYTRkZTZiOTU5Yzg0MDUxNGFjN2I5ZjYzZmVhYWE0MzEwYzFlIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiZGI5MzQ2ZGJmYzQzYjFlZDAyNTM3MTNlM2VkNDNiZmYyYjY5NjcxMmM0M2M4ODE2ZjMwZmQ1ZWM5NGQ4NDk5MiIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiODg0Nzc3MDVhMzdkYTNiNjBhNWExYjZiZDAxZjI0NDFhYzdjN2IyMTg3MDNlODkyZTZhNGQ5N2EyNGRkMDAyYyIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiMTYyOTdmYThhN2JmZjAwNjc2ODdhMDUwZWNmZmY4MTdlY2RkYmExYjEyMTI0NDZmM2FhOTMwMjI1MDQ4NmExNyIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiNWEwZDE5NzE1ZTI1YTk5ZmQ1OTQ3OWI3Y2I5MDJhODk4MDkwNTE4YTNkMzQ4MzViZjM1MjAyNTNkYzE0ODYwZCIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiJlYWFkZjY3YzE1OTFjZTM2YmVkMDYzYmQ4MTU0NzQ5OGY1MDViOTVhNWM1ZWFjYjRkNDQ3ZmE2NGUxNmVkYTIzIiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjhjNTM0MmViNDNjNDEzYmYwZmRiNTNiMWFlNWMzMjdmYzIyNGNiYTFiMjVkYmZlZDk5ZTYwZjM5ZWE4YWNkNWMiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiIwMzk0YjE5ZWNjZmEyZjE4NmIzZGIxMGI1YmI4YzQwODBkOTQzY2IyNDZkN2ZhYWVlMzJkYWIwMDNhZTIzZjBlIiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiNTMyMDRhYWQ0N2I0YjFlYjQ4OGU0NjUwNWViMzg5MDNlYjk3OTQ3MThjMDhiZmI5NzBkZjE0YzY3ZWU5ZTUzMSIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6Ijg5NGEyZGM4NzdmNGE5YzU5NzQ2NTAzN2JlYjA2OWZjNDBmNzYyODRlZTI2MzUzZGM0NTA1NjRjY2UwOGIyNWMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiYmVhMmE3ZTczMzkxMWJhYzRkOWIyMTI0YmY0ZjgwZWJlZDAwYmZiNDNmZTUxYmIxMjVlNThhN2FiNjc5N2IzOSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6IjZjMDE2ODgwM2ZlMWI3M2Q5YWQ4NjdmZDhkYjIyZjczZmQ4YjE2Y2VlYTMwMGYxNjVhNWYzMDE4ZmQzOTFhOGMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiI1MGMzNDcxMGMxY2I1ZDNhZGMyZTJlZGExODBlM2JiZWJhN2U0Mzg3YzYyZTkwNzk2ZGVjYmM2NjY0ZjI0NGUzIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiYmI1NTAxY2U3NzBiNjk4ZTJhZDZhNWQ2ODhkN2ViZmU4YWI0YzZmYzcxOTllOWI4YzY1NTdkN2M4NTE4MjgzMCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6ImM0MDNmMWJlMWYwNmFhZmYzMWI2N2RhMjAxOGRhZmI4ZGE3ZDNiZWNkMmJjZGZhNjczYTA5M2M2OTEwZTkzNjciLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiIzNmE4OGNmYzk5Yzg5NThjYmVkOGYwYjQzMTdmMWE5ZjlkMmU4YTkyNzllNjhiM2RkZDU3OGI5YmMwYjE2NDVhIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiNGUyODc1YjFmYzE0Y2ExMTg1YjIwMzdmMjZmZjM4OWFjODg3ZGExYjMxNTQ3MDYwODE4YzhmYzMzOGJkMjlkNiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiOGU0NzQzYjY0MjIxMzE0YTFlZjA4MWI2ZmIxZTk1ZjU3OGUwZTEwMjY4ZGU5OTM2MWRmNTczNDQ1ZGEyMGU0ZSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6IjdmMWRiZGQwYjM3YWNlYWRjNzY2OTJmZWE5NTRiYjIwNTAzYTY3MDI0ZmRiMGE5YjExN2QyYTA2MjlmNmYxMGEiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6IjA1NmFkYjhkMjZkZGQ0MzQyZTM5ZTdlNmRjYTA5ZTI0MjgxNDA3Mjg0MTU1ZjVmYWRlN2M0MjRjZTczZDZlZjkiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiNzEzZDE4MGUxMDgxNWEwMGNjMmYwMmQyYTA4NDBhNzNkNzIxNWU3M2I0YzhhNWZlOGZmZGZkNzg2NDJjNTEwNiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi5yZXZvY2F0aW9uLnR5cGUifSx7InZhbHVlIjoiYWNmODhjZTFhZjhiNTg4MmFkOTlkNDAwZDJmM2UzY2MzYzAxMmJkOWY3OGFlYmY2YTNjYzNiMGFhMzYwYjAyMiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiNWRjNmNkYzBjMGJmMmI0OTMzYzQxNjk2ZmIzOWUzNzlkN2YxMWI0NjFkNDc0OTc0ZDY2NWI5MDBhZGJjNWEyZCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifV0=',
        privacy: {
            obfuscated: [],
        },
        key: 'did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7#controller',
        signature:
            '0x7d43a79c4dc1da3300457883bd2d5e3f181f1a19742984cfb0b191412793984f3fa83d9f5d3a800b4bd9403a0c35f87415da0d19daa23f3b2d05b8f425085f821c',
    },
}
export const dnsDidUnSigned: WrappedDocument<CustomDocument> = {
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
            method: 'DID',
            value: 'did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7',
            revocation: {
                type: 'NONE',
            },
        },
        identityProof: {
            type: 'DNS-DID',
            identifier: 'example.tradetrust.io',
        },
    },
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '7e5a3f03f8f4b06314689ec944748e60c97689ef734d75583577d6f647b9747d',
        proofs: [],
        merkleRoot:
            '7e5a3f03f8f4b06314689ec944748e60c97689ef734d75583577d6f647b9747d',
        salts: 'W3sidmFsdWUiOiJhNWI4ZDE5NGM1MjIxMzJjNDgwZTY3ZmM0YmYyZDQzMmU2NWQ0YjlmZmUxMWEwNjlmMjNlYWQ1OTdkMzJjMDRmIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiMjk2ZmZhYTZiM2E5ZTRmZWU0ZjViMGU0NDA0ZDk5N2Q2MGRlY2YxMmZiZmViMDIyMjMwNTEzZGZiMDVjZGE3OSIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI3YjUxMjYyZjcyNDExNDVkNDhkODI2NDJiMWUwMjlkYTdkNTZmNzkwNDU5NWQ1Nzg1M2UyMmQ2MDUwYmQyY2RjIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6IjNlZDhiZmVkNjkxZjg4MWMwZWNmOGNhZjJhYzA0ZGJjYzgzODFiOGIyNmU3YWZkMDg2MTZlNzA2Y2M1ZjZlNzUiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiMWVhMDUxYTlmZDIyNzFhMDBkMWFkZjM2Zjc1ZTFkOWE1M2UyYjcwYTY0ZTc0NjNmYWRlMDhlYjY5NmRmZWFmMCIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiI0MmUxYjIzMTU2ZDNkYWE3Zjc1MTFkYjI1MDY5YjkxYjMwNzhiMjEwNWY1MmFmMTA0N2QwMjRjMzgzZjlkNzg5IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiI3ZGI3YzZlNTgwZGEwZTAyODM3OThjMmQxM2NiYTRkZTZiOTU5Yzg0MDUxNGFjN2I5ZjYzZmVhYWE0MzEwYzFlIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiZGI5MzQ2ZGJmYzQzYjFlZDAyNTM3MTNlM2VkNDNiZmYyYjY5NjcxMmM0M2M4ODE2ZjMwZmQ1ZWM5NGQ4NDk5MiIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiODg0Nzc3MDVhMzdkYTNiNjBhNWExYjZiZDAxZjI0NDFhYzdjN2IyMTg3MDNlODkyZTZhNGQ5N2EyNGRkMDAyYyIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiMTYyOTdmYThhN2JmZjAwNjc2ODdhMDUwZWNmZmY4MTdlY2RkYmExYjEyMTI0NDZmM2FhOTMwMjI1MDQ4NmExNyIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiNWEwZDE5NzE1ZTI1YTk5ZmQ1OTQ3OWI3Y2I5MDJhODk4MDkwNTE4YTNkMzQ4MzViZjM1MjAyNTNkYzE0ODYwZCIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiJlYWFkZjY3YzE1OTFjZTM2YmVkMDYzYmQ4MTU0NzQ5OGY1MDViOTVhNWM1ZWFjYjRkNDQ3ZmE2NGUxNmVkYTIzIiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjhjNTM0MmViNDNjNDEzYmYwZmRiNTNiMWFlNWMzMjdmYzIyNGNiYTFiMjVkYmZlZDk5ZTYwZjM5ZWE4YWNkNWMiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiIwMzk0YjE5ZWNjZmEyZjE4NmIzZGIxMGI1YmI4YzQwODBkOTQzY2IyNDZkN2ZhYWVlMzJkYWIwMDNhZTIzZjBlIiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiNTMyMDRhYWQ0N2I0YjFlYjQ4OGU0NjUwNWViMzg5MDNlYjk3OTQ3MThjMDhiZmI5NzBkZjE0YzY3ZWU5ZTUzMSIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6Ijg5NGEyZGM4NzdmNGE5YzU5NzQ2NTAzN2JlYjA2OWZjNDBmNzYyODRlZTI2MzUzZGM0NTA1NjRjY2UwOGIyNWMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiYmVhMmE3ZTczMzkxMWJhYzRkOWIyMTI0YmY0ZjgwZWJlZDAwYmZiNDNmZTUxYmIxMjVlNThhN2FiNjc5N2IzOSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6IjZjMDE2ODgwM2ZlMWI3M2Q5YWQ4NjdmZDhkYjIyZjczZmQ4YjE2Y2VlYTMwMGYxNjVhNWYzMDE4ZmQzOTFhOGMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiI1MGMzNDcxMGMxY2I1ZDNhZGMyZTJlZGExODBlM2JiZWJhN2U0Mzg3YzYyZTkwNzk2ZGVjYmM2NjY0ZjI0NGUzIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiYmI1NTAxY2U3NzBiNjk4ZTJhZDZhNWQ2ODhkN2ViZmU4YWI0YzZmYzcxOTllOWI4YzY1NTdkN2M4NTE4MjgzMCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6ImM0MDNmMWJlMWYwNmFhZmYzMWI2N2RhMjAxOGRhZmI4ZGE3ZDNiZWNkMmJjZGZhNjczYTA5M2M2OTEwZTkzNjciLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiIzNmE4OGNmYzk5Yzg5NThjYmVkOGYwYjQzMTdmMWE5ZjlkMmU4YTkyNzllNjhiM2RkZDU3OGI5YmMwYjE2NDVhIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiNGUyODc1YjFmYzE0Y2ExMTg1YjIwMzdmMjZmZjM4OWFjODg3ZGExYjMxNTQ3MDYwODE4YzhmYzMzOGJkMjlkNiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiOGU0NzQzYjY0MjIxMzE0YTFlZjA4MWI2ZmIxZTk1ZjU3OGUwZTEwMjY4ZGU5OTM2MWRmNTczNDQ1ZGEyMGU0ZSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6IjdmMWRiZGQwYjM3YWNlYWRjNzY2OTJmZWE5NTRiYjIwNTAzYTY3MDI0ZmRiMGE5YjExN2QyYTA2MjlmNmYxMGEiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6IjA1NmFkYjhkMjZkZGQ0MzQyZTM5ZTdlNmRjYTA5ZTI0MjgxNDA3Mjg0MTU1ZjVmYWRlN2M0MjRjZTczZDZlZjkiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiNzEzZDE4MGUxMDgxNWEwMGNjMmYwMmQyYTA4NDBhNzNkNzIxNWU3M2I0YzhhNWZlOGZmZGZkNzg2NDJjNTEwNiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi5yZXZvY2F0aW9uLnR5cGUifSx7InZhbHVlIjoiYWNmODhjZTFhZjhiNTg4MmFkOTlkNDAwZDJmM2UzY2MzYzAxMmJkOWY3OGFlYmY2YTNjYzNiMGFhMzYwYjAyMiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiNWRjNmNkYzBjMGJmMmI0OTMzYzQxNjk2ZmIzOWUzNzlkN2YxMWI0NjFkNDc0OTc0ZDY2NWI5MDBhZGJjNWEyZCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifV0=',
        privacy: {
            obfuscated: [],
        },
    },
}

export const dnsDidSignedAndTampered: WrappedDocument<CustomDocument> = {
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
            method: 'DID',
            value: 'did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7',
            revocation: {
                type: 'NONE',
            },
        },
        identityProof: {
            type: 'DNS-DID',
            identifier: 'example.tradetrust.io',
        },
    },
    proof: {
        type: 'OpenAttestationMerkleProofSignature2018',
        proofPurpose: 'assertionMethod',
        targetHash:
            '7e5a3f03f8f4b06314689ec944748e60c97689ef734d75583577d6f647b9747d',
        proofs: [],
        merkleRoot:
            '7e5a3f03f8f4b06314689ec944748e60c97689ef734d75583577d6f647b9747d',
        salts: 'W3sidmFsdWUiOiJhNWI4ZDE5NGM1MjIxMzJjNDgwZTY3ZmM0YmYyZDQzMmU2NWQ0YjlmZmUxMWEwNjlmMjNlYWQ1OTdkMzJjMDRmIiwicGF0aCI6InZlcnNpb24ifSx7InZhbHVlIjoiMjk2ZmZhYTZiM2E5ZTRmZWU0ZjViMGU0NDA0ZDk5N2Q2MGRlY2YxMmZiZmViMDIyMjMwNTEzZGZiMDVjZGE3OSIsInBhdGgiOiJAY29udGV4dFswXSJ9LHsidmFsdWUiOiI3YjUxMjYyZjcyNDExNDVkNDhkODI2NDJiMWUwMjlkYTdkNTZmNzkwNDU5NWQ1Nzg1M2UyMmQ2MDUwYmQyY2RjIiwicGF0aCI6IkBjb250ZXh0WzFdIn0seyJ2YWx1ZSI6IjNlZDhiZmVkNjkxZjg4MWMwZWNmOGNhZjJhYzA0ZGJjYzgzODFiOGIyNmU3YWZkMDg2MTZlNzA2Y2M1ZjZlNzUiLCJwYXRoIjoiQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiMWVhMDUxYTlmZDIyNzFhMDBkMWFkZjM2Zjc1ZTFkOWE1M2UyYjcwYTY0ZTc0NjNmYWRlMDhlYjY5NmRmZWFmMCIsInBhdGgiOiJAY29udGV4dFszXSJ9LHsidmFsdWUiOiI0MmUxYjIzMTU2ZDNkYWE3Zjc1MTFkYjI1MDY5YjkxYjMwNzhiMjEwNWY1MmFmMTA0N2QwMjRjMzgzZjlkNzg5IiwicGF0aCI6InJlZmVyZW5jZSJ9LHsidmFsdWUiOiI3ZGI3YzZlNTgwZGEwZTAyODM3OThjMmQxM2NiYTRkZTZiOTU5Yzg0MDUxNGFjN2I5ZjYzZmVhYWE0MzEwYzFlIiwicGF0aCI6Im5hbWUifSx7InZhbHVlIjoiZGI5MzQ2ZGJmYzQzYjFlZDAyNTM3MTNlM2VkNDNiZmYyYjY5NjcxMmM0M2M4ODE2ZjMwZmQ1ZWM5NGQ4NDk5MiIsInBhdGgiOiJpc3N1YW5jZURhdGUifSx7InZhbHVlIjoiODg0Nzc3MDVhMzdkYTNiNjBhNWExYjZiZDAxZjI0NDFhYzdjN2IyMTg3MDNlODkyZTZhNGQ5N2EyNGRkMDAyYyIsInBhdGgiOiJ2YWxpZEZyb20ifSx7InZhbHVlIjoiMTYyOTdmYThhN2JmZjAwNjc2ODdhMDUwZWNmZmY4MTdlY2RkYmExYjEyMTI0NDZmM2FhOTMwMjI1MDQ4NmExNyIsInBhdGgiOiJpc3N1ZXIuaWQifSx7InZhbHVlIjoiNWEwZDE5NzE1ZTI1YTk5ZmQ1OTQ3OWI3Y2I5MDJhODk4MDkwNTE4YTNkMzQ4MzViZjM1MjAyNTNkYzE0ODYwZCIsInBhdGgiOiJpc3N1ZXIudHlwZSJ9LHsidmFsdWUiOiJlYWFkZjY3YzE1OTFjZTM2YmVkMDYzYmQ4MTU0NzQ5OGY1MDViOTVhNWM1ZWFjYjRkNDQ3ZmE2NGUxNmVkYTIzIiwicGF0aCI6Imlzc3Vlci5uYW1lIn0seyJ2YWx1ZSI6IjhjNTM0MmViNDNjNDEzYmYwZmRiNTNiMWFlNWMzMjdmYzIyNGNiYTFiMjVkYmZlZDk5ZTYwZjM5ZWE4YWNkNWMiLCJwYXRoIjoidHlwZVswXSJ9LHsidmFsdWUiOiIwMzk0YjE5ZWNjZmEyZjE4NmIzZGIxMGI1YmI4YzQwODBkOTQzY2IyNDZkN2ZhYWVlMzJkYWIwMDNhZTIzZjBlIiwicGF0aCI6InR5cGVbMV0ifSx7InZhbHVlIjoiNTMyMDRhYWQ0N2I0YjFlYjQ4OGU0NjUwNWViMzg5MDNlYjk3OTQ3MThjMDhiZmI5NzBkZjE0YzY3ZWU5ZTUzMSIsInBhdGgiOiJ0eXBlWzJdIn0seyJ2YWx1ZSI6Ijg5NGEyZGM4NzdmNGE5YzU5NzQ2NTAzN2JlYjA2OWZjNDBmNzYyODRlZTI2MzUzZGM0NTA1NjRjY2UwOGIyNWMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiYmVhMmE3ZTczMzkxMWJhYzRkOWIyMTI0YmY0ZjgwZWJlZDAwYmZiNDNmZTUxYmIxMjVlNThhN2FiNjc5N2IzOSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1swXS50eXBlIn0seyJ2YWx1ZSI6IjZjMDE2ODgwM2ZlMWI3M2Q5YWQ4NjdmZDhkYjIyZjczZmQ4YjE2Y2VlYTMwMGYxNjVhNWYzMDE4ZmQzOTFhOGMiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuY2xhc3NbMF0uZWZmZWN0aXZlRGF0ZSJ9LHsidmFsdWUiOiI1MGMzNDcxMGMxY2I1ZDNhZGMyZTJlZGExODBlM2JiZWJhN2U0Mzg3YzYyZTkwNzk2ZGVjYmM2NjY0ZjI0NGUzIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmNsYXNzWzFdLnR5cGUifSx7InZhbHVlIjoiYmI1NTAxY2U3NzBiNjk4ZTJhZDZhNWQ2ODhkN2ViZmU4YWI0YzZmYzcxOTllOWI4YzY1NTdkN2M4NTE4MjgzMCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5jbGFzc1sxXS5lZmZlY3RpdmVEYXRlIn0seyJ2YWx1ZSI6ImM0MDNmMWJlMWYwNmFhZmYzMWI2N2RhMjAxOGRhZmI4ZGE3ZDNiZWNkMmJjZGZhNjczYTA5M2M2OTEwZTkzNjciLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEudGVtcGxhdGUubmFtZSJ9LHsidmFsdWUiOiIzNmE4OGNmYzk5Yzg5NThjYmVkOGYwYjQzMTdmMWE5ZjlkMmU4YTkyNzllNjhiM2RkZDU3OGI5YmMwYjE2NDVhIiwicGF0aCI6Im9wZW5BdHRlc3RhdGlvbk1ldGFkYXRhLnRlbXBsYXRlLnR5cGUifSx7InZhbHVlIjoiNGUyODc1YjFmYzE0Y2ExMTg1YjIwMzdmMjZmZjM4OWFjODg3ZGExYjMxNTQ3MDYwODE4YzhmYzMzOGJkMjlkNiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS50ZW1wbGF0ZS51cmwifSx7InZhbHVlIjoiOGU0NzQzYjY0MjIxMzE0YTFlZjA4MWI2ZmIxZTk1ZjU3OGUwZTEwMjY4ZGU5OTM2MWRmNTczNDQ1ZGEyMGU0ZSIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi50eXBlIn0seyJ2YWx1ZSI6IjdmMWRiZGQwYjM3YWNlYWRjNzY2OTJmZWE5NTRiYjIwNTAzYTY3MDI0ZmRiMGE5YjExN2QyYTA2MjlmNmYxMGEiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YubWV0aG9kIn0seyJ2YWx1ZSI6IjA1NmFkYjhkMjZkZGQ0MzQyZTM5ZTdlNmRjYTA5ZTI0MjgxNDA3Mjg0MTU1ZjVmYWRlN2M0MjRjZTczZDZlZjkiLCJwYXRoIjoib3BlbkF0dGVzdGF0aW9uTWV0YWRhdGEucHJvb2YudmFsdWUifSx7InZhbHVlIjoiNzEzZDE4MGUxMDgxNWEwMGNjMmYwMmQyYTA4NDBhNzNkNzIxNWU3M2I0YzhhNWZlOGZmZGZkNzg2NDJjNTEwNiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5wcm9vZi5yZXZvY2F0aW9uLnR5cGUifSx7InZhbHVlIjoiYWNmODhjZTFhZjhiNTg4MmFkOTlkNDAwZDJmM2UzY2MzYzAxMmJkOWY3OGFlYmY2YTNjYzNiMGFhMzYwYjAyMiIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLnR5cGUifSx7InZhbHVlIjoiNWRjNmNkYzBjMGJmMmI0OTMzYzQxNjk2ZmIzOWUzNzlkN2YxMWI0NjFkNDc0OTc0ZDY2NWI5MDBhZGJjNWEyZCIsInBhdGgiOiJvcGVuQXR0ZXN0YXRpb25NZXRhZGF0YS5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifV0=',
        privacy: {
            obfuscated: [],
        },
        key: 'did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7#controller',
        signature:
            '0x7d43a79c4dc1da3300457883bd2d5e3f181f1a19742984cfb0b191412793984f3fa83d9f5d3a800b4bd9403a0c35f87415da0d19daa23f3b2d05b8f425085f821c',
    },
}
