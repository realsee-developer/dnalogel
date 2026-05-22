import type PanoTagPluginController from '..';
import type { TagContentType, Tag as TagData, TagInstance, TagClickParams } from '../..';
import { BaseTag } from './BaseTag';
import * as THREE from 'three';
import type { PartialObjectDeep } from '../../../typings/typings';
import type { Tag } from '../..';
import type { State as FiveState } from '@realsee/five';
import type { AnimeParams } from 'animejs';
export type MaskTagInterface<C extends TagContentType = TagContentType> = TagInstance<C, 'Mask'>;
/**
 * Mask 类型的标签
 * 基于全景图 mask 和颜色区域进行物体标记
 */
export declare class MaskTag<C extends TagContentType = TagContentType> extends BaseTag<C, 'Mask'> {
    /**
     * Mask 纹理缓存（静态，所有 MaskTag 实例共享）
     * key: mask URL 或 canvas 的 symbol, value: { texture: THREE.Texture, refCount: number, abortController?: AbortController }
     */
    private static maskTextureCache;
    /**
     * Canvas 到 Symbol 的映射（用于缓存 canvas 纹理）
     */
    private static canvasSymbolMap;
    /** 同点位共用 mesh：key = meshKey(panoIndex + maskKey), value = 共享数据 */
    private static sharedMeshRegistry;
    /**
     * mask 图片 URL 或 Canvas 元素（2:1 全景图格式）
     */
    maskUrl: string | HTMLCanvasElement;
    /**
     * 目标颜色（RGB 格式）
     */
    targetColor: [number, number, number];
    /**
     * mask 渲染的 mesh 对象（使用 Sphere）
     */
    maskMesh?: THREE.Mesh;
    /**
     * mask 纹理对象
     */
    private maskTexture?;
    /**
     * 是否正在加载 mask
     */
    private loadingMask;
    /**
     * 资源是否已释放
     */
    private _disposed;
    /**
     * 标签样式配置
     */
    private tagStyle?;
    /**
     * 点击事件清理函数
     */
    private clickEventDispose?;
    /** 当前 tag 在共享 style 纹理中的下标（color 即 id） */
    private sharedStyleIndex;
    /** 共享 mesh 的 registry key，用于 updateMaskStyle / dispose 查找 entry */
    private _sharedMeshKey;
    constructor(plugin: PanoTagPluginController, tagData: TagData);
    private getColorKey;
    /** 同点位共用一个 mesh，key 仅用 panoIndex（string/canvas 切换时不会因 key 不同而重复创建） */
    private static getMeshKey;
    /**
     * 初始化/挂载到同点位共享 mesh，用 appendStyleToMaterial 注册本 tag 的 style（color 即 id）
     */
    private initializeMaskMesh;
    /** 构建用于 mergedTexture 的 style 对象（color 作 id），tolerance 0–255 */
    private buildStyleForMaterial;
    private static createSharedMesh;
    /** 仅更新材质中某一 slot 的 style（用于 enable/disable/updateMaskStyle） */
    private updateStyleSlotInMaterial;
    private setupSharedMeshRaycast;
    /**
     * 计算法向量
     * Mask 标签返回向上的法向量（因为是贴在 cube 面上）
     */
    computeNormal(): THREE.Vector3;
    /**
     * 不把共享 mesh 作为 blink 目标，闪烁通过本 tag 的 style opacity 动画实现
     */
    protected getAdditionalBlinkTargets(): any | any[] | null;
    /**
     * 闪烁仅针对本 tag：通过改变本 tag 在 merged texture 中的 opacity 实现
     */
    blink(animeConfig?: Partial<AnimeParams>): Promise<void>;
    /**
     * 更新标签数据
     */
    set(tag: PartialObjectDeep<Tag<C, 'Mask'>>, deepMerge?: boolean): void;
    /** 供 rebuildEntryMaterial 使用：返回当前 tag 的 style 对象 */
    getStyleForMaterial(): {
        color: number[];
        tolerance: number;
        highlightColor: number[];
        opacity: number;
    };
    /**
     * 重写 getVisible 方法
     * Mask 标签仅在当前点位可见
     */
    getVisible(fiveState?: Partial<FiveState>): boolean;
    /**
     * 重写 computeVisible 方法
     * 增加 Mask 特有的可见性检查逻辑，用于 whyHide 功能
     */
    protected computeVisible(_fiveState?: Partial<FiveState>): {
        value: boolean;
        reason?: any;
    };
    /**
     * 点击事件处理
     */
    onClick(params: Pick<TagClickParams, 'target'>): void;
    /**
     * 展开自己，收起其他标签
     */
    unfoldAndFoldOthers(): void;
    /**
     * 展开标签详情
     */
    unfold(): void;
    /**
     * 折叠标签详情
     */
    fold(): void;
    /**
     * 设置展开/折叠状态
     */
    setUnfold(unfolded: boolean): void;
    /**
     * 更新屏幕位置
     */
    updateScreenPosition(): void;
    /**
     * 应用可见性变化（通过 style opacity 控制展示，共享 mesh 保持 visible）
     */
    applyVisible(): void;
    /**
     * 更新 mesh 的位置和旋转（跟随观察者）
     * 参考 itemMask 实现
     */
    private updateMeshTransform;
    /**
     * 步骤1：从材质中解析出 styleList
     * @param {THREE.ShaderMaterial} material - 目标材质
     * @returns {Array} 解析后的 styleList
     */
    private parseStyleListFromMaterial;
    /**
     * 步骤2：更新材质的样式纹理（追加新元素后）
     * @param {THREE.ShaderMaterial} material - 目标材质
     * @param {Array} newStyle - 要追加的新样式对象
     */
    private appendStyleToMaterial;
    /**
     * 获取 Mask 样式配置（合并用户配置和默认值）
     */
    private getMaskStyle;
    /**
     * 设置点击事件（仅当 raycast 命中本 tag 的 color 时触发）
     */
    private setupClickEvents;
    /**
     * 清理点击事件
     */
    private cleanupClickEvents;
    /**
     * 重新加载 mask 图：从旧点位 mesh 注销，再按新 maskUrl 初始化
     */
    private reloadMask;
    /**
     * changeTagById 改 mask 时：只更新共享 mesh 的 texture，不 unregister
     * 有 entry 则换图；无 entry 则走完整初始化
     */
    private updateSharedMeshTexture;
    /**
     * 更新当前 tag 在共享材质中的 style slot（color/style 控制展示）
     */
    updateMaskStyle(): void;
    /**
     * 更新 Canvas 纹理（仅当 maskUrl 为 Canvas 时有效）
     * 当 canvas 内容发生变化时，调用此方法更新渲染
     */
    updateCanvasTexture(): void;
    /**
     * 清理当前标签：从共享材质中删除本 tag 的样式槽，并更新材质；
     * 若该点位已无其他 tag 则销毁 mesh 并释放纹理。
     */
    private disposeMaskResources;
    /**
     * 清理 MaskTag 特有的资源（公开方法）
     */
    dispose(): void;
    /**
     * 禁用标签（通过 style opacity=0 隐藏，不拆 mesh）
     */
    disable(): void;
    /**
     * 启用标签（恢复 style 展示）
     */
    enable(): void;
    /**
     * 销毁标签（重写父类方法）
     */
    destroy(): void;
    /**
     * 清除所有点位共享 mesh（重新 load 数据前调用）
     */
    static clearSharedMeshRegistry(): void;
    /**
     * 将 style 列表写入材质（用于重建材质）
     */
    private static writeStyleListToMaterial;
    /**
     * destroy 后重建该点位材质，更新剩余 tag 的 styleIndex
     */
    private static rebuildEntryMaterial;
    /**
     * 获取 mask 的缓存 key
     * @param maskSource mask URL 或 Canvas
     * @returns 缓存 key
     */
    private static getMaskCacheKey;
    /**
     * 加载 Mask 纹理（静态方法，支持缓存和引用计数）
     * @param maskSource mask 图片 URL 或 Canvas 元素
     * @returns Promise<THREE.Texture>
     */
    private static loadMaskTexture;
    /**
     * 释放 Mask 纹理（静态方法）
     * @param maskSource mask 图片 URL 或 Canvas 元素
     */
    private static releaseMaskTexture;
    /**
     * 获取当前缓存的纹理统计信息（用于性能监控和调试）
     * @returns 缓存统计信息
     */
    static getCacheStats(): {
        totalCached: number;
        totalRefCount: number;
        estimatedMemoryMB: number;
        cacheEntries: Array<{
            source: string;
            refCount: number;
            sizeMB: number;
        }>;
    };
    /**
     * 强制清理所有缓存的纹理（用于内存管理，谨慎使用）
     * 注意：这会释放所有纹理，即使它们仍在使用中
     */
    static clearAllCache(): void;
}
