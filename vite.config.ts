/// <reference types="vitest" />
import { defineConfig } from 'vite'
import 'dotenv/config'

export default defineConfig({
    test: {
        testTimeout: 10000,
        include: ['src/**/*.test.{ts,js}'],
    },
})
