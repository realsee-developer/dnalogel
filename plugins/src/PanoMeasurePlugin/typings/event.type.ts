import type { SubscribeEventMap } from '@realsee/five'
import type { Vector3 } from 'three'
import type { Mode } from '../Controller'
import type { State } from '../Controller/MixedController'
import type Point from '../Model/point'
import type { LineCompletelyJson } from './data'

interface ControllerEvent extends SubscribeEventMap {
  /**
   * Mode 变更
   */
  modeChange: (mode: Mode) => void
}

interface WatchEvent extends SubscribeEventMap {
  selectedChange: (lines: LineCompletelyJson[]) => void
}

interface EditEvent {
  /**
   * 编辑线条变更
   */
  editedLineChange: (lines: LineCompletelyJson[]) => void

  anchorChange: (anchor: Vector3 | null) => void
}

interface DragEvent extends SubscribeEventMap {
  wantsDragLine: (event: { point: string; lines: string[] }) => boolean
}

/** 移动端专用事件 */
interface MobileEvent extends SubscribeEventMap {
  getStartPoint: (point: Point) => void

  getEndPoint: (point: Point) => void

  willChangeState:( state: State, newState: State) => void

  nowPointChange: (point: Point) => void
}

export type PanoMeasurePluginEvent = ControllerEvent & EditEvent & WatchEvent & DragEvent & MobileEvent
