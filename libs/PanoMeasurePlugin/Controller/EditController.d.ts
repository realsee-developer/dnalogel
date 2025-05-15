import Line from '../Model/line';
import BaseController from './BaseController';
import type { ControllerParams } from './BaseController';
import { Polyline } from '../Model/polyline';
import Area from '../Model/area';
export default class EditController extends BaseController {
    type: string;
    polyline: Polyline;
    area: Area;
    private hasAppendDashed;
    private fiveElement?;
    /** 上一个端点位置 */
    private lastPoint;
    private pointSelector;
    private deleteDom;
    /** 根据 intersection 更新放大镜和吸附点 */
    private onIntersectionUpdate;
    constructor(params: ControllerParams);
    dispose(): void;
    getEditingLines(): Line[];
    /** 撤销编辑 */
    revoke: () => void;
    /**
     * @description: 测面积的撤销功能
     */
    revokeArea: () => void;
    /**
     * @description: 测距的撤销功能
     */
    revokeLine: (_polyline?: Polyline) => void;
    selectPoint(): void;
    complete(): void;
    private checkMouseLeave;
    /** 编辑线条发生改变时通知外部 */
    private onLineChanged;
    private onWantsSelect;
    private wantsMoveToPano;
    /**
     * 1. 如果存在上一个点，需要绘制当前点到上一个点的连线
     * 2. 把上一个点的位置更新为当前点的位置
     * 3. 清除 pointSelector
     */
    private onSelect;
    /** 移动全景时更新 distanceItem 在屏幕上的位置 */
    private onCameraUpdate;
    /** 更新虚线 */
    private updateDashed;
    private wantsTapGesture;
    private chooseLine;
    private chooseArea;
    private highlightArea;
    private unHighlightArea;
    private highlightLines;
    private unHighlightLines;
    private highlightLine;
    private deleteArea;
    private deleteLine;
}
