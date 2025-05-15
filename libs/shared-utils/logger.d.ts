/**
 * 输出格式化日志
 */
export declare enum LOG_LEVEL {
    info = "INFO",
    log = "LOG",
    error = "ERROR",
    warn = "WARN"
}
export declare function consoleVersion(): void;
export declare const logger: {
    log: (...args: any[]) => void;
    info: (...args: any[]) => void;
    error: (...args: any[]) => void;
    warn: (...args: any[]) => void;
};
export default logger;
