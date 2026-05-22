import type { Matrix4, Quaternion } from 'three';
import { Vector3 } from 'three';
import { Subscribe } from '../../../shared-utils/Subscribe';
import OpacityMesh from '../../../shared-utils/CSS3DRender/OpacityMesh';
import { CSS3DObject } from '../../../shared-utils/three/CSS3DRenderer';
export declare const MinRatio = 0.00216;
export declare const DefaultRatio = 0.003;
export type Mode = 'front' | 'behind';
export type CornerPoints = [Vector3, Vector3, Vector3, Vector3];
export type CSS3DRenderEventMap = {
    applyMatrix4: (matrix: Matrix4) => void;
    applyQuaternion: (quaternion: Quaternion) => void;
    applyScaleMatrix4: (matrix: Matrix4) => void;
};
export declare class CSS3DObjectPlus<T extends HTMLElement = HTMLElement> extends CSS3DObject {
    version: number;
    readonly isCSS3DObjectPlus: true;
    readonly isCSS3DObject: true;
    name: string;
    container: T;
    width: number;
    height: number;
    domWidthPx: number;
    domHeightPx: number;
    cornerPoints: CornerPoints;
    centerPosition: Vector3;
    ratio: number;
    mode: 'front' | 'behind';
    readonly hooks: Subscribe<CSS3DRenderEventMap>;
    opacityMesh?: OpacityMesh;
    private selfVisible;
    constructor(params: {
        container?: T;
        mode?: 'front' | 'behind';
        width?: number;
        cornerPoints?: CornerPoints;
        ratio?: number;
        dpr?: number;
        pointerEvents?: 'none' | 'auto';
        style?: Partial<CSSStyleDeclaration>;
    });
    setVisible: (visible: boolean) => void;
    updateVisible: () => void;
    removeFromParent(): this;
    removeOpacityMesh(): this;
    dispose(): void;
    getOpacityMesh(): OpacityMesh;
    applyMatrix4(matrix: Matrix4): void;
    applyQuaternion(quaternion: Quaternion): this;
    applyScaleMatrix4(matrix: Matrix4): void;
    /**
     * @description: 生成透明Mesh
     */
    private createOpacityMesh;
}
