import type PanoTagPluginController from '..';
import type { Tag, TagContentType, Tag as TagData, TagInstance } from '../..';
import { BaseTag } from './BaseTag';
import type { PartialObjectDeep } from '../../../typings/typings';
export type PlaneTagInterface<C extends TagContentType = TagContentType> = TagInstance<C, 'Plane'>;
export declare class PlaneTag<C extends TagContentType = TagContentType> extends BaseTag<C, 'Plane'> {
    constructor(plugin: PanoTagPluginController, tagData: TagData);
    applyVisible(): void;
    set(tag: PartialObjectDeep<Tag<C, 'Plane'>>, deepMerge?: boolean): void;
    setData(...data: Parameters<InstanceType<typeof BaseTag<C, 'Plane'>>['setData']>): void;
    private loadModel;
    private renderVideoPlane;
    private renderImagePlane;
    computeNormal(): import("three").Vector3;
}
