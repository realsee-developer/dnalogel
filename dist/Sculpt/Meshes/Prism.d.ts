import { IObject3D } from '../../shared-utils/three/IObject3D';
import { type AnyPosition } from '../../shared-utils/positionToVector3';
import type { AreaData } from './Area';
import * as THREE from 'three';
import type { LineStyle } from '../typings/style';
import type { ColoredMeshStyle } from '../utils/three/ColoredMesh';
import ColoredMesh from '../utils/three/ColoredMesh';
import { PrismGeometry } from '../../shared-utils/three/core/PrismGeometry';
import { LineMesh } from './Line';
import { type Five } from '@realsee/five';
export type PrismStyle = ColoredMeshStyle & LineStyle;
export interface PrismData extends AreaData {
    heightPoint: AnyPosition;
}
/**
 * @description: 多棱柱
 */
export declare class PrismMesh extends IObject3D {
    name: string;
    private five?;
    private animatedBoxMesh?;
    private activeAnimations;
    private activeEaseInAnimations;
    get topPosition(): THREE.Vector3;
    get bottomPositions(): THREE.Vector3[];
    get topPositions(): THREE.Vector3[];
    get style(): {
        color: THREE.Color;
        lineColor: THREE.Color;
        lineWidth: number;
        opacity: number;
        occlusionVisibility: boolean;
        occlusionMode: "depthTest" | "translucence";
    };
    get opacity(): number;
    get occlusionVisibility(): boolean;
    get occlusionMode(): "depthTest" | "translucence";
    /**
     * @deprecated notice: please use specified center instead, such as `localCenter` or `worldCenter`
     */
    get center(): THREE.Vector3;
    get localCenter(): THREE.Vector3;
    get geometryInfo(): {
        center: THREE.Vector3;
    };
    get worldCenter(): THREE.Vector3;
    get color(): THREE.Color;
    get lineWidth(): number;
    get lineColor(): THREE.Color;
    protected _geometryInfoCache?: {
        center: THREE.Vector3;
    };
    protected geometryInfoNeedUpdate: boolean;
    edgeMesh: LineMesh;
    prismMesh: ColoredMesh & {
        geometry: PrismGeometry;
    };
    paramStyle: Partial<PrismStyle>;
    constructor(params?: Partial<PrismData & PrismStyle & {
        five?: Five;
    }>);
    setStyle(params?: Partial<PrismStyle>): void;
    /**
     * Check if the prism is a box (has 4 bottom positions)
     */
    isBox(): boolean;
    setPoints(params: Partial<PrismData>): void;
    highlight(): void;
    unhighlight(): void;
    raycast(raycaster: THREE.Raycaster, intersects: THREE.Intersection[]): boolean;
    /**
     * 设置Five实例
     * @param five Five实例
     */
    setFive(five: Five): void;
    /**
     * 播放盒子上下动画
     * @param id 盒子项目ID
     * @param color 动画颜色，默认为浅蓝色 (#4DF0FF)
     * @returns Promise，动画完成时解析
     */
    playBoxAnimation(id: string | number, color?: string): Promise<void>;
    /**
     * 强制立即完成所有活动的盒子动画
     * @param id 可选的盒子项目ID。如果未提供，完成所有活动的盒子动画。
     */
    forceFinishBoxAnimation(id?: string | number): void;
    private playEaseInAnimation;
    /**
     * 创建或更新动画盒子网格
     * @param color 动画颜色
     */
    private createOrUpdateAnimatedBoxMesh;
    /**
     * 显示盒子模型的最终状态（完全可见且不透明度完整）
     */
    private showBoxFinalState;
}
