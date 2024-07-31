import { TagComputer } from './TagComputer';
import type { Tag, TagInstance, TagGLTFObject, TagObjectGroup, TagGLTFObjectGroup, ImagePlaneGroup, TagContentType, ElementRenderer, TagRendererMap, TagContentTypeMapping } from '../typings';
import type { TemporaryState } from '../typings';
import type { Object3D } from 'three';
import TagContainerSvelte from '../Components/TagContainer.svelte';
import type { Five } from '@realsee/five';
export declare abstract class TagRender extends TagComputer {
    rendererMap: TagRendererMap;
    contentTypeMap: TagContentTypeMapping;
    protected group: TagObjectGroup;
    protected imagePlaneGroup: ImagePlaneGroup;
    protected gltfObjectGroup: TagGLTFObjectGroup;
    /** 维护一个可用模型表，用于快速删除不应该在场景中的模型 */
    protected enabledModelTagSet: Set<string | number>;
    /** 临时状态 */
    protected temporaryState: TemporaryState;
    /** 点标签 */
    protected TagContainerSvelte?: TagContainerSvelte;
    constructor(five: Five);
    /**
     * @description 设置 contentType 的渲染器
     * @param {string} contentType
     * 如果是 `TagContentType` 中的类型，将会覆盖掉插件内部默认的渲染器,
     * 如果是其他任意 str
     * ing 如：'Foo'，则可以将类似 `{id: 1, contentType: 'Foo', position: [0,0,0]}` 的 tag 交给插件渲染
     * @param config.usePoint 是否需要标签点, 默认为 false
     * @note 优先级低于 tag.element
     */
    registerRenderer(contentType: string, renderer: ElementRenderer, config?: {
        usePoint?: boolean;
    }): void;
    bindRenderer(contentType: string, builtInRenderer: TagContentType): void;
    clearTags(): void;
    /**
     * @description 更新所有标签
     */
    protected updateRenderAllTags(): void;
    protected updateAllTagsNextFrame(): void;
    protected updateTag(tag: TagInstance): void;
    protected updateRenderVideoPlane(tag?: TagInstance | TagInstance[]): void;
    /**
     * @description 渲染图片贴片
     */
    protected updateRenderImagePlane(tag?: TagInstance | TagInstance[]): void;
    /**
     * @description 渲染3D贴片
     */
    protected updateRender3DDomTag: (tag?: TagInstance | TagInstance[]) => void;
    /** 更新所有模型标签
     *
     * 1. 移除不应该在场景中的模型
     * 2. 更新模型的可见性
     *
     * FIXME: 有性能问题，但是之前的逻辑都是这么写，暂时先这样吧
     */
    protected updateRenderModelTag(): void;
    protected updateTagModelVisible(): void;
    /** 更新标签中多媒体面片的位置
     * @param tag 标签
     * @param model 模型
     */
    protected updateTagCss3DObjectMatrix<S extends 'Model' | 'Plane' = 'Model'>(tag: TagInstance<TagContentType, S>, model: Object3D): void;
    /** 添加模型标签 */
    protected addMediaModelTag(tags: Tag[]): Promise<void>;
    /**
     * @description 一个点的标签
     */
    protected setPointTagPosition(tag?: TagInstance | TagInstance[]): void;
    /**
     * @description 渲染单个点的标签
     */
    protected updateRenderPointTag: (tag?: TagInstance | TagInstance[]) => void;
    protected updateTagContainerVisible(): void;
    protected disposeAllCSS3DContainer(): void;
    /**
     * @description 检查并销毁不用的3D贴片
     */
    protected clearUnusedPanelTag(): void;
    /** 加载外部模型 */
    protected loadModel: (tag: TagInstance<'Model', 'Model'> | TagInstance<'MediaModel', 'Model'>) => Promise<TagGLTFObject>;
    protected updateDomView: (params?: {
        withAnimation?: boolean;
    }) => void;
}
