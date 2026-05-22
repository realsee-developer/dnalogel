import type PanoTagPluginController from '..';
import type { TagContentType, Tag as TagData, TagInstance, ArrayPosition, TagClickParams } from '../..';
import { BaseTag } from './BaseTag';
import * as THREE from 'three';
import type { PartialObjectDeep } from '../../../typings/typings';
import type { Tag } from '../..';
import { Polygon } from '../../../Sculpt/Objects/Polygon';
export type PolygonTagInterface<C extends TagContentType = TagContentType> = TagInstance<C, 'Polygon'>;
/**
 * Polygon 类型的标签
 * 使用 Sculpt Polygon 进行渲染
 */
export declare class PolygonTag<C extends TagContentType = TagContentType> extends BaseTag<C, 'Polygon'> {
    polygonShape?: Polygon;
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
     * 获取 Polygon 样式配置（合并用户配置和默认值）
     */
    private getPolygonStyle;
    /**
     * 更新 Polygon 样式
     */
    private updatePolygonStyle;
    /**
     * 更新标签数据
     */
    set(tag: PartialObjectDeep<Tag<C, 'Polygon'>>, deepMerge?: boolean): void;
    /**
     * 获取多边形的所有角点（世界坐标）
     */
    getCorners(): THREE.Vector3[];
    getCenter(): ArrayPosition;
    /**
     * 计算多边形的法向量
     * 使用前三个点来计算平面的法向量
     */
    computeNormal(): THREE.Vector3 | undefined;
    /**
     * 初始化 Sculpt Polygon
     */
    private initializeSculptPolygon;
    /**
     * 设置点击事件
     */
    private setupClickEvents;
    /**
     * 清理点击事件
     */
    private cleanupClickEvents;
    /**
     * 更新 Sculpt Polygon 的数据
     */
    private updateSculptPolygon;
    /**
     * 启用编辑器
     * 用于编辑已存在的 Polygon
     */
    editorEnable(): Promise<void>;
    /**
     * 禁用编辑器
     */
    editorDisable(): void;
    /**
     * 同步 Sculpt Polygon 的数据到 PolygonPosition
     */
    private syncPolygonPositionFromSculpt;
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
     * 获取多边形的中心点
     */
    private getPolygonCenter;
    /**
     * 更新屏幕位置（用于在 2D UI 中显示内容）
     * 显示在 Polygon 最右侧的顶点位置
     */
    updateScreenPosition(): void;
    /**
     * 应用可见性变化
     */
    applyVisible(): void;
    /**
     * 销毁标签
     */
    dispose(): void;
}
