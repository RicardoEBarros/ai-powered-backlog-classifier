export interface FatalLogProtocol<T, K> {
    createFatalLog(options: K): T
}

export interface ErrorLogProtocol<T, K> {
    createErrorLog(options: K): T
}

export interface LoggerProtocol<T, K> extends FatalLogProtocol<T, K>, ErrorLogProtocol<T, K> { }