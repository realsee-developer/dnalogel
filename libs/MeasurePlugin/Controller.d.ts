import type { Five } from '@realsee/five';
import * as THREE from 'three';
import { PointSelector } from '../shared-utils';
import { MeasureMesh } from './utils/MeasureMesh';
import { Subscribe } from '../shared-utils/Subscribe';
import type { MeasurePluginConfig } from '.';
export type MeasureEndReason = 'enter' | 'escape' | 'polygon' | 'mode_change' | 'pano_move' | 'floor_change' | 'points_insufficient' | 'external';
export type MeasurePluginEventMap = {
    measureEnd: (reason: MeasureEndReason, points: THREE.Vector3[]) => void;
    undo: () => void;
};
export declare class MeasureController extends Subscribe<MeasurePluginEventMap> {
    readonly name = "MeasurePlugin";
    currentMeasureMesh?: MeasureMesh | null;
    private five;
    private group;
    private currentEndReason;
    private repositioningState;
    private longPressIndicator;
    private cleanupGlobalListeners?;
    private globalTouchHandler;
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
     * @description 通过Enter键结束测量
     */
    private endMeasureByEnter;
    /**
     * @description 通过模式改变结束测量
     */
    private endMeasureByModeChange;
    /**
     * @description 通过全景移动结束测量
     */
    private endMeasureByPanoMove;
    /**
     * @description 通过楼层改变结束测量
     */
    private endMeasureByFloorChange;
    /**
     * Enable or disable the display of length measurements
     * @param enable - Whether to display length measurements
     */
    setLengthEnable: (enable: boolean) => void;
    /**
     * Switch the measurement unit without resetting the plugin
     * @param unit - The new unit to use ('m' for metric, 'ft' for imperial, or 'mm' for millimeters)
     */
    setUnit: (unit: 'm' | 'ft' | 'mm') => void;
    /**
     * Set the precision (number of decimal places) for length measurements
     * @param precision - The number of decimal places for length measurements (area measurements remain at fixed 2 decimal places)
     */
    setPrecision: (precision: number) => void;
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
    private addEndpointLongPressListeners;
    /**
     * @description Load measurement data from external source
     * @param data Array of point data for measurements
     */
    load: (data: {
        points: THREE.Vector3[];
    }[]) => void;
    /**
     * Start repositioning an endpoint
     */
    private startRepositioning;
    /**
     * Helper method to safely update polygon points while maintaining closure
     */
    private updatePolygonPoints;
    /**
     * Handle mouse movement during repositioning
     */
    private onRepositioningMove;
    /**
     * Confirm repositioning with click
     */
    private onRepositioningConfirm;
    /**
     * Confirm repositioning when drag ends (mouse up after long press drag)
     */
    private confirmRepositioningOnDragEnd;
    /**
     * Cancel repositioning (restore original position)
     */
    private cancelRepositioning;
    /**
     * Apply or remove repositioning preview styling
     */
    private applyRepositioningStyle;
    /**
     * Enable global mouse tracking for drag mode (when PointSelector can't track due to mouse being held down)
     */
    private enableGlobalMouseTracking;
    /**
     * Show long press visual feedback circle
     */
    private showLongPressIndicator;
    /**
     * Hide long press visual feedback circle
     */
    private hideLongPressIndicator;
    /**
     * Prevent Five canvas gestures during repositioning
     */
    private preventFiveGestures;
    /**
     * Clean up repositioning state and event listeners
     */
    private cleanupRepositioning;
    private setupGlobalTouchHandler;
    private disposeGlobalTouchHandler;
    /**
     * Calculate screen distance between touch/mouse point and point mesh
     */
    private calculateScreenDistance;
}
