import type * as ModelMakerPluginType from './typings';
import { Controller } from './Controller';
export declare const ModelMakerPlugin: (five: import("@realsee/five").Five, config?: {
    tagContainerZIndex?: number;
    occlusionVisibility?: boolean | import("@realsee/five").Mode[];
    occlusionMode?: "depthTest" | "translucence";
}) => ModelMakerPluginType.ModelMakerController;
export type { Controller as ModelMakerPluginInstance };
export type { ModelMakerPluginType };
