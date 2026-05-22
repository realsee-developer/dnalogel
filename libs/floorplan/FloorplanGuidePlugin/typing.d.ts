import type * as BasePlugin from '../../base/BasePluginWithData';
import type { FloorplanData } from '../typings/floorplanData';
import type { FloorplanServerData } from '../typings/floorplanServerData';
import type { FloorplanRoomItem } from '../typings/floorplanData';
import type { MissingFloorConfig } from '../typings';
export interface Config {
    /**
     * @description 鼠标放置在分间上时，是否要自动高亮分间
     * @default false
     */
    hoverEnable: boolean;
    /**
     * @description 支持highlight功能
     * @default false
     */
    highlightEnable: boolean;
    /** 自定义「雷达」图标 */
    cameraImageUrl: string;
    /** 当前楼层图片不存在时，使用的占位图片 */
    missingFloorImageUrl: string;
    /** 楼层数据不存在时，进行缺失内容填充，通过 missingFloorConfig 配置相关样式 */
    missingFloorConfig: MissingFloorConfig;
    /**
     * @description 是否启用点击事件
     * @default false
     */
    clickEnable?: boolean;
    /**
     * @description 是否启用房间标签功能
     * @default false
     */
    roomLabelsEnable?: boolean;
    /**
     * @description 是否显示房间名称
     * @default true
     */
    roomNameEnable?: boolean;
    /**
     * @description 类型为其他分间名称是否展示
     * @default true
     */
    roomNameOtherTypeEnable?: boolean;
    /**
     * @description 是否显示房间面积
     * @default true
     */
    roomAreaEnable?: boolean;
    /**
     * @description 是否支持房屋标签自适应展示，默认为 true
     * * 标签边框超过房间边框时，自动隐藏；不超过时自动展示。
     * * 鼠标 hover 时，自动展示。
     * @default true
     */
    adaptiveRoomLabelVisibleEnable?: boolean;
    /**
     * @description 自定义房间面积文本显示函数
     * @param areaSize 房间面积，单位为平方毫米
     * @default (size) => (size / 1000000).toFixed(1) + '㎡'
     */
    getRoomAreaText?: (areaSize: number) => string;
    /**
     * @description 分间标签的自定义函数，通过返回自定义 DOM 替换对应分间的标签
     */
    getLabelElement?: undefined | ((room: FloorplanRoomItem) => Element | null);
    /**
     * @description 是否启用指北针功能
     * @default false
     */
    compassEnable?: boolean;
    /**
     * @description 指北针的显示文案
     * @default '北'
     */
    northDesc?: string;
    /**
     * @description 指北针的高度
     * @default 50
     */
    compassHeight?: number;
    /**
     * @description 观察点的大小（宽度等于高度）
     * @default 12
     */
    observerDotSize?: number;
    /**
     * @description 雷达相机的大小（宽度等于高度）
     * @default 36
     */
    cameraSize?: number;
    /**
     * @description 雷达相机的偏移量，用于定位和旋转中心
     * @default 28.5
     */
    cameraOffset?: number;
    /**
     * @description 国际化配置函数
     * @default (key) => key
     */
    i18n?: (...params: any[]) => string;
}
export interface State extends BasePlugin.State {
    visible: boolean;
    config: Config;
    /** 当前显示的楼层索引，可能与 Five 的当前楼层不同 */
    displayedFloorIndex?: number;
}
/** 点击事件数据 */
export interface ClickEventData {
    /** 归一化图像坐标 (0-1) */
    imageX: number;
    /** 归一化图像坐标 (0-1) */
    imageY: number;
    /** 点击的楼层索引 */
    floorIndex: number;
    /** 原始点击事件 */
    originalEvent: MouseEvent;
    /** 目标观察点索引 (当找到最近观察点时) */
    targetPanoIndex?: number;
    /** 到目标观察点的距离 (归一化图像坐标系中的距离, 0-1) */
    targetDistance?: number;
}
export interface EventMap extends BasePlugin.EventMap<State, FloorplanData> {
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
    /**
     * 点击户型图的回调
     * @param clickData 点击位置的详细信息
     */
    click: (clickData: ClickEventData) => void;
}
/** 插件初始化参数 */
export interface Parameters extends Partial<Config> {
    wrapper?: string | Element;
    configs?: {
        hoverEnable?: boolean;
        cameraImageUrl?: string;
        clickEnable?: boolean;
        roomNameOtherTypeEnable?: boolean;
        roomLabelsEnable?: boolean;
        roomNameEnable?: boolean;
        roomAreaEnable?: boolean;
        adaptiveRoomLabelVisibleEnable?: boolean;
        getRoomAreaText?: (size: number) => string;
        compassEnable?: boolean;
        northDesc?: string;
        compassHeight?: number;
        observerDotSize?: number;
        cameraSize?: number;
        cameraOffset?: number;
    };
    /** 静态资源前缀，用于替换插件中使用到的固化资源 */
    staticPrefix?: string;
    /** 国际化配置函数 */
    i18n?: (...params: any[]) => string;
    /** 楼层数据不存在时的缺失内容配置 */
    missingFloorConfig?: Partial<MissingFloorConfig>;
}
export interface PluginServerData {
    version: number;
    data: FloorplanServerData;
}
export type { FloorplanData as PluginData };
