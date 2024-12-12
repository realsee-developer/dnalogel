/**
 * 函数防抖：指触发事件后，在 `n` 秒内函数只能执行一次，如果触发事件后在 `n` 秒内又触发了事件，则会重新计算函数延执行时间。
 * @param callback 回调函数
 * @param waitFor 等待时间
 * @returns
 */
export declare const debounce: <F extends (...args: any) => any>(callback: F, waitFor?: number) => (...args: Parameters<F>) => ReturnType<F>;
export declare const debounceByKey: <F extends (...args: any) => any>(key: string, callback: F, waitFor?: number) => (...args: Parameters<F>) => ReturnType<F>;
