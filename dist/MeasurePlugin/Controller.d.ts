import type { Five } from '@realsee/five';
import * as THREE from 'three';
import { PointSelector } from '../shared-utils';
import { MeasureMesh } from './utils/MeasureMesh';
import { Subscribe } from '../shared-utils/Subscribe';
import type { MeasurePluginConfig } from '.';
type Event = {
    measureEnd: () => void;
    undo: () => void;
};
export declare class MeasureController extends Subscribe<Event> {
    readonly name = "MeasurePlugin";
    currentMeasureMesh?: MeasureMesh | null;
    private five;
    private group;
    get pointSelector(): PointSelector;
    private _pointSelector;
    private get fiveDomEvents();
    private _fiveDomEvents;
    private get cursor();
    private _cursor;
    get config(): MeasurePluginConfig;
    set config(config: MeasurePluginConfig);
    private _config?;
    private lineStyle;
    private polygonStyle;
    constructor(five: Five, config?: MeasurePluginConfig);
    /**
     * @description Initialize event listeners for all existing meshes
     */
    initEventListeners: () => void;
    /**
     * @description 开始测量
     */
    measure: () => void;
    /**
     * @description 结束测量
     */
    endMeasure: () => void;
    /**
     * Enable or disable the display of length measurements
     * @param enable - Whether to display length measurements
     */
    setLengthEnable: (enable: boolean) => void;
    /**
     * Switch the measurement unit without resetting the plugin
     * @param unit - The new unit to use ('m' for metric or 'ft' for imperial)
     */
    setUnit: (unit: 'm' | 'ft') => void;
    /**
     * @description 取消本次测量
     */
    cancel: () => void;
    /**
     * @description 撤销上一步
     */
    undo: () => void;
    /**
     * @description 清空正在测量的内容
     */
    clearCurrentMeasure: () => void;
    /**
     * @description 清空所有测量内容
     */
    clear: () => void;
    dispose: () => void;
    private listener;
    private onMoveToPano;
    private onModeChange;
    private onClick;
    private onHover;
    private onUnHover;
    private deleteSelectedMesh;
    private removeMeshEventListeners;
    private updateSelectAdsorbedHelper;
    private addMeshEventListeners;
    /**
     * @description Load measurement data from external source
     * @param data Array of point data for measurements
     */
    load: (data: {
        points: THREE.Vector3[];
    }[]) => void;
}
export {};
