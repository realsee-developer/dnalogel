import type { State as FiveState } from '@realsee/five';
import type { TagConfig } from './TagConfig';
import type { ContentTypeMap, TagContentType } from './TagData';
import type { Position, TagId, StickType, TagStyle, ElementRenderer, TagConfigByKey, ContentTypeConfigKey } from './Utils';
import type { DeprecatedTagProperty } from '../../Archive/deprecated';
import type { LiteralUnion } from 'type-fest';
export interface Tags {
    version?: string;
    /** tag配置 > 按type配置 > 全局配置 */
    /** 全局配置 */
    globalConfig?: TagConfig;
    /** 按type配置 */
    contentTypeConfig?: {
        [key in LiteralUnion<ContentTypeConfigKey, string>]?: TagConfigByKey<key>;
    };
    /** 标签列表配置 */
    tagList: Tag[];
}
export type Tag<C extends TagContentType = TagContentType, S extends StickType = StickType> = DeprecatedTagProperty & {
    /** 开启/禁用 */
    enabled?: boolean;
    /** 唯一标识 */
    id?: TagId;
    /**
     * @description 附着方式
     * @type {StickType}
     * @default '2DPoint'
     */
    stickType?: S;
    /**
     * @description 内容类型，根据内容类型展示对应UI
     * @type {TagContentType}
     */
    contentType: LiteralUnion<C, string>;
    /** 点 */
    position: S extends 'Plane' ? [Position, Position, Position, Position] : S extends '2DPoint' | '3DPoint' | 'Model' ? Position : Position | [Position, Position, Position, Position];
    /** 法向量 */
    normal?: Position;
    /** 自定义标签内容 */
    element?: string | Element | ElementRenderer;
    /** 标签 wrapper 的 classname */
    className?: string;
    /** 标签数据 */
    data: ContentTypeMap[C];
    /** 「展开/收起」 「可见/不可见」 的策略配置 */
    config?: TagConfig<C>;
    /** 打标签时的 five state */
    fiveState?: Partial<FiveState>;
    /** 样式 */
    style?: TagStyle;
    /** 是否启用 hover 行为，默认为config.popoverConfig.enabled */
    hoverEnabled?: boolean;
} & (S extends '3DPoint' ? {
    normal: Position;
} : unknown) & (S extends 'Model' ? {
    matrix: number[];
} : unknown) & {
    [key: string]: any;
};
