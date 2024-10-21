/** @file three.js 中声明有问题，这里重载一下声明 */
import type { Geometry, BufferGeometry, Material } from 'three';
import { LineSegments as OriginLineSegments } from 'three';
declare class LineSegments<TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry, TMaterial extends Material | Material[] = Material | Material[]> extends OriginLineSegments<TGeometry, TMaterial> {
    geometry: TGeometry;
    material: TMaterial;
    constructor(geometry: TGeometry, material: TMaterial);
}
export { LineSegments };
