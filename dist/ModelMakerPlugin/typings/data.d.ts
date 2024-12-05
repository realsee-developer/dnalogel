export interface ServerData {
    list: (ServerBoxItem | ServerTrianglesItem | ServerPrismItem)[];
}
export interface ServerBaseItem {
    /** 唯一标识 */
    id?: number;
    /** 标签名 */
    name?: string;
}
export interface ServerBoxItem extends ServerBaseItem {
    type: 'box';
    object_data: {
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
    };
}
export interface ServerTrianglesItem extends ServerBaseItem {
    type: 'triangles';
    object_data: {
        /** 可见点位 */
        panoIndex?: number;
        /** 多边形的顶点坐标数组 */
        points: number[][];
        /** 标注颜色 */
        color?: string;
        /** 透明度 */
        opacity?: number;
    };
}
export interface ServerPrismItem extends ServerBaseItem {
    type: 'prism';
    object_data: {
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
    };
}
