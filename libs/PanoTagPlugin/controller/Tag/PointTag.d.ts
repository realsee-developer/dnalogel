import type PanoTagPluginController from '..';
import type { ArrayPosition, TagClickParams, TagContentType, Tag as TagData, TagInstance } from '../..';
import { BaseTag } from './BaseTag';
import * as THREE from 'three';
export type PointTagInterface<C extends TagContentType = TagContentType> = TagInstance<C, '2DPoint' | '3DPoint'>;
export declare class PointTag<C extends TagContentType = TagContentType> extends BaseTag<C, '2DPoint' | '3DPoint'> {
    private __Object__;
    private requestIdleCallbackId?;
    constructor(plugin: PanoTagPluginController, tagData: TagData);
    /**
     * @description 展开自己，收起其他标签
     */
    unfoldAndFoldOthers(): void;
    onClick(params: Pick<TagClickParams, 'target'>): void;
    updateVisible(): void;
    applyVisible(): void;
    unfold(): void;
    fold(): void;
    /**
     * @description 展开/收起指定id的标签
     * @param {boolean} unfolded
     */
    setUnfold(unfolded: boolean): void;
    setPosition(position: ArrayPosition): void;
    updateScreenPosition(params?: {
        force?: boolean;
    }): void;
    updateUnfoldedByPanoIndex(): void;
    computeNormal(): THREE.Vector3;
}
