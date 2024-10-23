import type PanoTagPluginController from '..';
import type { TagContentType, Tag as TagData, TagInstance } from '../..';
import { BaseTag } from './BaseTag';
export type PlaneTagInterface<C extends TagContentType = TagContentType> = TagInstance<C, 'Plane'>;
export declare class PlaneTag<C extends TagContentType = TagContentType> extends BaseTag<C, 'Plane'> {
    constructor(plugin: PanoTagPluginController, tagData: TagData);
    applyVisible(): void;
    private renderVideoPlane;
    private renderImagePlane;
    computeNormal(): import("three").Vector3;
}
