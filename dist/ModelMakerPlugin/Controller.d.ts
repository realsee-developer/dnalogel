import type { Five, Mode as FiveMode } from '@realsee/five';
import * as BasePlugin from '../base/BasePluginWithData';
import type * as PluginType from './typings';
import * as THREE from 'three';
import type { ModelMakerBaseItem } from './item/baseItem';
export declare class Controller extends BasePlugin.Controller<PluginType.State, PluginType.EventMap, PluginType.ServerData, PluginType.ServerData> {
    state: PluginType.State;
    items: ModelMakerBaseItem[];
    group: THREE.Group;
    protected data: PluginType.ServerData;
    private tagRendererMap;
    private fiveDomEvents;
    private zFightingOffset;
    private tagWrapper;
    private occlusionVisibility;
    private occlusionMode;
    private fiveEveryReadyListenerDisposer?;
    constructor(five: Five, config?: {
        tagContainerZIndex?: number;
        /**
         * @description 是否显示遮挡的部分
         * @params 所有模式下都显示被遮挡的部分, false: 所有模式下不显示被遮挡的部分, ['Mapview', ...]: 指定模式下显示被遮挡的部分
         * @default false
         */
        occlusionVisibility?: boolean | FiveMode[];
        /**
         * @description 当 occlusionVisibility 为true时，以哪种方式显示被遮挡的部分
         * @params 'depthTest': 关闭深度测试, 'translucence': 半透明
         * @default 'translucence'
         */
        occlusionMode?: 'translucence' | 'depthTest';
    });
    load(serverData: PluginType.ServerData): Promise<void>;
    setState(targetState: Partial<PluginType.State>): void;
    getItemById(id: string | number): ModelMakerBaseItem;
    registerTagRenderer(map: Partial<Record<PluginType.ItemType, PluginType.ElementRenderer>>): void;
    hasCustomTagRenderer(map: PluginType.ItemType): boolean;
    enable(): void;
    disable(): void;
    show(): void;
    hide(): void;
    clear(): void;
    dispose(): void;
    protected onWorkCodeChange(): void;
    private onFiveModeChange;
    private handleShow;
    private handleHide;
    private handleEnable;
    private handleDisable;
    private onFiveEveryReady;
    private updateTagRenderer;
}
