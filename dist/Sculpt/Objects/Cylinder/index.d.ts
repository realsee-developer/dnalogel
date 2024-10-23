import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { CircleStyle } from '../../Meshes/Circle';
import { CylinderMesh, type CylinderData } from '../../Meshes/Cylinder';
import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import type { LiteralString } from '../../../typings/utils.type';
type CylinderStyle = CircleStyle;
export interface CylinderImportData extends BaseImportData, CylinderData {
    type: LiteralString<'Cylinder'>;
    style?: Partial<CylinderStyle>;
}
export declare class Cylinder extends BaseObject<CylinderImportData> {
    readonly type = "Cylinder";
    cylinderMesh: CylinderMesh;
    get data(): {
        bottomCenter: [number, number, number];
        topCenter: [number, number, number];
        radius: number;
        style: {
            color: number;
        };
        id: string;
        type: string;
    };
    constructor(data?: CylinderImportData, config?: Partial<BaseObjectConfig>);
    highlight(): void;
    unhighlight(): void;
    create(params?: Partial<CylinderStyle>): Promise<void>;
}
export declare function createCylinder(cylinderMesh: CylinderMesh, pointSelector: PointSelector): Promise<void>;
export {};
