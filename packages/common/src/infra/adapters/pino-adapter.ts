import type { Logger, LoggerOptions } from "pino";
import { LoggerProtocol } from "../protocols/logger/logger-protocol.js";
import pino from 'pino';

export class PinoAdapter implements LoggerProtocol<Logger, LoggerOptions> {

    constructor() { }

    createLogger(options: LoggerOptions): Logger {
        const transport = process.env.NODE_ENV === 'development'
            ?
            {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                    translateTime: 'SYS:standard'
                }
            }
            : undefined;

        return pino(
            {
                ...options,
                transport
            }
        )
    }

}