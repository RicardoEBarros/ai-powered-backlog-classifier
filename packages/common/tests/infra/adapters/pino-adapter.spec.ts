import { describe, it, jest, expect, afterEach } from '@jest/globals'
import { createRandomObject } from '@/tests/utils/mocks/random-values.js'

// Mock Pino
jest.unstable_mockModule('pino', () => ({ default: jest.fn() }))
const { default: pino } = await import('pino')
const { PinoAdapter } = await import('../../../src/infra/adapters/pino-adapter.js')

describe('PinoAdapter Suite', () => {

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Should confirm if logger parameter was called with correct arguments', () => {
        const options = createRandomObject();
        const loggerAdapter = new PinoAdapter()
        loggerAdapter.createLogger(options)
        expect(pino).toHaveBeenCalledTimes(1)
        expect(pino).toHaveBeenCalledWith(options)
    })

    it.todo('Should returns transport property with valid object if NODE_ENV equals development')
    it.todo('Should returns transport property with undefined if NODE_ENV is not equals development')
    it.todo('Should returns target property with correct value')
    it.todo('Should returns colorize property with correct value')
    it.todo('Should returns translateTime property with correct value')
    it.todo('Should returns correct level property if LOG_LEVEL exists')
    it.todo('Should returns correct level property if LOG_LEVEL don\'t exists')

})