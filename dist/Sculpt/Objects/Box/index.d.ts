import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import { BoxMeshEditor } from '../../Editors/BoxMeshEditor';
import { BoxMesh, type BoxData, type BoxStyle } from '../../Meshes/Box';
import type { LiteralString } from '../../../typings/utils.type';
import type { CreateLimitConfig, DrawMethodConfig } from '../../typings/style';
export interface BoxImportData extends BaseImportData, BoxData {
    type: LiteralString<'Box'>;
    style?: Partial<BoxStyle>;
}
export declare class Box extends BaseObject<BoxImportData> {
    readonly type = "Box";
    boxMesh: BoxMesh;
    get editor(): BoxMeshEditor;
    _editor: BoxMeshEditor;
    get data(): {
        points: [number, number, number][];
        heightPoint: [number, number, number];
        style: {
            color: number;
            opacity: number;
            lineWidth: number;
            lineColor: number;
        };
        id: string;
        type: string;
    };
    constructor(data?: BoxImportData, config?: Partial<BaseObjectConfig>);
    setData(data: Partial<BoxImportData>): void;
    highlight(): void;
    unhighlight(): void;
    create(params?: Partial<BoxStyle & CreateLimitConfig & DrawMethodConfig>): Promise<void>;
}
export declare function createBox(boxMesh: BoxMesh, pointSelector: PointSelector, config?: Partial<CreateLimitConfig & DrawMethodConfig>): Promise<void>;
