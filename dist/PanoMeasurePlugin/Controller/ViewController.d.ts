import BaseController, { type ControllerParams } from './BaseController';
export default class ViewController extends BaseController {
    type: string;
    private hammer?;
    constructor(params: ControllerParams);
    dispose(): void;
    private polylineRemoved;
    private polylineAdded;
    private onCameraUpdate;
    private onFiveModeChange;
    private onFivePanoWillArrive;
    private onFivePanoArrived;
}
