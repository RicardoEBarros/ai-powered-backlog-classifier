import type { Config } from 'jest'

const config: Config = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'clover'],
    projects: [
        'packages/backend/jest.config.ts',
        'packages/frontend/jest.config.ts'
    ],
    collectCoverageFrom: [
        'packages/**/src/**/*.{ts,tsx,js,jsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/dist/**'
    ]
}

export default config