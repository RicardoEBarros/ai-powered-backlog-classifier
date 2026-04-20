/** @types {import('jest').Config} */

module.exports = {
    preset: 'ts-jest/presets/default-esm',
    extensionsToTreatAsEsm: ['.ts'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!**/*.d.ts'
    ],
    testMatch: [
        '<rootDir>/tests/**/*.spec.ts',
        '<rootDir>/tests/**/*.test.ts',
        '<rootDir>/tests/**/*.e2e.ts'
    ],
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            {
                useESM: true,
            }
        ]
    },
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    moduleNameMapper: {
        '^@/src/(.*)\\.js$': '<rootDir>/src/$1',
        '^@/tests/(.*)\\.js$': '<rootDir>/tests/$1',
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
}