import type * as THREE from 'three';
import { IObject3D } from '../../../shared-utils/three/IObject3D';
import type { AddObject3DHelperConfig } from '../../../Object3DHelperPlugin';
import { Subscribe } from '../../../shared-utils/Subscribe';
import type { Direction, Direction4 } from '../../../shared-utils/Object3DHelper/typings/Direction';
export type ObjectUpdateType = 'move' | 'rotate' | 'scale';
export interface ObjectUpdateParams {
    /** 操作类型：移动、旋转、缩放 */
    type?: ObjectUpdateType;
    /** 开始时间戳 */
    start_timestamp?: number;
    /** 结束时间戳 */
    end_timestamp?: number;
    /** 轴向 */
    axis?: Direction | Direction4;
    /** 进行中的状态 */
    status?: 'moving' | 'rotating' | 'scaling';
    /** 是否为操作结束，true 表示松手，false 表示拖动中 */
    is_handle_end?: boolean;
}
export declare class BaseEditor<OriginObject extends THREE.Object3D = THREE.Object3D> extends IObject3D {
    hooks: Subscribe<{
        objectUpdate: (params?: ObjectUpdateParams) => void;
    }>;
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
    private get helper();
    private objectHelperConfig;
    private currentOperation;
    constructor(originObject: OriginObject, objectHelperConfig?: AddObject3DHelperConfig | (() => AddObject3DHelperConfig));
    enable(): void;
    disable(): void;
    initialHelperMatrix(): void;
    private onMoveStart;
    private onRotateStart;
    private onScaleStart;
    private onMove;
    private onRotate;
    private onScale;
    private onMoveEnd;
    private onRotateEnd;
    private onScaleEnd;
    private onObjectUpdate;
}
