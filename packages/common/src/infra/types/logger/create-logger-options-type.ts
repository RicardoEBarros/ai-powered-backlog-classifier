import { LoggerOptions } from "pino";
import { logLevels } from "./log-levels-type.js";

export type CreateLoggerOptions = LoggerOptions & {
    name: string,
    level?: logLevels
}