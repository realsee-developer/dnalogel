import type { BaseOptions, EventMap, State } from '../base/BasePlugin';
import { Five } from '@realsee/five';
import { Controller } from '../base/BasePlugin';
/**
 * pano plugin controller 基类
 * @author kyleju
 */
export declare abstract class BasePanoPluginController<T extends State, E extends EventMap<T>> extends Controller<T, E> {
    state: T;
    container: Element;
    enabled: boolean;
    constructor(five: Five);
    /**
     * 启用组件
     * @param options
     */
    enable(options?: BaseOptions): void;
    /**
     * 禁用组件
     * @param options
     */
    disable(options?: BaseOptions): void;
    /**
     * 显示 UI
     * @param options
     * @returns
     */
    show(options?: BaseOptions): Promise<void>;
    /**
     * 隐藏 UI
     * @param options
     * @returns
     */
    hide(options: BaseOptions): Promise<void>;
    /**
     * 销毁对象
     */
    dispose(): void;
    /**
     * 设置状态
     * @param state @T 状态
     * @param options @BaseOptions 可选配置
     * @returns
     */
    setState(state: Partial<T>, options?: BaseOptions): void;
    get visible(): boolean;
    appendTo(container: Element): void;
    private updateState;
    /**
     * 组件 渲染
     */
    abstract render(): any;
    /**
     * State 初始化
     */
    abstract initState(): T;
    /**
     * State 改变回调
     */
    abstract stateChangedCallback(prevState: T, options?: BaseOptions): any;
}
