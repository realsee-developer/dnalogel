import type { ItemLabelPluginData, ItemLabel } from '../typings'

/** @description 转成内部所需数据 */
export function parseItemLabelPluginData(data: ItemLabelPluginData): ItemLabel[] {
    return data.item_labels.map(label => ({
        modelPosition: [label.position[0], label.position[1], label.position[2]],
        observerIndex: undefined,
        ...label
    }))
}
