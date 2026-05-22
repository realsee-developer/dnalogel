/**
 * @file 对输入到户型图相关插件内的数据做 format 之后的数据
 * 1. 数据的下划线到驼峰的转换
 * 2. svg url 到 svg content 的处理
 */
import type { RecordKeys, RecordValue } from './utility';
/** 户型图坐标，坐标原点时户型图中心点，单位是户型图单位 */
export interface FloorplanPosition {
    x: number;
    y: number;
}
/** 户型图图片坐标，坐标原点是图片左上角，取值范围是 [0, 1]，表示距离左上角的相对距离 */
export interface FloorplanImagePosition {
    x: number;
    y: number;
}
/** 户型图线框图 */
export interface FloorplanOutlineItem {
    url: string;
    index: number;
    svgUrl?: string;
    svgContent?: string;
}
/** 户型图入户门 */
export interface FloorplanEntrance {
    /** 入户门角度 */
    rad: number;
    /** 入户门所在的位置「户型图坐标系」 */
    position: FloorplanPosition;
    /** 入户门在户型图上相对坐标 */
    positionInImage: FloorplanImagePosition;
    /** 入户门与北的朝向 */
    northRad: number;
    /** 入户门所在房间 ID */
    roomId: string;
    /** 入户门所楼层 */
    floorIndex: number;
}
/** 户型图 FloorplanBounding
 * @description 坐标都是户型图坐标
 */
export interface FloorplanBounding {
    /** 户型图在 X 和 Y 轴上的最大值 */
    max: FloorplanPosition;
    /** 户型图在 X 和 Y 轴上的最小值 */
    min: FloorplanPosition;
    /** 户型图的中心位置 */
    origin: FloorplanPosition;
}
/** 户型图房屋标签 */
export interface FloorplanRoomLabelItem {
    /** 房间的中心点坐标 */
    position: FloorplanPosition;
    /** 房间的中心在户型图上的相对位置 */
    positionInImage: FloorplanImagePosition;
}
/** 户型图房间数据 */
export interface FloorplanRoomItem {
    id: string;
    /** 房间面积
     * @description 单位是平方毫米
     */
    size: number;
    name: string;
    customizedName: string;
    /** 围成房间区域的坐标路径
     * @description 坐标类型是户型图坐标
     */
    path: FloorplanPosition[];
    /** 房屋类型
     * @description 对应关系参考上方 ROOM_TYPE_MAP
     */
    roomType: string;
    /** 地板类型
     * @description 对应关系参考上方 FLOOR_TYPE_MAP
     */
    floorType: number;
    roomLabel: FloorplanRoomLabelItem;
    /** 当前房间里的 observer 索引 */
    observerIndexs: number[];
    /** 当前房间的尺寸 */
    dimension?: {
        /** 房间宽度 */
        width: number;
        /** 房间高度 */
        height: number;
        vertical: Record<'x' | 'y', number>[];
        horizontal: Record<'x' | 'y', number>[];
    };
}
/** 户型图标尺 */
export type FloorplanRuleLabels = Record<'top' | 'right' | 'bottom' | 'left', FloorplanPosition[][]>;
export type RuleLabelsKey = RecordKeys<FloorplanRuleLabels>;
export type RuleLabelsValue = RecordValue<FloorplanRuleLabels>;
/** 当前楼层的数据 */
export interface FloorplanFloorData {
    floorName: string;
    floorIndex: number;
    rooms: FloorplanRoomItem[];
    rules: FloorplanRuleLabels;
    items?: any[];
    /** 是否存在墙线 */
    is_has_wall: boolean;
}
/** 对 observer 做一些样式上的计算
 * @description 每一个 floorplanObserver 对应一个 observer
 * @description floorplanObserver 和 observer 在自身数组中的索引坐标应该是相同的
 */
export interface FloorplanObserver {
    index: number;
    floorIndex: number;
    position: FloorplanPosition;
    positionInImage: FloorplanImagePosition;
}
/** 户型图内部使用的数据 */
export interface FloorplanData {
    outlines: FloorplanOutlineItem[];
    floorDatas: FloorplanFloorData[];
    entrance: FloorplanEntrance | null;
    bounding: FloorplanBounding;
    observers: FloorplanObserver[];
}
/** 能够映射到雷达图上的三维物体 */
export interface FloorplanExtraObject3D {
    id: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    icon?: {
        url: string;
        width: number;
        height: number;
    };
}
/** 添加到户型图上的额外物体 */
export interface FloorplanExtraObject {
    id: string;
    icon: {
        url: string;
        width: number;
        height: number;
    };
    floorIndex: number;
    /** 入户门所在的位置「户型图坐标系」 */
    position: FloorplanPosition;
    /** 入户门在户型图上相对坐标 */
    positionInImage: FloorplanImagePosition;
}
