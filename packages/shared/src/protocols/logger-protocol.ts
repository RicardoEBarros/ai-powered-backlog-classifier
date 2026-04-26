export interface FaltaLogProtocol<T, K> {
    createFatalLog(options: K): T
}