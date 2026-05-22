import type { Five } from '@realsee/five';
import PanoTagPluginController from './controller';
export * from './controller';
export * from './typings';
export type PanoTagPluginExportInterface = InstanceType<typeof PanoTagPluginController>;
export type PanoTagPluginParamsInterface = ConstructorParameters<typeof PanoTagPluginController>[1];
export declare const PanoTagPlugin: (five: Five, params?: PanoTagPluginParamsInterface) => PanoTagPluginController;
export default PanoTagPlugin;
