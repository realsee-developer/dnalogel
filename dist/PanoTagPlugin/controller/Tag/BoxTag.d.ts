import type PanoTagPluginController from '..';
import type { TagContentType, Tag as TagData, TagInstance, ArrayPosition, TagClickParams } from '../..';
import { BaseTag } from './BaseTag';
import * as THREE from 'three';
import type { PartialObjectDeep } from '../../../typings/typings';
import type { Tag } from '../..';
import { Box } from '../../../Sculpt/Objects/Box';
export type BoxTagInterface<C extends TagContentType = TagContentType> = TagInstance<C, '3DBox'>;
/**
 * 3DBox 类型的标签
 * 使用 Sculpt Box 进行渲染，避免复杂的坐标转换
 */
export declare class BoxTag<C extends TagContentType = TagContentType> extends BaseTag<C, '3DBox'> {
    boxShape?: Box;
    private tagStyle?;
    private clickEventDispose?;
    private domClickDispose?;
    screenPosition: {
        leftPx: number;
        topPx: number;
        scale: number;
    } | null;
    constructor(plugin: PanoTagPluginController, tagData: TagData);
    /**
     * 获取 Box 样式配置（合并用户配置和默认值）
     */
    private getBoxStyle;
    /**
     * 更新 Box 样式
     */
    private updateBoxStyle;
    /**
     * 更新标签数据
     */
    set(tag: PartialObjectDeep<Tag<C, '3DBox'>>, deepMerge?: boolean): void;
    /**
     * 设置标签数据
     */
    setData(...data: Parameters<InstanceType<typeof BaseTag<C, '3DBox'>>['setData']>): void;
    /**
     * 获取盒子的中心点
     */
    getCenter(): ArrayPosition;
    /**
     * 获取盒子的8个角点坐标
     */
    getCorners(): THREE.Vector3[];
    /**
     * 计算盒子的法向量
     */
    computeNormal(): THREE.Vector3;
    /**
     * 初始化 Sculpt Box
     */
    private initializeSculptBox;
    /**
     * 设置点击事件
     */
    private setupClickEvents;
    /**
     * 清理点击事件
     */
    private cleanupClickEvents;
    /**
     * 更新 Sculpt Box 的数据
     */
    private updateSculptBox;
    /**
     * 启用编辑器
     * 用于编辑已存在的 Box
     */
    editorEnable(): Promise<void>;
    /**
     * 禁用编辑器
     */
    editorDisable(): void;
    /**
     * 从 Sculpt Box 同步 position 到 BoxTag
     */
    private syncBoxPositionFromSculpt;
    /**
     * 将 BoxPosition 转换为 Sculpt 需要的数据格式
     */
    private boxPositionToSculptData;
    /**
     * @description 点击事件处理
     */
    onClick(params: Pick<TagClickParams, 'target'>): void;
    /**
     * @description 展开自己，收起其他标签
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
     * 更新屏幕位置（用于在 2D UI 中显示内容）
     * 显示在 Box 最右侧的顶点位置
     */
    updateScreenPosition(): void;
    get centerPosition(): THREE.Vector3;
    /**
     * 应用可见性变化
     */
    applyVisible(): void;
    /**
     * 销毁标签
     */
    dispose(): void;
}
