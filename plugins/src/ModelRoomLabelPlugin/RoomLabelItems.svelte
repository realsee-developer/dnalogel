<script lang="ts">
  import type { Five } from '@realsee/five'
  import type { RoomLabel } from './typings'
  import { onDestroy, onMount } from 'svelte'
  import { Raycaster, Vector3 } from 'three'
  import RoomLabelItem from './RoomLabelItem.svelte'

  export let five: Five
  export let roomLabels: RoomLabel[]

  let containerWidth: number
  let containerHeight: number

  function getLabelVisible(five: Five, roomLabelItem: RoomLabel) {
    // 先看是不是在当前展示的楼层上
    const isLabelInFloor = five.model.shownFloor === null || roomLabelItem.floorIndex === five.model.shownFloor
    if (!isLabelInFloor) return false

    // 再看是不是被模型遮挡
    const raycaster = new Raycaster()
    const cameraPosition = five.camera.position.clone()
    const position = new Vector3(roomLabelItem.position.x, roomLabelItem.position.y, roomLabelItem.position.z)
    const vectorDistance = position.distanceTo(cameraPosition)
    raycaster.set(cameraPosition.clone(), position.clone().sub(cameraPosition).normalize())
    const [intersection] = five.model.intersectRaycaster(raycaster)
    if (intersection && intersection.distance + 1 < vectorDistance) return false

    return true
  }

  function getLabelTransform(five: Five, roomLabelItem: RoomLabel) {
    const position = new Vector3(roomLabelItem.position.x, roomLabelItem.position.y, roomLabelItem.position.z)
    const mouse = position.clone().project(five.camera)
    const xOffset = Math.ceil(((mouse.x + 1) / 2) * containerWidth)
    const yOffset = Math.ceil(((-mouse.y + 1) / 2) * containerHeight)

    return `translate(${xOffset}px, ${yOffset}px)`
  }

  function getFormatedRoomLabels(five: Five, labels: RoomLabel[]) {
    const newLabels = labels.map((roomLabelItem) => {
      // 计算是否可见，如果不可见，不会更新位置
      const visible = getLabelVisible(five, roomLabelItem)
      if (!visible) return { ...roomLabelItem, visible }
      // 更新位置
      const transform = getLabelTransform(five, roomLabelItem)
      return { ...roomLabelItem, visible, transform }
    })
    const sortedRoomLabelItems = newLabels
      .filter(({ visible }) => visible)
      .map((roomLabelItem) => ({
        roomLabelItem: roomLabelItem,
        distance: new Vector3(...Object.values(roomLabelItem.position)).clone().distanceTo(five.camera.position),
      }))
      .sort((a, b) => a.distance - b.distance)
    return newLabels.map((roomLabelItem) => {
      const sortIndex = sortedRoomLabelItems.findIndex((item) => item.roomLabelItem.id === roomLabelItem.id)
      if (sortIndex !== undefined) return { ...roomLabelItem, zIndex: sortIndex * 10 }
      return roomLabelItem
    })
  }

  function onFiveCameraUpdate() {
    roomLabels = getFormatedRoomLabels(five, roomLabels)
  }

  five.on('cameraUpdate', onFiveCameraUpdate)
  five.on('modelShownFloorChange', onFiveCameraUpdate)

  onDestroy(() => {
    five.off('cameraUpdate', onFiveCameraUpdate)
    five.off('modelShownFloorChange', onFiveCameraUpdate)
  })

  onMount(() => {
    onFiveCameraUpdate()
  })
</script>

<div class="room-labels-container" bind:clientWidth="{containerWidth}" bind:clientHeight="{containerHeight}">
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
