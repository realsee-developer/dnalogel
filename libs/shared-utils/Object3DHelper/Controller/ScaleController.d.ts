import { BaseController } from '../Base/BaseController';
import type { ScaleHelperAbstract } from '../Helper';
import * as THREE from 'three';
export declare class ScaleController<T extends ScaleHelperAbstract = ScaleHelperAbstract> extends BaseController<T> {
    protected name: string;
    /** 拖拽时用于显示方向参考的直线（使用 Line 实现无限长穿透整个平面的直线） */
    private dragGuideLine?;
    /** 当前拖拽时显示的面片 */
    private currentFacePatch?;
    private solidGuide;
    private startInfo?;
    constructor(...params: ConstructorParameters<typeof BaseController<T>>);
    initialHelperPosition(): void;
    dragStart: (params: {
        intersect: THREE.Intersection;
    }) => void;
    /**
     * 获取物体的真正几何中心（世界坐标）
     * 优先使用 worldCenter 属性（对于 PrismMesh 等），否则使用包围盒中心
     */
    private getObjectWorldCenter;
    private getMoveMeshes;
    private addHoverFaceMesh;
    private addFaceMesh;
    private removeFaceMesh;
    dragging: (point: {
        x: number;
        y: number;
    } | TouchEvent) => false | void;
    setScale(scale: number | {
        x?: number;
        y?: number;
        z?: number;
    }): void;
    private isRectangleWithEdgeMesh;
    scale: (raycaster: THREE.Raycaster) => any[];
    dragEnd: () => void;
    /**
     * 更新直线方向，保持直线始终经过物体中心和当前拉伸球位置
     */
    private updateDragGuideLineDirection;
    /**
     * 更新直线缩放，保持视觉上的恒定大小
     */
    private updateDragGuideLineScale;
    /**
     * 检查 MoveController 是否正在拖拽中
     */
    private isMoveControllerDragging;
    /**
     * 向场景添加一个表示 face 的面片，红色，位置与 face.center 一致，使用两个三角形拼成矩形
     */
    addFacePatch(face: {
        center: THREE.Vector3;
        vertices?: THREE.Vector3[];
        normal?: THREE.Vector3;
    } | {
        center: {
            x: number;
            y: number;
            z: number;
        };
        vertices?: THREE.Vector3[];
        normal?: THREE.Vector3;
    }): THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
}
