import { LoggerProtocol } from "../infra/protocols/logger/logger-protocol.js";
import { CreateLoggerOptions } from "../infra/types/logger/create-logger-options-type.js";
import type { Logger, LoggerOptions, TransportTargetOptions } from "pino";
import pino from 'pino';

export abstract class PinoAdapter implements LoggerProtocol<Logger, LoggerOptions> {

    constructor(private readonly name: string) { }

    createLogger(options: CreateLoggerOptions): Logger {
        const { level, ...rest } = options
        const isDevelopmentEnv = process.env.NODE_ENV === 'development'
        const transport = isDevelopmentEnv ? this.getPrettyConfigs() : undefined;
        const validLevel = level ?? process.env.LOG_LEVEL

        return pino({
            ...options,
            name: this.name,
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