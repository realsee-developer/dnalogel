import type { FivePlugin } from '@realsee/five';
import type { Vector3Position } from '../typings/math.type';
export interface ModelEntryDoorGuidePluginData {
    position?: Vector3Position;
    rad?: number;
    fbx_url?: string;
}
export type ModelEntryDoorGuidePluginParameterType = {
    animationEnabled?: boolean;
    name?: string;
} & ModelEntryDoorGuidePluginData;
export interface ModelEntryDoorGuidePluginExportType {
    enable: (config?: {
        animationEnable?: boolean;
    }) => boolean;
    disable: () => boolean;
    load: (data?: Partial<ModelEntryDoorGuidePluginData>) => Promise<boolean>;
}
/**
 * 模型入户门引导插件
 */
export declare const ModelEntryDoorGuidePlugin: FivePlugin<ModelEntryDoorGuidePluginParameterType, ModelEntryDoorGuidePluginExportType>;
export declare const modelEntryDoorGuidePluginServerParams: {
    name: string;
    version: number;
};
export default ModelEntryDoorGuidePlugin;
