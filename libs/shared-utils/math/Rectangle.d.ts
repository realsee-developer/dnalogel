import { Interval } from './';
/** 矩形的数学方法合集 */
declare class Rectangle {
    min: {
        x: number;
        y: number;
    };
    max: {
        x: number;
        y: number;
    };
    xInterval: Interval;
    yInterval: Interval;
    isRectangle: boolean;
    constructor(min: {
        x: number;
        y: number;
    }, max: {
        x: number;
        y: number;
    });
    /** 是否与矩形是否重叠 */
    isOverlapWithRectangle(target: Rectangle): boolean;
    /** 是否包含目标矩形 */
    containsRect(target: Rectangle): boolean;
}
export { Rectangle };
