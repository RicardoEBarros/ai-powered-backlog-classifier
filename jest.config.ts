import type { Config } from 'jest'

const config: Config = {
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'clover'],
    projects: [
        '<rootDir>/backend/*/jest.config.ts',
        '<rootDir>/frontend/*/jest.config.ts'
    ],
    collectCoverageFrom: [
        '<rootDir>/**/src/*.{ts,tsx,js,jsx}',
        '!<rootDir>/**/*.d.ts',
        '!<rootDir>/**/node_modules/**',
        '!<rootDir>/**/dist/**'
    ]
}

export default config