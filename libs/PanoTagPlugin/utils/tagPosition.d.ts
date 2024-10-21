import { Vector3 } from 'three';
import type { TagInstance } from '../typings';
export declare function getTagPosition(tag: TagInstance): Vector3 | [Vector3, Vector3, Vector3, Vector3];
export declare function getTagCenterPosition(tag: TagInstance): Vector3;
