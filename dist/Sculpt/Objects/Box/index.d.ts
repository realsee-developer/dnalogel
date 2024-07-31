import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import { BoxMesh, type BoxData, type BoxStyle } from '../../Meshes/Box';
import type { LiteralString } from '../../../typings/utils.type';
export interface BoxImportData extends BaseImportData, BoxData {
    type: LiteralString<'Box'>;
    style?: Partial<BoxStyle>;
}
export declare class Box extends BaseObject<BoxImportData> {
    readonly type = "Box";
    boxMesh: BoxMesh;
    get data(): {
        points: [number, number, number][];
        heightPoint: [number, number, number];
        style: {
            color: number;
            lineWidth: number;
            lineColor: number;
        };
        id: string;
        type: string;
    };
    constructor(data?: BoxImportData, config?: Partial<BaseObjectConfig>);
    highlight(): void;
    unhighlight(): void;
    create(params?: Partial<BoxStyle>): Promise<void>;
}
export declare function createBox(boxMesh: BoxMesh, pointSelector: PointSelector): Promise<void>;
