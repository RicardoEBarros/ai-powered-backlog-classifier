// eslint-disable-next-line @typescript-eslint/no-require-imports
const baseConfig = require('../../jest.config.base.cjs');

module.exports = {
    ...baseConfig,
    displayName: 'frontend',
    testEnvironment: 'jsdom',
    preset: 'ts-jest/presets/default-esm',
    extensionsToTreatAsEsm: ['.ts'],
}