import { Vector2 } from 'three';
import type { Vector3 } from 'three';
export default function ndc2Screen(ndcPosition: Vector3, containerSize: {
    width: number;
    height: number;
}): Vector2;
