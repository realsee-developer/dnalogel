import type { Five } from '@realsee/five';
import { Subscribe } from '../shared-utils/Subscribe';
import { WorkUtil } from '../shared-utils/Utils/WorkUtil';
import { FiveUtil } from '../shared-utils/Utils/FiveUtil';
/**
 * 基本属性字段
 */
interface State {
    /**
     * 插件是否启用
     */
    enabled: boolean;
    /**
     * 插件UI是否展示
     */
    visible?: boolean;
    /**
     * 插件的配置项
     */
    config?: unknown;
}
interface BaseOptions {
    /** 是否是用户行为 */
    userAction?: boolean;
    [key: string]: unknown;
}
interface Config {
    /** 静态资源前缀 */
    staticPrefix?: string;
    /** 国际化转换函数 */
    i18n?: (key: string) => string;
}
/**
 * 插件基本事件
 */
type EventMap<PluginState> = {
    /**
     * 插件被销毁
     */
    dispose: () => void;
    /**
     * 插件状态变化
     * @param params.state      最新的State
     * @param params.prevState  上一个State
     * @param params.userAction 是否是用户触发
     */
    stateChange: (params: {
        state: PluginState;
        prevState?: PluginState;
        userAction: boolean;
    }) => void;
};
/**
 * plugin 的基本控制器
 */
declare abstract class Controller<PluginState extends State = State, PluginEventMap extends EventMap<PluginState> = EventMap<PluginState>> {
    /**
     * @realsee/dnalogel 版本号
     */
    readonly VERSION: string;
    NAME?: string;
    five: Five;
    workUtil: WorkUtil;
    fiveUtil: FiveUtil;
    set workCode(workCode: string);
    get workCode(): string;
    /**
     * @description: 插件事件钩子
     */
    hooks: Subscribe<PluginEventMap>;
    readonly staticPrefix: string;
    /**
     * 当前状态
     * @description
     * ```text
     * 可以通过 plugin.state 和 plugin.setState 来获取和设置。
     * 通过 state 设置后，plugin 会通过合适的动画运动来达到设置的效果。
     * 来迎合一些通过数据驱动的场景。
     * ```
     */
    abstract state: PluginState;
    constructor(five: Five, config?: Config);
    updateFive(five: Five): void;
    /**
     * 获取当前的插件状态，如果当初插件内存在需要通过动画变更的 state 值，则通过此方法可以得到中间状态
     */
    getCurrentState(): PluginState;
    /**
     * 插件自身DOM添加到父容器
     * @param wrapper
     */
    appendTo?(wrapper: Element): void;
    /**
     * 展示UI
     */
    show?(options?: BaseOptions): Promise<void> | void;
    /**
     * 隐藏UI
     */
    hide?(options?: BaseOptions): Promise<void> | void;
    /**
     * 设置state
     * @param state 插件的目标状态
     * @param options 配置项
     */
    setState?(state: Partial<PluginState>, options?: BaseOptions): void;
    /**
     * @description: 获取静态资源的url
     */
    absoluteUrl(url: string): string;
    protected onWorkCodeChange(): void;
    /**
     * 启用插件，让插件能够响应交互
     */
    abstract enable(options?: BaseOptions): void;
    /**
     * 禁用插件，让插件停止响应交互
     */
    abstract disable(options?: BaseOptions): void;
    /**
     * 插件进行销毁
     */
    abstract dispose(): void;
}
export type { State, Config, EventMap, BaseOptions };
export { Controller };
