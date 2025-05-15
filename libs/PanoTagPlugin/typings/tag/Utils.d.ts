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
export type StickType = '2DPoint' | '3DPoint' | 'Plane' | 'Model';
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
    /** 指帧动画的雪碧图由几张图片构成 */
    steps?: number;
    /** 单位：帧/s, 默认每秒24帧，即 fps: 24 */
    fps?: number;
    /** 期望渲染在屏幕上的宽度，如果指定了scale，则最终渲染在屏幕上的宽度 = width * scale */
    width?: number;
    /** 缩放值。默认为1，如果指定了scale，则最终渲染在屏幕上的宽度 = width * scale */
    scale?: number;
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
