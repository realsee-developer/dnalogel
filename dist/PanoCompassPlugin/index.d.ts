import type { FivePlugin } from '@realsee/five';
import { PanoCompassController } from './Controller';
import type { PanoCompassPluginParameterType } from './typings';
export type PanoCompassPluginExportType = PanoCompassController;
export declare const PanoCompassPlugin: FivePlugin<PanoCompassPluginParameterType, PanoCompassPluginExportType>;
export default PanoCompassPlugin;
export type { PanoCompassPluginParameterType, PanoCompassPluginData } from './typings';
