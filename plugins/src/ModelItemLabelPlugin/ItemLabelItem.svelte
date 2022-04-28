<script lang="ts">
    import type { ItemLabel } from './typings'
    import type { Subscribe } from "@realsee/five";
    import { PluginEvent } from "./events.type";
    import classNames from 'classnames'

    export let itemLabel: ItemLabel
    export let hooks: Subscribe<PluginEvent>

    function onClick() {
        console.log('__onclick___: ', itemLabel)
        hooks.emit('onLabelClick', itemLabel)
    }

</script>

<div
		class={classNames("item-label-item", { visible: itemLabel.visible })}
		style:z-index="{itemLabel.zIndex}"
		style:transform="{itemLabel.transform}"
>
	<div
			class="item-label-item__text-wrap"
			style="top: {`-${itemLabel.strokeLength + 26}px`}"
	>
			<span
					class="item-label-item__text"
					on:click="{onClick}"
			>{itemLabel.name.length > 6 ? `${itemLabel.name.slice(0, 6)}...` : itemLabel.name}</span>
	</div>
	<div
			class="item-label-item__bar"
			style="height: {`${itemLabel.strokeLength}px`}">
	</div>
</div>

<style>
    .item-label-item {
        position: absolute;
        z-index: 0;
        transform: none;
        cursor: pointer;
        pointer-events: none;
        user-select: none;
        opacity: 0;
    }

    .item-label-item.visible {
        opacity: 1;
        animation: fadeIn .3s ease-in;
    }

    .item-label-item__text-wrap::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .3);
        filter: blur(16px);
        z-index: -1;
    }

    .item-label-item__text-wrap {
        padding: 6px 6px 0;
        position: absolute;
        height: 20px;
        pointer-events: all;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        white-space: nowrap;
        line-height: 10px;
        font-size: 11px;
        font-weight: bold;
        color: #FFEAC0;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item-label-item__text {
        padding-bottom: 4px;
        border-top: 0 solid;
        border-left: 0 solid;
        border-right: 0 solid;
        border-bottom: 1px solid;
        border-image: linear-gradient(to right, rgba(234, 208, 154, 0), rgba(234, 208, 154, 100), rgba(234, 208, 154, 0)) 4.5 1 4.5;
    }

    .item-label-item__bar {
        position: absolute;
        bottom: 0;
        width: 1px;
        background-image: linear-gradient(to bottom, rgba(234, 208, 154, 0), rgba(234, 208, 154, 1));
    }

    @keyframes fadeIn {
        from {
            opacity: 0
        }
        to {
            opacity: 1
        }
    }
</style>

