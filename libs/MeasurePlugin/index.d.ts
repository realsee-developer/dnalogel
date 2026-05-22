import type { Five } from '@realsee/five';
import { MeasureController } from './Controller';
export type MeasurePluginConfig = {
    unit: 'm' | 'ft' | 'mm';
    lengthEnable?: boolean;
    /**
     * @description Number of decimal places for length measurements in metric units (meters). Area measurements remain at fixed 2 decimal places.
     * @default 2
     */
    precision?: number;
};
export type { MeasureEndReason, MeasurePluginEventMap } from './Controller';
export { validatePolygon } from './utils/validatePolygon';
export declare const MeasurePlugin: (five: Five, config?: MeasurePluginConfig) => MeasureController;
