import { Subscribe } from '../../shared-utils/Subscribe';
import type { Config } from '../typings';
import type { MeasurePluginData } from '../typings/data';
import type Area from './area';
import type Line from './line';
import { Polyline } from './polyline';
type IModelEvent = {
    /** 新增线条
     * @param line 被创建的线条
     */
    polylineAdded: (line: Polyline) => void;
    /** 新增面积
     * @param area 被创建的面积
     */
    areaAdded: (area: Area) => void;
    /** 删除线条
     * @param lines 被删除的线条数组
     */
    polylineRemoved: (lines: Polyline) => void;
};
export declare class Model {
    readonly config?: Config;
    readonly polylines: Polyline[];
    readonly areas: Area[];
    readonly hook: Subscribe<IModelEvent>;
    constructor(config?: Config);
    addPolyline(polyline: Polyline): void;
    addArea(area: Area): void;
    replacePolylineByID(id: string, polyline: Polyline): void;
    removePolyline(polyline: Polyline): void;
    removeArea(area: Area): void;
    getPolylineByID(id: string): Polyline;
    getPolylineByLine(line: Line): Polyline;
    getLineByID(id: string): Line;
    getAllLines(): Line[];
    getAllAreas(): Area[];
    getAllPoints(): import("./point").default[];
    includes(item: Polyline): boolean;
    clear(): void;
    dispose(): void;
    getClosestPoint(): void;
    parse(data: MeasurePluginData): void;
    toJson(): MeasurePluginData;
}
export {};
