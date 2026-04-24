import { LoggerProtocol } from "../protocols/logger-protocol.js";
import { CreateLoggerOptions } from "../types/create-logger-options.js";
import type { Logger, LoggerOptions, TransportTargetOptions } from "pino";
import pino from 'pino';

export abstract class PinoAdapter implements LoggerProtocol<Logger, LoggerOptions> {

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