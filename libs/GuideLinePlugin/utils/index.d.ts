import type { GuideLineModeItem } from '../GuideLineModeItem';
import type * as PluginType from '../typing';
export declare function updateGuideLineModeItemByData(options: {
    item: GuideLineModeItem;
    data: PluginType.GuideLineItem;
    mode: PluginType.GuideLineModeItemMode;
}): void;
/**
 * 筛选出给定数组中，相邻元素不能重复的元素组成的新数组
 * @param array 要筛选的数组
 * @returns 筛选后的新数组
 */
export declare function filterAdjacentDistinct<T>(array: T[]): T[];
