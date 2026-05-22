import type { FivePlugin } from '@realsee/five';
import type { RoomInfo, RoomRules } from './typings';
interface PanoRulerPluginConfig {
    distanceText: (distance: number) => string;
}
export interface PanoRulerPluginOptions extends Partial<PanoRulerPluginConfig> {
    className?: string;
}
interface PanoRulerPluginPluginState {
    enable: boolean;
    loaded: boolean;
    options: PanoRulerPluginOptions;
}
export interface PanoRulerPluginParameterType {
    roomInfo?: RoomInfo;
    roomRules?: RoomRules;
    options?: PanoRulerPluginOptions;
}
export interface PanoRulerPluginExportType {
    enable: () => void;
    disable: () => void;
    load: (roomInfo?: RoomInfo, roomRules?: RoomRules, options?: PanoRulerPluginOptions) => Promise<boolean>;
    state: PanoRulerPluginPluginState;
    changeConfigs: (config: Partial<PanoRulerPluginConfig>) => void;
}
/**
 * 全景标尺插件
 */
export declare const PanoRulerPlugin: FivePlugin<PanoRulerPluginParameterType, PanoRulerPluginExportType>;
export declare const panoRulerPluginServerParams: {
    name: string;
    version: number;
};
export default PanoRulerPlugin;
