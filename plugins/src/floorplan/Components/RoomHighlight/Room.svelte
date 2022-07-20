<script lang="ts">
  import type { Writable } from 'svelte/store'
  import type { FloorplanData, FloorplanRoomItem } from '../../typings/floorplanData'
  import formatFloorplanPoint, { pathD } from '../../utils/formatPosition'

  export let room: FloorplanRoomItem
  export let floorplanData: FloorplanData
  export let hoveredRoom: Writable<FloorplanRoomItem | undefined>

  function onMouseEnter() {
    hoveredRoom.set(room)
  }

  function onMouseLeave() {
    hoveredRoom.set(undefined)
  }

  const { bounding } = floorplanData
  const _pathD = pathD(room.path, {
    needZ: true,
    format: (vector) => formatFloorplanPoint(vector, bounding),
  })
</script>

<path d={_pathD} fill={`#fff`} on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave} />

<style>
  path {
    opacity: 0;
  }
  path:hover {
    opacity: 0.1;
  }
</style>
