/**
 * 三维向量
 */
export interface Vector3Position {
    x: number;
    y: number;
    z: number;
}
/**
 * 三维向量数组表示
 */
export type Vector3WithArray = [number, number, number];
/**
 * 二维向量
 */
export interface Vector2Position {
    x: number;
    y: number;
}
/**
 * 二维向量数组展示
 */
export type Vector2WithArray = [number, number];
/**
 * 4 * 4 矩阵数组表示
 */
export type Matrix4_4 = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
