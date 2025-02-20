import type { Five } from '@realsee/five';
import type * as BasePlugin from '../../base/BasePluginWithData';
import type { ModelMakerBaseItem } from '../item/baseItem';
import type { ServerData } from './data';
export type { Controller as ModelMakerController } from '../Controller';
export type * from './data';
/** 插件状态 */
export interface State extends BasePlugin.State {
    /** 插件是否启用 */
    enabled: boolean;
    /** 插件整体是否可见 */
    visible: boolean;
}
/** 插件事件 */
export interface EventMap extends BasePlugin.EventMap<State, ServerData> {
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
export type ItemType = ServerData['list'][number]['type'];
export type ElementRenderer = (container: HTMLElement, item: ModelMakerBaseItem, five?: Five) => () => void;
