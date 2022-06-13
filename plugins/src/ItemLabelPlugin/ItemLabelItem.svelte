<script lang="ts">
    import type { ItemLabel } from './typings'
    import type { Subscribe } from "@realsee/five";
    import { PluginEvent } from "./events.type";
    import classNames from 'classnames'

    export let itemLabel: ItemLabel
    export let hooks: Subscribe<PluginEvent>

    let image = 'https://vrlab-public.ljcdn.com/common/file/web/ea031fa5-ad82-46b3-86c8-7b20ec1e635a.jpg'

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
			style="top: {`-${itemLabel.strokeLength + 92}px`}"
			on:click="{onClick}"
	>
		<div
				class="item-label-icon"
				style={`background-image: url(${image})`}
		>

		</div>
		<div class="bar"></div>
		<div class="item-label-text">
			<span class="item-model">{itemLabel.id}</span>
			<div class="item-name">{itemLabel.name}</div>
		</div>
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

    .item-label-item__text-wrap {
        padding: 12px 20px 12px 12px;
        position: absolute;
	    min-width: 292px;
	    max-width: 473px;
	    width: fit-content;
        min-height: 92px;
        pointer-events: all;
	    background-color: rgba(0, 0, 0, .5);
	    border: 1.5px solid rgba(255, 255, 255, .65);
	    border-radius: 3px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        color: white;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: flex-start;
        align-items: center;
	    box-sizing: border-box;
	    overflow: hidden;
    }

    .item-label-icon {
	    width: 68px;
	    height: 68px;
	    background-repeat: no-repeat;
	    background-size: contain;
	    background-position: center;
    }

    .bar {
	    margin: 0 12px;
	    width: 1px;
	    height: 100%;
        border-right: solid white 1px;
	    opacity: .2;
    }

    .item-label-text {
	    height: 100%;
	    display: flex;
	    flex: 1;
	    flex-flow: column;
	    justify-content: space-around;
	    align-content: center;
    }

    .item-model {
        font-size: 22px;
	    font-weight: bold;
	    line-height: 1;
    }

    .item-name {
	    width: 100%;
        word-wrap:break-word;
        word-break:break-all;
        overflow: hidden;
        font-size: 20px;
        line-height: 1;
    }

    .item-label-item__bar {
        position: absolute;
        bottom: 0;
        width: 3px;
        background-image: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));
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

