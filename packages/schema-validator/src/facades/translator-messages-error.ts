import { languages } from "../types/languages.js";
import { ConfigureLanguageProtocol } from "../protocols/configure-language-protocol.js";
import * as z from 'zod'

export class TranslatorMessagesError implements ConfigureLanguageProtocol {
    constructor(private readonly language: languages) { }

    configLanguage(): void {
        z.config(z.locales[this.language]())
    }
}