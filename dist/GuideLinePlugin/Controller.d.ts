import * as BasePluginWithData from '../base/BasePluginWithData';
import type { Five } from '@realsee/five';
import type { EventMap, PluginData, PluginServerData, PluginState } from './typing';
import type * as PluginType from './typing';
import type { Config as BaseConfig } from '../base/BasePlugin';
import { GuideLineItem } from './GuideLineItem';
import CruisePluginController from '../CruisePlugin/Work';
export declare const pluginFlag: (name: string) => string;
type Config = BaseConfig & {
    /**
     * @description 格式化距离函数，用于将米转换为显示文本（包含单位）
     * @param distanceInMeter 距离（单位：米）
     * @returns 格式化后的距离字符串，例如 "10m" 或 "32'10""
     */
    formatDistance?: (distanceInMeter: number) => string;
};
export default class Controller extends BasePluginWithData.Controller<PluginState, EventMap, PluginServerData, PluginData> {
    readonly name = "GuideLinePlugin";
    readonly cruisePlugin: CruisePluginController;
    /** GuideLineItem 索引 */
    readonly itemMap: Map<string | number, GuideLineItem>;
    get config(): Config;
    state: {
        visible: boolean;
        enabled: boolean;
    };
    protected data?: PluginData;
    /** 当新增一根线时，整体高度的偏移值 */
    private heightOffset;
    get disposed(): boolean;
    private _config;
    private _disposed;
    constructor(five: Five, config?: Config);
    load(serverData: PluginServerData | PluginData, state?: PluginState, userAction?: boolean): Promise<void>;
    formatData(serverData: any): Promise<PluginType.PluginData>;
    /** 展示插件 */
    show(options?: {
        userAction?: boolean;
    }): Promise<void>;
    /** 隐藏插件 */
    hide(options?: {
        userAction?: boolean;
    }): Promise<void>;
    /** 开启插件 */
    enable(options?: {
        userAction?: boolean;
    }): void;
    /** 关闭插件 */
    disable(options?: {
        userAction?: boolean;
    }): void;
    /** 销毁插件 */
    dispose(): void;
    setState(state: Partial<PluginState>, options?: {
        userAction?: boolean;
    }): void;
    /** 添加一个 GuideLineItem */
    addGuideLineItem(data?: PluginType.GuideLineItem): GuideLineItem;
    private processItemUrls;
    /** 获取 Plugin 内的 GuideLineItem */
    getGuideLineItemByID(id: string | number): GuideLineItem;
    /** 移除一个 GuideLineItem */
    removeGuideLineItem(item: GuideLineItem): void;
    /**
     * 动态更新距离格式化函数，立即刷新所有路线标签的距离显示。
     * 不传参时恢复为默认格式（i18n('全程') + 距离 + i18n('米')）。
     * @param fn 格式化函数，输入米数，返回带单位的完整字符串
     * @example
     *   // 室内英制：英尺 + 英寸（如 "5'10""）
     *   plugin.setDistanceFormatter((m) => {
     *     const totalInches = Math.round(m * 39.3701)
     *     const feet = Math.floor(totalInches / 12)
     *     const inches = totalInches % 12
     *     return `${feet}'${inches}"`
     *   })
     *   // 室外英制：英里（如 "1.24 mi"）
     *   plugin.setDistanceFormatter((m) => `${(m * 0.000621371).toFixed(2)} mi`)
     *   // 自动切换：近距离用英尺，远距离用英里
     *   plugin.setDistanceFormatter((m) => {
     *     if (m < 300) return `${Math.round(m * 3.28084)} ft`
     *     return `${(m * 0.000621371).toFixed(2)} mi`
     *   })
     *   // 恢复默认（i18n '米'）
     *   plugin.setDistanceFormatter()
     */
    setDistanceFormatter(fn?: (distanceInMeter: number) => string): void;
    /** 更新所有 tag 的距离显示（当 formatDistance 函数改变时调用） */
    private updateTagDistances;
    /** 全量更新 tag */
    updateTagsEnable(): void;
    /** 清空所有 GuideLineItem */
    clear(): void;
    private handleEnable;
    private handleVisible;
    private disposedErrorLog;
    private getDataWithoutVersion;
}
export {};
