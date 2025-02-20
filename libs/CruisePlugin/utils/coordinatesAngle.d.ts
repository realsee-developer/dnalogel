/**
 * @description: 获取coordinates间的夹角
 * @return {number} 夹角角度
 */
declare function coordinatesAngle(coordinates1: {
    longitude: number;
    latitude: number;
}, coordinates2: {
    longitude: number;
    latitude: number;
}): number;
export { coordinatesAngle };
