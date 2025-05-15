/** 房屋数据映射表 */
export declare const ROOM_FETILE_TYPE_MAP: ({
    type: number;
    floorType: number;
    roomType: string;
    name: string;
    onlySubArea?: undefined;
} | {
    type: number;
    floorType: number;
    roomType: string;
    name: string;
    onlySubArea: boolean;
})[];
/** 地板信息映射表 */
export declare const FLOOR_TYPE_MAP: {
    type: number;
    description: string;
}[];
/** 房屋类型映射表 */
export declare const ROOM_TYPE_MAP: {
    roomType: string;
    description: string;
}[];
/** 户型图坐标，坐标原点时户型图中心点，单位是户型图单位 */
export interface FloorplanServerPosition {
    x: number;
    y: number;
}
/** 户型图图片坐标，坐标原点是图片左上角，取值范围是 [0, 1]，表示距离左上角的相对距离 */
export interface FloorplanServerImagePosition {
    x: number;
    y: number;
}
/** 户型图线框图 */
export interface FloorplanServerOutlineItem {
    url: string;
    index: number;
    checksum?: string;
    svg_url?: string;
}
/** 户型图入户门 */
export interface FloorplanServerEntrance {
    /** 入户门角度 */
    rad: number;
    /** 入户门所在的位置「户型图坐标系」 */
    position: FloorplanServerPosition;
    /** 入户门在户型图上相对坐标 */
    position_in_image: FloorplanServerImagePosition;
    /** 入户门与北的朝向 */
    north_rad: number;
    /** 入户门所在房间 ID */
    room_id: string;
    /** 入户门所楼层 */
    floor_index: number;
}
/** 户型图 FloorplanServerBounding
 * @description 坐标都是户型图坐标
 */
export interface FloorplanServerBounding {
    /** 户型图在 X 和 Y 轴上的最大值 */
    max: FloorplanServerPosition;
    /** 户型图在 X 和 Y 轴上的最小值 */
    min: FloorplanServerPosition;
    /** 户型图的中心位置 */
    origin: FloorplanServerPosition;
}
/** 户型图房屋标签 */
export interface FloorplanServerRoomLabelItem {
    /** 房间的中心点坐标 */
    position: FloorplanServerPosition;
    /** 房间的中心在户型图上的相对位置 */
    position_in_image: FloorplanServerImagePosition;
}
/** 户型图房间数据 */
export interface FloorplanServerRoomItem {
    id: string;
    /** 房间面积
     * @description 单位是平方毫米
     */
    size: number;
    /** 房屋类型
     * @description 对应关系参考上方 ROOM_DETAILS_TYPE_MAP
     */
    type: number;
    name: string;
    customizedName?: string;
    /** 围成房间区域的坐标路径
     * @description 坐标类型是户型图坐标
     */
    path: FloorplanServerPosition[];
    /** 房屋类型
     * @description 对应关系参考上方 ROOM_TYPE_MAP
     */
    room_type: string;
    /** 地板类型
     * @description 对应关系参考上方 FLOOR_TYPE_MAP
     */
    floor_type: number;
    room_label: FloorplanServerRoomLabelItem;
    /** 当前房间里的 observer 索引 */
    observer_indexs: number[];
    /** 当前房间的尺寸 */
    dimension?: {
        /** 房间宽度 */
        width: number;
        /** 房间高度 */
        height: number;
    };
}
export type FloorplanServerRuleLabels = Record<'top' | 'right' | 'bottom' | 'left', FloorplanServerPosition[][]>;
/** 当前楼层的数据 */
export interface FloorplanServerFloorData {
    floor_name: string;
    floor_index: number;
    rooms: FloorplanServerRoomItem[];
    rules: FloorplanServerRuleLabels;
    /** 是否存在墙线 */
    is_has_wall: boolean;
}
/** 对 observer 做一些样式上的计算
 * @description 每一个 FloorplanServer_observer 对应一个 observer
 * @description FloorplanServer_observer 和 observer 在自身数组中的索引坐标应该是相同的
 */
export interface FloorplanServerObserver {
    index: number;
    floor_index: number;
    position: FloorplanServerPosition;
    position_in_image: FloorplanServerImagePosition;
}
export interface FloorplanServerDoorPosition {
    x: number;
    y: number;
    z: number;
}
export interface FloorplanServerDoorItem {
    id: string;
    localName: string;
    name: string;
    position: FloorplanServerDoorPosition;
    rad: number;
}
export interface FloorplanServerComputedData {
    floor_datas: FloorplanServerFloorData[];
    entrance: FloorplanServerEntrance | null;
    bounding: FloorplanServerBounding;
    observers: FloorplanServerObserver[];
    doors: FloorplanServerDoorItem[];
}
/** 原始输入的户型图数据 */
export interface FloorplanServerData {
    outlines: FloorplanServerOutlineItem[];
    computed_data: FloorplanServerComputedData;
}
