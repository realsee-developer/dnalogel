/**
 * @description: 将手势操作绑定到controller上
 */
import type { Five } from '@realsee/five';
import type { BaseController } from '../shared-utils/Object3DHelper/Base/BaseController';
import type * as THREE from 'three';
import type { Subscribe } from '../shared-utils/Subscribe';
import type DomEvents from '../shared-utils/threex/domevents';
declare class ControllerWrapper<HelperControllerInterface extends new (...params: ConstructorParameters<typeof BaseController<any>>) => any> {
    helperController?: InstanceType<HelperControllerInterface>;
    private five;
    constructor(five: Five, donEvents: DomEvents, HelperController: HelperControllerInterface, object: THREE.Object3D, helperObject3D: InstanceType<HelperControllerInterface>['helperObject3D'], HelperControllerConfig?: ConstructorParameters<HelperControllerInterface>[1], hooks?: Subscribe<any>, internalHooks?: Subscribe<any>);
    dispose(): void;
    private onFiveWantsTapGesture;
    private onFiveWantsGesture;
    private onFiveIntersectionOnModelUpdate;
}
export { ControllerWrapper };
export { ControllerWrapper as FiveControllerWrapper };
