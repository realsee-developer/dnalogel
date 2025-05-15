import { BaseController } from '../Base/BaseController';
import type { BoundingBoxHelperAbstract } from '../Helper';
import type * as THREE from 'three';
export declare class BoundingBoxController<OriginObject3D extends THREE.Object3D = THREE.Object3D> extends BaseController<BoundingBoxHelperAbstract<OriginObject3D>> {
    protected name: string;
    constructor(...params: ConstructorParameters<typeof BaseController<BoundingBoxHelperAbstract<OriginObject3D>>>);
}
