const baseConfig = require('../../jest.config.base.cjs');

module.exports = {
    ...baseConfig,
    displayName: 'common',
    testEnvironment: 'node'
}