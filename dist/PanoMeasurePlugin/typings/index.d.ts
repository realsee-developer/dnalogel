import type { Config as BaseConfig } from '../../base/BasePlugin';
import type { UserDistanceItem } from '../utils/dom/distanceItem';
export interface Config extends BaseConfig {
    userDistanceItemCreator?: undefined | (() => UserDistanceItem);
    /** 展示 distance DOM 时，使用的转换函数
     * @param distance 单位是 m
     */
    getDistanceText?: (distance: number) => string;
    /** 展示 面积 DOM 时，使用的转换函数
     * @param area 单位是 ㎡
     */
    getAreaText?: (area: number) => string;
    /** 默认的 distance DOM 文本 */
    defaultText?: string | null;
}
