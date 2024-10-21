import type { Five } from '@realsee/five';
import type { ModelRoomLabelPluginData } from './typings';
export type ModelRoomLabelPluginParameters = undefined;
export declare class ModelRoomLabelController {
    private five;
    private enabled;
    private fiveModeEnabled;
    private app?;
    private wrapper?;
    private roomLabels;
    private container;
    constructor(five: Five);
    dispose(): void;
    /** 加载数据 */
    load(data: ModelRoomLabelPluginData): void;
    /** 设置插件容器 */
    appendTo(wrapper: Element): this;
    /** 禁用插件功能
     * @description
     * - 如果当前正在展示中，会清除所有展示的 DOM
     * - 如果当前未展示，即使后续 Five 状态满足展示要求，也不会展示
     * */
    disable(): this;
    /** 启用插件功能
     * @description
     * - 如果当前符合展示条件，会立刻展示
     * - 如果不符合展示条件，会等待 Five 状态满足条件后再展示
     */
    enable(): this;
    /** 监听 Five Mode 变化
     * @description
     * Mode 不符合要求时，立刻消失，满足要求时，需要等待动画结束再展示
     */
    private onFiveModeChange;
    /** 检测 Five Mode 是否满足展示条件 */
    private checkFiveMode;
    private render;
}
