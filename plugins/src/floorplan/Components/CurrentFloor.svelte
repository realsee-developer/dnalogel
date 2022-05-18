<script lang="ts">
  import BaseImage from './BaseImage.svelte'
  import RoomLabels from './RoomLabels/RoomLabels.svelte'
  import RuleLabels from './RuleLabels/RuleLabels.svelte'
  import RoomMaterial from './RoomMaterials/RoomMaterial.svelte'
  import RoomHighlight from './RoomHighlight/RoomHighlight.svelte'
  import type { FloorplanData, FloorplanRoomItem } from '../typings/floorplanData'

  export let isCurrent: boolean
  export let floorIndex: number
  export let hoverEnable: boolean
  export let roomLabelsEnable: boolean
  export let ruleLabelsEnable: boolean
  export let floorplanData: FloorplanData
  export let getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null)
</script>

<div class="{`floorplan-plugin__floor${isCurrent ? ' floorplan-plugin__floor--is-current' : ''}`}">
  <RoomMaterial {...{ floorIndex, floorplanData }} />
  {#if hoverEnable}
    <RoomHighlight {...{ floorIndex, floorplanData }} />
  {/if}
  <BaseImage {...{ floorplanData, floorIndex }} />
  {#if roomLabelsEnable}
    <RoomLabels {...{ floorplanData, floorIndex, getLabelElement }} />
  {/if}
  {#if ruleLabelsEnable}
    <RuleLabels {...{ floorplanData, floorIndex }} />
  {/if}
</div>

<style>
  .floorplan-plugin__floor {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
  }
  .floorplan-plugin__floor--is-current {
    opacity: 1;
    pointer-events: auto;
  }
</style>
