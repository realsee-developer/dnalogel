import type { PolylineJson } from '../typings/data';
import Line from './line';
import Point from './point';
import { Subscribe, type Mode as FiveMode } from '@realsee/five';
import type { Model } from '.';
export type PolylineEventMap = {
    /** 新增线条
     * @param line 被创建的线条
     */
    lineAdded: (line: Line) => void;
    /** 删除线条
     * @param lines 被删除的线条数组
     */
    lineRemoved: (lines: Line) => void;
};
export declare class Polyline {
    id: string;
    lines: Line[];
    visiblePanoIndexes?: number[];
    visibleFiveMode?: FiveMode[];
    readonly model: Model;
    readonly type = "polyline";
    readonly hook: Subscribe<PolylineEventMap>;
    get points(): Point[];
    constructor(config: {
        model: Model;
    });
    addLine(line: Line): void;
    removeLine(line: Line): void;
    isLastLine(line: Line): boolean;
    getLastLine(): Line;
    /**
     * @description: 获取连续线段的顶点数量
     */
    getPointLength(): number;
    clear(): void;
    /** 是否产生重叠 */
    overlapWith(item: Point | Line | Polyline): boolean;
    includes(item: Point | Line): boolean;
    isEmpty(): boolean;
    getLastPoint(): Point;
    toJSON(): PolylineJson;
    toJson(): PolylineJson;
    getPointByID(id: string): Point;
    fromJson(data: PolylineJson): this;
    replace(polyline: Polyline): void;
}
