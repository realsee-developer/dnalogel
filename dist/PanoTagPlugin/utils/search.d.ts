/**
 * 二分查找，查找第一个大于等于给定值的元素
 * 数组必须有序，存在重复
 * @param {array} arr 待排序数组
 * @param {number} target 目标数据
 */
export declare function binarySearchFirstBig(getValueByIndex: (index: number) => number, indexRange: [number, number], target: number): number;
/**
 * @description 查找第一个小于前一个数字的值
 */
export declare function searchFirstValueSmallThanLastValue(getValueByIndex: (index: number) => number, indexRange: [number, number]): number;
