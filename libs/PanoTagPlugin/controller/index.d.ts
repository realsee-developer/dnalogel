import type { Tag, TagId, Tags, State, ContentTypeConfigKey } from '../typings';
import type { TagClickParams, TagConfigByKey, TagContentType } from '..';
import type { ArrayPosition } from '../typings';
import { type Five } from '@realsee/five';
import { TagRender } from './TagRender';
import type { PartialObjectDeep } from '../../typings/typings';
export declare const pluginFlag: (name: string) => string;
declare class PanoTagPluginController extends TagRender {
    /** state */
    state: {
        enabled: boolean;
        visible: boolean;
    };
    /** debug */
    private debug;
    private debugUtil;
    /** 全局 hover 启用状态，默认 true */
    globalHoverEnabled: boolean;
    constructor(five: Five, params?: {
        config?: Pick<Tags, 'contentTypeConfig' | 'globalConfig'>;
        debug?: boolean;
        containerZIndex?: number;
    });
    appendTo(wrapper: Element): void;
    /**
     * @description 加载数据
     */
    load(data: Tags): Promise<void>;
    /**
     * @description 添加标签
     */
    addTag(tag: Tag | Tag[]): Promise<void>;
    /**
     * @description 改变配置
     */
    changeConfig(config: Pick<Tags, 'globalConfig' | 'contentTypeConfig'>, merge?: boolean): void;
    /**
     * @description 改变全局配置
     */
    changeGlobalConfig(globalConfig: Tags['globalConfig'], merge?: boolean): void;
    /**
     * @description 改变类型配置
     */
    changeContentTypeConfig<T extends ContentTypeConfigKey>(key: T, contentTypeConfig: TagConfigByKey<T>, merge?: boolean): void;
    show(params?: {
        userAction?: boolean;
    }): Promise<void>;
    hide(params?: {
        userAction?: boolean;
    }): Promise<void>;
    enable(params?: {
        userAction?: boolean;
    }): void;
    disable(params?: {
        userAction?: boolean;
    }): void;
    setState(state: Partial<State>, params?: {
        userAction?: boolean;
    }): void;
    /**
     * @description 销毁
     */
    dispose(): void;
    /**
     * @description 闪烁标签
     * @param {TagId} id
     * @param {Partial<anime.AnimeParams>} animeConfig
     */
    blinkTagById(id: TagId, animeConfig?: Partial<anime.AnimeParams>): Promise<void>;
    /**
     * @description 展开/收起指定id的标签
     * @param {TagId} id
     * @param {boolean} unfolded
     */
    changeUnfoldedById(id: TagId, unfolded: boolean): void;
    /**
     * @description 启用/停用指定id的标签
     * @param {TagId} id
     * @param {boolean} enabled
     */
    changeEnabledById(id: TagId, enabled: boolean): void;
    /**
     * @description 修改3D标签normal
     * @param {TagId} id
     * @param {ArrayPosition} normal
     */
    changeTagNormalById(id: TagId, normal: ArrayPosition): void;
    /**
     * @description 改变data
     */
    changePositionById(id: TagId, position: Tag['position']): void;
    /**
     * @description 改变data
     */
    changeDataById<C extends TagContentType = TagContentType>(id: TagId, data: PartialObjectDeep<Tag<C>['data']>, deepMerge?: boolean): void;
    /**
     * @description 改变tag的stickType
     */
    changeStickTypeById<C extends TagContentType = TagContentType>(id: TagId, data: PartialObjectDeep<{
        [P in keyof Pick<Tag<C>, 'stickType' | 'position' | 'normal' | 'data'>]: Tag[P];
    }>, deepMerge?: boolean): void;
    /**
     * @description 改变tag任意属性
     */
    changeTagById<C extends TagContentType = TagContentType>(id: TagId, tag: PartialObjectDeep<Tag<C>>, deepMerge?: boolean): void;
    /**
     * @description 销毁tag
     */
    destroyTagById(id: TagId | TagId[]): void;
    /** 更改 tag 模型 */
    changeTagModel: (tag: any, data: PartialObjectDeep<Tag<'MediaModel'>['data']>) => Promise<void>;
    /**
     * @deprecated
     */
    updateRenderAllTags(): void;
    /**
     * @description 清除所有标签
     */
    clearTags(): void;
    /**
     * @description 设置 unfolded
     */
    private setUnfolded;
    private handleShow;
    private handleHide;
    private handleEnable;
    private handleDisable;
    private addResizeListener;
    private addResizeObserver;
    private handleFiveModeChange;
    private handleFiveWantsMoveToPano;
    clickhandler: (params: TagClickParams) => void;
    private handleFiveCameraUpdate;
    private handleFiveCameraFovUpdate;
    private handleFivePanoArrived;
    /** 楼层切换时，需要更新标签可见性 */
    private handleFiveModelShownFloorChange;
    private onFiveRefined;
    private onFiveEveryReady;
    private setUnfoldedByCamera;
    private changeTagMode;
    /**
     * @description 添加 cameraUpdate, panoArrived 等事件监听
     */
    private addEventListener;
    render: () => void;
    /**
     * @description 设置标签 hover 启用状态
     */
    setTagHoverEnabled(id: TagId, enabled: boolean): void;
    /**
     * @description 获取标签 hover 启用状态
     */
    getTagHoverEnabled(id: TagId): boolean | undefined;
    /**
     * 设置全局 hover 启用状态
     */
    setGlobalHoverEnabled(enabled: boolean): void;
    /**
     * 获取全局 hover 启用状态
     */
    getGlobalHoverEnabled(): boolean;
}
export default PanoTagPluginController;
export { PanoTagPluginController };
