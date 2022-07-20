<script lang="ts">
  import type { Five } from '@realsee/five'
  import type { FloorplanData, FloorplanExtraObject } from '../../typings/floorplanData'
  import { onMount } from 'svelte'
  import Camera from './Camera.svelte'
  import CurrentFloor from './CurrentFloor/CurrentFloor.svelte'

  export let five: Five
  export let visible: boolean
  export let hoverEnable: boolean
  export let floorplanData: FloorplanData
  export let cameraImageUrl: undefined | string
  export let extraObjects: FloorplanExtraObject[] = []

  let pxmm = 0
  let floorIndex = 0
  let clientWidth = 0
  let clientHeight = 0
  let contentWidth = 0
  let contentHeight = 0

  $: {
    const size = Math.min(clientWidth, clientHeight)
    const { max, min } = floorplanData.bounding
    const boundingWidth = max.x - min.x
    const boundingHeight = max.y - min.y
    const contentSize = (function getSize() {
      if (boundingWidth > boundingHeight) return [size, (size / boundingWidth) * boundingHeight]
      return [(size / boundingHeight) * boundingWidth, size]
    })()
    contentWidth = contentSize[0]
    contentHeight = contentSize[1]
    pxmm = contentWidth / boundingWidth
  }

  function handlePanoArrived(panoIndex: number) {
    floorIndex = five.work.observers[panoIndex].floorIndex
  }

  onMount(() => {
    five.on('panoArrived', handlePanoArrived)
    return () => {
      five.off('panoArrived', handlePanoArrived)
    }
  })
</script>

{#if visible}
  <div class="plugin-floorplan-radar" bind:clientWidth bind:clientHeight>
    {#if clientWidth !== 0}
      <div class="plugin-floorplan-radar-container" style:width="{contentWidth}px" style:height="{contentHeight}px">
        <CurrentFloor {...{ five, pxmm, floorIndex, floorplanData, hoverEnable, extraObjects }} />
        <Camera {...{ pxmm, five, floorplanData, cameraImageUrl }} />
      </div>
    {/if}
  </div>
{/if}

<style>
  .plugin-floorplan-radar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .plugin-floorplan-radar-container {
    position: relative;
  }
</style>
