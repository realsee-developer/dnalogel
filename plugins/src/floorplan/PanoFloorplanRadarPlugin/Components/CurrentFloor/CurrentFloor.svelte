<script lang="ts">
  import type { Five } from '@realsee/five'
  import type { FloorplanData, FloorplanExtraObject } from '../../../typings/floorplanData'
  import ExtraObjects from './ExtraObjects.svelte'
  import BaseImage from '../../../Components/BaseImage.svelte'
  import Highlight from '../../../Components/RoomHighlight/RoomHighlight.svelte'

  export let five: Five
  export let pxmm: number
  export let floorIndex: number
  export let hoverEnable: boolean
  export let floorplanData: FloorplanData
  export let extraObjects: FloorplanExtraObject[] = []

  $: currentFloorExtraObjects = extraObjects?.filter((object) => object.floorIndex === floorIndex)
  const onRoomHeightClick = undefined
</script>

<BaseImage {...{ floorIndex, floorplanData }} />
<ExtraObjects extraObjects={currentFloorExtraObjects} />
{#if hoverEnable}
  <Highlight {...{ five, pxmm, floorIndex, floorplanData, onRoomHeightClick }} />
{/if}
