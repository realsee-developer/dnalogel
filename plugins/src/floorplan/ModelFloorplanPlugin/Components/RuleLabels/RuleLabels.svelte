<script lang="ts">
  import RuleItem from './RuleItem.svelte'
  import type { FloorplanData, RuleLabelsKey, RuleLabelsValue } from '../../../typings/floorplanData'

  export let pxmm: number
  export let floorIndex: number
  export let floorplanData: FloorplanData

  $: bounding = floorplanData.bounding
  $: ruleLabelData = floorplanData.floorDatas[floorIndex].rules
  $: ruleLabelDataKeys = Object.keys(ruleLabelData) as RuleLabelsKey[]
  $: ruleLabelArray = ruleLabelDataKeys.map((key) => [key, ruleLabelData[key]] as [RuleLabelsKey, RuleLabelsValue])
</script>

<div class="floorplan-plugin__rulelabels">
  {#each ruleLabelArray as [type, data] (type)}
    <RuleItem {...{ type, data, pxmm, bounding }} />
  {/each}
</div>
