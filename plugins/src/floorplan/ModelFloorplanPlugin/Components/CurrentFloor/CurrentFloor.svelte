<script lang="ts">
  import type { Five } from '@realsee/five'
  import RoomLabels from '../RoomLabels/RoomLabels.svelte'
  import RuleLabels from '../RuleLabels/RuleLabels.svelte'
  import BaseImage from '../../../Components/BaseImage.svelte'
  import RoomMaterial from '../../../Components/RoomMaterials/RoomMaterial.svelte'
  import RoomHighlight from '../../../Components/RoomHighlight/RoomHighlight.svelte'
  import type { FloorplanData, FloorplanRoomItem } from '../../../typings/floorplanData'

  export let pxmm: number
  export let five: Five
  export let floorIndex: number
  export let hoverEnable: boolean
  export let roomLabelsEnable: boolean
  export let ruleLabelsEnable: boolean
  export let floorplanData: FloorplanData
  export let onRoomHeightClick: undefined | ((e: MouseEvent) => boolean | undefined)
  export let getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null)
</script>

<div class="floorplan-current-floor">
  <RoomMaterial {...{ floorIndex, floorplanData, pxmm }} />
  {#if hoverEnable}
    <RoomHighlight {...{ five, pxmm, floorIndex, floorplanData, onRoomHeightClick }} />
  {/if}
  <BaseImage {...{ floorplanData, floorIndex }} />
  {#if roomLabelsEnable}
    <RoomLabels {...{ floorplanData, floorIndex, getLabelElement }} />
  {/if}
  {#if ruleLabelsEnable}
    <RuleLabels {...{ floorplanData, floorIndex, pxmm }} />
  {/if}
</div>

<style>
  .floorplan-current-floor {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
