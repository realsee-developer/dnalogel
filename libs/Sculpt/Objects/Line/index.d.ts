import { LineMesh, type LineData, type LineMeshStyle } from '../../Meshes/Line';
import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import { LineEditor } from './Editor';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { LiteralString } from '../../../typings/utils.type';
import type { CreateLimitConfig } from '../../typings/style';
import { LineWithDotsMesh } from '../../Meshes/LineWithDots';
export interface LineImportData extends BaseImportData, LineData {
    type: LiteralString<'Line'>;
    style?: Partial<LineMeshStyle>;
}
export declare class Line extends BaseObject<LineImportData> {
    readonly type = "Line";
    lineMesh: LineWithDotsMesh;
    get editor(): LineEditor;
    _editor: LineEditor;
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
    constructor(data?: LineImportData, config?: Partial<BaseObjectConfig>);
    setData(data: Partial<LineImportData>): void;
    highlight(): void;
    unhighlight(): void;
    canUndo(): void;
    canRedo(): void;
    undo(): void;
    redo(): void;
    create(params?: Partial<LineMeshStyle & CreateLimitConfig>): Promise<void>;
}
/**
 * @description 绘制线段
 * @param config.limit 限制折线绘制的平面; `xoz` 限制在水平面; `y` 限制垂直面; `none` 不限制；默认 `none`
 */
export declare function createLine(lineMesh: LineMesh, pointSelector: PointSelector, config?: Partial<CreateLimitConfig>): {
    finished: Promise<void>;
    canUndo: () => boolean;
    canRedo: () => boolean;
    undo: () => void;
    redo: () => void;
};
