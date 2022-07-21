<script lang="ts">
  import type { FloorplanData } from '../typings/floorplanData'
  import NormalImage from './Normalmage.svelte'
  import SvgImage from './SvgImage.svelte'

  export let floorIndex: number
  export let floorplanData: FloorplanData
  $: imageData = floorplanData.outlines[floorIndex]
  $: svgContent = floorplanData.outlines?.[floorIndex]?.svgContent
</script>

<div class="floorplan-plugin__base-image">
  {#if svgContent}
    <SvgImage content={svgContent} />
  {:else if imageData}
    <NormalImage url={imageData.url} />
  {/if}
</div>

<style>
  .floorplan-plugin__base-image {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
