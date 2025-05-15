import * as THREE from 'three';
import { type AnyPositions } from '../../shared-utils/positionToVector3';
import ColoredMesh, { type ColoredMeshStyle } from '../utils/three/ColoredMesh';
import type { PointsData } from '../utils/data';
import { LightTag } from '../../shared-utils/tag';
import type { LengthConfig } from '../typings/style';
export declare const blankGeometry: THREE.BufferGeometry & {
    isBlank: true;
};
export type PolygonStyle = ColoredMeshStyle & LengthConfig;
export type PolygonData = PointsData;
export declare class PolygonMesh extends ColoredMesh<THREE.BufferGeometry> {
    name: string;
    get normal(): THREE.Vector3;
    get style(): {
        lengthEnable: boolean;
        color: THREE.Color;
        opacity: number;
        occlusionVisibility: boolean;
        occlusionMode: "depthTest" | "translucence";
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
    areaDom?: LightTag;
    private get five();
    private planeHelper;
    private _geometryInfo;
    private lastRenderAreaItem;
    constructor(params?: Partial<PolygonStyle & PolygonData>);
    updateMatrixWorld(force?: boolean): void;
    setStyle(params: Partial<ColoredMeshStyle>): void;
    setPoints(points: AnyPositions, config?: {
        checkLinesIntersect?: boolean;
    }): void;
    /**
     * @description: 获取一个点投影在当前平面上的点
     */
    projectPoint(point: THREE.Vector3): THREE.Vector3;
    _onAdded: () => void;
    _onRemoved: () => void;
    _onShowed: () => void;
    _onHidden: () => void;
    private updatePlaneHelper;
    private updateAreaItems;
}
