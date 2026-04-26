export interface FatalLogProtocol<T, K> {
    createFatalLog(options: K): T
}

export interface ErrorLogProtocol<T, K> {
    createErrorLog(options: K): T
}

export interface WarningLogProtocol<T, K> {
    createErrorLog(options: K): T
}

export interface InfoLogProtocol<T, K> {
    createErrorLog(options: K): T
}

export interface LoggerProtocol<T, K>
    extends FatalLogProtocol<T, K>, ErrorLogProtocol<T, K>, WarningLogProtocol<T, K>, InfoLogProtocol<T, K> { }