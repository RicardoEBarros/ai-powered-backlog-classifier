import { describe, it, jest, expect, afterEach } from '@jest/globals'

// Mock Pino
jest.unstable_mockModule('pino', () => ({ default: jest.fn() }))
const { default: pino } = await import('pino')
const { makePinoAdapter } = await import('./mocks/pino-adapter-factory.js');

describe('PinoAdapter Suite', () => {

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Should confirm if logger parameter was called with correct arguments', () => {
        const { options, sut } = makePinoAdapter()
        sut.createLogger(options)
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