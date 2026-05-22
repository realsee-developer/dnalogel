import { BaseEditor } from '../Base/Editor';
import type { Point } from '.';
export declare class PointEditor extends BaseEditor<Point> {
    constructor(originObject: Point);
    enable(): void;
    disable(): void;
    private onDrag;
}
