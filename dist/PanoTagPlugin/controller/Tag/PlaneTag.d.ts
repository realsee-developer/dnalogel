import type PanoTagPluginController from '..';
import type { Tag, TagContentType, Tag as TagData, TagInstance } from '../..';
import { BaseTag } from './BaseTag';
import type { PartialObjectDeep } from '../../../typings/typings';
import type { Vector3 } from 'three';
import { Rectangle } from '../../../Sculpt/Objects/Rectangle';
export declare class PlaneTag<C extends TagContentType = TagContentType> extends BaseTag<C, 'Plane'> {
    rectanglePlane?: Rectangle;
    private _floorIndex?;
    private _floorIndexDirty;
    private _opacity?;
    constructor(plugin: PanoTagPluginController, tagData: TagData);
    /** 获取透明度 */
    get opacity(): number;
    /** 设置透明度 (0-1) */
    set opacity(value: number);
    /** 获取楼层索引（惰性计算 + 缓存） */
    get floorIndex(): number | undefined;
    /** 标记 floorIndex 需要重新计算（在位置等相关数据变化时调用） */
    invalidateFloorIndex(): void;
    applyVisible(): void;
    set(tag: PartialObjectDeep<Tag<C, 'Plane'>>, deepMerge?: boolean): void;
    setData(...data: Parameters<InstanceType<typeof BaseTag<C, 'Plane'>>['setData']>): void;
    /** 计算楼层索引 */
    private computeFloorIndex;
    private loadModel;
    private initialSculpt;
    editorEnable(): void;
    editorDisable(position?: Vector3[]): void;
    private getRectangleHelper;
    /**
     * 标签因为 visiblePanoIndex 等可见性规则被隐藏时，同时隐藏编辑辅助元素。
     * 当标签重新可见且仍处于编辑态时，再恢复辅助元素显示。
     */
    private syncEditorAuxiliaryVisibility;
    private renderVideoPlane;
    private renderImagePlane;
    private renderEmptyPlane;
    computeNormal(): Vector3;
}
export type PlaneTagInterface<C extends TagContentType = TagContentType> = TagInstance<C, 'Plane'>;
