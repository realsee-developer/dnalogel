import { type AnyPositions } from '../../shared-utils/positionToVector3';
import * as THREE from 'three';
import { PolygonMesh } from './Polygon';
import { RectangleGeometry } from '../utils/three/RectangleGeometry';
import type { PointsData } from '../utils/data';
import type { ColoredMeshStyle } from '../utils/three/ColoredMesh';
export type RectangleStyle = ColoredMeshStyle;
export type RectangleData = PointsData;
/**
 * @description: 矩形
 */
export declare class RectangleMesh extends PolygonMesh {
    name: string;
    meshFont: THREE.Mesh<RectangleGeometry, THREE.MeshBasicMaterial>;
    meshBackground: THREE.Mesh<RectangleGeometry, THREE.MeshBasicMaterial>;
    get color(): THREE.Color;
    constructor(params?: Partial<RectangleStyle & RectangleData>);
    setPoints(points: AnyPositions): void;
}
