import type { LineStyle } from '../typings/style';
import { CircleMesh, type CircleData, type CircleStyle } from './Circle';
export type CircleWithEdgeMeshStyle = CircleStyle & LineStyle;
export declare class CircleWithEdgeMesh extends CircleMesh {
    private edgeLine;
    constructor(params?: Partial<CircleWithEdgeMeshStyle & CircleData>);
    setPoints(...params: Parameters<InstanceType<typeof CircleMesh>['setPoints']>): void;
    setStyle(style: Partial<CircleWithEdgeMeshStyle>): void;
    highlight(): void;
    unhighlight(): void;
}
