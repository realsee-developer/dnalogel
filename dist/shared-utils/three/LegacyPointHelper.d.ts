import * as THREE from 'three';
import type { Intersection } from '../../typings/typings';
export interface LegacyMouseGroupParameter {
    isMobile?: boolean;
    useNormalVector?: boolean;
    ballColor?: number;
}
declare function createPlaneMesh(): THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
declare function createLineMesh(): THREE.Mesh<THREE.TubeGeometry, THREE.ShaderMaterial>;
declare function createBallMesh(): THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
type PlanMesh = ReturnType<typeof createPlaneMesh>;
type LineMesh = ReturnType<typeof createLineMesh>;
type BallMesh = ReturnType<typeof createBallMesh>;
export declare class LegacyPointHelper extends THREE.Object3D {
    planeMesh: PlanMesh;
    lineMesh: LineMesh;
    ballMesh: BallMesh;
    constructor();
    updateWithIntersect(intersect: Intersection): void;
    dispose(): void;
}
export {};
