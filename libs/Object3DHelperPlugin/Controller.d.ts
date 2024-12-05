import type { Five } from '@realsee/five';
import * as BasePlugin from '../base/BasePlugin';
import type * as THREE from 'three';
import { Object3DHelper } from '../shared-utils/Object3DHelper/index';
import type { Object3DHelperState, ObjectHelperControllers, PositionFrom, ScaleCallback, ScalePosition } from '../shared-utils/Object3DHelper/typings';
import type { HelperConfig, HelperOffset, Object3DHelperPluginEventMap, Object3DHelperPluginState } from './typings';
export declare const PLUGIN = "Object3DHelperPlugin";
export type AddObject3DHelperConfig = {
    /**
     * @description 辅助坐标轴的位置，基于 object local 坐标系。
     * ```markdown
     * 'boundingBox': 物体 boundingBox 的中心
     * 'boundingSphere': 物体 boundingSphere 的中心
     * `THREE.Vector3`: 指定 Vector3
     * `(object3D) => THREE.Vector3`: 指定 Vector3
     * ```
     * @default 'objectPosition'
     */
    positionFrom?: PositionFrom;
    /**
     * @description 辅助坐标轴的位置偏移量
     */
    offset?: HelperOffset;
    /**
     * @description 辅助坐标轴的y轴方向（绿色）
     */
    yAxis?: THREE.Vector3 | (() => THREE.Vector3);
    /**
     * @description 辅助坐标轴的x轴方向（红色）
     */
    xAxis?: THREE.Vector3 | (() => THREE.Vector3);
    /**
     * @description 辅助坐标轴的z轴方向（蓝色）
     */
    zAxis?: THREE.Vector3 | (() => THREE.Vector3);
    /**
     * @description 位移的配置
     */
    moveHelper?: HelperConfig<{
        /**
         * @description 是否开启X轴位移功能（红色）
         */
        xArrowEnable?: boolean;
        /**
         * @description 是否开启Y轴位移功能（绿色）
         */
        yArrowEnable?: boolean;
        /**
         * @description 是否开启Z轴位移功能（蓝色）
         */
        zArrowEnable?: boolean;
    }>;
    /**
     * @description 旋转的配置
     */
    rotateHelper?: HelperConfig<{
        /**
         * @description 是否开启X轴旋转功能（红色）
         */
        yzCircleEnable?: boolean;
        /**
         * @description 是否开启Y轴旋转功能（绿色）
         */
        xzCircleEnable?: boolean;
        /**
         * @description 是否开启Z轴旋转功能（蓝色）
         */
        xyCircleEnable?: boolean;
        /**
         * @description 旋转时的角度提示
         */
        angleTipsEnable?: boolean;
    }>;
    /**
     * @description 缩放的配置
     */
    scaleHelper?: HelperConfig<{
        /**
         * @description 缩放 handlers 的位置
         */
        positions?: Array<ScalePosition> | (() => Array<ScalePosition>);
        /**
         * @description 缩放 handler 被拖动后的回调
         */
        scaleCallback?: ScaleCallback;
    }>;
    /**
     * @description 物体包围盒
     */
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
    private css3DObjectModeMap;
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
