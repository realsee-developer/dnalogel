import * as THREE from 'three';
import { type ColorStyle, type DisplayInfoConfig, type OcclusionStyle } from '../typings/style';
import { IObject3D } from '../../shared-utils/three/IObject3D';
import type { PointData } from '../utils/data';
import { LightTag } from '../../shared-utils/tag';
export type { PointData } from '../utils/data';
export declare const circleImageURL: string;
export type PointStyle = ColorStyle & {
    size: number;
} & OcclusionStyle & Partial<DisplayInfoConfig>;
export declare class PointMesh extends IObject3D {
    name: string;
    get color(): THREE.Color;
    get size(): number;
    get style(): {
        color: THREE.Color;
        size: number;
        occlusionVisibility: boolean;
        occlusionMode: string;
    };
    dom: LightTag;
    private opacityBeforeHighlight;
    private highlighted;
    private fontMesh;
    private backgroundMesh;
    private lastRenderDomItem;
    private paramsStyle;
    private _visible;
    private get five();
    constructor(params?: Partial<PointStyle & PointData>);
    setStyle(params: Partial<PointStyle>): void;
    highlight(): void;
    unhighlight(): void;
    updateMatrixWorld(force?: boolean): void;
    private updateDom;
}
