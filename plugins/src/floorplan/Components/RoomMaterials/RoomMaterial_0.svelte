<script lang="ts">
  import type { FloorplanRoomItem } from '../../typings/floorplanData'
  import { pathD } from '../../utils/formatPosition'

  export let path: FloorplanRoomItem['path']

  $: d = pathD(path, { needZ: true })
</script>

<!-- 纯色背景 -->
<path {d} fill="#2F313A" />
