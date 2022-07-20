<script lang="ts">
  import Room from './Room.svelte'
  import type { Writable } from 'svelte/store'
  import type { FloorplanData, FloorplanRoomItem } from '../../typings/floorplanData'

  export let floorIndex: number
  export let floorplanData: FloorplanData
  export let hoveredRoom: Writable<FloorplanRoomItem | undefined>

  const boundingWidth = floorplanData.bounding.max.x - floorplanData.bounding.min.x
  const boundingHeight = floorplanData.bounding.max.y - floorplanData.bounding.min.y
</script>

<div class="floorplan-plugin__room-highlight">
  <svg width="100%" height="100%" viewBox={`0 0 ${boundingWidth} ${boundingHeight}`}>
    {#each floorplanData.floorDatas[floorIndex].rooms as room (room.id)}
      <Room {...{ room, floorplanData, hoveredRoom }} />
    {/each}
  </svg>
</div>

<style>
  .floorplan-plugin__room-highlight {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
</style>
