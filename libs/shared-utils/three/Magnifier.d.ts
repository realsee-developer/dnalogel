import type { Five, SubscribeEventMap } from '@realsee/five';
import Hammer from 'hammerjs';
import * as THREE from 'three';
import { Subscribe } from '../Subscribe';
interface MagnifierConfig {
    /** 允许拖动放大镜 */
    dragEnabled: boolean;
    /** renderWithPoint 时，是否应该自动更新放大镜的位置 */
    autoFixPCPosition: boolean;
    /** 放大镜初始位置应该设置在容器的哪个位置 */
    initialPosition: {
        left: string;
        top: string;
    };
}
interface MagnifierEvent extends SubscribeEventMap {
    wantsPanGesture: (event: (typeof Hammer)['Input']) => boolean;
}
/** 放大镜配置参数 */
export interface MagnifierParameter extends Partial<MagnifierConfig> {
    width?: number;
    height?: number;
    scale?: number;
}
export declare class Magnifier {
    width: number;
    height: number;
    containerDom?: Element;
    hooks: Subscribe<MagnifierEvent>;
    canvas: HTMLCanvasElement;
    config: MagnifierConfig;
    state: {
        enabled: boolean;
    };
    private five;
    private scale;
    private offset;
    private context;
    private renderCenter;
    private hammer?;
    private offsetRange?;
    private isPanning;
    private imageData;
    constructor(five: Five, options: MagnifierParameter);
    enable(): this;
    disable(): this;
    dispose(): void;
    /** 把放大镜放到某一个容器中 */
    appendTo(element: Element): this;
    /** 清除放大镜渲染内容 */
    clear(): this;
    /** 放大传入点位周围的内容 */
    renderWithPoint(point: THREE.Vector3): void;
    /** 放大传入点位周围的内容 */
    renderWithScreenPoint(point: {
        x: number;
        y: number;
    }): void;
    resetOffset(): void;
    render(): void;
    protected getRenderCenter(): THREE.Vector3 | {
        x: number;
        y: number;
    };
    private _appendTo;
    private autoFixPCPosition;
    private initStyle;
    private getPanOffset;
    private onPanstart;
    private onPan;
    private onPanend;
}
export {};
