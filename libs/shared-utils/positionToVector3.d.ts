import { Vector3 } from 'three';
export type AnyPosition = Vector3 | number[] | {
    x?: number;
    y?: number;
    z?: number;
};
export type AnyPositions = Array<AnyPosition>;
export declare const positionToVector3: ({ x, y, z }: {
    x?: number;
    y?: number;
    z?: number;
}) => Vector3;
export declare const arrayPositionToVector3: (arrayPosition: number[]) => Vector3;
export declare const anyPositionToVector3: (position: AnyPosition) => Vector3;
export declare function vector3Position(position: AnyPosition): Vector3;
export declare function vector3Position(position: AnyPosition[]): Vector3[];
export declare function vector3Position(position: AnyPosition | AnyPosition[]): Vector3[] | Vector3;
