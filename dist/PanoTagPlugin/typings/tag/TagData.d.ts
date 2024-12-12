import type { DeprecatedMediaPlaneProperty, ContentType } from '../../Archive/deprecated';
import type { Position, TagIconUrl } from './Utils';
export type MediaData = {
    type: 'Image';
    url: string;
    /**
     * @description 缩略图
     */
    thumbnail?: string;
} | {
    type: 'Video';
    url: string;
    videoCoverUrl?: string;
};
export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
type Object = Record<string | number | symbol, any>;
export type TagContentType = keyof typeof ContentType;
/**
 * @description 标签数据
 */
export interface ContentTypeMapInterface {
    /** 文字标签 */
    Text: {
        appearance?: 'line' | 'plane';
        /** @deprecated: please use 'title' */
        text?: string;
        title?: string;
        description?: string;
        /**
         * @description description 最大行数, null不限制
         * @default: null
         */
        descriptionMaxRows?: number | null;
        /**
         * @description title 最大行数, null不限制
         * @default: null
         */
        titleMaxRows?: number | null;
        edit?: {
            title?: {
                inputting?: boolean;
                placeholder?: string;
            };
            description?: {
                inputting?: boolean;
                placeholder?: string;
            };
        };
    };
    /** 音频标签 */
    Audio: {
        /** @deprecated: 'text' replace by title */
        text?: string;
        title?: string;
        /** @description 'line' 是旧的那种有一条线的，默认为'line', 'plane' 是新的那种圆形的 */
        appearance?: 'line' | 'plane';
        theme?: 'dark' | 'light';
        audioUrl: string;
    };
    /** 图文标签 */
    ImageText: {
        /** @deprecated: 'text' replace by 'title' */
        text?: string;
        title?: string;
        mediaData: (MediaData & {
            name?: string;
        })[];
    };
    /** 图片标签 */
    Image: ContentTypeMapInterface['ImageText'];
    /** 视频标签 */
    Video: ContentTypeMapInterface['ImageText'];
    /** 全景标签 */
    Panorama: ContentTypeMapInterface['ImageText'];
    /** 跳转外链标签 */
    Link: {
        /** @deprecated: 'text' replace by 'title' */
        text?: string;
        title?: string;
        /** @deprecated: linkType 不再和样式绑定，使用 iconUrl 代替 */
        linkType?: 'vr' | 'normal';
        icon?: TagIconUrl;
    };
    /** VR跳转标签 */
    VRLink: ContentTypeMapInterface['Link'];
    /** 贴纸标签 */
    Sticker: ContentTypeMapInterface['Link'];
    /** 全景跳转标签 */
    PanoLink: ContentTypeMapInterface['Link'];
    /** 营销标签 */
    Marketing: {
        /** 标题 */
        title: string;
        /** 高亮的标签 */
        brandTags?: string[];
        /** 普通标签 */
        tags?: string[];
        /** 头部宣传图 */
        headerPictureUrl?: string;
        /** 跳转文字 */
        highlightText?: string;
        /** 主题 */
        theme?: 'dark' | 'light';
        /** 限制营销标签大小 */
        limitWidth?: boolean | number;
        /** 价格 */
        price?: {
            value: string | number;
            /** 单位 */
            unit: string;
        };
    };
    /** 营销贴片 */
    MediaPlane: {
        enableCarousel?: boolean;
        /** 多媒体在容器中的适配规则 {@link https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit} */
        objectFit?: ObjectFit;
        autoplayConfig?: {
            /**
             * @description 是否自动播放视频
             * @default autoplayVideo: false
             */
            autoplayVideo?: boolean;
            /**
             * @description 是否自动轮播
             * @default autoplayCarousel: true
             */
            autoplayCarousel?: boolean;
            /**
             * @description 轮播中遇到视频是否要自动播放
             * @default autoplayVideoInCarousel: false
             */
            autoplayVideoInCarousel?: boolean;
        };
        mediaData: MediaData[];
        /** @description 暂停时的播放按钮url */
        playIcon?: 'withText' | 'withoutText' | string;
    } & DeprecatedMediaPlaneProperty;
    MediaModel: {
        modelUrl: string;
        mediaData: MediaData[];
        mediaPosition: [Position, Position, Position, Position];
        /** 多媒体在容器中的适配规则 {@link https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit} */
        objectFit?: ObjectFit;
    };
    Model: {
        modelUrl: string;
    };
    Custom: Object;
    Unknown: Object;
}
type ContentTypeMapInterfaceWithExtraData = {
    [key in keyof ContentTypeMapInterface]: ContentTypeMapInterface[key] & {
        extraData?: Object;
    } & {
        [key: string]: any;
    };
};
export type ContentTypeMap = Pick<ContentTypeMapInterfaceWithExtraData, TagContentType>;
export {};
