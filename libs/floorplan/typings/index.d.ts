import type { FloorplanRoomItem } from './floorplanData';
import type { FLOOR_PLAN_ATTACHED_TO } from '../constant';
import type { FloorplanData } from '../typings/floorplanData';
import type * as BasePlugin from '../../base/BasePluginWithData';
import type { FloorplanServerData } from '../typings/floorplanServerData';
export interface State extends BasePlugin.State {
    visible: boolean;
    config: Config;
}
export interface MissingFloorConfig {
    /** 缺失内容占位图片地址 */
    imageURL?: string;
    /** 图片宽：单位 px，默认 200px */
    imageWidth?: number;
    /** 图片高：单位 px，默认 120px */
    imageHeight?: number;
    /** 缺失内容提示文本内容 */
    text?: string;
    textFontSize?: number;
}
export interface Config {
    /** 指北针的显示文案，默认为 '北' */
    northDesc: string;
    /** 户型图展示时，模型的透明度，默认为 1 */
    modelOpacity: number;
    /** 鼠标放置在分间上时，是否要自动高亮分间，默认为 true */
    hoverEnable: boolean;
    /** 支持highlight功能，默认为 false */
    highlightEnable: boolean;
    /** 支持Camera功能，默认为 true */
    cameraEnable: boolean;
    /** 是否要启用指北针功能，默认为 true */
    compassEnable: boolean;
    /** Five 切换到 Topview Mode 时，是否自动展示户型图，默认为 true */
    autoShowEnable: boolean;
    /** 是否要启用户型图分间标尺功能，默认为 true */
    ruleLabelsEnable: boolean;
    /** 是否要启用户型图分间标签功能，默认为 true */
    roomLabelsEnable: boolean;
    /** 分间面积是否展示 */
    roomAreaEnable: boolean;
    /** 分间名称是否展示 */
    roomNameEnable: boolean;
    /** 类型为其他分间名称是否展示 */
    roomNameOtherTypeEnable: boolean;
    /** 分间尺寸（长 x 宽）是否展示 */
    roomDimensionEnable: boolean;
    /** 是否支持房屋标签自适应展示，默认为 true
     * @description
     * * 标签边框超过房间边框时，自动隐藏；不超过时自动展示。
     * * 鼠标 hover 时，自动展示。
     * */
    adaptiveRoomLabelVisibleEnable: boolean;
    /** 自定义「雷达」图标 */
    cameraImageUrl: string;
    /** 计算户型图大小时，以模型的哪个高度为依据，默认为 BOUNDING_CENTER
     * - FLOOR_PLAN_ATTACHED_TO.FLOOR: 户型图大小与模型的地板进行贴合
     * - FLOOR_PLAN_ATTACHED_TO.CEILING: 户型图大小与模型的天花板进行贴合
     * - FLOOR_PLAN_ATTACHED_TO.BOUNDING_CENTER: 户型图大小与模型的中心进行贴合
     */
    attachedTo: FLOOR_PLAN_ATTACHED_TO;
    /** 楼层数据不存在时，进行缺失内容填充，通过 defaultStyle 配置相关样式 */
    missingFloorConfig: MissingFloorConfig;
    /** 国际化配置 */
    i18n: (...params: any[]) => string;
    /** 分间标签的自定义函数，通过返回自定义 DOM 替换对应分间的标签 */
    getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null);
    /** 自定义分间面积文本
     * @param area 分间原始面积，单位是 mm²
     */
    getRoomAreaText: (areaSize: number) => string;
    /**
     * 自定义分间尺寸文本
     * @param width 分间原始宽度，单位是 mm
     * @param height 分间原始高度，单位是 mm
     * @returns
     */
    getRoomDimensionText: (width: number, height: number) => string;
    /** 自定义标尺距离文本
     * @param distance 原始标尺距离，单位是 mm
     */
    getRuleDistanceText: (distance: number) => string;
}
/** 插件初始化参数 */
export interface Parameters extends Partial<Config> {
    selector?: string | Element;
    scale?: number;
}
export interface PluginServerData {
    version: number;
    data: FloorplanServerData;
}
export interface ViewEvent {
    /** 是否是用户滑动模型导致的户型图自动展示/消失 */
    auto: boolean;
    /** 是否是用户操作 */
    userAction: boolean;
}
export interface EventMap extends BasePlugin.EventMap<State, FloorplanData> {
    /**
     * 展示结束的回调
     * @param event.auto 是否是自动操作
     * @param event.userAction 是否是用户操作
     */
    showAnimationEnded: (event: ViewEvent) => void;
    /** visible 从 false 到 true 的回调
     * @param event.userAction 是否是用户操作
     */
    show: (event: ViewEvent) => void;
    /** visible 从 true 到 false 的回调
     * @param event.auto 是否是自动操作
     * @param event.userAction 是否是用户操作
     */
    hide: (event: ViewEvent) => void;
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
    /**
     * 点击户型图的回调
     * @return 当返回 false 时，会阻止默认行为
     */
    click: (room: FloorplanRoomItem | undefined) => boolean | undefined;
}
export interface ShowOptions {
    /** 展示户型图时，希望到达的楼层数 */
    floorIndex: number;
    /** 是否自动展示 */
    isAutoShow: boolean;
    /** 展示户型图时，模型透明度 */
    modelOpacity: number;
    /** 是否需要 opacity 动画 */
    immediately: boolean;
    /** 是否是用户操作 */
    userAction: boolean;
}
export interface HideOptions {
    /** 是否自动隐藏 */
    isAutoHide: boolean;
    /** 是否是用户操作 */
    userAction: boolean;
}
export interface HighlightData {
    /** id: floorIndex_roomId */
    [id: string]: {
        color: string;
        opacity: number;
        disabled?: boolean;
    };
}
export type { FloorplanData as PluginData };
