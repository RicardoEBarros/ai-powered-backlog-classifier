import { languageOptions } from '@/src/enums/language-options.js'
import { describe, it, expect, jest } from '@jest/globals'

jest.unstable_mockModule('i18next', () => ({ default: { init: jest.fn() } }))
const { default: i18next } = await import('i18next')
const { TranslatorMessagesError } = await import('@/src/index.js')

describe('TranslatorMessagesError Suite', () => {

    it('Should calls init method with correct lng property value', async () => {
        const language = languageOptions.portugues
        const sut = new TranslatorMessagesError(language)
        await sut.configLanguage()
        expect(i18next.init).toHaveBeenCalledTimes(1)
        expect(i18next.init).toHaveBeenCalledWith(
            expect.objectContaining({
                lng: language
            })
        )
    })

    it.todo('Should calls init method with correct resources property object')
    it.todo('Should calls setErrorMap with correct global class')

})

