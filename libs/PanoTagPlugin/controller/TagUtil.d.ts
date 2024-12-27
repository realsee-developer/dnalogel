import type { TagContentType, StickType, TagId, MediaStore, State, PluginEventMap, TagInstance, ArrayPosition } from '../typings';
import * as THREE from 'three';
import type { Tags } from '../typings';
import { Five } from '@realsee/five';
import { FiveDomEvents } from '../../shared-utils/five/FiveDomEvents';
import type { BaseTag } from './Tag/BaseTag';
import { Cache } from '../utils/Cache';
import * as BasePlugin from '../../base/BasePlugin';
import type { PointTag } from './Tag/PointTag';
type RenderQueueType = 'TagContainerSvelte';
export declare abstract class TagUtil extends BasePlugin.Controller<State, PluginEventMap> {
    tags: (BaseTag & {
        [key: string]: any;
    })[];
    cache: Cache;
    get container(): Element;
    set container(container: Element);
    config: Pick<Tags, 'globalConfig' | 'contentTypeConfig'>;
    renderQueue: Map<string, {
        keys: string[];
        tags: BaseTag[];
    }>;
    set tagsLengthWillUpdate(value: boolean);
    /** 插件参数 */
    protected params: {
        config: Pick<Tags, 'contentTypeConfig' | 'globalConfig'>;
        debug: boolean;
        containerZIndex?: number;
    };
    mediaStore: MediaStore;
    protected store: {
        /** 清理函数数组 */
        disposers: (() => void)[];
        css3DRenderDisposer: Map<TagId, (() => void)[]>;
        eventListenerDisposer?: () => void;
        resizeObserverDisposer?: () => void;
        resizeObserverDisposerAdding: boolean;
        disposed: boolean;
    };
    domEvents: FiveDomEvents;
    private _cache_pointTag?;
    private _cache_2DPointTag?;
    private _cache_css3DTag?;
    get filterPointTag(): PointTag<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown">[];
    get filter2DPointTag(): PointTag<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown">[];
    get filterCSS3DTag(): (BaseTag<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown", "Model"> | BaseTag<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown", "Plane"> | BaseTag<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown", "3DPoint">)[];
    private _container;
    private timeoutIds;
    protected constructor(five: Five);
    updateFive(five: Five): void;
    addRenderQueue(params: {
        type: RenderQueueType;
        keys?: string[];
        tags?: BaseTag[];
    }): void;
    getTagById<C extends TagContentType = TagContentType, S extends StickType = StickType>(id: TagId): BaseTag<C, S> | undefined;
    whyHide: (tagId: TagId) => {
        reason: string;
        info?: undefined;
    } | {
        reason: any;
        info: {
            tagInstance: BaseTag<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown", StickType>;
            value: boolean;
            reason?: any;
        };
    };
    /** 暂停当前标签内进行的所有多媒体 */
    pauseCurrentMedia(): void;
    protected loadVideoFirstFrame: () => void;
    protected getPositions(tag: BaseTag): [THREE.Vector3, THREE.Vector3, THREE.Vector3, THREE.Vector3] | [ArrayPosition, ArrayPosition, ArrayPosition, ArrayPosition];
    protected addObjectClickHandler(tag: BaseTag, object: THREE.Object3D | undefined, handler: (event: Event) => any): () => void;
    protected tagsDo: (tags: TagInstance[], func: (tag: TagInstance) => any, isUpdateing?: boolean) => void;
    /**
     * @description 检查是否已经销毁
     * @returns isDisposed; 已经销毁返回 true，否则返回 false
     */
    protected checkDisposed(): boolean;
}
export {};
