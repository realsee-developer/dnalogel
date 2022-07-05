<script lang="ts">
    import { COMPASS_IMAGE } from '../Assets/compass'
    import type { FloorplanData } from '../typings/floorplanData'

    function rad2Deg(rad: number) {
      return (rad / Math.PI) * 180
    }

    export let floorplanData: FloorplanData
    export let northDesc: string

    const northRad = floorplanData.entrance?.northRad
    const rotate = typeof northRad !== 'number' ? 0 : rad2Deg(northRad)
    const compassTransformStyle = `translateX(-50%) translateZ(10px) rotate(${-rotate + 90}deg)`
    const canShowCompass = typeof northRad === 'number'
</script>

{#if canShowCompass}
  <div class="floorplan-plugin__compass" style:transform="{compassTransformStyle}">
    <div class="floorplan-plugin__compass-image" style="background-image: {`url(${COMPASS_IMAGE})`}"></div>
    <span class="floorplan-plugin__compass-text"> {northDesc} </span>
  </div>
{/if}

<style>
    .floorplan-plugin__compass {
        position: absolute;
        left: 50%;
        top: -46px;
        width: 231px;
        height: 41px;
        will-change: opacity;
        transform-origin: center 184px;
    }
    .floorplan-plugin__compass-image {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0.1;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .floorplan-plugin__compass-text {
        position: absolute;
        left: 50%;
        top: 15px;
        transform: translateX(-50%);
        opacity: 0.2;
        font-weight: bold;
        font-size: 10px;
        color: #fff;
    }
</style>
