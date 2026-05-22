import type { State as FiveState } from '@realsee/five';
import type { TagInstance } from '../typings';
export declare class Cache {
    /**
     * @description 射线碰撞检测的距离缓存
     */
    cache_raycasterDistance: Map<string, number>;
    /**
     * @description 标签是否可见缓存
     */
    cache_visible: Map<string, boolean>;
    constructor();
    clear(): void;
    static generateCameraTagKey(fiveState: Partial<FiveState>, tag: TagInstance, accurate?: number): string;
    getVisible(tag: TagInstance, fiveState: Partial<FiveState>, accurate?: number): boolean;
    setVisible(tag: TagInstance, fiveState: Partial<FiveState>, visible: boolean, accurate?: number): void;
}
