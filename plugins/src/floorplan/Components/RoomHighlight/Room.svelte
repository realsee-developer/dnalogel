<script lang="ts">
  import type { FloorplanData, FloorplanRoomItem } from '../../typings/floorplanData'
  import formatFloorplanPoint, { pathD } from '../../utils/formatPosition'

  export let room: FloorplanRoomItem
  export let floorplanData: FloorplanData

  const { bounding } = floorplanData
  const _pathD = pathD(room.path, {
    needZ: true,
    format: (vector) => formatFloorplanPoint(vector, bounding),
  })
</script>

<path d="{_pathD}" fill="{`#fff`}"></path>

<style>
  path {
    opacity: 0;
  }
  path:hover {
    opacity: 0.1;
  }
</style>
