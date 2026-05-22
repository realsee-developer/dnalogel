import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import * as THREE from 'three';
import { PrismMesh, type PrismData, type PrismStyle } from '../../Meshes/Prism';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import { PrismMeshEditor } from '../../Editors/PrismMeshEditor';
import type { LiteralString } from '../../../typings/utils.type';
import type { CreateLimitConfig, PolygonDrawConfig } from '../../typings/style';
export interface PrismImportData extends BaseImportData, PrismData {
    type: LiteralString<'Prism'>;
    style?: Partial<PrismStyle>;
}
export type PrismCreateConfig = Partial<PrismStyle & CreateLimitConfig & PolygonDrawConfig> & {
    onPointPlaced?: (points: THREE.Vector3[]) => void;
    onUndo?: () => void;
    onRedo?: () => void;
    /**
     * @description 检测到自相交时的回调
     * @param point 尝试添加但被拒绝的点坐标
     */
    __onSelfIntersect?: (point: THREE.Vector3) => void;
    /**
     * @description 将要添加的下一个点
     */
    __onWillAddPoint?: (point: THREE.Vector3, points: THREE.Vector3[]) => void;
    /**
     * @description 检测是否自相交，如果自交，禁止添加下一个点
     * @default false
     */
    experimental_self_intersect_check?: boolean;
    /**
     * 最多允许能添加的点数
     */
    experimental_max_point_count?: number;
};
export declare class Prism extends BaseObject<PrismImportData> {
    readonly type = "Prism";
    prismMesh: PrismMesh;
    get editor(): PrismMeshEditor;
    _editor: PrismMeshEditor;
    get data(): {
        readonly points: [number, number, number][];
        readonly heightPoint: [number, number, number];
        readonly style: {
            readonly color: number;
            readonly lineWidth: number;
            readonly lineColor: number;
        };
        readonly id: string;
        readonly type: string;
    };
    constructor(data?: PrismImportData, config?: Partial<BaseObjectConfig>);
    setData(data: Partial<PrismImportData>): void;
    highlight(): void;
    unhighlight(): void;
    create(params?: PrismCreateConfig): Promise<void>;
}
export declare function createPrism(prismMesh: PrismMesh, pointSelector: PointSelector, config?: PrismCreateConfig): Promise<void>;
