import type { Five } from '@realsee/five';
import type { Group } from 'three';
import type { Model } from '../../Model';
import type { PanoMeasurePluginEvent } from '../../typings/event.type';
import type { OpenParameter } from '../../typings/data';
import type { Subscribe } from '../../../shared-utils/Subscribe';
export interface RangePieceControllerParams {
    openParams: OpenParameter;
    container: Element;
    five: Five;
    group: Group;
    model: Model;
    mouseGroup: Group;
    hook: Subscribe<PanoMeasurePluginEvent>;
}
export default class RangePieceController {
    private container;
    private five;
    private group;
    private mouseGroup;
    private hasAppendMouseGroup;
    private hook;
    private content;
    private intersectMesh;
    private centerMouseXY;
    private raycaster;
    private pieceStyl;
    constructor(params: RangePieceControllerParams);
    dispose(): void;
    private onCameraDirectionUpdate;
    private onWillChangeState;
    /** 计算目标中心点经纬度 */
    private computedCenterMouseXY;
    /** 计算目标中心点intersection */
    private getIntersection;
    private pieceChange;
    private calculateSize;
    /** 点击按钮时圆片动画 */
    private dotAnimation;
    private changePieceStyl;
    private updateMouseGroup;
}
