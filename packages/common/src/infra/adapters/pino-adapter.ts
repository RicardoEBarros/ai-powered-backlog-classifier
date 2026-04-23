import type { Logger, LoggerOptions, TransportTargetOptions } from "pino";
import { LoggerProtocol } from "../protocols/logger/logger-protocol.js";
import pino from 'pino';
import { CreateLoggerOptions } from "../types/logger/create-logger-options-type.js";

export class PinoAdapter implements LoggerProtocol<Logger, LoggerOptions> {

    constructor() { }

    createLogger(options: CreateLoggerOptions): Logger {
        const { level, ...rest } = options
        const isDevelopmentEnv = process.env.NODE_ENV === 'development'
        const transport = isDevelopmentEnv ? this.getPrettyConfigs() : undefined;
        const validLevel = level ?? process.env.LOG_LEVEL

        return pino({
            ...options,
            transport,
            level: validLevel,
            ...rest
        })
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