import type { Vector3 } from 'three';
import * as THREE from 'three';
/**
 * @description 根据多边形的顶点数组生成多边形的 BufferGeometry
 * @param checkLinesIntersect 检查多边形边线是否相交,需要保证传入的顶点是有序的
 */
export default function generatePolygonGeometry(_points: Vector3[], config?: {
    checkLinesIntersect?: boolean;
}): THREE.BufferGeometry;
