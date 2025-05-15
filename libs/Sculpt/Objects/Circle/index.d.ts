import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import { CircleMeshEditor } from '../../Editors/CircleMeshEditor';
import type { CircleData, CircleMesh } from '../../Meshes/Circle';
import { CircleWithEdgeMesh, type CircleWithEdgeMeshStyle } from '../../Meshes/CircleWithEdge';
import type { LiteralString } from '../../../typings/utils.type';
export interface CircleImportData extends BaseImportData, CircleData {
    type: LiteralString<'Circle'>;
    style?: Partial<CircleWithEdgeMeshStyle>;
}
export declare class Circle extends BaseObject<CircleImportData> {
    readonly type = "Circle";
    circleMesh: CircleWithEdgeMesh;
    get editor(): CircleMeshEditor;
    _editor: CircleMeshEditor;
    get data(): {
        center: [number, number, number];
        normal: [number, number, number];
        radius: number;
        style: {
            color: number;
        };
        id: string;
        type: string;
    };
    constructor(data?: CircleImportData, config?: Partial<BaseObjectConfig>);
    setData(data: Partial<CircleImportData>): void;
    highlight(): void;
    unhighlight(): void;
    create(params?: Partial<CircleWithEdgeMeshStyle>): Promise<void>;
}
export declare function createCircle(circleMesh: CircleMesh, pointSelector: PointSelector): Promise<void>;
