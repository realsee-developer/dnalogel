import { type Five, type Mode as FiveMode } from '@realsee/five';
import * as THREE from 'three';
import * as BasePlugin from '../base/BasePluginWithData';
import type { MarkerItem, State, ServerData, ItemType, ElementRenderer, EventMap } from './typings';
/**
 * 盒子动画配置选项
 */
export interface BoxAnimationConfig {
    /** 动画颜色，默认为 #4DF0FF */
    color?: string;
    /** 是否在动画期间隐藏标签并在完成后缓动显示，默认为 false */
    hideLabels?: boolean;
}
export declare class Controller extends BasePlugin.Controller<State, EventMap, ServerData, ServerData> {
    state: State;
    items: MarkerItem[];
    group: THREE.Group;
    protected data: ServerData;
    private tagRendererMap;
    private fiveDomEvents;
    private zFightingOffset;
    private tagWrapper;
    private occlusionVisibility;
    private occlusionMode;
    private fiveEveryReadyListenerDisposer?;
    private originalOpacities;
    private originalTagOpacities;
    private highlightedItem;
    private originalTagStyles;
    private originalModelColors;
    constructor(five: Five, config?: {
        tagContainerZIndex?: number;
        /**
         * @description 是否显示遮挡的部分
         * @params 所有模式下都显示被遮挡的部分, false: 所有模式下不显示被遮挡的部分, ['Mapview', ...]: 指定模式下显示被遮挡的部分
         * @default false
         */
        occlusionVisibility?: boolean | FiveMode[];
        /**
         * @description 当 occlusionVisibility 为true时，以哪种方式显示被遮挡的部分
         * @params 'depthTest': 关闭深度测试, 'translucence': 半透明
         * @default 'translucence'
         */
        occlusionMode?: 'translucence' | 'depthTest';
    });
    load(serverData: ServerData): Promise<void>;
    setState(targetState: Partial<State>): void;
    getItemById(id: string | number): MarkerItem;
    registerTagRenderer(map: Partial<Record<ItemType, ElementRenderer>>): void;
    hasCustomTagRenderer(map: ItemType): boolean;
    /**
     * Force finish all active box animations immediately
     * @param id Optional box item ID. If not provided, finishes all active box animations.
     * @param restoreLabels Whether to restore labels immediately. Defaults to true.
     */
    forceFinishBoxAnimation(id?: string | number, restoreLabels?: boolean): void;
    /**
     * Play the up-and-down animation for a box mesh
     * @param id Optional box item ID. If not provided, plays animation for all box items.
     * @param config Animation configuration options
     * @returns Promise that resolves when all animations are complete
     */
    playBoxAnimation(id?: string | number, config?: BoxAnimationConfig): Promise<void>;
    enable(): void;
    disable(): void;
    show(): void;
    hide(): void;
    clear(): void;
    /**
     * 设置所有模型的透明度
     * @param opacityPercent 透明度系数，范围0-1，1表示保持原始透明度，0表示完全透明
     * @param options 可选参数
     * @param options.type 模型类型，可选值为'box'、'prism'、'triangles'
     * @param options.id 模型id
     */
    setModelsOpacity(opacityPercent: number, options?: {
        type?: ItemType | ItemType[];
        id?: number;
    }): void;
    /**
     * 隐藏指定类型的模型
     * @param itemTypes 模型类型数组
     */
    hideItemsByType(itemTypes: ItemType[] | ItemType): void;
    /**
     * 显示指定类型的模型
     * @param itemTypes 模型类型数组
     */
    showItemsByType(itemTypes: ItemType[] | ItemType): void;
    /**
     * 根据条件隐藏模型项目
     * @param condition 判断函数，返回 true 的项目将被隐藏
     * @example
     * // 隐藏所有 ID 大于 10 的项目
     * controller.hideItemsByCondition(item => item.rawData.id > 10)
     *
     * // 隐藏所有红色的盒子
     * controller.hideItemsByCondition(item =>
     *   item.type === 'box' && item.rawData.object_data.color === '#FF0000'
     * )
     */
    hideItemsByCondition(condition: (item: MarkerItem) => boolean): void;
    /**
     * 根据条件显示模型项目
     * @param condition 判断函数，返回 true 的项目将被显示
     * @example
     * // 显示所有棱柱类型的项目
     * controller.showItemsByCondition(item => item.type === 'prism')
     *
     * // 显示所有透明度大于 0.5 的项目
     * controller.showItemsByCondition(item =>
     *   (item.rawData.object_data.opacity ?? 0.4) > 0.5
     * )
     */
    showItemsByCondition(condition: (item: MarkerItem) => boolean): void;
    /**
     * 根据条件设置模型项目的可见性
     * @param condition 判断函数，返回 true 的项目将应用指定的可见性状态
     * @param visible 是否可见，true 为显示，false 为隐藏
     * @example
     * // 隐藏所有小于指定面积的项目
     * controller.setItemsVisibility(item => getItemArea(item) < 100, false)
     *
     * // 显示所有包含特定标签的项目
     * controller.setItemsVisibility(item =>
     *   item.rawData.label?.includes('important'), true
     * )
     */
    setItemsVisibility(condition: (item: MarkerItem) => boolean, visible: boolean): void;
    /**
     * 显示所有模型项目
     * @example
     * // 恢复所有项目的可见性
     * controller.showAllItems()
     */
    showAllItems(): void;
    /**
     * 隐藏所有模型项目
     * @example
     * // 隐藏所有项目
     * controller.hideAllItems()
     */
    hideAllItems(): void;
    dispose(): void;
    protected onWorkCodeChange(): void;
    /**
     * 应用高亮样式到指定项目
     * @param item 要高亮的项目
     * @param color 高亮颜色
     */
    private applyHighlightStyles;
    /**
     * 移除指定项目的高亮样式
     * @param item 要移除高亮的项目
     */
    private removeHighlightStyles;
    /**
     * 设置棱柱体模型的透明度
     * @param id 模型id
     * @param model 模型对象
     * @param opacityPercent 透明度系数，范围0-1
     */
    private setPrismModelOpacity;
    /**
     * 设置多边形模型的透明度
     * @param id 模型id
     * @param model 模型对象
     * @param opacityPercent 透明度系数，范围0-1
     */
    private setPolygonModelOpacity;
    private onFiveModeChange;
    private handleShow;
    private handleHide;
    private handleEnable;
    private handleDisable;
    private onFiveEveryReady;
    private updateTagRenderer;
    /**
     * 高亮指定的模型项目
     * @param id 模型项目的ID
     * @param color 高亮颜色，默认为 #FF7700
     */
    highlightItem(id: string | number, color?: string): void;
    /**
     * 重置所有高亮
     */
    resetHighlight(): void;
    /**
     * 获取当前高亮的项目ID
     */
    getHighlightedItemId(): string | number | null;
    getPrismItems(): MarkerItem[];
    getPolygonItems(): MarkerItem[];
    getBoxItems(): MarkerItem[];
    /**
     * 隐藏指定项目的标签
     * @param items 要隐藏标签的项目数组
     */
    private hideItemLabels;
    /**
     * 缓动显示指定项目的标签
     * @param items 要显示标签的项目数组
     * @param duration 缓动持续时间（毫秒）
     */
    private easeInItemLabels;
}
