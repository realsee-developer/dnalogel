import type { StickType, TagContentType, TagInstance, Point2DTag, Point3DTag } from '../typings';
/**  @deprecated 改用具体的string */
export declare enum PointType {
    PointTag = "PointTag",
    PlaneTag = "PlaneTag"
}
/** @deprecated Use {@link TagContentType} instead */
export declare enum ContentType {
    /** 音频标签 */
    Audio = "Audio",
    /** 文本标签 */
    Text = "Text",
    /** 图文标签 */
    ImageText = "ImageText",
    /** 图片标签, 可用 ImageText 代替 */
    Image = "Image",
    /** 视频标签，可用 ImageText 代替 */
    Video = "Video",
    /** VR跳转标签 */
    Link = "Link",
    /** 贴纸标签 */
    Sticker = "Sticker",
    /** VR跳转标签 */
    VRLink = "VRLink",
    /** 全景跳转标签 */
    PanoLink = "PanoLink",
    /** 营销标签 */
    Marketing = "Marketing",
    /** 图片视频贴片 */
    MediaPlane = "MediaPlane",
    /** 带有多媒体的模型 */
    MediaModel = "MediaModel",
    /** 模型 */
    Model = "Model",
    /** 全景 */
    Panorama = "Panorama",
    /** 其他/自定义标签 */
    Custom = "Custom",
    /** Unknown */
    Unknown = "Unknown"
}
/**  @deprecated 改用具体的string */
export declare enum DimensionType {
    Two = "2D",
    Three = "3D"
}
/**  @deprecated */
export type TagDimensionType = '2D' | '3D';
/**  @deprecated 改用 stickType */
export type TagPointType = keyof typeof PointType;
/**  @deprecated */
export type DeprecatedTagProperty = {
    /**  @deprecated 2维/3维类型，已废弃，使用 stickType 代替 */
    dimensionType?: '2D' | '3D';
    /** @deprecated 一个点的标签/4个点的标签，已废弃，使用 stickType 代替 */
    pointType?: 'PlaneTag' | 'PointTag';
};
/**  @deprecated */
export type DeprecatedMediaPlaneProperty = {
    /**
     * @description stretch: 拉伸适配, proportional: 等比适配，默认值 'proportional'
     * @deprecated Use {@link ObjectFit} instead
     */
    adaptationMode?: 'stretch' | 'proportional';
};
/**  @deprecated Use {@link TagInstance} instead */
export type TagElement<C extends TagContentType = TagContentType, S extends StickType = StickType> = TagInstance<C, S>;
/** @deprecated 'Tag2D' replaced by pointType: 'Point2DTag' */
export type Tag2D<C extends TagContentType = TagContentType> = Point2DTag<C>;
/** @deprecated 'Tag3D' replaced by pointType: 'Point3DTag' */
export type Tag3D<C extends TagContentType = TagContentType> = Point3DTag<C>;
