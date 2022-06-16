<script lang="ts">
  import type { Five } from '@realsee/five'
  import type { RoomLabel } from './typings'
  import { onDestroy } from 'svelte'
  import { Raycaster, Vector3 } from 'three'
  import RoomLabelItem from './RoomLabelItem.svelte'

  export let five: Five
  export let roomLabels: RoomLabel[]

  let containerWidth: number
  let containerHeight: number
  let shownFloor: number | null = null
  $: rendererSize = { x: containerWidth, y: containerHeight }

  $: {
    // rendererSize 变化时，触发 reRender
    roomLabels = getFormatedRoomLabels(rendererSize)
  }

  $: {
    // shownFloor 变化时，更新 item visible
    roomLabels = roomLabels.map((item) => {
      const isLabelInFloor = shownFloor === null || item.floorIndex === shownFloor
      const visible = isLabelInFloor ? item.visible : false
      return {...item, visible}
    })
  }

  function getLabelVisible(item: RoomLabel) {
    const raycaster = new Raycaster()
    const cameraPosition = five.camera.position.clone()
    const position = new Vector3(item.position.x, item.position.y, item.position.z)
    const vectorDistance = position.distanceTo(cameraPosition)
    raycaster.set(cameraPosition.clone(), position.clone().sub(cameraPosition).normalize())
    const [intersection] = five.model.intersectRaycaster(raycaster)
    if (intersection && intersection.distance + 1 < vectorDistance) return false

    return true
  }

  function getLabelTransform(item: RoomLabel, rendererSize: { x: number; y: number }) {
    const position = new Vector3(item.position.x, item.position.y, item.position.z)
    const mouse = position.clone().project(five.camera)
    const xOffset = Math.ceil(((mouse.x + 1) / 2) * rendererSize.x)
    const yOffset = Math.ceil(((-mouse.y + 1) / 2) * rendererSize.y)

    return `translate(${xOffset}px, ${yOffset}px)`
  }

  function getFormatedRoomLabels(rendererSize: { x: number; y: number }) {
    // 因为 item distance 需要重复计算，所以缓存一下
    const distanceMap = new Map<string, number>()

    function getItemDistance(item: RoomLabel) {
      const cacheDistance = distanceMap.get(item.id)
      if (cacheDistance) return cacheDistance
      const { x, y, z } = item.position
      const distance = new Vector3(x, y, z).clone().distanceTo(five.camera.position)
      distanceMap.set(item.id, distance)
      return distance
    }

    const formatedItems = roomLabels.map((item) => {
      const visible = getLabelVisible(item)
      const transform = visible ? getLabelTransform(item, rendererSize) : item.transform
      const itemDistance = getItemDistance(item)
      // visible === true 的 item 中，distance 比自己小的 item 个数
      const minItemLen = roomLabels.filter(
        (item) => item.visible && getItemDistance(item) < itemDistance,
      ).length
      const zIndex = minItemLen * 10
      return { ...item, visible, transform, zIndex }
    })

    return formatedItems
  }

  function onFiveCameraUpdate() {
    roomLabels = getFormatedRoomLabels(rendererSize)
  }

  function onFiveModelShownFloorChange(floorIndex: null | number) {
    shownFloor = floorIndex
  }

  five.on('cameraUpdate', onFiveCameraUpdate)
  five.on('modelShownFloorChange', onFiveModelShownFloorChange)

  onDestroy(() => {
    five.off('cameraUpdate', onFiveCameraUpdate)
    five.off('modelShownFloorChange', onFiveModelShownFloorChange)
  })
</script>

<div
  class="room-labels-container"
  bind:clientWidth="{containerWidth}"
  bind:clientHeight="{containerHeight}"
>
  {#each roomLabels as roomLableItem (roomLableItem.id)}
    <RoomLabelItem roomLabel="{roomLableItem}" five="{five}" />
  {/each}
</div>

<style>
  .room-labels-container {
    width: 100%;
    height: 100%;
    position: relative;
    color: #fff;
  }
</style>
