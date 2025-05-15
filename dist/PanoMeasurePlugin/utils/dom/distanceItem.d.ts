import type { ItemDomParams } from './base';
import { ItemDom } from './base';
import type Line from '../../Model/line';
import type { Five } from '@realsee/five';
import type { Polyline } from '../../Model/polyline';
export interface UserDistanceItem {
    element: Element;
    highlight: () => void;
    unHighlight: () => void;
    update: (params: {
        line: Line;
        polyline: Polyline;
    }) => void;
}
interface DistanceItemParams extends ItemDomParams {
    line: Line;
    userDistanceItem?: UserDistanceItem;
}
export declare class DistanceItem extends ItemDom {
    protected params: DistanceItemParams;
    private line;
    private lastFOV;
    private cameraUpdateHandler;
    constructor(params: DistanceItemParams);
    appendTo(container: Element): this;
    remove(): void;
    /** 获取内容文本 */
    getCurrentContent(): string;
    update(five: Five): void;
    private getFiveInstance;
    private onCameraUpdate;
    private onPanoChange;
}
export {};
