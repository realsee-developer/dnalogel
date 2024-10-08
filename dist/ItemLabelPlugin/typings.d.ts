import type { Subscribe } from "@realsee/five";
import type { PluginEvent } from "./events.type";
import type ItemLabelComponent from './ItemLabelComponent.svelte';
export declare enum ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE {
    SMALL = "small",
    MIDLLE = "middle",
    LARGE = "large",
    EXTRA_LARGE = "x-large"
}
export interface ItemLabelPluginParametersType {
    maxVisibleDistance?: number;
    modelOcclusionEnable?: boolean;
    onlyVisibleInPanorama?: boolean;
    displayStrategyType?: Partial<ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE>;
}
export interface ItemLabelPluginData {
    item_labels: Readonly<{
        panoIndex: number;
        id: string;
        code: string;
        name: string;
        position: [number, number, number];
        type?: string[];
        icon?: string;
        render?: (data: ItemLabel) => HTMLDivElement;
        [key: string]: any;
    }>[];
}
export interface ItemLabel {
    panoIndex: number;
    id: string;
    code: string;
    name: string;
    position: [number, number, number];
    modelPosition: [number, number, number];
    type?: string[];
    icon?: string;
    observerIndex?: number | undefined;
    visible?: boolean;
    isFold?: boolean;
    render?: (data: ItemLabel) => HTMLDivElement;
    [key: string]: any;
}
export interface ItemLabelPluginExportReturnsType {
    appendTo: (wrapper: Element) => void;
    load: (data: ItemLabelPluginData) => void;
    disable: () => void;
    enable: () => void;
    dispose: () => void;
    hooks: Subscribe<PluginEvent>;
}
export interface ItemLabelPluginState {
    container: HTMLDivElement;
    data: ItemLabelPluginData | null;
    enabled: boolean;
    itemLabels: ItemLabel[];
    wrapper: HTMLElement | null;
    fiveModeEnabled: boolean;
    app?: ItemLabelComponent | undefined;
    hooks: Subscribe<PluginEvent>;
    modelOcclusionEnable: boolean;
    onlyVisibleInPanorama: boolean;
    displayStrategyType: Partial<ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE>;
    maxVisibleDistance: number | undefined;
}
