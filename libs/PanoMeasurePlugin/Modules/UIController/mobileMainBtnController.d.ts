import type { UIControllerParams } from '.';
import type MeasureController from '../../Controller';
export declare class MobileMainBtnController {
    private container;
    private measureController;
    private mainElement;
    private _params;
    private _btnTexts;
    constructor(measureController: MeasureController, container: Element, params: UIControllerParams);
    dispose(): void;
    private getMainElement;
    private change2Add;
    private change2Done;
    private onClick;
}
