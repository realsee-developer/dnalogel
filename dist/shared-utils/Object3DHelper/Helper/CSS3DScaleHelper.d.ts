import * as THREE from 'three';
import { RectangleScaleHelperAbstract } from '.';
import type { Create3DElementReturnType } from '../../../CSS3DRenderPlugin';
import type { Vector3 } from 'three';
import type { CSS3DObjectPlus } from '../../../CSS3DRenderPlugin/utils/three/CSS3DObject';
type NonVoid<T> = T extends void ? never : T;
export declare class CSS3DScaleHelper<T extends CSS3DObjectPlus = CSS3DObjectPlus> extends RectangleScaleHelperAbstract<T, HTMLElement> {
    name: string;
    points: RectangleScaleHelperAbstract<THREE.Object3D, HTMLElement>['points'];
    cornerPositions: Vector3[];
    css3DInstance?: NonVoid<Create3DElementReturnType>;
    get helperObject(): CSS3DObjectPlus<HTMLElement>;
    plane?: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
    private css3DRenderer;
    private camera;
    private scene;
    private container;
    private enabled;
    private initialScale?;
    constructor(originObject3D: T, container: HTMLElement, camera: THREE.Camera, scene: THREE.Scene);
    initQuaternion(): void;
    applyMatrix4(matrix: THREE.Matrix4): void;
    showDraggingHelper(): void;
    applyHelperScaleMatrix4(matrix: THREE.Matrix4, origin?: Vector3): void;
    updatePoints(): void;
    update(camera: THREE.Camera): void;
    applyHelperQuaternion(quaternion: THREE.Quaternion, origin: Vector3): void;
    enable(): void;
    disable(): void;
    show(): void;
    hide(): void;
    dispose(): void;
    /**
     * 缩放结束时的回调方法
     * 触发相机更新事件
     */
    onScaleEnd(): void;
    private updateSphereCorrection;
    private initRectangleScaleHelper;
    private getCornerPositions;
    private calculatePointPosition;
}
export {};
