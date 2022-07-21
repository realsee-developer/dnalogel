<script lang="ts">
  export let content: string

  const svgStyle = `
    <style>
      svg [type='lineGroup'] path {
        fill: #ffffff;
        stroke: #ffffff;
      }
      svg [type='lineItemGroup'] g g g g {
        stroke: #ffffff;
      }
    </style>
  `
</script>

<div class="floorplan-plugin__base-image">
  <!-- TODO: @html 是一个很不好的语法，但是目前没有好的方式去配置 User DOM -->
  <!-- TODO: 看一下能不能改成在 reactive segment 里动态插入 DOM -->
  <!-- eslint-disable svelte/no-at-html-tags -->
  {@html svgStyle}
  {@html content}
</div>

<style>
  .floorplan-plugin__base-image {
    width: 100%;
    height: 100%;
  }
</style>
