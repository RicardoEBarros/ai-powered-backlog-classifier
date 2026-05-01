import i18next from "i18next";
import { languages } from "../types/languages.js";
import { ConfigureLanguageProtocol } from "../protocols/configure-language-protocol.js";

export class TranslatorMessagesError implements ConfigureLanguageProtocol {
    constructor(private readonly language: languages) { }

    async configLanguage(): Promise<void> {
        await i18next.init({
            lng: this.language
        })
    }
}