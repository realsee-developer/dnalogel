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
			class:wide="{itemLabel.name.length > 6}"
			on:click="{onClick}"
	>{itemLabel.name.length > 6 ? `${itemLabel.name.slice(0, 6)}...` : itemLabel.name}</span>
	<div class="item-label-item__bar"></div>
</div>

<style>
    .item-label-item {
        position: absolute;
        z-index: 0;
        transform: none;
        cursor: pointer;
        pointer-events: none;
        user-select: none;
    }

    .item-label-item__text::before {
        content: '';
        width: 84px;
        height: 44px;
        position: absolute;
        background-color: rgba(0, 0, 0, .4);
        filter: blur(16px);
        z-index: -1;
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
        /*filter: blur(6px);*/
        /*text-shadow: rgba(0, 0, 0, .5);*/
        border-top: 0 solid;
        border-left: 0 solid;
        border-right: 0 solid;
        border-bottom: 1px solid;
        border-image: linear-gradient(to right, rgba(234, 208, 142, 0), rgba(234, 208, 142, 100), rgba(234, 208, 142, 0)) 4.5 1 4.5;
        font-size: 10px;
        font-weight: bold;
        color: #FFEAC0;
    }

    .item-label-item__bar {
        position: absolute;
        top: -44px;
        height: 48px;
        width: 1px;
        background-image: linear-gradient(to bottom, rgba(234, 208, 142, 0), rgba(234, 208, 142, 1));
    }

    .wide {
        /*font-size: 10px;*/
    }
</style>

