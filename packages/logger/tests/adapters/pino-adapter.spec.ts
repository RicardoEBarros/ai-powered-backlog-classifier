import { faker } from '@faker-js/faker';
import { describe, it, jest, expect, afterEach, beforeEach } from '@jest/globals'

// Mock Pino
jest.unstable_mockModule('pino', () => ({ default: jest.fn() }))
const { default: pino } = await import('pino')
const { makePinoAdapter } = await import('./mocks/pino-adapter-factory.js')

describe('LoggerAdapter Suite', () => {

    let originalEnv: NodeJS.ProcessEnv

    beforeEach(() => {
        originalEnv = process.env
    })

    afterEach(() => {
        jest.clearAllMocks()
        process.env = originalEnv
    })

    describe('PinoAdapter', () => {

        it('Should confirm if logger parameter was called with correct arguments', () => {
            const { options, sut } = makePinoAdapter()
            sut.createLogger(options)
            expect(pino).toHaveBeenCalledTimes(1)
            expect(pino).toHaveBeenCalledWith(options)
        })

        it('Should calls pino with valid transport property if NODE_ENV equals development', () => {
            process.env.NODE_ENV = 'development'
            const { options, sut } = makePinoAdapter()
            sut.createLogger(options)
            expect(pino).toHaveBeenCalledWith(
                expect.objectContaining({
                    transport: {
                        target: "pino-pretty",
                        options: {
                            colorize: true,
                            translateTime: "SYS:standard"
                        }
                    }
                })
            )
        })

        it('Should calls pino with an undefined transport property value if NODE_ENV is not equals development', () => {
            process.env.NODE_ENV = process.env.NODE_ENV + faker.word.noun() // to force non-existent NODE_ENV value
            const { options, sut } = makePinoAdapter()
            sut.createLogger(options)
            expect(pino).toHaveBeenCalledWith(
                expect.objectContaining({ transport: undefined })
            )
        })


    })


})