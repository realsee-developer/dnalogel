import type { ConditionalSimplifyDeep } from 'type-fest/source/conditional-simplify';
import type * as THREE from 'three';
export type SimplifyDeep<T> = ConditionalSimplifyDeep<T, THREE.Color | THREE.Vector3 | Function | Iterable<unknown>, object>;
