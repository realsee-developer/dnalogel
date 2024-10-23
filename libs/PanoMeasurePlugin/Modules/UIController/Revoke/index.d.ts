import type MeasureController from '../../../Controller';
export default class Revoke {
    private container;
    private revokeIcon;
    private revokeItem;
    private measureController;
    constructor(measureController: MeasureController, container: Element);
    dispose(): void;
    private onClick;
    private onModeChange;
    private onAnchorChange;
}
