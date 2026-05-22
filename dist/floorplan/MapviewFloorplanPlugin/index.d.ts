import type { Parameters } from './typing';
import type { FivePlugin } from '@realsee/five';
import { Controller } from './Controller';
export declare const MapviewFloorplanPlugin: FivePlugin<undefined | Parameters, Controller>;
export type MapviewFloorplanPluginParameterType = Parameters | undefined;
export type MapviewFloorplanPluginReturnType = InstanceType<typeof Controller>;
export default MapviewFloorplanPlugin;
