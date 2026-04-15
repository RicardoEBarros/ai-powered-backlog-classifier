/** @types {import('jest).Config} */

module.exports = {
    displayName: 'frontend',
    testEnvironment: 'jsdom',
    rootDir: '.',
    testMatch: [
        '<rootDir>/test/**/*.spec.ts',
        '<rootDir>/test/**/*.test.ts',
        '<rootDir>/test/**/*.e2e.ts'
    ],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
            }
        ]
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    }
}