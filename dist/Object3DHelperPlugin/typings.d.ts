export interface Object3DHelperPluginState {
    enabled: boolean;
    visible: boolean;
    disposed: boolean;
}
export interface HelperOffset {
    x: number | {
        percents: number;
    };
    y: number | {
        percents: number;
    };
    z: number | {
        percents: number;
    };
}
export type HelperConfig<T extends Object = {}> = boolean | ({
    enable: boolean;
} & T);
export type Object3DHelperPluginEventMap = {
    show: (options?: {
        userAction?: boolean;
    }) => void;
    hide: (options?: {
        userAction?: boolean;
    }) => void;
    enable: (options?: {
        userAction?: boolean;
    }) => void;
    disable: (options?: {
        userAction?: boolean;
    }) => void;
    dispose: () => void;
    stateChange: (params: {
        state: Object3DHelperPluginState;
        prevState?: Object3DHelperPluginState;
    }) => void;
};
