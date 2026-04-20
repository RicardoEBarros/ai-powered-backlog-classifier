import type { Logger, LoggerOptions } from "pino";
import { LoggerProtocol } from "../protocols/logger/logger-protocol.js";
import pino from 'pino';

export class PinoAdapter implements LoggerProtocol<Logger, LoggerOptions> {

    constructor() { }

    createLogger(options: LoggerOptions): Logger {
        return pino(options)
    }

}