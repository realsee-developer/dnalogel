import * as THREE from 'three';
import { BetterTween } from '../../../shared-utils';
import { CustomBezierCurve3 } from '../../../shared-utils/three/Extras/Curves/BezierCurve3';
export interface PipeParams {
    id?: string;
    path: number[][];
    texture: THREE.Texture;
    geometryConfig?: {
        radius?: number;
        radialSegments?: number;
        tubularSegments?: number;
    };
}
export interface AnimeOptions {
    duration?: number;
}
export declare class ObjectPipe extends THREE.Mesh<THREE.TubeBufferGeometry, THREE.ShaderMaterial> {
    /** 根据控制点数量计算管道路径
     *
     * @description 两个控制点使用直线路径，多个控制点使用贝塞尔路径
     */
    static calculatePath(points: THREE.Vector3[]): THREE.LineCurve3 | CustomBezierCurve3;
    static formatGeometryUV<T extends THREE.BufferGeometry>(geometry: T, pathLength: number, uPreMeter: number): T;
    /**
     * 管道的 Texture 需要满足一定的要求，需要使用 formatTexture 先 format
     */
    static formatTexture(texture: THREE.Texture): THREE.Texture;
    geometryConfig: {
        radius: number;
        tubularSegments: number;
        radialSegments: number;
    };
    customID: string;
    path: THREE.LineCurve3 | CustomBezierCurve3;
    pathLength: number;
    pathPoints: number[][];
    texture: THREE.Texture;
    protected opacityAnime?: BetterTween<{
        progress: number;
    }>;
    /** u / m: 每米水管对应到贴图上，应该对应的 u 的长度 */
    protected uPreMeter: number;
    constructor(params: PipeParams, fragmentShader?: string);
    hide(options?: AnimeOptions): Promise<boolean>;
    show(options?: AnimeOptions): Promise<boolean>;
    setOpacity(value: number): boolean;
    disposeAnime(): void;
    dispose(): void;
}
