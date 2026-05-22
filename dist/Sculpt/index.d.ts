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
import type { BuiltInData, BuiltInItem, SculptType } from './typings';
import { Line } from './Objects/Line';
import type { MagnifierParameter } from '../shared-utils/three/Magnifier';
export type { SculptData } from './typings';
export type { SculptType } from './typings';
export { createPoint } from './Objects/Point';
export { createLine } from './Objects/Line';
export { createPolyline } from './Objects/Polyline';
export { createPolygon } from './Objects/Polygon';
export { createPrism } from './Objects/Prism';
export { createRectangle } from './Objects/Rectangle';
export { createCircle } from './Objects/Circle';
export { createCylinder } from './Objects/Cylinder';
export { createBox } from './Objects/Box';
/**
 * Sculpt 配置选项
 */
export interface SculptConfig {
    /**
     * @description 放大镜配置
     * 设置为 null 或 false 可禁用放大镜功能
     * @default *{ width: 190, height: 190, scale: 2, dragEnabled: true }*
     */
    magnifier?: MagnifierParameter | null | false;
    /**
     * @description 是否隐藏鼠标光标旁边的圆圈效果
     * 设置为 true 时会隐藏圆圈效果
     * @default false
     */
    hideCursorCircle?: boolean;
    /**
     * @description 是否自定义拾取点过滤函数
     * @default false
     */
    hitFilter?: (intersect: THREE.Intersection) => boolean;
}
interface Data {
    items: Array<BuiltInData>;
}
type Event = {
    /**
     * @description: 点击事件
     * @param {MouseEvent} e 鼠标事件
     * @param {BuiltInItem} item 点击的物体
     * 返回 false 来禁用 Five 默认行为
     */
    click: (e: MouseEvent, item: BuiltInItem) => void | false;
    /**
     * @description 当 Polygon 创建时检测到自相交时触发(需开启 experimental_self_intersect_check)
     * @param item Polygon 实例
     * @param point 尝试添加但被拒绝的点坐标
     */
    'polygon.experimental_self_intersect': (item: Polygon, point: THREE.Vector3) => void;
    /**
     * @description polygon 将要添加到下一个点
     * @param item Polygon 实例
     * @param point polygon 将要添加到下一个点到坐标
     * @param points 当前已经绘制的点坐标（不包括即将添加的点）
     */
    'polygon.experimental_point_will_add': (item: Polygon, point: THREE.Vector3, points: THREE.Vector3[]) => void;
    /**
     * @description prism 将要添加到下一个点
     * @param item Prism 实例
     * @param point prism 将要添加到下一个点到坐标
     * @param points 当前已经绘制的点坐标（不包括即将添加的点）
     */
    'prism.experimental_point_will_add': (item: Prism, point: THREE.Vector3, points: THREE.Vector3[]) => void;
    /**
     * @description prism 检测到自相交时的回调
     * @param item Prism 实例
     * @param point 尝试添加但被拒绝的点坐标
     */
    'prism.experimental_self_intersect': (item: Prism, point: THREE.Vector3) => void;
};
export declare class Sculpt extends Subscribe<Event> {
    static modules: {
        five: Five;
        config?: SculptConfig;
        _cursor?: import("./utils/Modules/Cursor").Cursor;
        _pointSelector?: import("../shared-utils").PointSelector;
        _fiveDomEvents?: import("../shared-utils").FiveDomEvents;
        _object3DHelper?: import("..").Object3DHelperController;
        inited: boolean;
        readonly cursor: import("./utils/Modules/Cursor").Cursor;
        readonly pointSelector: import("../shared-utils").PointSelector;
        readonly fiveDomEvents: import("../shared-utils").FiveDomEvents;
        readonly object3DHelper: import("..").Object3DHelperController;
        init: (five: Five, config?: SculptConfig) => void;
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
    theme: SculptType.Theme;
    config: SculptConfig;
    get items(): BuiltInItem[];
    private five;
    private creatingItem;
    constructor(five: Five, theme?: SculptType.Theme, config?: SculptConfig);
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
    createPoint(...params: Parameters<Point['create']>): Promise<any>;
    /**
     * @description: 开始绘制线段
     */
    createLine(...params: Parameters<Line['create']>): Promise<any>;
    /**
     * @deprecated use createLine instead
     */
    createline(...params: Parameters<Line['create']>): Promise<void>;
    /**
     * @description: 开始绘制空间折线
     */
    createPolyline(...params: Parameters<Polyline['create']>): Promise<any>;
    /**
     * @description: 开始绘制平面多边形
     */
    createPolygon(...params: Parameters<Polygon['create']>): Promise<any>;
    /**
     * @description: 开始绘制多棱柱
     */
    createPrism(...params: Parameters<Prism['create']>): Promise<any>;
    /**
     * @description: 开始绘制矩形
     */
    createRectangle(...params: Parameters<Rectangle['create']>): Promise<any>;
    /**
     * @description: 开始绘制圆形
     */
    createCircle(...params: Parameters<Circle['create']>): Promise<any>;
    /**
     * @description: 开始绘制圆柱
     */
    createCylinder(...params: Parameters<Cylinder['create']>): Promise<any>;
    /**
     * @description: 开始绘制 Box
     */
    createBox(...params: Parameters<Box['create']>): Promise<any>;
    canUndo(): boolean | void;
    canRedo(): boolean | void;
    /**
     * @description: 撤销
     */
    undo: () => void;
    /**
     * @description: 重做
     */
    redo: () => void;
    /**
     * @description: 清空数据
     */
    clear(): void;
    private createItem;
}
/**
 * @description: Sculpt 插件
 */
export declare const SculptPlugin: (five: Five, themeOrParams?: Partial<{
    point: Partial<import("./typings").PointStyle>;
    line: Partial<import("./typings").LineMeshStyle>;
    polyline: Partial<import("./typings").LineMeshStyle>;
    polygon: Partial<import("./typings").AreaStyle>;
    prism: Partial<import("./typings").PrismStyle>;
    rectangle: Partial<import("./typings").RectangleStyle>; /**
     * @description prism 检测到自相交时的回调
     * @param item Prism 实例
     * @param point 尝试添加但被拒绝的点坐标
     */
    circle: Partial<import("./typings").CircleStyle>;
    cylinder: Partial<import("./typings").CircleStyle>;
    box: Partial<import("./typings").BoxStyle>;
}> | {
    theme?: SculptType.Theme;
    config?: SculptConfig;
}, config?: SculptConfig) => Sculpt;
/**
 * @description: Sculpt 插件 - 适配Five插件系统的版本
 */
export declare const SculptPluginForFive: (five: Five, params?: {
    theme?: SculptType.Theme;
    config?: SculptConfig;
}) => Sculpt;
