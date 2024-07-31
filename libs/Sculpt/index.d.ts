import type { Five } from '@realsee/five';
import type * as THREE from 'three';
import type { BaseObjectConfig } from './Objects/Base';
import { Subscribe } from '../shared-utils/Subscribe';
import { IObject3D } from '../shared-utils/three/IObject3D';
import { Polyline } from './Objects/Polyline';
import { Point } from './Objects/Point';
import { Polygon } from './Objects/Polygon';
import { Prism } from './Objects/Prism';
import { Rectangle } from './Objects/Rectangle';
import { Circle } from './Objects/Circle';
import { Cylinder } from './Objects/Cylinder';
import { Box } from './Objects/Box';
import type { BuiltInData, BuiltInItem, Theme } from './typings';
export type { SculptData } from './typings';
interface Data {
    items: Array<BuiltInData>;
}
type Event = {
    /**
     * @description: 点击事件
     * @param {BuiltInItem} item 点击的物体
     * 返回 false 来禁用 Five 默认行为
     */
    click: (item: BuiltInItem) => void | false;
};
export declare class Sculpt extends Subscribe<Event> {
    static modules: {
        five: Five;
        _cursor?: import("./utils/Modules/Cursor").Cursor;
        _pointSelector?: import("../shared-utils/three/PointSelector").PointSelector;
        _fiveDomEvents?: import("../shared-utils/five/FiveDomEvents").FiveDomEvents;
        _object3DHelper?: import("..").Object3DHelperController;
        inited: boolean;
        readonly cursor: import("./utils/Modules/Cursor").Cursor;
        readonly pointSelector: import("../shared-utils/three/PointSelector").PointSelector;
        readonly fiveDomEvents: import("../shared-utils/five/FiveDomEvents").FiveDomEvents;
        readonly object3DHelper: import("..").Object3DHelperController;
        init: (five: Five) => void;
    };
    get data(): {
        items: ({
            points: [number, number, number][];
            style: {
                lineColor: number;
                lineWidth: number;
                dashed: boolean;
            };
            id: string;
            type: string;
        } | {
            point: [number, number, number];
            style: {
                color: number;
                size: number;
            };
            id: string;
            type: string;
        } | {
            points: [number, number, number][];
            style: {
                color: number;
                lineColor: number;
                lineWidth: number;
            };
            id: string;
            type: string;
        } | {
            readonly points: [number, number, number][];
            readonly heightPoint: [number, number, number];
            readonly style: {
                readonly color: number;
                readonly lineWidth: number;
                readonly lineColor: number;
            };
            readonly id: string;
            readonly type: string;
        } | {
            points: [import("..").ArrayPosition, import("..").ArrayPosition, import("..").ArrayPosition];
            style: {
                color: number;
                lineWidth: number;
                lineColor: number;
            };
            id: string;
            type: string;
        } | {
            center: [number, number, number];
            normal: [number, number, number];
            radius: number;
            style: {
                color: number;
            };
            id: string;
            type: string;
        } | {
            bottomCenter: [number, number, number];
            topCenter: [number, number, number];
            radius: number;
            style: {
                color: number;
            };
            id: string;
            type: string;
        })[];
    };
    group: IObject3D;
    get items(): BuiltInItem[];
    private five;
    private theme;
    constructor(five: Five, theme?: Theme);
    /**
     * @description: 加载数据 展示
     */
    load(data: Data, config?: Partial<BaseObjectConfig>): void;
    /**
     * @description: 获取物体实例
     */
    getItemById(id: string): BuiltInItem;
    /**
     * @description: 放置物体
     */
    putObject(object: THREE.Object3D): import("..").Object3DHelperController;
    /**
     * @description: 开始绘制点
     */
    createPoint(params?: Parameters<Point['create']>[0]): Promise<Point>;
    /**
     * @description: 开始绘制空间折线
     */
    createPolyline(params?: Parameters<Polyline['create']>[0]): Promise<Polyline>;
    /**
     * @description: 开始绘制平面多边形
     */
    createPolygon(params?: Parameters<Polygon['create']>[0]): Promise<Polygon>;
    /**
     * @description: 开始绘制多棱柱
     */
    createPrism(params?: Parameters<Prism['create']>[0]): Promise<Prism>;
    /**
     * @description: 开始绘制矩形
     */
    createRectangle(params?: Parameters<Rectangle['create']>[0]): Promise<Rectangle>;
    /**
     * @description: 开始绘制圆形
     */
    createCircle(params?: Parameters<Circle['create']>[0]): Promise<Circle>;
    /**
     * @description: 开始绘制圆柱
     */
    createCylinder(params?: Parameters<Cylinder['create']>[0]): Promise<Cylinder>;
    /**
     * @description: 开始绘制 Box
     */
    createBox(params?: Parameters<Box['create']>[0]): Promise<Box>;
    /**
     * @description: 撤销
     */
    undo(): void;
    /**
     * @description: 重做
     */
    redo(): void;
    /**
     * @description: 清空数据
     */
    clear(): void;
    private createItem;
}
/**
 * @description: Sculpt 插件
 */
export declare const SculptPlugin: (five: Five) => Sculpt;
