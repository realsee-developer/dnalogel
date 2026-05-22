import type * as THREE from 'three';
import { IObject3D } from '../../shared-utils/three/IObject3D';
import { LineWithDotsMesh } from '../../Sculpt/Meshes/LineWithDots';
import { PolygonMesh, type PolygonStyle } from '../../Sculpt/Meshes/Polygon';
import type { LineMeshStyle } from '../../Sculpt/typings';
export declare class MeasureMesh extends IObject3D {
    readonly name = "MeasureMesh";
    readonly isMeasureMesh = true;
    points: THREE.Vector3[];
    isPolygon: boolean;
    selected: boolean;
    line: LineWithDotsMesh;
    polygon: PolygonMesh;
    constructor(config?: {
        lineStyle?: Partial<LineMeshStyle>;
        polygonStyle?: Partial<PolygonStyle>;
    });
    changeConfig(config?: {
        lineStyle?: Partial<LineMeshStyle>;
        polygonStyle?: Partial<PolygonStyle>;
    }): void;
    setPoints(points: THREE.Vector3[]): void;
    select(): void;
    unselect(): void;
    hover(): void;
    unhover(): void;
    private highlight;
    private unhighlight;
}
