export interface LoggerProtocol<T, K> {
    createLogger(options?: K): T
}