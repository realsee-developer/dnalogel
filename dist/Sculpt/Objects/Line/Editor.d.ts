import { BaseEditor } from '../Base/Editor';
import type { FiveDomEvent } from '../../../shared-utils/five/FiveDomEvents';
import type { Line } from '.';
import type * as THREE from 'three';
import { PointMesh } from '../../Meshes/Point';
export declare abstract class LineEditorAbstract<OriginObject extends THREE.Object3D = THREE.Object3D> extends BaseEditor<OriginObject> {
    protected draggingPoints: PointMesh[];
    protected get pointMeshes(): PointMesh[];
    abstract get points(): THREE.Vector3[];
    get pointHandles(): PointMesh[];
    constructor(originObject: OriginObject);
    enable(): void;
    disable(): void;
    protected onDragstart: (event: FiveDomEvent) => void;
    protected onDragend: (event: FiveDomEvent) => void;
    protected abstract onDrag(event: FiveDomEvent): void;
}
export declare class LineEditor extends LineEditorAbstract<Line> {
    get points(): THREE.Vector3[];
    constructor(originObject: Line);
    protected onDrag: (event: FiveDomEvent) => void;
}
