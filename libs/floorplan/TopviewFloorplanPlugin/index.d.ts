import type { Parameters } from './typing';
import type { FivePlugin } from '@realsee/five';
import { Controller } from './Controller';
export declare const TopviewFloorplanPlugin: FivePlugin<undefined | Parameters, Controller>;
export type TopviewFloorplanPluginParameterType = Parameters | undefined;
export type TopviewFloorplanPluginReturnType = InstanceType<typeof Controller>;
export default TopviewFloorplanPlugin;
