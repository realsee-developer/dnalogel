import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { ArrayPosition } from '../../../PanoTagPlugin';
import type { RectangleData, RectangleMesh } from '../../Meshes/Rectangle';
import { RectangleWithEdgeMesh, type RectangleWithEdgeMeshStyle } from '../../Meshes/RectangleWithEdge';
import type { LiteralString } from '../../../typings/utils.type';
import type { DrawMethodConfig, CreateLimitConfig } from '../../typings/style';
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
    create(config?: Partial<RectangleWithEdgeMeshStyle & CreateLimitConfig & DrawMethodConfig>): Promise<void>;
}
/**
 * @description 创建矩形
 */
export declare function createRectangle(rectangleMesh: RectangleMesh, pointSelector: PointSelector, config?: Partial<CreateLimitConfig & DrawMethodConfig>): Promise<void>;
