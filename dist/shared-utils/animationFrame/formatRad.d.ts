/**
 * 把一个任意角度的弧度值转换为一个 [0, 2PI] 的弧度值
 * @param rad 弧度值
 */
export declare function formatLongitude(rad: number): number;
/**
 * 把一个任意角度的弧度值转换为一个 [-2PI, 2PI] 的弧度值
 * @param rad 弧度值
 */
export declare function formatLatitude(rad: number): number;
/**
 * 把一个任意角度的弧度值转换为一个 [0, 2PI] 的弧度值
 * @param rad 弧度值
 */
export declare const formatRad: typeof formatLongitude;
