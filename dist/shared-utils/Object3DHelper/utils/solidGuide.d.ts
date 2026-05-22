import * as THREE from 'three';
/** 将世界坐标投影为屏幕像素坐标 */
export declare function projectToScreen(camera: THREE.Camera, container: HTMLElement | null | undefined, point: THREE.Vector3): THREE.Vector2;
/** 估算某方向上线段的像素与世界长度的比例（世界单位/像素） */
export declare function computeWorldPerPixel(camera: THREE.Camera, container: HTMLElement | null | undefined, center: THREE.Vector3, direction: THREE.Vector3): number;
/** 计算直线长度：随相机距离/视口变化自适应，限制在可视范围内 */
export declare function computeGuideLength(camera: THREE.Camera, center: THREE.Vector3): number;
export type SolidGuideOptions = {
    color?: number;
    renderOrder?: number;
};
export declare class SolidGuideLine {
    private camera;
    private container;
    private defaults;
    constructor(camera: THREE.Camera, container: HTMLElement | null | undefined, defaults?: SolidGuideOptions);
    /** 创建无限长直线（Line + LineBasicMaterial），穿过整个平面 */
    createSolidLine(center: THREE.Vector3, direction: THREE.Vector3, options?: SolidGuideOptions): THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>;
    /** 更新已创建的直线，使其始终穿过整个平面 */
    updateSolidLine(line: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>, center: THREE.Vector3, direction: THREE.Vector3, options?: SolidGuideOptions): void;
    /** 计算"无限"直线的长度，确保穿过整个可视区域 */
    private computeInfiniteLineLength;
    /** 释放直线的几何与材质 */
    dispose(line?: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>): void;
    /** 更新默认配置 */
    updateDefaults(options: SolidGuideOptions): void;
}
