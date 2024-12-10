import type { ControllerParams } from './BaseController';
import Line from '../Model/line';
import BaseController from './BaseController';
import { Polyline } from '../Model/polyline';
export type State = 'watching' | 'editing';
export default class MixedController extends BaseController {
    state: State;
    polyline: Polyline;
    private hasAppendDashed;
    private mobileStartPoint;
    private mobileNowPoint;
    private highlightedLines;
    private deleteDom;
    private rangePieceController;
    private disposers;
    constructor(params: ControllerParams);
    dispose(): void;
    highlightLine(line: Line): void;
    clearHighlightLines(): void;
    getEditingLines(): Polyline[];
    private onWantsTapGesture;
    /** 编辑时取消走点,watch时可以走 */
    private onWantsToMoveToPano;
    /** 移动全景时更新 distanceItem 在屏幕上的位置 */
    private onCameraUpdate;
    /** mobile态时更新虚线 */
    private updateMobileDashed;
    /** mobile态时更新放大镜 */
    private updateMagnifier;
    private onGetStartPoint;
    private onGetEndPoint;
    private onNowPointChange;
    private onWillChangeState;
    private chooseLine;
    private highlightLines;
    private deleteDomClickCallback;
    private cancelDeleteClickCallback;
}
