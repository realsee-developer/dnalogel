import type { Polygon } from '.';
import type { FiveDomEvent } from '../../../shared-utils/five/FiveDomEvents';
import * as THREE from 'three';
import { LineEditorAbstract } from '../Line/Editor';
export declare class PolygonEditor extends LineEditorAbstract<Polygon> {
    get points(): THREE.Vector3[];
    constructor(originObject: Polygon);
    protected onDrag: (event: FiveDomEvent) => void;
}
