<script lang="ts">
  import type { FloorplanRoomItem } from '../../typings/floorplanData'
  import { pathD } from '../../utils/formatPosition'

  export let path: FloorplanRoomItem['path']

  $: d = pathD(path, { needZ: true })
</script>

<!-- 木地板，偏灰的格格 -->
<defs>
  <pattern
    id="room-material-pattern-1"
    x="0"
    y="0"
    width="12"
    height="50"
    patternUnits="userSpaceOnUse"
    patternTransform="scale(50 50)"
  >
    <rect x="0" y="0" width="6" height="50" fill="none" stroke="#4B4B57" stroke-width="0.5" />
  </pattern>
  <pattern
    id="room-material-pattern-2"
    x="6"
    y="25"
    width="12"
    height="50"
    patternUnits="userSpaceOnUse"
    patternTransform="scale(50 50)"
  >
    <rect x="0" y="0" width="6" height="50" fill="none" stroke="#4B4B57" stroke-width="0.5" />
  </pattern>
</defs>
<path {d} fill="#43434D" />
<path {d} fill="url(#room-material-pattern-1)" />
<path {d} fill="url(#room-material-pattern-2)" />
