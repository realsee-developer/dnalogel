/**
 * @description 两条二维线段是否相交，不考虑端点重合的情况
 */
export declare function lineIsIntersecting(line1: {
    x: number;
    y: number;
}[], line2: {
    x: number;
    y: number;
}[]): boolean;
/**
 * @description 两条二维折线段的交点，不考虑端点重合的情况
 */
export declare function findIntersectingOfLines(line1: {
    x: number;
    y: number;
}[], line2: {
    x: number;
    y: number;
}[]): {
    x: number;
    y: number;
    line1RelativeIndex: number;
    line2RelativeIndex: number;
};
