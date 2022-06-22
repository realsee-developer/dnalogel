<script lang="ts">
  import type { FloorplanData, FloorplanRoomItem } from '../typings/floorplanData'
  import { linear } from 'svelte/easing'
  import { fade } from 'svelte/transition'
  import Camera from './Camera.svelte'
  import Compass from './Compass.svelte'
  import CurrentFloor from './CurrentFloor.svelte'

  export let duration = 0
  export let visible: boolean
  export let northDesc: string
  export let panoIndex: number
  export let floorIndex: number
  export let hoverEnable: boolean
  export let compassEnable: boolean
  export let roomLabelsEnable: boolean
  export let ruleLabelsEnable: boolean
  export let floorplanData: FloorplanData
  export let lastPanoramaLongitude: number
  export let cameraImageUrl: undefined | string
  export let getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null)
</script>

{#if visible}
  <div class="floorplan-main" in:fade="{{ duration, easing: linear }}">
    {#each floorplanData.floorDatas as floorData}
      <CurrentFloor
        {...{
          hoverEnable,
          floorplanData,
          getLabelElement,
          roomLabelsEnable,
          ruleLabelsEnable,
        }}
        floorIndex="{floorData.floorIndex}"
        isCurrent="{floorData.floorIndex === floorIndex}"
      />
    {/each}
    <Camera {...{ panoIndex, floorplanData, lastPanoramaLongitude, cameraImageUrl }} />
    {#if compassEnable}
      <Compass floorplanData="{floorplanData}" northDesc="{northDesc}" />
    {/if}
  </div>
{/if}

<style>
  .floorplan-main {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
