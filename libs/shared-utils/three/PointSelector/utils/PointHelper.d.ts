import * as THREE from 'three';
import type { Intersection } from '../../../../typings/typings';
import type { PointHelperAbstract } from './typing';
import { CSS3DObjectPlus } from '../../../../CSS3DRenderPlugin/utils/three/CSS3DObject';
import type { Five } from '@realsee/five';
export interface MouseGroupParameter {
    isMobile?: boolean;
    useNormalVector?: boolean;
    ballColor?: number;
}
declare function createPlaneMesh(): THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
declare function createLineMesh(): THREE.Mesh<THREE.TubeGeometry, THREE.ShaderMaterial>;
declare function createBallMesh(): THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
declare function createBorderMesh(): CSS3DObjectPlus<HTMLElement>;
type PlanMesh = ReturnType<typeof createPlaneMesh>;
type LineMesh = ReturnType<typeof createLineMesh>;
type BallMesh = ReturnType<typeof createBallMesh>;
type BorderMesh = ReturnType<typeof createBorderMesh>;
export declare class PointHelper extends THREE.Object3D implements PointHelperAbstract {
    planeMesh: PlanMesh;
    lineMesh: LineMesh;
    ballMesh: BallMesh;
    borderMesh: BorderMesh;
    private five;
    constructor(five: Five);
    updateWithIntersect(intersect: Intersection): void;
    show(): void;
    hide(): void;
    dispose(): void;
}
export {};
