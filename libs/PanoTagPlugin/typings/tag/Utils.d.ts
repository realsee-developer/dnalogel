import type { GLTFObject } from '@realsee/five/gltf-loader';
import type { Group } from 'three';
import type { TagContentType } from './TagData';
import type { ImagePlane } from '../../utils/model/mediaPlane';
import type { TagInstance, TagConfig } from '../..';
import type { Mode } from '@realsee/five';
import type { LiteralUnion } from 'type-fest';
export type TagId = string | number;
export type ArrayPosition = number[];
export type Position = ArrayPosition;
export type PanoIndex = number;
export type WorkCode = string;
export type ModelId = string;
export interface MinMax {
    min?: number;
    max?: number;
}
export type StickType = '2DPoint' | '3DPoint' | 'Plane' | 'Model' | '3DBox' | 'Polygon' | 'Mask';
/**
 * 3DBox 位置定义
 */
export interface BoxPosition {
    /** 起始点坐标 [x, y, z] */
    start: ArrayPosition;
    /** 结束点坐标 [x, y, z] */
    end: ArrayPosition;
    /** 旋转角度 [x, y, z]（欧拉角） */
    rotation: ArrayPosition;
}
/** 3DBox 标签 */
export type BoxTag<C extends TagContentType = TagContentType> = TagInstance<C, '3DBox'>;
/**
 * Polygon 位置定义
 * 多边形由多个点组成，至少需要 3 个点
 */
export type PolygonPosition = ArrayPosition[];
/** Polygon 标签 */
export type PolygonTag<C extends TagContentType = TagContentType> = TagInstance<C, 'Polygon'>;
/**
 * Mask 位置定义
 * Mask 标签的 position 由 mask 图和 color 计算得出，类型为普通的 Position
 */
export type MaskPosition = Position;
/** Mask 标签 */
export type MaskTag<C extends TagContentType = TagContentType> = TagInstance<C, 'Mask'>;
/**
 * @description 标签 icon 动画配置
 */
export interface TagIconAnimationConfig {
    duration: number;
    elements: {
        selector?: string;
        properties: {
            translateX?: number[];
            translateY?: number[];
            rotate?: number[];
            scale?: number[];
            opacity?: number[];
        };
    }[];
    loop: boolean;
    loopInterval?: number;
    timing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}
export interface TagIconUrl {
    url?: string;
    /** 背景色 */
    bgcolor?: string;
    /** 背景透明度 */
    bgopacity?: number;
    /** 是否使用默认 tag point，默认为 true */
    enabled?: boolean;
    /** 指切图是几倍图，如 2倍图, 3倍图，默认值为 3 */
    ratio?: number;
    /** @deprecated 指帧动画的雪碧图由几张图片构成，推荐使用 animation 配置替代 */
    steps?: number;
    /** @deprecated 单位：帧/s, 默认每秒24帧，即 fps: 24，推荐使用 animation 配置替代 */
    fps?: number;
    /** 期望渲染在屏幕上的宽度，如果指定了scale，则最终渲染在屏幕上的宽度 = width * scale */
    width?: number;
    /** 缩放值。默认为1，如果指定了scale，则最终渲染在屏幕上的宽度 = width * scale */
    scale?: number;
    /** 帧动画配置 */
    animation?: TagIconAnimationConfig;
    /** 标签法线长度 */
    normalLen?: number;
}
export interface TagStyle {
    /** 小圆点样式 */
    point?: {
        /**
         * @deprecated v2.11.0 废弃，使用 width: number 控制
         * @description S: 18; M: 20; L: 24; XL: 28
         */
        size?: 'S' | 'M' | 'L' | 'XL' | number;
    } & TagIconUrl;
    /** 3D Box 和Polygon样式 */
    boxOrpolygon?: {
        /** 填充颜色（十六进制） */
        color?: number;
        /** 填充透明度 0-1 */
        opacity?: number;
        /** 线条颜色（十六进制） */
        lineColor?: number;
        /** 线条宽度 */
        lineWidth?: number;
    };
    /** Mask 标签样式 */
    mask?: {
        /** 高亮颜色（支持 RGB 数组、十六进制数字、#FFFFFF 格式字符串） */
        color?: [number, number, number] | number | string;
        /** 透明度 0-1，用于填充区域；描边区域始终完全不透明 */
        opacity?: number;
        /** 颜色匹配容差（归一化值 0-1，默认 0.001） */
        tolerance?: number;
        /** @deprecated 使用 color 代替 */
        highlightColor?: [number, number, number] | number;
    };
}
export type TagGLTFObject = GLTFObject & {
    customID: number | string;
    isTagModel: boolean;
    removeEventListener: () => void;
};
/** 返回一个销毁函数 */
export type ElementRenderer = (container: HTMLElement, tag: TagInstance<any, any>) => () => void;
export type TagRendererMap = Map<string, {
    renderer: ElementRenderer;
    usePoint: boolean;
}>;
export type TagContentTypeMapping = Map<string, string>;
export interface TagObjectGroup extends Group {
    children: Array<TagGLTFObjectGroup>;
}
export interface TagGLTFObjectGroup extends Group {
    children: TagGLTFObject[];
}
export interface ImagePlaneGroup extends Group {
    children: ImagePlane[];
}
export type AudioAppearance = TagInstance<'Audio'>['data']['appearance'];
type _ContentTypeConfigKey = `${StickType | 'Any'}-${TagContentType | 'Any'}` | TagContentType | `Any-Audio-${AudioAppearance}` | 'Any';
export type ContentTypeConfigKeySplit = [StickType | 'Any', TagContentType | 'Any'] | [TagContentType] | [StickType | 'Any', 'Audio', AudioAppearance] | ['Any'] | [];
type FiveModeType = `[${Mode | 'PanoramaLike' | 'ModelLike'}]`;
export type ContentTypeConfigKey = FiveModeType | `${FiveModeType}-${_ContentTypeConfigKey}` | _ContentTypeConfigKey;
/**
 * @description 从 ContentTypeConfigKey 中提取 ContentTypeConfigKey 对应的 TagContentType 是啥
 */
export type PickTagContentTypeInContentTypeConfigKey<T extends string> = T extends FiveModeType ? any : T extends `${FiveModeType}-${infer P extends _ContentTypeConfigKey}` ? PickTagContentTypeInContentTypeConfigKey<P> : T extends `${any}-${infer C}` ? C : T extends TagContentType ? T : any;
type TagConfigTypeByKeyCache = {
    [Key in LiteralUnion<ContentTypeConfigKey, string>]: PickTagContentTypeInContentTypeConfigKey<Key>;
};
export type TagConfigByKey<T extends string> = PickTagContentTypeInContentTypeConfigKey<T> extends TagContentType ? TagConfig<TagConfigTypeByKeyCache[T]> : TagConfig<any>;
/** 二维标签 */
export type Point2DTag<C extends TagContentType = TagContentType> = TagInstance<C, '2DPoint'>;
/** 三维标签 */
export type Point3DTag<C extends TagContentType = TagContentType> = TagInstance<C, '3DPoint'>;
/** 三维贴片 */
export type PlaneTag<C extends TagContentType = TagContentType> = TagInstance<C, 'Plane'>;
export interface TagState {
    visible: boolean;
    unfolded: boolean;
}
export {};
