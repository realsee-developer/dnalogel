import type Line from '../Model/line';
import BaseController, { type ControllerParams } from './BaseController';
export default class WatchController extends BaseController {
    type: string;
    private deleteDom;
    private choose;
    private highlightedLines;
    private highlightedArea;
    private fiveElement?;
    private editPointState?;
    private hammer?;
    constructor(params: ControllerParams);
    dispose(): void;
    highlightLine(line: Line): void;
    clearHighlightLines(): void;
    private highlightArea;
    private unHighlightArea;
    private highlightLines;
    private unHighlightLines;
    private onPanStart;
    private onPanEnd;
    private onPan;
    private onIntersectionUpdate;
    private wantsPanGesture;
    private wantsTapGesture;
    private chooseLine;
    private chooseArea;
    private polylineRemoved;
    private onCameraUpdate;
    private deleteArea;
    private deleteLine;
    private cancelDeleteClickCallback;
}