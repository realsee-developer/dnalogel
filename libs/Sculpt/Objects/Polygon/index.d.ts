import { BaseObject, type BaseImportData, type BaseObjectConfig } from '../Base';
import * as THREE from 'three';
import { AreaMesh, type AreaStyle } from '../../Meshes/Area';
import { PolygonEditor } from './Editor';
import type { PointSelector } from '../../../shared-utils/three/PointSelector';
import type { LiteralString } from '../../../typings/utils.type';
import type { PolygonData, PolygonStyle } from '../../Meshes/Polygon';
import type { CreateLimitConfig, PolygonDrawConfig } from '../../typings/style';
export interface PolygonImportData extends BaseImportData, PolygonData {
    type: LiteralString<'Polygon'>;
    style?: Partial<AreaStyle>;
}
export type PolygonCreateConfig = Partial<PolygonStyle & CreateLimitConfig & PolygonDrawConfig> & {
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
export declare class Polygon extends BaseObject<PolygonImportData> {
    readonly type = "Polygon";
    areaMesh: AreaMesh;
    private historyStack;
    private currentHistoryIndex;
    private maxHistorySize;
    get editor(): PolygonEditor;
    _editor: PolygonEditor;
    private creatingObject?;
    private updateCreationPointMeshes;
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
    canUndo(): boolean;
    canRedo(): boolean;
    undo(): void;
    redo(): void;
    /**
     * 记录当前状态到历史记录
     */
    recordHistory(): void;
    /**
     * 恢复快照
     */
    private restoreSnapshot;
    create(params?: PolygonCreateConfig): Promise<void>;
}
export declare function createPolygon(areaMesh: AreaMesh, pointSelector: PointSelector, config?: PolygonCreateConfig): {
    finished: Promise<void>;
    canUndo: () => boolean;
    canRedo: () => boolean;
    undo: () => void;
    redo: () => void;
};
