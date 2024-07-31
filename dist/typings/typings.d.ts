import type * as THREE from 'three';
import type { PartialDeep } from 'type-fest';
export interface Intersection {
    /** 焦点坐标 */
    point: THREE.Vector3;
    /** 焦点面片 */
    face?: {
        normal: THREE.Vector3;
    } | null;
}
export type PartialObjectDeep<ObjectType extends object> = {
    [KeyType in keyof ObjectType]?: PartialDeep<ObjectType[KeyType]>;
};
