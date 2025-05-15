import type { PaintBrushAction, PaintBrushConfigs, PaintBrushEventMap, PaintBrushState } from './typings';
export declare class PaintBrush {
    private controller;
    constructor(configs?: Partial<PaintBrushConfigs>);
    on<K extends keyof PaintBrushEventMap>(name: K, callback: (...args: Parameters<PaintBrushEventMap[K]>) => ReturnType<PaintBrushEventMap[K]>): void;
    off<K extends keyof PaintBrushEventMap>(name: K, callback: (...args: Parameters<PaintBrushEventMap[K]>) => ReturnType<PaintBrushEventMap[K]>): void;
    once<K extends keyof PaintBrushEventMap>(name: K, callback: (...args: Parameters<PaintBrushEventMap[K]>) => ReturnType<PaintBrushEventMap[K]>): void;
    /**
     * 显示画笔。
     */
    show(): void;
    action(action: PaintBrushAction): void;
    /**
     * 获取画笔状态。
     */
    get state(): Record<string, PaintBrushState[]>;
    get configs(): PaintBrushConfigs;
    /**
     * 销毁。
     *
     * @deprecated
     *
     * @description 画笔应该维护一个 **全局单例**，重复利用。
     */
    dispose(): void;
    setCurrentColor(color: string): void;
}
