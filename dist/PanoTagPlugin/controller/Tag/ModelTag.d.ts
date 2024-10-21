import type PanoTagPluginController from '..';
import type { TagContentType, Tag as TagData, TagGLTFObject, TagInstance } from '../..';
import { BaseTag } from './BaseTag';
import * as THREE from 'three';
export type ModelTagInterface<C extends TagContentType = TagContentType> = TagInstance<C, 'Model'>;
export declare class ModelTag<C extends TagContentType = TagContentType> extends BaseTag<C, 'Model'> {
    loading: boolean;
    constructor(plugin: PanoTagPluginController, tagData: TagData);
    applyVisible(): void;
    /** 加载外部模型 */
    loadModel: () => Promise<TagGLTFObject>;
    computeNormal(): THREE.Vector3;
}
