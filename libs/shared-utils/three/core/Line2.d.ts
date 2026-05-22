import { THREE_Line2 as Five_THREE_Line2 } from '@realsee/five/line';
import type { LineMaterial } from './LineMaterial';
import type { LineGeometry } from './LineGeometry';
export declare class THREE_Line2 extends Five_THREE_Line2 {
    material: LineMaterial;
    constructor(geometry: LineGeometry, material: LineMaterial);
    toJSON(): {
        type: string;
        geometryAttributes: {
            [name: string]: import("three").BufferAttribute | import("three").InterleavedBufferAttribute;
        };
    };
}
