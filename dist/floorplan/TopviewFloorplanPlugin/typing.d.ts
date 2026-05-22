import type * as FloorplanPlugin from '../typings';
export * from '../typings';
export interface Config extends FloorplanPlugin.Config {
    /** 是否开启放大缩小和拖动功能，默认为 false */
    gestureEnable: boolean;
    /** 点击房间时，是否阻止跳转到被点房间的全景态点位上，默认为 false */
    preventRoomClick?: boolean;
}
export interface State extends FloorplanPlugin.State {
    config: Config;
}
