import type { Config } from '../typings';
import type { EditParameter, MeasureType, OpenParameter, MeasurePluginData, MeasurePluginServerData } from '../typings/data';
import type { PanoMeasurePluginEvent } from '../typings/event.type';
import type { UserDistanceItem } from '../utils/dom/distanceItem';
import type { Polyline } from '../Model/polyline';
import EditController from './EditController';
import ViewController from './ViewController';
import WatchController from './WatchController';
import MixedController from './MixedController';
import type { Subscribe } from '../../shared-utils/Subscribe';
import type { Five } from '@realsee/five';
import { type UIControllerParams } from '../Modules/UIController';
import { type GuideControllerParams } from '../Modules/GuideController';
import { Magnifier } from '../../shared-utils';
import type { MagnifierParameter } from '../../shared-utils';
import type Area from '../Model/area';
import * as BasePlugin from '../../base/BasePlugin';
import type { PointSelectorConfig } from '../../shared-utils/three/PointSelector';
export type Mode = 'Watch' | 'Edit' | 'Mixed' | 'View';
export interface PanoMeasureParameterType extends Partial<Config> {
    editParams?: EditParameter;
    magnifierParams?: MagnifierParameter;
    pointSelectorConfig?: PointSelectorConfig;
    openParams?: OpenParameter;
    useUIController?: boolean | UIControllerParams;
    useGuideController?: boolean | GuideControllerParams;
    userDistanceItemCreator?: () => UserDistanceItem;
}
export default class PanoMeasureController extends BasePlugin.Controller<BasePlugin.State, BasePlugin.EventMap<BasePlugin.State> & PanoMeasurePluginEvent> {
    state: BasePlugin.State;
    hasOpen: boolean;
    /** @deprecated use hooks instead */
    hook: Subscribe<PanoMeasurePluginEvent>;
    magnifier: Magnifier;
    controller: WatchController | EditController | MixedController | ViewController | null;
    /** 允许的测量类型 */
    allowMeasureType: Array<MeasureType>;
    /** 当前的测量类型 */
    currentMeasureType: MeasureType | null;
    private model;
    private group;
    private config;
    private isMobile;
    private useUIController?;
    private params;
    private useGuideController?;
    private container;
    private shortcutKeyController?;
    constructor(five: Five, params: PanoMeasureParameterType);
    appendTo(parent: HTMLElement): void;
    clear(): void;
    dispose(): void;
    /** 加载数据
     * @description 数据加载时会覆盖当前已保存的数据
     * @description 如果当前正在编辑中，会自动退出并保存编辑
     */
    load(data: MeasurePluginData | MeasurePluginServerData): void;
    /** 插件功能入口
     * @description 会隐藏鼠标的默认聚焦环
     * @description 会隐藏当前 VR 内的点位展示
     */
    enable(config?: {
        mode: Mode;
    }): void;
    /** 关闭插件功能
     * @description 清除标尺线条
     * @description 还原点位展示和默认鼠标 UI
     */
    disable: () => void;
    getCurrentMode: () => Mode | null;
    /** 变更场景
     * @description 如果从编辑场景改变到观看场景，不会自动保存，默认丢弃所有改动
     */
    changeMode: (mode: Mode) => void;
    /**
     * @description: 切换测量的类型
     */
    changeMeasureType: (measureType: MeasureType) => void;
    /** 进入编辑模式 */
    edit(measureType?: MeasureType): void;
    /** 撤销编辑 */
    revoke(): void;
    removePolyline(polyline: Polyline): void;
    removeArea(area: Area): void;
    removePolylineByID(id: string): void;
    getPolylineByID(id: string): Polyline;
    getEditedPolyline(): void;
    /**
     * 高亮当前线段
     */
    highlightLine(lineID: string): boolean;
    clearHighlightLines(): boolean;
    /** 保存编辑
     * @description 以下情况可能报错
     */
    save(config?: {
        mode?: Mode;
    }): this;
    /** Mixed 模式才有用，添加起点 */
    addStartPoint(): void;
    /** Mixed 模式才有用，添加终点 */
    addEndPoint(): void;
    /** 导出数据 */
    toJson(): MeasurePluginData;
    /**
     * @deprecated 暂不支持
     * @description 改变插件的模式（pc端模式或移动端模式）
     * @param isMobile true为移动端模式，false为pc端
     */
    changeIsMobile(isMobile: boolean): void;
    changeConfigs(config: Config): void;
    /** 设置线段的文本 */
    setCustomText(lineID: string, text: string): void;
    private createControllerParams;
}
