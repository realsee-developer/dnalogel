/**
 * 对象比较
 * @param {*} value 第一个比较的值
 * @param {*} other 第二个比较的值
 * @param {Object} options 可选参数，可选项包括：<br />
 *    deep {Boolean} 是否深比较<br />
 * @returns {boolean} 是否相等
 */
export declare function equal(value: any, other: any, opt?: {
    deep: boolean;
}): boolean;
