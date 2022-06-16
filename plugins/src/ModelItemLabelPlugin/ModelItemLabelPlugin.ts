import type { PluginEvent } from "./events.type";
import type { FivePlugin, Mode } from "@realsee/five";
import { Five, Subscribe } from "@realsee/five"
import ItemLabelComponent from './ItemLabelComponent.svelte'
import {
    ModelItemLabelPluginState,
    ModelItemLabelPluginData,
    ModelItemLabelPluginExportReturnsType,
    ModelItemLabelPluginParametersType,
    DISPLAY_STRATEGY_TYPE
} from "./typings";
import { parseModelItemLabelPluginData } from "./utils/parseData";

export const ModelItemLabelPlugin: FivePlugin<
    ModelItemLabelPluginParametersType,
    ModelItemLabelPluginExportReturnsType
    > = (
    five: Five,
    params
) => {

    const pluginState: ModelItemLabelPluginState = {
        container: document.createElement('div'),
        data: null,
        enabled: true,
        fiveModeEnabled: undefined,
        itemLabels: [],
        wrapper: null,
        app: undefined,
        hooks: new Subscribe<PluginEvent>(),
        modelOcclusionEnable: params?.modelOcclusionEnable ?? true,
        displayStrategyType: params?.displayStrategyType ?? DISPLAY_STRATEGY_TYPE.SMALL,
    }

    pluginState.container.setAttribute('class', 'model-item-label-plugin-container')
    pluginState.container.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
    `
    pluginState.container.style.pointerEvents = 'none' // 写到 cssText 里不生效

    const appendTo = (wrapper: Element) => {
        pluginState.wrapper = wrapper as HTMLElement
        wrapper.appendChild(pluginState.container)
        render()
        return true
    }

    const load = (data: ModelItemLabelPluginData) => {
        pluginState.itemLabels = parseModelItemLabelPluginData(data)
        render()
    }

    const enable = () => {
        if (pluginState.enabled) return true
        pluginState.enabled = true
        render()
        return true
    }

    const disable = () => {
        if (!pluginState.enabled) return true
        pluginState.enabled = false
        render()
        return true
    }

    const dispose = () => {
        removeListener4Five()
        pluginState.container.remove()
    }

    const render = () => {
        if (!pluginState.wrapper) return
        // 只要不可展示，销毁容器
        if (!pluginState.enabled || !pluginState.fiveModeEnabled) {
            pluginState.app?.$destroy()
            pluginState.app = undefined
            return
        }
        // 正常显示时，分为 app 存在和不存在两种情况，如果存在，传值，不存在则初始化并传值
        if (!pluginState.app) {
            pluginState.app = new ItemLabelComponent({
                target: pluginState.container,
                props: {
                    five: five,
                    modelOcclusionEnable: pluginState.modelOcclusionEnable,
                    itemLabels: pluginState.itemLabels,
                    wrapper: pluginState.wrapper,
                    hooks: pluginState.hooks,
                    displayStrategyType: pluginState.displayStrategyType
                }
            })
        } else {
            pluginState.app.$set({
                five: five,
                itemLabels: pluginState.itemLabels
            })
        }
    }

    // 添加 five 监听
    const addListener4Five = () => {
        five.on('modeChange', onFiveModeChange)
        five.once('dispose', dispose)
    }

    // 取消 five 监听
    const removeListener4Five = () => {
        five.off('modeChange', onFiveModeChange)
    }

    const onFiveModeChange = (mode: Mode) => {
        if (!pluginState.enabled) return
        if (mode !== Five.Mode.Floorplan) {
            pluginState.fiveModeEnabled = false
            render()
            return
        }

        five.once('initAnimationEnded', () => {
            pluginState.fiveModeEnabled = five.currentMode === Five.Mode.Floorplan
            render()
        })
    }

    addListener4Five()

    return {
        appendTo,
        load,
        enable,
        disable,
        dispose,
        hooks: pluginState.hooks
    }
}

export default ModelItemLabelPlugin
