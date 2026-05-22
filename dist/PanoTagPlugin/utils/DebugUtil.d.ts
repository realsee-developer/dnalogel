import type PanoTagPluginController from '../controller';
export declare class DebugUtil {
    plugin: PanoTagPluginController;
    get debug(): boolean;
    private logBound;
    constructor(plugin: PanoTagPluginController);
    addDebugPoints(): void;
    bindLog(): void;
    private log;
    private bindLogByObject;
    private closeIntersectRaycaster;
}
