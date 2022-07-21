import type { Five, Mode } from '@realsee/five'
import to from '../../shared-utils/to'
import { FloorplanErrorType } from '../utils/constant'
import nearlyEqual from '../../shared-utils/nearlyEqual'
import changeMode from '../../shared-utils/five/changeMode'

export interface ShowState {
  latitude: number
  longitude: number
  fov: number
  mode: Mode
}

/** 判断当前状态是否可以展示户型图 */
export function checkShowState(five: Five, showState: ShowState) {
  if (five.currentMode !== showState.mode) return false
  const { latitude, longitude, fov } = showState
  const { latitude: _latitude, longitude: _longitude } = five.getCurrentState()
  const _fov = five.camera.fov

  if (!nearlyEqual(latitude, _latitude, 2)) return false
  if (!nearlyEqual(longitude, _longitude, 2)) return false
  if (fov !== _fov) return false

  return true
}

/** 更改 Five 状态到展示户型图的状态
 * 1. 判断状态不符合时，会纠正到正确的状态
 * 2. 内置了相应的动画时间计算
 * 3. 纠正成功会返回 true，失败「可能会被用户行为中断」会返回 false
 */
export default async function correctFiveState(five: Five, showState: ShowState, userAction = true) {
  // 当前已满足状态，不需要变更
  const result = checkShowState(five, showState)
  if (result === true) return

  const currentFiveState = five.getCurrentState()

  // 纠正 mode
  if (currentFiveState.mode !== showState.mode) {
    const [changeModeError] = await to(changeMode(five, [showState.mode, showState, undefined, userAction]))
    if (changeModeError) throw new Error(FloorplanErrorType.ChangeModeError)
    return
  }

  // 纠正相机状态
  // 根据 latitude、longitude、fov 计算动画时间，最多 1s
  const { latitude, longitude, fov } = currentFiveState
  const time = Math.min(
    1000,
    Math.max(
      200,
      Math.abs(latitude - Math.PI / 2) * 1000,
      (longitude > Math.PI ? 2 * Math.PI - longitude : longitude) * 500,
      Math.abs(fov - showState.fov) * 10,
    ),
  )
  const [updateCameraError] = await to(five.updateCamera(showState, time, userAction))
  if (updateCameraError) throw new Error(FloorplanErrorType.UpdateCameraError)

  return
}
