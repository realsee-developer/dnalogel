import type { FivePlugin, Intersection } from '@realsee/five';
import { Group, Vector3 } from 'three';
export interface PanoCursorRaycasterPluginParameterType {
}
export interface PanoCursorRaycasterPluginExportType {
    /**
     * @description: 获取鼠标与模型的焦点位置
     * @return {Intersection | null} 鼠标与模型的焦点位置
     */
    intersection: () => Intersection | null;
    /**
     * @description: 辅助坐标轴
     * @param {Vector3} point: 坐标轴原点的位置
     * @param {number} length: 坐标轴线长度，单位：米，默认值：2
     * @param {number} fixDistance: 为避免被模型遮挡，默认向camera方向移动0.1m，默认值：0.1
     * @return {{clear: () => void; pointAxesHelperMesh: THREE.Group}} clear: 清理函数；pointAxesHelperMesh: 辅助坐标轴mesh
     */
    pointAxesHelper: (point: Vector3, length?: number, fixDistance?: number) => {
        clear: () => void;
        pointAxesHelperMesh: Group;
    };
    /**
     * @description: 将一个点在camera和点的向量上移动。传入点的位置和相对移动的距离，返回一个新的位置
     * @param {Vector3} point: 点
     * @param {number} distance: 向camera相对移动的距离（正方向为：点 -> 摄像头）
     * @return {Vector3} 计算移动后的位置
     */
    movePointTowardsCamera: (point: Vector3, distance: number) => Vector3;
    /**
     * @description: 某个点是否可见
     * @param {Vector3} point: 要检测的点
     * @param {number} distanceError: 允许的误差，如果点有可能打在模型后，则传入一个误差值，通常为0.01
     * @return {boolean}: 是否可见
     */
    canSeePoint: (point: Vector3, distanceError?: number) => boolean;
    /**
     * @description: 清理函数
     * @return {() => void} 清理函数
     */
    destroy: () => void;
}
/**
 * 全景中对当前鼠标的位置进行碰撞监测
 * @param five
 * @return
 */
export declare const PanoCursorRaycasterPlugin: FivePlugin<PanoCursorRaycasterPluginParameterType, PanoCursorRaycasterPluginExportType>;
export default PanoCursorRaycasterPlugin;
