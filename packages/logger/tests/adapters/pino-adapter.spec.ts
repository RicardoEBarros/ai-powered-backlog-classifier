import { describe, it, jest, expect, afterEach, beforeEach } from '@jest/globals'
import { getRandomSystemaWorkspacesMock } from '../mocks/random-system-workspaces-mock.js'
import { logLevelsOptions, SystemWorkspaces } from '@ai-powered-backlog-classifier/shared'
import { faker } from '@faker-js/faker'

// Mock Pino
jest.unstable_mockModule('pino', () => ({ default: jest.fn() }))
const { default: pino } = await import('pino')
const { makePinoAdapter } = await import('./mocks/pino-adapter-factory.js')

describe('PinoAdapter Suite', () => {

    let systemWorkspace: SystemWorkspaces
    let originalEnv: NodeJS.ProcessEnv

    beforeEach(() => {
        originalEnv = process.env
        systemWorkspace = getRandomSystemaWorkspacesMock()
    })

    afterEach(() => {
        jest.clearAllMocks()
        process.env = originalEnv
    })

    describe('CreateFatalLog', () => {

        it('Should calls pino with with correct values', () => {
            const { options, sut } = makePinoAdapter(systemWorkspace)
            sut.createFatalLog(options)
            expect(pino).toHaveBeenCalledTimes(1)
            expect(pino).toHaveBeenCalledWith(
                {
                    ...options,
                    name: systemWorkspace,
                    level: logLevelsOptions.fatal
                }
            )
        })

        it('Should calls pino with valid transport property if NODE_ENV equals development', () => {
            process.env.NODE_ENV = 'development'
            const { options, sut } = makePinoAdapter()
            sut.createFatalLog(options)
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
            sut.createFatalLog(options)
            expect(pino).toHaveBeenCalledWith(
                expect.objectContaining({ transport: undefined })
            )
        })

    })

    describe('CreateErrorLog', () => {

        it('Should calls pino with with correct values', () => {
            const { options, sut } = makePinoAdapter(systemWorkspace)
            sut.createErrorLog(options)
            expect(pino).toHaveBeenCalledTimes(1)
            expect(pino).toHaveBeenCalledWith(
                {
                    ...options,
                    name: systemWorkspace,
                    level: logLevelsOptions.error
                }
            )
        })

        it('Should calls pino with valid transport property if NODE_ENV equals development', () => {
            process.env.NODE_ENV = 'development'
            const { options, sut } = makePinoAdapter()
            sut.createErrorLog(options)
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
            sut.createErrorLog(options)
            expect(pino).toHaveBeenCalledWith(
                expect.objectContaining({ transport: undefined })
            )
        })

    })

    describe('CreateWarningLog', () => {

        it('Should calls pino with with correct values', () => {
            const { options, sut } = makePinoAdapter(systemWorkspace)
            sut.createWarningLog(options)
            expect(pino).toHaveBeenCalledTimes(1)
            expect(pino).toHaveBeenCalledWith(
                {
                    ...options,
                    name: systemWorkspace,
                    level: logLevelsOptions.warning
                }
            )
        })

        it('Should calls pino with valid transport property if NODE_ENV equals development', () => {
            process.env.NODE_ENV = 'development'
            const { options, sut } = makePinoAdapter()
            sut.createWarningLog(options)
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
            sut.createWarningLog(options)
            expect(pino).toHaveBeenCalledWith(
                expect.objectContaining({ transport: undefined })
            )
        })

    })

    describe('CreateInfoLog', () => {

        it('Should calls pino with with correct values', () => {
            const { options, sut } = makePinoAdapter(systemWorkspace)
            sut.createInfoLog(options)
            expect(pino).toHaveBeenCalledTimes(1)
            expect(pino).toHaveBeenCalledWith(
                {
                    ...options,
                    name: systemWorkspace,
                    level: logLevelsOptions.info
                }
            )
        })

    })


})