import type * as THREE from 'three';
import type { ReplaceDeep } from '../../Sculpt/typings/utils.type';
export default function vector3ToArray<V extends THREE.Vector3 | THREE.Vector3[]>(vector3: V): ReplaceDeep<V, THREE.Vector3, [number, number, number]>;
