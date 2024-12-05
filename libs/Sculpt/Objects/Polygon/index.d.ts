import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import { AreaMesh, type AreaStyle } from '../../Meshes/Area';
import { PolygonEditor } from './Editor';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { LiteralString } from '../../../typings/utils.type';
import type { PolygonData, PolygonStyle } from '../../Meshes/Polygon';
import type { CreateLimitConfig } from '../../typings/style';
export interface PolygonImportData extends BaseImportData, PolygonData {
    type: LiteralString<'Polygon'>;
    style?: Partial<AreaStyle>;
}
export declare class Polygon extends BaseObject<PolygonImportData> {
    readonly type = "Polygon";
    areaMesh: AreaMesh;
    get editor(): PolygonEditor;
    _editor: PolygonEditor;
    private creatingObject?;
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
    setData(data: Partial<PolygonImportData>): void;
    highlight(): void;
    unhighlight(): void;
    canUndo(): void;
    canRedo(): void;
    undo(): void;
    redo(): void;
    create(params?: Partial<PolygonStyle & CreateLimitConfig>): Promise<void>;
}
export declare function createPolygon(areaMesh: AreaMesh, pointSelector: PointSelector, config?: Partial<CreateLimitConfig>): {
    finished: Promise<void>;
    canUndo: () => boolean;
    canRedo: () => boolean;
    undo: () => void;
    redo: () => void;
};
