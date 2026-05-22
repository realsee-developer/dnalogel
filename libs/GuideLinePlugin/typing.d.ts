import type GuideLinePlugin from '.';
import type { RequireAtLeastOne } from 'type-fest';
import type * as BasePluginWithData from '../base/BasePluginWithData';
import type { Tag } from '../PanoTagPlugin';
export type RouteConfig = {
    /**
     * @description 箭头贴图
     */
    arrowTextureUrl?: string;
    /**
     * @description 单位箭头宽度，单位：米
     */
    unitWidth?: number;
    /**
     * @description 单位箭头高度，单位：米
     */
    unitHeight?: number;
} & ExtraRouteData;
export interface ExtraRouteData {
    /**
     * @description 预处理数据，用于优化路线生成效果
     */
    route_standing_positions?: number[][];
    /**
     * @description 预处理数据，用于优化路线生成效果
     */
    node_pair_to_route_points?: Record<string, number[][]>;
}
export interface Route extends RouteConfig {
    id?: number;
    panoIndexList: number[];
}
export interface PluginDataV2 {
}
export type PluginData = {
    /** 路线数据 */
    lines?: GuideLineItem[];
    routes?: Route[];
    config?: RouteConfig;
};
export interface PluginServerData {
    data: PluginData;
}
export interface PluginState extends BasePluginWithData.State {
    visible: boolean;
}
export interface EventMap extends BasePluginWithData.EventMap<PluginState, PluginData> {
    show: (options: {
        userAction: boolean;
    }) => void;
    hide: (options: {
        userAction: boolean;
    }) => void;
    enable: (options: {
        userAction: boolean;
    }) => void;
    disable: (options: {
        userAction: boolean;
    }) => void;
}
export type GuideLineItemEventMap = {
    show: (options: {
        userAction: boolean;
    }) => void;
    hide: (options: {
        userAction: boolean;
    }) => void;
    walkStart: (options: {
        userAction: boolean;
    }) => void;
    walkEnded: (options: {
        userAction: boolean;
    }) => void;
};
export type GuideLinePluginExportType = ReturnType<typeof GuideLinePlugin>;
export interface LineGeometriesConfig {
    /** 是否越过点位圆环。可以开启此选项来使越过点位，使其不会重叠显示 */
    skipPanoIndexMesh?: boolean;
    unitWidth?: number;
    unitLength?: number;
}
export type GuideLineModeItemMode = 'panorama' | 'model';
export interface GuideLineItemContainer<T> {
    onChildRemoved?: (child: T) => void;
}
/** 单条路线的数据 */
export type GuideLineItem = RequireAtLeastOne<{
    /** server ID */
    id?: number | string;
    /** client ID，不存在时，会使用 String(id) 作为 client ID */
    render_id?: string;
    /** 路线名称 */
    name?: string;
    /** 可展示的楼层 */
    visible_floor_indexes?: null | number[];
    /** 点位数组 */
    pano_group?: null | number[];
    /** 路径：由多个曲线组合而成的路径，路径为空时，会使用 pano_group 自动创建 */
    path?: PathItem[];
    /** 全景态使用的数据 */
    panorama_style?: PanoramaGuideLineStyle;
    /** 模型态使用的数据 */
    model_style?: ModelGuideLineStyle;
} & ExtraRouteData, 'id' | 'render_id'>;
/** 全景路径样式 */
export interface PanoramaGuideLineStyle extends GuideLineStyle {
    start_tag?: Tag;
    end_tag?: Tag;
    /**
     * @description 是否跳过点位
     * @default false
     */
    skip_group?: boolean;
    /**
     * @description 是否自动关闭点位附近路线的深度测试
     * @default false
     */
    use_auto_depthtest?: boolean;
    /**
     * @description use_auto_depthtest 开启时，自动关闭深度测试的距离
     * @default 1~3 之间
     */
    auto_depth_test_effect_distance?: number;
}
/** 模型路径样式 */
export interface ModelGuideLineStyle extends GuideLineStyle {
    start_tag?: ModelGuideLineTagData;
    end_tag?: ModelGuideLineTagData;
}
/** 不同模态下的路线数据 */
export type GuideLineStyle = GuideLineGeometryStyle & GuideLineMaterialStyle & GuideLineMeshStyle;
/** 影响模型的样式 */
export interface GuideLineMeshStyle {
    /** 三维偏移值: [x, y, z] */
    translate?: number[];
}
/** 影响形状的样式 */
export interface GuideLineGeometryStyle {
    /** scale 之前的路线宽度，默认值是 0.5 */
    width?: number;
    /** 每一段 scale 之前的 长度，默认值是 0.5 */
    unit_length?: number;
    /** 线宽缩放 */
    scale?: number;
}
/** 影响材质的样式 */
export interface GuideLineMaterialStyle {
    /** 是否可见 */
    visible?: boolean;
    /** hex 颜色 */
    color?: string;
    /** 背景颜色 */
    background_color?: string;
    /** 背景透明度 */
    background_opacity?: number;
    /** 边框颜色 */
    border_color?: string;
    /** 边框透明度 */
    border_opacity?: number;
    /**
     * @description: 背景裁剪
     * @param border-box 背景在边框下方
     * @param padding-box 背景不在边框下方
     * @default border-box
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
     */
    background_clip?: 'border-box' | 'padding-box';
    /**
     * @description 边框宽度
     * @default 0.05
     */
    border_width?: number;
    /** 透明度 */
    opacity?: number;
    /** 贴图 */
    texture?: null | {
        /** 贴图地址 */
        url: string;
    };
}
export interface ModelGuideLineTagData {
    position: number[];
    data: {
        text: string;
        icon_url: string;
    };
}
/** 模型路线引导标签 */
export type ModelGuideLineTag = Tag<'Custom', '2DPoint'> & ModelGuideLineTagData;
/** 目前只支持 CatmullRomCurve3 */
export type PathItem = CatmullRomCurve3;
/** @link https://threejs.org/docs/index.html?q=cu#api/zh/extras/curves/CatmullRomCurve3 */
export interface CatmullRomCurve3 {
    type: 'CatmullRomCurve3';
    points: number[][];
    closed?: boolean;
    curve_type?: string;
    tension?: number;
}
