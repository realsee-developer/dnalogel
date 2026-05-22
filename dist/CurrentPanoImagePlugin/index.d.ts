import type { FivePlugin } from '@realsee/five';
import type * as CurrentPanoImagePluginType from './typings';
import { CurrentPanoImagePluginController } from './Controller';
export declare const CurrentPanoImagePlugin: FivePlugin<CurrentPanoImagePluginType.Params, CurrentPanoImagePluginController>;
export default CurrentPanoImagePlugin;
export type CurrentPanoImagePluginExportType = CurrentPanoImagePluginController;
export type { CurrentPanoImagePluginType };
