/** 一维区间 */
declare class Interval {
    min: number;
    max: number;
    isInterval: boolean;
    constructor(min?: number, max?: number);
    fromArray(array: number[]): Interval;
    /** 两个区间是否重叠 */
    isOverlap(target: Interval): boolean;
    /** 是否包含区间 */
    contains(target: Interval): boolean;
}
export { Interval };
