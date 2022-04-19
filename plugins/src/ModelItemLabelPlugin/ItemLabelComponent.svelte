<script lang="ts">
    import type { Five } from '@realsee/five'
    import type { ItemLabel } from './typings'
    import { onDestroy, onMount } from "svelte";
    import { Raycaster, Vector2, Vector3 } from "three";
    import ItemLabelItem from './ItemLabelItem.svelte'

    export let five: Five
    export let itemLabels: ItemLabel[]

    let containerWidth: number
    let containerHeight: number

    /**
     * 可见性策略：
     * 1、当前楼层(假设先不考虑多楼层)
     * 2、模型未被遮挡（一个 box 有没有被遮挡的计算？ TODO）
     * */
    const getLabelVisible = (five: Five, itemLabel: ItemLabel) => {
        // TODO 当前没有楼层数据
        // const isLabelInCurFloor = five.model.shownFloor === null || itemLabel.floorIndex === five.model.shownFloor
	    // if (!isLabelInCurFloor) return false

	    const raycaster = new Raycaster()
	    const cameraPosition = five.camera.position.clone()
	    const modelPosition = new Vector3(itemLabel.position.x, itemLabel.position.y, itemLabel.position.z)
	    // 计算点到相机的位置
	    const vectorDistance = modelPosition.distanceTo(cameraPosition)
	    raycaster.set(cameraPosition.clone(), modelPosition.clone().sub(cameraPosition).normalize())
	    const [intersection] = five.model.intersectRaycaster(raycaster)
	    return !(intersection && intersection.distance + 1 < vectorDistance) // 这里这个 + 1 是干嘛用的呢
    }

    // 位置获取
    const getLabelTransform = (five: Five, itemLabel: ItemLabel) => {
        const modelPosition = new Vector3(itemLabel.position.x, itemLabel.position.y, itemLabel.position.z)
	    const cssPosition: Vector2 | null = five.project2d(modelPosition)
	    const xOffset = cssPosition.x
	    const yOffest = cssPosition.y
        return `translate(${xOffset}px, ${yOffest}px)`
    }

    const getFormatedItemLabels = (five: Five, labels: ItemLabel[]) => {
        // 计算位置 & 可见性
        const newLabels = labels.map(label => {
            // 可见性，不可见则不计算位置，节省算力
            // const visible = getLabelVisible(five, label)
	        const visible = true
            if (!visible) return { ...label, visible }

            // position
            const transform = getLabelTransform(five, label)
            return { ...label, visible, transform }
        })

        const sortedItemLabelItems = newLabels
            .filter(({ visible }) => visible)
            .map(label => ({
                itemLabelItem: label,
                distance: new Vector3(...Object.values(label.position)).clone().distanceTo(five.camera.position)
            }))
            .sort((a, b) => a.distance - b.distance)

        return newLabels.map(label => {
            const sortIndex = sortedItemLabelItems.findIndex(item => item.itemLabelItem.id === label.id)
	        if (sortIndex !== undefined) return { ...label, zIndex: sortIndex * 10 }
	        return label
        })
    }

    const onFiveCameraUpdate = () => {
        itemLabels = getFormatedItemLabels(five, itemLabels)
    }

    onMount(() => {
        onFiveCameraUpdate()
    })

    onDestroy(() => {
        five.off('cameraUpdate', onFiveCameraUpdate)
    })

    five.on('cameraUpdate', onFiveCameraUpdate)


</script>

<div class="item-labels-container" bind:clientWidth="{containerWidth}" bind:clientHeight="{containerHeight}">
	{#each itemLabels as itemLabelItem (itemLabelItem.id)}
		<ItemLabelItem itemLabel="{itemLabelItem}" five="{five}" />
	{/each}
</div>

<style>
    .item-labels-container {
        width: 100%;
        height: 100%;
        position: relative;
        color: #EAD09A;
    }
</style>
