import type { Five } from '@realsee/five';
import { FLOOR_PLAN_ATTACHED_TO } from '../floorplan/constant';
interface GetPxmmOption {
    attachedTo: FLOOR_PLAN_ATTACHED_TO;
}
/** 获取当前楼层地面的 Y 值 */
export declare function getFloorY(five: Five, floorIndex: number): number;
/** 获取当前吸附类型的 Y 值
 * * FLOOR_PLAN_ATTACHED_TO.FLOOR：当前楼层地板的 Y
 * * FLOOR_PLAN_ATTACHED_TO.BOUNDING_CENTER：当前模型中心的 Y
 * * FLOOR_PLAN_ATTACHED_TO.BOUNDING_CENTER：当前楼层天花板的 Y
 */
export declare function getAttachedY(five: Five, floorIndex: number, attachedTo?: FLOOR_PLAN_ATTACHED_TO): number;
/**
 * 获取「在俯视图」状态下，模型 mm 与屏幕像素 px 的对应关系，即每 mm 对应多少 px
 * @param five five
 */
export default function getPxmm(five: Five, container: Element, floorIndex: number, options?: GetPxmmOption): number;
export {};
