import { PinoAdapter } from "@/src/adapters/pino-adapter.js";
import { LoggerProtocol } from "@/src/protocols/logger-protocol.js";
import { createRandomObject } from "@/tests/mocks/random-values.js";
import type { Logger, LoggerOptions } from "pino";

interface SutTypes {
    options: Record<string, any>
    sut: LoggerProtocol<Logger, LoggerOptions>
}

export const makePinoAdapter = (): SutTypes => {
    const options = createRandomObject();
    const sut = new PinoAdapter()
    return {
        sut,
        options
    }
}