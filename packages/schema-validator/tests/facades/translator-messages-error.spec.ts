import { languages } from '@/src/index.js'
import { languageOptions } from '@/src/enums/language-options.js'
import { describe, it, expect, jest, beforeEach } from '@jest/globals'
import translation from 'zod-i18n-map/locales/pt/zod.json' with { type: "json" };

jest.unstable_mockModule('i18next', () => ({ default: { init: jest.fn() } }))
const { default: i18next } = await import('i18next')
const { makeTranslatorMessagesErro } = await import('./mocks/translator-messages-error-factory.js')

describe('TranslatorMessagesError Suite', () => {

    let language: languages

    beforeEach(() => {
        jest.clearAllMocks()
        language = languageOptions.portugues
    })

    it('Should calls init method with correct lng property value', async () => {
        const { sut } = makeTranslatorMessagesErro(language)
        await sut.configLanguage()
        expect(i18next.init).toHaveBeenCalledTimes(1)
        expect(i18next.init).toHaveBeenCalledWith(
            expect.objectContaining({
                lng: language
            })
        )
    })

    it('Should calls init method with correct resources property object', async () => {
        language = languageOptions.ingles
        const { sut } = makeTranslatorMessagesErro(language)
        await sut.configLanguage()
        expect(i18next.init).toHaveBeenCalledTimes(1)
        expect(i18next.init).toHaveBeenCalledWith(
            expect.objectContaining({
                resources: {
                    [language]: { zod: translation }
                }
            })
        )
    })

    it.todo('Should calls setErrorMap with correct global class')

})

