import type { Polygon } from '.';
import type { FiveDomEvent } from '../../../shared-utils/five/FiveDomEvents';
import { LineEditorAbstract } from '../Line/Editor';
import type * as THREE from 'three';
export declare class PolygonEditor extends LineEditorAbstract<Polygon> {
    get points(): THREE.Vector3[];
    constructor(originObject: Polygon);
    enable(): void;
    disable(): void;
    /**
     * 更新所有 PointMesh 的位置
     */
    updatePointMeshes(): void;
    protected onDragstart: (event: FiveDomEvent) => void;
    protected onDrag: (event: FiveDomEvent) => void;
    protected onDragend: (event: FiveDomEvent) => void;
    private syncPointMeshCount;
    private createPointMesh;
    private disposePointMesh;
}
