import type { FivePlugin } from '@realsee/five';
import type { PanoSpatialTagPluginId, PanoSpatialTagPluginDataElement, PanoSpatialTagPluginContentReplacement, PanoSpatialTagPluginContentEvent } from './typings';
export interface PanoSpatialTagPluginData {
    folded?: boolean;
    enabled?: boolean;
    points: Array<PanoSpatialTagPluginDataElement>;
    template: string;
    events?: PanoSpatialTagPluginContentEvent;
    render?: (template: string, replacement: PanoSpatialTagPluginContentReplacement) => string;
}
export interface PanoSpatialTagPluginParameterType {
    container?: Element;
    wait?: number;
    maxNumberOnScreen?: number;
    minRad?: number;
    nearTolerance?: number;
    upsideHeight?: number;
    minDistance?: number;
    maxDistance?: number;
}
export interface PanoSpatialTagPluginExportType {
    load: (data: PanoSpatialTagPluginData) => void;
    unfoldAll: () => void;
    foldAll: () => void;
    unfold: (id: PanoSpatialTagPluginId) => void;
    fold: (id: PanoSpatialTagPluginId) => void;
    enable: () => void;
    disable: () => void;
    dispose: () => void;
}
/**
 * 空间游走标签插件
 */
export declare const PanoSpatialTagPlugin: FivePlugin<PanoSpatialTagPluginParameterType, PanoSpatialTagPluginExportType>;
export default PanoSpatialTagPlugin;
