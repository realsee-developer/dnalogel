import type { FivePlugin } from '@realsee/five';
import type { FloorplanServerData } from '../floorplan';
import type { PanoDoorLabelPluginController } from './Controller';
export type { FloorplanServerData, FloorplanServerRoomItem, } from '../floorplan/typings/floorplanServerData';
declare const PanoDoorLabelPlugin: FivePlugin<FloorplanServerData, PanoDoorLabelPluginController>;
export { PanoDoorLabelPlugin };
export default PanoDoorLabelPlugin;
