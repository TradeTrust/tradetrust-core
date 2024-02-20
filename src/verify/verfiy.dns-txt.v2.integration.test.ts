import {
    dnsTxtDocStore,
    dnsTxtDocStoreTampered,
    dnsTxtDocStoreRevoked,
    dnsTxtDocStoreIncorrectDNS,
    dnsTxtDocStoreIncorrectDocumentStore,
    dnsTxtDocStoreObfuscated,
} from '../../test/fixtures/v2/wrapped/dns-txt-doc-store'
import { describe, it, expect } from 'vitest'
import { verify, isValid } from '.'
import { ethers } from 'ethers'
// import util from 'util'

const localProvider = new ethers.providers.JsonRpcProvider(
    'http://127.0.0.1:8545'
)

describe('verify(integration) dns-txt with document store', () => {
    it('should return valid fragments for document issued correctly with DNS-TXT and not revoked on a document store', async () => {
        const fragments = await verify(dnsTxtDocStore, {
            provider: localProvider,
        })
        expect(fragments).toMatchSnapshot()
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(true)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(true)
    })
    it('should return in-valid fragments for tampered document with DNS-TXT', async () => {
        const fragments = await verify(dnsTxtDocStoreTampered, {
            provider: localProvider,
        })
        expect(fragments).toMatchSnapshot()
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(false)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(false)
    })
    it('should return in-valid fragments for document issued correctly with DNS-TXT, but revoked', async () => {
        const fragments = await verify(dnsTxtDocStoreRevoked, {
            provider: localProvider,
        })
        expect(fragments).toMatchSnapshot()
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(false)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(false)
    })
    it('should return in-valid fragments for document issued correctly with DNS-TXT, but the issuer dns identity is not valid', async () => {
        const fragments = await verify(dnsTxtDocStoreIncorrectDNS, {
            provider: localProvider,
        })
        expect(fragments).toMatchSnapshot()
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(false)
        expect(isValid(fragments)).toStrictEqual(false)
    })
    it('should return in-valid fragments for document issued correctly with DNS-TXT, but the document store identity is not correct', async () => {
        const fragments = await verify(dnsTxtDocStoreIncorrectDocumentStore, {
            provider: localProvider,
        })
        expect(fragments).toMatchSnapshot()
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(false)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(false)
        expect(isValid(fragments)).toStrictEqual(false)
    })
    it('should return valid fragments for documented with obfuscated fields', async () => {
        const fragments = await verify(dnsTxtDocStoreObfuscated, {
            provider: localProvider,
        })
        expect(fragments).toMatchSnapshot()
        expect(isValid(fragments, ['DOCUMENT_STATUS'])).toStrictEqual(true)
        expect(isValid(fragments, ['DOCUMENT_INTEGRITY'])).toStrictEqual(true)
        expect(isValid(fragments, ['ISSUER_IDENTITY'])).toStrictEqual(true)
        expect(isValid(fragments)).toStrictEqual(true)
    })
})

describe('verify(integration) dns-txt with token-registry', () => {})

describe('verify(integration) dns-txt with dns:did', () => {})
