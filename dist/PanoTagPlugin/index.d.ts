import type { FivePlugin } from '@realsee/five';
import PanoTagPluginController from './controller';
export * from './controller';
export * from './typings';
export type PanoTagPluginExportInterface = InstanceType<typeof PanoTagPluginController>;
export type PanoTagPluginParamsInterface = ConstructorParameters<typeof PanoTagPluginController>[1];
export declare const PanoTagPlugin: FivePlugin<PanoTagPluginParamsInterface, PanoTagPluginExportInterface>;
export default PanoTagPlugin;
