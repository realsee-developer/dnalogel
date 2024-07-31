import type { TagInstance, TagContentType, StickType, TagId, TagConfig, PlaneTag, MediaStore } from '../typings';
import * as THREE from 'three';
import type { Tag, Tags, PointTagInstance, Point3DTag } from '../typings';
import { TagCache } from './TagCache';
import { Five } from '@realsee/five';
import type { State as FiveState } from '@realsee/five';
import type { Mode } from '@realsee/five';
import { FiveDomEvents } from '../../shared-utils/five/FiveDomEvents';
export declare abstract class TagUtil extends TagCache {
    tags: TagInstance[];
    get container(): Element;
    set container(container: Element);
    config: Pick<Tags, 'globalConfig' | 'contentTypeConfig'>;
    set tagsLengthWillUpdate(value: boolean);
    /** 插件参数 */
    protected params: {
        config: Pick<Tags, 'contentTypeConfig' | 'globalConfig'>;
        debug: boolean;
        containerZIndex?: number;
    };
    protected mediaStore: MediaStore;
    /** css3DRenderPlugin */
    protected get css3DRenderPlugin(): import("../../CSS3DRenderPlugin/Controller").default;
    protected store: {
        /** 清理函数数组 */
        disposers: (() => void)[];
        visibleWithAnimation?: boolean;
        css3DRenderDisposer: Map<TagId, (() => void)[]>;
        eventListenerDisposer?: () => void;
        resizeObserverDisposer?: () => void;
        resizeObserverDisposerAdding: boolean;
        disposed: boolean;
    };
    protected domEvents: FiveDomEvents;
    private _cache_pointTag?;
    private _cache_2DPointTag?;
    private _cache_imagePlane?;
    private _cache_mediaModel?;
    private _cache_css3DTag?;
    protected get filterPointTag(): PointTagInstance[];
    protected get filter2DPointTag(): TagInstance<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown", "2DPoint">[];
    protected get filterImagePlane(): TagInstance<"MediaPlane", "Plane">[];
    protected get filterMediaModel(): TagInstance<"MediaModel", "Model">[];
    protected get filterCSS3DTag(): (TagInstance<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown", "Plane"> | TagInstance<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown", "Model"> | TagInstance<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown", "3DPoint">)[];
    private _container;
    private _css3DRenderPlugin;
    protected constructor(five: Five);
    getTagById<C extends TagContentType = TagContentType, S extends StickType = StickType>(id: TagId): TagInstance<C, S> | undefined;
    /** 暂停当前标签内进行的所有多媒体 */
    pauseCurrentMedia(): void;
    /**
     * @description 获取标签配置
     */
    getTagConfig(tag: Tag, params?: {
        useCache?: boolean;
        fiveMode?: Mode;
    }): TagConfig<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown">;
    /**
     * @description 获取标签当前状态
     */
    getCurrentVisibleState(tag: TagInstance): boolean;
    protected loadVideoFirstFrame: () => void;
    protected updateTagConfig(): void;
    protected can<T extends Tag>(action: 'show' | 'hide' | 'fold' | 'unfold', paramsTag: T): boolean;
    protected getRenderType(tag: TagInstance): 'Dom' | 'Mesh' | 'BehindDom';
    /**
     * @description 获取角度
     */
    protected getAngle(tag: Point3DTag | PlaneTag, panoIndex?: number): number;
    /**
     * @description 获取距离
     */
    protected getDistance(tag: TagInstance, fiveState?: Partial<FiveState>): number;
    protected getPositions(tag: TagInstance): [THREE.Vector3, THREE.Vector3, THREE.Vector3, THREE.Vector3] | [import("../typings").ArrayPosition, import("../typings").ArrayPosition, import("../typings").ArrayPosition, import("../typings").ArrayPosition];
    protected addObjectClickHandler(tag: TagInstance, object: THREE.Object3D | undefined, handler: (event: Event) => any): () => void;
    protected getTagNormal(tag: TagInstance): THREE.Vector3 | undefined;
    protected getTransformedPostion(position: Tag['position']): THREE.Vector3 | [THREE.Vector3, THREE.Vector3, THREE.Vector3, THREE.Vector3];
    protected getTransformedMatrix(matrix: number[]): number[];
    /**
     * @description 检查是否已经销毁
     * @returns isDisposed; 已经销毁返回 true，否则返回 false
     */
    protected checkDisposed(): boolean;
    /**
     * @description 获取merge后的配置
     */
    protected calculateTagConfig(tag: Tag | TagInstance, params?: {
        useCache?: boolean;
    }): TagInstance['computedConfig'];
}
