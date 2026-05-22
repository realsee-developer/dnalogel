import type CSS3DRenderPlugin from '.';
import type * as BasePlugin from '../base/BasePlugin';
import type { CSS3DRender } from './utils/three/CSS3DRender';
export type CSS3DRenderPluginParameterType = undefined;
export type CSS3DRenderPluginExportType = ReturnType<typeof CSS3DRenderPlugin>;
export type CSS3DRenderExportType = InstanceType<typeof CSS3DRender>;
export type Create3DDomContainerReturnType = ReturnType<CSS3DRenderPluginExportType['create3DDomContainer']>;
export type Create3DElementReturnType = ReturnType<InstanceType<typeof CSS3DRender>['create3DElement']>;
export interface CSS3DRenderPluginState extends BasePlugin.State {
    enabled: boolean;
    visible: boolean;
}
export interface CSS3DRenderPluginEventMap extends BasePlugin.EventMap<CSS3DRenderPluginState> {
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
}
