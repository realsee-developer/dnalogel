import { type AnyPosition } from '../../shared-utils/positionToVector3';
import type { LineStyle } from '../typings/style';
import type { PointsData } from '../utils/data';
import type { ColoredMeshStyle } from '../utils/three/ColoredMesh';
import { PrismMesh } from './Prism';
export type BoxStyle = ColoredMeshStyle & LineStyle;
export type BoxData = PointsData & {
    heightPoint: AnyPosition;
};
/**
 * @description: Box
 */
export declare class BoxMesh extends PrismMesh {
    name: string;
    get geometryInfo(): {
        center: import("three").Vector3;
    };
}
