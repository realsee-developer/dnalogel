/**
 * 检查一个值是否是狭义上的对象
 * @param {any} value 要检查的值
 *
 * isTruelyObject({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => false
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 *
 */
export default function isTruelyObject(value: any): boolean;
