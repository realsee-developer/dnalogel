import * as THREE from 'three';
export declare const genRotationMatrix: (x: number, y: number, z: number) => THREE.Matrix4;
declare const bject3d2LocalMatrix: (mesh: THREE.Object3D, { scale, rotation, position, }: {
    scale: number;
    rotation: number[];
    position: {
        x: number;
        y: number;
        z: number;
    };
}) => THREE.Object3D;
export default bject3d2LocalMatrix;
