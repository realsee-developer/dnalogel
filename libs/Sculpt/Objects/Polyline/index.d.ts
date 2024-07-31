import type { Color } from '../../../Object3DHelperPlugin';
import { PolylineMesh, PolylineWithDotsMesh, type PolylineData, type PolylineStyle } from '../../Meshes/Polyline';
import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { LiteralString } from '../../../typings/utils.type';
export interface PolylineImportData extends BaseImportData, PolylineData {
    type: LiteralString<'Polyline'>;
    style?: Partial<PolylineStyle>;
}
export declare class Polyline extends BaseObject<PolylineImportData> {
    readonly type = "Polyline";
    polyLineMesh: PolylineWithDotsMesh;
    get data(): {
        points: [number, number, number][];
        style: {
            lineColor: number;
            lineWidth: number;
            dashed: boolean;
        };
        id: string;
        type: string;
    };
    constructor(data?: PolylineImportData, config?: Partial<BaseObjectConfig>);
    highlight(): void;
    unhighlight(): void;
    create(params?: {
        color?: Color;
        lineWidth?: number;
    }): Promise<void>;
}
export declare function createPolyline(polyLineMesh: PolylineMesh, pointSelector: PointSelector): Promise<void>;
