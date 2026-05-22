import type { ItemDomParams } from './base';
import { ItemDom } from './base';
import type { Five } from '@realsee/five';
import type { BufferGeometry } from 'three';
import type Area from '../../Model/area';
interface AreaItemParams extends ItemDomParams {
    area: Area;
}
export declare class AreaItem extends ItemDom {
    protected params: AreaItemParams;
    private area;
    constructor(params: AreaItemParams);
    /**
     * @description: dom 依赖的多边形的顶点的位置更新时，更新 dom 的位置和面积
     */
    updateArea(five: Five, _geometry?: BufferGeometry): void;
    updateAreaText(area: number, config?: {
        unit?: string;
        fix?: number;
    }): void;
}
export {};
