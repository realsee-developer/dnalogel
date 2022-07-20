/** 房屋数据映射表 */
export const ROOM_FETILE_TYPE_MAP = [
  { type: 0, floorType: 1, roomType: '100900000012', name: '其他' },
  { type: 1, floorType: 1, roomType: '100900000002', name: '客厅' },
  { type: 2, floorType: 1, roomType: '100900000002', name: '餐厅' },
  { type: 3, floorType: 0, roomType: '100900000001', name: '卧室' },
  { type: 4, floorType: 0, roomType: '100900000001', name: '书房' },
  { type: 5, floorType: 3, roomType: '100900000004', name: '卫生间' },
  { type: 6, floorType: 3, roomType: '100900000004', name: '淋浴间' },
  { type: 7, floorType: 3, roomType: '100900000004', name: '洗手间' },
  { type: 8, floorType: 3, roomType: '100900000003', name: '厨房' },
  {
    type: 9,
    floorType: 1,
    roomType: '100900000003',
    name: '开放厨房',
    onlySubArea: true,
  },
  { type: 10, floorType: 0, roomType: '100900000001', name: '多功能间' },
  { type: 11, floorType: 0, roomType: '100900000009', name: '保姆间' },
  { type: 12, floorType: 4, roomType: '100900000005', name: '阳台' },
  { type: 13, floorType: 4, roomType: '100900000006', name: '露台' },
  { type: 14, floorType: 0, roomType: '100900000008', name: '储物间' },
  { type: 15, floorType: 0, roomType: '100900000013', name: '衣帽间' },
  { type: 16, floorType: 0, roomType: '100900000011', name: '阁楼' },
  { type: 17, floorType: 2, roomType: '100900000007', name: '花园' },
  { type: 18, floorType: 5, roomType: '100900000010', name: '车库' },
  { type: 19, floorType: 1, roomType: '100900000012', name: '电梯' },
  { type: 20, floorType: 1, roomType: '100900000012', name: '地下室' },
  { type: 21, floorType: 1, roomType: '100900000012', name: '天井' },
  { type: 22, floorType: 1, roomType: '100900000012', name: '阳光房' },
  { type: 23, floorType: 1, roomType: '100900000012', name: '过道' },
  { type: 24, floorType: 1, roomType: '100900000012', name: '楼梯间' },
  { type: 25, floorType: 1, roomType: '100900000012', name: '门厅' },
  { type: 26, floorType: 2, roomType: '100900000012', name: '入户花园' },
  { type: 27, floorType: 1, roomType: '100900000012', name: '玄关' },
  { type: 28, floorType: 1, roomType: '100900000012', name: '挑空' },
  { type: 29, floorType: 4, roomType: '100900000012', name: '晾晒区' },
  { type: 30, floorType: 4, roomType: '100900000012', name: '洗衣房' },
  { type: 31, floorType: 0, roomType: '100900000012', name: '娱乐区' },
  { type: 32, floorType: 0, roomType: '100900000012', name: '健身区' },
  { type: 33, floorType: 0, roomType: '100900000012', name: '接待区' },
  { type: 34, floorType: 0, roomType: '100900000012', name: '影音区' },
  { type: 35, floorType: 1, roomType: '100900000012', name: '餐饮区' },
  {
    type: 36,
    floorType: 1,
    roomType: '100900000012',
    name: '其他',
    onlySubArea: true,
  },
  { type: 37, floorType: 1, roomType: '100900000002', name: '起居室' },
  { type: 38, floorType: 0, roomType: '100900000001', name: '主卧' },
  { type: 39, floorType: 0, roomType: '100900000001', name: '次卧' },
  { type: 40, floorType: 0, roomType: '100900000001', name: '优化间' },
  { type: 41, floorType: 0, roomType: '100900000001', name: '办公室' },
  { type: 42, floorType: 0, roomType: '100900000001', name: '会议室' },
  { type: 43, floorType: 0, roomType: '100900000001', name: '洽谈间' },
  { type: 44, floorType: 1, roomType: '100900000002', name: '共享大厅' },
  { type: 45, floorType: 1, roomType: '100900000012', name: '水吧' },
  { type: 46, floorType: 0, roomType: '100900000015', name: '出入口' },
  { type: 47, floorType: 0, roomType: '100900000015', name: '大厅' },
  { type: 48, floorType: 0, roomType: '100900000015', name: '包厢' },
  { type: 49, floorType: 0, roomType: '100900000015', name: '其他' },
  { type: 50, floorType: 0, roomType: '100900000016', name: '出入口' },
  { type: 51, floorType: 0, roomType: '100900000016', name: '办公区' },
  { type: 52, floorType: 0, roomType: '100900000016', name: '老板间' },
  { type: 53, floorType: 0, roomType: '100900000016', name: '会议室' },
  { type: 54, floorType: 0, roomType: '100900000016', name: '休息区/水吧' },
  { type: 55, floorType: 0, roomType: '100900000016', name: '其他' },
  { type: 56, floorType: 2, roomType: '100900000012', name: '空中花园' },
  { type: 57, floorType: 0, roomType: '100900000001', name: '洋室' },
  { type: 58, floorType: 0, roomType: '100900000001', name: '和室' },
]

/** 地板信息映射表 */
export const FLOOR_TYPE_MAP = [
  { type: 0, description: '木质地板' },
  { type: 1, description: '瓷砖地面' },
  { type: 2, description: '户外地面' },
  { type: 3, description: '卫生间地面' },
  { type: 4, description: '阳台地面' },
  { type: 5, description: '车库地面' },
]

/** 房屋类型映射表 */
export const ROOM_TYPE_MAP = [
  { roomType: '100900000001', description: '室' },
  { roomType: '100900000002', description: '厅' },
  { roomType: '100900000003', description: '厨' },
  { roomType: '100900000004', description: '卫' },
  { roomType: '100900000005', description: '阳台' },
  { roomType: '100900000006', description: '露台' },
  { roomType: '100900000007', description: '花园' },
  { roomType: '100900000008', description: '储' },
  { roomType: '100900000009', description: '保姆间' },
  { roomType: '100900000010', description: '车库' },
  { roomType: '100900000011', description: '阁楼' },
  { roomType: '100900000012', description: '其他' },
  { roomType: '100900000013', description: '衣' },
  { roomType: '100900000015', description: '商铺' },
  { roomType: '100900000016', description: '写字楼' },
]

/** 户型图坐标，坐标原点时户型图中心点，单位是户型图单位 */
export interface FloorplanServerPosition {
  x: number
  y: number
}

/** 户型图图片坐标，坐标原点是图片左上角，取值范围是 [0, 1]，表示距离左上角的相对距离 */
export interface FloorplanServerImagePosition {
  x: number
  y: number
}

/** 户型图线框图 */
export interface FloorplanServerOutlineItem {
  url: string
  index: number
  checksum?: string
  svg_url?: string
}

/** 户型图入户门 */
export interface FloorplanServerEntrance {
  /** 入户门角度 */
  rad: number
  /** 入户门所在的位置「户型图坐标系」 */
  position: FloorplanServerPosition
  /** 入户门在户型图上相对坐标 */
  position_in_image: FloorplanServerImagePosition
  /** 入户门与北的朝向 */
  north_rad: number
  /** 入户门所在房间 ID */
  room_id: string
  /** 入户门所楼层 */
  floor_index: number
}

/** 户型图 FloorplanServerBounding
 * @description 坐标都是户型图坐标
 */
export interface FloorplanServerBounding {
  /** 户型图在 X 和 Y 轴上的最大值 */
  max: FloorplanServerPosition
  /** 户型图在 X 和 Y 轴上的最小值 */
  min: FloorplanServerPosition
  /** 户型图的中心位置 */
  origin: FloorplanServerPosition
}

/** 户型图房屋标签 */
export interface FloorplanServerRoomLabelItem {
  /** 房间的中心点坐标 */
  position: FloorplanServerPosition
  /** 房间的中心在户型图上的相对位置 */
  position_in_image: FloorplanServerImagePosition
}

/** 户型图房间数据 */
export interface FloorplanServerRoomItem {
  id: string
  /** 房间面积
   * @description 单位是平方毫米
   */
  size: number
  /** 房屋类型
   * @description 对应关系参考上方 ROOM_DETAILS_TYPE_MAP
   */
  type: number
  name: string
  /** 围成房间区域的坐标路径
   * @description 坐标类型是户型图坐标
   */
  path: FloorplanServerPosition[]
  /** 房屋类型
   * @description 对应关系参考上方 ROOM_TYPE_MAP
   */
  room_type: string
  /** 地板类型
   * @description 对应关系参考上方 FLOOR_TYPE_MAP
   */
  floor_type: number
  room_label: FloorplanServerRoomLabelItem
  /** 当前房间里的 observer 索引 */
  observer_indexs: number[]
}

export type FloorplanServerRuleLabels = Record<'top' | 'right' | 'bottom' | 'left', FloorplanServerPosition[][]>

/** 当前楼层的数据 */
export interface FloorplanServerFloorData {
  floor_name: string
  floor_index: number
  rooms: FloorplanServerRoomItem[]
  rules: FloorplanServerRuleLabels
}

/** 对 observer 做一些样式上的计算
 * @description 每一个 FloorplanServer_observer 对应一个 observer
 * @description FloorplanServer_observer 和 observer 在自身数组中的索引坐标应该是相同的
 */
export interface FloorplanServerObserver {
  index: number
  floor_index: number
  position: FloorplanServerPosition
  position_in_image: FloorplanServerImagePosition
}

export interface FloorplanServerComputedData {
  floor_datas: FloorplanServerFloorData[]
  entrance: FloorplanServerEntrance | null
  bounding: FloorplanServerBounding
  observers: FloorplanServerObserver[]
}

/** 原始输入的户型图数据 */
export interface FloorplanServerData {
  outlines: FloorplanServerOutlineItem[]
  computed_data: FloorplanServerComputedData
}
