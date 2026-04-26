import { logLevelsOptions, SystemWorkspaces } from "@ai-powered-backlog-classifier/shared";
import { CreateLoggerOptions } from "../types/create-logger-options.js";
import type { Logger, LoggerOptions, TransportTargetOptions } from "pino";
import pino from 'pino';

export class PinoAdapter {

    constructor(private readonly name: SystemWorkspaces) {
    }

    createFatalLog(options: LoggerOptions): Logger {
        return this.createLogger({ ...options, name: this.name, level: logLevelsOptions.fatal })
    }

    private createLogger(options: CreateLoggerOptions): Logger {
        const isDevelopmentEnv = process.env.NODE_ENV === 'development'
        const transport = isDevelopmentEnv ? this.getPrettyConfigs() : undefined;

        return pino({
            ...options,
            transport
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