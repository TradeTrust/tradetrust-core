import { describe, expect, it } from 'vitest'
import { greet } from '.'

describe('Greet', () => {
    const testPerson = { name: 'john' }
    it('should return the greet string for person ', () => {
        expect(greet(testPerson)).equal('hello john!')
    })
})
