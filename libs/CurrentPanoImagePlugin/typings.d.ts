import type * as BasePlugin from '../base/BasePlugin';
export interface Config extends BasePlugin.Config {
    /** 贴图宽度，单位：米 */
    width: number;
    /** 高度偏移量，单位：米 */
    yOffset: number;
    /** 沿着 Y 轴正方向旋转角度，单位：弧度 */
    yRotate: number;
    /** 贴图 URL */
    imageURL: string;
}
export interface State extends BasePlugin.State {
    visible: boolean;
}
export interface ShowHideOptions extends BasePlugin.BaseOptions {
    userAction: boolean;
}
export interface EventMap extends BasePlugin.EventMap<State> {
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
    /** config 变更的回调
     * @param event.prevConfig 变更前的 config
     * @param event.config 变更后的 config
     * @param event.userAction 是否是用户操作
     */
    configChange: (event: {
        prevConfig: Config;
        config: Config;
        userAction: boolean;
    }) => void;
}
/** 插件初始化参数 */
export interface Params {
    config?: Partial<Config>;
    initialState?: Partial<State>;
}
