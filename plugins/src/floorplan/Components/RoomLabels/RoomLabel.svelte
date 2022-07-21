<script lang="ts">
  import type { Writable } from 'svelte/store'
  import type { FloorplanRoomItem } from '../../typings/floorplanData'
  import { onMount } from 'svelte'

  export let pxmm: number
  export let room: FloorplanRoomItem
  export let hoveredRoom: Writable<FloorplanRoomItem | undefined>
  export let getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null)
  export let adaptiveRoomLabelVisibleEnable: boolean

  // https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html
  // https://github.com/substack/point-in-polygon
  function isPointInPolygon(point: number[], polygon: number[][]) {
    const x = point[0]
    const y = point[1]
    let inside = false
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0]
      const yi = polygon[i][1]
      const xj = polygon[j][0]
      const yj = polygon[j][1]

      const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
      if (intersect) inside = !inside
    }
    return inside
  }

  function isLabelInRoomCurry(room: FloorplanRoomItem, labelElementSize: { width: number; height: number }) {
    if (labelElementSize.width === 0 || labelElementSize.height === 0) return () => false
    const polygon = room.path.map(({ x, y }) => [x, y])
    const labelPosition = room.roomLabel.position
    const { x, y } = labelPosition
    const { width, height } = labelElementSize
    const halfWidth = width / 2
    const halfHeight = height / 2

    return function isLabelInRoom(pxmm: number) {
      const clientX = x * pxmm
      const clientY = y * pxmm
      const clientPolygon = polygon.map(([x, y]) => [x * pxmm, y * pxmm])
      // const
      /** 围成 labelRect 的四个点
       * 1----0
       * |    |
       * 2----3
       */
      const labelRectClientPoints = [
        [clientX + halfWidth, clientY - halfHeight],
        [clientX - halfWidth, clientY - halfHeight],
        [clientX - halfWidth, clientY + halfHeight],
        [clientX + halfWidth, clientY + halfHeight],
      ]
      return labelRectClientPoints.every((point) => isPointInPolygon(point, clientPolygon))
    }
  }

  // ========== 获取设备宽高像素 ==========
  // TODO: 统一这里的判断条件，目前写了多处
  const bodyWidth = document.body.clientWidth
  const bodyHeight = document.body.clientHeight
  const roomSizeDes = room.size ? (room.size / 1000000).toFixed(1) + '㎡' : ''
  // ====================================

  const roomLabel = room.roomLabel
  const left = roomLabel.positionInImage.x * 100 + '%'
  const top = roomLabel.positionInImage.y * 100 + '%'
  // 屏幕宽或高小于 500px 时，用 10px 字体，否则用 14px
  const fontSize = (bodyWidth < 500 || bodyHeight < 500 ? 10 : 14) / 16 + 'rem'

  let isHoverd = false
  let labelElement: HTMLDivElement
  let labelElementSize: { width: number; height: number }

  $: isLabelInRoom = labelElementSize ? isLabelInRoomCurry(room, labelElementSize) : undefined
  $: userConfigElement = getLabelElement?.(room)
  $: labelVisible = adaptiveRoomLabelVisibleEnable ? (isHoverd ? true : !!isLabelInRoom?.(pxmm)) : true

  hoveredRoom.subscribe(function onHoverdRoomUpdate(_room) {
    isHoverd = !!_room && _room.id === room.id
  })

  onMount(() => {
    // Label 能不能展示只跟房间大小有关
    // 计算 LabelElement 宽高
    const labelDomRect = labelElement?.getClientRects()[0]
    labelElementSize = { width: labelDomRect.width, height: labelDomRect.height }
  })
</script>

<div
  bind:this={labelElement}
  class="floorplan-plugin__room-label-item"
  style:left
  style:top
  style:font-size={fontSize}
  style:opacity={labelVisible ? '1' : '0'}
>
  <!-- 用户没有配置自定义 DOM 时，使用默认 DOM -->
  {#if getLabelElement === undefined}
    <span class="floorplan-plugin__room-name">
      {room.name}
    </span>
    <span class="floorplan-plugin__room-size">{roomSizeDes}</span>
    <!-- 用户配置自定义 DOM 时，使用用户 DOM -->
  {:else if userConfigElement}
    <!-- TODO: @html 是一个很不好的语法，但是目前没有好的方式去配置 User DOM -->
    <!-- TODO: 看一下能不能改成在 reactive segment 里动态插入 DOM -->
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html userConfigElement.outerHTML}
  {/if}
</div>

<style>
  .floorplan-plugin__room-label-item {
    position: absolute;
    display: flex;
    flex-flow: column;
    align-items: center;
    line-height: 1;
    color: #fff;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    will-change: opacity;
    transition: opacity 300ms;
  }
  .floorplan-plugin__room-size {
    opacity: 0.45;
  }
</style>
