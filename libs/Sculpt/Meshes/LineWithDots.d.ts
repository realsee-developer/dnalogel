import { type AnyPositions } from '../../shared-utils/positionToVector3';
import { PointMesh } from './Point';
import { LineMesh, type LineMeshStyle } from './Line';
import { IObject3D } from '../../shared-utils/three/IObject3D';
import type { PointsData } from '../utils/data';
type Style = LineMeshStyle & {
    pointVisibility?: boolean | {
        startPoint?: boolean;
        endPoint?: boolean;
    };
};
/**
 * Represents a mesh that consists of a line with dots at the start and end points.
 */
export declare class LineWithDotsMesh extends LineMesh {
    name: string;
    pointGroup: IObject3D;
    private _paramsStyle;
    get startPoint(): PointMesh;
    get endPoint(): PointMesh;
    get visiblePointMeshes(): PointMesh[];
    get pointMeshes(): PointMesh[];
    constructor(params?: Partial<Style & PointsData>);
    setPoints(points: AnyPositions): void;
    setStyle: (style: Partial<Style>) => void;
    highlight: () => void;
    unhighlight: () => void;
    private updateEdgePointsVisibility;
}
export {};
