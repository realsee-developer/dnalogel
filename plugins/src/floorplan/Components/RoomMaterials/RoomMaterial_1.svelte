<script lang="ts">
  import type { FloorplanRoomItem } from '../../typings/floorplanData'
  import { pathD } from '../../utils/formatPosition'
  export let path: FloorplanRoomItem['path']
  $: d = pathD(path, { needZ: true })
  const halfWidth = 6
  const width = halfWidth * 2
  const patternPathD = `M0 ${halfWidth} h ${width} M${halfWidth} 0 v ${width}`
</script>

<!-- 瓷砖地板, 偏蓝的格格 -->
<defs>
  <pattern
    id="fpm-room-pattern-0"
    x="0"
    y="0"
    {width}
    height={width}
    patternUnits="userSpaceOnUse"
    patternTransform="scale(50 50)"
  >
    <rect x="0" y="0" {width} height={width} fill="#323747" />
    <path d={patternPathD} stroke="#ffffff" stroke-opacity="0.06" stroke-width="0.5" fill="none" />
  </pattern>
</defs>
<path {d} fill="url(#fpm-room-pattern-0)" />
