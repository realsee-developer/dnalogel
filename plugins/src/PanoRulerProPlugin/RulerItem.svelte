<script lang="ts">
  import type { RulerItemProp } from './typings'

  export let rulerItemProp: RulerItemProp
  let _visible = true
  let labelRotateDeg = Math.abs(rulerItemProp.rotateDeg) > 90 ? 180 : 0
</script>

<div
  class="PanoRulerPlugin-rule-line"
  style="
  width: {rulerItemProp.width}px,
  left: {rulerItemProp.left}px,
  top: {rulerItemProp.top}px,
  transform: rotate({rulerItemProp.rotateDeg}deg),
  display: {rulerItemProp.visible && _visible ? 'block' : 'none'},
"
>
  {#if rulerItemProp.children.length === 0}
    <em class="{rulerItemProp.state ? 'em-solid' : 'em-dotted'}"></em>
  {:else}
    <div class="rule-mixed-line">
      {#each rulerItemProp.children as child}
        <div style="width: {child.width}px" class="{child.state ? 'em-solid' : 'em-dotted'}"></div>
      {/each}
    </div>
  {/if}
  <div
    class="PanoRulerPlugin-rule-label"
    style=" left: {rulerItemProp.labelOffset}%, transform: rotate({labelRotateDeg}deg)"
  >
    <div class="PanoRulerPlugin-rule-label-name">
      {rulerItemProp.labelElement}
    </div>
  </div>
</div>

<style>
  .rulerPlugin-container .PanoRulerPlugin-rule-line {
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
  
  .rulerPlugin-container .rule-mixed-line{
    display: flex;
    height: 0.0625rem;
    animation: viewport-rule-line 0.5s ease 1s;
    animation-fill-mode: both;
    align-items: center;
  }
  
  .rulerPlugin-container .em-solid {
    height: 100%;
    background: #FFFFFF;
  }
  .rulerPlugin-container .em-dotted {
    height: 0.125rem;
    background: url('//vrlab-static.ljcdn.com/release/web/dotted_line.690c9c36.svg');
    background-position: center;
    background-repeat: repeat;
  }
  
  .rulerPlugin-container .PanoRulerPlugin-rule-label {
    position: absolute;
    width: 0;
    height: 0;
    top: 0.0625rem;
    pointer-events: none;
  }
  
  .rulerPlugin-container .PanoRulerPlugin-rule-label-name {
    position: absolute;
    padding: 0.1875rem 0.375rem;
    background: rgba(195,195,195,0.30);
    backdrop-filter: blur(0.25rem);
    -webkit-backdrop-filter: blur(0.25rem);
    border-radius: 6.25rem;
    border: 0.0625rem solid rgba(255,255,255,0.6);
    white-space: nowrap;
    overflow: hidden;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1;
    -webkit-animation: viewport-rule-label 0.25s ease 1s;
    animation: viewport-rule-label 0.25s ease 1s;
    animation-fill-mode: both;
    box-shadow: inset 0 0 0.625rem 0 rgba(255,255,255,0.30);
  }
  
  @keyframes viewport-rule-line {
    0% { width: 0% }
    100% { width: 100% }
  }
  
  @keyframes viewport-rule-label {
    0% { opacity: 0; transform: scaleX(0); }
    100% { opacity: 1; transform: translate(-50%, -50%) scaleX(1); }
  }
  
  @keyframes viewport-rule-point {
    0% { transform: scaleX(0); }
    100% { transform: scaleX(1); }
  }
</style>
