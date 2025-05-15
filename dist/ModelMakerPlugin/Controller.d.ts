import type { Five, Mode as FiveMode } from '@realsee/five';
import * as BasePlugin from '../base/BasePluginWithData';
import { Group } from 'three';
import type { MarkerItem, State, ServerData, ItemType, ElementRenderer, EventMap } from './typings';
export declare class Controller extends BasePlugin.Controller<State, EventMap, ServerData, ServerData> {
    state: State;
    items: MarkerItem[];
    group: Group;
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
    dispose(): void;
    protected onWorkCodeChange(): void;
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
    getPrismItems(): MarkerItem[];
    getPolygonItems(): MarkerItem[];
    getBoxItems(): MarkerItem[];
}
