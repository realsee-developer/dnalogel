import type { TagObjectGroup, TagGLTFObjectGroup, ImagePlaneGroup, TagContentType, ElementRenderer, TagRendererMap, TagContentTypeMapping, TagInstance } from '../typings';
import type { TemporaryState } from '../typings';
import type { Object3D } from 'three';
import TagContainerSvelte from '../Components/TagContainer.svelte';
import type { Five } from '@realsee/five';
import { TagUtil } from './TagUtil';
export declare abstract class TagRender extends TagUtil {
    rendererMap: TagRendererMap;
    contentTypeMap: TagContentTypeMapping;
    protected group: TagObjectGroup;
    imagePlaneGroup: ImagePlaneGroup;
    gltfObjectGroup: TagGLTFObjectGroup;
    /** 维护一个可用模型表，用于快速删除不应该在场景中的模型 */
    protected enabledModelTagSet: Set<string | number>;
    /** 临时状态 */
    protected temporaryState: TemporaryState;
    /** 点标签 */
    TagContainerSvelte?: TagContainerSvelte;
    constructor(five: Five);
    /**
     * @description 设置 contentType 的渲染器
     * @param {string} contentType
     * 如果是 `TagContentType` 中的类型，将会覆盖掉插件内部默认的渲染器,
     * 如果是其他任意 string 如：'Foo'，则可以将类似 `{id: 1, contentType: 'Foo', position: [0,0,0]}` 的 tag 交给插件渲染
     * @param config.usePoint 是否需要标签点, 默认为 false
     * @note 优先级低于 tag.element
     */
    registerRenderer(contentType: string, renderer: ElementRenderer, config?: {
        usePoint?: boolean;
    }): void;
    bindRenderer(contentType: string, builtInRenderer: TagContentType): void;
    clearTags(): void;
    /**
     * @description 渲染3D贴片
     */
    updateRender3DDomTag(tag?: TagInstance | TagInstance[]): void;
    /** 更新标签中多媒体面片的位置
     * @param tag 标签
     * @param model 模型
     */
    updateTagCss3DObjectMatrix<S extends 'Model' | 'Plane' = 'Model'>(tag: TagInstance<TagContentType, S>, model: Object3D): void;
    /** 添加模型标签 */
    protected addMediaModelTag(tags: TagInstance[]): Promise<void>;
    protected disposeAllCSS3DContainer(): void;
    /**
     * @description 检查并销毁不用的3D贴片
     */
    protected clearUnusedPanelTag(): void;
}
