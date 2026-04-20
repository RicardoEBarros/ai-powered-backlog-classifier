// eslint-disable-next-line @typescript-eslint/no-require-imports
const baseConfig = require('../../jest.config.base.cjs');

module.exports = {
    ...baseConfig,
    displayName: 'backend',
    testEnvironment: 'node',
    moduleNameMapper: {
        ...baseConfig.moduleNameMapper,
        "@/(.*)": "<rootDir>/src/$1"
    }
}