import ItemLabelComponent from './ItemLabelComponent.svelte'
import type { Subscribe } from "@realsee/five";
import { PluginEvent } from "./events.type";

export enum DISPLAY_STRATEGY_TYPE {
    SMALL= 'small',
    MIDLLE= 'middle',
    LARGE= 'large'
}
// 插件入口参数
export interface ModelItemLabelPluginParametersType {
    modelOcclusionEnable?: boolean
    displayStrategyType?: Partial<DISPLAY_STRATEGY_TYPE>
}

// 插件 load 数据
export interface ModelItemLabelPluginData {
    model_item_labels: Readonly<{
        id: string,
        library: string,
        name: string
        size: [number, number, number]
        center: [number, number, number]
        position: [number, number, number]
        type: string[],
        [key: string]: any
    }>[]
}

// 插件内部 render 数据
export interface ItemLabel {
    id: string
    library: string
    name: string
    size: [number, number, number]
    center: [number, number, number]
    position: [number, number, number]
    type: string[]
    // 实际展示 position
    modelPosition: [number, number, number]
    [key: string]: any
}

// 插件返回类型
export interface ModelItemLabelPluginExportReturnsType {
    appendTo: (wrapper: Element) => void
    load: (data: ModelItemLabelPluginData) => void
    disable: () => void
    enable: () => void
    dispose: () => void
    hooks: Subscribe<PluginEvent>
}

// 插件状态
export interface ModelItemLabelPluginState {
    container: HTMLDivElement
    data: ModelItemLabelPluginData | null
    enabled: boolean
    itemLabels: ItemLabel[]
    wrapper: HTMLElement | null
    fiveModeEnabled: boolean
    app?: ItemLabelComponent | undefined
    hooks: Subscribe<PluginEvent>
    modelOcclusionEnable: boolean
    displayStrategyType: Partial<DISPLAY_STRATEGY_TYPE>
    pending: boolean
}
