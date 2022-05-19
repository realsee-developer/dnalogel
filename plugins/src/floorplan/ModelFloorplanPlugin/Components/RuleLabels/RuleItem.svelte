<script lang="ts">
  import { notNil } from '../../../../shared-utils/isNil'
  import type { RuleLabelsKey, RuleLabelsValue, FloorplanBounding } from '../../../typings/floorplanData'

  export let pxmm: number
  export let type: RuleLabelsKey
  export let data: RuleLabelsValue
  export let bounding: FloorplanBounding

  const padding = 1000
  const isTop = type === 'top'
  const isBottom = type === 'bottom'
  const isLeft = type === 'left'
  const isRight = type === 'right'
  const isRow = isTop || isBottom

  // 计算每一段墙的长度，以及墙两侧点距离标尺初始点的像素值
  const positionArray = data
    .map(([start, end]) => (isRow ? [start.x, end.x] : [start.y, end.y]))
    .flat()
    .sort()
    .filter((x, index, arr) => {
      if (index === 0) return true
      return x !== arr[index - 1]
    })
  const minPosition = positionArray[0]
  const maxPosition = positionArray.slice(-1)[0]
  const length = maxPosition - minPosition
  const minBounding = isRow ? bounding.min.x : bounding.min.y
  const lengthPx = length * pxmm
  const positionPxArray = positionArray.map((x) => ((x - minPosition) / length) * lengthPx)
  // 在主要方向上的偏移量，上下的标尺是距离图片左侧的长度，左右的标尺是距离图片底部的距离
  const translateMain = (minPosition - minBounding) * pxmm
  // 在次要方向的偏移量，希望达到的效果是标尺轴距离户型图边界 27px，但是图片自身是带有 1000mm 的边界，所以在计算时需要减去这个边界
  const translateSecond = 27 - padding * pxmm
  const translate = (() => {
    if (isTop) return `translate(${translateMain}px, ${-translateSecond}px)`
    if (isBottom) return `translate(${translateMain}px, ${translateSecond}px)`
    if (isLeft) return `translate(${-translateSecond}px, ${-translateMain}px)`
    if (isRight) return `translate(${translateSecond}px, ${-translateMain - lengthPx}px)`
  })()
  const rotate = isRow ? 'rotate(0)' : 'rotate(-90deg)'
  const transform = `${translate} ${rotate}`
  const transformOrigin = `${isRight ? 'right' : 'left'} ${isTop ? 'top' : 'bottom'}`
  const width = lengthPx + 'px'
  // 把点位的户型图坐标转成距离起始位置的像素值
  const textArray = positionArray
    .map((position, index, array) => {
      if (index === 0) return null
      const distance = position - array[index - 1]
      const positionPx = ((array[index - 1] + distance / 2 - minPosition) / length) * lengthPx
      return { distance, positionPx }
    })
    .filter(notNil)
    .filter((item) => item.distance / length > 0.12)
</script>

<div
  class="floorplan-plugin__rule-labels floorplan-plugin__rule-labels-{type}"
  style:width
  style:transform
  style:transform-origin="{transformOrigin}"
>
  <div class="floorplan-plugin__rule-line"></div>
  {#each positionPxArray as position, positionIndex (positionIndex)}
    <div class="floorplan-plugin__rule-scale" style:left="{position}px"></div>
  {/each}
  {#each textArray as textItem, textItemIndex (textItemIndex)}
    <div
      class="floorplan-plugin__text-wrapper"
      class:floorplan-plugin__text-wrapper--is-left-or-top="{isLeft || isTop}"
      class:floorplan-plugin__text-wrapper-is-right-or-bottom="{isRight || isBottom}"
      style:left="{textItem.positionPx}px"
    >
      <span class="floorplan-plugin__rule-text" class:is-row="{isRow}">
        {textItem.distance}
      </span>
    </div>
  {/each}
</div>

<style>
  .floorplan-plugin__rule-labels {
    position: absolute;
    height: 5px;
    display: flex;
    align-items: center;
  }
  .floorplan-plugin__rule-labels-top {
    left: 0;
    top: 0;
  }
  .floorplan-plugin__rule-labels-bottom {
    left: 0;
    bottom: 0;
  }
  .floorplan-plugin__rule-labels-left {
    bottom: 0;
    left: 0;
  }
  .floorplan-plugin__rule-labels-right {
    bottom: 0;
    right: 0;
  }

  .floorplan-plugin__rule-line {
    background: #fff;
    opacity: 0.05;
    width: 100%;
    height: 1px;
  }

  .floorplan-plugin__rule-scale {
    position: absolute;
    background: #fff;
    opacity: 0.05;
    transform-origin: center;
    width: 1px;
    height: 5px;
  }

  .floorplan-plugin__text-wrapper {
    width: 0;
    height: 0;
    position: absolute;
  }
  .floorplan-plugin__text-wrapper.floorplan-plugin__text-wrapper--is-left-or-top {
    top: 10px;
  }
  .floorplan-plugin__text-wrapper.floorplan-plugin__text-wrapper-is-right-or-bottom {
    bottom: 10px;
  }

  .floorplan-plugin__rule-text {
    position: absolute;
    width: max-content;
    display: block;
    transform: translate(-50%, -50%) rotate(180deg);
    font-size: 10px;
    color: #fff;
    opacity: 0.2;
  }

  .floorplan-plugin__rule-text.is-row {
    transform: translate(-50%, -50%);
  }
</style>
