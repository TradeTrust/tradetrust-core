import {
    dnsDidSignedAndTampered,
    dnsDidUnSigned,
    dnsDidSigned,
} from '../../test/fixtures/v2/dns-did'
import { describe, it, expect } from 'vitest'
import { isValid, verify } from '.'
import { ethers } from 'ethers'
import { v3 } from '@tradetrust-tt/tradetrust'

const localProvider = new ethers.providers.JsonRpcProvider(
    'http://127.0.0.1:8545'
)

describe('verify(integration) dns-txt with dns:did', () => {
    it('should return valid fragments for signed document', async () => {
        const fragments = await verify(dnsDidSigned, {
            provider: localProvider,
        })
        expect(fragments).toMatchInlineSnapshot(`
          [
            {
              "data": true,
              "name": "OpenAttestationHash",
              "status": "VALID",
              "type": "DOCUMENT_INTEGRITY",
            },
            {
              "name": "OpenAttestationEthereumTokenRegistryStatus",
              "reason": {
                "code": 4,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "tokenRegistry" property or TOKEN_REGISTRY method",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "reason": {
                "code": 4,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "documentStore" or "certificateStore" property or DOCUMENT_STORE method",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "data": {
                "details": {
                  "issuance": [
                    {
                      "did": "did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7",
                      "issued": true,
                    },
                  ],
                  "revocation": [
                    {
                      "revoked": false,
                    },
                  ],
                },
                "issuedOnAll": true,
                "revokedOnAny": false,
              },
              "name": "OpenAttestationDidSignedDocumentStatus",
              "status": "VALID",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationDnsTxtIdentityProof",
              "reason": {
                "code": 2,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "documentStore" / "tokenRegistry" property or doesn't use DNS-TXT type",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
            {
              "data": [
                {
                  "key": "did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7#controller",
                  "location": "example.tradetrust.io",
                  "status": "VALID",
                },
              ],
              "name": "OpenAttestationDnsDidIdentityProof",
              "status": "VALID",
              "type": "ISSUER_IDENTITY",
            },
            {
              "name": "OpenAttestationDidIdentityProof",
              "reason": {
                "code": 0,
                "codeString": "SKIPPED",
                "message": "Document is not using DID as top level identifier or has not been wrapped",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
          ]
        `)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(true)
    })
    it('should return in-valid fragments for unsigned document', async () => {
        const fragments = await verify(dnsDidUnSigned, {
            provider: localProvider,
        })
        expect(fragments).toMatchInlineSnapshot(`
          [
            {
              "data": true,
              "name": "OpenAttestationHash",
              "status": "VALID",
              "type": "DOCUMENT_INTEGRITY",
            },
            {
              "name": "OpenAttestationEthereumTokenRegistryStatus",
              "reason": {
                "code": 4,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "tokenRegistry" property or TOKEN_REGISTRY method",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "reason": {
                "code": 4,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "documentStore" or "certificateStore" property or DOCUMENT_STORE method",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationDidSignedDocumentStatus",
              "reason": {
                "code": 0,
                "codeString": "SKIPPED",
                "message": "Document was not signed by DID directly",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationDnsTxtIdentityProof",
              "reason": {
                "code": 2,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "documentStore" / "tokenRegistry" property or doesn't use DNS-TXT type",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
            {
              "name": "OpenAttestationDnsDidIdentityProof",
              "reason": {
                "code": 0,
                "codeString": "SKIPPED",
                "message": "Document was not issued using DNS-DID",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
            {
              "name": "OpenAttestationDidIdentityProof",
              "reason": {
                "code": 0,
                "codeString": "SKIPPED",
                "message": "Document is not using DID as top level identifier or has not been wrapped",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
          ]
        `)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(false)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(false)
        expect(isValid(fragments)).toStrictEqual(false)
    })
    it('should return in-valid fragments for signed but tampared document', async () => {
        const fragments = await verify(dnsDidSignedAndTampered, {
            provider: localProvider,
        })
        expect(fragments).toMatchInlineSnapshot(`
          [
            {
              "data": false,
              "name": "OpenAttestationHash",
              "reason": {
                "code": 0,
                "codeString": "DOCUMENT_TAMPERED",
                "message": "Document has been tampered with",
              },
              "status": "INVALID",
              "type": "DOCUMENT_INTEGRITY",
            },
            {
              "name": "OpenAttestationEthereumTokenRegistryStatus",
              "reason": {
                "code": 4,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "tokenRegistry" property or TOKEN_REGISTRY method",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "reason": {
                "code": 4,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "documentStore" or "certificateStore" property or DOCUMENT_STORE method",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "data": {
                "details": {
                  "issuance": [
                    {
                      "did": "did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7",
                      "issued": true,
                    },
                  ],
                  "revocation": [
                    {
                      "revoked": false,
                    },
                  ],
                },
                "issuedOnAll": true,
                "revokedOnAny": false,
              },
              "name": "OpenAttestationDidSignedDocumentStatus",
              "status": "VALID",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationDnsTxtIdentityProof",
              "reason": {
                "code": 2,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "documentStore" / "tokenRegistry" property or doesn't use DNS-TXT type",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
            {
              "data": [
                {
                  "key": "did:ethr:0x391aFf3942857a10958425FebF1fC1938D9F5AE7#controller",
                  "location": "example.tradetrust.io",
                  "status": "VALID",
                },
              ],
              "name": "OpenAttestationDnsDidIdentityProof",
              "status": "VALID",
              "type": "ISSUER_IDENTITY",
            },
            {
              "name": "OpenAttestationDidIdentityProof",
              "reason": {
                "code": 0,
                "codeString": "SKIPPED",
                "message": "Document is not using DID as top level identifier or has not been wrapped",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
          ]
        `)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(false)
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(false)
    })
    it('should return in-valid fragments for empty document', async () => {
        const fragments = await verify({} as v3.WrappedDocument, {
            provider: localProvider,
        })
        expect(fragments).toMatchInlineSnapshot(`
          [
            {
              "name": "OpenAttestationHash",
              "reason": {
                "code": 2,
                "codeString": "SKIPPED",
                "message": "Document does not have merkle root, target hash or data.",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_INTEGRITY",
            },
            {
              "name": "OpenAttestationEthereumTokenRegistryStatus",
              "reason": {
                "code": 4,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "tokenRegistry" property or TOKEN_REGISTRY method",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "reason": {
                "code": 4,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "documentStore" or "certificateStore" property or DOCUMENT_STORE method",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationDidSignedDocumentStatus",
              "reason": {
                "code": 0,
                "codeString": "SKIPPED",
                "message": "Document was not signed by DID directly",
              },
              "status": "SKIPPED",
              "type": "DOCUMENT_STATUS",
            },
            {
              "name": "OpenAttestationDnsTxtIdentityProof",
              "reason": {
                "code": 2,
                "codeString": "SKIPPED",
                "message": "Document issuers doesn't have "documentStore" / "tokenRegistry" property or doesn't use DNS-TXT type",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
            {
              "name": "OpenAttestationDnsDidIdentityProof",
              "reason": {
                "code": 0,
                "codeString": "SKIPPED",
                "message": "Document was not issued using DNS-DID",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
            {
              "name": "OpenAttestationDidIdentityProof",
              "reason": {
                "code": 0,
                "codeString": "SKIPPED",
                "message": "Document is not using DID as top level identifier or has not been wrapped",
              },
              "status": "SKIPPED",
              "type": "ISSUER_IDENTITY",
            },
          ]
        `)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(false)
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(false)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(false)
        expect(isValid(fragments)).toStrictEqual(false)
    })
})
