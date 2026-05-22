import * as THREE from 'three';
import type { Direction } from '../../typings';
import { DirectionGroup } from '../../utils';
interface InstanceParameter {
    color?: THREE.Color | string | number;
    size?: number;
}
export declare class CenterHandle extends DirectionGroup {
    cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> & {
        direction: Direction;
    };
    name: string;
    private faceMaterials;
    private baseColor;
    private faceNormals;
    constructor(param?: InstanceParameter);
    /**
     * 更新各个面的颜色，根据与相机的角度动态调整
     * @param camera 相机对象
     */
    update(camera: THREE.Camera): void;
}
export {};
