import type PanoTagPluginController from '..';
import type { ArrayPosition, Tag, TagClickParams, TagContentType, Tag as TagData, TagInstance } from '../..';
import type { PartialObjectDeep } from '../../../typings/typings';
import { BaseTag } from './BaseTag';
import * as THREE from 'three';
export type PointTagInterface<C extends TagContentType = TagContentType> = TagInstance<C, '2DPoint' | '3DPoint'>;
export declare class PointTag<C extends TagContentType = TagContentType> extends BaseTag<C, '2DPoint' | '3DPoint'> {
    private __Object__;
    private requestIdleCallbackId?;
    private iconPixelGap;
    private _temp;
    private _lastUpdateCache;
    constructor(plugin: PanoTagPluginController, tagData: TagData);
    initialTagLine(): void;
    /**
     * @description 展开自己，收起其他标签
     */
    unfoldAndFoldOthers(): void;
    onClick(params: Pick<TagClickParams, 'target'>): void;
    applyVisible(): void;
    unfold(): void;
    fold(): void;
    /**
     * @description 展开/收起指定id的标签
     * @param {boolean} unfolded
     */
    setUnfold(unfolded: boolean): void;
    setPosition(position: ArrayPosition): void;
    /**
     * 更新标签连线的位置，使其端点与icon保持固定像素距离
     * 使用屏幕空间反投影方法，确保任意视角下都保持固定像素距离
     */
    private updateTagNormalLinePosition;
    updateScreenPosition(params?: {
        force?: boolean;
    }): void;
    set(tag: PartialObjectDeep<Tag<C, '2DPoint' | '3DPoint'>>, deepMerge?: boolean): void;
    setData(...data: Parameters<InstanceType<typeof BaseTag<C, '2DPoint' | '3DPoint'>>['setData']>): void;
    updateUnfoldedByPanoIndex(): void;
    computeNormal(): THREE.Vector3;
    removeTagNormalLine(): void;
    /**
     * @description 获取额外的闪烁目标，包括法线（如果有）
     */
    protected getAdditionalBlinkTargets(): any | any[] | null;
}
