import * as THREE from 'three';
import { type Color, type OcclusionStyle, type LineStyle, type lengthConfig, type DisplayInfoConfig } from '../typings/style';
import { LineMaterial, THREE_Line2 } from '../../shared-utils/five/FiveLine';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';
import { type AnyPositions } from '../../shared-utils/positionToVector3';
import { IObject3D } from '../../shared-utils/three/IObject3D';
import type { Merge } from 'type-fest';
import type { PointsData } from '../utils/data';
import { LightTag } from '../../shared-utils/tag';
export type LineMeshStyle = LineStyle & {
    dashed?: boolean;
} & OcclusionStyle & Partial<lengthConfig> & Partial<DisplayInfoConfig>;
export type LineData = PointsData;
export declare class LineMaterial2 extends LineMaterial {
    get three_color(): Color;
    set three_color(value: Color);
    /**
     * @deprecated Use `setDashed` to set
     */
    dashed: boolean;
    private _three_color;
    constructor(params?: Merge<ConstructorParameters<typeof LineMaterial>[0], THREE.MeshBasicMaterialParameters>);
    setDashed(dashed: boolean): void;
}
export declare class THREE_Line3 extends THREE_Line2 {
    name: string;
    material: LineMaterial2;
    constructor(geometry: LineGeometry, material: LineMaterial2);
}
export declare class LineMesh extends IObject3D {
    name: string;
    points: THREE.Vector3[];
    doms: LightTag[];
    get style(): LineMeshStyle;
    get opacity(): number;
    get lineWidth(): number;
    get color(): THREE.Color;
    get dashed(): boolean;
    get occlusionVisibility(): boolean;
    get occlusionMode(): "translucence" | "depthTest";
    protected highlighted: boolean;
    private get five();
    private line;
    private backLine;
    private opacityBeforeHighlight;
    private paramsStyle;
    private lastRenderDomItem;
    constructor(params?: Partial<LineMeshStyle & LineData>);
    updateMatrixWorld(force?: boolean): void;
    setPoints(points: AnyPositions): void;
    setResolution(width: number, height: number): void;
    setStyle(params: Partial<LineMeshStyle>): void;
    highlight(): void;
    unhighlight(): void;
    private updateDomItems;
}
