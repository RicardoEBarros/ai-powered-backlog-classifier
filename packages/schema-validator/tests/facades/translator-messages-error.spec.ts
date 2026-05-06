import { languages } from '@/src/index.js'
import { languageOptions } from '@/src/enums/language-options.js'
import { describe, it, expect, jest, beforeEach } from '@jest/globals'
import { faker } from '@faker-js/faker'

const languageSpy = jest.fn()
const language: languages = faker.helpers.arrayElement([languageOptions.ingles, languageOptions.portugues])

jest.unstable_mockModule('zod', () => ({
    __esModule: true,
    ...jest.requireActual('zod') as object,
    config: jest.fn(),
    locales: {
        [language]: languageSpy
    }
}))

const { makeTranslatorMessagesErro } = await import('./mocks/translator-messages-error-factory.js')
const z = await import('zod')
const zMocked = z as jest.Mocked<typeof z>

describe('TranslatorMessagesError Suite', () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('Should calls zod config method with correct language value', async () => {
        const { sut } = makeTranslatorMessagesErro(language)
        await sut.configLanguage()
        expect(z.config).toHaveBeenCalledTimes(1)
        expect(zMocked.config.mock.calls[0][0]).toEqual(languageSpy())
    })

})

