<script lang="ts">
  import Camera from './Camera.svelte'
  import Compass from './Compass.svelte'
  import CurrentFloor from './CurrentFloor/CurrentFloor.svelte'
  import type { Five } from '@realsee/five'
  import { linear } from 'svelte/easing'
  import { fade } from 'svelte/transition'
  import type { FloorplanData, FloorplanRoomItem } from '../../typings/floorplanData'

  export let northDesc: string
  export let pxmm: number
  export let five: Five
  export let duration = 0
  export let visible: boolean
  export let panoIndex: number
  export let floorIndex: number
  export let hoverEnable: boolean
  export let compassEnable: boolean
  export let roomLabelsEnable: boolean
  export let ruleLabelsEnable: boolean
  export let floorplanData: FloorplanData
  export let lastPanoramaLongitude: number
  export let cameraImageUrl: undefined | string
  export let onRoomHeightClick: undefined | ((e: MouseEvent) => boolean | undefined)
  export let getLabelElement: undefined | ((room: FloorplanRoomItem) => Element | null)
</script>

{#if visible}
  <div class="floorplan-main" in:fade="{{ duration, easing: linear }}">
    <CurrentFloor
      {...{
        five,
        pxmm,
        floorIndex,
        hoverEnable,
        floorplanData,
        getLabelElement,
        roomLabelsEnable,
        ruleLabelsEnable,
        onRoomHeightClick,
      }}
    />
    <Camera {...{ panoIndex, floorplanData, lastPanoramaLongitude, cameraImageUrl }} />
    {#if compassEnable}
      <Compass floorplanData="{floorplanData}" northDesc="{northDesc}"/>
    {/if}
  </div>
{/if}

<style>
  .floorplan-main {
    width: 100%;
    height: 100%;
  }
</style>
