import { LineMaterial as Five_LineMaterial } from '@realsee/five/line';
import * as THREE from 'three';
import type { Merge } from 'type-fest';
import type { Color } from '../../..';
export declare class LineMaterial extends Five_LineMaterial {
    get three_color(): Color;
    set three_color(value: Color);
    private _three_color;
    private _dashed;
    constructor(params?: Merge<ConstructorParameters<typeof Five_LineMaterial>[0], THREE.MeshBasicMaterialParameters>);
    toJSON(): {
        type: string;
        color: number | THREE.Vector3;
    };
}
