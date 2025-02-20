import type { Five } from '@realsee/five';
import { BaseUtil } from './BaseUtil';
import * as THREE from 'three';
export type WorkFromType = 'poincare' | 'aerophoto' | 'vr' | 'weilaijia' | 'sand';
export declare class WorkUtil extends BaseUtil {
    private _workCode;
    get fromType(): WorkFromType;
    /**
     * @description 设置插件当前的 workCode
     */
    set workCode(workCode: string);
    /**
     * @description 获取插件当前的 workCode
     */
    get workCode(): string;
    /**
     * @description 获取当前的 work
     */
    get work(): import("@realsee/five").Work;
    get observers(): import("@realsee/five").WorkObserver[];
    get transform(): THREE.Matrix4;
    constructor(five: Five);
    getResolvedObserver(observerIndex: number): import("@realsee/five").WorkResolvedObserver;
    /**
     * @description 获取全景点坐标
     */
    getObserverPosition(observerIndex: number): THREE.Vector3 | undefined;
    /**
     * @description 获取全景点位和模型的地面坐标
     */
    getObserverStandingPosition(observerIndex: number): THREE.Vector3 | undefined;
    /**
     * @description 获取observer
     */
    getObserver(observerIndex: number): import("@realsee/five").WorkObserver;
}
