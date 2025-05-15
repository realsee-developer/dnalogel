import * as THREE from 'three';
export declare class PrismGeometry extends THREE.BufferGeometry {
    bottomPositions: number[][];
    topPosition: number[];
    private _type;
    constructor(params?: {
        bottomPositions?: number[][];
        topPosition?: number[];
        type?: 'Concave' | 'Convex';
    });
    /**
     * @description 设置底面和顶面的位置
     * @param params.bottomPositions 底面多边形的有序顶点，顺时针或逆时针均可
     * @param params.topPosition 底面多边形的第一个点对应的顶面的顶点
     * @param params.type 棱柱的类型，凹多边形（Concave）或凸多边形（Convex），默认为凹多边形。如果可以确定是凸多边形，建议设置为凸多边形，性能更好
     */
    setPosition(params: {
        bottomPositions?: number[][];
        topPosition?: number[];
        type?: 'Concave' | 'Convex';
    }): void;
}
