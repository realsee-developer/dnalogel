<script lang="ts">
  import { currentTarget } from '../store'
  import type { PanoSpatialTagPluginOriginElement, PanoSpatialTagPluginId } from '../typings'
  export let origins: Array<PanoSpatialTagPluginOriginElement>

  const handleClick = (id: PanoSpatialTagPluginId): void => {
    currentTarget.update((): string => `${id}-PanoSpatialTagPlugin-${Date.now()}`)
  }
</script>

{#each origins as origin}
  <i 
    class:PanoSpatialTagPlugin__tag-origin={true}
    class:PanoSpatialTagPlugin__tag-origin-destroy={origin.destroying}
    style:top="{origin.top}%"
    style:left="{origin.left}%"
    style:visibility="{origin.front ? 'visible' : 'hidden'}"
    on:click="{() => handleClick(origin.id)}"
  />
{/each}

<style>
  .PanoSpatialTagPlugin__tag-origin {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 .6rem #fff;
    transform: translate(-50%, -50%) scale(1);
    transform-origin: center center;
    animation: PanoSpatialTagPlugin__tag-origin 1.2s forwards;
    pointer-events: auto;
  }

  .PanoSpatialTagPlugin__tag-origin:after {
    content: '';
    position: absolute;
    top: 50%;
    height: 50%;
    width: 2rem;
    height: 2rem;
    transform: translate(-50%, -50%);
  }

  .PanoSpatialTagPlugin__tag-origin-destroy {
    transform: translate(-50%, -50%) scale(0.6);
    animation: PanoSpatialTagPlugin__tag-origin-destroy 1.2s forwards .7s;
  }

  @keyframes PanoSpatialTagPlugin__tag-origin {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    100% { transform: translate(-50%, -50%) scale(0.6); opacity: 1 }
  }

  @keyframes PanoSpatialTagPlugin__tag-origin-destroy {
    0% { transform: translate(-50%, -50%) scale(0.6); opacity: 1; }
    10% { transform: translate(-50%, -50%) scale(1); opacity: 0.9; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
  }
</style>
