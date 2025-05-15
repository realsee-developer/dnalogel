import type { Parameters } from './typing';
import type { FivePlugin } from '@realsee/five';
import { Controller } from './Controller';
export declare const ModelFloorplanPlugin: FivePlugin<undefined | Parameters, Controller>;
export type ModelFloorplanPluginParameterType = Parameters | undefined;
export type ModelFloorplanPluginReturnType = InstanceType<typeof Controller>;
export default ModelFloorplanPlugin;
