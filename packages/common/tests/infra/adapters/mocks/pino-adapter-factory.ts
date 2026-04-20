import { PinoAdapter } from "@/src/infra/adapters/pino-adapter.js";
import { LoggerProtocol } from "@/src/infra/protocols/logger/logger-protocol.js";
import { createRandomObject } from "@/tests/utils/mocks/random-values.js";
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