import type { AnyPositions } from '../../shared-utils/positionToVector3';
import { RectangleMesh, type RectangleData, type RectangleStyle } from './Rectangle';
import { PolylineMesh } from './Polyline';
import type { LineStyle } from '../typings/style';
export type RectangleWithEdgeMeshStyle = RectangleStyle & LineStyle;
/**
 * @description: 带边线的矩形
 */
export declare class RectangleWithEdgeMesh extends RectangleMesh {
    name: string;
    get style(): {
        lineColor: import("three").Color;
        lineWidth: number;
        opacity: number;
        dashed: boolean;
        occlusionVisibility: boolean;
        occlusionMode: "depthTest" | "translucence";
        lengthEnable: boolean;
        color: import("three").Color;
    };
    get lineWidth(): number;
    get lineColor(): import("three").Color;
    line: PolylineMesh;
    constructor(params?: Partial<RectangleWithEdgeMeshStyle & RectangleData>);
    setPoints(points: AnyPositions): void;
    setStyle(style: Partial<RectangleWithEdgeMeshStyle>): void;
    highlight(): void;
    unhighlight(): void;
}
