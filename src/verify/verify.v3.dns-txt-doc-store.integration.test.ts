import {
    dnsTxtDocStore,
    dnsTxtDocStoreTampered,
    dnsTxtDocStoreRevoked,
    dnsTxtDocStoreIncorrectDNS,
    dnsTxtDocStoreIncorrectDocumentStore,
    dnsTxtDocStoreObfuscated,
} from '../../test/fixtures/verify/v3/dns-txt-doc-store'
import { describe, it, expect } from 'vitest'
import { verify, isValid } from './verify'
import { ethers } from 'ethers'

const localProvider = new ethers.providers.JsonRpcProvider(
    'http://127.0.0.1:8545'
)

describe('verify(integration) dns-txt with document store', () => {
    it('should return valid fragments for document issued correctly with DNS-TXT and not revoked on a document store', async () => {
        const fragments = await verify(dnsTxtDocStore, {
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
              "data": {
                "details": {
                  "issuance": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "issued": true,
                  },
                  "revocation": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "revoked": false,
                  },
                },
                "issuedOnAll": true,
                "revokedOnAny": false,
              },
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "status": "VALID",
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
              "data": {
                "identifier": "example.tradetrust.io",
                "value": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
              },
              "name": "OpenAttestationDnsTxtIdentityProof",
              "status": "VALID",
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
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(true)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(true)
    })
    it('should return in-valid fragments for tampered document with DNS-TXT', async () => {
        const fragments = await verify(dnsTxtDocStoreTampered, {
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
              "data": {
                "details": {
                  "issuance": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "issued": true,
                  },
                  "revocation": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "revoked": false,
                  },
                },
                "issuedOnAll": true,
                "revokedOnAny": false,
              },
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "status": "VALID",
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
              "data": {
                "identifier": "example.tradetrust.io",
                "value": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
              },
              "name": "OpenAttestationDnsTxtIdentityProof",
              "status": "VALID",
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
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(false)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(false)
    })
    it('should return in-valid fragments for document issued correctly with DNS-TXT, but revoked', async () => {
        const fragments = await verify(dnsTxtDocStoreRevoked, {
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
              "data": {
                "details": {
                  "issuance": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "issued": true,
                  },
                  "revocation": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "reason": {
                      "code": 5,
                      "codeString": "DOCUMENT_REVOKED",
                      "message": "Document 0xeeef582def4ebea8fad684c33f67194f3a922692a3d9b96ca9d90150adf7259c has been revoked under contract 0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    },
                    "revoked": true,
                  },
                },
                "issuedOnAll": true,
                "revokedOnAny": true,
              },
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "reason": {
                "code": 5,
                "codeString": "DOCUMENT_REVOKED",
                "message": "Document 0xeeef582def4ebea8fad684c33f67194f3a922692a3d9b96ca9d90150adf7259c has been revoked under contract 0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
              },
              "status": "INVALID",
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
              "data": {
                "identifier": "example.tradetrust.io",
                "value": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
              },
              "name": "OpenAttestationDnsTxtIdentityProof",
              "status": "VALID",
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
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(false)
    })
    it('should return in-valid fragments for document issued correctly with DNS-TXT, but the issuer dns identity is not valid', async () => {
        const fragments = await verify(dnsTxtDocStoreIncorrectDNS, {
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
              "data": {
                "details": {
                  "issuance": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "issued": true,
                  },
                  "revocation": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "revoked": false,
                  },
                },
                "issuedOnAll": true,
                "revokedOnAny": false,
              },
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "status": "VALID",
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
              "data": {
                "identifier": "example123.tradetrust.io",
                "value": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
              },
              "name": "OpenAttestationDnsTxtIdentityProof",
              "reason": {
                "code": 4,
                "codeString": "MATCHING_RECORD_NOT_FOUND",
                "message": "Matching DNS record not found for 0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
              },
              "status": "INVALID",
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
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(false)
        expect(isValid(fragments)).toStrictEqual(false)
    })
    it('should return in-valid fragments for document issued correctly with DNS-TXT, but the document store identity is not correct', async () => {
        const fragments = await verify(dnsTxtDocStoreIncorrectDocumentStore, {
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
              "data": {
                "details": {
                  "issuance": {
                    "address": "0x99f7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "issued": false,
                    "reason": {
                      "code": 1,
                      "codeString": "DOCUMENT_NOT_ISSUED",
                      "message": "Bad document store address checksum",
                    },
                  },
                  "revocation": {
                    "address": "0x99f7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "reason": {
                      "code": 5,
                      "codeString": "DOCUMENT_REVOKED",
                      "message": "Bad document store address checksum",
                    },
                    "revoked": true,
                  },
                },
                "issuedOnAll": false,
                "revokedOnAny": true,
              },
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "reason": {
                "code": 5,
                "codeString": "DOCUMENT_REVOKED",
                "message": "Bad document store address checksum",
              },
              "status": "INVALID",
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
              "data": {
                "identifier": "example.tradetrust.io",
                "value": "0x99f7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
              },
              "name": "OpenAttestationDnsTxtIdentityProof",
              "reason": {
                "code": 4,
                "codeString": "MATCHING_RECORD_NOT_FOUND",
                "message": "Matching DNS record not found for 0x99f7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
              },
              "status": "INVALID",
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
    it('should return valid fragments for documented with obfuscated fields', async () => {
        const fragments = await verify(dnsTxtDocStoreObfuscated, {
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
              "data": {
                "details": {
                  "issuance": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "issued": true,
                  },
                  "revocation": {
                    "address": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
                    "revoked": false,
                  },
                },
                "issuedOnAll": true,
                "revokedOnAny": false,
              },
              "name": "OpenAttestationEthereumDocumentStoreStatus",
              "status": "VALID",
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
              "data": {
                "identifier": "example.tradetrust.io",
                "value": "0x4Bf7E4777a8D1b6EdD5F2d9b8582e2817F0B0953",
              },
              "name": "OpenAttestationDnsTxtIdentityProof",
              "status": "VALID",
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
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(true)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(true)
    })
})
