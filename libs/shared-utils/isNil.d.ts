/**
 * 判断对象是否为`null`或`undefined`。
 * @param
 * @return
 */
export declare function isNil<T>(value: T): value is Extract<T, undefined | null>;
/**
 * 判断对象不为`null`或`undefined`。
 */
export declare function notNil<T>(value: T | null | undefined): value is T;
