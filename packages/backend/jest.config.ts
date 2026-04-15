import type { Config } from 'jest'

const config: Config = {
    displayName: 'backend',
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: '.',
    testMatch: [
        '<rootDir>/test/**/*.spec.ts',
        '<rootDir>/test/**/*.test.ts',
        '<rootDir>/test/**/*.e2e.ts'
    ]
}

export default config