export type EventMap = {
    [name: string]: (...args: any[]) => void | boolean;
};
/**
 * 监听者模式
 * @template T 预设的监听回调类型
 * @example
 * ```
 * new Subscribe<{
 * "foo": [arg1: number, arg2: string],
 * "bar": [arg: boolean],
 * }>()
 * ```
 */
declare class Subscribe<T extends EventMap> {
    /**
     * 判断是否注册了事件
     * @param name  事件类型
     */
    hasListener(name: keyof T): boolean;
    /**
     * 注册事件
     * @param  name    事件类型
     * @param  callback 事件回调函数
     * @param  once     是否只执行一次
     * @returns 解除事件
     * @template K 预设的监听事件名称
     * @template C 回调函数函数上下文
     */
    on<K extends keyof T>(name: K, callback: (...args: Parameters<T[K]>) => ReturnType<T[K]>, once?: boolean): () => void;
    /**
     * 注册事件(是否只执行一次)
     * @param  name     事件类型
     * @param  callback 事件回调函数
     * @returns 解除事件
     * @template K 预设的监听事件名称
     * @template C 回调函数函数上下文
     */
    once<K extends keyof T>(name: K, callback: (...args: Parameters<T[K]>) => ReturnType<T[K]>): () => void;
    /**
     * 解除事件
     *
     * 如果 name 不传的话解除对应所有事件
     * 如果 name, callback 不传的话解除所有name的所有事件
     * @param  name     事件类型
     * @param  callback 事件回调函数
     * @template K 预设的监听事件名称
     */
    off<K extends keyof T>(name?: K, callback?: (...args: Parameters<T[K]>) => ReturnType<T[K]>): void;
    /**
     * 触发事件
     * @param  name  事件类型
     * @param  data  触发事件的数据
     * @returns canceled 是否被触发取消
     * @template K 预设的监听事件名称
     */
    emit<K extends keyof T>(name: K, ...data: Parameters<T[K]>): boolean;
}
export declare namespace SubscribeMixinType {
    interface hasListener<T extends EventMap> {
        (name: keyof T): boolean;
    }
    interface on<T extends EventMap> {
        <K extends keyof T>(name: K, callback: (...args: Parameters<T[K]>) => ReturnType<T[K]>, once?: boolean): () => void;
    }
    interface once<T extends EventMap> {
        <K extends keyof T>(name: K, callback: (...args: Parameters<T[K]>) => ReturnType<T[K]>): () => void;
    }
    interface off<T extends EventMap> {
        <K extends keyof T>(names?: K | K[], callback?: (...args: any[]) => any): void;
    }
    interface emit<T extends EventMap> {
        <K extends keyof T>(name: K, ...data: Parameters<T[K]>): boolean;
    }
}
export { Subscribe };
