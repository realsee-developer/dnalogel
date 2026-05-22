import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import { RectangleMeshEditor } from '../../Editors/RectangleMeshEditor';
import { RectangleMesh, type RectangleData } from '../../Meshes/Rectangle';
import { RectangleWithEdgeMesh, type RectangleWithEdgeMeshStyle } from '../../Meshes/RectangleWithEdge';
import type { LiteralString } from '../../../typings/utils.type';
import type { DrawMethodConfig, CreateLimitConfig } from '../../typings/style';
export interface RectangleImportData extends BaseImportData, RectangleData {
    type: LiteralString<'Rectangle'>;
    style?: Partial<RectangleWithEdgeMeshStyle>;
}
export type RectangleCreateConfig = Partial<RectangleWithEdgeMeshStyle & CreateLimitConfig & DrawMethodConfig> & {
    onPointPlaced?: () => void;
};
export declare class Rectangle extends BaseObject<RectangleImportData> {
    readonly type = "Rectangle";
    rectangleMesh: RectangleWithEdgeMesh;
    get editor(): RectangleMeshEditor;
    _editor: RectangleMeshEditor;
    get data(): {
        points: [number, number, number][];
        style: {
            color: number;
            opacity: number;
            lineWidth: number;
            lineColor: number;
        };
        id: string;
        type: string;
    };
    constructor(data?: RectangleImportData, config?: Partial<BaseObjectConfig>);
    setData(data: Partial<RectangleImportData>): void;
    highlight(): void;
    unhighlight(): void;
    create(config?: RectangleCreateConfig): Promise<void>;
}
/**
 * @description 创建矩形
 */
export declare function createRectangle(rectangleMesh: RectangleMesh, pointSelector: PointSelector, config?: RectangleCreateConfig): void | Promise<void>;
/**
 * @description 对角线创建矩形（两步）
 */
export declare function createRectangleByDiagonal(rectangleMesh: RectangleMesh, pointSelector: PointSelector, config?: RectangleCreateConfig): void | Promise<void>;
/**
 * @description 正常创建矩形（三步）
 */
export declare function createRectangleByVertex(rectangleMesh: RectangleMesh, pointSelector: PointSelector, config?: RectangleCreateConfig): void | Promise<void>;
