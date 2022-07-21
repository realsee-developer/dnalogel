<script lang="ts">
    import type { Five, Subscribe } from '@realsee/five'
    import type { ItemLabel } from './typings'
    import { DISPLAY_STRATEGY_TYPE } from "./typings";
    import { beforeUpdate, onDestroy, onMount } from "svelte";
    import * as THREE from 'three'
    import ItemLabelItem from './ItemLabelItem.svelte'
    import { PluginEvent } from "./events.type";
    import debounce from '../shared-utils/debounce'

    const { Raycaster, Vector3 } = THREE

    export let five: Five
    export let modelOcclusionEnable: boolean
    export let itemLabels: ItemLabel[]
    export let hooks: Subscribe<PluginEvent>
    export let displayStrategyType: DISPLAY_STRATEGY_TYPE

    let curItemLabels: ItemLabel[] = null
    let renderItemLabels: ItemLabel[] = null


    let containerWidth: number
    let containerHeight: number

    // 计算重叠
    let cssOffsetLists: number[][] = []
    let cssHeight: number = 26
    let basicWidth: number = 11

    // 动画过程中 itemsVisible 为 false
    let itemsVisible = true

    /**
     * 可见性策略：
     * 1、当前楼层(假设先不考虑多楼层)
     * 2、模型未被遮挡（一个 box 有没有被遮挡的计算？ TODO）
     * */

    const getLabelVisible = (five: Five, itemLabel: ItemLabel) => {
        // 虚拟 VR 仅有一层，不考虑楼层信息
        const raycaster = new Raycaster()
        const cameraPosition = five.camera.position.clone()
        const modelPosition = new Vector3().fromArray(itemLabel.modelPosition)
        // 计算点到相机的位置
        const vectorDistance = modelPosition.distanceTo(cameraPosition)
        raycaster.set(cameraPosition.clone(), modelPosition.clone().sub(cameraPosition).normalize())
        const [intersection] = five.model.intersectRaycaster(raycaster)
        return !(intersection && intersection.distance + 1 < vectorDistance);
    }

    // cssOffset 获取
    const getLabelCssOffset = (five: Five, itemLabel: ItemLabel) => {
        const modelPosition = new Vector3(itemLabel.modelPosition[0], itemLabel.modelPosition[1], itemLabel.modelPosition[2])
        const cssPosition: THREE.Vector2 | null = five.project2d(modelPosition)
        const xOffset = cssPosition?.x
        const yOffset = cssPosition?.y
        return [xOffset, yOffset]
    }

    const getLabelTransform = (cssOffset: [number, number]) => {
        return `translate(${cssOffset[0]}px, ${cssOffset[1]}px)`
    }

    // 重叠计算
    const isOverlap = (cssOffset: [number, number], widthOffset: number): boolean => {
        if (cssOffsetLists.length === 0) {
            return false
        }

        const hasOverlapPoint = cssOffsetLists.find(item => (
            (cssOffset[0] >= item[0] - widthOffset && cssOffset[0] <= item[0] + widthOffset)
            || (cssOffset[1] >= item[1] - cssHeight && cssOffset[1] <= item[1] + cssHeight)
        ))

        return !!hasOverlapPoint
    }

    function getStrokeLength(itemSpaceHeight: number, type: DISPLAY_STRATEGY_TYPE) {
        switch (type) {
            case DISPLAY_STRATEGY_TYPE.SMALL:
                return Math.ceil(-27.78 * itemSpaceHeight + 85)
            case DISPLAY_STRATEGY_TYPE.MIDLLE:
                return Math.ceil(-38.9 * itemSpaceHeight + 130)
            case DISPLAY_STRATEGY_TYPE.LARGE:
                return Math.ceil(-44.44 * itemSpaceHeight + 140)
            case DISPLAY_STRATEGY_TYPE.EXTRA_LARGE:
                return Math.ceil(-92.59 * itemSpaceHeight + 300)
        }
    }

    const getFormatedItemLabels = (five: Five, labels: ItemLabel[]) => {
        // 计算位置 & 可见性
        const newLabels = labels.map(label => {
            const cssOffset = getLabelCssOffset(five, label)
            const curLabelWidth = label.name.length * basicWidth
            const strokeLength = getStrokeLength(label.modelPosition[1], displayStrategyType)

            // 是否加入碰撞检测
            const naturalVisible = modelOcclusionEnable ? getLabelVisible(five, label) : true
            const visible = naturalVisible && !isOverlap([cssOffset[0], cssOffset[1] + strokeLength], curLabelWidth)

            if (!visible) return { ...label, visible }

            cssOffsetLists.push(cssOffset)

            // position
            const transform = getLabelTransform(cssOffset)
            return { ...label, visible, transform, strokeLength }
        })

        const sortedItemLabelItems = newLabels
            .filter(({ visible }) => visible)
            .map(label => ({
                itemLabelItem: label,
                distance: new Vector3(label.modelPosition[0], label.modelPosition[1], label.modelPosition[2]).clone().distanceTo(five.camera.position)
            }))
            .sort((a, b) => a.distance - b.distance)

        return newLabels.map(label => {
            const sortIndex = sortedItemLabelItems.findIndex(item => item.itemLabelItem.id === label.id)
            if (sortIndex !== undefined) return { ...label, zIndex: sortIndex * 10 }
            return label
        })
    }

    const onItemLabelUpdate = () => {
        cssOffsetLists = []
        renderItemLabels = getFormatedItemLabels(five, renderItemLabels)
    }

    beforeUpdate(() => {
        addDataUpdateListener()
    })

    const handleCameraUpdateCallback = () => {
        itemsVisible = false
        handleCameraUpdate()
    }

    onMount(() => {
        renderItemLabels = itemLabels
        curItemLabels = itemLabels
        onItemLabelUpdate()
        addResizeListener()

        five.on('cameraUpdate', handleCameraUpdateCallback)
    })

    const handleCameraUpdate = debounce(() => {
        itemsVisible = true
        onItemLabelUpdate()
    }, 300)

    const addResizeListener = () => {
        window.addEventListener('resize', onResize, false)
    }

    const addDataUpdateListener = () => {
        if (curItemLabels !== itemLabels) {
            renderItemLabels = itemLabels
            curItemLabels = itemLabels
            onItemLabelUpdate()
        }
    }

    const onResize = () => {
        five.once('renderFrame', onItemLabelUpdate)
    }


    onDestroy(() => {
        five.off('cameraUpdate', handleCameraUpdateCallback)
        window.removeEventListener('resize', onResize, false)
    })


</script>

<div class="item-labels-container" bind:clientWidth="{containerWidth}" bind:clientHeight="{containerHeight}"
     style:opacity="{itemsVisible ? 1 : 0}">
	{#each renderItemLabels as itemLabelItem (itemLabelItem.id)}
		<ItemLabelItem itemLabel="{itemLabelItem}" hooks="{hooks}" />
	{/each}
</div>

<style>
    .item-labels-container {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>
