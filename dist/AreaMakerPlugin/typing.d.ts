import type * as BasePlugin from '../base/BasePluginWithData';
import type * as THREE from 'three';
import type { AreaMakerItem } from './utils/Item';
export type { Controller as AreaMakerController } from './Controller';
export type { AreaMakerItem };
/** 插件初始化参数 */
export interface Params {
    config?: Partial<Config>;
    initialState?: Partial<State>;
}
/** 插件状态 */
export interface State extends BasePlugin.State {
    /** 插件是否启用 */
    enabled: boolean;
    /** 插件整体是否可见 */
    visible: boolean;
}
/** 插件配置 */
export interface Config {
    /** 标注模型是否开启深度检测，此配置仅对模型生效，不会影响标签的展示效果。
     * @default true
     * @description 关闭后，标注模型不会被其他模型遮挡
     */
    modelDepthTest: boolean;
}
/** 插件事件 */
export interface EventMap extends BasePlugin.EventMap<State, ServerData> {
    /** visible 从 false 到 true 的回调
     * @param event.userAction 是否是用户操作
     */
    show: (event: {
        userAction: boolean;
    }) => void;
    /** visible 从 true 到 false 的回调
     * @param event.userAction 是否是用户操作
     */
    hide: (event: {
        userAction: boolean;
    }) => void;
    /** enabled 从 false 到 true 的回调
     * @param event.userAction 是否是用户操作
     */
    enable: (event: {
        userAction: boolean;
    }) => void;
    /** enabled 从 true 到 false 的回调
     * @param event.userAction 是否是用户操作
     */
    disable: (event: {
        userAction: boolean;
    }) => void;
    /** config 变更的回调
     * @param event.prevConfig 变更前的 config
     * @param event.config 变更后的 config
     * @param event.userAction 是否是用户操作
     */
    configChange: (event: {
        prevConfig: Config;
        config: Config;
        userAction: boolean;
    }) => void;
    /** 插件内容点击的回调
     * @param event.target 点击的标注实例
     * @param event.intersectObjects 射线与标注模型的交点集合
     * @param event.wantsFiveTapGestureParams Five wantsFiveTapGesture 的回调参数
     * @returns <boolean> | <void> 返回 false 会阻止 Five wantsFiveTapGesture 的回调，其余 return 值会被忽略
     */
    wantsTap: (event: {
        target: AreaMakerItem;
        intersectObjects: THREE.Intersection[];
    }) => boolean | void;
}
/** 标注实例事件 */
export type AreaMakerItemEventMap = {
    /** 标注标签点击的回调
     * @param event.target 点击的标注实例
     * @param event.nativeEvent 点击事件的的原始 MouseEvent
     */
    tagClick: (event: {
        target: AreaMakerItem;
        nativeEvent: MouseEvent;
    }) => void;
    /**
     * @description: 标注标签没有被遮挡，自动展示
     */
    tagShow: () => void;
    /**
     * @description: 标注标签被模型遮挡，自动隐藏
     */
    tagHide: () => void;
};
/** 动画相关的配置 */
export interface AnimeOptions {
    /** 动画时长，单位是毫秒 */
    duration?: number;
}
export interface ShowHideOptions extends BasePlugin.BaseOptions {
    userAction: boolean;
}
/** 第一版数据
 * @description 为什么会存在两种数据？
 * 目前数据是线上已经存在的，这一版数据目前存在以下问题：
 * 1. 无法描述弧线。
 * 2. 数据结构不够清晰，数据存在一定产品逻辑上的抽象，比如说标注的高度，是由楼层高度和人工设置的高度修正组成的。
 */
export interface ServerDataV1 {
    list: ServerAreaMakerItemV1[];
}
/** 第二版数据 */
export interface ServerDataV2 {
    list: ServerAreaMakerItem[];
}
/** load 的数据 */
export type ServerData = ServerDataV1 | ServerDataV2;
/** 插件使用的数据 */
export type PluginData = ServerDataV2;
export type ItemRenderer = (container: HTMLElement, item: ServerAreaMakerItem) => () => void;
export interface ServerAreaMakerItem {
    id: number | string;
    /** 标注名称 */
    name?: string;
    /** 标注所在楼层 */
    floor_index: number;
    /** 标注物体 */
    object_data: {
        /**
         * @description: 是否加载标注模型
         * @default true
         */
        visible?: boolean;
        /** 标注底面形状，THREE.Shape().toJSON() 的结果 */
        shape: Record<string, any>;
        /** 标注底面 y 坐标 */
        bottom_y: number;
        /** 标注高度，指标注顶部距离底部的距离。只能为正值，单位是米 */
        height: number;
        /** 标注颜色
         * @example "#ffffff"
         */
        color?: string;
        /** 标注透明度 */
        opacity?: number;
    };
}
export interface ServerAreaMakerItemV1 {
    id: number;
    name: string;
    object_data: {
        /**
         * @description: 是否加载标注模型
         * @default true
         */
        visible?: boolean;
        /** 绘制平面的三维世界坐标点集合 */
        points: number[][];
        /** 楼层索引 */
        floorIndex: number;
        /** 楼层高度 */
        height: number;
        /** 人工设置的y坐标方向偏移 */
        fixedY: number;
        /** 人工设置的高度修正 */
        fixedHeight: number;
        color: string;
        opacity?: number;
    };
}
