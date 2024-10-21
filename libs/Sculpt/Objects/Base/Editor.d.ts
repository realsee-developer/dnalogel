import type * as THREE from 'three';
import { IObject3D } from '../../../shared-utils/three/IObject3D';
import type { AddObject3DHelperConfig } from '../../../Object3DHelperPlugin';
export declare class BaseEditor<OriginObject extends THREE.Object3D = THREE.Object3D> extends IObject3D {
    protected originObject: OriginObject;
    constructor(originObject: OriginObject);
    /**
     * @description: 开启编辑器
     */
    enable(): void;
    /**
     * @description: 禁用编辑器
     */
    disable(): void;
}
export declare class BaseEditorWithObjectHelper<OriginObject extends THREE.Object3D = THREE.Object3D> extends BaseEditor<OriginObject> {
    private objectHelperConfig;
    constructor(originObject: OriginObject, objectHelperConfig?: AddObject3DHelperConfig | (() => AddObject3DHelperConfig));
    enable(): void;
    disable(): void;
}
