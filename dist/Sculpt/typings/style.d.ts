import type * as THREE from 'three';
export type Color = THREE.Color | string | number;
export declare const DEFAULT_COLOR = 16777215;
export declare const DEFAULT_LINE_COLOR = 16777215;
export declare const DEFAULT_LINE_WIDTH = 1;
export declare const DEFAULT_LINE_OPACITY = 1;
export declare const DEFAULT_OPACITY = 0.5;
export declare const DEFAULT_HIGHLIGHT_OPACITY = 0.6;
export type OpacityStyle = {
    /**
     * @description: 透明度
     * @default 0.5
     */
    opacity?: number;
};
export type ColorStyle = {
    /**
     * @description: 颜色
     * @default 0xffffff
     */
    color?: Color;
};
export type LineOpacityStyle = {
    /**
     * @description: 透明度
     * @default 1
     */
    lineOpacity?: number;
};
export type LineColorStyle = {
    /**
     * @description: 边框线颜色
     * @default 0xffffff
     */
    lineColor?: Color;
};
export type LineWidthStyle = {
    /**
     * @description: 线宽
     * @default 1
     */
    lineWidth?: number;
};
export type CreateLimitConfig = {
    /**
     * @description 限制折线绘制的平面; `xoz` 限制在水平面; `y` 限制垂直面; `none` 不限制
     * @default `none`
     */
    limit: 'xoz' | 'y' | 'none';
};
export type DrawMethodConfig = {
    /**
     * @description 矩形绘制方式; `vertex` 按顺序绘制三个点; `diagonal` 先绘制对角线;
     * @default `diagonal`
     */
    drawMethod: 'vertex' | 'diagonal';
};
export type OcclusionStyle = {
    /**
     * @description 是否以一种半透明的方式显示遮挡的部分
     */
    occlusionVisibility: boolean;
    /**
     * @description 当 occlusionVisibility 为true时，以哪种方式显示被遮挡的部分
     * @params 'depthTest': 关闭深度测试, 'translucence': 半透明
     * @default 'translucence'
     */
    occlusionMode: 'translucence' | 'depthTest';
};
export type LengthConfig = {
    /**
     * @description 开启 距离 展示
     * @default false
     */
    lengthEnable: boolean;
    /**
     * @description 距离/面积 单位
     * @default 'm'
     */
    lengthUnit: 'm' | 'mm' | 'ft';
};
export type DisplayInfoConfig = {
    /**
     * @description 提示信息
     */
    tip: string | HTMLElement;
    /**
     * @description 提示信息样式
     */
    cssStyle?: string;
};
export type LineStyle = LineColorStyle & LineOpacityStyle & LineWidthStyle;
