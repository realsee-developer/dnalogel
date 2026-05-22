import type MeasureController from '../../Controller';
export type UIMode = 'pc' | 'mobile';
export interface UIControllerParams {
    container?: Element;
    mode?: UIMode;
    pointSelectorMode?: 'fixed' | 'cursor';
    useNewUI?: boolean;
    /**
     * @description: 是否展示退出按钮
     */
    showExit?: boolean;
    startButtonText?: string;
    endButtonText?: string;
    revokeButtonText?: string;
    exitButtonText?: string;
    i18n?: (key: string) => string;
}
export declare class UIController {
    private revoke?;
    private container;
    private wrapper?;
    private mainController?;
    private disposers;
    private measureController;
    private mode;
    private svelteDom?;
    private _params;
    private useNewUI;
    constructor(measureController: MeasureController, params: UIControllerParams);
    dispose(): void;
    show(): this;
    hide(): this;
    private handleExit;
}
