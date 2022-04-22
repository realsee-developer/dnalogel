<script lang="ts">
    import type { Five } from '@realsee/five'
    import type { ItemLabel } from './typings'
    import { onDestroy, onMount } from "svelte";
    import * as THREE from 'three'
    import ItemLabelItem from './ItemLabelItem.svelte'
    import type { Subscribe } from "@realsee/five";
    import { PluginEvent } from "./events.type";
    import { beforeUpdate } from "svelte";

    const { Raycaster, Vector3 } = THREE

    export let five: Five
    export let itemLabels: ItemLabel[]
    export let wrapper: HTMLElement | null
    export let hooks: Subscribe<PluginEvent>

    let curItemLabels: ItemLabel[] = null
    let renderItemLabels: ItemLabel[] = null

    let wrapperSize: { width: number, height: number } = { width: 0, height: 0 }

    let containerWidth: number
    let containerHeight: number

    /**
     * 可见性策略：
     * 1、当前楼层(假设先不考虑多楼层)
     * 2、模型未被遮挡（一个 box 有没有被遮挡的计算？ TODO）
     * */
    // 画辅助线
    function addHelper(x: number, y: number, z: number, type: string, helper?: boolean) {
        let geometry, materials, mesh: any

        if (type === 'box') {
            geometry = new THREE.BoxGeometry(
                0.6,
                2.5,
                1.010696,
            )

            let mats = []
            for (let i = 0; i < geometry.faces.length; i++) {
                const material = new THREE.MeshBasicMaterial({
                    color: new THREE.Color(Math.random() * 0xffffff)
                })
                mats.push(material)
            }
            materials = mats
        } else if (type === 'ball') {
            geometry = new THREE.SphereGeometry(0.02, 0.02, 64);
            materials = new THREE.MeshBasicMaterial({
                color: new THREE.Color(0xffffff)
            })
        }
        mesh = new THREE.Mesh(geometry, materials)
        // y 轴需要加一半的高度，因为position是从地面开始的，或者我应该算偏移更合理
        mesh.position.set(x, y, z)

        if (helper) {
            const helper = new THREE.AxesHelper(5);
            mesh.add(helper)
        }

        five.scene.add(mesh);

    }

    const getLabelVisible = (five: Five, itemLabel: ItemLabel) => {
        // 虚拟 VR 仅有一层，不考虑楼层信息
        const raycaster = new Raycaster()
        const cameraPosition = five.camera.position.clone()
        const modelPosition = new Vector3(itemLabel.modelPosition[0], itemLabel.modelPosition[1], itemLabel.modelPosition[2])
        // 计算点到相机的位置
        const vectorDistance = modelPosition.distanceTo(cameraPosition)
        raycaster.set(cameraPosition.clone(), modelPosition.clone().sub(cameraPosition).normalize())
        const [intersection] = five.model.intersectRaycaster(raycaster)
        return !(intersection && intersection.distance + 1 < vectorDistance);
    }

    // 位置获取
    const getLabelTransform = (five: Five, itemLabel: ItemLabel) => {
        const modelPosition = new Vector3(itemLabel.modelPosition[0], itemLabel.modelPosition[1], itemLabel.modelPosition[2])
        // addHelper(itemLabel.modelPosition[0], itemLabel.modelPosition[1], itemLabel.modelPosition[2], 'ball', true)
        const cssPosition: THREE.Vector2 | null = five.project2d(modelPosition)
        const xOffset = cssPosition?.x
        const yOffset = cssPosition?.y
        return `translate(${xOffset}px, ${yOffset}px)`
    }

    const getFormatedItemLabels = (five: Five, labels: ItemLabel[]) => {
        // 计算位置 & 可见性
        const newLabels = labels.map(label => {
            // 可见性，不可见则不计算位置，节省算力
            const visible = getLabelVisible(five, label)
            // const visible = true
            if (!visible) return { ...label, visible }

            // position
            const transform = getLabelTransform(five, label)
            return { ...label, visible, transform }
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
        renderItemLabels = getFormatedItemLabels(five, renderItemLabels)
    }

    beforeUpdate(() => {
        addDataUpdateListener()
    })

    onMount(() => {
        renderItemLabels = itemLabels
        curItemLabels = itemLabels
        onItemLabelUpdate()
        five.on('cameraUpdate', onItemLabelUpdate)
        addResizeListener()
    })

    const addResizeListener = () => {
        wrapperSize = {
            width: wrapper.clientWidth,
            height: wrapper.clientHeight
        }
        resizeObserver.observe(wrapper)
    }

    const addDataUpdateListener = () => {
        if (curItemLabels !== itemLabels) {
            renderItemLabels = itemLabels
            curItemLabels = itemLabels
            console.log('--debug--update--')
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
        five.off('cameraUpdate', onItemLabelUpdate)
        resizeObserver.unobserve(wrapper)
        curItemLabels = null
        renderItemLabels = null
        wrapperSize = { width: 0, height: 0 }
    })


</script>

<div class="item-labels-container" bind:clientWidth="{containerWidth}" bind:clientHeight="{containerHeight}">
	{#each renderItemLabels as itemLabelItem (itemLabelItem.id)}
		<ItemLabelItem itemLabel="{itemLabelItem}" hooks="{hooks}" />
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
