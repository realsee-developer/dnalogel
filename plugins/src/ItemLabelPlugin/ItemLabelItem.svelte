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

<div class={classNames("item-label-item", { visible: itemLabel.visible })}
     style:z-index="{itemLabel.zIndex}"
     style:transform="{itemLabel.transform}"
>
	<div class="item-label-item__text-wrap"
	     style="bottom: {`${itemLabel.strokeLength}px`}"
	     on:click="{onClick}"
	>
		<div class="icon-wrap">
			<div class="icon" style={`background-image: url(${image})`}></div>
		</div>
		<div class="item-label-text">
			<span class="item-model">{itemLabel.id}</span>
			<span class="item-name">{itemLabel.name}</span>
		</div>
	</div>
	<div class="item-label-item__bar"
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
        height: fit-content;
        padding: 12px 20px 12px 12px;
        position: absolute;
        width: max-content;
        max-width: 473px;
        min-height: 92px;
        pointer-events: all;
        /*background-color: rgba(0, 0, 0, .5);*/
        background-image: linear-gradient(269deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.60) 49%, rgba(31,38,46,0.70) 100%);
        border: 1.5px solid rgba(255, 255, 255, .65);
        border-radius: 3px;
        color: white;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
    }

    .icon-wrap {
        width: 68px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .icon {
        width: 68px;
        height: 68px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

    .item-label-text {
        min-height: 68px;
        height: auto;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-content: flex-start;
        border-left: solid rgba(255, 255, 255, .2) 1px;
        border-top: solid rgba(255, 255, 255, .2) 0;
        border-right: solid rgba(255, 255, 255, .2) 0;
        border-bottom: solid rgba(255, 255, 255, .2) 0;
        padding-left: 12px;
    }

    .item-model {
        white-space: nowrap;
        font-size: 22px;
        font-weight: bold;
        line-height: 30px;
    }

    .item-name {
        height: auto;
        word-wrap: break-word;
        word-break: break-all;
        font-size: 20px;
        line-height: 28px;
    }

    .item-label-item__bar {
        position: absolute;
        bottom: 0;
        width: 3px;
        background-image: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.20);
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

