import type { Mode as FiveMode } from '@realsee/five';
export interface PolylineJson {
    id: string;
    lines: LineJson[];
    /** 当前折线在哪个点位上可见，字段不存在时，不做限制 */
    visiblePanoIndexes?: number[];
    /** 当前折线在哪些 FiveMode 上可见，字段不存在时，不做限制 */
    visibleFiveMode?: FiveMode[];
}
export interface LineJson {
    id: string;
    text?: string;
    points: PointJson[];
}
export interface PointJson {
    id: string;
    position: number[];
}
export interface MeasurePluginData {
    polylines: PolylineJson[];
}
export interface MeasurePluginServerData {
    list: {
        polyline: PolylineJson;
    }[];
}
/** 开放可配置参数 */
export interface OpenParameter {
    isMobile?: boolean;
    crossHairParameter?: CrossHairParameter;
}
/** 长度达到一定值时，自动结束线段，null 的话不自动结束 */
export interface autoEndConfig {
    line?: number | null;
    area?: number | null;
}
export type MeasureType = 'line' | 'area';
export type PointSelectorMode = 'fixed' | 'cursor';
export interface EditParameter {
    /**
     * @description 选择测量插件的模式
     * @default ['line']
     * @example
     * ['line']: 传统的测距
     * ['area']: 新增的测面积功能
     * ['line', 'area']: 同时开启测距和测面积功能
     */
    allowMeasureType?: Array<MeasureType>;
    /**
     * @description: 选点的两种模式, 'fixed' 为固定选点为屏幕中心点，拖动five画布来选点，'cursor' 为跟随鼠标移动
     */
    pointSelectorMode?: PointSelectorMode;
    autoEndConfig?: autoEndConfig;
}
export interface CrossHairParameter {
    useNormalVector?: boolean;
    ballColor?: number;
}
