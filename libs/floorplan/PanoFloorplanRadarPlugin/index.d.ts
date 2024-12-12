import type { Parameters } from './typing';
import type { FivePlugin } from '@realsee/five';
import { Controller } from './Controller';
export declare const PanoFloorplanRadarPlugin: FivePlugin<Parameters | undefined, Controller>;
export type PanoFloorplanRadarPluginParameterType = Parameters | undefined;
export type PanoFloorplanRadarPluginReturnType = InstanceType<typeof Controller>;
export default PanoFloorplanRadarPlugin;
