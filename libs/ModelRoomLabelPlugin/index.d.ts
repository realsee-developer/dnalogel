import * as Controller from './Controller';
import type { FivePlugin } from '@realsee/five';
export declare const ModelRoomLabelPlugin: FivePlugin<Controller.ModelRoomLabelPluginParameters, ModelRoomLabelPluginReturnType>;
export default ModelRoomLabelPlugin;
export declare const modelRoomLabelPluginServerParams: {
    name: string;
    version: number;
};
export type { ModelRoomLabelController } from './Controller';
export type { ModelRoomLabelPluginData, RoomLabel } from './typings';
export type ModelRoomLabelPluginReturnType = Controller.ModelRoomLabelController;
export type { ModelRoomLabelPluginParameters } from './Controller';
