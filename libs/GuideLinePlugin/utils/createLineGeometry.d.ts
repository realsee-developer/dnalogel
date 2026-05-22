import * as THREE from 'three';
import type * as PluginType from '../typing';
/** 生成曲线参数 */
interface LineGeometryOption {
    /** 路径 */
    path: PluginType.PathItem[];
    /** 线宽，默认是 0.5 */
    width: number;
    /** 每一段的长度，默认是 0.5 */
    unitLength: number;
    skipPositions?: THREE.Vector3[] | null;
    useAutoDepthTest?: boolean;
}
/** 创建路线的几何体
 * @param curvePoints 三维点位
 * @param unitWidth 线段宽度
 * @param unitLength 每一段的长度
 * @returns THREE BufferGeometry
 */
export declare function createLineGeometry(options: LineGeometryOption): {
    geometry: THREE.BufferGeometry;
    maxV: number;
    curvePath: any;
    curvePoints: any;
    animationWillError?: undefined;
} | {
    geometry: THREE.BufferGeometry;
    maxV: number;
    animationWillError: {
        start: number;
        end: number;
    }[];
    curvePath: THREE.CurvePath<THREE.Vector3>;
    curvePoints: THREE.Vector3[];
};
export {};
