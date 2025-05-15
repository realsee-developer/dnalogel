import * as THREE from 'three';
import type { Merge } from 'type-fest';
import type { Color } from '../../..';
import { Five_LineMaterial2 } from './Five_LineMaterial2';
export declare class LineMaterial2 extends Five_LineMaterial2 {
    get three_color(): Color;
    set three_color(value: Color);
    private _three_color;
    private _dashed;
    constructor(params?: Merge<ConstructorParameters<typeof Five_LineMaterial2>[0], THREE.MeshBasicMaterialParameters>);
    toJSON(): {
        type: string;
        color: number | THREE.Vector3;
    };
}
