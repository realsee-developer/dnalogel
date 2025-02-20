import { noop } from './utils';
import { type PaintBrushAction, type PaintBrushConfigs, type PaintBrushEventMap, type PaintBrushState } from './typings';
import { Subscribe } from './Subscribe';
export declare class Controller extends Subscribe<PaintBrushEventMap> {
    configs: PaintBrushConfigs;
    private clientWidth;
    private clientHeight;
    private ready;
    private uuid;
    private tween?;
    private tweening;
    private container;
    private canvas;
    private data;
    private tempLine;
    get color(): string;
    get state(): Record<string, PaintBrushState[]>;
    get dpr(): number;
    constructor(configs: PaintBrushConfigs);
    ifInsertToDOM(): HTMLDivElement;
    /**
     *
     * @param className 初始化画板
     * @returns
     */
    initCanvas(className: string): HTMLCanvasElement;
    /**
     * 初始化操作面板
     * @returns
     */
    initCtrl(): HTMLDivElement;
    openBrush(): void;
    closeBrush(): void;
    updateCurrentColor(color: string): void;
    openBrushHandle(): void;
    emitStateChange(action: PaintBrushAction, userAction?: boolean): void;
    action(action: PaintBrushAction): void;
    handleDrawLine(_uuid: string, data: PaintBrushState, { withUndo }: {
        withUndo?: boolean;
    }, callback?: typeof noop): void;
    handleUndo(uuid: string): void;
    destroyBrush(): void;
}
