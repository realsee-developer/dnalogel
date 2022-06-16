<script lang="ts">
    import type { ItemLabel } from './typings'
    import type { Subscribe } from "@realsee/five";
    import { PluginEvent } from "./events.type";
    import classNames from 'classnames'

    export let itemLabel: ItemLabel
    export let hooks: Subscribe<PluginEvent>
    export let anchorEnabled: boolean
    export let onIconClick: (itemLabel: ItemLabel) => void

    const defaultIcon = '//vrlab-public.ljcdn.com/common/file/web/c8591aaa-e62b-4e31-8fed-671483ace37f.svg\n'

    function onClick() {
        hooks.emit('onLabelClick', itemLabel)
    }

</script>

<div class={classNames("item-label-item", { fold: itemLabel.isFold })}
     style:z-index="{itemLabel.zIndex}"
     style:transform="{itemLabel.transform}"
>
	<div class={classNames("item-label-item__text-wrap")}
	     style="bottom: {`${itemLabel.strokeLength}px`}"
	     on:click="{onClick}"
	>
		{#if itemLabel.icon}
			<div class="icon-wrap"
			     on:click="{(e) => onIconClick(itemLabel)}"
			>
				<div class="icon" style={`background-image: url(${itemLabel.icon ?? defaultIcon})`} ></div>
			</div>
		{/if}
		<div class="item-label-text">
			<span class="item-model">{itemLabel.code ?? itemLabel.id}</span>
			<span class="item-name">{itemLabel.name}</span>
		</div>
	</div>
	<div class={classNames("item-label-item__bar", { anchor: anchorEnabled })}
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
        animation: fadeIn .3s ease-in;
    }

    .item-label-item.fold >.item-label-item__text-wrap  {
	    visibility: hidden;
    }

    .item-label-item.fold >.item-label-item__bar.anchor {
	    visibility: hidden;
    }

    .item-label-item.fold >.item-label-item__bar.anchor:after  {
	    visibility: visible;
    }

    .item-label-item__text-wrap {
        height: fit-content;
        padding: 12px 20px 12px 12px;
        position: absolute;
        width: max-content;
        max-width: 473px;
        min-height: 92px;
        background-image: linear-gradient(269deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.60) 49%, rgba(31, 38, 46, 0.70) 100%);
        border: 1.5px solid rgba(255, 255, 255, .65);
        border-radius: 3px;
        color: white;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
        pointer-events: all;
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
        margin-left: 12px;
        padding-left: 12px;
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
        pointer-events: auto;
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
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.20);
        pointer-events: none;
    }

    .item-label-item__bar.anchor:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 24px;
        height: 24px;
        background-image: url("//vrlab-public.ljcdn.com/common/file/web/67e7a198-28c9-47dc-879b-507bd3ae600c.png ");
        background-position: center;
        background-size: contain;
        transform: translate(-10.5px, 50%);
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

