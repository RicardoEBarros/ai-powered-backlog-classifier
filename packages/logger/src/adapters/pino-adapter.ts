import { logLevelsOptions, SystemWorkspaces } from "@ai-powered-backlog-classifier/shared";
import { CreateLoggerOptions } from "../types/create-logger-options.js";
import { LoggerProtocol } from "@ai-powered-backlog-classifier/shared/src/protocols/logger-protocol.js";
import type { Logger, LoggerOptions, TransportTargetOptions } from "pino";
import pino from 'pino';

export class PinoAdapter implements LoggerProtocol<LoggerOptions, Logger> {

    constructor(private readonly name: SystemWorkspaces) { }

    createFatalLog(options: LoggerOptions): Logger {
        return this.createLogger({ ...options, level: logLevelsOptions.fatal })
    }

    createErrorLog(options: LoggerOptions): Logger {
        return this.createLogger({ ...options, level: logLevelsOptions.error })
    }

    createWarningLog(options: LoggerOptions): Logger {
        return this.createLogger({ ...options, level: logLevelsOptions.warning })
    }

    createInfoLog(options: LoggerOptions): Logger {
        return this.createLogger({ ...options, level: logLevelsOptions.info })
    }

    private createLogger(options: CreateLoggerOptions): Logger {
        const isDevelopmentEnv = process.env.NODE_ENV === 'development'
        const transport = isDevelopmentEnv ? this.getPrettyConfigs() : undefined;

        return pino({
            ...options,
            transport,
            name: this.name
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