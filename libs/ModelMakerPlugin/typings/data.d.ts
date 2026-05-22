/**
 * @description box 所带的数据详细类型
 */
export interface BoxItemObjectData {
    /** box 的其中一个顶点坐标 */
    start: number[];
    /** start 对角位置的顶点坐标 */
    end: number[];
    /** box 的欧拉角旋转，旋转顺序是 [XYZ] */
    rotation?: number[];
    /** 标注颜色 */
    color?: string;
    /** 透明度 */
    opacity?: number;
    /** 所在楼层 */
    floorIndex?: number;
    /** 绘制平面的三维世界坐标点数组 */
    points?: number[][];
    /** 其他信息 */
    [key: string]: any;
}
/**
 * @description triangles 所带的数据详细类型
 */
export interface TrianglesItemObjectData {
    /** 可见点位 */
    panoIndex?: number;
    /** 多边形的顶点坐标数组 */
    points: number[][];
    /** 标注颜色 */
    color?: string;
    /** 透明度 */
    opacity?: number;
    /** 其他信息 */
    [key: string]: any;
}
/**
 * @description prism 所带的数据详细类型
 */
export interface PrismItemObjectData {
    /** 绘制平面的三维世界坐标点数组 */
    points: number[][];
    /** 楼层高度 */
    height: number;
    /** 所在楼层 */
    floorIndex?: number;
    /** 人工设置的y坐标方向偏移 */
    fixedY?: number;
    /** 人工设置的高度修正 */
    fixedHeight?: number;
    /** 标注颜色 */
    color?: string;
    /** 透明度 */
    opacity?: number;
    /** 是否是危险区域 */
    isRiskyArea?: boolean;
    /** 关联VR ID列表 */
    related_resource_code_list?: string[];
    /** 空间编码 */
    space_code?: string;
    /** 其他信息 */
    [key: string]: any;
}
/**
 * @description 基础数据类型
 */
export interface ServerBaseItem<TObjectData = any> {
    /** 唯一标识 */
    id?: number;
    /** 标签名 */
    name?: string;
    /** 类型 */
    type: ItemType;
    /** 对象数据 */
    object_data: TObjectData;
    /** 其他信息 */
    [key: string]: any;
}
/**
 * @description 模型类型枚举
 */
export type ItemType = 'box' | 'triangles' | 'prism';
/**
 * @description box 数据类型
 */
export interface ServerBoxItem extends ServerBaseItem<BoxItemObjectData> {
    type: 'box';
}
/**
 * @description triangles 数据类型
 */
export interface ServerTrianglesItem extends ServerBaseItem<TrianglesItemObjectData> {
    type: 'triangles';
}
/**
 * @description prism 数据类型
 */
export interface ServerPrismItem extends ServerBaseItem<PrismItemObjectData> {
    type: 'prism';
}
/**
 * @description 所有 item 数据类型
 */
export type ServerItem = ServerBoxItem | ServerTrianglesItem | ServerPrismItem;
/**
 * @description 服务端存储数据类型
 */
export interface ServerData {
    list: ServerItem[];
}
