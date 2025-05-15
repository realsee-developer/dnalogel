import type { FloorplanServerRoomItem } from '../floorplan/typings/floorplanServerData';
import type * as BasePlugin from '../base/BasePluginWithData';
export interface Config extends BasePlugin.Config {
    compassImageUrl: string;
    logoURL?: string;
    entryDoorImageUrl: string;
}
export interface State extends BasePlugin.State {
    visible: boolean;
    config: Config;
}
export interface PluginData {
    north_rad: null | number;
    entrance?: null | {
        position: {
            x: number;
            y: number;
            z: number;
        };
    };
    room_observers?: {
        index: number;
        floor_index: number;
        room: FloorplanServerRoomItem;
    }[];
}
export interface EventMap extends BasePlugin.EventMap<State, PluginData> {
    /** visible 从 false 到 true 的回调
     * @param event.userAction 是否是用户操作
     */
    show: (event: {
        userAction: boolean;
    }) => void;
    /** visible 从 true 到 false 的回调
     * @param event.userAction 是否是用户操作
     */
    hide: (event: {
        userAction: boolean;
    }) => void;
    /** enabled 从 false 到 true 的回调
     * @param event.userAction 是否是用户操作
     */
    enable: (event: {
        userAction: boolean;
    }) => void;
    /** enabled 从 true 到 false 的回调
     * @param event.userAction 是否是用户操作
     */
    disable: (event: {
        userAction: boolean;
    }) => void;
}
export interface PluginServerData {
    version: number;
    data: PluginData;
}
export type PanoCompassPluginParameterType = Partial<Config> | undefined;
export type PanoCompassPluginData = PluginData;
