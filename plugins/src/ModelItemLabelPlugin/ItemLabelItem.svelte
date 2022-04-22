<script lang="ts">
    import type { ItemLabel } from './typings'
    import type { Subscribe } from "@realsee/five";
    import { PluginEvent } from "./events.type";

    export let itemLabel: ItemLabel
    export let hooks: Subscribe<PluginEvent>

    function onClick() {
        console.log('__onclick___: ', itemLabel)
        hooks.emit('onLabelClick', itemLabel)
    }
</script>

<div
		class="item-label-item"
		style:z-index="{itemLabel.zIndex}"
		style:transform="{itemLabel.transform}"
		style:opacity="{itemLabel.visible ? 1 : 0}"
>
  <span
		  class="item-label-item__text"
		  class:wide="{itemLabel.name.length > 3}"
		  on:click="{onClick}">{itemLabel.name}</span
  >
	<div class="item-label-item__bar"></div>
</div>

<style>
    .item-label-item {
        position: absolute;
        font-size: 8px;
        z-index: 0;
        transform: none;
        cursor: pointer;
        pointer-events: none;
        user-select: none;
    }

    .item-label-item__text {
        position: absolute;
        left: 0;
        top: -64px;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        pointer-events: all;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        white-space: nowrap;
        line-height: 10px;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.70);
        border-top: 0 solid;
        /* 稿子是0.5 */
        border-bottom: 1px solid;
        border-image: linear-gradient(to right, rgba(234, 208, 142, 0), rgba(234, 208, 142, 100), rgba(234, 208, 142, 0)) 4.5 1 4.5;
    }

    .item-label-item__bar {
        position: absolute;
        top: -44px;
        height: 48px;
        width: 1px;
        background-image: linear-gradient(to bottom, rgba(234, 208, 142, 0), rgba(234, 208, 142, 1));
    }

    .wide {
        font-size: 10px;
    }
</style>

