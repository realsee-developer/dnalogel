import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import * as THREE from 'three';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import { BoxMeshEditor } from '../../Editors/BoxMeshEditor';
import { BoxMesh, type BoxData, type BoxStyle } from '../../Meshes/Box';
import type { LiteralString } from '../../../typings/utils.type';
import type { CreateLimitConfig, DrawMethodConfig } from '../../typings/style';
export interface BoxImportData extends BaseImportData, BoxData {
    type: LiteralString<'Box'>;
    style?: Partial<BoxStyle>;
}
export type BoxCreateConfig = Partial<BoxStyle & CreateLimitConfig & DrawMethodConfig> & {
    onPointPlaced?: () => void;
};
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
    create(params?: BoxCreateConfig): Promise<void>;
    /**
     * 获取盒子在世界坐标中的6个面的几何信息
     * 返回顺序：bottom、top、side0~side3（自底面第0点起顺时针）
     */
    getWorldFacesGeometry(): Array<{
        name: 'bottom' | 'top' | `side${number}`;
        vertices: THREE.Vector3[];
        center: THREE.Vector3;
        normal: THREE.Vector3;
    }>;
}
export declare function createBox(boxMesh: BoxMesh, pointSelector: PointSelector, config?: BoxCreateConfig): Promise<void>;
