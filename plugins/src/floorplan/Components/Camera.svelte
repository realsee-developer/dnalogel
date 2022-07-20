<script lang="ts">
  import type { FloorplanData } from '../typings/floorplanData'
  import { CAMERA_IMAGE } from '../Assets/camera'
  import rad2Deg from '../../shared-utils/math/rad2Deg'

  export let panoIndex: number
  export let floorplanData: FloorplanData
  export let lastPanoramaLongitude: number
  export let cameraImageUrl: undefined | string

  const { observers } = floorplanData
  const observer = observers[panoIndex]
  const leftRatio = observer.positionInImage.x
  const topRatio = observer.positionInImage.y
  const positionLeft = leftRatio * 100 + '%'
  const positionTop = topRatio * 100 + '%'

  const rotate = -rad2Deg(lastPanoramaLongitude) + 45
  // TODO: 统一这里的判断条件，目前写了多处
  const bodyWidth = document.body.clientWidth
  const bodyHeight = document.body.clientHeight
  const size = bodyWidth < 500 || bodyHeight < 500 ? 17 : 37
  const domSizeStyle = `${size / 16}rem`
</script>

<div class="floorplan__camera-position" style:left={positionLeft} style:top={positionTop}>
  <div
    class="floorplan__camera-rotate"
    style:width={domSizeStyle}
    style:height={domSizeStyle}
    style:left={'-' + domSizeStyle}
    style:top={'-' + domSizeStyle}
    style:transform={`rotate(${rotate}deg)`}
    style:transform-origin={`${domSizeStyle} ${domSizeStyle}`}
    style="background-image: {`url(${cameraImageUrl || CAMERA_IMAGE})`}"
  />
</div>

<style lang="postcss">
  .floorplan__camera-position {
    position: absolute;
    width: 0;
    height: 0;
  }

  .floorplan__camera-rotate {
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>
