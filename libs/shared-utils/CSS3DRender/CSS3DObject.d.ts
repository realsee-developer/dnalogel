import { Vector3 } from 'three';
import { CSS3DObject } from '../three/CSS3DRenderer';
export declare const MinRatio = 0.00216;
export declare const DefaultRatio = 0.003;
export type Mode = 'front' | 'behind';
export declare class CSS3DObjectPlus<T extends HTMLElement = HTMLElement> extends CSS3DObject {
    version: number;
    readonly isCSS3DObject: true;
    name: string;
    /**
     * @description object dom
     */
    container: T;
    width: number;
    height: number;
    domWidthPx: number;
    domHeightPx: number;
    cornerPoints: Vector3[];
    centerPosition: Vector3;
    ratio: number;
    get mode(): 'front' | 'behind';
    set mode(mode: 'front' | 'behind');
    private _mode;
    private _opacityMesh;
    constructor(params: {
        container?: T;
        mode?: 'front' | 'behind';
        width?: number;
        cornerPoints?: Vector3[];
        ratio?: number;
        dpr?: number;
        pointerEvents?: 'none' | 'auto';
        style?: Partial<CSSStyleDeclaration>;
    });
    removeFromParent(): this;
    dispose(): void;
}
