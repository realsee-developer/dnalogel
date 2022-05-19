<script lang="ts">
  import type { FloorplanData } from '../../typings/floorplanData'
  import formatFloorplanPoint from '../../utils/formatPosition'
  import RoomMaterial_0 from './RoomMaterial_0.svelte'
  import RoomMaterial_1 from './RoomMaterial_1.svelte'
  import RoomMaterial_2 from './RoomMaterial_2.svelte'

  export let floorIndex: number
  export let pxmm: number
  export let floorplanData: FloorplanData

  $: rooms = floorplanData.floorDatas[floorIndex].rooms.map((room) => ({
    ...room,
    path: room.path.map((p) => formatFloorplanPoint(p, pxmm, floorplanData.bounding)),
  }))
</script>

<div class="floorplan-plugin__room-material">
  {#each rooms as room}
    <svg>
      {#if room.floorType === 1}
        <RoomMaterial_0 path="{room.path}" />
      {:else if room.floorType === 0}
        <RoomMaterial_2 path="{room.path}" />
      {:else}
        <RoomMaterial_1 path="{room.path}" />
      {/if}
    </svg>
  {/each}
</div>

<style>
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
</style>
