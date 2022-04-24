import ItemLabelComponent from './ItemLabelComponent.svelte'
import type { Subscribe } from "@realsee/five";
import { PluginEvent } from "./events.type";

// 插件入口参数
export interface ModelItemLabelPluginParametersType {

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

// 插件 render 数据 TODO 暂时这样写，需要流转为内部使用数据格式
export interface ItemLabel {
    id: string
    name: string
    size: [number, number, number]
    center: [number, number, number]
    position: [number, number, number]
    type: string[]
    //
    modelPosition: [number, number, number]
    [key: string]: any
}

// 插件返回类型
export interface ModelItemLabelPluginExportReturnsType {
    appendTo: (wrapper: Element) => void
    load: (data: ModelItemLabelPluginParametersType) => void
    disable: () => void
    enable: () => void
    dispose: () => void
}

// 插件状态
export interface ModelItemLabelPluginState {
    container: HTMLDivElement,
    data: ModelItemLabelPluginData | null
    enabled: boolean,
    itemLabels: ItemLabel[],
    wrapper: HTMLElement | null,
    fiveModeEnabled: boolean,
    app?: ItemLabelComponent | undefined,
    hooks: Subscribe<PluginEvent>
}
