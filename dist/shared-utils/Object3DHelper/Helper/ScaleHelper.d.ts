import * as THREE from 'three';
import { ScaleHelperAbstract, type BaseHelperConfig } from '../Base/BaseHelper';
import type { ScalePosition } from '../typings';
export declare class ScaleHelper<T extends THREE.Object3D = THREE.Object3D> extends ScaleHelperAbstract<T> {
    scaleMeshes: Array<THREE.Mesh & {
        scalePosition: ScalePosition;
    }>;
    private positions;
    constructor(originObject3D: T, config?: {
        positions?: Array<ScalePosition> | (() => Array<ScalePosition>);
    } & BaseHelperConfig);
    initialPosition(offset?: THREE.Vector3): void;
    setScaleByCamera(camera: THREE.PerspectiveCamera): void;
}
