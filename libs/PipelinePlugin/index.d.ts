import type { FivePlugin } from '@realsee/five';
import { Controller } from './Controller';
export declare const PipelinePlugin: FivePlugin<undefined, Controller>;
export type PipelinePluginParameterType = undefined;
export type PipelinePluginReturnType = InstanceType<typeof Controller>;
export default PipelinePlugin;
