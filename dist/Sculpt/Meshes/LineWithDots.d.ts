import { type AnyPositions } from '../../shared-utils/positionToVector3';
import { PointMesh } from './Point';
import { LineMesh, type LineMeshStyle } from './Line';
import { IObject3D } from '../../shared-utils/three/IObject3D';
import type { PointsData } from '../utils/data';
import type { Color } from '../typings/style';
import type { Overwrite } from '../../typings/utils.type';
type Style = LineMeshStyle & {
    pointVisibility?: boolean | {
        startPoint?: boolean;
        endPoint?: boolean;
    };
    pointColor?: Color;
};
/**
 * Represents a mesh that consists of a line with dots at the start and end points.
 */
export declare class LineWithDotsMesh extends LineMesh {
    name: string;
    pointGroup: Overwrite<IObject3D, {
        children: Array<PointMesh>;
    }>;
    private _paramsStyle;
    get startPoint(): PointMesh;
    get endPoint(): PointMesh;
    get visiblePointMeshes(): PointMesh[];
    get pointMeshes(): PointMesh[];
    constructor(params?: Partial<Style & PointsData>);
    setPoints(points: AnyPositions): void;
    setStyle: (style: Partial<Style>) => void;
    highlight: (params?: {
        color?: Color;
    }) => void;
    unhighlight: () => void;
    private updateEdgePointsVisibility;
}
export {};
