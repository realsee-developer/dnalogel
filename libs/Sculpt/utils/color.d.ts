import type * as THREE from 'three';
export type Color = THREE.Color | string | number;
export declare const DEFAULT_COLOR = 16777215;
export declare const DEFAULT_LINE_COLOR = 16777215;
export declare const DEFAULT_LINE_WIDTH = 2;
export declare const DEFAULT_HIGHLIGHT_OPACITY = 0.6;
export type OpacityStyle = {
    /**
     * @description: 透明度
     */
    opacity?: number;
};
export type ColorStyle = {
    /**
     * @description: 颜色
     * @default 0x1193fa
     */
    color?: Color;
};
export type LineColorStyle = {
    /**
     * @description: 边框线颜色
     * @default 0x1193fa
     */
    lineColor?: Color;
};
export type LineWidthStyle = {
    /**
     * @description: 线宽
     * @default 2
     */
    lineWidth?: number;
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
export type LineStyle = LineColorStyle & LineWidthStyle;
