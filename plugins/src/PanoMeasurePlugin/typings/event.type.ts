import type { SubscribeEventMap } from '@realsee/five'
import type { Vector3 } from 'three'
import type { Mode } from '../Controller'
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

export type PluginEvent = ControllerEvent & EditEvent & WatchEvent & DragEvent
