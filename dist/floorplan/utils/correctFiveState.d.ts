import type * as THREE from 'three';
import type { Five, Mode } from '@realsee/five';
export interface ShowState {
    latitude: number;
    longitude: number;
    fov?: number;
    mode: Mode;
    offset?: THREE.Vector3;
}
/** 判断当前状态是否可以展示户型图 */
export declare function checkShowState(five: Five, showState: ShowState): boolean;
/** 更改 Five 状态到展示户型图的状态
 * 1. 判断状态不符合时，会纠正到正确的状态
 * 2. 内置了相应的动画时间计算
 * 3. 纠正成功会返回 true，失败「可能会被用户行为中断」会返回 false
 */
export default function correctFiveState(five: Five, showState: ShowState, userAction?: boolean): Promise<void>;
