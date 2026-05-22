import type Hammer from 'hammerjs';
import { Vector2 } from 'three';
/**
 * 从 Hammer 事件中获取操作的点在交互 DOM 中的位置
 * @ignore TODO: make a suitable name
 */
export declare function getPointFromHammerEvent(event: (typeof Hammer)['Input']): {
    point: Vector2;
    ndcPoint: Vector2;
};
