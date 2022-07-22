<script lang="ts">
  import type { RulerItemProp } from './typings'

  export let rulerItemProp: RulerItemProp
  let _visible = true
  let labelWidth

  $: {
    if (
      labelWidth >= rulerItemProp.width ||
      labelWidth / 2 >= (rulerItemProp.labelOffset / 100) * rulerItemProp.width ||
      labelWidth / 2 >= (1 - rulerItemProp.labelOffset / 100) * rulerItemProp.width
    ) {
      _visible = false
    } else {
      _visible = true
    }
  }

  let EM_DOTTED_BG = `data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQiIHdpZHRoPSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGZpbHRlciBpZD0icHJlZml4X19hIiBoZWlnaHQ9IjQwMCUiIHdpZHRoPSIxMzcuNCUiIHg9Ii0xOC43JSIgeT0iLTE1MCUiPjxmZU1vcnBob2xvZ3kgaW49IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iZGlsYXRlIiByYWRpdXM9Ii41IiByZXN1bHQ9InNoYWRvd1NwcmVhZE91dGVyMSIvPjxmZU9mZnNldCBpbj0ic2hhZG93U3ByZWFkT3V0ZXIxIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZU1vcnBob2xvZ3kgaW49IlNvdXJjZUFscGhhIiByYWRpdXM9IjEiIHJlc3VsdD0ic2hhZG93SW5uZXIiLz48ZmVPZmZzZXQgaW49InNoYWRvd0lubmVyIiByZXN1bHQ9InNoYWRvd0lubmVyIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIGluMj0ic2hhZG93SW5uZXIiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMiAwIi8+PC9maWx0ZXI+PHBhdGggaWQ9InByZWZpeF9fYiIgZD0iTS44ODkgMkgxMS41OCIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNwcmVmaXhfX2EpIiB4bGluazpocmVmPSIjcHJlZml4X19iIi8+PHVzZSBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuNCIgeGxpbms6aHJlZj0iI3ByZWZpeF9fYiIvPjwvZz48L3N2Zz4=`
  $: vars = `--background-image: url(${EM_DOTTED_BG})`;
</script>

<div
  class="PanoRulerPlugin-rule-line"
  style:width="{rulerItemProp.width}px"
  style:left="{rulerItemProp.left}px"
  style:top="{rulerItemProp.top}px"
  style:transform="rotate({rulerItemProp.rotateDeg}deg)"
  style:display="{rulerItemProp.visible && _visible ? 'block' : 'none'}"
>
  {#if rulerItemProp.children.length === 0}
    <em class="{rulerItemProp.state ? 'em-solid' : 'em-dotted'}" style="{vars}"></em>
  {:else}
    <div class="rule-mixed-line">
      {#each rulerItemProp.children as child}
        <div style:width="{child.width}px" class="{child.state ? 'em-solid' : 'em-dotted'}" style="{vars}"></div>
      {/each}
    </div>
  {/if}
  <div
    class="PanoRulerPlugin-rule-label"
    style:left="{rulerItemProp.labelOffset}%"
  >
    <div class="PanoRulerPlugin-rule-label-name" bind:offsetWidth="{labelWidth}">
      {rulerItemProp.labelElement}
    </div>
  </div>
</div>

<style>
  .PanoRulerPlugin-rule-line {
    position: absolute;
    transform-origin: left 0.0625rem;
    width: 0;
    height: 0.125rem;
    pointer-events: none;
  }

  .PanoRulerPlugin-rule-line::after {
    content: '';
    position: absolute;
    left: -0.125rem;
    top: -0.1rem;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background: #fff;
    z-index: 1;
    animation: viewport-rule-point 0.1s 1s;
    animation-fill-mode: both;
  }

  .PanoRulerPlugin-rule-line::before {
    content: '';
    position: absolute;
    right: -0.125rem;
    top: -0.1rem;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background: #fff;
    z-index: 1;
    animation: viewport-rule-point 0.1s 1.5s;
    animation-fill-mode: both;
  }

  .PanoRulerPlugin-rule-line em {
    display: block;
    height: 0.0625rem;
    animation: viewport-rule-line 0.5s ease 1s;
    animation-fill-mode: both;
    box-shadow: 0 0 0.25rem rgb(0 0 0 / 40%);
    position: relative;
  }

  .rule-mixed-line {
    display: flex;
    height: 0.0625rem;
    animation: viewport-rule-line 0.5s ease 1s;
    animation-fill-mode: both;
    align-items: center;
  }

  .em-solid {
    height: 100%;
    background: #ffffff;
  }
  .em-dotted {
    height: 0.125rem;
    background: var(--background-image);
    background-position: center;
    background-repeat: repeat;
  }

  .PanoRulerPlugin-rule-label {
    position: absolute;
    width: 0;
    height: 0;
    top: 0.0625rem;
    pointer-events: none;
  }

  .PanoRulerPlugin-rule-label-name {
    position: absolute;
    padding: 0.1875rem 0.375rem;
    background: rgba(195, 195, 195, 0.3);
    backdrop-filter: blur(0.25rem);
    -webkit-backdrop-filter: blur(0.25rem);
    border-radius: 6.25rem;
    border: 0.0625rem solid rgba(255, 255, 255, 0.6);
    white-space: nowrap;
    overflow: hidden;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1;
    -webkit-animation: viewport-rule-label 0.25s ease 1s;
    animation: viewport-rule-label 0.25s ease 1s;
    animation-fill-mode: both;
    box-shadow: inset 0 0 0.625rem 0 rgba(255, 255, 255, 0.3);
  }

  @keyframes viewport-rule-line {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes viewport-rule-label {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scaleX(1);
    }
  }

  @keyframes viewport-rule-point {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
</style>
