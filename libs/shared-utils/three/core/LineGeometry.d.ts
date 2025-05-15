import type { WireframeGeometry } from 'three';
import { LineGeometry as Five_LineGeometry } from '@realsee/five/line';
import * as THREE from 'three';
export declare class LineGeometry extends Five_LineGeometry {
    constructor(...args: ConstructorParameters<typeof Five_LineGeometry>);
    fromEdgesGeometry(geometry: WireframeGeometry): this;
    toJSON(): {
        type: string;
        attributes: {
            [name: string]: THREE.BufferAttribute | THREE.InterleavedBufferAttribute;
        };
    };
}
