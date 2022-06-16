import type { ItemLabel } from '../typings'

/** @description 转成内部所需数据 */
export function transform2RenderData(data: any): ItemLabel[] {
    return data.map(label => ({
        observerIndex: undefined,
        visible: false,
        isFold: false,
        ...label
    }))
}
