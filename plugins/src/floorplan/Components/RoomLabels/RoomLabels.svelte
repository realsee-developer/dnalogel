<script lang="ts">
  import type { Writable } from 'svelte/store'
  import type { FloorplanData, FloorplanRoomItem } from '../../typings/floorplanData'
  import RoomLabel from './RoomLabel.svelte'

  export let floorIndex: number
  export let floorplanData: FloorplanData
  export let hoveredRoom: Writable<FloorplanRoomItem | undefined>
  export let getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null)
  export let adaptiveRoomLabelVisibleEnable: boolean

  $: rooms = floorplanData.floorDatas[floorIndex].rooms
  let clientWidth = 0
  let pxmm = 0

  $: {
    const { max, min } = floorplanData.bounding
    const boundingWidth = max.x - min.x
    pxmm = clientWidth / boundingWidth
  }
</script>

{#if rooms}
  <div class="floorplan-plugin__room-labels" bind:clientWidth>
    {#each rooms as room (room.id)}
      <RoomLabel {...{ pxmm, room, getLabelElement, hoveredRoom, adaptiveRoomLabelVisibleEnable }} />
    {/each}
  </div>
{/if}

<style>
  .floorplan-plugin__room-labels {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    pointer-events: none;
  }
</style>
