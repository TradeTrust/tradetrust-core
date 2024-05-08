// @vitest-environment jsdom
import {
    validateGtag,
    validatePageViewEvent,
    validateGaEvent,
    gaPageView,
    gaEvent,
} from './analytics'
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest'

const consoleError = vi.spyOn(console, 'error').mockResolvedValue()
const consoleWarn = vi.spyOn(console, 'warn').mockResolvedValue()
const GA_MEASUREMENT_ID = 'G-123456789'
const mockGaEvent = {
    action: 'TEST_ACTION',
    category: 'TEST_CATEGORY',
    label: 'TEST_LABEL',
    value: 2,
}

afterEach(() => {
    vi.clearAllMocks()
})

describe('validateGtag', () => {
    it('warns if gtag is not initialised', () => {
        validateGtag()
        expect(consoleWarn).toHaveBeenCalledTimes(1)
        expect(consoleWarn).toHaveBeenCalledWith('gtag is not initialised')
    })
})

describe('validateGaPageView', () => {
    it('errors if action is missing', () => {
        // @ts-expect-error we expect this error to be thrown
        validatePageViewEvent({})
        expect(consoleError).toHaveBeenCalledTimes(1)
        expect(consoleError).toHaveBeenCalledWith('Action is required')
    })
})

describe('gaPageView', () => {
    beforeEach(() => {
        window.gtag = vi.fn() as Gtag.Gtag
    })

    afterEach(() => {
        // @ts-expect-error the mock does not match the signature
        window.gtag = undefined
    })

    it('sends and log gtag page view if window.gtag is present', () => {
        gaPageView(
            {
                action: 'TEST_ACTION',
            } as any,
            GA_MEASUREMENT_ID
        )
        expect(window.gtag).toHaveBeenCalledTimes(1)
        expect(window.gtag).toHaveBeenCalledWith('event', 'TEST_ACTION', {
            send_to: GA_MEASUREMENT_ID,
        })
    })

    it('errors if there is a validation error', () => {
        const mockGaEventError = { action: 123 }
        // @ts-expect-error the mock does not match the signature
        gaPageView(mockGaEventError)
        expect(consoleError).toHaveBeenCalledTimes(1)
        expect(consoleError).toHaveBeenCalledWith('Action must be a string')
    })
})

describe('validateGaEvent', () => {
    it('errors if category is missing', () => {
        // @ts-expect-error we expect this error to be thrown
        validateGaEvent({
            action: 'foobar_start',
        })
        expect(consoleError).toHaveBeenCalledTimes(1)
        expect(consoleError).toHaveBeenCalledWith('Category is required')
    })

    it('errors if action is missing', () => {
        // @ts-expect-error we expect this error to be thrown
        validateGaEvent({
            category: 'foobar',
        })
        expect(consoleError).toHaveBeenCalledTimes(1)
        expect(consoleError).toHaveBeenCalledWith('Action is required')
    })

    it('errors if value is not number', () => {
        validateGaEvent({
            category: 'foobar',
            action: 'foobar_start',
            // @ts-expect-error we expect this error to be thrown
            value: 'STRING',
        })
        expect(consoleError).toHaveBeenCalledTimes(1)
        expect(consoleError).toHaveBeenCalledWith('Value must be a number')
    })

    it('passes for minimum values', () => {
        validateGaEvent({
            category: 'foobar',
            action: 'foobar_start',
            label: undefined,
            value: undefined,
        })
    })

    it('passes for all values', () => {
        validateGaEvent({
            category: 'foobar',
            action: 'foobar_start',
            label: 'Start Foobar',
            value: 2,
        })
    })
})

describe('gaEvent', () => {
    beforeEach(() => {
        window.gtag = vi.fn() as Gtag.Gtag
    })

    afterEach(() => {
        // @ts-expect-error the mock does not match the signature
        window.gtag = undefined
    })

    it('does not fail if gtag is not present', () => {
        gaEvent(mockGaEvent as any)
    })

    it('sends and log gtag event if window.gtag is present', () => {
        gaEvent(mockGaEvent)
        expect(window.gtag).toHaveBeenCalledTimes(1)
        expect(window.gtag).toHaveBeenCalledWith('event', 'TEST_ACTION', {
            event_category: 'TEST_CATEGORY',
            event_label: 'TEST_LABEL',
            value: 2,
        })
    })

    it('throws if there is a validation error', () => {
        const mockGaEventError = { ...mockGaEvent, value: 'STRING' }
        // @ts-expect-error the mock does not match the signature
        gaEvent(mockGaEventError)
        expect(consoleError).toHaveBeenCalledTimes(1)
        expect(consoleError).toHaveBeenCalledWith('Value must be a number')
    })
})
