import * as THREE from 'three';
import { ScaleHelperAbstract, type BaseHelperConfig } from '../Base/BaseHelper';
import type { ScalePosition } from '../typings';
interface LineConnection {
    line: THREE.Line;
    mesh1: THREE.Object3D & {
        scalePosition: ScalePosition;
    };
    mesh2: THREE.Object3D & {
        scalePosition: ScalePosition;
    };
}
export declare class ScaleHelper<T extends THREE.Object3D = THREE.Object3D> extends ScaleHelperAbstract<T> {
    name: string;
    scaleMeshes: Array<THREE.Object3D & {
        scalePosition: ScalePosition;
    }>;
    lineConnections: Array<LineConnection>;
    private positions;
    private container;
    private needsInitialScaling;
    private lastCamera;
    private isInitializing;
    constructor(originObject3D: T, config?: {
        positions?: Array<ScalePosition> | (() => Array<ScalePosition>);
        container?: HTMLElement | null;
    } & BaseHelperConfig);
    initQuaternion(): void;
    initialPosition(offset?: THREE.Vector3): void;
    /**
     * 清理所有缩放球
     */
    private clearAllSpheres;
    /**
     * 创建中心对称球之间的直线连接
     */
    private createLineConnections;
    update(camera: THREE.Camera): void;
    /**
     * 应用球的缩放逻辑
     */
    private applySphereScaling;
    /**
     * 应用直线缩放逻辑（直线不需要特殊的缩放处理）
     */
    private applyLineScaling;
    /**
     * 显示所有直线连接
     */
    showLineConnections(): void;
    /**
     * 隐藏所有直线连接
     */
    hideLineConnections(): void;
    /**
     * 更新直线连接的位置和可见性
     */
    private updateLineConnections;
    setScaleByCamera(camera: THREE.PerspectiveCamera | THREE.OrthographicCamera): void;
}
export {};
