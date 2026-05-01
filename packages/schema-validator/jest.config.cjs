const baseConfig = require('../../jest.config.base.cjs');

module.exports = {
    ...baseConfig,
    displayName: 'schema-validator',
    testEnvironment: 'node'
}