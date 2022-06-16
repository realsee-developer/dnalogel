<script lang="ts">
    import type { Subscribe, WorkObserver } from '@realsee/five'
    import { Five, Mode } from '@realsee/five'
    import type { ItemLabel } from './typings'
    import { ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE } from "./typings";
    import { beforeUpdate, onDestroy, onMount } from "svelte";
    import * as THREE from 'three'
    import ItemLabelItem from './ItemLabelItem.svelte'
    import { PluginEvent } from "./events.type";
    import debounce from '../shared-utils/debounce'
    import { isImpacted } from "./utils/isImpacted";
    import { getStrokeLength } from "./utils/getStrokeLength";
    import { getLabelTransform } from './utils/getLabelTransform'
    import { transform2RenderData } from "./utils/transform2RenderData";

    const { Raycaster, Vector3 } = THREE

    export let five: Five
    export let modelOcclusionEnable: boolean
    export let itemLabels: ItemLabel[]
    export let wrapper: HTMLElement | null
    export let hooks: Subscribe<PluginEvent>
    export let displayStrategyType: ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE
    export let maxVisibleDistance: number | null

    let curItemLabels: ItemLabel[] = null
    let renderItemLabels: ItemLabel[] = null
    let anchorEnabled: boolean = five?.currentMode === Five.Mode.Panorama

    let wrapperSize: { width: number, height: number } = { width: 0, height: 0 }

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
        const cameraPosition = five.camera.position.clone()
        const modelPosition = new Vector3(itemLabel.modelPosition[0], itemLabel.modelPosition[1], itemLabel.modelPosition[2])
        // 计算点到相机的位置
        const vectorDistance = modelPosition.distanceTo(cameraPosition)

        // 判断距离，大于最大可见距离直接不可见 TODO 把距离计算和碰撞拆分开
        if (maxVisibleDistance !== undefined && five.state.mode === Five.Mode.Panorama) {
            if (vectorDistance > maxVisibleDistance) {
                return false
            }
        }

        return isImpacted(five, modelPosition.clone().sub(cameraPosition).normalize(), cameraPosition, vectorDistance)

        // raycaster.set(cameraPosition.clone(), modelPosition.clone().sub(cameraPosition).normalize())
        // const [intersection] = five.model.intersectRaycaster(raycaster)
        // return !(intersection && intersection.distance + 1 < vectorDistance);
    }

    // cssOffset 获取
    const getLabelCssOffset = (five: Five, itemLabel: ItemLabel) => {
        const modelPosition = new Vector3(itemLabel.modelPosition[0], itemLabel.modelPosition[1], itemLabel.modelPosition[2])
        const cssPosition: THREE.Vector2 | null = five.project2d(modelPosition)
        const xOffset = cssPosition?.x
        const yOffset = cssPosition?.y
        return [xOffset, yOffset]
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

    const getFormatedItemLabels = (five: Five, labels: ItemLabel[]) => {
        // 计算位置 & 可见性
        const newLabels = labels.map(label => {
            const cssOffset = getLabelCssOffset(five, label)
            const curLabelWidth = label.name.length * basicWidth
            const strokeLength = getStrokeLength(label.modelPosition[1], displayStrategyType)

            // 是否加入碰撞检测
            const naturalVisible = modelOcclusionEnable ? getLabelVisible(five, label) : label.visible
            const visible = naturalVisible
            // 关掉重叠计算
            // const visible = naturalVisible && !isOverlap([cssOffset[0], cssOffset[1] + strokeLength], curLabelWidth)

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
        renderItemLabels = transform2RenderData(itemLabels)
        curItemLabels = itemLabels
        onItemLabelUpdate()
        addResizeListener()

        five.on('cameraUpdate', handleCameraUpdateCallback)
        five.on('modeChange', onFiveModeChange)
    })

    const onFiveModeChange = (mode: Mode) => {
        itemsVisible = false

        five.once('initAnimationEnded', (panoIndex, pose, userAction) => {
            anchorEnabled = mode === Five.Mode.Panorama
	        itemsVisible = true
            if (!userAction) return
	        else onItemLabelUpdate()
        })
    }

    const handleCameraUpdate = debounce(() => {
        itemsVisible = true
        onItemLabelUpdate()
    }, 300)

    const addResizeListener = () => {
        wrapperSize = {
            width: wrapper.clientWidth,
            height: wrapper.clientHeight
        }
        resizeObserver.observe(wrapper)
    }

    const addDataUpdateListener = () => {
        if (curItemLabels !== itemLabels) {
            renderItemLabels = transform2RenderData(itemLabels)
            curItemLabels = itemLabels
            onItemLabelUpdate()
        }
    }

    const resizeObserver = new ResizeObserver(entries => {
        const entry = entries[0]
        const target = entry.target as HTMLElement
        const curWidth = target.clientWidth
        const curHeight = target.clientHeight
        if (wrapperSize.width !== curWidth || wrapperSize.height !== curHeight) {
            wrapperSize = {
                width: curWidth,
                height: curHeight
            }

            onItemLabelUpdate()
        }
    })

    onDestroy(() => {
        five.off('cameraUpdate', handleCameraUpdateCallback)
        five.off('modeChange', onFiveModeChange)
        resizeObserver.unobserve(wrapper)
    })

    const getNearObserverPano = (fromPositionVector: THREE.Vector3, observers: WorkObserver[]) => {
        let candidates = []

        for (let i = 0; i < observers.length; i++) {
            const { position: obVector, panoIndex } = observers[i]
            const distance = fromPositionVector.distanceTo(obVector)
            if (maxVisibleDistance === undefined || distance <= maxVisibleDistance || five.state.mode !== Five.Mode.Panorama) {
                candidates.push({
                    panoIndex,
                    obVector,
                    distance
                })
            }
        }

        candidates = candidates.sort((a, b) => a.distance - b.distance);
        let observerIndex: number

        for (let i = 0; i < candidates.length; i++) {
            const { obVector, distance, panoIndex } = candidates[i]
            const isImpactedRes = isImpacted(five, fromPositionVector, obVector, distance)
            if (!isImpactedRes) {
                observerIndex = panoIndex
                break
            }
        }

        return typeof observerIndex === "number" ? observers[observerIndex] : undefined
    }

    const onIconClick = (itemLabel: ItemLabel) => {
        if (five.state.mode === Five.Mode.Panorama) return

        const observers = five.work.observers
        const fromPositionVector = new Vector3(itemLabel.position[0], itemLabel.position[1], itemLabel.position[2])
        const observer = getNearObserverPano(fromPositionVector, observers)
        if (observer) {
            itemLabel.observerIndex = observer.panoIndex
        }

        if (typeof itemLabel.observerIndex === "number") {
            const observer = observers[itemLabel.observerIndex]
            const direction = fromPositionVector.clone().sub(observer.position).normalize()

            const cameraCoord = {
                longitude: Math.PI + Math.atan2(direction.x, direction.z),
                latitude: Math.acos(direction.y / direction.length()) - Math.PI / 2,
            }

            five.setState({
                ...cameraCoord,
                mode: Five.Mode.Panorama,
                panoIndex: itemLabel.observerIndex
            })

            // 游走结束更新 render list
            five.once('initAnimationEnded', () => {
                renderItemLabels = renderItemLabels.map(item => {
                    return {
                        ...item,
                        isFold: item.id !== itemLabel.id
                    }
                })

	            five.once('cameraUpdate', () => {
                    renderItemLabels = renderItemLabels.map(item => {
                        return {
                            ...item,
                            isFold: false
                        }
                    })
	            })
            })
        }
    }


</script>

<div class="item-labels-container" bind:clientWidth="{containerWidth}" bind:clientHeight="{containerHeight}"
     style:opacity="{itemsVisible ? 1 : 0}">
	{#each renderItemLabels as itemLabelItem (itemLabelItem.id)}
		{#if itemLabelItem.visible}
			<ItemLabelItem
				itemLabel="{itemLabelItem}"
				hooks="{hooks}"
				anchorEnabled="{anchorEnabled}"
				onIconClick="{onIconClick}"
			/>
		{/if}
	{/each}
</div>

<style>
    .item-labels-container {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>
