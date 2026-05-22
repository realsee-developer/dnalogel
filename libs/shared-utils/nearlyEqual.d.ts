/**
 * 比较两个数字近似相等
 * @param num1 数字1
 * @param num2 数字2
 * @param accuracy 精度：精确到小数点后几位，默认精确到 小数点后四位
 */
export default function nearlyEqual(num1: number, num2: number, accuracy?: number): boolean;
/**
 * 比较两个弧度近似相等
 * @param rad1 弧度1
 * @param rad2 弧度2
 * @param accuracy 精度：精确到小数点后几位，默认精确到 小数点后四位
 */
export declare function nearlyEqualRad(rad1: number, rad2: number, accuracy?: number): boolean;
