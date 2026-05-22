import { Line as Five_Line } from '@realsee/five/line';
import * as THREE from 'three';
export type Color = THREE.Color | string | number;
export declare class FiveLine extends Five_Line {
    constructor(...args: ConstructorParameters<typeof Five_Line>);
    toJSON(): {
        type: string;
        points: any;
    };
}
