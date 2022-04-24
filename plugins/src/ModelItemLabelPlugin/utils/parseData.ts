import { ModelItemLabelPluginData, ItemLabel } from '../typings'

/** @description 转成内部所需数据 */
export function parseModelItemLabelPluginData(data: ModelItemLabelPluginData): ItemLabel[] {
    return data.model_item_labels.map(label => ({
        modelPosition: [label.position[0], label.position[1] + label.size[1], label.position[2]],
        ...label
    }))
}
