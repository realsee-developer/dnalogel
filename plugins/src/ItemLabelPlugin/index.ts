import ItemLabelPlugin from './Plugin'

export { ItemLabelPlugin }

export default ItemLabelPlugin

export const itemLabelPluginServerParams = {
    name: 'ItemLabelPlugin',
    version: 0,
}

export type {
    ItemLabelPluginParametersType,
    ItemLabelPluginData,
    ItemLabelPluginExportReturnsType
} from './typings'

export {
    ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE
} from './typings'
