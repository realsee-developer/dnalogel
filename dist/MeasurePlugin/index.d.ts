import type { Five } from '@realsee/five';
import { MeasureController } from './Controller';
export type MeasurePluginConfig = {
    unit: 'm' | 'ft';
};
export declare const MeasurePlugin: (five: Five, config?: MeasurePluginConfig) => MeasureController;
