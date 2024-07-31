export type PanoRulerProPluginDatas = {
    data: PanoRulerProPluginData[];
    version: number;
};
export interface PanoRulerProPluginData {
    panoIndex: number;
    roomName: string;
    lines: Line[];
}
interface Line {
    start: number[];
    end: number[];
    state: boolean;
    children?: Line[];
}
export interface PanoRulerProPluginOptions {
    distanceText?: (distance: number) => string;
    className?: string;
}
export interface PanoRulerProPluginState {
    enabled: boolean;
    loaded: boolean;
    options: PanoRulerProPluginOptions;
}
export interface PanoRulerProPluginParameterType {
    data?: PanoRulerProPluginDatas;
    options?: PanoRulerProPluginOptions;
}
export interface PanoRulerProPluginExportType {
    enable: () => void;
    disable: () => void;
    load: (serverData: PanoRulerProPluginDatas) => void;
    state: PanoRulerProPluginState;
}
export interface RulerItemProp {
    width: number;
    left: number;
    top: number;
    rotateDeg: number;
    state: boolean;
    children: any[];
    labelOffset: number;
    labelElement: string;
    visible: boolean;
}
export {};
