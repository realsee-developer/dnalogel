import type { EventHandlerConfig, FiveDomEventMap } from '../../../shared-utils/five/FiveDomEvents';
import { IObject3D } from '../../../shared-utils/three/IObject3D';
import type { BaseEditor } from './Editor';
import type { RequiredDeep } from 'type-fest';
import type { ImportDataToExportData } from '../../typings/utils.type';
import type * as THREE from 'three';
export interface BaseImportData {
    /**
     * @description: 唯一标识
     */
    id?: string;
    /**
     * @description: 物体类型
     */
    type: string;
}
export interface BaseExportData extends RequiredDeep<BaseImportData> {
}
export interface BaseObjectConfig {
    /**
     * @description: 是否启用默认行为，包括：
     * - 点击物体后高亮选中，同时启用 editor；
     * - esc 取消选中；
     * - delete 删除选中的物体；
     * - createXXXX 创建物体完成后自动启用 editor；
     * @default true
     */
    defaultAction: boolean;
    /**
     * @description: 是否以一种半透明的方式显示遮挡的部分
     * @default true
     */
    occlusionVisibility?: boolean;
    /**
     * @description 当 occlusionVisibility 为 true 时，以哪种方式显示被遮挡的部分
     * @params 'depthTest': 关闭深度测试, 'translucence': 半透明
     * @default 'translucence'
     */
    occlusionMode?: 'translucence' | 'depthTest';
}
/**
 * @description: 基础对象
 */
export declare abstract class BaseObject<ImportData extends BaseImportData = BaseImportData, ExportData extends BaseExportData = ImportDataToExportData<ImportData>, // 有性能问题，先注释掉
Config extends BaseObjectConfig = BaseObjectConfig> extends IObject3D {
    name: string;
    readonly isSculptObject = true;
    draggable: boolean;
    /**
     * @description 是否被选中
     */
    selected: boolean;
    /**
     * @description 配置
     */
    config: Config;
    abstract get editor(): BaseEditor;
    abstract _editor?: BaseEditor;
    get editing(): boolean;
    abstract type: string;
    /**
     * @description 物体导出数据
     */
    abstract get data(): ExportData;
    protected get baseData(): {
        id: string;
        type: string;
    };
    protected get pointSelector(): import("../../../shared-utils").PointSelector;
    constructor(data?: Partial<ImportData>, config?: Partial<Config>);
    abstract setData(data: Partial<ImportData>): void;
    on: <T extends keyof FiveDomEventMap>(event: T, callback: FiveDomEventMap[T], config?: EventHandlerConfig) => void;
    off: (event?: keyof FiveDomEventMap, callback?: (e: import("../../../shared-utils").FiveDomEvent) => any, ...args: any[]) => void;
    /**
     * @description 撤销
     */
    undo(): void;
    /**
     * @description 重做
     */
    redo(): void;
    /**
     * @description 是否可以撤销
     */
    canUndo(): void;
    /**
     * @description 是否可以重做
     */
    canRedo(): void;
    /**
     * @description 停止创建当前物体，等同于`esc`
     */
    stopCreating(): void;
    /**
     * @description 从场景中删除当前物体，并且移除事件监听
     */
    delete(): void;
    /**
     * @description 选择当前物体
     * @param params.only 只选择当前物体，自动取消选择其他物体；默认 `false`
     *
     */
    select(params?: {
        only?: boolean;
    }): void;
    /**
     * @description 取消选择当前物体
     */
    unselect(): void;
    /**
     * @description 高亮当前物体
     */
    highlight(): void;
    /**
     * @description 取消高亮当前物体
     */
    unhighlight(): void;
    /**
     * @description 显示删除按钮
     */
    showDeleteButton(clientX: number, clientY: number): void;
    protected applyObjectMatrixWorld: <P extends THREE.Vector3 | THREE.Vector3[]>(point: P, fromObject?: THREE.Object3D) => P;
    protected applyObjectReversalMatrixWorld: <P extends THREE.Vector3 | THREE.Vector3[]>(point: P, fromObject?: THREE.Object3D) => P;
    abstract create(...args: any): Promise<void>;
}
