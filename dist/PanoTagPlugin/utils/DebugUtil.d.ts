import type PanoTagPluginController from '../controller';
export declare class DebugUtil {
    plugin: PanoTagPluginController;
    get debug(): boolean;
    private logBinded;
    constructor(plugin: PanoTagPluginController);
    addDebugPoints(): void;
    bindLog(): void;
    addLog(functionName: string, ...args: any[]): void;
    private closeIntersectRaycaster;
}
