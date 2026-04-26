const baseConfig = require('../../jest.config.base.cjs');

module.exports = {
    ...baseConfig,
    displayName: 'authentication-service',
    testEnvironment: 'node'
}