<script lang="ts">
  import RuleItem from './RuleItem.svelte'
  import type { FloorplanData, RuleLabelsKey, RuleLabelsValue } from '../../typings/floorplanData'

  export let floorIndex: number
  export let floorplanData: FloorplanData

  const padding = 1000
  const exteriorWallOffset = 180

  $: bounding = floorplanData.bounding
  $: ruleLabelData = floorplanData.floorDatas[floorIndex].rules
  $: ruleLabelDataKeys = Object.keys(ruleLabelData) as RuleLabelsKey[]
  $: ruleLabelArray = ruleLabelDataKeys.map((key) => [key, ruleLabelData[key]] as [RuleLabelsKey, RuleLabelsValue])
  $: boundingWidth = bounding.max.x - bounding.min.x
  $: boundingHeight = bounding.max.y - bounding.min.y
  $: contentWidth = bounding.max.x - bounding.min.x - (padding - exteriorWallOffset) * 2
  $: contentHeight = bounding.max.y - bounding.min.y - (padding - exteriorWallOffset) * 2
  $: width = (contentWidth / boundingWidth) * 100 + '%'
  $: height = (contentHeight / boundingHeight) * 100 + '%'
</script>

<div class="floorplan-plugin__rule-labels-wrapper" style:width style:height>
  {#each ruleLabelArray as [type, data] (type)}
    <RuleItem {...{ type, data, bounding }} />
  {/each}
</div>

<style>
  .floorplan-plugin__rule-labels-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
</style>
