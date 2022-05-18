<script lang="ts">
  import RoomLabel from './RoomLabel.svelte'
  import type { FloorplanData, FloorplanRoomItem } from '../../typings/floorplanData'

  export let floorIndex: number
  export let floorplanData: FloorplanData
  export let getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null)

  $: rooms = floorplanData.floorDatas[floorIndex].rooms
</script>

{#if rooms}
  <div class="floorplan-plugin__room-labels">
    {#each rooms as room (room.id)}
      <RoomLabel {...{ room, getLabelElement }} />
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
