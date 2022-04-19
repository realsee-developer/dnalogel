import type { FivePlugin, Mode } from "@realsee/five";
import { Five } from "@realsee/five"
import ItemLabelComponent from './ItemLabelComponent.svelte'
import {
    ModelItemLabelPluginState,
    ModelItemLabelPluginData,
    ModelItemLabelPluginExportReturnsType,
    ModelItemLabelPluginParametersType
} from "./typings";

export const ModelItemLabelPlugin: FivePlugin<ModelItemLabelPluginParametersType, ModelItemLabelPluginExportReturnsType> = (
    five: Five,
    params
) => {

    const pluginState: ModelItemLabelPluginState = {
        container: document.createElement('div'),
        data: null,
        enabled: false,
        fiveModeEnabled: false, // TODO 不一定单独管理这个状态，存疑，看是否能够和 enabled 状态保持一致
        itemLabels: [],
        wrapper: null,
        app: undefined
    }

    pluginState.container.setAttribute('class', 'model-item-label-plugin-container')
    pluginState.container.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointerEvents: none;
    `

    const appendTo = (wrapper: Element) => {
        pluginState.wrapper = wrapper
        wrapper.appendChild(pluginState.container)
        render()
        return true
    }

    const load = (data: ModelItemLabelPluginData) => {
        pluginState.itemLabels = data.model_item_labels
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
        }
        // 正常显示时，分为 app 存在和不存在两种情况，如果存在，传值，不存在则初始化并传值
        if (!pluginState.app) {
            pluginState.app = new ItemLabelComponent({
                target: pluginState.container,
                props: {
                    five: five,
                    itemLabels: pluginState.itemLabels
                }
            })
        } else {
            pluginState.app.$set({
                five: five,
                itemLabels: pluginState.itemLabels
            })
        }
    }

    // 添加监听
    const addListener4Five = () => {
        five.on('modeChange', onFiveModeChange)
        // five.on('cameraUpdate', render)
        // five.on('mouseWheel', render)
        // five.on('pinchGesture', render)
        five.once('dispose', dispose)
    }

    // 取消监听
    const removeListener4Five = () => {
        five.off('modeChange', onFiveModeChange)
        // five.off('cameraUpdate', render)
        // five.off('mouseWheel', render)
        // five.off('pinchGesture', render)
    }

    const onFiveModeChange = (mode: Mode) => {
        if (mode !== Five.Mode.Floorplan) {
            pluginState.enabled = false
            render()
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
        dispose
    }
}

export default ModelItemLabelPlugin
