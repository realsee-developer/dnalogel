import * as THREE from 'three';
import type { BoxPosition } from '../typings';
/**
 * 将 Sculpt 数据转换为 BoxPosition
 */
export declare function sculptDataToBoxPosition(bottomPoints: THREE.Vector3[], heightPoint: THREE.Vector3): BoxPosition;
