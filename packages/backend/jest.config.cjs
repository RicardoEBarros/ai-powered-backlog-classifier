/** @types {import('jest').Config} */

module.exports = {
    displayName: 'backend',
    testEnvironment: 'node',
    preset: 'ts-jest/presets/default-esm',
    extensionsToTreatAsEsm: ['.ts'],
    rootDir: '.',
    testMatch: [
        '<rootDir>/test/**/*.spec.ts',
        '<rootDir>/test/**/*.test.ts',
        '<rootDir>/test/**/*.e2e.ts'
    ],
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            {
                useESM: true,
            }
        ]
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ]
}