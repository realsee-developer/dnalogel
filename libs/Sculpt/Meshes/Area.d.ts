import type { LineStyle } from '../utils/color';
import type { PointsData } from '../utils/data';
import type { ColoredMeshStyle } from '../utils/three/ColoredMesh';
import { PolygonWithEdgeMesh } from './PolygonWithEdge';
export type AreaStyle = ColoredMeshStyle & LineStyle;
export type AreaData = PointsData;
export declare class AreaMesh extends PolygonWithEdgeMesh {
    name: string;
}
