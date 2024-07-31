import type MeasureController from '.';
import type { Five } from '@realsee/five';
/** 快捷键控制器 */
export declare class ShortcutKeyController {
    five: Five;
    measureController: MeasureController;
    constructor(measureController: MeasureController, five: Five);
    dispose(): void;
    private escape;
    private onKeyDown;
    private onMouseDown;
}
