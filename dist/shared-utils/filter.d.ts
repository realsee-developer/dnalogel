/**
 * 对象属性筛选函数。
 * 基于已有对象生成一个满足条件(属性)新的对象。
 * @param {object} object
 * @param {Function} check
 */
export declare function filter<T extends Record<string, any>, K extends keyof T>(object: T, check: (key: K, value: T[K]) => boolean): Record<K, T[K]>;
/**
 * 对象镜子函数。
 * 生成一个"镜子"对象：对象的属性名与其值相同。
 * @param  {string[]} strings 对象属性
 */
export declare function mirror(strings: string[]): Record<string, string>;
/**
 * 过滤掉不需要的对象字段函数：实现从一个对象中排除某些指定属性后生成的新对象。
 * @param object
 * @param props 排除的属性
 * @return
 */
export declare function omit<T, K extends keyof T>(object: T, props: Extract<K[], string[]>): Omit<T, K>;
/**
 * 筛选需要的对象字段：实现从一个对象中选择某些指定属性生成新的对象（与`omit()`功能相反）。
 * @param  {object}    object
 * @param  {string[]} props
 * @return {object}
 */
export declare function pick<T, K extends keyof T>(object: T, props: K[]): Pick<T, K>;
