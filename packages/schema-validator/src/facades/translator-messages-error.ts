import i18next from "i18next";
import { languages } from "../types/languages.js";
import { ConfigureLanguageProtocol } from "../protocols/configure-language-protocol.js";
import translation from 'zod-i18n-map/locales/pt/zod.json' with { type: "json" };

export class TranslatorMessagesError implements ConfigureLanguageProtocol {
    constructor(private readonly language: languages) { }

    async configLanguage(): Promise<void> {
        await i18next.init({
            lng: this.language,
            resources: {
                [this.language]: { zod: translation }
            }
        })
    }
}