import type { Polygon } from '.';
import type { FiveDomEvent } from '../../../shared-utils/five/FiveDomEvents';
import { LineEditor } from '../Polyline/Editor';
import * as THREE from 'three';
export declare class PolygonEditor extends LineEditor<Polygon> {
    get points(): THREE.Vector3[];
    constructor(originObject: Polygon);
    protected onDrag: (event: FiveDomEvent) => void;
}
