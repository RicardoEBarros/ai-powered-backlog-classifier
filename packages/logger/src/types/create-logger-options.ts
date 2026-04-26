import { logLevelsOptions, SystemWorkspaces } from "@ai-powered-backlog-classifier/shared";
import { LoggerOptions } from "pino";

export type CreateLoggerOptions = LoggerOptions & {
    name: SystemWorkspaces
    level: logLevelsOptions
}