import * as THREE from 'three';
export declare class Object3D<ChildeItem extends THREE.Object3D = THREE.Object3D> extends THREE.Object3D {
    children: ChildeItem[];
    /** 获取 raycaster 与当前物体的交点 */
    getRaycastIntersects(raycaster: THREE.Raycaster): THREE.Intersection[];
    /** 获取 raycaster 与当前物体的第一个交点 */
    getRaycastIntersection(raycaster: THREE.Raycaster): THREE.Intersection;
}
