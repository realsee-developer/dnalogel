<script lang="ts">
  import type { RuleLabelsKey, RuleLabelsValue, FloorplanBounding } from '../../typings/floorplanData'

  export let type: RuleLabelsKey
  export let data: RuleLabelsValue
  export let bounding: FloorplanBounding

  const isRow = type === 'top' || type === 'bottom'
  const padding = 1000
  const exteriorWallOffset = 180

  const contentWidth = bounding.max.x - bounding.min.x - (padding - exteriorWallOffset) * 2
  const contentHeight = bounding.max.y - bounding.min.y - (padding - exteriorWallOffset) * 2

  // 计算每一段墙的长度，以及墙两侧点距离标尺初始点的像素值
  const rulerPoints = data
    .map(([start, end]) => (isRow ? [start.x, end.x] : [start.y, end.y]))
    .flat()
    .sort()
    .filter((x, index, arr) => {
      // 筛除重复数据
      if (index === 0) return true
      return x !== arr[index - 1]
    })
  const rulerLabels = rulerPoints.map((num) => {
    const left = isRow ? (num - bounding.min.x - padding + exteriorWallOffset) / contentWidth : 0
    const bottom = !isRow ? (num - bounding.min.y - padding + exteriorWallOffset) / contentHeight : 0
    return { left, bottom }
  })
  rulerLabels.unshift({ left: 0, bottom: 0 })
  rulerLabels.push(isRow ? { left: 1, bottom: 0 } : { left: 0, bottom: 1 })
  const length = rulerPoints[rulerPoints.length - 1] - rulerPoints[0]
  const rulerTexts = rulerPoints
    .map((num, index, arr) => {
      const distance = index === 0 ? 0 : num - arr[index - 1]
      const positionNum = index === 0 ? 0 : (num + arr[index - 1]) / 2
      const left = isRow ? (positionNum - bounding.min.x - padding + exteriorWallOffset) / contentWidth : 0
      const bottom = !isRow ? (positionNum - bounding.min.y - padding + exteriorWallOffset) / contentHeight : 0
      return { left, bottom, distance }
    })
    .filter(({ distance }) => distance / length > 0.1)
</script>

<div
  class="floorplan-plugin__rule-labels floorplan-plugin__rule-labels--{type}"
  class:is-row={isRow}
  style:width={isRow ? '100%' : 1 / 16 + 'rem'}
  style:height={!isRow ? '100%' : 1 / 16 + 'rem'}
>
  <div class="floorplan-plugin__rule-line" />
  <div class="floorplan-plugin__rule-scale-wrapper" class:is-row={isRow}>
    {#each rulerLabels as rulerLabel}
      <div
        class="floorplan-plugin__rule-scale"
        style:left={rulerLabel.left * 100 + '%'}
        style:bottom={rulerLabel.bottom * 100 + '%'}
      />
    {/each}
  </div>
  <div class="floorplan-plugin__rule-text-wrapper">
    {#each rulerTexts as textItem, textItemIndex (textItemIndex)}
      <div
        class="floorplan-plugin__rule-text-item"
        style:left={textItem.left * 100 + '%'}
        style:bottom={textItem.bottom * 100 + '%'}
      >
        <div class="floorplan-plugin__rule-text" class:is-row={isRow}>
          {textItem.distance}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .floorplan-plugin__rule-labels {
    position: absolute;
    display: flex;
  }
  .floorplan-plugin__rule-labels--top {
    left: 0;
    top: -1.25rem;
  }
  .floorplan-plugin__rule-labels--bottom {
    left: 0;
    bottom: -1.25rem;
  }
  .floorplan-plugin__rule-labels--left {
    top: 0;
    left: -1.25rem;
  }
  .floorplan-plugin__rule-labels--right {
    top: 0;
    right: -1.25rem;
  }

  .floorplan-plugin__rule-line {
    background: #fff;
    opacity: 0.05;
    width: 100%;
    height: 100%;
  }

  .floorplan-plugin__rule-scale-wrapper {
    position: absolute;
    /* 5px */
    width: 0.3125rem;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .floorplan-plugin__rule-labels.is-row .floorplan-plugin__rule-scale-wrapper {
    width: 100%;
    /* 5px */
    height: 0.3125rem;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .floorplan-plugin__rule-scale {
    position: absolute;
    background: #fff;
    opacity: 0.05;
    width: 100%;
    /* 1px */
    height: 0.0625rem;
  }
  .floorplan-plugin__rule-labels.is-row .floorplan-plugin__rule-scale {
    /* 1px */
    width: 0.0625rem;
    height: 100%;
  }

  .floorplan-plugin__rule-text-wrapper {
    position: absolute;
  }
  .floorplan-plugin__rule-labels--top .floorplan-plugin__rule-text-wrapper {
    width: 100%;
    height: 0;
    /* 10px */
    top: 0.625rem;
  }
  .floorplan-plugin__rule-labels--bottom .floorplan-plugin__rule-text-wrapper {
    width: 100%;
    height: 0;
    /* 10px */
    bottom: 0.625rem;
  }
  .floorplan-plugin__rule-labels--left .floorplan-plugin__rule-text-wrapper {
    width: 0;
    height: 100%;
    /* 10px */
    left: 0.625rem;
  }
  .floorplan-plugin__rule-labels--right .floorplan-plugin__rule-text-wrapper {
    width: 0;
    height: 100%;
    /* 10px */
    right: 0.625rem;
  }
  .floorplan-plugin__rule-text-item {
    width: 0;
    height: 0;
    position: absolute;
    transform: rotate(90deg);
  }
  .floorplan-plugin__rule-labels.is-row .floorplan-plugin__rule-text-item {
    transform: rotate(0);
  }
  .floorplan-plugin__rule-text {
    width: max-content;
    transform: translate(-50%, -50%);
    /* 10px */
    font-size: 0.625rem;
    color: #fff;
    opacity: 0.2;
  }
</style>
