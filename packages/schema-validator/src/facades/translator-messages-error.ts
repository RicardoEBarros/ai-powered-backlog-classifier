import i18next from "i18next";
import { languages } from "../types/languages.js";

export class TranslatorMessagesError {
    constructor(private readonly language: languages) { }

    async configLanguage(): Promise<void> {
        await i18next.init({
            lng: this.language
        })
    }
}