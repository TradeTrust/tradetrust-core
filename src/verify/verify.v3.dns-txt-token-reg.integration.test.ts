import {
    dnsTxtTokenRegMinted,
    dnsTxttokenRegNotMinted,
    dnsTxtTokenRegTampered,
    dnsTxtTokenRegIncorrectDNS,
    dnsTxtTokenRegIncorrectTokenReg,
} from '../../test/fixtures/verify/v3/dns-txt-token-reg'
import { describe, it, expect } from 'vitest'
import { verify, isValid } from './verify'
import { ethers } from 'ethers'

const localProvider = new ethers.providers.JsonRpcProvider(
    'http://127.0.0.1:8545'
)

describe('verify(integration) dns-txt with token-registry', () => {
    it('should return valid fragments for document issued correctly with DNS-TXT on the token registry', async () => {
        const fragments = await verify(dnsTxtTokenRegMinted, {
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
              "data": {
                "details": {
                  "address": "0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
                  "minted": true,
                },
                "mintedOnAll": true,
              },
              "name": "OpenAttestationEthereumTokenRegistryStatus",
              "status": "VALID",
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
              "data": {
                "identifier": "example.tradetrust.io",
                "value": "0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
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
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(true)
    })
    it('should return in-valid fragments for document, but not minted on the token registry', async () => {
        const fragments = await verify(dnsTxttokenRegNotMinted, {
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
              "data": {
                "details": {
                  "address": "0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
                  "minted": false,
                  "reason": {
                    "code": 1,
                    "codeString": "DOCUMENT_NOT_MINTED",
                    "message": "Document has not been issued under token registry",
                  },
                },
                "mintedOnAll": false,
              },
              "name": "OpenAttestationEthereumTokenRegistryStatus",
              "reason": {
                "code": 1,
                "codeString": "DOCUMENT_NOT_MINTED",
                "message": "Document has not been issued under token registry",
              },
              "status": "INVALID",
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
              "data": {
                "identifier": "example.tradetrust.io",
                "value": "0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
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
    it('should return in-valid fragments for tampered document with DNS-TXT', async () => {
        const fragments = await verify(dnsTxtTokenRegTampered, {
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
              "data": {
                "details": {
                  "address": "0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
                  "minted": true,
                },
                "mintedOnAll": true,
              },
              "name": "OpenAttestationEthereumTokenRegistryStatus",
              "status": "VALID",
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
              "data": {
                "identifier": "example.tradetrust.io",
                "value": "0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
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

    it('should return in-valid fragments for document successfully minted with DNS-TXT, but the issuer dns identity is not valid', async () => {
        const fragments = await verify(dnsTxtTokenRegIncorrectDNS, {
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
              "data": {
                "details": {
                  "address": "0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
                  "minted": true,
                },
                "mintedOnAll": true,
              },
              "name": "OpenAttestationEthereumTokenRegistryStatus",
              "status": "VALID",
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
              "data": {
                "identifier": "example123.tradetrust.io",
                "value": "0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
              },
              "name": "OpenAttestationDnsTxtIdentityProof",
              "reason": {
                "code": 4,
                "codeString": "MATCHING_RECORD_NOT_FOUND",
                "message": "Matching DNS record not found for 0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
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

    it('should return in-valid fragments for document successfully minted with DNS-TXT, but the token registry is not correct', async () => {
        const fragments = await verify(dnsTxtTokenRegIncorrectTokenReg, {
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
              "data": {
                "details": {
                  "address": "0x88b613a88534E2939518f4ffBFE65F5969b491FF",
                  "minted": false,
                  "reason": {
                    "code": 1,
                    "codeString": "DOCUMENT_NOT_MINTED",
                    "message": "Invalid contract arguments",
                  },
                },
                "mintedOnAll": false,
              },
              "name": "OpenAttestationEthereumTokenRegistryStatus",
              "reason": {
                "code": 1,
                "codeString": "DOCUMENT_NOT_MINTED",
                "message": "Invalid contract arguments",
              },
              "status": "INVALID",
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
              "data": {
                "identifier": "example.tradetrust.io",
                "value": "0x88b613a88534E2939518f4ffBFE65F5969b491FF",
              },
              "name": "OpenAttestationDnsTxtIdentityProof",
              "reason": {
                "code": 4,
                "codeString": "MATCHING_RECORD_NOT_FOUND",
                "message": "Matching DNS record not found for 0x88b613a88534E2939518f4ffBFE65F5969b491FF",
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
})
