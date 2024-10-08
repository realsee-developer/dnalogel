import { LineGeometry as Five_LineGeometry, LineMaterial as Five_LineMaterial, THREE_Line2 as Five_THREE_Line2, Line as Five_Line } from '@realsee/five/line';
export declare class FiveLine extends Five_Line {
    constructor(...args: ConstructorParameters<typeof Five_Line>);
    toJSON(): {
        type: string;
        points: any;
    };
}
export declare class THREE_Line2 extends Five_THREE_Line2 {
    constructor(...args: ConstructorParameters<typeof Five_THREE_Line2>);
    toJSON(): {
        type: string;
        geometryAttributes: {
            [name: string]: import("three").BufferAttribute | import("three").InterleavedBufferAttribute;
        };
    };
}
export declare class LineGeometry extends Five_LineGeometry {
    constructor(...args: ConstructorParameters<typeof Five_LineGeometry>);
    toJSON(): {
        type: string;
        attributes: {
            [name: string]: import("three").BufferAttribute | import("three").InterleavedBufferAttribute;
        };
    };
}
export declare class LineMaterial extends Five_LineMaterial {
    constructor(...args: ConstructorParameters<typeof Five_LineMaterial>);
    toJSON(): {
        type: string;
        color: number | import("three").Vector3;
    };
}
