import * as THREE from 'three';
declare class CustomBezierCurve3 extends THREE.Curve<THREE.Vector3> {
    type: string;
    controlPoints: THREE.Vector3[];
    constructor(controlPoints?: THREE.Vector3[]);
    getPoint(t: number, optionalTarget?: THREE.Vector3): THREE.Vector3;
    copy(source: CustomBezierCurve3): this;
    toJSON(): object & {
        controlPoints: number[][];
    };
    fromJSON(json: any): this;
}
export { CustomBezierCurve3 };
