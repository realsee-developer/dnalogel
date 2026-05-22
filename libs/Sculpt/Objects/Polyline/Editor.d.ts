import type { FiveDomEvent } from '../../../shared-utils/five/FiveDomEvents';
import type { Polyline } from '.';
import { LineEditorAbstract } from '../Line/Editor';
export declare class PolylineEditor extends LineEditorAbstract<Polyline> {
    get points(): import("three").Vector3[];
    constructor(originObject: Polyline);
    protected onDrag: (event: FiveDomEvent) => void;
}
