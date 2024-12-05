import type * as THREE from 'three';
import type * as PluginData from './PluginData';
import type * as ServerData from './ServerData';
import type * as BasePlugin from '../../base/BasePluginWithData';
import type { EventCallback } from '@realsee/five';
import type { AnimeOptions } from '../utils/Objects/Pipe';
export interface PipelineTargetItem {
    startLibraryID: number;
    endLibraryID: number;
}
export interface State extends BasePlugin.State {
    enabled: boolean;
    visible: boolean;
    isFlowing: boolean;
    speed: Speed;
    target: null | PipelineTargetItem[];
}
export interface LoadOptions {
    /** 获取管道半径，单位是 m。默认是 0.016 m */
    getPipeRadius: (pipe: ServerData.LinesDataset) => number;
    /** 自定义不同水质的贴图 */
    getPipeUrl: <T extends PluginData.Water>(water: T) => string;
}
export interface EventMap extends BasePlugin.EventMap<State, PluginData.RootObject> {
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
    tap: (data: {
        pipe: PluginData.Pipe;
        pipeline: PluginData.Pipeline;
        intersectObjects: THREE.Intersection[];
        wantsFiveTapGestureParams: Parameters<EventCallback['wantsTapGesture']>;
    }) => any;
}
export interface ShowHideOptions {
    userAction: boolean;
    anime: AnimeOptions;
}
export interface ShowPipelinesOptions {
    userAction: boolean;
    showAnime: AnimeOptions;
    hideAnime: AnimeOptions;
    anime: AnimeOptions;
    target: PipelineTargetItem[];
}
/** 流速 */
export interface Speed {
    /** 横向流速：m/s */
    flowSpeed?: number;
    /** 纵向旋转速度：deg/s */
    rotateSpeed?: number;
}
export interface SetSpeedOptions {
    speed: Speed;
    userAction: boolean;
}
export * as ServerData from './ServerData';
export * as PluginData from './PluginData';
