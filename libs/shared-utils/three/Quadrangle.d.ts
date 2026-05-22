import * as THREE from 'three';
declare class QuadrangleMesh extends THREE.Mesh<QuadrangleGeometry, THREE.Material> {
    name: string;
    /**
     * @description 生成一个四边形的Mesh
     * @param {Vector3Position[]} points: 四个顶点的坐标, [左下，右下，右上，左上]
     */
    constructor(points: THREE.Vector3[], material?: THREE.Material, segments?: number);
    removeFromParent(): this;
}
declare class QuadrangleGeometry extends THREE.BufferGeometry {
    name: string;
    points: THREE.Vector3[];
    /**
     * @description 生成一个四边形的BufferGeometry，原点取 points[0]，即左下角
     * @param {Vector3Position[]} points: 四个顶点的坐标, [左下，右下，右上，左上]
     */
    constructor(points: THREE.Vector3[], paramsSegments?: number);
}
export { QuadrangleMesh, QuadrangleGeometry };
