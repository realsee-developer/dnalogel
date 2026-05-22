import type { Five } from '@realsee/five';
import type { BaseOptions, EventMap, State } from '../base/BasePlugin';
import type { FloorplanServerData } from '../floorplan/typings/floorplanServerData';
import * as BasePlugin from '../base/BasePlugin';
import type { DoorLabelConfig } from './typings';
/**
 * 分间标签插件
 * @author kyleju†
 */
export declare class PanoDoorLabelPluginController extends BasePlugin.Controller<State, EventMap<State>> {
    state: State;
    private container;
    private MinVisibledistance;
    private MaxVisibledistance;
    private OffsetHeight;
    private floorplanServerData;
    /** 每个点位 visible 标签的缓存 */
    private visibleLabelMap;
    /** 标签项Prop值 */
    private labelItems;
    /** 数据 */
    private doorLabels;
    private roomObservers;
    constructor(five: Five);
    loadData: (floorplanServerData: FloorplanServerData, doorLabelConfig?: DoorLabelConfig) => void;
    appendTo(container: HTMLElement): void;
    setState(state: Partial<State>, options?: BaseOptions): void;
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    stateChangedCallback(prevState: State, options?: BaseOptions): void;
    applyState(state?: State): void;
    initState(): State;
    dispose: () => void;
    private initRoomObservers;
    private hideAllLabels;
    private fixDoorVisibleAndPosition;
    private fixDoorPosition;
    private onClick;
    private initData;
}
