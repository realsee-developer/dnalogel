import type { Vector3 } from 'three';
import type { Mode } from '../Controller';
import type { State } from '../Controller/MixedController';
import type Line from '../Model/line';
import type Point from '../Model/point';
import type { Polyline } from '../Model/polyline';
import type { MeasureType } from './data';
type ControllerEvent = {
    enable: (userAction: boolean) => void;
    disable: (userAction: boolean) => void;
    /**
     * Mode 变更
     */
    modeChange: (mode: Mode) => void;
};
type WatchEvent = {
    selectedChange: (lines: Line[]) => void;
};
type EditEvent = {
    /** 编辑线条变更 */
    editedPolylineChange: (polyline: Polyline) => void;
    /** 编辑中的虚线变更 */
    editedDashedLineChange: (line: Line | null) => void;
    anchorChange: (anchor: Vector3 | null) => void;
    /** 测量类型变更 */
    measureTypeChange: (measureTpe: MeasureType) => void;
    revoke: (params: {
        isEmpty: boolean;
    }) => void;
    /** 点一下按钮就可以完成，如：测距中，差最后一次打点就可以完成线段；测面积中，当前点吸附到了多边形的开始点上，点一下就可以闭合多边形 */
    readyComplete: () => void;
    /** 点击了撤销或者其他原因导致刚刚的 readyComplete 失效 */
    notReadyComplete: () => void;
    /** 选点 */
    pointsChange: (points: any[]) => void;
    /** 一条线段或者一个面积编辑完成 */
    complete: () => void;
    /** 测量面积时，是否可以打点的状态是会一直变的 */
    allowAddPointStateChange: (state: 'allow' | 'forbid') => void;
};
type DragEvent = {
    wantsDragLine: (event: {
        point: string;
        lines: string[];
    }) => boolean;
};
/** 移动端专用事件 */
type MobileEvent = {
    getStartPoint: (point: Point) => void;
    getEndPoint: (point: Point) => void;
    willChangeState: (state: State, newState: State) => void;
    nowPointChange: (point: Point) => void;
};
export type PanoMeasurePluginEvent = ControllerEvent & EditEvent & WatchEvent & DragEvent & MobileEvent;
export {};
