import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import { AreaMesh, type AreaStyle } from '../../Meshes/Area';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { LiteralString } from '../../../typings/utils.type';
import type { PolygonData, PolygonStyle } from '../../Meshes/Polygon';
export interface PolygonImportData extends BaseImportData, PolygonData {
    type: LiteralString<'Polygon'>;
    style?: Partial<AreaStyle>;
}
export declare class Polygon extends BaseObject<PolygonImportData> {
    readonly type = "Polygon";
    areaMesh: AreaMesh;
    get data(): {
        points: [number, number, number][];
        style: {
            color: number;
            lineColor: number;
            lineWidth: number;
        };
        id: string;
        type: string;
    };
    constructor(data?: PolygonImportData, config?: Partial<BaseObjectConfig>);
    highlight(): void;
    unhighlight(): void;
    create(params?: Partial<PolygonStyle>): Promise<void>;
}
export declare function createPolygon(areaMesh: AreaMesh, pointSelector: PointSelector): Promise<void>;
