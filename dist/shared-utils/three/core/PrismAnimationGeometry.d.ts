import * as THREE from 'three';
export declare class PrismAnimationGeometry extends THREE.BufferGeometry {
    bottomPositions: number[][];
    topPosition: number[];
    faceCount: number;
    private _type;
    constructor(params?: {
        bottomPositions?: number[][];
        topPosition?: number[];
        type?: 'Concave' | 'Convex';
    });
    /**
     * 设置底面和顶面的位置，创建类似BoxGeometry的多面结构
     */
    setPosition(params: {
        bottomPositions?: number[][];
        topPosition?: number[];
        type?: 'Concave' | 'Convex';
    }): void;
    private addBottomFace;
    private addTopFace;
    private addSideFace;
    private getBottomFaceVertexCount;
    private getTopFaceVertexCount;
}
