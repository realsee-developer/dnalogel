import ItemLabelComponent from './ItemLabelComponent.svelte'

// 插件入口参数
export interface ModelItemLabelPluginParametersType {

}

// 插件 load 数据
export interface  ModelItemLabelPluginData {
    model_item_labels: Readonly<{
        id: string
        name: string
        longitude: number
        center: [number, number, number]
        position: { x: number, y: number, z: number }
        type: string[]
    }>[]
}

// 插件 render 数据 TODO 暂时这样写，需要流转为内部使用数据格式
export interface ItemLabel {
    id: string
    name: string
    longitude: number
    center: [number, number, number]
    position: { x: number, y: number, z: number }
    type: string[]
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
    wrapper: Element | null,
    fiveModeEnabled: boolean,
    app?: ItemLabelComponent | undefined
}
