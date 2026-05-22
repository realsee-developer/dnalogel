import { PointMesh, type PointData, type PointStyle } from '../../Meshes/Point';
import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import { PointEditor } from './Editor';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { LiteralString } from '../../../typings/utils.type';
export interface PointImportData extends BaseImportData, PointData {
    type: LiteralString<'Point'>;
    style?: Partial<PointStyle>;
}
export declare class Point extends BaseObject<PointImportData> {
    readonly type = "Point";
    pointMesh: PointMesh;
    get editor(): PointEditor;
    _editor: PointEditor;
    get data(): {
        point: [number, number, number];
        style: {
            color: number;
            size: number;
        };
        id: string;
        type: string;
    };
    constructor(data?: PointImportData, config?: Partial<BaseObjectConfig>);
    setData(data: Partial<PointImportData>): void;
    highlight(): void;
    unhighlight(): void;
    /**
     * @description: 设置颜色
     * @param {Color} style.color
     * @param {number} style.size
     */
    setStyle(style: Partial<PointStyle>): void;
    /**
     * @description: 创建点
     */
    create(params?: Partial<PointStyle>): Promise<void>;
}
export declare function createPoint(pointMesh: PointMesh, pointSelector: PointSelector): Promise<void>;
