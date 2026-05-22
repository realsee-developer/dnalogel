/**
 * @description: 获取coordinates间的夹角（两个方向向量之间的最小夹角）
 * @return {number} 夹角角度（0 到 π）
 */
declare function coordinatesAngle(coordinates1: {
    longitude: number;
    latitude: number;
}, coordinates2: {
    longitude: number;
    latitude: number;
}): number;
/**
 * @description: 获取coordinates间的实际旋转角度（基于 longitude/latitude 差值）
 * @param coordinates1 起始坐标
 * @param coordinates2 目标坐标
 * @param signed 是否返回有符号角度（默认 false）
 *   - true: 返回有符号角度（以主要旋转方向的符号为准）
 *   - false: 返回无符号角度（绝对值）
 * @return {number} 旋转角度（弧度），可以超过 π
 */
declare function coordinatesRotation(coordinates1: {
    longitude: number;
    latitude: number;
}, coordinates2: {
    longitude: number;
    latitude: number;
}, signed?: boolean): number;
export { coordinatesAngle, coordinatesRotation };
