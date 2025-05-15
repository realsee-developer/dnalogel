import type { Mode, State as FiveState } from '@realsee/five';
import type PanoTagPluginController from '..';
import type { StickType, Tag, TagClickParams, TagConfig, TagContentType, Tag as TagData, TagEvents, TagGLTFObject, TagId } from '../..';
import { Subscribe } from '../../../shared-utils/Subscribe';
import { lookPoint } from '../../../shared-utils';
import * as THREE from 'three';
import type { ImagePlane, VideoPlane } from '../../utils/model/mediaPlane';
import { Cache } from '../../utils/Cache';
import type { AnimeParams } from 'animejs';
import type TagContentSvelte from '../../Components/Tag/index.svelte';
import type { PartialObjectDeep } from '../../../typings/typings';
import type { LiteralUnion } from 'type-fest';
import type { CSS3DObjectPlus } from '../../../shared-utils/CSS3DRender/CSS3DObject';
/**
 * @description 标签实例
 * @property `id` 标签id
 * @property `contentType` 标签内容类型
 * @property `stickType` 标签附着点类型
 * @property `state` 标签状态
 * @property `centerPosition` 标签位置
 * @property `currentConfig` 当前配置
 * @property `hooks` 事件钩子
 * @property `plugin` 标签所属插件的实例
 * @function `enable()` 启用
 * @function `disable()` 禁用
 * @function `blink()` 闪烁
 * @function `unfold()` 展开
 * @function `fold()` 收起
 * @function `setData()` 修改标签数据
 * @function `setPosition()` 修改标签位置
 * @function `find()` 找到标签
 */
export declare abstract class BaseTag<C extends TagContentType = TagContentType, S extends StickType = StickType> implements Tag {
    plugin: PanoTagPluginController;
    id: TagId;
    contentType: LiteralUnion<C, string>;
    stickType: S;
    enabled: boolean;
    config: Tag<C, S>['config'];
    data: Tag<C, S>['data'];
    get visible(): boolean;
    state: {
        visible: boolean;
        unfolded: boolean;
    };
    temporaryState: {
        visible: boolean;
    };
    originPosition: Tag<C, S>['position'];
    position: Tag<C, S>['position'];
    fiveState?: Partial<FiveState>;
    model?: {
        promise: Promise<TagGLTFObject>;
        object?: TagGLTFObject;
    };
    matrix: Tag<C, S>['matrix'];
    screenPosition: {
        leftPx: number;
        topPx: number;
        scale: number;
    } | null;
    normal: Tag<C, S>['normal'];
    mediaPlane?: ImagePlane | VideoPlane;
    hooks: Subscribe<TagEvents<C>>;
    zIndex?: number;
    play?: () => void;
    pause?: () => void;
    get five(): import("@realsee/five").Five;
    get fiveUtil(): import("../../../shared-utils/Utils/FiveUtil").FiveUtil;
    get workUtil(): import("../../../shared-utils/Utils/WorkUtil").WorkUtil;
    get centerPosition(): THREE.Vector3;
    get currentConfig(): TagConfig<"Panorama" | "Model" | "Custom" | "Audio" | "Text" | "ImageText" | "Image" | "Video" | "Link" | "Sticker" | "VRLink" | "PanoLink" | "Marketing" | "MediaPlane" | "MediaModel" | "Unknown">;
    get currentVisible(): boolean;
    tag3DContentSvelte?: {
        svelteApp: TagContentSvelte;
        /** @deprecated rename to css3DInstance */
        domContainer: {
            css3DObject: CSS3DObjectPlus;
        };
        css3DInstance: CSS3DObjectPlus;
        initialNormal: THREE.Vector3;
        currentNormal: THREE.Vector3;
        dispose: () => void;
    };
    dom?: HTMLDivElement;
    contentDom?: HTMLDivElement;
    initialConfig: TagData['config'];
    private computedConfig;
    cache: Cache;
    entryFromModel?: boolean;
    get sharedCache(): Cache;
    _updating: boolean;
    /**
     * 是否启用 hover 行为，默认 为config.popoverConfig.enabled
     */
    hoverEnabled: boolean;
    constructor(plugin: PanoTagPluginController, tagData: TagData);
    /**
     * @description 使 state.visible 生效，但是只是加入渲染队列。等下次渲染时再真正生效
     */
    applyVisible(): void;
    /**
     * @description 找到标签
     */
    find(params?: {
        targetMode?: 'Panorama' | 'Mapview';
        pointConfig?: Parameters<typeof lookPoint>[2];
    }): Promise<this>;
    /**
     * @description 闪烁
     */
    blink(animeConfig?: Partial<AnimeParams>): Promise<void>;
    /**
     * @description 展开
     */
    unfold(): void;
    /**
     * @description 展开自己，收起其他标签
     */
    unfoldAndFoldOthers(): void;
    /**
     * @description 收起
     */
    fold(): void;
    /**
     * @description 启用
     */
    enable(): void;
    /**
     * @description 禁用
     */
    disable(): void;
    /**
     * @deprecated use `setData` instead
     */
    changeData(data: PartialObjectDeep<Tag<C>['data']>, deepMerge?: boolean): void;
    /**
     * @deprecated use `setPosition` instead
     */
    changePosition(position: Tag<C>['position']): void;
    /**
     * @description 修改标签数据
     * @param deepMerge 是否深度合并 data，默认为 true
     */
    setData(data: PartialObjectDeep<Tag<C>['data']>, deepMerge?: boolean): void;
    /**
     * @description 修改标签位置
     */
    setPosition(position: Tag<C>['position']): void;
    /**
     * @description 设置标签实例的属性
     * @param deepMerge 是否深度合并 data，默认为 true
     */
    set(tag: PartialObjectDeep<Tag<C>>, deepMerge?: boolean): void;
    updateConfig(): void;
    updateVisible(): void;
    updateZIndex(): void;
    getConfig(tagData?: TagData, params?: {
        useCache?: boolean;
        fiveMode?: Mode;
    }): TagConfig;
    getDistance(fiveState?: Partial<FiveState>, accurate?: number): number;
    /**
     * @description 用于排序的距离，性能更好
     */
    getSquaredDistance(): number;
    getVisible(fiveState?: Partial<FiveState>): boolean;
    getUnfoldedByPanoIndex(panoIndex?: number): any;
    getUnfoldedByCamera(): any;
    can(action: 'show' | 'hide' | 'fold' | 'unfold'): boolean;
    onClick(params: Pick<TagClickParams, 'target'>): void;
    abstract computeNormal(): THREE.Vector3 | undefined;
    computeRenderType(): "Mesh" | "Dom" | "BehindDom";
    protected computeVisible(_fiveState?: Partial<FiveState>): {
        value: boolean;
        reason?: any;
    };
    /**
     * @description 计算标签可见性
     */
    protected computeVisibleByFiveMode(config: Exclude<Extract<TagConfig['visibleConfig'], Record<any, any>>, Function>, mode: Mode): {
        value: boolean;
        reason: string;
        visibleFiveMode: (Mode | "all" | Mode[] | "PanoramaLike" | "ModelLike") | ((tag: import("../..").TagInstance) => Mode | "all" | Mode[] | "PanoramaLike" | "ModelLike");
        mode: Mode;
    };
    /** 通过射线检测标签可用性 */
    protected computeVisibleByIntersect(panoIndex?: number): {
        value: boolean;
        reason: {
            type: string;
            fivePanoIndex: number;
            passedCount?: undefined;
            needPassed?: undefined;
            model?: undefined;
        };
    } | {
        value: boolean;
        reason?: undefined;
    } | {
        value: boolean;
        reason: {
            type: string;
            passedCount: number;
            needPassed: number;
            model: string;
            fivePanoIndex?: undefined;
        };
    };
    protected computeVisibleByFloorIndex(): {
        value: boolean;
        currentFiveFloorIndex: number;
        tagFloorIndex: number;
    };
    /**
     * @description 获取是否展开
     */
    protected computeUnfoldedByPanoIndex(panoIndex?: number): boolean;
    protected computeUnfoldedByCamera(): any;
    protected computeTagProject(): {
        x: number;
        y: number;
        z: number;
    };
    protected addObjectClickHandler(tag: BaseTag, object: THREE.Object3D | undefined, handler: (event: Event) => any): () => void;
    whyHide(this: BaseTag): {
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
    private ready;
    /**
     * @description 销毁并移除
     */
    destroy(): void;
    /**
     * @description 判断 popover 是否在配置上启用（永久配置）
     */
    isPopoverConfigEnabled(): boolean;
    /**
     * @description 判断当前标签是否允许临时 hover 弹出 popover（临时控制）
     */
    isHoverEnabled(): boolean;
}
