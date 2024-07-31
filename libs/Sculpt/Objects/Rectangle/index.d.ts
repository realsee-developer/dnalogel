import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { ArrayPosition } from '../../../PanoTagPlugin';
import type { RectangleData, RectangleMesh } from '../../Meshes/Rectangle';
import { RectangleWithEdgeMesh, type RectangleWithEdgeMeshStyle } from '../../Meshes/RectangleWithEdge';
import type { LiteralString } from '../../../typings/utils.type';
export interface RectangleImportData extends BaseImportData, RectangleData {
    type: LiteralString<'Rectangle'>;
    style?: Partial<RectangleWithEdgeMeshStyle>;
}
export declare class Rectangle extends BaseObject<RectangleImportData> {
    readonly type = "Rectangle";
    rectangleMesh: RectangleWithEdgeMesh;
    get data(): {
        points: [ArrayPosition, ArrayPosition, ArrayPosition];
        style: {
            color: number;
            lineWidth: number;
            lineColor: number;
        };
        id: string;
        type: string;
    };
    constructor(data?: RectangleImportData, config?: Partial<BaseObjectConfig>);
    highlight(): void;
    unhighlight(): void;
    create(params?: Partial<RectangleWithEdgeMeshStyle>): Promise<void>;
}
export declare function createRectangle(rectangleMesh: RectangleMesh, pointSelector: PointSelector): Promise<void>;
