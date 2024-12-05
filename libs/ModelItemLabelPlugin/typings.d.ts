import type { Subscribe } from "@realsee/five";
import type { PluginEvent } from "./events.type";
import type ItemLabelComponent from './ItemLabelComponent.svelte';
export declare enum DISPLAY_STRATEGY_TYPE {
    SMALL = "small",
    MIDLLE = "middle",
    LARGE = "large",
    EXTRA_LARGE = "x-large"
}
export interface ModelItemLabelPluginParametersType {
    modelOcclusionEnable?: boolean;
    displayStrategyType?: Partial<DISPLAY_STRATEGY_TYPE>;
}
export interface ModelItemLabelPluginData {
    model_item_labels: Readonly<{
        id: string;
        library: string;
        name: string;
        size: [number, number, number];
        center: [number, number, number];
        position: [number, number, number];
        type: string[];
        [key: string]: any;
    }>[];
}
export interface ItemLabel {
    id: string;
    library: string;
    name: string;
    size: [number, number, number];
    center: [number, number, number];
    position: [number, number, number];
    type: string[];
    modelPosition: [number, number, number];
    [key: string]: any;
}
export interface ModelItemLabelPluginExportReturnsType {
    appendTo: (wrapper: Element) => void;
    load: (data: ModelItemLabelPluginData) => void;
    disable: () => void;
    enable: () => void;
    dispose: () => void;
    hooks: Subscribe<PluginEvent>;
}
export interface ModelItemLabelPluginState {
    container: HTMLDivElement;
    data: ModelItemLabelPluginData | null;
    enabled: boolean;
    itemLabels: ItemLabel[];
    wrapper: HTMLElement | null;
    fiveModeEnabled: boolean;
    app?: ItemLabelComponent | undefined;
    hooks: Subscribe<PluginEvent>;
    modelOcclusionEnable: boolean;
    displayStrategyType: Partial<DISPLAY_STRATEGY_TYPE>;
}
