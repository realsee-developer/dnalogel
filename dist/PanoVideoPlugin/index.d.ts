import type { FivePlugin } from '@realsee/five';
import { PanoVideoPluginController } from './Controller';
import * as _PanoVideoPluginType from './typings';
/** 点位视频播放插件
 * - 支持一次性加载多组数据。
 * - 走到点位上时播放视频（可能是多个）。
 * - 走出点位时销毁视频。
 * - 允许动态开启和禁用功能。
 * - 视频只能在全景模式且点位一致时才会播放。不满足条件会自动销毁。
 * - 不做多媒体缓存，缓解内存占用。
 */
export declare const PanoVideoPlugin: FivePlugin<undefined, PanoVideoPluginController>;
export { _PanoVideoPluginType as PanoVideoPluginType };
export type PanoVideoPluginParameterType = undefined;
export type PanoVideoPluginReturnType = InstanceType<typeof PanoVideoPluginController>;
export default PanoVideoPlugin;
