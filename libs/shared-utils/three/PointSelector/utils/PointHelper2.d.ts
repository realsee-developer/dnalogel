import * as THREE from 'three';
import type { Intersection } from '../../../../typings/typings';
import type { Five } from '@realsee/five';
import type { PointHelperAbstract } from './typing';
import { ICSS3DSprite } from '../../../../CSS3DRenderPlugin/utils/three/CSS3DSprite';
export interface MouseGroupParameter {
    isMobile?: boolean;
    useNormalVector?: boolean;
    ballColor?: number;
}
declare function createPlaneMesh(): THREE.Mesh<THREE.CircleGeometry, THREE.ShaderMaterial>;
declare function createCrossline(): THREE.Group;
declare function createLineMesh(length: number): THREE.Mesh<THREE.TubeGeometry, THREE.MeshBasicMaterial>;
declare function createRingMesh(): THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
declare function createBallMesh(): THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
declare function createCSSBallMesh(): ICSS3DSprite;
export declare class PointHelper2 extends THREE.Object3D implements PointHelperAbstract {
    disableGetPixel: boolean;
    planeMesh: ReturnType<typeof createPlaneMesh>;
    ringMesh: ReturnType<typeof createRingMesh>;
    crossline: ReturnType<typeof createCrossline>;
    lineMesh: ReturnType<typeof createLineMesh>;
    ballMesh: ReturnType<typeof createBallMesh>;
    cssBallMesh: ReturnType<typeof createCSSBallMesh>;
    constructor(five: Five);
    updateWithIntersect(intersect: Intersection): void;
    show(): void;
    hide(): void;
    dispose(): void;
}
export {};
