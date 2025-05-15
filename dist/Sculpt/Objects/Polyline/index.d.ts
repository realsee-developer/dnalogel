import { PolylineMesh, PolylineWithDotsMesh, type PolylineData, type PolylineStyle } from '../../Meshes/Polyline';
import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import { PolylineEditor } from './Editor';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { LiteralString } from '../../../typings/utils.type';
import type { CreateLimitConfig } from '../../typings/style';
export interface PolylineImportData extends BaseImportData, PolylineData {
    type: LiteralString<'Polyline'>;
    style?: Partial<PolylineStyle>;
}
export declare class Polyline extends BaseObject<PolylineImportData> {
    readonly type = "Polyline";
    polyLineMesh: PolylineWithDotsMesh;
    get editor(): PolylineEditor;
    _editor: PolylineEditor;
    private creatingObject?;
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
    setData(data: Partial<PolylineImportData>): void;
    highlight(): void;
    unhighlight(): void;
    canUndo(): void;
    canRedo(): void;
    undo(): void;
    redo(): void;
    create(params?: Partial<PolylineStyle & CreateLimitConfig>): Promise<void>;
}
/**
 * @description 绘制折线
 * @param config.limit 限制折线绘制的平面; `xoz` 限制在水平面; `y` 限制垂直面; `none` 不限制；默认 `none`
 */
export declare function createPolyline(polyLineMesh: PolylineMesh, pointSelector: PointSelector, config?: Partial<CreateLimitConfig>): {
    finished: Promise<void>;
    canUndo: () => boolean;
    canRedo: () => boolean;
    undo: () => void;
    redo: () => void;
};
