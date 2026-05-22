import type { FivePlugin } from '@realsee/five';
export interface ModelChassisCompassPluginParameterType {
    north_rad?: number;
    fbx_url?: string;
}
export interface ModelChassisCompassPluginData {
    north_rad?: number;
    fbx_url?: string;
}
export interface ModelChassisCompassPluginExportType {
    enable: () => void;
    disable: () => void;
    load: (data?: ModelChassisCompassPluginData) => Promise<boolean>;
}
/**
 * 模型底盘指南针插件
 */
export declare const ModelChassisCompassPlugin: FivePlugin<ModelChassisCompassPluginParameterType, ModelChassisCompassPluginExportType>;
export default ModelChassisCompassPlugin;
