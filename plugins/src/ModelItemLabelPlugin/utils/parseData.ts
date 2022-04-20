import { ModelItemLabelPluginData, ItemLabel } from '../typings'

/** @description 转成内部所需数据 */
export function parseModelItemLabelPluginData(data: ModelItemLabelPluginData): ItemLabel[] {
    return data.model_item_labels.map(({ id, name, position, size, center, type }) => ({
        id,
        name,
        size,
        center,
        position,
        modelPosition: [position[0], position[1] + size[1], position[2]],
        type
    }))
}
