import type { Parameters } from './typing';
import type { FivePlugin } from '@realsee/five';
import { Controller } from './Controller';
export declare const FloorplanGuidePlugin: FivePlugin<Parameters | undefined, Controller>;
export type FloorplanGuidePluginParameterType = Parameters | undefined;
export type FloorplanGuidePluginReturnType = InstanceType<typeof Controller>;
export default FloorplanGuidePlugin;
