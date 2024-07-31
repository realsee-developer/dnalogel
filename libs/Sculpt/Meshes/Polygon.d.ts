import * as THREE from 'three';
import { type AnyPositions } from '../../shared-utils/positionToVector3';
import ColoredMesh, { type ColoredMeshStyle } from '../utils/three/ColoredMesh';
import type { PointsData } from '../utils/data';
export declare const blankGeometry: THREE.BufferGeometry & {
    isBlank: true;
};
export type PolygonStyle = ColoredMeshStyle;
export type PolygonData = PointsData;
export default class PolygonMesh extends ColoredMesh<THREE.BufferGeometry> {
    name: string;
    get isBlank(): boolean;
    get center(): THREE.Vector3;
    points: THREE.Vector3[];
    planeHelperNeedUpdate: boolean;
    private geometryInfoNeedUpdate;
    private planeHelper;
    private geometryInfo;
    private opacityBeforeHighlight;
    private highlighted;
    constructor(params?: Partial<PolygonStyle & PolygonData>);
    setPoints(points: AnyPositions): void;
    getGeometryInfo(): {
        center: THREE.Vector3;
        area: number;
    };
    /**
     * @description: 获取一个点投影在当前平面上的点
     */
    projectPoint(point: THREE.Vector3): THREE.Vector3;
    highlight(): void;
    unhighlight(): void;
    private updatePlaneHelper;
}
