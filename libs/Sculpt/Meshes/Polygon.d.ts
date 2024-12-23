import * as THREE from 'three';
import { type AnyPositions } from '../../shared-utils/positionToVector3';
import ColoredMesh, { type ColoredMeshStyle } from '../utils/three/ColoredMesh';
import type { PointsData } from '../utils/data';
export declare const blankGeometry: THREE.BufferGeometry & {
    isBlank: true;
};
export type PolygonStyle = ColoredMeshStyle & {
    lengthEnable: boolean;
};
export type PolygonData = PointsData;
export declare class PolygonMesh extends ColoredMesh<THREE.BufferGeometry> {
    name: string;
    get style(): {
        lengthEnable: boolean;
        color: THREE.Color;
        opacity: number;
        occlusionVisibility: boolean;
        occlusionMode: "translucence" | "depthTest";
    };
    get isBlank(): boolean;
    get center(): THREE.Vector3;
    get geometryInfo(): {
        area: number;
        center: THREE.Vector3;
    };
    points: THREE.Vector3[];
    planeHelperNeedUpdate: boolean;
    geometryInfoNeedUpdate: boolean;
    _paramsStyle: Partial<PolygonStyle>;
    private get five();
    private planeHelper;
    private _geometryInfo;
    private lastRenderAreaItem;
    private areaDom?;
    constructor(params?: Partial<PolygonStyle & PolygonData>);
    updateMatrixWorld(force?: boolean): void;
    setStyle(params: Partial<ColoredMeshStyle>): void;
    setPoints(points: AnyPositions): void;
    /**
     * @description: 获取一个点投影在当前平面上的点
     */
    projectPoint(point: THREE.Vector3): THREE.Vector3;
    private updatePlaneHelper;
    private updateAreaItems;
}
