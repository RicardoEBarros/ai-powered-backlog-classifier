import type { Logger, LoggerOptions, TransportTargetOptions } from "pino";
import { LoggerProtocol } from "../protocols/logger/logger-protocol.js";
import pino from 'pino';

export class PinoAdapter implements LoggerProtocol<Logger, LoggerOptions> {

    constructor() { }

    createLogger(options: LoggerOptions): Logger {
        const isDevelopmentEnv = process.env.NODE_ENV === 'development'
        const transport = isDevelopmentEnv ? this.getPrettyConfigs() : undefined;
        return pino({ ...options, transport })
    }

    private getPrettyConfigs(): TransportTargetOptions {
        return {
            target: 'pino-pretty',
            options: {
                colorize: true,
                translateTime: 'SYS:standard'
            }
        }
    }

}