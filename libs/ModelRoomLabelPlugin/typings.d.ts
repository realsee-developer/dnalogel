export interface ModelRoomLabelPluginData {
    model_room_labels: Readonly<{
        id: string;
        name: string;
        longitude: number;
        pano_index: number;
        floor_index: number;
        position: {
            x: number;
            y: number;
            z: number;
        };
    }>[];
}
export interface RoomLabel {
    /** 房屋 ID */
    readonly id: string;
    /** 房屋名 */
    readonly name: string;
    /** 走到对应 panoIndex 时 five 的水平角度 */
    readonly longitude: number;
    /** 点击标签会走到的 panoIndex */
    readonly panoIndex: number;
    /** 所处楼层 */
    readonly floorIndex: number;
    /** 引导标签的三维坐标，一般是房屋中心点 */
    readonly position: {
        x: number;
        y: number;
        z: number;
    };
    zIndex: number;
    visible: boolean;
    transform: string;
}
