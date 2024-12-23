import type { PartialDeep } from 'type-fest';
import type { FivePlugin } from '@realsee/five';
import { Subscribe } from '../shared-utils/Subscribe';
export interface Config {
    lookAtCurrentCamera: boolean;
    lockedPanoIndex: number | null;
    lockedLatitude: number | null;
    lockedLongitude: number | null;
}
export interface ModelViewPluginExportType {
    enable: () => void;
    disable: () => void;
    hooks: Subscribe<{
        loaded: () => void;
        willLoad: () => void;
    }>;
    getCurrentState: () => {
        enabled: boolean;
    };
    appendTo: (element: HTMLElement, size?: {
        width?: number;
        height?: number;
    }) => void;
    refresh: (size?: {
        width?: number;
        height?: number;
    }) => void;
    changeConfigs: (config: Partial<Config>) => void;
}
export interface ModelViewPluginParameterType {
    config: Config;
    initialState: {
        enabled: boolean;
    };
}
/**
 * Five 模型插件
 * @template ExportType 导出方法
 */
export declare const ModelViewPlugin: FivePlugin<PartialDeep<ModelViewPluginParameterType> | undefined, ModelViewPluginExportType>;
export default ModelViewPlugin;
