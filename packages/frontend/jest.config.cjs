/** @types {import('jest).Config} */

module.exports = {
    displayName: 'frontend',
    testEnvironment: 'jsdom',
    rootDir: '.',
    preset: 'ts-jest/presets/default-esm',
    extensionsToTreatAsEsm: ['.ts'],
    testMatch: [
        '<rootDir>/tests/**/*.spec.ts',
        '<rootDir>/tests/**/*.test.ts',
        '<rootDir>/tests/**/*.e2e.ts'
    ],
    transform: {
        '.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                useESM: true,
            }
        ]
    },
    moduleNameMapper: {
        '@/tests/(.*)': '<rootDir>/tests/$1',
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/tests/e2e/cypress'
    ],
}