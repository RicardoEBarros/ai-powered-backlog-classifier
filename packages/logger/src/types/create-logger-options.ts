import { logLevelsOptions } from "@ai-powered-backlog-classifier/shared";
import { LoggerOptions } from "pino";

export type CreateLoggerOptions = LoggerOptions & {
    name: string,
    level?: logLevelsOptions
}