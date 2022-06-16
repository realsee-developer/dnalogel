import type { Mode, Subscribe } from "@realsee/five";
import type { PluginEvent } from "./events.type";
import type ItemLabelComponent from './ItemLabelComponent.svelte'

export enum ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE {
    SMALL= 'small',
    MIDLLE= 'middle',
    LARGE= 'large',
    EXTRA_LARGE = 'x-large'
}
// 插件入口参数
export interface  ItemLabelPluginParametersType {
    maxVisibleDistance?: number
    modelOcclusionEnable?: boolean
    displayStrategyType?: Partial<ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE>
}

// 插件 load 数据
export interface  ItemLabelPluginData {
    item_labels: Readonly<{
        id: string,
        code: string,
        name: string
        position: [number, number, number]
        type?: string[],
        icon?: string,
        [key: string]: any
    }>[]
}

// 插件内部 render 数据
export interface ItemLabel {
    id: string
    code: string
    name: string
    position: [number, number, number]
    modelPosition: [number, number, number]
    type?: string[]
    icon?: string,
    observerIndex?: number | undefined
    visible?: boolean,
    isFold?: boolean,
    [key: string]: any
}

// 插件返回类型
export interface  ItemLabelPluginExportReturnsType {
    appendTo: (wrapper: Element) => void
    load: (data:  ItemLabelPluginData) => void
    disable: () => void
    enable: () => void
    dispose: () => void
    hooks: Subscribe<PluginEvent>
}

// 插件状态
export interface ItemLabelPluginState {
    container: HTMLDivElement
    data:  ItemLabelPluginData | null
    enabled: boolean
    itemLabels: ItemLabel[]
    wrapper: HTMLElement | null
    fiveModeEnabled: boolean
    app?: ItemLabelComponent | undefined
    hooks: Subscribe<PluginEvent>
    modelOcclusionEnable: boolean
    displayStrategyType: Partial<ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE>
    maxVisibleDistance: number | undefined
}
