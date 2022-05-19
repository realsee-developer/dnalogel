import { ModelRoomLabelPluginData, RoomLabel } from '../typings'

/** @description 下划线转驼峰 */
export function parseModelRoomLabelPluginData(data: ModelRoomLabelPluginData): RoomLabel[] {
  return data.model_room_labels.map(({ id, pano_index, floor_index, name, position, longitude }) => ({
    id,
    name,
    position,
    longitude,
    panoIndex: pano_index,
    floorIndex: floor_index,
    zIndex: 0,
    visible: false,
    transform: '',
  }))
}
