<script lang="ts">
  import type { FloorplanRoomItem } from '../../typings/floorplanData'

  export let room: FloorplanRoomItem
  export let getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null)

  // TODO: 统一这里的判断条件，目前写了多处
  const bodyWidth = document.body.clientWidth
  const bodyHeight = document.body.clientHeight
  const roomSizeDes = room.size ? (room.size / 1000000).toFixed(1) + '㎡' : ''

  const roomLabel = room.roomLabel
  const left = roomLabel.positionInImage.x * 100 + '%'
  const top = roomLabel.positionInImage.y * 100 + '%'
  const fontSize = (bodyWidth < 500 || bodyHeight < 500 ? 10 : 14) / 16 + 'rem'
  $: userConfigElement = getLabelElement?.(room)
</script>

<div class="floorplan-plugin__room-label-item" style:left style:top style:font-size="{fontSize}">
  <!-- 用户没有配置自定义 DOM 时，使用默认 DOM -->
  {#if getLabelElement === undefined}
    <span class="floorplan-plugin__room-name">
      {room.name}
    </span>
    <span class="floorplan-plugin__room-size">{roomSizeDes}</span>
    <!-- 用户配置自定义 DOM 时，使用用户 DOM -->
  {:else if userConfigElement}
    {@html userConfigElement.outerHTML}
  {/if}
</div>

<style>
  .floorplan-plugin__room-label-item {
    position: absolute;
    display: flex;
    flex-flow: column;
    align-items: center;
    line-height: 15px;
    color: #fff;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
  .floorplan-plugin__room-size {
    opacity: 0.45;
  }
</style>
