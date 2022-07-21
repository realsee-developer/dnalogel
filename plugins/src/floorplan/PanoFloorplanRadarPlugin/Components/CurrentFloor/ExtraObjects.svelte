<script lang="ts">
  import type { FloorplanExtraObject } from '../../../typings/floorplanData'

  export let extraObjects: FloorplanExtraObject[] = []
</script>

<div class="plugin-pano-floorplan__extra-objects">
  {#each extraObjects as extraObject (extraObject.id)}
    <div
      class="plugin-pano-floorplan__extra-object-item--position"
      style:top="{extraObject.positionInImage.y * 100}%"
      style:left="{extraObject.positionInImage.x * 100}%"
    >
      <div
        class="plugin-pano-floorplan__extra-object-item"
        style:width="{extraObject.icon.width / 16}rem"
        style:height="{extraObject.icon.height / 16}rem"
        style="background-image: {`url(${extraObject.icon.url})`}"
      />
    </div>
  {/each}
</div>

<style>
  .plugin-pano-floorplan__extra-objects {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .plugin-pano-floorplan__extra-object-item--position {
    position: absolute;
    width: 0;
    height: 0;
  }

  .plugin-pano-floorplan__extra-object-item {
    transform: translate(-50%, -50%);
  }
</style>
