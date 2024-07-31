import type { Five } from '@realsee/five';
import * as BasePlugin from '../base/BasePlugin';
import type * as THREE from 'three';
import { Object3DHelper } from '../shared-utils/Object3DHelper/index';
import type { Object3DHelperState, ObjectHelperControllers, PositionFrom, ScaleCallback, ScalePosition } from '../shared-utils/Object3DHelper/typings';
import type { HelperConfig, HelperOffset, Object3DHelperPluginEventMap, Object3DHelperPluginState } from './typings';
export declare const PLUGIN = "Object3DHelperPlugin";
export type AddObject3DHelperConfig = {
    positionFrom?: PositionFrom;
    offset?: HelperOffset;
    yAxis?: THREE.Vector3;
    xAxis?: THREE.Vector3;
    zAxis?: THREE.Vector3;
    moveHelper?: HelperConfig<{
        xArrowEnable?: boolean;
        yArrowEnable?: boolean;
        zArrowEnable?: boolean;
    }>;
    rotateHelper?: HelperConfig<{
        yzCircleEnable?: boolean;
        xzCircleEnable?: boolean;
        xyCircleEnable?: boolean;
        angleTipsEnable?: boolean;
    }>;
    scaleHelper?: HelperConfig<{
        positions?: Array<ScalePosition> | (() => Array<ScalePosition>);
        scaleCallback?: ScaleCallback;
    }>;
    boundingBoxHelper?: HelperConfig;
};
export declare class Object3DHelperController extends BasePlugin.Controller<Object3DHelperPluginState, Object3DHelperPluginEventMap> {
    name: string;
    state: Object3DHelperState;
    objectHelperMap: Map<THREE.Object3D, {
        helper: Object3DHelper;
        disposers: (() => any)[];
    }>;
    private css3DObjectParentMap;
    private css3DRender;
    constructor(five: Five);
    /**
     * @description Show guide line
     */
    show(options?: {
        userAction?: boolean;
    }): Promise<void>;
    /**
     * @description Hide guide line
     */
    hide(options?: {
        userAction?: boolean;
    }): Promise<void>;
    /**
     * @description Enable
     */
    enable(options?: {
        userAction?: boolean;
    }): void;
    /**
     * @description Disable
     */
    disable(options?: {
        userAction?: boolean;
    }): void;
    /**
     * @description Dispose
     */
    dispose(): void;
    setState(state: Partial<Object3DHelperState>, options?: {
        userAction?: boolean;
    } & Record<string, any>): void;
    getObject3DHelper(object3D: THREE.Object3D): {
        helper: Object3DHelper;
        disposers: (() => any)[];
    };
    /**
     * @description 添加 helper
     * @param { THREE.Object3D } object3D       要添加helper的物体
     * @param { boolean } config.moveHelper     位移helper
     * @param { boolean } config.rotateHelper   旋转helper
     * @param { boolean } config.scaleHelper    缩放helper
     */
    addObject3DHelper(object3D: THREE.Object3D, paramsConfig?: AddObject3DHelperConfig): ObjectHelperControllers | undefined;
    removeObject3DHelper(object3D: THREE.Object3D): void;
    private handleEnable;
    private handleVisible;
    private handleDispose;
    private everyHelperDo;
    private actionIfStateIsEnabled;
    private getConfig;
}
