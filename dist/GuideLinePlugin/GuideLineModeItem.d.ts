import type GuideLinePlugin from './Controller';
import type { Five } from '@realsee/five';
import type { Tag } from '../PanoTagPlugin';
import type * as PluginType from './typing';
import type { GuideLineItem } from './GuideLineItem';
import * as THREE from 'three';
import { PanoTagPluginController } from '../PanoTagPlugin';
import CustomTag from './Components/Tag.svelte';
/** @link https://threejs.org/docs/index.html#api/en/extras/curves/CatmullRomCurve3 */
type CatmullRomCurve3RestParams = Omit<PluginType.CatmullRomCurve3, 'type' | 'points'>;
export interface GuideLineTagContainer {
    tag: Tag<'Custom', '2DPoint'> | null;
    plugin: PanoTagPluginController;
    app?: CustomTag;
}
/** 在不同模态下的 GuideLine */
declare class GuideLineModeItem {
    get panoGroup(): number[];
    /** 可展示的楼层 */
    get visibleFloorIndexes(): number[];
    /** THREE Curve 路径 */
    get curvePath(): THREE.CurvePath<THREE.Vector3>;
    /** THREE Curve 路径上的点 */
    get curvePoints(): THREE.Vector3[];
    name: string;
    startTagContainer: GuideLineTagContainer;
    endTagContainer: GuideLineTagContainer;
    path: PluginType.PathItem[];
    geometryStyle: PluginType.GuideLineGeometryStyle;
    materialStyle: PluginType.GuideLineMaterialStyle;
    meshStyle: PluginType.GuideLineMeshStyle;
    readonly group: THREE.Group;
    readonly mesh: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>;
    visible: boolean | null;
    private five;
    private mode;
    private _curvePath;
    private _curvePoints;
    private _panoGroup;
    private skippedPositions;
    private textureUrl;
    private scale;
    private width;
    private unitLength;
    private _visibleFloorIndexes;
    /** Five Mode 是否满足 */
    private modeVisible;
    /** 楼层是否满足展示条件 */
    private floorVisible;
    /** 默认是否展示 */
    private defaultVisible;
    /** 走点动画 */
    private inWalkAnimation;
    private customVisible;
    private parent;
    private plugin;
    private textureHasLoaded;
    private disposed;
    private flowAnime;
    /** 缓存 panoGroup 中每个点距离起点的长度 */
    private cacheLengths;
    /** 为了让多条路线在高度上错开，每个路线都需要有个额外的 offset */
    private heightOffset;
    constructor(five: Five, options: {
        mode: PluginType.GuideLineModeItemMode;
        plugin: GuideLinePlugin;
        parent: GuideLineItem;
    });
    /** 自定义展示 */
    setCustomVisible(visible: boolean | null): void;
    /** 设置默认展示 */
    setDefaultVisible(visible: boolean): void;
    dispose: () => void;
    /** 基础宽、长 */
    setUnitSize(width: number, length: number): void;
    /** 设置缩放 */
    setScale(scale: number): void;
    /** 通过点位设置线条形状 */
    setGeometryByPanoGroup(_panoGroup: number[], options?: CatmullRomCurve3RestParams & PluginType.ExtraRouteData & PluginType.GuideLineGeometryStyle & {
        skipPanoGroup?: boolean;
    }): void;
    /** 通过路径设置线条形状 */
    setGeometryByPath(path: PluginType.PathItem[], options?: PluginType.GuideLineGeometryStyle): void;
    /** 设置线条材质 */
    setMartial(options?: PluginType.GuideLineMaterialStyle): void;
    /** 设置模型状态 */
    setMeshStyle(options?: PluginType.GuideLineMeshStyle): void;
    /** 设置 Y 轴上的偏移量，为了让多条路线在高度上错开，每个路线都需要有个额外的 offset */
    setHeightOffset(offset: number): void;
    /** 设置贴图颜色 */
    setColor(color: null | string): void;
    /** 设置边框 */
    setBorderColor(color: string): void;
    /** 设置边框透明度 */
    setBorderOpacity(opacity: number): void;
    setBackgroundClip(backgroundClip: PluginType.GuideLineMaterialStyle['background_clip']): void;
    /**
     * @description: 设置边框宽度
     */
    setBorderWidth(width: number): void;
    /** 设置背景颜色 */
    setBackgroundColor(color: string): void;
    /** 设置背景透明度 */
    setBackgroundOpacity(opacity: number): void;
    /** 设置整体透明度 */
    setOpacity(opacity: number): void;
    /** 设置贴图透明度 */
    setMapOpacity(opacity: number): void;
    /** 设置贴图 */
    setTextureUrl(url: string): void;
    setVisibleFloorIndexes(floorIndexes: number[]): void;
    setStartTag(tag: Tag | PluginType.ModelGuideLineTagData | null): void;
    setEndTag(tag: Tag | PluginType.ModelGuideLineTagData | null): void;
    /** 闪烁 */
    flicker(): void;
    /** 求起点到 panoIndex 曲线长度
     * @param index panoIndex 在 panoGroup 中的索引
     *
     * @description 为什么不使用 panoIndex 作为参数？
     * - panoIndex 在一个曲线中可能出现多次，无法确定是哪一个。
     */
    getLengthByPanoGroupIndex(index: number): number | void;
    private getPanoGroupLengths;
    private setTag;
    /** 开始走点动画 */
    private onWalkAnimationStart;
    /** 结束走点动画 */
    private onWalkAnimationEnd;
    /** 模型状态变更 */
    private onFiveModeChange;
    private onFiveModelShownFloorChange;
    /** 更新可见性 */
    private updateVisible;
    private doShow;
    private doHide;
    private onFlowAnimeUpdate;
    private logError;
}
export { GuideLineModeItem };
