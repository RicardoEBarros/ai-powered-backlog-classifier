import { languageOptions } from "@/src/enums/language-options.js"
import { ConfigureLanguageProtocol, languages, TranslatorMessagesError } from "@/src/index.js"

interface SutTypes {
    sut: ConfigureLanguageProtocol
}

export const makeTranslatorMessagesErro = (language: languages = languageOptions.portugues): SutTypes => {
    const sut = new TranslatorMessagesError(language)
    return {
        sut
    }
}