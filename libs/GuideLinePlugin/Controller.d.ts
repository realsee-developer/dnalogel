import * as BasePluginWithData from '../base/BasePluginWithData';
import type { Five } from '@realsee/five';
import type { EventMap, PluginData, PluginServerData, PluginState } from './typing';
import type * as PluginType from './typing';
import type { Config as BaseConfig } from '../base/BasePlugin';
import { GuideLineItem } from './GuideLineItem';
import CruisePluginController from '../CruisePlugin/Work';
export declare const pluginFlag: (name: string) => string;
type Config = BaseConfig;
export default class Controller extends BasePluginWithData.Controller<PluginState, EventMap, PluginServerData, PluginData> {
    readonly name = "GuideLinePlugin";
    readonly cruisePlugin: CruisePluginController;
    /** GuideLineItem 索引 */
    readonly itemMap: Map<string | number, GuideLineItem>;
    get config(): BaseConfig;
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
    /** 获取 Plugin 内的 GuideLineItem */
    getGuideLineItemByID(id: string | number): GuideLineItem;
    /** 移除一个 GuideLineItem */
    removeGuideLineItem(item: GuideLineItem): void;
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
