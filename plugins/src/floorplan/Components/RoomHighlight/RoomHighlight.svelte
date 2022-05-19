<script lang="ts">
  import Room from './Room.svelte'
  import { Vector2 } from 'three'
  import type { Five } from '@realsee/five'
  import type { FloorplanData } from '../../typings/floorplanData'

  export let five: Five
  export let pxmm: number
  export let floorIndex: number
  export let floorplanData: FloorplanData
  export let onRoomHeightClick: undefined | ((e: MouseEvent) => boolean | undefined)

  let clientWidth: number
  let clientHeight: number
  let highlightContainerDom: HTMLDivElement
  const { observers: floorplan_observers } = floorplanData

  const handleClick = function (e: MouseEvent) {
    if (onRoomHeightClick?.(e) === false) return
    // 因为 mouse.offsetX 的兼容性问题，手动计算 mouse offsetX offsetY
    const boundingClientRect = highlightContainerDom.getBoundingClientRect()
    const mouseClientVector = new Vector2(e.clientX, e.clientY)
    const domTopLeftVector = new Vector2(boundingClientRect.left, boundingClientRect.top)
    const mouseOffsetVector = mouseClientVector.clone().sub(domTopLeftVector)
    // px 转换为 百分比
    const mouseOffsetRelativeVector = new Vector2(mouseOffsetVector.x / clientWidth, mouseOffsetVector.y / clientHeight)
    const closestPoint = floorplan_observers
      .filter((observer) => observer.floorIndex === floorIndex)
      .sort((ob1, ob2) => {
        const position1 = new Vector2(ob1.positionInImage.x, ob1.positionInImage.y)
        const position2 = new Vector2(ob2.positionInImage.x, ob2.positionInImage.y)
        return position1.distanceTo(mouseOffsetRelativeVector) - position2.distanceTo(mouseOffsetRelativeVector)
      })[0]
    five.moveToPano(closestPoint.index)
  }
</script>

<div
  class="floorplan-plugin__room-highlight"
  bind:this="{highlightContainerDom}"
  bind:clientWidth
  bind:clientHeight
  on:click="{handleClick}"
>
  <svg>
    {#each floorplanData.floorDatas[floorIndex].rooms as room (room.id)}
      <Room {...{ room, floorplanData, pxmm }} />
    {/each}
  </svg>
</div>

<style>
  .floorplan-plugin__room-highlight {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: all;
  }

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
</style>
