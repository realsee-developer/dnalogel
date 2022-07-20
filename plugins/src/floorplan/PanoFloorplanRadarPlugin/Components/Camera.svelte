<script lang="ts">
  import type { Five, Pose } from '@realsee/five'
  import type { FloorplanData } from '../../typings/floorplanData'
  import { onMount } from 'svelte'
  import { CAMERA_IMAGE } from '../../Assets/camera'
  import throttle from '../../../shared-utils/throttle'

  export let five: Five
  export let pxmm: number
  export let floorplanData: FloorplanData
  export let cameraImageUrl: undefined | string

  let panoIndex = five.getCurrentState().panoIndex
  let longitude = five.getCurrentState().longitude

  // 初始状态，不能等 mount 之后再计算，那样第一次 camera 展示的时候也会有动画
  $: positionTransform = getCameraPositionTransform(floorplanData, panoIndex)
  $: rotateTransform = getCameraRotateTransform(longitude)

  /** 获取相机在当前 Five 状态下的位移 */
  function getCameraPositionTransform(floorplanData: FloorplanData, panoIndex: number) {
    const bounding = floorplanData.bounding
    const floorplanObserver = floorplanData.observers[panoIndex]
    if (!floorplanObserver) return ''
    const clientWidth = (bounding.max.x - bounding.min.x) * pxmm
    const clientHeight = (bounding.max.y - bounding.min.y) * pxmm
    const left = Math.floor(floorplanObserver.positionInImage.x * clientWidth)
    const top = Math.floor(floorplanObserver.positionInImage.y * clientHeight)
    return `translate(${left}px, ${top}px)`
  }

  /** 获取相机在当前 Five 状态下的旋转 */
  function getCameraRotateTransform(longitude: number) {
    // 为什么要加 45 ==> 因为 UI 给的图初始角度是 -45
    const rotate = Math.floor((longitude / Math.PI) * 180) * -1 + 45
    return `rotate(${rotate}deg)`
  }

  function onFivePanoWillArrive(_panoIndex: number) {
    panoIndex = _panoIndex
  }

  const onFiveCameraDirectionUpdate = throttle((pose: Pick<Pose, 'longitude' | 'latitude'>) => {
    longitude = pose.longitude
  }, 1000 / 60)

  onMount(() => {
    five.on('panoWillArrive', onFivePanoWillArrive)
    five.on('cameraDirectionUpdate', onFiveCameraDirectionUpdate)

    return function dispose() {
      five.off('panoWillArrive', onFivePanoWillArrive)
      five.off('cameraDirectionUpdate', onFiveCameraDirectionUpdate)
    }
  })
</script>

<div class="plugin-radar__camera-wrapper">
  <div class="plugin-radar__camera-position" style:transform={positionTransform}>
    <div
      class="plugin-radar__camera-rotate"
      style:transform={rotateTransform}
      style="background-image: url({cameraImageUrl || CAMERA_IMAGE})"
    />
  </div>
</div>

<style>
  .plugin-radar__camera-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
  }
  .plugin-radar__camera-position {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    transform: none;
    pointer-events: none;
    transition: transform 1s linear;
  }
  .plugin-radar__camera-rotate {
    position: absolute;
    left: -15px;
    top: -15px;
    width: 17px;
    height: 17px;
    transform-origin: 15px 15px;
    transform: rotate(45deg);
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>
