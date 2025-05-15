import * as THREE from 'three';
import { Subscribe, type Five, type SubscribeEventMap } from '@realsee/five';
import { PolygonMesh } from './polygon';
import { Polyline } from './polyline';
import type { Model } from '.';
import { AreaItem } from '../utils/dom/areaDom';
import type { FiveLine } from '../../shared-utils/five/FiveLine';
export interface AreaHook extends SubscribeEventMap {
    selected: (area: Area, position: {
        left: string;
        top: string;
    }) => void;
}
/**
 * @description: 多边形类
 */
export default class Area {
    id: string;
    selected: boolean;
    text?: string;
    readonly type = "area";
    readonly lightMesh: FiveLine;
    readonly areaItem: AreaItem;
    readonly hook: Subscribe<AreaHook>;
    model?: Model;
    /**
     * @description: 多边形的端点是否闭合
     */
    get isClosed(): boolean;
    /** 多边形mesh */
    polygon: PolygonMesh;
    /** 多边形顶点 */
    points: THREE.Vector3[];
    /** 多边形前三个点组成的平面，用来使得后面加的点也落在这个平面上 */
    planeHelper: THREE.Plane | null;
    /** 多边形边框 */
    polyline: Polyline;
    /** 多边形mesh容器 */
    private meshContainer;
    /** 多边形dom容器 */
    private domContainer;
    private five;
    constructor(points: THREE.Vector3[] | undefined, config: {
        /** @todo: 这个model整的真的太恶心了 */
        model: Model;
        meshContainer?: THREE.Object3D;
        domContainer?: Element;
        five?: Five;
    });
    addPoints(point: THREE.Vector3): void;
    /**
     * @description: 移除最后一个添加的点
     */
    popPoint(): void;
    /**
     * @description: 自动补全多边形的各个边
     */
    complete(): void;
    hideArea(): void;
    showArea(): void;
    /**
     * @description: five camera update 时，更新Dom的位置
     */
    updateDom: () => void;
    /**
     * @description: 获取一个点投影在当前平面上的点
     */
    projectPoint(point: THREE.Vector3): THREE.Vector3;
    remove(): void;
    /**
     * @todo: 没写完
     */
    dispose(): void;
    toJSON(): any;
}
