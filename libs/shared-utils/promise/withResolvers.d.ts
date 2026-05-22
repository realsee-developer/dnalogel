interface PromiseWithResolvers<T> {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
}
/**
 * @description Promise.withResolvers polyfill
 */
export declare function withResolvers<T>(): PromiseWithResolvers<T>;
export {};
